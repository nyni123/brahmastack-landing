import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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
      <hr style="border-color:#222;margin:20px 0;" />
      <p style="color:#555;font-size:0.8rem;">Sent via brahmastack.com contact form · Reply directly to this email to respond to the enquiry.</p>
    </div>
  `;

  return { text, html };
}

/**
 * POST /api/send-enquiry — validates form data and sends via Resend API (HTTPS, works on Vercel).
 */
export async function POST(req: NextRequest) {
  // Guard: fail fast if API key is missing (not set in Vercel env vars)
  if (!process.env.RESEND_API_KEY) {
    console.error("[send-enquiry] RESEND_API_KEY is not set. Add it in Vercel → Settings → Environment Variables.");
    return NextResponse.json(
      { success: false, message: "Server configuration error. Please contact us at contact@brahmastack.com" },
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

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from:     "BrahmaStack <contact@brahmastack.com>",
      to:       ["contact@brahmastack.com"],
      replyTo:  email,
      subject:  `New enquiry from ${name} — BrahmaStack`,
      text,
      html,
    });

    if (error) {
      console.error("[send-enquiry] Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to send. Please email us at contact@brahmastack.com" },
        { status: 500 }
      );
    }

    console.log(`[send-enquiry] Email sent — id: ${data?.id} — from: ${name} <${email}>`);

    return NextResponse.json({
      success: true,
      message: "Message sent! We'll get back to you within 24 hours.",
    });
  } catch (err) {
    console.error("[send-enquiry] Unexpected error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to send. Please email us at contact@brahmastack.com" },
      { status: 500 }
    );
  }
}
