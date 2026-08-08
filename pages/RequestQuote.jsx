import React, { useState } from "react";
import { Building2, CheckCircle2 } from "lucide-react";
import { Navbar, Footer, PageHero, Reveal, GlobalStyles, theme } from "../components/Layout";

const PROPERTY_TYPES = ["Office", "Retail", "Healthcare", "Education", "Industrial", "Hospitality", "Other"];
const inputStyle = { padding: "12px 14px", borderRadius: 10, border: "1px solid #E5E9F0", fontSize: 14, fontFamily: "inherit", outline: "none", width: "100%" };
const label = { fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6, display: "block" };

export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [propertyType, setPropertyType] = useState("Office");

  if (submitted) {
    return (
      <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: theme.bg, minHeight: "100vh" }}>
        <GlobalStyles />
        <Navbar />
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "120px 24px", textAlign: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <CheckCircle2 size={30} color="#16A34A" />
          </div>
          <h1 className="font-display" style={{ fontSize: 26, fontWeight: 700, margin: "0 0 12px" }}>Quote request received</h1>
          <p style={{ color: "#6B7280", lineHeight: 1.7 }}>A member of our corporate sales team will review your property details and follow up within one to two business days with a scoped proposal.</p>
          <a href="/" style={{ display: "inline-block", marginTop: 24, color: "#1D4ED8", fontWeight: 600, textDecoration: "none" }}>Back to home</a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: theme.bg, color: "#111827" }}>
      <GlobalStyles />
      <Navbar />
      <PageHero eyebrow="Corporate sales" title="Request a facility quote" subtitle="Tell us about your property and service needs. Most requests receive a scoped proposal within one to two business days." />

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px" }}>
        <Reveal>
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ background: "#fff", border: `1px solid ${theme.border}`, borderRadius: 20, padding: 36, display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 4 }}>
              <Building2 size={20} color="#1D4ED8" />
              <h2 style={{ fontSize: 17, fontWeight: 600, margin: 0 }}>Company & contact</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div><label style={label}>Company name</label><input required style={inputStyle} placeholder="Meridian Corp" /></div>
              <div><label style={label}>Your name</label><input required style={inputStyle} placeholder="Dana Whitfield" /></div>
              <div><label style={label}>Work email</label><input required type="email" style={inputStyle} placeholder="dana@meridian.com" /></div>
              <div><label style={label}>Phone</label><input style={inputStyle} placeholder="(555) 000-0000" /></div>
            </div>

            <div style={{ borderTop: `1px solid ${theme.border}`, paddingTop: 20 }}>
              <label style={label}>Property type</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {PROPERTY_TYPES.map(t => (
                  <button type="button" key={t} onClick={() => setPropertyType(t)} style={{
                    padding: "8px 16px", borderRadius: 999, fontSize: 13, cursor: "pointer",
                    border: propertyType === t ? `1px solid ${theme.blue}` : "1px solid #E5E9F0",
                    background: propertyType === t ? "#EFF6FF" : "#fff",
                    color: propertyType === t ? "#1D4ED8" : "#374151", fontWeight: 500
                  }}>{t}</button>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div><label style={label}>Approx. square footage</label><input style={inputStyle} placeholder="e.g. 25,000 sq ft" /></div>
              <div><label style={label}>Number of sites</label><input style={inputStyle} placeholder="e.g. 3" /></div>
            </div>

            <div>
              <label style={label}>What services are you interested in?</label>
              <textarea rows={4} style={{ ...inputStyle, resize: "vertical" }} placeholder="Nightly janitorial, floor care, window cleaning..." />
            </div>

            <button type="submit" className="btn-primary" style={{
              background: `linear-gradient(135deg,${theme.blueDark},${theme.blue})`, color: "#fff", border: "none",
              padding: "15px 0", borderRadius: 10, fontWeight: 600, fontSize: 15, cursor: "pointer"
            }}>Submit quote request</button>
          </form>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
