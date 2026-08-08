import React from "react";
import { Navbar, Footer, Reveal, GlobalStyles, theme } from "../components/Layout";

export default function NotFound() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: theme.bg, color: "#111827", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <GlobalStyles />
      <Navbar />
      <section style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px", textAlign: "center" }}>
        <Reveal>
          <div className="font-display" style={{ fontSize: 96, fontWeight: 700, color: theme.navy, lineHeight: 1, marginBottom: 8 }}>404</div>
          <h1 className="font-display" style={{ fontSize: 26, fontWeight: 600, margin: "0 0 12px" }}>This page didn't make the cleaning schedule</h1>
          <p style={{ color: "#6B7280", marginBottom: 28 }}>The page you're looking for doesn't exist or has moved.</p>
          <a href="/" className="btn-primary" style={{
            background: `linear-gradient(135deg,${theme.blueDark},${theme.blue})`, color: "#fff", textDecoration: "none",
            padding: "14px 28px", borderRadius: 10, fontWeight: 600, display: "inline-block"
          }}>Back to home</a>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
