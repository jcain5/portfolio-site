"use client";
import { useState, type FormEvent } from "react";

const REASONS = [
  "Job opportunity",
  "Recruiter inquiry",
  "Professional networking",
  "Project question",
  "Other",
];

const FALLBACK_EMAIL = "jobs@jeremymcain.com";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-border bg-white px-4 py-2.5 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[#2F75C8]/40 focus:border-[#2F75C8] transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setErrorMessage("");

    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      reason: String(data.get("reason") ?? ""),
      message: String(data.get("message") ?? ""),
      hpConfirm: String(data.get("hp_confirm") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-border bg-canvas p-8 text-center max-w-xl mx-auto"
      >
        <p className="font-heading text-lg font-semibold text-ink mb-2">Message sent</p>
        <p className="text-body">Thanks for reaching out — I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-5 max-w-xl mx-auto">
      {/* Honeypot — hidden from sighted and screen-reader users; bots that
          auto-fill every field will trip it. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden">
        <label htmlFor="hp_confirm">Leave this field blank</label>
        <input type="text" id="hp_confirm" name="hp_confirm" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
            Name
          </label>
          <input id="name" name="name" type="text" required minLength={2} autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-ink mb-1.5">
          Reason
        </label>
        <select id="reason" name="reason" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a reason
          </option>
          {REASONS.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ink mb-1.5">
          Subject
        </label>
        <input id="subject" name="subject" type="text" required minLength={2} className={fieldClass} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          Message
        </label>
        <textarea id="message" name="message" required minLength={10} rows={5} className={fieldClass} />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          {errorMessage}{" "}
          <a href={`mailto:${FALLBACK_EMAIL}`} className="underline font-medium">
            Email {FALLBACK_EMAIL} directly.
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2F75C8] text-white font-semibold rounded-lg hover:bg-[#265f9f] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
