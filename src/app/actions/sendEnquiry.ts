"use server";

import nodemailer from "nodemailer";

export type EnquiryState = {
  success: boolean;
  message: string;
};

/**
 * Builds a plain-text + HTML email body from form data fields.
 * @author Cursor
 */
function buildEmailBody(fields: Record<string, string>): {
  text: string;
  html: string;
} {
  const { name, email, phone, service, details } = fields;

  const text = [
    `New enquiry from BrahmaStack website`,
    `─────────────────────────────────────`,
    `Name    : ${name}`,
    `Email   : ${email}`,
    `Phone   : ${phone || "—"}`,
    `Service : ${service || "—"}`,
    ``,
    `Details:`,
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
 * Server action: validates form data and sends an enquiry email via SMTP.
 * @author Cursor
 */
export async function sendEnquiry(
  _prev: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  const name    = (formData.get("name")    as string)?.trim();
  const email   = (formData.get("email")   as string)?.trim();
  const phone   = (formData.get("phone")   as string)?.trim();
  const service = (formData.get("service") as string)?.trim();
  const details = (formData.get("details") as string)?.trim();

  // Basic validation
  if (!name || !email) {
    return { success: false, message: "Name and email are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const { text, html } = buildEmailBody({ name, email, phone, service, details });

  try {
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST,
      port:   Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from:    `"BrahmaStack Website" <${process.env.SMTP_FROM}>`,
      to:      process.env.CONTACT_TO ?? "contact@brahmastack.com",
      replyTo: email,
      subject: `New enquiry from ${name} — BrahmaStack`,
      text,
      html,
    });

    return {
      success: true,
      message: "Message sent! We'll get back to you within 24 hours.",
    };
  } catch (err) {
    console.error("[sendEnquiry] SMTP error:", err);
    return {
      success: false,
      message: "Failed to send. Please email us directly at contact@brahmastack.com",
    };
  }
}
