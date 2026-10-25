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
};

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatPrice(price: number | null | undefined) {
  if (price == null || Number.isNaN(price)) return "";
  return `$${price.toFixed(2)}`;
}

function collectItems(group: ToastMenuGroup): MenuItem[] {
  const items: MenuItem[] = [];
  for (const item of group.menuItems || []) {
    if (!item.name) continue;
    const visibility = item.visibility || [];
    if (visibility.length && !visibility.includes("ORDERING_PARTNERS") && !visibility.includes("POS") && !visibility.includes("ALL")) {
      // still include; Toast visibility values vary
    }
    items.push({
      name: item.name,
      desc: item.description || undefined,
      price: formatPrice(item.price),
    });
  }
  for (const child of group.menuGroups || []) {
    items.push(...collectItems(child));
  }
  return items;
}

function toSections(data: ToastMenusResponse): MenuSection[] {
  const sections: MenuSection[] = [];
  for (const menu of data.menus || []) {
    const groups = menu.menuGroups || [];
    if (!groups.length) continue;
    for (const group of groups) {
      const items = collectItems(group);
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
