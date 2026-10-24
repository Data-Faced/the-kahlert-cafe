"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = (data.get("email") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();

    if (!email && !phone) {
      setError("Please provide an email address or phone number so we can reach you.");
      return;
    }

    setError("");
    setStatus("sending");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "contact",
          name: data.get("name"),
          email,
          phone,
          message: data.get("message"),
          hp_field: data.get("hp_field"),
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setError(typeof result.error === "string" ? result.error : "Something went wrong. Please try again.");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-green-50 border border-green-200 p-8 text-center">
        <p className="text-green-800 font-medium">Thank you! Your message has been received.</p>
        <p className="text-sm text-green-700 mt-2">A member of our team will get back to you soon.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-[#0F6397] underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border-b border-stone-300 focus:border-[#0F6397] focus:outline-none py-2 bg-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border-b border-stone-300 focus:border-[#0F6397] focus:outline-none py-2 bg-transparent"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full border-b border-stone-300 focus:border-[#0F6397] focus:outline-none py-2 bg-transparent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border-b border-stone-300 focus:border-[#0F6397] focus:outline-none py-2 bg-transparent resize-none"
        />
      </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-hp">Leave this field blank</label>
        <input id="contact-hp" name="hp_field" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="text-xs text-stone-500">
        Name is required. Please provide either an email or phone number so we can follow up.
      </p>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[#0F6397] hover:bg-[#0d5580] disabled:opacity-60 text-white px-8 py-3 font-semibold transition-colors"
      >
        {status === "sending" ? "Sending…" : "SUBMIT"}
      </button>
    </form>
  );
}
