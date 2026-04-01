import React, { useState } from "react";

export function MatField({ label, value, onChange, type="text", required, error, textarea, options, icon: Icon }) {
  const [foc, setFoc] = useState(false);
  const up = foc || Boolean(value) || type === "date";
  
  const containerCls = `mat-f ${up ? "up" : ""} ${foc ? "foc" : ""} ${error ? "err" : ""} ${Icon ? "has-ico" : ""} ${textarea ? "textarea" : ""}`;

  return (
    <div className={containerCls} style={{ marginBottom: error ? "4px" : "20px" }}>
      <div className="mat-input-wrapper">
        {Icon && (
          <div className="mat-ico">
            <Icon size={20} />
          </div>
        )}
        
        <label>
          {label}
          {required && <span className="req-star"> *</span>}
        </label>

        {textarea ? (
          <textarea 
            value={value} 
            onChange={e => onChange(e.target.value)} 
            onFocus={() => setFoc(true)} 
            onBlur={() => setFoc(false)}
            rows={3}
          />
        ) : options ? (
          <div className="select-wrap">
            <select 
              value={value} 
              onChange={e => onChange(e.target.value)} 
              onFocus={() => setFoc(true)} 
              onBlur={() => setFoc(false)}
            >
              <option value="" disabled={required}></option>
              {options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <div className="select-arrow">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>
        ) : (
          <input 
            type={type} 
            value={value} 
            onChange={e => onChange(e.target.value)} 
            onFocus={() => setFoc(true)} 
            onBlur={() => setFoc(false)}
          />
        )}
      </div>
      {error && <div className="mat-err"><span className="err-ico">!</span> {error}</div>}
    </div>
  );
}
