import { useState } from "react";
import { useActor } from "../hooks/useActor";

const WhatsAppIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

type ActorWithContact = {
  submitContact: (
    name: string,
    email: string,
    message: string,
  ) => Promise<{ ok: boolean; message: string }>;
};

const labelStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: "10px",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "oklch(0.50 0 0)",
  display: "block",
  marginBottom: "6px",
};

export default function ContactSection() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message || !actor) return;
    setStatus("loading");
    try {
      const typedActor = actor as unknown as ActorWithContact;
      const result = await typedActor.submitContact(name, email, message);
      if (result.ok) {
        setStatus("success");
        setStatusMsg(
          result.message ||
            "Your message has been sent. We'll be in touch soon.",
        );
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setStatusMsg(
          result.message || "Something went wrong. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setStatusMsg("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        background: "oklch(0.07 0 0)",
        borderTop: "1px solid oklch(0.14 0 0)",
      }}
    >
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "oklch(0.714 0.093 76)",
              marginBottom: "12px",
            }}
          >
            Start a Conversation
          </p>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "oklch(0.95 0 0)",
            }}
          >
            Get in Touch
          </h2>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "oklch(0.714 0.093 76)",
              margin: "16px auto 0",
            }}
          />
        </div>
        <form
          data-ocid="contact.panel"
          onSubmit={handleSubmit}
          className="reveal"
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div>
            <label htmlFor="contact-name" style={labelStyle}>
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              data-ocid="contact.input"
              className="form-input"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="contact-email" style={labelStyle}>
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              data-ocid="contact.input"
              className="form-input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="contact-message" style={labelStyle}>
              Message
            </label>
            <textarea
              id="contact-message"
              data-ocid="contact.textarea"
              className="form-input"
              placeholder="Tell us about your vision..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              style={{ resize: "vertical" }}
            />
          </div>
          {status === "success" && (
            <div
              data-ocid="contact.success_state"
              style={{
                padding: "14px 16px",
                border: "1px solid oklch(0.714 0.093 76 / 0.3)",
                background: "oklch(0.714 0.093 76 / 0.05)",
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                color: "oklch(0.714 0.093 76)",
                letterSpacing: "0.05em",
              }}
            >
              {statusMsg}
            </div>
          )}
          {status === "error" && (
            <div
              data-ocid="contact.error_state"
              style={{
                padding: "14px 16px",
                border: "1px solid oklch(0.577 0.245 27.325 / 0.3)",
                background: "oklch(0.577 0.245 27.325 / 0.05)",
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                color: "oklch(0.75 0.18 27)",
                letterSpacing: "0.05em",
              }}
            >
              {statusMsg}
            </div>
          )}
          <button
            type="submit"
            data-ocid="contact.submit_button"
            className="btn-gold"
            disabled={status === "loading" || !actor}
            style={{ marginTop: "8px" }}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "40px",
            paddingTop: "32px",
            borderTop: "1px solid oklch(0.18 0 0)",
          }}
        >
          <SocialButton
            href="https://wa.me/"
            label="WhatsApp"
            hoverColor="#25D366"
          >
            <WhatsAppIcon />
          </SocialButton>
          <SocialButton
            href="https://instagram.com/"
            label="Instagram"
            hoverColor="#E1306C"
          >
            <InstagramIcon />
          </SocialButton>
        </div>
      </div>
    </section>
  );
}

function SocialButton({
  href,
  label,
  hoverColor,
  children,
}: {
  href: string;
  label: string;
  hoverColor: string;
  children: React.ReactNode;
}) {
  const baseStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 24px",
    border: "1px solid oklch(0.25 0 0)",
    fontFamily: "Inter, sans-serif",
    fontSize: "10px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "oklch(0.60 0 0)",
    textDecoration: "none",
    transition: "border-color 0.2s ease, color 0.2s ease",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="contact.secondary_button"
      aria-label={label}
      style={baseStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = hoverColor;
        e.currentTarget.style.color = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "oklch(0.25 0 0)";
        e.currentTarget.style.color = "oklch(0.60 0 0)";
      }}
    >
      {children}
      {label}
    </a>
  );
}
