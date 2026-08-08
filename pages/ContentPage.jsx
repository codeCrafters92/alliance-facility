import React from "react";
import { ArrowRight, BriefcaseBusiness, CalendarDays } from "lucide-react";
import { Footer, GlobalStyles, Navbar, PageHero, Reveal, theme } from "../components/Layout";

const content = {
  careers: {
    eyebrow: "Careers",
    title: "Do work you can be proud of",
    subtitle: "Join a people-first team that values reliability, growth, and excellent service.",
  },
  blog: {
    eyebrow: "Resources",
    title: "Practical advice for cleaner spaces",
    subtitle: "Simple guides for facility leaders, property teams, and homeowners.",
  },
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    subtitle: "How Alliance Facility Group collects, uses, and protects your information.",
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms & Conditions",
    subtitle: "The terms that apply when you use our website and cleaning services.",
  },
};

const articles = [
  "A practical office cleaning checklist",
  "How often should your workplace be deep cleaned?",
  "Preparing your home for a professional cleaning",
];

export default function ContentPage({ type }) {
  const page = content[type] ?? content.blog;
  const legal = type === "privacy" || type === "terms";

  return (
    <div style={{ minHeight: "100vh", background: theme.bg }}>
      <GlobalStyles />
      <Navbar />
      <PageHero {...page} />
      <main style={{ maxWidth: 980, margin: "0 auto", padding: "76px 24px 96px" }}>
        {legal ? (
          <Reveal>
            <article className="content-card" style={{ padding: "clamp(24px,5vw,48px)", lineHeight: 1.8, color: "#4b5563" }}>
              <p><strong>Last updated:</strong> August 8, 2026</p>
              <h2 style={{ color: theme.navy }}>Information we collect</h2>
              <p>We collect information you provide when requesting a quote, contacting us, or booking a service. This may include your name, contact details, service address, and booking preferences.</p>
              <h2 style={{ color: theme.navy }}>How we use information</h2>
              <p>We use this information to deliver services, communicate booking updates, provide support, and improve the customer experience. We do not sell personal information.</p>
              <h2 style={{ color: theme.navy }}>Your choices</h2>
              <p>You may ask to access, correct, or delete your information by contacting our support team. Additional service-specific terms may be provided before confirmation.</p>
              <p style={{ fontSize: 13, color: theme.silver }}>This starter copy should be reviewed by qualified legal counsel before launch.</p>
            </article>
          </Reveal>
        ) : type === "careers" ? (
          <Reveal>
            <section className="content-card" style={{ padding: 36 }}>
              <BriefcaseBusiness size={30} color={theme.blueDark} />
              <h2 className="font-display" style={{ color: theme.navy }}>Cleaning Technician</h2>
              <p style={{ color: theme.silver, lineHeight: 1.7 }}>Flexible schedules, paid training, supportive supervisors, and clear opportunities to grow.</p>
              <a href="/contact" style={{ color: theme.blueDark, fontWeight: 700, textDecoration: "none" }}>Apply with our team <ArrowRight size={15} style={{ verticalAlign: -3 }} /></a>
            </section>
          </Reveal>
        ) : (
          <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {articles.map((article, index) => (
              <Reveal key={article} delay={index * 80}>
                <article className="content-card card-hover" style={{ padding: 26, minHeight: 210 }}>
                  <CalendarDays size={20} color={theme.blueDark} />
                  <p style={{ color: theme.silver, fontSize: 12 }}>5 min read</p>
                  <h2 className="font-display" style={{ color: theme.navy, fontSize: 20, lineHeight: 1.35 }}>{article}</h2>
                  <span style={{ color: theme.blueDark, fontSize: 13, fontWeight: 700 }}>Read article <ArrowRight size={14} style={{ verticalAlign: -3 }} /></span>
                </article>
              </Reveal>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
