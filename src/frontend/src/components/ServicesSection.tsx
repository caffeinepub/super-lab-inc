import { useEffect, useRef } from "react";

const CameraIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const StarIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const PersonIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const services = [
  {
    title: "Wedding Photography",
    desc: "Timeless moments crafted with elegance and care. We tell your love story through light, emotion, and artistry.",
    Icon: CameraIcon,
  },
  {
    title: "Event Coverage",
    desc: "Dynamic storytelling for every milestone. From corporate galas to intimate gatherings, every moment preserved.",
    Icon: StarIcon,
  },
  {
    title: "Portrait Shoots",
    desc: "Authentic portraits that capture your true essence. We create images that reveal the depth of your story.",
    Icon: PersonIcon,
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = Array.from(
      el.querySelectorAll(".service-reveal"),
    ) as HTMLElement[];
    for (const card of cards) {
      card.style.opacity = "0";
      card.style.transform = "translateY(28px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            cards.forEach((card, i) =>
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, i * 120),
            );
          }
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      style={{
        padding: "100px 24px",
        background: "oklch(0.09 0 0)",
        borderTop: "1px solid oklch(0.15 0 0)",
        borderBottom: "1px solid oklch(0.15 0 0)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "64px" }}
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
            What We Offer
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
            Our Services
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
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card service-reveal"
              style={{
                background: "oklch(0.11 0 0)",
                border: "1px solid oklch(0.20 0 0)",
                padding: "48px 36px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  border: "1px solid oklch(0.714 0.093 76 / 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "oklch(0.714 0.093 76)",
                  flexShrink: 0,
                }}
              >
                <service.Icon />
              </div>
              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "oklch(0.714 0.093 76)",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "oklch(0.60 0 0)",
                  maxWidth: "260px",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
