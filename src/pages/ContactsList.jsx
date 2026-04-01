import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useContacts } from "../context/ContactsProvider";
import { TopBar } from "../components/TopBar.jsx";
import { ContactRow } from "../components/ContactRow.jsx";
import { Toast } from "../components/Toast.jsx";
import { LABEL_COLORS } from "../components/Sidebar.jsx";
import { fullName } from "../utils/utils.js";
import { IcoTrash, IcoAdd } from "../components/Icons.jsx";

export function ContactsList() {
  const { contacts, deleteContact } = useContacts();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(new Set());
  const [searchParams] = useSearchParams();
  const labelFilter = searchParams.get("label");
  const [page, setPage] = useState(1);
  const itemsPerPage = 15;
  const observerTarget = useRef(null);

  const filtered = useMemo(() => {
    let list = contacts;
    if (labelFilter) list = list.filter(c => c.label === labelFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(c => fullName(c).toLowerCase().includes(q) || c.email?.toLowerCase().includes(q) || c.phone?.includes(q) || c.company?.toLowerCase().includes(q));
    }
    return [...list].sort((a, b) => fullName(a).localeCompare(fullName(b)));
  }, [contacts, search, labelFilter]);

  useEffect(() => {
    setPage(1);
  }, [search, labelFilter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setPage(p => p + 1);
        }
      },
      { threshold: 0.1 }
    );
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => observer.disconnect();
  }, [page]);

  const visibleFiltered = useMemo(() => {
    return filtered.slice(0, page * itemsPerPage);
  }, [filtered, page]);

  const grouped = useMemo(() => {
    const map = {};
    visibleFiltered.forEach(c => { const k = fullName(c)[0]?.toUpperCase() || "#"; if (!map[k]) map[k] = []; map[k].push(c); });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [visibleFiltered]);

  const toggleSelect = id => setSelected(s => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const bulkDelete = () => { selected.forEach(id => deleteContact(id)); setSelected(new Set()); };

  return (
    <div>
      <TopBar search={search} onSearch={setSearch} />
      <div className="page-wrap">
        {labelFilter && (
          <div className="d-flex align-items-center gap-2 mb-3">
            <h5 className="page-ttl mb-0">{labelFilter}</h5>
            <span className="g-chip" style={{ background: LABEL_COLORS[labelFilter] + "22", color: LABEL_COLORS[labelFilter] }}>{filtered.length} contacts</span>
            <Link to="/contacts" className="btn btn-sm btn-light rounded-pill ms-2">Clear filter</Link>
          </div>
        )}

        {selected.size > 0 && (
          <div className="bulk-bar">
            <input type="checkbox" checked={selected.size === filtered.length} onChange={() => setSelected(selected.size === filtered.length ? new Set() : new Set(filtered.map(c => c.id)))} style={{ width: 16, height: 16 }} />
            <span>{selected.size} selected</span>
            <button className="btn btn-sm btn-outline-danger rounded-pill ms-auto d-flex align-items-center gap-1" onClick={bulkDelete}>
              <IcoTrash /> Delete selected
            </button>
            <button className="btn btn-sm btn-light rounded-pill" onClick={() => setSelected(new Set())}>Cancel</button>
          </div>
        )}

        {filtered.length > 0 && (
          <div className="c-row border-bottom rounded-0" style={{ cursor: "default", paddingBottom: 8, marginTop: 8 }}>
            <div className="c-chk">
              <input type="checkbox" checked={selected.size === filtered.length && filtered.length > 0}
                onChange={() => setSelected(selected.size === filtered.length ? new Set() : new Set(filtered.map(c => c.id)))} />
            </div>
            <div className="c-av" style={{ opacity: 0 }} />
            <div className="c-info" style={{ fontSize: 11, fontWeight: 700, color: "var(--g-muted)", textTransform: "uppercase", letterSpacing: ".5px" }}>Name</div>
            <div className="c-email" style={{ fontSize: 11, fontWeight: 700, color: "var(--g-muted)", textTransform: "uppercase" }}>Email</div>
            <div className="c-phone" style={{ fontSize: 11, fontWeight: 700, color: "var(--g-muted)", textTransform: "uppercase" }}>Phone</div>
            <div className="c-acts" style={{ visibility: "hidden" }} />
          </div>
        )}

        {grouped.length === 0 ? (
          <div className="empty-st">
            <div style={{ fontSize: 64, opacity: .2 }}>👤</div>
            <h5 style={{ color: "var(--g-text)", fontWeight: 700, fontFamily: "Outfit, sans-serif" }}>{search ? "No contacts found" : "No contacts yet"}</h5>
            <p className="text-muted">{search ? `No results for "${search}"` : "Add your first contact to get started."}</p>
            {!search && <Link to="/contacts/new" className="btn btn-primary rounded-pill px-4 mt-2">+ Add Contact</Link>}
          </div>
        ) : (
          <>
            {grouped.map(([letter, group]) => (
              <div key={letter}>
                <div className="grp-lbl">{letter}</div>
                {group.map(c => <ContactRow key={c.id} contact={c} selected={selected.has(c.id)} onSelect={toggleSelect} />)}
              </div>
            ))}
            
            {visibleFiltered.length < filtered.length && (
              <div ref={observerTarget} style={{ padding: "20px", textAlign: "center", color: "var(--g-muted)" }}>
                Loading more...
              </div>
            )}
            
            {visibleFiltered.length === filtered.length && filtered.length > itemsPerPage && (
              <div style={{ padding: "20px", textAlign: "center", color: "var(--g-muted)", opacity: 0.5, fontSize: "12px" }}>
                You've reached the end
              </div>
            )}
          </>
        )}
      </div>
      <Link to="/contacts/new" className="g-fab" title="New contact"><IcoAdd /></Link>
      <Toast />
    </div>
  );
}
