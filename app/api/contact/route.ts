import { NextResponse } from "next/server";
import { Resend } from "resend";

const REASONS = [
  "Job opportunity",
  "Recruiter inquiry",
  "Professional networking",
  "Project question",
  "Other",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  reason: string;
  message: string;
  // Honeypot: real visitors never see or fill this field.
  hpConfirm: string;
}

function isReason(value: string): value is (typeof REASONS)[number] {
  return (REASONS as readonly string[]).includes(value);
}

export async function POST(req: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { name, email, subject, reason, message, hpConfirm } = body;

  // Honeypot tripped — pretend success so bots don't learn to avoid this field.
  if (typeof hpConfirm === "string" && hpConfirm.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    name.trim().length < 2 ||
    typeof email !== "string" ||
    !EMAIL_RE.test(email.trim()) ||
    typeof subject !== "string" ||
    subject.trim().length < 2 ||
    typeof reason !== "string" ||
    !isReason(reason) ||
    typeof message !== "string" ||
    message.trim().length < 10
  ) {
    return NextResponse.json(
      { ok: false, error: "Please fill in every field and try again." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error(
      "Contact form is missing RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL."
    );
    return NextResponse.json(
      { ok: false, error: "Message could not be sent right now." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email.trim(),
    subject: `[${reason}] ${subject.trim()}`,
    text: `From: ${name.trim()} <${email.trim()}>\nReason: ${reason}\n\n${message.trim()}`,
  });

  if (error) {
    console.error("Resend failed to send contact message:", error);
    return NextResponse.json(
      { ok: false, error: "Message could not be sent right now." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
