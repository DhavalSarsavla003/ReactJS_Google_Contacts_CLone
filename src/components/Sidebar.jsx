import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useContacts } from "../context/ContactsProvider";
import { IcoMenu, IcoPeople, IcoStar, IcoTag, IcoTrash, IcoAdd } from "./Icons";

export const LABEL_COLORS = { Work: "var(--g-blue)", Friends: "var(--g-green)", Family: "var(--g-red)", Other: "var(--g-muted)" };

export function Sidebar({ open, onToggle }) {
  const { contacts, trash } = useContacts();
  const favCount = contacts.filter(c => c.starred).length;
  const loc = useLocation();

  const NavI = ({ to, end, icon, label, badge, badgeBg }) => {
    const isActive = to === "/contacts" ? loc.pathname === "/contacts" || (loc.pathname.startsWith("/contacts") && !loc.pathname.includes("new") && !loc.search.includes("label")) : loc.pathname === to || loc.search.includes(to.split("?label=")[1] || "NOMATCH");
    return (
      <Link to={to} className={`nav-i ${isActive ? "active" : ""}`}>
        <span className="nav-ico">{icon}</span>
        {open && <span className="nav-lbl">{label}</span>}
        {open && badge > 0 && <span className="nav-badge text-white" style={{ background: badgeBg || "var(--g-blue)" }}>{badge}</span>}
      </Link>
    );
  };

  return (
    <aside className={`g-sidebar${open ? "" : " collapsed"}`}>
      
      <div className="sb-header">
        <button className="hmbg" onClick={onToggle}><IcoMenu /></button>
        {open && (
          <Link to="/contacts" className="sb-logo">
            <span className="d-flex gap-1 me-1">
              {["#4285F4", "#EA4335", "#FBBC05", "#34A853"].map((c, i) => (
                <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "inline-block" }} />
              ))}
            </span>
            <span className="sb-logo-text">Contacts</span>
          </Link>
        )}
      </div>

      <div style={{ padding: "12px 8px" }}>
        <Link to="/contacts/new" className="nav-i" style={{ background: "var(--g-blue-l)", color: "var(--g-blue)", margin: 0 }}>
          <span className="nav-ico" style={{ color: "var(--g-blue)" }}><IcoAdd /></span>
          {open && <span className="nav-lbl fw-semibold" style={{ color: "var(--g-blue)" }}>New Contact</span>}
        </Link>
      </div>

      <nav className="sb-nav">
        <NavI to="/contacts" icon={<IcoPeople />} label="Contacts" badge={contacts.length} />
        <NavI to="/favorites" icon={<span style={{ color: favCount ? "var(--g-yellow)" : "var(--g-muted)" }}><IcoStar f={favCount > 0} /></span>} label="Favorites" badge={favCount} />
        <div className="sb-div" />
        {open && <div className="sb-sec">Labels</div>}
        {["Work", "Friends", "Family"].map(lbl => (
          <Link key={lbl} to={`/contacts?label=${lbl}`} className={`nav-i${loc.search === `?label=${lbl}` ? " active" : ""}`}>
            <span className="nav-ico" style={{ color: LABEL_COLORS[lbl] }}><IcoTag /></span>
            {open && <span className="nav-lbl">{lbl}</span>}
            {open && <span className="nav-badge text-white" style={{ background: LABEL_COLORS[lbl] }}>{contacts.filter(c => c.label === lbl).length}</span>}
          </Link>
        ))}
        <div className="sb-div" />
        <NavI to="/trash" icon={<IcoTrash />} label="Trash" badge={trash.length} badgeBg="var(--g-red)" />
      </nav>

      
    </aside>
  );
}
