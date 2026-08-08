import React from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  DollarSign,
  MoreHorizontal,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Footer, GlobalStyles, Navbar, theme } from "../components/Layout";

const adminStats = [
  { label: "Total customers", value: "1,248", change: "+8.4%", icon: Users },
  { label: "Today's bookings", value: "24", change: "+3 today", icon: CalendarDays },
  { label: "Pending jobs", value: "12", change: "Needs review", icon: Clock3 },
  { label: "Monthly revenue", value: "$42.8k", change: "+12.1%", icon: DollarSign },
];

const clientStats = [
  { label: "Next cleaning", value: "Aug 12", change: "10:00 AM", icon: CalendarDays },
  { label: "Active bookings", value: "2", change: "1 accepted", icon: Sparkles },
  { label: "Completed visits", value: "18", change: "Since 2024", icon: CheckCircle2 },
  { label: "Rewards credit", value: "$35", change: "Available", icon: DollarSign },
];

const bookings = [
  { service: "Standard Clean", customer: "Olivia Martin", date: "Aug 12 · 10:00 AM", status: "Accepted" },
  { service: "Office Cleaning", customer: "Meridian Corp", date: "Aug 12 · 6:00 PM", status: "Pending" },
  { service: "Deep Clean", customer: "Noah Williams", date: "Aug 13 · 8:00 AM", status: "In progress" },
  { service: "Move Out Clean", customer: "Sophia Brown", date: "Aug 14 · 12:00 PM", status: "Completed" },
];

const statusColors = {
  Accepted: ["#eff6ff", "#1d4ed8"],
  Pending: ["#fffbeb", "#b45309"],
  "In progress": ["#f5f3ff", "#6d28d9"],
  Completed: ["#f0fdf4", "#15803d"],
};

export default function Dashboard({ mode = "client" }) {
  const admin = mode === "admin";
  const stats = admin ? adminStats : clientStats;

  return (
    <div className="dashboard-shell">
      <GlobalStyles />
      <Navbar />
      <main style={{ maxWidth: 1180, margin: "0 auto", padding: "52px 24px 80px" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 20, flexWrap: "wrap", marginBottom: 30 }}>
          <div>
            <span style={{ color: theme.blueDark, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
              {admin ? "Operations center" : "Client portal"}
            </span>
            <h1 className="font-display" style={{ margin: "8px 0 6px", fontSize: "clamp(28px,4vw,40px)", color: theme.navy }}>
              {admin ? "Good morning, Admin" : "Welcome back, Olivia"}
            </h1>
            <p style={{ margin: 0, color: theme.silver }}>
              {admin ? "Here’s what is happening across your team today." : "Everything about your cleaning services in one place."}
            </p>
          </div>
          <a href={admin ? "/admin/bookings" : "/book"} className="btn-primary" style={{ padding: "12px 20px", borderRadius: 11, color: "#fff", background: `linear-gradient(135deg,${theme.blueDark},${theme.blue})`, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
            {admin ? "Manage bookings" : "Book a cleaning"}
          </a>
        </header>

        <section className="dashboard-grid" aria-label="Dashboard statistics">
          {stats.map(({ label, value, change, icon: Icon }) => (
            <article className="content-card card-hover" key={label} style={{ padding: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <p style={{ margin: "0 0 10px", color: theme.silver, fontSize: 13 }}>{label}</p>
                  <strong className="font-display" style={{ fontSize: 26, color: theme.navy }}>{value}</strong>
                </div>
                <span style={{ width: 42, height: 42, borderRadius: 12, background: "#eff6ff", color: theme.blueDark, display: "grid", placeItems: "center" }}>
                  <Icon size={20} />
                </span>
              </div>
              <p style={{ margin: "12px 0 0", fontSize: 12, color: change.startsWith("+") ? "#15803d" : theme.silver }}>{change}</p>
            </article>
          ))}
        </section>

        <section className="dashboard-main" style={{ marginTop: 20 }}>
          <article className="content-card" style={{ padding: 24, overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div>
                <h2 className="font-display" style={{ margin: 0, fontSize: 20 }}>Recent bookings</h2>
                <p style={{ margin: "5px 0 0", color: theme.silver, fontSize: 13 }}>Latest service activity</p>
              </div>
              <button aria-label="More options" style={{ border: 0, background: "transparent", color: theme.silver }}><MoreHorizontal /></button>
            </div>
            <div style={{ overflowX: "auto" }}>
              {bookings.map((booking) => {
                const [background, color] = statusColors[booking.status];
                return (
                  <div key={`${booking.customer}-${booking.date}`} style={{ minWidth: 620, display: "grid", gridTemplateColumns: "1.4fr 1.2fr 1.2fr .8fr", gap: 16, alignItems: "center", padding: "15px 0", borderTop: `1px solid ${theme.border}`, fontSize: 13 }}>
                    <strong>{booking.service}</strong>
                    <span style={{ color: theme.silver }}>{booking.customer}</span>
                    <span>{booking.date}</span>
                    <span style={{ justifySelf: "start", padding: "6px 9px", borderRadius: 99, background, color, fontWeight: 700, fontSize: 11 }}>{booking.status}</span>
                  </div>
                );
              })}
            </div>
          </article>

          <aside className="content-card" style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, color: theme.navy }}>
              <TrendingUp size={20} />
              <h2 className="font-display" style={{ margin: 0, fontSize: 20 }}>{admin ? "Monthly performance" : "Service quality"}</h2>
            </div>
            <div style={{ height: 180, display: "flex", alignItems: "flex-end", gap: 10, paddingTop: 28 }}>
              {[48, 64, 57, 82, 72, 94, 88].map((height, index) => (
                <span key={index} style={{ flex: 1, height: `${height}%`, borderRadius: "8px 8px 3px 3px", background: index === 5 ? `linear-gradient(${theme.blue},${theme.blueDark})` : "#dbeafe" }} />
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, color: theme.silver, fontSize: 11 }}>
              {["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((month) => <span key={month}>{month}</span>)}
            </div>
            <div style={{ marginTop: 24, padding: 16, borderRadius: 14, background: "#f8fafc" }}>
              <strong style={{ color: theme.navy }}>{admin ? "94% completion rate" : "4.9 average rating"}</strong>
              <p style={{ margin: "5px 0 0", color: theme.silver, fontSize: 12 }}>Up from last month</p>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
