import React, { useState } from "react";
import { Navbar, Footer, PageHero, Reveal, GlobalStyles, theme } from "../components/Layout";

const CATEGORIES = ["All", "Offices", "Retail", "Residential", "Healthcare"];
const ITEMS = Array.from({ length: 9 }, (_, i) => ({ id: i, category: CATEGORIES[(i % 4) + 1] }));

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? ITEMS : ITEMS.filter(i => i.category === filter);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: theme.bg, color: "#111827" }}>
      <GlobalStyles />
      <Navbar active="Gallery" />
      <PageHero eyebrow="Gallery" title="A look at the work" subtitle="Before-and-after results from facilities and homes across our service area." />

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 100px" }}>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setFilter(c)} style={{
              padding: "9px 18px", borderRadius: 999, fontSize: 13.5, cursor: "pointer", fontWeight: 500,
              border: filter === c ? `1px solid ${theme.blue}` : "1px solid #E5E9F0",
              background: filter === c ? "#EFF6FF" : "#fff", color: filter === c ? "#1D4ED8" : "#374151"
            }}>{c}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
          {visible.map((item, i) => (
            <Reveal key={item.id} delay={i * 50}>
              <div className="skel card-hover" style={{ borderRadius: 16, aspectRatio: "4/3", position: "relative", overflow: "hidden" }}>
                <span style={{ position: "absolute", bottom: 10, left: 12, fontSize: 12, fontWeight: 600, color: "#374151", background: "rgba(255,255,255,0.85)", padding: "3px 10px", borderRadius: 999 }}>{item.category}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
