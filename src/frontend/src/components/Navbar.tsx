import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const goldColor = "oklch(0.714 0.093 76)";
const mutedColor = "oklch(0.75 0 0)";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-ocid="navbar.panel"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s ease, border-color 0.4s ease",
        background: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
        borderBottom: scrolled
          ? "1px solid oklch(0.20 0 0)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            paddingTop: "20px",
            paddingBottom: "8px",
            textAlign: "center",
          }}
        >
          <button
            type="button"
            data-ocid="navbar.link"
            onClick={() => handleNav("#home")}
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "22px",
              fontWeight: 400,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: goldColor,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "inline-block",
            }}
          >
            Super Lab Inc
          </button>
        </div>
        <div style={{ height: "1px", background: "oklch(0.20 0 0 / 0.6)" }} />
        <nav
          className="hidden md:flex"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            padding: "14px 0",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="navbar.link"
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: mutedColor,
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = goldColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = mutedColor;
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div
          className="flex md:hidden"
          style={{ justifyContent: "flex-end", padding: "14px 0" }}
        >
          <button
            type="button"
            data-ocid="navbar.toggle"
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
            }}
            aria-label="Toggle menu"
          >
            <span
              className="hamburger-line"
              style={{
                transform: menuOpen
                  ? "rotate(45deg) translateY(6px)"
                  : undefined,
              }}
            />
            <span
              className="hamburger-line"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="hamburger-line"
              style={{
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-6px)"
                  : undefined,
              }}
            />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          data-ocid="navbar.modal"
          style={{
            background: "oklch(0.07 0 0)",
            borderTop: "1px solid oklch(0.20 0 0)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="navbar.link"
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: mutedColor,
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
