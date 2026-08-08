import React from "react";
import { ShieldCheck, Users, Target, Handshake } from "lucide-react";
import { Navbar, Footer, PageHero, Reveal, Counter, GlobalStyles, theme } from "../components/Layout";

const VALUES = [
  { icon: ShieldCheck, title: "Accountability", desc: "Every visit is checked against a documented standard, not a best guess." },
  { icon: Users, title: "People first", desc: "Our crews are trained, paid fairly, and treated as the professionals they are." },
  { icon: Target, title: "Consistency", desc: "The same quality on visit one hundred as on visit one." },
  { icon: Handshake, title: "Partnership", desc: "We work alongside facility teams, not around them." },
];

const STATS = [
  { to: 1200, suffix: "+", label: "Facilities served" },
  { to: 48, suffix: "", label: "States covered" },
  { to: 99, suffix: "%", label: "On-time completion" },
  { to: 15, suffix: " yrs", label: "In operation" },
];

export default function About() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: theme.bg, color: "#111827" }}>
      <GlobalStyles />
      <Navbar active="About" />
      <PageHero eyebrow="About us" title="Built by people who manage buildings, for people who manage buildings" subtitle="Alliance Facility Group started as a two-person crew servicing local offices. Today we support corporate portfolios and homeowners nationwide, without losing the accountability that got us here." />

      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "88px 24px" }}>
        <Reveal>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#374151", marginBottom: 20 }}>
            We founded Alliance Facility Group after seeing how many property managers were stuck choosing between big, impersonal vendors and small crews that couldn't scale. We built a company that keeps the accountability of a small operator while offering the coverage of a national provider.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#374151" }}>
            That means every technician is trained against the same checklist, every site has a named supervisor, and every client — whether they manage one office or fifty — can see exactly what happened at their property and when.
          </p>
        </Reveal>
      </section>

      <section style={{ background: theme.navy, padding: "72px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 24, textAlign: "center" }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div className="font-display" style={{ fontSize: 38, fontWeight: 700, color: "#fff" }}><Counter to={s.to} suffix={s.suffix} /></div>
              <div style={{ fontSize: 13, color: "#AEBBD6", marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "88px 24px" }}>
        <Reveal><h2 className="font-display" style={{ fontSize: 28, fontWeight: 600, textAlign: "center", marginBottom: 48 }}>What we stand for</h2></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24 }}>
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card-hover" style={{ background: "#fff", border: `1px solid ${theme.border}`, borderRadius: 16, padding: 26, height: "100%", textAlign: "center" }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: "linear-gradient(135deg,#DBEAFE,#BFDBFE)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <Icon size={22} color="#1D4ED8" />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 8px" }}>{v.title}</h3>
                  <p style={{ fontSize: 13.5, color: "#6B7280", lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}
