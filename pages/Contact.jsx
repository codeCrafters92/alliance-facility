import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Navbar, Footer, PageHero, Reveal, GlobalStyles, theme } from "../components/Layout";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: theme.bg, color: "#111827" }}>
      <GlobalStyles />
      <Navbar active="Contact" />
      <PageHero eyebrow="Contact us" title="We'd like to hear from you" subtitle="Questions about a booking, a facility contract, or anything else — reach out and we'll respond within one business day." />

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "88px 24px", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 40 }}>
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { icon: Phone, label: "Phone", value: "(555) 019-2244" },
              { icon: Mail, label: "Email", value: "hello@alliancefacility.com" },
              { icon: MapPin, label: "Coverage", value: "Nationwide service, 48 states" },
              { icon: Clock, label: "Support hours", value: "Mon–Sat, 7am–8pm" },
            ].map(c => {
              const Icon = c.icon;
              return (
                <div key={c.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={19} color="#1D4ED8" />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, color: "#9CA3AF" }}>{c.label}</div>
                    <div style={{ fontSize: 15, fontWeight: 500 }}>{c.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div style={{ background: "#fff", border: `1px solid ${theme.border}`, borderRadius: 20, padding: 32 }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                  <Send size={22} color="#16A34A" />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 8px" }}>Message sent</h3>
                <p style={{ color: "#6B7280", fontSize: 14 }}>We'll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <input required placeholder="Full name" style={inputStyle} />
                  <input required type="email" placeholder="Email address" style={inputStyle} />
                </div>
                <input placeholder="Phone number" style={inputStyle} />
                <select style={inputStyle} defaultValue="">
                  <option value="" disabled>What is this about?</option>
                  <option>Residential booking question</option>
                  <option>Corporate facility inquiry</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
                <textarea required placeholder="Your message" rows={5} style={{ ...inputStyle, resize: "vertical" }} />
                <button type="submit" className="btn-primary" style={{
                  background: `linear-gradient(135deg,${theme.blueDark},${theme.blue})`, color: "#fff", border: "none",
                  padding: "14px 0", borderRadius: 10, fontWeight: 600, fontSize: 14, cursor: "pointer"
                }}>Send message</button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}

const inputStyle = {
  padding: "12px 14px", borderRadius: 10, border: "1px solid #E5E9F0", fontSize: 14,
  fontFamily: "inherit", outline: "none", width: "100%",
};
