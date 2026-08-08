import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Navbar, Footer, PageHero, Reveal, GlobalStyles, theme } from "../components/Layout";

const FAQS = [
  { q: "Do you serve both offices and homes?", a: "Yes. We run dedicated commercial facility teams and a separate residential booking platform, so scheduling and staffing never overlap." },
  { q: "How fast can I get a quote for a facility contract?", a: "Most corporate quote requests receive a scoped proposal within one to two business days after a short site review." },
  { q: "Can I reschedule or cancel a residential booking?", a: "Yes, from your client dashboard up until 24 hours before the scheduled visit, at no charge." },
  { q: "Are your teams insured?", a: "Every crew is background-checked, trained, and covered under our general liability and workers' compensation policies." },
  { q: "What areas do you cover?", a: "We currently operate in 48 states. Enter your ZIP code at booking to confirm availability in your area." },
  { q: "Do I need to be home during a residential visit?", a: "No. Many clients provide entry instructions in their booking notes and are not present during the visit." },
  { q: "How do I track a booking?", a: "Every booking shows a live status — pending, accepted, in progress, or completed — in your client dashboard." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: theme.bg, color: "#111827" }}>
      <GlobalStyles />
      <Navbar />
      <PageHero eyebrow="Support" title="Frequently asked questions" subtitle="Can't find what you're looking for? Reach out and we'll help directly." />
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <div style={{ border: `1px solid ${theme.border}`, borderRadius: 14, overflow: "hidden", background: "#fff" }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                  width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "18px 22px", background: "none", border: "none", cursor: "pointer", textAlign: "left"
                }}>
                  <span style={{ fontWeight: 600, fontSize: 15 }}>{f.q}</span>
                  <ChevronDown size={18} style={{ transform: open === i ? "rotate(180deg)" : "none", transition: "transform 0.3s", flexShrink: 0 }} />
                </button>
                <div style={{ maxHeight: open === i ? 200 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <p style={{ padding: "0 22px 20px", fontSize: 14, color: "#6B7280", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
