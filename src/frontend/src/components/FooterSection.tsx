import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const goldColor = "oklch(0.714 0.093 76)";
const mutedColor = "oklch(0.50 0 0)";
const socialBorderDefault = "oklch(0.22 0 0)";
const socialColorDefault = "oklch(0.48 0 0)";

export default function FooterSection() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`;

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { Icon: SiInstagram, label: "Instagram", href: "https://instagram.com" },
    { Icon: SiFacebook, label: "Facebook", href: "https://facebook.com" },
    { Icon: SiX, label: "Twitter", href: "https://x.com" },
  ];

  return (
    <footer
      style={{
        background: "oklch(0.06 0 0)",
        borderTop: "1px solid oklch(0.16 0 0)",
        padding: "48px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: "1.3rem",
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: goldColor,
                marginBottom: "8px",
              }}
            >
              Super Lab Inc
            </div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                fontWeight: 300,
                letterSpacing: "0.08em",
                color: "oklch(0.45 0 0)",
              }}
            >
              Premium Photography Experience
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "9px",
                fontWeight: 400,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "oklch(0.35 0 0)",
                marginBottom: "16px",
              }}
            >
              Navigation
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="footer.link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "11px",
                    fontWeight: 300,
                    letterSpacing: "0.1em",
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
            </div>
          </div>
          <div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "9px",
                fontWeight: 400,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "oklch(0.35 0 0)",
                marginBottom: "16px",
              }}
            >
              Follow Us
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.link"
                  aria-label={label}
                  style={{
                    width: "36px",
                    height: "36px",
                    border: `1px solid ${socialBorderDefault}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: socialColorDefault,
                    textDecoration: "none",
                    transition: "border-color 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = goldColor;
                    e.currentTarget.style.color = goldColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = socialBorderDefault;
                    e.currentTarget.style.color = socialColorDefault;
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            height: "1px",
            background: "oklch(0.15 0 0)",
            marginBottom: "24px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 300,
              letterSpacing: "0.05em",
              color: "oklch(0.38 0 0)",
            }}
          >
            © {year} Super Lab Inc. All rights reserved.
          </p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 300,
              letterSpacing: "0.05em",
              color: "oklch(0.38 0 0)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = goldColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "oklch(0.38 0 0)";
            }}
          >
            Built with ❤ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
