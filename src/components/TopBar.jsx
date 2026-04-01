import { useTheme } from "../context/ThemeContext";
import { IcoSearch, IcoRefresh, IcoGrid, IcoSun, IcoMoon } from "./Icons";

export function TopBar({ search, onSearch }) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="g-topbar">
      <div className="g-search" style={{ flex: 1 }}>
        <span style={{ color: "var(--g-muted)" }}><IcoSearch /></span>
        <input value={search} onChange={e => onSearch(e.target.value)} placeholder="Search contacts" />
        {search && <button onClick={() => onSearch("")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--g-muted)" }}>✕</button>}
      </div>
      <div className="d-flex align-items-center gap-2 ms-auto">
        <button className="ico-btn" onClick={toggleTheme} title={isDarkMode ? "Light mode" : "Dark mode"}>
          {isDarkMode ? <IcoSun /> : <IcoMoon />}
        </button>
        <button className="ico-btn"><IcoGrid /></button>
        <button className="g-avatar">U</button>
      </div>
    </div>
  );
}
