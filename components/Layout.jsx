import React, { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { LOGO_SRC } from "../lib/logo";

export const theme = {
  navy: "#0F2A5C",
  navyDark: "#0B1E42",
  blue: "#3B82F6",
  blueDark: "#1E40AF",
  silver: "#6B7280",
  bg: "#FAFBFC",
  border: "#E5E9F0",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
      * { box-sizing: border-box; }
      body { margin: 0; font-family: 'Inter', system-ui, sans-serif; background: #FAFBFC; color: #111827; }
      .font-display { font-family: 'Space Grotesk', sans-serif; }
      @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
      @keyframes shimmer { 0% { background-position: -400px 0; } 100% { background-position: 400px 0; } }
      .float-anim { animation: float 5s ease-in-out infinite; }
      .btn-primary { transition: all 0.25s cubic-bezier(0.16,1,0.3,1); }
      .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 24px -8px rgba(15,42,92,0.45); }
      .card-hover { transition: all 0.35s cubic-bezier(0.16,1,0.3,1); }
      .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 40px -12px rgba(15,42,92,0.18); }
      .skel { background: linear-gradient(90deg, #eef1f5 25%, #f7f9fb 37%, #eef1f5 63%); background-size: 400px 100%; animation: shimmer 1.4s ease infinite; }
      .nav-link { font-size: 14px; font-weight: 500; color: #374151; text-decoration: none; transition: color 0.2s; }
      .nav-link:hover { color: #1D4ED8; }
    `}</style>
  );
}

export function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, shown];
}

export function Reveal({ children, delay = 0, className = "" }) {
  const [ref, shown] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: shown ? "translateY(0)" : "translateY(28px)",
        opacity: shown ? 1 : 0,
        transition: `transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, opacity 0.7s ease ${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

export function Counter({ to, suffix = "", duration = 1600 }) {
  const [ref, shown] = useReveal();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!shown) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(step);
      else setVal(to);
    };
    requestAnimationFrame(step);
  }, [shown, to, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export function Navbar({ active = "" }) {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.98)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid rgba(15,42,92,0.08)",
      transition: "all 0.35s ease"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/"><img src={LOGO_SRC} alt="Alliance Facility Group" style={{ height: 44, objectFit: "contain" }} /></a>
        <div style={{ display: "flex", gap: 30, alignItems: "center" }} className="hidden md:flex">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className="nav-link" style={{ color: active === l.label ? "#1D4ED8" : "#374151" }}>
              {l.label}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="/book" className="btn-primary" style={{
            background: "linear-gradient(135deg,#1E40AF,#3B82F6)", color: "#fff", textDecoration: "none",
            padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 600
          }}>Book a Service</a>
          <button onClick={() => setNavOpen(!navOpen)} style={{ background: "none", border: "none", cursor: "pointer" }} className="md:hidden">
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {navOpen && (
        <div style={{ padding: "12px 24px 20px", display: "flex", flexDirection: "column", gap: 14, background: "#fff", borderTop: "1px solid #eee" }}>
          {NAV_LINKS.map(l => <a key={l.label} href={l.href} style={{ fontSize: 15, color: "#374151", textDecoration: "none" }}>{l.label}</a>)}
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "#0B1E42", color: "#AEBBD6", padding: "56px 24px 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 32 }}>
        <div>
          <img src={LOGO_SRC} alt="Alliance Facility Group" style={{ height: 42, marginBottom: 14, filter: "brightness(0) invert(1)" }} />
          <p style={{ fontSize: 13, lineHeight: 1.7 }}>Clean spaces. Stronger places.</p>
        </div>
        <div>
          <h4 style={{ color: "#fff", fontSize: 14, marginBottom: 14 }}>Company</h4>
          {[["About Us", "/about"], ["Careers", "/careers"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([l, href]) => (
            <a key={l} href={href} style={{ display: "block", fontSize: 13, marginBottom: 10, color: "#AEBBD6", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <div>
          <h4 style={{ color: "#fff", fontSize: 14, marginBottom: 14 }}>Services</h4>
          {[["Facility Cleaning", "/services"], ["Residential Cleaning", "/book"], ["Industries We Serve", "/industries"], ["Request a Quote", "/quote"]].map(([l, href]) => (
            <a key={l} href={href} style={{ display: "block", fontSize: 13, marginBottom: 10, color: "#AEBBD6", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <div>
          <h4 style={{ color: "#fff", fontSize: 14, marginBottom: 14 }}>Contact</h4>
          <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, marginBottom: 10 }}><Phone size={14} />(555) 019-2244</div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, marginBottom: 10 }}><Mail size={14} />hello@alliancefacility.com</div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13 }}><MapPin size={14} />Nationwide service</div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "40px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: 12, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span>© 2026 Alliance Facility Group. All rights reserved.</span>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="/privacy" style={{ color: "#AEBBD6", textDecoration: "none" }}>Privacy Policy</a>
          <a href="/terms" style={{ color: "#AEBBD6", textDecoration: "none" }}>Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, subtitle }) {
  return (
    <header style={{ background: "linear-gradient(135deg,#0B1E42,#123268)", padding: "72px 24px", textAlign: "center", color: "#fff" }}>
      <Reveal>
        {eyebrow && <span style={{ display: "inline-block", padding: "6px 16px", borderRadius: 999, background: "rgba(59,130,246,0.15)", border: "1px solid rgba(96,165,250,0.35)", color: "#93C5FD", fontSize: 13, fontWeight: 600, marginBottom: 20 }}>{eyebrow}</span>}
        <h1 className="font-display" style={{ fontSize: "clamp(30px,5vw,46px)", fontWeight: 700, margin: "0 0 14px" }}>{title}</h1>
        {subtitle && <p style={{ color: "#C7D2E8", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>{subtitle}</p>}
      </Reveal>
    </header>
  );
}
