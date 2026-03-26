export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606216794079-73cbac0a33ea?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.88) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "820px",
        }}
      >
        <p
          className="hero-animate hero-delay-1"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "10px",
            fontWeight: 400,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "oklch(0.714 0.093 76)",
            marginBottom: "24px",
            marginTop: "48px",
          }}
        >
          Premium Photography
        </p>
        <h1
          className="hero-animate hero-delay-2"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "oklch(0.714 0.093 76)",
            marginBottom: "20px",
          }}
        >
          Capture Moments
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 300 }}>
            Like Never Before
          </em>
        </h1>
        <p
          className="hero-animate hero-delay-3"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 300,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "oklch(0.80 0 0)",
            marginBottom: "48px",
          }}
        >
          Super Lab Inc – Premium Photography Experience
        </p>
        <div
          className="hero-animate hero-delay-4"
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            data-ocid="hero.primary_button"
            className="btn-gold"
            onClick={() => scrollTo("portfolio")}
          >
            View Portfolio
          </button>
          <button
            type="button"
            data-ocid="hero.secondary_button"
            className="btn-gold"
            onClick={() => scrollTo("contact")}
          >
            Book Now
          </button>
        </div>
      </div>
      <div
        className="hero-animate hero-delay-4"
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "9px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "oklch(0.45 0 0)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, oklch(0.714 0.093 76), transparent)",
          }}
        />
      </div>
    </section>
  );
}
