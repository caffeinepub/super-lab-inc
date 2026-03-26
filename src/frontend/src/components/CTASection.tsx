export default function CTASection() {
  return (
    <section
      style={{
        position: "relative",
        padding: "120px 24px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15) saturate(0.5)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
        }}
      />
      <div
        className="grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative" }}>
        <div className="reveal">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "oklch(0.714 0.093 76)",
              marginBottom: "20px",
            }}
          >
            Begin Your Journey
          </p>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: "0.06em",
              color: "oklch(0.714 0.093 76)",
              marginBottom: "40px",
              textTransform: "uppercase",
            }}
          >
            Let’s Capture Your
            <br />
            <em style={{ fontStyle: "italic" }}>Special Moments</em>
          </h2>
          <button
            type="button"
            data-ocid="cta.primary_button"
            className="btn-gold"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Your Session
          </button>
        </div>
      </div>
    </section>
  );
}
