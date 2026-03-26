import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Builds plain-text + HTML email body from enquiry fields.
 */
function buildEmailBody(fields: Record<string, string>) {
  const { name, email, phone, service, details } = fields;

  const text = [
    "New enquiry from BrahmaStack website",
    "─────────────────────────────────────",
    `Name    : ${name}`,
    `Email   : ${email}`,
    `Phone   : ${phone || "—"}`,
    `Service : ${service || "—"}`,
    "",
    "Details:",
    details || "—",
  ].join("\n");

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0c0c0c;color:#fff;border-radius:12px;">
      <h2 style="color:#f5a623;margin-bottom:24px;">New Enquiry — BrahmaStack</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#999;width:120px;">Name</td><td style="padding:8px 0;">${name}</td></tr>
        <tr><td style="padding:8px 0;color:#999;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#f5a623;">${email}</a></td></tr>
        <tr><td style="padding:8px 0;color:#999;">Phone</td><td style="padding:8px 0;">${phone || "—"}</td></tr>
        <tr><td style="padding:8px 0;color:#999;">Service</td><td style="padding:8px 0;">${service || "—"}</td></tr>
      </table>
      <hr style="border-color:#222;margin:20px 0;" />
      <p style="color:#999;margin-bottom:8px;">Project Details:</p>
      <p style="white-space:pre-wrap;line-height:1.6;">${details || "—"}</p>
    </div>
  `;

  return { text, html };
}

/**
 * POST /api/send-enquiry — receives form data as JSON, sends email via SMTP.
 */
export async function POST(req: NextRequest) {
  // Guard: fail fast with a clear log if any required env var is missing.
  // On Vercel these must be added in Project → Settings → Environment Variables.
  const missingVars = (["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "SMTP_FROM"] as const).filter(
    (key) => !process.env[key]
  );
  if (missingVars.length > 0) {
    console.error("[send-enquiry] Missing env vars:", missingVars.join(", "));
    return NextResponse.json(
      { success: false, message: "Server configuration error. Please contact us directly at contact@brahmastack.com" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, phone, service, details } = body as Record<string, string>;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { text, html } = buildEmailBody({ name, email, phone, service, details });

    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST,
      port:   Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection before attempting to send
    await transporter.verify();

    await transporter.sendMail({
      from:    `"BrahmaStack Website" <${process.env.SMTP_FROM}>`,
      to:      process.env.CONTACT_TO ?? "contact@brahmastack.com",
      replyTo: email,
      subject: `New enquiry from ${name} — BrahmaStack`,
      text,
      html,
    });

    console.log(`[send-enquiry] Email sent successfully to ${process.env.CONTACT_TO} from ${name} <${email}>`);

    return NextResponse.json({
      success: true,
      message: "Message sent! We'll get back to you within 24 hours.",
    });
  } catch (err) {
    console.error("[send-enquiry] SMTP error:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send. Please email us at contact@brahmastack.com",
      },
      { status: 500 }
    );
  }
}
