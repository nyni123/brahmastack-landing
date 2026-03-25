"use client";

import { useState, useRef } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

/**
 * Contact block + demo form (shared by home and /contact).
 * Submits via AJAX to /api/send-enquiry — no page reload.
 */
export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  /** Collects form fields and POSTs as JSON — no navigation. */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = {
      name:    (form.elements.namedItem("name")    as HTMLInputElement).value.trim(),
      email:   (form.elements.namedItem("email")   as HTMLInputElement).value.trim(),
      phone:   (form.elements.namedItem("phone")   as HTMLInputElement).value.trim(),
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      details: (form.elements.namedItem("details") as HTMLTextAreaElement).value.trim(),
    };

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.success) {
        setStatus("success");
        setMessage(json.message);
        formRef.current?.reset();
      } else {
        setStatus("error");
        setMessage(json.message);
      }
    } catch {
      setStatus("error");
      setMessage("Failed to send. Please email us at contact@brahmastack.com");
    }
  }

  const disabled = status === "sending" || status === "success";

  return (
    <section id="contact" className="page-contact-section">
      <div className="sec-center reveal">
        <span className="sec-label">Contact Us</span>
        <h2 className="sec-title">Get In Touch</h2>
        <p className="sec-desc">
          Request a free consultation—we typically reply within 24 hours.
        </p>
      </div>
      <div className="contact-wrap reveal">
        <div className="contact-info">
          <h3>Ready to Start Your Project?</h3>
          <p>
            Whether you have a rough idea or a full brief, we can help. Send a
            message and we will take it from there.
          </p>
          <div className="c-links">
            <a href="mailto:contact@brahmastack.com" className="c-link">
              <div className="c-link-icon">📧</div>
              <div>
                <span className="c-link-lbl">Email</span>
                <span className="c-link-val">contact@brahmastack.com</span>
              </div>
            </a>
            <a href="tel:+918107687699" className="c-link">
              <div className="c-link-icon">📞</div>
              <div>
                <span className="c-link-lbl">Phone / WhatsApp</span>
                <span className="c-link-val">+91 81076 87699</span>
              </div>
            </a>
            <div className="c-link">
              <div className="c-link-icon">📍</div>
              <div>
                <span className="c-link-lbl">Location</span>
                <span className="c-link-val">Jaipur, Rajasthan, India</span>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/company/brahmastack-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="c-link"
            >
              <div className="c-link-icon">💼</div>
              <div>
                <span className="c-link-lbl">LinkedIn</span>
                <span className="c-link-val">brahmastack-technologies</span>
              </div>
            </a>
          </div>
        </div>

        <div className="cform">
          <div className="cform-title">✦ Request a Free Demo</div>

          {status === "success" && (
            <div className="form-banner form-banner--success">✅ {message}</div>
          )}
          {status === "error" && (
            <div className="form-banner form-banner--error">⚠️ {message}</div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} method="post" noValidate>
            <div className="frow">
              <div className="ff">
                <label>Your name</label>
                <input type="text" placeholder="e.g. John Smith" name="name" autoComplete="name" required disabled={disabled} />
              </div>
              <div className="ff">
                <label>Email</label>
                <input type="email" placeholder="john@yourcompany.com" name="email" autoComplete="email" required disabled={disabled} />
              </div>
            </div>
            <div className="frow">
              <div className="ff">
                <label>Phone</label>
                <input type="tel" placeholder="+1 555 000 1234" name="phone" autoComplete="tel" disabled={disabled} />
              </div>
              <div className="ff">
                <label>What do you need?</label>
                <select defaultValue="" name="service" disabled={disabled}>
                  <option value="">Select an option…</option>
                  <option>Website development</option>
                  <option>E-commerce store</option>
                  <option>Mobile app</option>
                  <option>SaaS product</option>
                  <option>API integration</option>
                  <option>AI / automation</option>
                </select>
              </div>
            </div>
            <div className="frow">
              <div className="ff full">
                <label>Project details</label>
                <textarea
                  name="details"
                  placeholder="e.g. I need a web app for managing client bookings with payment integration. Budget ~$5k, looking to launch in 3 months."
                  disabled={disabled}
                />
              </div>
            </div>
            <button type="submit" className="fsubmit" disabled={disabled}>
              {status === "sending"
                ? "Sending…"
                : status === "success"
                ? "Message sent ✓"
                : "Send message — free consultation →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
