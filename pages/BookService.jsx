import React, { useState } from "react";
import { Home as HomeIcon, Sparkles, Sofa, Check, Calendar, MapPin, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import { Navbar, Footer, Reveal, GlobalStyles, theme } from "../components/Layout";

const SERVICE_OPTIONS = [
  { id: "standard", icon: HomeIcon, name: "Standard Clean", price: "$129", desc: "Dusting, vacuuming, kitchen & bathroom cleaning." },
  { id: "deep", icon: Sparkles, name: "Deep Clean", price: "$219", desc: "Standard clean plus baseboards, inside appliances, grout." },
  { id: "move", icon: Sofa, name: "Move In/Out", price: "$279", desc: "Full empty-home clean, top to bottom." },
];

const STEPS = ["Service", "Date & time", "Address", "Details", "Confirm"];
const TIMES = ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];
const inputStyle = { padding: "12px 14px", borderRadius: 10, border: "1px solid #E5E9F0", fontSize: 14, fontFamily: "inherit", outline: "none", width: "100%" };
const label = { fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6, display: "block" };

export default function BookService() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("standard");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [done, setDone] = useState(false);

  const selected = SERVICE_OPTIONS.find(s => s.id === service);
  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));

  if (done) {
    return (
      <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: theme.bg, minHeight: "100vh" }}>
        <GlobalStyles />
        <Navbar />
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "120px 24px", textAlign: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <CheckCircle2 size={30} color="#16A34A" />
          </div>
          <h1 className="font-display" style={{ fontSize: 26, fontWeight: 700, margin: "0 0 12px" }}>Booking confirmed</h1>
          <p style={{ color: "#6B7280", lineHeight: 1.7, marginBottom: 6 }}>{selected.name} on {date || "your selected date"} at {time || "your selected time"}.</p>
          <p style={{ color: "#6B7280", fontSize: 13 }}>Status: <span style={{ color: "#D97706", fontWeight: 600 }}>Pending</span> — you'll be notified once a crew accepts.</p>
          <a href="/dashboard" style={{ display: "inline-block", marginTop: 24, color: "#1D4ED8", fontWeight: 600, textDecoration: "none" }}>Track this booking</a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: theme.bg, color: "#111827" }}>
      <GlobalStyles />
      <Navbar />
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "60px 24px 100px" }}>
        <Reveal>
          <h1 className="font-display" style={{ fontSize: 28, fontWeight: 700, textAlign: "center", margin: "0 0 8px" }}>Book a cleaning</h1>
          <p style={{ textAlign: "center", color: "#6B7280", marginBottom: 36 }}>A few quick steps and you're on the schedule.</p>
        </Reveal>

        {/* progress */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 40, position: "relative" }}>
          <div style={{ position: "absolute", top: 15, left: 0, right: 0, height: 2, background: "#E5E9F0", zIndex: 0 }} />
          <div style={{ position: "absolute", top: 15, left: 0, height: 2, background: theme.blue, zIndex: 1, width: `${(step / (STEPS.length - 1)) * 100}%`, transition: "width 0.4s ease" }} />
          {STEPS.map((s, i) => (
            <div key={s} style={{ zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700, transition: "all 0.3s",
                background: i <= step ? theme.blue : "#fff", color: i <= step ? "#fff" : "#9CA3AF",
                border: i <= step ? "none" : "2px solid #E5E9F0"
              }}>{i < step ? <Check size={15} /> : i + 1}</div>
              <span style={{ fontSize: 11, color: i === step ? theme.blue : "#9CA3AF", fontWeight: i === step ? 600 : 400 }}>{s}</span>
            </div>
          ))}
        </div>

        <div style={{ background: "#fff", border: `1px solid ${theme.border}`, borderRadius: 20, padding: 32, minHeight: 320 }}>
          {step === 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {SERVICE_OPTIONS.map(s => {
                const Icon = s.icon;
                const active = service === s.id;
                return (
                  <button key={s.id} onClick={() => setService(s.id)} style={{
                    display: "flex", alignItems: "center", gap: 16, padding: 18, borderRadius: 14, cursor: "pointer", textAlign: "left",
                    border: active ? `2px solid ${theme.blue}` : "1px solid #E5E9F0", background: active ? "#EFF6FF" : "#fff"
                  }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: active ? theme.blue : "#F3F4F6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={20} color={active ? "#fff" : "#6B7280"} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{s.name}</div>
                      <div style={{ fontSize: 13, color: "#6B7280" }}>{s.desc}</div>
                    </div>
                    <div className="font-display" style={{ fontWeight: 700, fontSize: 16, color: theme.navy }}>{s.price}</div>
                  </button>
                );
              })}
            </div>
          )}

          {step === 1 && (
            <div>
              <label style={label}><Calendar size={14} style={{ verticalAlign: -2, marginRight: 6 }} />Select date</label>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} style={{ ...inputStyle, marginBottom: 22 }} />
              <label style={label}>Select time</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {TIMES.map(t => (
                  <button key={t} onClick={() => setTime(t)} style={{
                    padding: "10px 18px", borderRadius: 10, fontSize: 13.5, cursor: "pointer", fontWeight: 500,
                    border: time === t ? `2px solid ${theme.blue}` : "1px solid #E5E9F0",
                    background: time === t ? "#EFF6FF" : "#fff", color: time === t ? "#1D4ED8" : "#374151"
                  }}>{t}</button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <label style={label}><MapPin size={14} style={{ verticalAlign: -2, marginRight: 6 }} />Service address</label>
              <input value={address} onChange={e => setAddress(e.target.value)} style={inputStyle} placeholder="Street address" />
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 12 }}>
                <input style={inputStyle} placeholder="City" />
                <input style={inputStyle} placeholder="State" />
                <input style={inputStyle} placeholder="ZIP" />
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <label style={label}><ImageIcon size={14} style={{ verticalAlign: -2, marginRight: 6 }} />Upload photos (optional)</label>
                <div style={{ border: "2px dashed #D1D5DB", borderRadius: 14, padding: 32, textAlign: "center", color: "#9CA3AF", fontSize: 13 }}>
                  Drag photos here or click to upload
                </div>
              </div>
              <div>
                <label style={label}>Notes for your crew (optional)</label>
                <textarea rows={4} value={notes} onChange={e => setNotes(e.target.value)} style={{ ...inputStyle, resize: "vertical" }} placeholder="Gate code, pets, focus areas..." />
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Review your booking</h3>
              {[["Service", selected.name + " — " + selected.price], ["Date", date || "Not set"], ["Time", time || "Not set"], ["Address", address || "Not set"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: `1px solid ${theme.border}`, fontSize: 14 }}>
                  <span style={{ color: "#6B7280" }}>{k}</span><span style={{ fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
          <button onClick={back} disabled={step === 0} style={{
            padding: "12px 24px", borderRadius: 10, border: "1px solid #E5E9F0", background: "#fff",
            fontWeight: 600, fontSize: 14, cursor: step === 0 ? "default" : "pointer", opacity: step === 0 ? 0.4 : 1
          }}>Back</button>
          {step < STEPS.length - 1 ? (
            <button onClick={next} className="btn-primary" style={{
              padding: "12px 28px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${theme.blueDark},${theme.blue})`,
              color: "#fff", fontWeight: 600, fontSize: 14, cursor: "pointer"
            }}>Continue</button>
          ) : (
            <button onClick={() => setDone(true)} className="btn-primary" style={{
              padding: "12px 28px", borderRadius: 10, border: "none", background: `linear-gradient(135deg,${theme.blueDark},${theme.blue})`,
              color: "#fff", fontWeight: 600, fontSize: 14, cursor: "pointer"
            }}>Confirm booking</button>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
