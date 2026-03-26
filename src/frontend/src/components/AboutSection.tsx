import { useEffect, useRef } from "react";

export default function AboutSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;
    left.classList.add("reveal-left");
    right.classList.add("reveal-right");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(left);
    observer.observe(right);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      style={{ padding: "100px 24px", background: "oklch(0.07 0 0)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "72px" }}
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
            Our Story
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
            About Us
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
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
            alignItems: "center",
          }}
        >
          <div ref={leftRef} style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
              alt="Super Lab Inc photographer at work"
              style={{
                width: "100%",
                aspectRatio: "4/5",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-16px",
                right: "-16px",
                width: "60%",
                height: "3px",
                background: "oklch(0.714 0.093 76)",
              }}
            />
          </div>
          <div
            ref={rightRef}
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            <h3
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 300,
                lineHeight: 1.2,
                letterSpacing: "0.04em",
                color: "oklch(0.93 0 0)",
              }}
            >
              Founded on a Single Belief —
              <br />
              <em style={{ color: "oklch(0.714 0.093 76)" }}>
                Every Moment Deserves Artistry
              </em>
            </h3>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: 2,
                color: "oklch(0.58 0 0)",
              }}
            >
              Super Lab Inc was founded on a single belief — that every moment
              deserves to be immortalized with artistry and intention. Based in
              the heart of the city, our team of visionary photographers brings
              technical mastery and creative passion to every shoot.
            </p>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: 2,
                color: "oklch(0.58 0 0)",
              }}
            >
              From intimate portraits to grand weddings, we craft images that
              transcend time. Each frame is a testament to the beauty of the
              moment and the skill of our artists.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
                borderTop: "1px solid oklch(0.18 0 0)",
                paddingTop: "28px",
              }}
            >
              {[
                { number: "500+", label: "Weddings Captured" },
                { number: "10+", label: "Years of Excellence" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: "2.5rem",
                      fontWeight: 300,
                      color: "oklch(0.714 0.093 76)",
                      lineHeight: 1,
                      marginBottom: "6px",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "10px",
                      fontWeight: 400,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "oklch(0.50 0 0)",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
