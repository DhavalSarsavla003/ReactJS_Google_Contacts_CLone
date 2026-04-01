import React from "react";

export const BootstrapCSS = () => (
  <>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
    />
  </>
);

export const AppStyles = () => (
  <style>{`
    :root {
      --bg-gradient: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
      --g-blue: #6366f1; 
      --g-blue-h: #4f46e5;
      --g-blue-l: #e0e7ff;
      --g-blue-m: #c7d2fe;
      --g-red: #ef4444;
      --g-green: #10b981;
      --g-yellow: #f59e0b;
      --g-surface: rgba(255, 255, 255, 0.85);
      --g-surface-solid: #ffffff;
      --g-bg: #f8fafc;
      --g-border: #e2e8f0;
      --g-text: #0f172a;
      --g-muted: #64748b;
      --g-light: #94a3b8;
      --sidebar-w: 280px;
      --sidebar-col: 88px;
      --header-h: 76px;
      
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      --shadow-blue: 0 10px 15px -3px rgba(99, 102, 241, 0.3), 0 4px 6px -2px rgba(99, 102, 241, 0.15);
      --radius-sm: 8px;
      --radius-md: 12px;
      --radius-lg: 16px;
      --radius-xl: 24px;
      --radius-full: 9999px;
    }
    
    body.dark-mode {
      --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
      --g-surface: rgba(30, 41, 59, 0.7);
      --g-surface-solid: #1e293b;
      --g-bg: #0f172a;
      --g-border: rgba(255, 255, 255, 0.1);
      --g-text: #f8fafc;
      --g-muted: #94a3b8;
      --g-light: #64748b;
      --g-blue-l: rgba(99, 102, 241, 0.15);
      --g-blue-m: rgba(99, 102, 241, 0.3);
    }
    
    * { box-sizing: border-box; transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease; }
    
    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg-gradient);
      color: var(--g-text);
      overflow-x: hidden;
      margin: 0;
      min-height: 100vh;
    }
    
    .app-root { display: flex; min-height: 100vh; }
    
    .main-content {
      flex: 1;
      transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      min-height: 100vh;
      background: transparent;
    }
    .main-content.s-open { margin-left: var(--sidebar-w); }
    .main-content.s-closed { margin-left: var(--sidebar-col); }

    /* Sidebar */
    .g-sidebar {
      width: var(--sidebar-w);
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      position: fixed;
      left: 0; top: 0; bottom: 0; z-index: 200;
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      border-right: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 1px 0 20px rgba(0, 0, 0, 0.02);
    }
    .dark-mode .g-sidebar {
      background: rgba(15, 23, 42, 0.8);
      border-right: 1px solid rgba(255, 255, 255, 0.05);
    }
    .g-sidebar.collapsed { width: var(--sidebar-col); }
    
    .sb-header {
      height: var(--header-h); display: flex; align-items: center; padding: 0 24px; gap: 16px; flex-shrink: 0;
    }
    .hmbg {
      width: 44px; height: 44px; border-radius: var(--radius-full); border: none; background: transparent;
      display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--g-text);
      transition: all 0.2s ease; flex-shrink: 0; margin-left: -4px;
    }
    .hmbg:hover { background: rgba(0,0,0,0.05); transform: scale(1.05); }
    
    .sb-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; white-space: nowrap; }
    .sb-logo-text { font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 700; color: var(--g-text); letter-spacing: -0.5px; }
    
    .sb-nav { flex: 1; overflow-y: auto; padding: 12px 0; }
    
    .sb-sec {
      font-size: 11px; font-weight: 700; color: var(--g-light); text-transform: uppercase;
      letter-spacing: 1.2px; padding: 16px 28px 8px; white-space: nowrap; font-family: 'Outfit', sans-serif;
    }
    .g-sidebar.collapsed .sb-sec { opacity: 0; pointer-events: none; }
    
    .nav-i {
      display: flex; align-items: center; gap: 16px; padding: 0 20px; height: 50px;
      border-radius: var(--radius-xl); margin: 6px 16px; cursor: pointer; color: var(--g-muted);
      text-decoration: none; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); white-space: nowrap; overflow: hidden;
    }
      border: 1px solid rgba(255, 255, 255, 0.9);
    }
    .dark-mode .nav-i:hover { background: rgba(255, 255, 255, 0.05); }
    .dark-mode .nav-i.active { 
      background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), var(--g-blue-l)); 
      border-color: rgba(255, 255, 255, 0.05);
    }
    .nav-ico { width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: currentColor; transition: transform 0.2s; }
    .nav-i:hover .nav-ico { transform: scale(1.1); }
    .nav-lbl { font-size: 15px; font-family: 'Inter', sans-serif; flex: 1; }
    .nav-badge { 
      border-radius: var(--radius-full); padding: 2px 10px; font-size: 12px; font-weight: 700;
      display: inline-flex; align-items: center; justify-content: center; min-width: 28px;
    }
    
    .sb-div { height: 1px; background: linear-gradient(90deg, transparent, var(--g-border), transparent); margin: 12px 24px; }

    /* TopBar */
    .g-topbar {
      height: var(--header-h); display: flex; align-items: center; padding: 0 32px; gap: 16px;
      background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.6); position: sticky; top: 0; z-index: 100;
    }
    .dark-mode .g-topbar {
      background: rgba(15, 23, 42, 0.5);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .g-search {
      flex: 1; max-width: 640px; height: 48px; background: rgba(255, 255, 255, 0.6);
      border-radius: var(--radius-full); display: flex; align-items: center; padding: 0 20px; gap: 12px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(255, 255, 255, 0.8);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02), var(--shadow-sm);
    }
      border-color: var(--g-blue-m); transform: translateY(-1px); 
    }
    .dark-mode .g-search { background: rgba(255, 255, 255, 0.05); border-color: rgba(255, 255, 255, 0.1); }
    .dark-mode .g-search:focus-within { background: rgba(255, 255, 255, 0.08); }
    .g-search input { flex: 1; border: none; background: transparent; font-size: 15px; font-family: 'Inter', sans-serif; color: var(--g-text); outline: none; }
    .g-search input::placeholder { color: var(--g-light); font-weight: 400; }
    
    .ico-btn {
      width: 44px; height: 44px; border-radius: var(--radius-full); border: 1px solid transparent; background: transparent;
      display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--g-muted);
      transition: all 0.2s ease; text-decoration: none;
    }
    .ico-btn:hover { background: rgba(255, 255, 255, 0.8); color: var(--g-text); border-color: rgba(255, 255, 255, 0.9); box-shadow: var(--shadow-sm); transform: translateY(-2px); }
    
    .g-avatar {
      width: 44px; height: 44px; border-radius: var(--radius-full);
      background: linear-gradient(135deg, var(--g-blue), #a855f7);
      display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 16px;
      cursor: pointer; border: 2px solid #fff; font-family: 'Outfit', sans-serif; box-shadow: var(--shadow-sm); transition: transform 0.2s;
    }
    .g-avatar:hover { transform: scale(1.05); }

    /* Page */
    .page-wrap { padding: 32px 48px; }
    .page-ttl { font-family: 'Outfit', sans-serif; font-size: 28px; font-weight: 700; color: var(--g-text); letter-spacing: -0.5px; display:flex; align-items: center; gap: 12px;}

    /* FAB */
    .g-fab {
      position: fixed; bottom: 32px; right: 32px; width: 64px; height: 64px; border-radius: var(--radius-xl);
      background: linear-gradient(135deg, var(--g-blue), #818cf8); color: #fff; border: none;
      display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 50;
      text-decoration: none; box-shadow: var(--shadow-blue); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .g-fab:hover { 
      background: linear-gradient(135deg, var(--g-blue-h), #6366f1); transform: scale(1.08) translateY(-4px); 
      box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.4), 0 10px 10px -5px rgba(99, 102, 241, 0.2); 
    }

    /* Contact row */
    .c-row {
      display: flex; align-items: center; padding: 14px 24px; border-radius: var(--radius-xl);
      cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); text-decoration: none; color: inherit;
      background: rgba(255, 255, 255, 0.6); border: 1px solid rgba(255, 255, 255, 0.5); margin-bottom: 8px;
    }
    .dark-mode .c-row {
      background: rgba(30, 41, 59, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    .c-row:hover { 
      background: var(--g-surface-solid); transform: translateY(-2px); 
      box-shadow: var(--shadow-md); border-color: #fff; text-decoration: none; color: inherit; 
    }
    .c-row:hover .c-acts { opacity: 1; transform: translateX(0); }
    .c-row.sel { background: var(--g-blue-l); border-color: rgba(255, 255, 255, 0.9); }
    
    .c-chk { width: 44px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
    .c-av {
      width: 44px; height: 44px; border-radius: var(--radius-full); display: flex; align-items: center;
      justify-content: center; font-size: 16px; font-weight: 600; color: #fff; flex-shrink: 0;
      font-family: 'Outfit', sans-serif; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); border: 2px solid rgba(255,255,255,0.5);
    }
    .c-info { flex: 1.5; padding: 0 16px; min-width: 0; }
    .c-name { font-size: 16px; font-weight: 600; font-family: 'Inter', sans-serif; color: var(--g-text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .c-sub { font-size: 13px; color: var(--g-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 2px; }
    .c-email { flex: 1; font-size: 14px; color: var(--g-muted); min-width: 150px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .c-phone { width: 140px; font-size: 14px; color: var(--g-muted); flex-shrink: 0; font-family: 'Inter', sans-serif; }
    .c-acts { display: flex; gap: 8px; opacity: 0; transform: translateX(10px); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); flex-shrink: 0; width: 120px; justify-content: flex-end; }
    
    .grp-lbl {
      font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 700; color: var(--g-blue);
      padding: 24px 24px 12px; display: flex; align-items: center; gap: 16px; letter-spacing: 0.5px;
    }
    .grp-lbl::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, var(--g-border), transparent); }

    /* Detail */
    .detail-wrap { max-width: 860px; padding: 32px; }
    .d-hero {
      background: var(--g-surface-solid); border-radius: var(--radius-xl); padding: 48px;
      display: flex; align-items: center; gap: 40px; margin-bottom: 24px;
      box-shadow: var(--shadow-lg); border: 1px solid rgba(255,255,255,0.8);
      position: relative; overflow: hidden;
    }
    .d-hero::before {
      content: ''; position: absolute; top:0; left:0; width: 100%; height: 140px;
      background: linear-gradient(135deg, var(--g-blue-l), #e0e7ff); z-index: 0;
    }
    .d-hero > * { z-index: 1; position: relative; }
    .d-av {
      width: 130px; height: 130px; border-radius: var(--radius-full); display: flex; align-items: center;
      justify-content: center; font-size: 48px; font-weight: 700; color: #fff; flex-shrink: 0;
      font-family: 'Outfit', sans-serif; border: 6px solid #fff; box-shadow: var(--shadow-md);
      margin-top: -30px;
    }
    .d-section {
      background: var(--g-surface-solid); border-radius: var(--radius-xl); padding: 32px; margin-bottom: 24px;
      box-shadow: var(--shadow-md); border: 1px solid rgba(255, 255, 255, 0.8); transition: transform 0.2s;
    }
    .d-section:hover { transform: translateY(-2px); box-shadow: var(--shadow-lg); }
    .d-section h6 {
      font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 700; color: var(--g-blue);
      text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 20px; display:flex; align-items:center; gap:8px;
    }
    .d-field { display: flex; align-items: flex-start; gap: 24px; padding: 16px 0; border-bottom: 1px dashed var(--g-border); transition: background 0.15s; border-radius: 12px; }
    .d-field:hover { background: var(--g-bg); padding-left: 16px; padding-right: 16px; margin-left: -16px; margin-right: -16px; }
    .d-field:last-child { border-bottom: none; }
    .d-fv { font-size: 16px; font-weight: 500; color: var(--g-text); }
    .d-fl { font-size: 13px; color: var(--g-light); margin-top: 4px; }

    /* Buttons */
    .btn-act {
      display: inline-flex; align-items: center; gap: 10px; padding: 10px 24px; border-radius: var(--radius-full);
      font-size: 15px; font-weight: 600; font-family: 'Outfit', sans-serif; cursor: pointer;
      border: 1px solid var(--g-border); background: var(--g-surface-solid); color: var(--g-text);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); text-decoration: none; box-shadow: var(--shadow-sm);
    }
    .btn-act:hover { border-color: var(--g-light); transform: translateY(-2px); box-shadow: var(--shadow-md); text-decoration: none; color: var(--g-text); }
    .btn-act:active { transform: translateY(0); }
    
    .btn-act.primary { background: linear-gradient(135deg, var(--g-blue), #818cf8); color: #fff; border: none; box-shadow: var(--shadow-blue); }
    .btn-act.primary:hover { background: linear-gradient(135deg, var(--g-blue-h), var(--g-blue)); box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.4); color: #fff;}
    
    .btn-act.danger { background: var(--g-surface-solid); color: var(--g-red); border-color: #fecaca; }
    .btn-act.danger:hover { background: #fef2f2; border-color: var(--g-red); box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.1); color: var(--g-red);}

    /* Form */
    .form-wrap { max-width: 800px; padding: 40px;}
    .form-card {
      background: var(--g-surface-solid); border-radius: var(--radius-lg); overflow: hidden;
      box-shadow: var(--shadow-lg); border: 1px solid rgba(255, 255, 255, 0.8);
    }
    .dark-mode .form-card { border-color: rgba(255, 255, 255, 0.1); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
    
    .form-head {
      padding: 40px; background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(99, 102, 241, 0.1));
      border-bottom: 1px solid var(--g-blue-l);
    }
    .form-badge {
      background: var(--g-blue-l); color: var(--g-blue); padding: 4px 12px; border-radius: var(--radius-full);
      font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
    }
    .form-avatar-up { display: flex; flex-direction: column; align-items: center; gap: 12px; }
    .av-prev {
      width: 100px; height: 100px; border-radius: var(--radius-xl); background: var(--g-blue);
      display: flex; align-items: center; justify-content: center; color: #fff;
      font-size: 36px; font-weight: 700; font-family: 'Outfit', sans-serif;
      box-shadow: var(--shadow-blue); border: 4px solid #fff;
    }
    .dark-mode .av-prev { border-color: #1e293b; }
    .av-up-btn {
      background: transparent; border: 1px dashed var(--g-blue); color: var(--g-blue);
      padding: 4px 12px; border-radius: var(--radius-md); font-size: 13px; font-weight: 600;
      cursor: pointer; transition: all 0.2s;
    }
    .av-up-btn:hover { background: var(--g-blue-l); }
    
    .form-title { font-family: 'Outfit', sans-serif; font-size: 28px; font-weight: 700; color: var(--g-text); margin: 0; }
    .form-subtitle { font-size: 15px; color: var(--g-muted); margin-top: 4px; }
    
    .form-sec-lbl {
      font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 700; color: var(--g-blue);
      text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 24px; display: flex; align-items: center; gap: 12px;
    }
    .form-sec-lbl::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, var(--g-blue-l), transparent); }
    
    .form-body { padding: 40px; display: flex; flex-direction: column; gap: 12px; }
    .form-footer {
      padding: 24px 40px; background: rgba(0,0,0,0.02); display: flex; justify-content: flex-end;
      gap: 16px; border-top: 1px solid var(--g-border);
    }
    .dark-mode .form-footer { background: rgba(255,255,255,0.02); }
    
    .mat-f { position: relative; width: 100%; transition: all 0.2s ease; margin-bottom: 24px; }
    .mat-input-wrapper { position: relative; display: flex; align-items: center; width: 100%; }
    
    .mat-f label {
      position: absolute; top: 50%; left: 16px; transform: translateY(-50%);
      font-size: 16px; color: var(--g-muted); pointer-events: none;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); background: transparent; padding: 0 4px;
      z-index: 10;
    }
    .mat-f.textarea label { top: 24px; transform: none; }
    .mat-f.up label { top: -10px; left: 12px; transform: translateY(0); font-size: 13px; font-weight: 600; color: var(--g-blue); background: var(--g-surface-solid); }
    .mat-f.foc label { color: var(--g-blue); }
    .mat-f.err label { color: var(--g-red); }
    
    .mat-f input, .mat-f .select-wrap select, .mat-f textarea {
      width: 100%; border: 2px solid var(--g-border); border-radius: var(--radius-md);
      padding: 16px 16px; font-size: 16px; font-family: 'Inter', sans-serif; color: var(--g-text);
      background: var(--g-bg); outline: none; appearance: none; transition: all 0.2s ease;
      position: relative; z-index: 5;
    }
    
    .mat-f.has-ico input, .mat-f.has-ico .select-wrap select, .mat-f.has-ico textarea { padding-left: 52px; }
    .mat-f.has-ico label { left: 52px; }
    .mat-f.has-ico.up label { left: 12px; }
    
    .mat-ico { position: absolute; left: 16px; color: var(--g-muted); transition: all 0.2s ease; z-index: 10; display: flex; align-items: center; justify-content: center; }
    .mat-f.foc .mat-ico { color: var(--g-blue); }
    .mat-f.err .mat-ico { color: var(--g-red); }
    
    .mat-f input:hover, .mat-f .select-wrap select:hover, .mat-f textarea:hover { border-color: var(--g-light); background: var(--g-surface-solid); }
    .mat-f.foc input, .mat-f.foc .select-wrap select, .mat-f.foc textarea { border-color: var(--g-blue); background: var(--g-surface-solid); box-shadow: 0 0 0 4px var(--g-blue-l); }
    .mat-f.err input, .mat-f.err .select-wrap select, .mat-f.err textarea { border-color: var(--g-red); }
    
    .dark-mode .mat-f.up label { background: #1e293b; }
    
    .select-wrap { width: 100%; position: relative; }
    .select-arrow { position: absolute; right: 16px; top: 50%; transform: translateY(-50%); pointer-events: none; color: var(--g-muted); z-index: 10; }
    
    .mat-err { font-size: 12px; font-weight: 500; color: var(--g-red); margin-top: -16px; padding-left: 12px; display:flex; align-items:center; gap:6px; margin-bottom: 20px; }
    .err-ico { width: 16px; height: 16px; background: var(--g-red); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 800; }
    .req-star { color: var(--g-red); }
    .mat-f textarea { resize: vertical; min-height: 100px; }

    /* Bulk bar */
    .bulk-bar {
      display: flex; align-items: center; gap: 16px; padding: 14px 24px;
      background: var(--g-surface-solid); border-radius: var(--radius-xl); margin-bottom: 24px;
      font-size: 15px; font-weight: 600; color: var(--g-text); font-family: 'Inter', sans-serif;
      box-shadow: var(--shadow-md); border: 1px solid var(--g-border);
      animation: gSlideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    @keyframes gSlideDown { from { transform: translateY(-10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

    /* Chip */
    .g-chip {
      display: inline-flex; align-items: center; gap: 6px; padding: 6px 16px;
      border-radius: var(--radius-full); font-size: 13px; font-weight: 600;
      font-family: 'Outfit', sans-serif; background: rgba(255, 255, 255, 0.7); box-shadow: var(--shadow-sm); border: 1px solid rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(4px);
    }

    /* Toast */
    .g-toast-wrap { position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%); z-index: 9999; }
    .g-toast {
      background: var(--g-text); color: #fff; padding: 16px 28px; border-radius: var(--radius-full);
      font-size: 15px; font-weight: 500; font-family: 'Outfit', sans-serif; display: flex; align-items: center; gap: 24px;
      box-shadow: var(--shadow-lg); animation: gSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(255,255,255,0.1);
    }
    @keyframes gSlideUp { from { transform: translateY(40px) scale(0.9); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }
    .g-toast-act { color: #818cf8; cursor: pointer; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; font-size: 13px; }

    /* Back btn */
    .back-btn {
      display: inline-flex; align-items: center; gap: 8px; color: var(--g-muted); font-size: 15px; font-weight: 600;
      cursor: pointer; background: var(--g-surface-solid); border: 1px solid var(--g-border); padding: 8px 16px; border-radius: var(--radius-full);
      transition: all 0.2s ease; font-family: 'Outfit', sans-serif; text-decoration: none; box-shadow: var(--shadow-sm);
    }
    .back-btn:hover { color: var(--g-text); border-color: var(--g-light); text-decoration: none; box-shadow: var(--shadow-md); transform: translateX(-2px); }

    /* Empty */
    .empty-st {
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      padding: 100px 40px; text-align: center; gap: 20px;
    }
    .empty-st svg { width: 80px; height: 80px; color: #cbd5e1; margin-bottom: 12px; }
    .empty-st h5 { font-family: 'Outfit', sans-serif; font-size: 24px; font-weight: 700; color: var(--g-text); margin:0; }
    .empty-st p { font-size: 15px; color: var(--g-muted); max-width: 400px; line-height: 1.6; }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 8px; border: 2px solid var(--g-bg); }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }

    /* Responsive */
    @media(max-width: 768px){
      .g-sidebar { width: var(--sidebar-col) !important; }
      .main-content { margin-left: var(--sidebar-col) !important; }
      .c-email, .c-phone { display: none; }
      .d-hero { flex-direction: column; text-align: center; padding: 32px 24px; }
      .d-av { margin-top: 0; margin-bottom: 16px; }
      .page-wrap { padding: 20px 16px; }
      .form-wrap { padding: 20px 16px; }
      .form-head, .form-body, .form-footer { padding-left: 24px; padding-right: 24px; }
    }
    
    input[type="checkbox"] {
      width: 18px; height: 18px; accent-color: var(--g-blue); cursor: pointer; border-radius: 4px; border: 2px solid var(--g-muted);
    }
    a { text-decoration: none; }
  `}</style>
);
