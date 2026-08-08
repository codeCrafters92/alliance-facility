import React from "react";
import { Check } from "lucide-react";
import { Navbar, Footer, PageHero, Reveal, GlobalStyles, theme } from "../components/Layout";

const PLANS = [
  { name: "Essential", price: "$129", period: "/visit", features: ["Standard home or small office clean", "Online booking & tracking", "Satisfaction guarantee"], featured: false },
  { name: "Professional", price: "$349", period: "/month", features: ["Weekly recurring service", "Priority scheduling", "Dedicated account contact", "Photo verification reports"], featured: true },
  { name: "Facility", price: "Custom", period: "quote", features: ["Multi-site coverage", "24/7 supervisor support", "Compliance documentation", "Volume pricing"], featured: false },
];

const COMPARE = [
  ["Online booking", true, true, true],
  ["Recurring scheduling", false, true, true],
  ["Dedicated account manager", false, true, true],
  ["Compliance documentation", false, false, true],
  ["Multi-site billing", false, false, true],
];

export default function Pricing() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: theme.bg, color: "#111827" }}>
      <GlobalStyles />
      <Navbar active="Pricing" />
      <PageHero eyebrow="Pricing" title="Simple, transparent pricing" subtitle="Pay per visit, subscribe monthly, or get a custom facility contract. No hidden fees, ever." />

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "88px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div className="card-hover" style={{
                background: p.featured ? `linear-gradient(180deg,${theme.navy},#123268)` : "#fff",
                color: p.featured ? "#fff" : "#111827",
                borderRadius: 20, padding: 32, height: "100%",
                border: p.featured ? "none" : `1px solid ${theme.border}`,
                boxShadow: p.featured ? "0 24px 48px -16px rgba(15,42,92,0.4)" : "none",
                position: "relative"
              }}>
                {p.featured && <span style={{ position: "absolute", top: -12, right: 24, background: theme.blue, color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 999 }}>MOST POPULAR</span>}
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 6px" }}>{p.name}</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, margin: "0 0 22px" }}>
                  <span className="font-display" style={{ fontSize: 34, fontWeight: 700 }}>{p.price}</span>
                  <span style={{ fontSize: 13, opacity: 0.7 }}>{p.period}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 26 }}>
                  {p.features.map(f => (
                    <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13.5 }}>
                      <Check size={16} color={p.featured ? "#93C5FD" : "#1D4ED8"} style={{ flexShrink: 0, marginTop: 1 }} />
                      <span style={{ opacity: p.featured ? 0.9 : 1 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href={p.name === "Facility" ? "/quote" : "/book"} className="btn-primary" style={{
                  display: "block", textAlign: "center", width: "100%", padding: "13px 0", borderRadius: 10, fontWeight: 600, fontSize: 14,
                  textDecoration: "none",
                  background: p.featured ? "#fff" : `linear-gradient(135deg,${theme.blueDark},${theme.blue})`,
                  color: p.featured ? theme.navy : "#fff"
                }}>{p.name === "Facility" ? "Request a quote" : "Get started"}</a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ background: "#F3F5F8", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal><h2 className="font-display" style={{ fontSize: 26, fontWeight: 600, textAlign: "center", marginBottom: 36 }}>Compare plans</h2></Reveal>
          <Reveal delay={80}>
            <div style={{ background: "#fff", borderRadius: 16, border: `1px solid ${theme.border}`, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "16px 20px", fontWeight: 600, fontSize: 13, background: "#F8FAFC", borderBottom: `1px solid ${theme.border}` }}>
                <span>Feature</span><span style={{ textAlign: "center" }}>Essential</span><span style={{ textAlign: "center" }}>Professional</span><span style={{ textAlign: "center" }}>Facility</span>
              </div>
              {COMPARE.map(([feature, a, b, c], i) => (
                <div key={feature} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "14px 20px", fontSize: 13.5, borderBottom: i < COMPARE.length - 1 ? `1px solid ${theme.border}` : "none" }}>
                  <span style={{ color: "#374151" }}>{feature}</span>
                  {[a, b, c].map((v, j) => <span key={j} style={{ textAlign: "center" }}>{v ? <Check size={16} color="#1D4ED8" style={{ margin: "0 auto" }} /> : <span style={{ color: "#D1D5DB" }}>—</span>}</span>)}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}
