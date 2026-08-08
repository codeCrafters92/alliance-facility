import React from "react";
import { Briefcase, ShoppingBag, Stethoscope, GraduationCap, Factory, Hotel } from "lucide-react";
import { Navbar, Footer, PageHero, Reveal, GlobalStyles, theme } from "../components/Layout";

const INDUSTRIES = [
  { icon: Briefcase, title: "Corporate Offices", desc: "Daily and nightly janitorial for single-site and multi-tenant offices." },
  { icon: ShoppingBag, title: "Retail & Shopping Centers", desc: "Storefront, common-area, and after-hours cleaning that keeps foot traffic areas presentable." },
  { icon: Stethoscope, title: "Healthcare Facilities", desc: "Disinfection protocols aligned with clinical and regulatory requirements." },
  { icon: GraduationCap, title: "Education Campuses", desc: "Classroom, cafeteria, and shared-space cleaning scheduled around school hours." },
  { icon: Factory, title: "Industrial & Warehousing", desc: "Floor care and facility upkeep suited to high-traffic industrial environments." },
  { icon: Hotel, title: "Hospitality", desc: "Guest-area and back-of-house cleaning built around occupancy schedules." },
];

export default function Industries() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: theme.bg, color: "#111827" }}>
      <GlobalStyles />
      <Navbar active="Industries" />
      <PageHero eyebrow="Industries we serve" title="Facility programs shaped around your sector" subtitle="Every industry has a different rhythm. Our crews and schedules are built around yours." />

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.title} delay={i * 70}>
                <div className="card-hover" style={{ background: "#fff", border: `1px solid ${theme.border}`, borderRadius: 18, padding: 30, height: "100%" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `linear-gradient(135deg,${theme.navy},${theme.blue})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Icon size={24} color="#fff" />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 10px" }}>{ind.title}</h3>
                  <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.65, margin: 0 }}>{ind.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section style={{ background: theme.navy, padding: "72px 24px", textAlign: "center", color: "#fff" }}>
        <Reveal>
          <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, margin: "0 0 16px" }}>Don't see your industry?</h2>
          <p style={{ color: "#C7D2E8", marginBottom: 28 }}>We build custom programs for property types outside this list too.</p>
          <a href="/quote" className="btn-primary" style={{ background: "#fff", color: theme.navy, textDecoration: "none", padding: "15px 30px", borderRadius: 12, fontWeight: 600, display: "inline-block" }}>Talk to Sales</a>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
