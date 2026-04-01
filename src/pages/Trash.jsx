import React, { useState } from "react";
import { useContacts } from "../context/ContactsProvider";
import { TopBar } from "../components/TopBar";
import { Toast } from "../components/Toast";
import { getColor, getInitials, fullName } from "../utils/utils.js";
import { IcoRestore, IcoTrash } from "../components/Icons";

export function Trash() {
  const { trash, restoreContact, delFromTrash } = useContacts();
  const [search, setSearch] = useState("");
  const timeAgo = ts => { const s = Math.floor((Date.now() - ts) / 1000); if (s < 60) return "just now"; if (s < 3600) return `${Math.floor(s / 60)}m ago`; return `${Math.floor(s / 3600)}h ago`; };
  const filtered = trash.filter(c => !search.trim() || fullName(c).toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <TopBar search={search} onSearch={setSearch} />
      <div className="page-wrap">
        <div className="d-flex align-items-center gap-2 mb-2">
          <span style={{ fontSize: 24 }}>🗑️</span>
          <h5 className="page-ttl mb-0">Trash</h5>
          <span className="text-muted" style={{ fontSize: 14 }}>({filtered.length})</span>
        </div>
        {filtered.length > 0 && <p className="text-muted mb-3" style={{ fontSize: 13 }}>Contacts are automatically deleted after 30 days.</p>}
        {filtered.length === 0 ? (
          <div className="empty-st">
            <div style={{ fontSize: 56, opacity: .2 }}>🗑️</div>
            <h5 style={{ color: "var(--g-text)", fontWeight: 700, fontFamily: "Outfit, sans-serif" }}>Trash is empty</h5>
            <p className="text-muted">Deleted contacts appear here for 30 days.</p>
          </div>
        ) : filtered.map(c => (
          <div key={c.id} className="c-row">
            <div className="c-chk" />
            <div className="c-av" style={{ background: getColor(c), opacity: .55 }}>{getInitials(c)}</div>
            <div className="c-info" style={{ opacity: .65 }}>
              <div className="c-name" style={{ textDecoration: "line-through" }}>{fullName(c)}</div>
              <div className="c-sub">{c.email}</div>
            </div>
            <div className="c-email" style={{ opacity: .6 }}>{c.company}</div>
            <div className="c-phone" style={{ fontSize: 12, color: "var(--g-light)" }}>Deleted {timeAgo(c.deletedAt)}</div>
            <div className="c-acts" style={{ opacity: 1 }}>
              <button className="ico-btn" style={{ color: "var(--g-blue)" }} title="Restore" onClick={() => restoreContact(c.id)}><IcoRestore /></button>
              <button className="ico-btn" style={{ color: "var(--g-red)" }} title="Delete permanently" onClick={() => delFromTrash(c.id)}><IcoTrash /></button>
            </div>
          </div>
        ))}
      </div>
      <Toast />
    </div>
  );
}
