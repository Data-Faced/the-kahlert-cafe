export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  outOfStock?: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  items: MenuItem[];
};

type ToastMenuItem = {
  name?: string;
  description?: string;
  price?: number | null;
  visibility?: string[];
  pricingStrategy?: string;
  pricingRules?: { sizeSpecificPricingGuid?: string | null } | null;
  modifierGroupReferences?: number[];
};

type ToastModifierOption = {
  name?: string;
  price?: number | null;
  referenceId?: number;
};

type ToastModifierGroup = {
  guid?: string;
  name?: string;
  modifierOptionReferences?: number[];
};

type ToastMenuGroup = {
  name?: string;
  menuItems?: ToastMenuItem[];
  menuGroups?: ToastMenuGroup[];
};

type ToastMenu = {
  name?: string;
  menuGroups?: ToastMenuGroup[];
};

type ToastMenusResponse = {
  menus?: ToastMenu[];
  modifierGroupReferences?: Record<string, ToastModifierGroup>;
  modifierOptionReferences?: Record<string, ToastModifierOption>;
};

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatPrice(price: number | null | undefined, withPlus = false) {
  if (price == null || Number.isNaN(price)) return "";
  return `$${price.toFixed(2)}${withPlus ? "+" : ""}`;
}

function sizePrices(
  item: ToastMenuItem,
  groups: Record<string, ToastModifierGroup>,
  options: Record<string, ToastModifierOption>
) {
  const guid = item.pricingRules?.sizeSpecificPricingGuid;
  if (!guid) return [];
  const group = Object.values(groups).find((entry) => entry.guid === guid);
  if (!group) return [];
  const prices: number[] = [];
  for (const ref of group.modifierOptionReferences || []) {
    const option = options[String(ref)];
    if (option?.price != null && !Number.isNaN(option.price)) prices.push(option.price);
  }
  return prices;
}

function resolvePrice(
  item: ToastMenuItem,
  groups: Record<string, ToastModifierGroup>,
  options: Record<string, ToastModifierOption>
) {
  if (item.price != null && !Number.isNaN(item.price)) return formatPrice(item.price);
  const prices = sizePrices(item, groups, options);
  if (!prices.length) return "";
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return formatPrice(min, max > min);
}

function collectItems(
  group: ToastMenuGroup,
  groups: Record<string, ToastModifierGroup>,
  options: Record<string, ToastModifierOption>
): MenuItem[] {
  const items: MenuItem[] = [];
  for (const item of group.menuItems || []) {
    if (!item.name) continue;
    items.push({
      name: item.name,
      desc: item.description || undefined,
      price: resolvePrice(item, groups, options),
    });
  }
  for (const child of group.menuGroups || []) {
    items.push(...collectItems(child, groups, options));
  }
  return items;
}

function toSections(data: ToastMenusResponse): MenuSection[] {
  const groups = data.modifierGroupReferences || {};
  const options = data.modifierOptionReferences || {};
  const sections: MenuSection[] = [];
  for (const menu of data.menus || []) {
    const menuGroups = menu.menuGroups || [];
    if (!menuGroups.length) continue;
    for (const group of menuGroups) {
      const items = collectItems(group, groups, options);
      if (!items.length) continue;
      const title = group.name || menu.name || "Menu";
      sections.push({
        id: slug(title),
        title,
        items,
      });
    }
  }
  return sections;
}

async function getToken(hostname: string, clientId: string, clientSecret: string) {
  const res = await fetch(`${hostname}/authentication/v1/authentication/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      clientId,
      clientSecret,
      userAccessType: "TOAST_MACHINE_CLIENT",
    })
  });
  if (!res.ok) {
    throw new Error(`Toast auth failed: ${res.status}`);
  }
  const data = (await res.json()) as { token?: { accessToken?: string }; accessToken?: string };
  const token = data.token?.accessToken || data.accessToken;
  if (!token) throw new Error("Toast auth returned no token");
  return token;
}

export async function getToastMenu(): Promise<MenuSection[] | null> {
  "use cache";
  const { cacheLife } = await import("next/cache");
  cacheLife("minutes");

  const hostname = process.env.TOAST_API_HOSTNAME;
  const clientId = process.env.TOAST_CLIENT_ID;
  const clientSecret = process.env.TOAST_CLIENT_SECRET;
  const restaurantGuid = process.env.TOAST_RESTAURANT_GUID;

  if (!hostname || !clientId || !clientSecret || !restaurantGuid) return null;

  try {
    const token = await getToken(hostname, clientId, clientSecret);
    const res = await fetch(`${hostname}/menus/v2/menus`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Toast-Restaurant-External-ID": restaurantGuid,
      }
    });
    if (!res.ok) {
      throw new Error(`Toast menus failed: ${res.status}`);
    }
    const data = (await res.json()) as ToastMenusResponse;
    const sections = toSections(data);
    return sections.length ? sections : null;
  } catch (err) {
    console.error("Toast menu fetch failed", err);
    return null;
  }
}
