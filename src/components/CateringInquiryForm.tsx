"use client";

import { useState } from "react";

export default function CateringInquiryForm() {
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
          form: "catering",
          name: data.get("name"),
          email,
          phone,
          eventDate: data.get("eventDate"),
          guestCount: data.get("guestCount"),
          eventType: data.get("eventType"),
          pickupTime: data.get("pickupTime"),
          dietary: data.get("dietary"),
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
        <p className="text-green-800 font-medium">Thank you! Your catering inquiry has been received.</p>
        <p className="text-sm text-green-700 mt-2">Barbara or a team member will follow up shortly.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-[#0F6397] underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="catering-name" className="block text-sm font-medium text-stone-700 mb-1">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="catering-name"
            name="name"
            type="text"
            required
            className="w-full border-b border-stone-300 focus:border-[#0F6397] focus:outline-none py-2 bg-transparent"
          />
        </div>
        <div>
          <label htmlFor="catering-email" className="block text-sm font-medium text-stone-700 mb-1">
            Email address
          </label>
          <input
            id="catering-email"
            name="email"
            type="email"
            className="w-full border-b border-stone-300 focus:border-[#0F6397] focus:outline-none py-2 bg-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="catering-phone" className="block text-sm font-medium text-stone-700 mb-1">
          Phone number
        </label>
        <input
          id="catering-phone"
          name="phone"
          type="tel"
          className="w-full border-b border-stone-300 focus:border-[#0F6397] focus:outline-none py-2 bg-transparent"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="event-date" className="block text-sm font-medium text-stone-700 mb-1">
            Event / pickup date
          </label>
          <input
            id="event-date"
            name="eventDate"
            type="date"
            className="w-full border-b border-stone-300 focus:border-[#0F6397] focus:outline-none py-2 bg-transparent"
          />
        </div>
        <div>
          <label htmlFor="guest-count" className="block text-sm font-medium text-stone-700 mb-1">
            Number of guests
          </label>
          <input
            id="guest-count"
            name="guestCount"
            type="number"
            min={10}
            placeholder="Min. 10"
            className="w-full border-b border-stone-300 focus:border-[#0F6397] focus:outline-none py-2 bg-transparent"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="event-type" className="block text-sm font-medium text-stone-700 mb-1">
            Event type
          </label>
          <select
            id="event-type"
            name="eventType"
            className="w-full border-b border-stone-300 focus:border-[#0F6397] focus:outline-none py-2 bg-transparent"
          >
            <option value="">Select...</option>
            <option value="office-lunch">Office lunch</option>
            <option value="meeting">Meeting / conference</option>
            <option value="celebration">Celebration / party</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="pickup-time" className="block text-sm font-medium text-stone-700 mb-1">
            Preferred pickup time
          </label>
          <input
            id="pickup-time"
            name="pickupTime"
            type="time"
            className="w-full border-b border-stone-300 focus:border-[#0F6397] focus:outline-none py-2 bg-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="dietary" className="block text-sm font-medium text-stone-700 mb-1">
          Dietary needs / special requests
        </label>
        <textarea
          id="dietary"
          name="dietary"
          rows={2}
          placeholder="Gluten-free, vegetarian, allergies, etc."
          className="w-full border-b border-stone-300 focus:border-[#0F6397] focus:outline-none py-2 bg-transparent resize-none"
        />
      </div>

      <div>
        <label htmlFor="catering-message" className="block text-sm font-medium text-stone-700 mb-1">
          Additional details
        </label>
        <textarea
          id="catering-message"
          name="message"
          rows={3}
          placeholder="Menu preferences, setup notes, or anything else we should know"
          className="w-full border-b border-stone-300 focus:border-[#0F6397] focus:outline-none py-2 bg-transparent resize-none"
        />
      </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="hidden" aria-hidden="true">
        <label htmlFor="catering-hp">Leave this field blank</label>
        <input id="catering-hp" name="hp_field" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="text-xs text-stone-500">
        Name is required. Please provide either an email or phone number so we can follow up.
      </p>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[#0F6397] hover:bg-[#0d5580] disabled:opacity-60 text-white px-8 py-3 font-semibold transition-colors"
      >
        {status === "sending" ? "Sending…" : "Submit Catering Inquiry"}
      </button>
    </form>
  );
}
