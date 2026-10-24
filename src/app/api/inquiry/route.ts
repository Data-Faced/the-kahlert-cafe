import { NextResponse } from "next/server";

const RECIPIENTS = [
  "wsandish@gmail.com",
  "barbaram@richcroft.org",
  "barbarah@richcroft.org",
];

const EVENT_TYPES: Record<string, string> = {
  "office-lunch": "Office lunch",
  meeting: "Meeting / conference",
  celebration: "Celebration / party",
  other: "Other",
};

type Field = { key: string; label: string; max: number };

const FORMS: Record<string, { subject: string; fields: Field[] }> = {
  contact: {
    subject: "Contact Form - TheKahlertCafe.Com",
    fields: [
      { key: "name", label: "Name", max: 200 },
      { key: "email", label: "Email", max: 200 },
      { key: "phone", label: "Phone", max: 40 },
      { key: "message", label: "Message", max: 5000 },
    ],
  },
  catering: {
    subject: "Catering Form - TheKahlertCafe.Com",
    fields: [
      { key: "name", label: "Name", max: 200 },
      { key: "email", label: "Email", max: 200 },
      { key: "phone", label: "Phone", max: 40 },
      { key: "eventDate", label: "Event / pickup date", max: 40 },
      { key: "guestCount", label: "Number of guests", max: 10 },
      { key: "eventType", label: "Event type", max: 80 },
      { key: "pickupTime", label: "Preferred pickup time", max: 20 },
      { key: "dietary", label: "Dietary needs / special requests", max: 2000 },
      { key: "message", label: "Additional details", max: 5000 },
    ],
  },
};

function text(value: unknown, max: number) {
  return String(value ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .trim()
    .slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (text(body.hp_field, 200)) {
    return NextResponse.json({ ok: true });
  }

  const formKey = text(body.form, 20);
  const form = FORMS[formKey];
  if (!form) {
    return NextResponse.json({ error: "Unknown form." }, { status: 400 });
  }

  const values: Record<string, string> = {};
  for (const field of form.fields) {
    let value = text(body[field.key], field.max);
    if (field.key === "eventType" && EVENT_TYPES[value]) value = EVENT_TYPES[value];
    values[field.key] = value;
  }

  if (!values.name) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!values.email && !values.phone) {
    return NextResponse.json(
      { error: "Please provide an email address or phone number so we can reach you." },
      { status: 400 },
    );
  }
  if (values.email && !isEmail(values.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Form email is not configured.");
    return NextResponse.json(
      { error: "This form is not ready to send yet. Please call us and we will help." },
      { status: 503 },
    );
  }

  const lines = form.fields.map((field) => `${field.label}: ${values[field.key] || "—"}`);
  const payload: Record<string, unknown> = {
    from: "The Kahlert Café <hello@mail.thekahlertcafe.com>",
    to: RECIPIENTS,
    subject: form.subject,
    text: lines.join("\n"),
  };
  if (values.email) payload.reply_to = values.email;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again in a moment." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
