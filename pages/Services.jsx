import React from "react";
import { Building2, Sparkles, ShieldCheck, Clock, Users, Award, ChevronRight } from "lucide-react";
import { Navbar, Footer, PageHero, Reveal, GlobalStyles, theme } from "../components/Layout";

const SERVICES = [
  { icon: Building2, title: "Commercial Facility Cleaning", desc: "Daily, nightly, and scheduled janitorial programs for offices, retail, and corporate campuses.", points: ["Nightly & day-porter service", "Multi-site coverage", "Dedicated site supervisor"] },
  { icon: Sparkles, title: "Deep & Specialty Cleaning", desc: "Floor care, window washing, post-construction cleanup, and high-touch sanitation.", points: ["Strip, wax & buff programs", "High-rise window cleaning", "Post-construction turnover"] },
  { icon: ShieldCheck, title: "Disinfection & Compliance", desc: "Hospital-grade disinfection protocols that meet health and safety standards.", points: ["EPA-registered products", "Documented audit trail", "Outbreak response plans"] },
  { icon: Clock, title: "Residential Cleaning", desc: "Flexible, on-demand home cleaning booked online in under two minutes.", points: ["One-time or recurring visits", "Photo-verified completion", "Satisfaction guarantee"] },
  { icon: Users, title: "Staffing & Facility Support", desc: "Vetted, trained crews with consistent supervision and quality checks.", points: ["Background-checked staff", "Ongoing training programs", "Reliable substitute coverage"] },
  { icon: Award, title: "Maintenance Programs", desc: "Preventive upkeep plans that protect the long-term condition of your property.", points: ["Seasonal maintenance plans", "Asset condition reporting", "Budget-friendly scheduling"] },
];

export default function Services() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: theme.bg, color: "#111827" }}>
      <GlobalStyles />
      <Navbar active="Services" />
      <PageHero eyebrow="What we do" title="Services built for every kind of space" subtitle="From single-site offices to multi-property portfolios and individual homes, every service is delivered to the same documented standard." />

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 24px", display: "grid", gap: 28 }}>
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          const reversed = i % 2 === 1;
          return (
            <Reveal key={s.title} delay={i * 60}>
              <div className="card-hover" style={{
                display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, alignItems: "start",
                background: "#fff", border: `1px solid ${theme.border}`, borderRadius: 20, padding: 32,
                flexDirection: reversed ? "row-reverse" : "row"
              }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: `linear-gradient(135deg,${theme.navy},${theme.blue})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={26} color="#fff" />
                </div>
                <div>
                  <h2 className="font-display" style={{ fontSize: 22, fontWeight: 600, margin: "0 0 10px" }}>{s.title}</h2>
                  <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.7, margin: "0 0 16px" }}>{s.desc}</p>
                  <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
                    {s.points.map(p => (
                      <span key={p} style={{ fontSize: 13, color: "#1D4ED8", fontWeight: 500, display: "flex", alignItems: "center", gap: 4 }}>
                        <ChevronRight size={14} />{p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>

      <section style={{ background: theme.navy, padding: "72px 24px", textAlign: "center", color: "#fff" }}>
        <Reveal>
          <h2 className="font-display" style={{ fontSize: 28, fontWeight: 700, margin: "0 0 16px" }}>Not sure which service fits your space?</h2>
          <p style={{ color: "#C7D2E8", marginBottom: 28 }}>Tell us about your property and we'll recommend a plan.</p>
          <a href="/quote" className="btn-primary" style={{ background: "#fff", color: theme.navy, textDecoration: "none", padding: "15px 30px", borderRadius: 12, fontWeight: 600, display: "inline-block" }}>Request a Quote</a>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
