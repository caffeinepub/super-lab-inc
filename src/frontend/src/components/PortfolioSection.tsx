import { useCallback, useEffect, useRef, useState } from "react";

type Category = "All" | "Weddings" | "Events" | "Portraits";

interface PortfolioItem {
  id: number;
  src: string;
  title: string;
  category: Exclude<Category, "All">;
}

const items: PortfolioItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    title: "Golden Vows",
    category: "Weddings",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80",
    title: "Eternal Embrace",
    category: "Weddings",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    title: "First Dance",
    category: "Weddings",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    title: "Night Gala",
    category: "Events",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    title: "Corporate Summit",
    category: "Events",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    title: "Inner Light",
    category: "Portraits",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    title: "The Gaze",
    category: "Portraits",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    title: "Radiance",
    category: "Portraits",
  },
];

const categories: Category[] = ["All", "Weddings", "Events", "Portraits"];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.category === activeCategory);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: activeCategory triggers re-animation of grid items on category change
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const children = Array.from(grid.children) as HTMLElement[];
    for (const child of children) {
      child.style.opacity = "0";
      child.style.transform = "translateY(24px)";
      child.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const kids = Array.from(entry.target.children) as HTMLElement[];
            kids.forEach((kid, i) =>
              setTimeout(() => {
                kid.style.opacity = "1";
                kid.style.transform = "translateY(0)";
              }, i * 80),
            );
          }
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, [activeCategory]);

  useEffect(() => {
    const len = filtered.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i !== null ? (i - 1 + len) % len : null));
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i !== null ? (i + 1) % len : null));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [filtered.length]);

  const dialogStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    width: "100vw",
    height: "100vh",
    maxWidth: "100vw",
    maxHeight: "100vh",
    margin: 0,
    padding: 0,
    border: "none",
    background: "rgba(0,0,0,0.95)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "fadeIn 0.2s ease",
  };

  return (
    <section
      id="portfolio"
      style={{
        padding: "100px 24px",
        background: "oklch(0.07 0 0)",
        position: "relative",
      }}
    >
      <div
        className="grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
      >
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "48px" }}
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
            Our Work
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
            Portfolio
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
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              data-ocid="portfolio.tab"
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color:
                  activeCategory === cat
                    ? "oklch(0.714 0.093 76)"
                    : "oklch(0.55 0 0)",
                borderBottom:
                  activeCategory === cat
                    ? "1px solid oklch(0.714 0.093 76)"
                    : "1px solid transparent",
                paddingBottom: "6px",
                transition: "color 0.2s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div
          ref={gridRef}
          data-ocid="portfolio.list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "12px",
          }}
        >
          {filtered.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              data-ocid={`portfolio.item.${idx + 1}`}
              className="portfolio-item"
              onClick={() => setLightboxIndex(idx)}
              style={{
                aspectRatio: "3/4",
                position: "relative",
                background: "oklch(0.12 0 0)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                display: "block",
                width: "100%",
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="lazy"
              />
              <div
                className="portfolio-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.65)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "oklch(0.714 0.093 76)",
                  }}
                >
                  View
                </span>
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: "1.3rem",
                    fontWeight: 300,
                    letterSpacing: "0.08em",
                    color: "oklch(0.95 0 0)",
                    margin: 0,
                  }}
                >
                  {item.title}
                </p>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "oklch(0.55 0 0)",
                  }}
                >
                  {item.category}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <dialog
          open
          data-ocid="portfolio.modal"
          aria-label="Portfolio image viewer"
          style={dialogStyle}
        >
          <button
            type="button"
            data-ocid="portfolio.close_button"
            onClick={closeLightbox}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "24px",
              right: "32px",
              background: "transparent",
              border: "1px solid oklch(0.30 0 0)",
              color: "oklch(0.75 0 0)",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1001,
            }}
          >
            ✕
          </button>
          <button
            type="button"
            data-ocid="portfolio.pagination_prev"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) =>
                i !== null ? (i - 1 + filtered.length) % filtered.length : null,
              );
            }}
            style={{
              position: "absolute",
              left: "24px",
              background: "transparent",
              border: "1px solid oklch(0.30 0 0)",
              color: "oklch(0.75 0 0)",
              width: "44px",
              height: "44px",
              cursor: "pointer",
              fontSize: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ‹
          </button>
          <img
            src={filtered[lightboxIndex].src.replace("w=600", "w=1200")}
            alt={filtered[lightboxIndex].title}
            style={{
              maxWidth: "90vw",
              maxHeight: "88vh",
              objectFit: "contain",
              display: "block",
            }}
          />
          <button
            type="button"
            data-ocid="portfolio.pagination_next"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) =>
                i !== null ? (i + 1) % filtered.length : null,
              );
            }}
            style={{
              position: "absolute",
              right: "24px",
              background: "transparent",
              border: "1px solid oklch(0.30 0 0)",
              color: "oklch(0.75 0 0)",
              width: "44px",
              height: "44px",
              cursor: "pointer",
              fontSize: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ›
          </button>
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "oklch(0.55 0 0)",
            }}
          >
            {lightboxIndex + 1} / {filtered.length} —{" "}
            {filtered[lightboxIndex].title}
          </div>
        </dialog>
      )}
    </section>
  );
}
