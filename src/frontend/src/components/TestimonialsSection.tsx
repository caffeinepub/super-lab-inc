import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Super Lab Inc captured our wedding beyond imagination. Every frame tells a story. The artistry, the emotion — we are speechless.",
    author: "Priya & Arjun",
    role: "Wedding Clients",
  },
  {
    quote:
      "The portrait session was an experience in itself. Truly world-class photography. They made us feel completely at ease.",
    author: "Meera S.",
    role: "Portrait Client",
  },
  {
    quote:
      "Professional, creative, and incredibly talented. Our event photos were stunning — beyond anything we expected.",
    author: "Rohit K.",
    role: "Corporate Event",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = Array.from(
      el.querySelectorAll(".test-card"),
    ) as HTMLElement[];
    for (const card of cards) {
      card.style.opacity = "0";
      card.style.transform = "translateY(24px)";
      card.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            cards.forEach((card, i) =>
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, i * 150),
            );
          }
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      style={{
        padding: "100px 24px",
        background: "oklch(0.09 0 0)",
        borderTop: "1px solid oklch(0.14 0 0)",
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
            Client Stories
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
            Testimonials
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
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              data-ocid={`testimonials.item.${i + 1}`}
              className="test-card"
              style={{
                background: "oklch(0.11 0 0)",
                border: "1px solid oklch(0.18 0 0)",
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "4rem",
                  lineHeight: 0.8,
                  color: "oklch(0.714 0.093 76 / 0.4)",
                  fontWeight: 300,
                }}
              >
                “
              </div>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "1.05rem",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "oklch(0.88 0 0)",
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                {t.quote}
              </p>
              <div
                style={{
                  borderTop: "1px solid oklch(0.18 0 0)",
                  paddingTop: "16px",
                }}
              >
                <div
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: "0.95rem",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                    color: "oklch(0.714 0.093 76)",
                    marginBottom: "4px",
                  }}
                >
                  — {t.author}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "10px",
                    fontWeight: 300,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "oklch(0.45 0 0)",
                  }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
