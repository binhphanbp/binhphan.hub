/* ==========================================================================
   BAF736 · Investment Banking Workspace — Production Application Engine v3
   Full-Coverage Micro-Interactions:
   Sliding Segmented Pills · Sliding Tab Ink · 0fr->1fr Smooth Accordions
   Circular Theme View-Transition · Cursor Spotlight · Tactile Web Audio
   Live SVG Progress Rings · Mechanical Keycap Depression · Zero-DOM-Wipe
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------- 1.5px Vector Icon System (Zero Emoji) ---------------- */
  const svgWrap = (body, cls) =>
    `<svg class="ico ${cls || ""}" viewBox="0 0 24 24" aria-hidden="true">${body}</svg>`;

  const I = {
    mark: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-8h6v8"/></svg>`,
    grid: svgWrap(`<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>`),
    syllabus: svgWrap(`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/>`),
    book: svgWrap(`<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>`),
    target: svgWrap(`<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>`),
    list: svgWrap(`<line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><polyline points="4 6 5 7 7 5"/><polyline points="4 12 5 13 7 11"/><polyline points="4 18 5 19 7 17"/>`),
    pen: svgWrap(`<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>`),
    layers: svgWrap(`<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>`),
    briefcase: svgWrap(`<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`),
    sliders: svgWrap(`<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="2" y1="14" x2="6" y2="14"/><line x1="10" y1="8" x2="14" y2="8"/><line x1="18" y1="16" x2="22" y2="16"/>`),
    chart: svgWrap(`<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>`),
    search: svgWrap(`<circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16.2" y2="16.2"/>`),
    sidebar: svgWrap(`<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/>`),
    sun: svgWrap(`<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>`),
    moon: svgWrap(`<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`),
    volume: svgWrap(`<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>`),
    volumeMute: svgWrap(`<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>`),
    pause: svgWrap(`<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`),
    play: svgWrap(`<polygon points="6 4 20 12 6 20 6 4"/>`),
    stop: svgWrap(`<rect x="5" y="5" width="14" height="14" rx="1.5"/>`),
    check: svgWrap(`<polyline points="20 6 9 17 4 12"/>`),
    checkDraw: `<svg class="ico ico-sm draw-svg" viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`,
    x: svgWrap(`<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`),
    xDraw: `<svg class="ico ico-sm draw-svg" viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    flag: svgWrap(`<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>`),
    flagFill: svgWrap(`<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" fill="currentColor"/><line x1="4" y1="22" x2="4" y2="15"/>`),
    bookmark: svgWrap(`<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>`),
    bookmarkFill: svgWrap(`<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" fill="currentColor"/>`),
    arrowL: svgWrap(`<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>`, "arrow-nudge-l"),
    arrowR: svgWrap(`<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>`, "arrow-nudge-r"),
    arrowUp: svgWrap(`<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>`, "ico-sm"),
    chevR: svgWrap(`<polyline points="9 18 15 12 9 6"/>`, "ico-sm"),
    chevD: svgWrap(`<polyline points="6 9 12 15 18 9"/>`, "ico-sm"),
    clock: svgWrap(`<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/>`, "ico-sm"),
    lock: svgWrap(`<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`),
    unlock: svgWrap(`<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>`),
    zoom: svgWrap(`<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>`, "ico-sm"),
    rotate: svgWrap(`<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>`, "ico-spin"),
    shuffle: svgWrap(`<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>`, "ico-pop"),
    eye: svgWrap(`<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>`),
    eyeOff: svgWrap(`<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/>`),
    trash: svgWrap(`<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`),
    zap: svgWrap(`<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`, "ico-sm"),
    copy: svgWrap(`<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>`, "ico-xs"),
    highlight: svgWrap(`<path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/>`, "ico-xs"),
    maximize: svgWrap(`<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>`),
    minimize: svgWrap(`<path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>`),
    autoScrollOff: svgWrap(`<rect x="6" y="2.5" width="12" height="19" rx="6"/><line x1="12" y1="6.5" x2="12" y2="10.5"/><polyline points="9.5 13.5 12 16 14.5 13.5"/>`),
    autoScrollOn: svgWrap(`<polyline points="7 6 12 11 17 6"/><polyline points="7 13 12 18 17 13"/>`),
    filter: svgWrap(`<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>`, "ico-sm"),
    download: svgWrap(`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`, "ico-sm"),
    toc: svgWrap(`<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>`, "ico-sm"),
    checkXs: svgWrap(`<polyline points="20 6 9 17 4 12"/>`, "ico-xs"),
    xXs: svgWrap(`<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`, "ico-xs")
  };

  function miniRingSVG(done, total) {
    const pct = total ? done / total : 0;
    if (total > 0 && done >= total) {
      return `<svg class="mini-ring" viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="7" fill="var(--ok)"/>
        <polyline points="11.3 5.7 7.1 10.2 4.7 7.9" fill="none" stroke="#ffffff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    }
    const r = 5.6, c = 2 * Math.PI * r;
    const off = c * (1 - pct);
    const col = pct > 0 ? "var(--brand)" : "transparent";
    return `<svg class="mini-ring" viewBox="0 0 16 16" aria-hidden="true">
      <g class="ring-rot">
        <circle cx="8" cy="8" r="${r}" fill="none" stroke="var(--ring-track)" stroke-width="2"/>
        <circle cx="8" cy="8" r="${r}" fill="none" stroke="${col}" stroke-width="2" stroke-linecap="round" stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${off.toFixed(2)}"/>
      </g>
    </svg>`;
  }

  /* ---------------- Micro-Burst, Tactile Ripple & Gliding Tooltip ---------------- */
  function spawnMicroBurst(el, color) {
    if (!el || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const cols = [color || "var(--ok)", "var(--accent)", "var(--warn)"];
    for (let i = 0; i < 8; i++) {
      const dot = document.createElement("span");
      dot.className = "micro-burst-dot";
      const ang = (Math.PI * 2 * i) / 8 + (Math.random() - 0.5) * 0.35;
      const dist = 16 + Math.random() * 14;
      dot.style.left = cx + "px";
      dot.style.top = cy + "px";
      dot.style.background = cols[i % cols.length];
      dot.style.setProperty("--dx", (Math.cos(ang) * dist).toFixed(1) + "px");
      dot.style.setProperty("--dy", (Math.sin(ang) * dist).toFixed(1) + "px");
      document.body.appendChild(dot);
      dot.addEventListener("animationend", () => dot.remove(), { once: true });
    }
  }

  function spawnRipple(host, ev) {
    if (!host || host.disabled) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = host.getBoundingClientRect();
    const size = Math.max(r.width, r.height) * 1.15;
    const wave = document.createElement("span");
    wave.className = "ripple-wave";
    wave.style.width = size + "px";
    wave.style.height = size + "px";
    wave.style.left = (ev.clientX - r.left) + "px";
    wave.style.top = (ev.clientY - r.top) + "px";
    host.appendChild(wave);
    wave.addEventListener("animationend", () => {
      wave.remove();
      if (host.dataset && host.dataset.dynRipple === "1" && !host.querySelector(":scope > .ripple-wave")) {
        host.classList.remove("ripple-host");
        delete host.dataset.dynRipple;
      }
    }, { once: true });
  }

  function mutateBtn(btn, fn) {
    if (!btn) return;
    const fxNodes = [...btn.querySelectorAll(":scope > .btn-flair, :scope > .ripple-wave")];
    const wasHovered = btn.classList.contains("is-hovered");
    fxNodes.forEach((n) => n.remove());
    fn(btn);
    if (wasHovered && !btn.disabled) btn.classList.add("is-hovered");
    for (let i = fxNodes.length - 1; i >= 0; i--) {
      btn.insertBefore(fxNodes[i], btn.firstChild);
    }
    if (activeTipTarget === btn) {
      const tip = document.getElementById("floatTip");
      if (tip && tip.classList.contains("show")) positionFloatTip(btn);
    }
  }

  function upgradeNativeTitles(root) {
    (root || document).querySelectorAll("[title]").forEach((el) => {
      const t = (el.getAttribute("title") || "").trim();
      if (t && !el.hasAttribute("data-tip")) el.setAttribute("data-tip", t);
      el.removeAttribute("title");
    });
  }

  let tipTimer = null;
  let tipHideTimer = null;
  let activeTipTarget = null;

  function positionFloatTip(target) {
    const tip = $("#floatTip");
    if (!tip || !target || !target.isConnected) return;
    const txt = target.getAttribute("data-tip");
    if (!txt) { hideFloatTip(true); return; }
    const sub = target.getAttribute("data-tip-sub") || "";
    tip.innerHTML = esc(txt) + (sub ? `<span class="tip-sub">${esc(sub)}</span>` : "");

    const rect = target.getBoundingClientRect();
    const pos = target.getAttribute("data-tip-pos") || "top";
    const tw = tip.offsetWidth || 180;
    const th = tip.offsetHeight || 30;
    let x = rect.left + rect.width / 2 - tw / 2;
    let y = rect.top - th - 8;

    if (pos === "right") {
      x = rect.right + 10;
      y = rect.top + rect.height / 2 - th / 2;
    } else if (pos === "left") {
      x = rect.left - tw - 10;
      y = rect.top + rect.height / 2 - th / 2;
    } else if (pos === "bottom" || y < 8) {
      y = rect.bottom + 8;
    }

    x = Math.max(8, Math.min(window.innerWidth - tw - 8, x));
    y = Math.max(8, Math.min(window.innerHeight - th - 8, y));

    if (!tip.classList.contains("show")) {
      tip.style.transition = "opacity 0.13s ease";
      tip.style.setProperty("--tx", Math.round(x) + "px");
      tip.style.setProperty("--ty", Math.round(y) + "px");
      void tip.offsetWidth;
      tip.style.transition = "";
    } else {
      tip.style.setProperty("--tx", Math.round(x) + "px");
      tip.style.setProperty("--ty", Math.round(y) + "px");
    }
    tip.classList.add("show");
  }

  function scheduleFloatTip(target) {
    clearTimeout(tipHideTimer);
    clearTimeout(tipTimer);
    activeTipTarget = target;
    const tip = $("#floatTip");
    const alreadyWarm = tip && tip.classList.contains("show");
    if (alreadyWarm) {
      positionFloatTip(target);
    } else {
      tipTimer = setTimeout(() => {
        if (activeTipTarget === target) positionFloatTip(target);
      }, 95);
    }
  }

  function hideFloatTip(immediate) {
    clearTimeout(tipTimer);
    clearTimeout(tipHideTimer);
    activeTipTarget = null;
    const tip = $("#floatTip");
    if (!tip) return;
    if (immediate) tip.classList.remove("show");
    else tipHideTimer = setTimeout(() => tip.classList.remove("show"), 70);
  }

  function enhanceSearchField(inp, onClear) {
    if (!inp || !inp.parentElement) return;
    let btn = inp.parentElement.querySelector(".search-clear");
    if (!btn) {
      btn = document.createElement("button");
      btn.type = "button";
      btn.className = "search-clear";
      btn.setAttribute("data-tip", "Xoá từ khoá");
      btn.innerHTML = I.xXs;
      inp.parentElement.appendChild(btn);
      btn.onclick = () => {
        SFX.tap();
        inp.value = "";
        btn.classList.remove("visible");
        if (onClear) onClear();
        inp.focus();
      };
    }
    const sync = () => btn.classList.toggle("visible", inp.value.length > 0);
    inp.addEventListener("input", sync);
    sync();
  }

  const EMOJI_RE = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{FE0F}]/gu;
  const cleanEmoji = (s) => String(s == null ? "" : s).replace(EMOJI_RE, "").replace(/\s{2,}/g, " ");

  /* ---------------- Subtle Tactile Web Audio Synthesizer ---------------- */
  let soundOn = localStorage.getItem("ibc_sfx") !== "0";
  let audioCtx = null;
  function getAudio() {
    if (!soundOn) return null;
    try {
      if (!audioCtx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (AC) audioCtx = new AC();
      }
      if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
      return audioCtx;
    } catch (e) { return null; }
  }
  const SFX = {
    tap() {
      const ctx = getAudio(); if (!ctx) return;
      const t = ctx.currentTime;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "triangle";
      o.frequency.setValueAtTime(520, t);
      o.frequency.exponentialRampToValueAtTime(220, t + 0.024);
      g.gain.setValueAtTime(0.025, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.025);
      o.connect(g); g.connect(ctx.destination);
      o.start(t); o.stop(t + 0.026);
    },
    flip() {
      const ctx = getAudio(); if (!ctx) return;
      const t = ctx.currentTime;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(320, t);
      o.frequency.exponentialRampToValueAtTime(640, t + 0.045);
      g.gain.setValueAtTime(0.028, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      o.connect(g); g.connect(ctx.destination);
      o.start(t); o.stop(t + 0.052);
    },
    correct(stk) {
      const ctx = getAudio(); if (!ctx) return;
      const t = ctx.currentTime;
      const mult = Math.pow(1.035, Math.min(8, Math.max(0, (stk || 1) - 1)));
      [523.25 * mult, 659.25 * mult].forEach((freq, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(freq, t + i * 0.055);
        g.gain.setValueAtTime(0.0001, t + i * 0.055);
        g.gain.linearRampToValueAtTime(0.042, t + i * 0.055 + 0.012);
        g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.055 + 0.16);
        o.connect(g); g.connect(ctx.destination);
        o.start(t + i * 0.055); o.stop(t + i * 0.055 + 0.17);
      });
    },
    wrong() {
      const ctx = getAudio(); if (!ctx) return;
      const t = ctx.currentTime;
      [210, 175].forEach((freq, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = "triangle";
        o.frequency.setValueAtTime(freq, t + i * 0.065);
        g.gain.setValueAtTime(0.035, t + i * 0.065);
        g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.065 + 0.11);
        o.connect(g); g.connect(ctx.destination);
        o.start(t + i * 0.065); o.stop(t + i * 0.065 + 0.12);
      });
    },
    complete() {
      const ctx = getAudio(); if (!ctx) return;
      const t = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(freq, t + i * 0.065);
        g.gain.setValueAtTime(0.04, t + i * 0.065);
        g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.065 + 0.22);
        o.connect(g); g.connect(ctx.destination);
        o.start(t + i * 0.065); o.stop(t + i * 0.065 + 0.24);
      });
    }
  };

  /* ---------------- Sliding Indicators (.seg-thumb & .uline-ink) ---------------- */
  function updateSegThumb(seg) {
    if (!seg) return;
    let thumb = seg.querySelector(".seg-thumb");
    if (!thumb) {
      thumb = document.createElement("span");
      thumb.className = "seg-thumb";
      seg.prepend(thumb);
    }
    const active = seg.querySelector("button.active");
    if (!active || !active.offsetWidth) {
      seg.classList.remove("seg-ready");
      return;
    }
    const firstMount = !seg.classList.contains("seg-ready");
    if (firstMount) thumb.style.transition = "none";
    thumb.style.width = active.offsetWidth + "px";
    thumb.style.height = active.offsetHeight + "px";
    thumb.style.transform = `translate(${active.offsetLeft}px, ${active.offsetTop}px)`;
    if (firstMount) {
      void thumb.offsetWidth;
      thumb.style.transition = "";
      seg.classList.add("seg-ready");
    }
  }

  function updateTabInk(bar) {
    if (!bar) return;
    let ink = bar.querySelector(".uline-ink");
    if (!ink) {
      ink = document.createElement("span");
      ink.className = "uline-ink";
      bar.appendChild(ink);
    }
    const active = bar.querySelector(".uline-tab.active");
    if (!active || !active.offsetWidth) {
      bar.classList.remove("tabs-ready");
      return;
    }
    const firstMount = !bar.classList.contains("tabs-ready");
    if (firstMount) ink.style.transition = "none";
    ink.style.width = active.offsetWidth + "px";
    ink.style.transform = `translateX(${active.offsetLeft}px)`;
    if (firstMount) {
      void ink.offsetWidth;
      ink.style.transition = "";
      bar.classList.add("tabs-ready");
    }
  }

  function updateRangeFill(inp) {
    const min = inp.min !== "" ? parseFloat(inp.min) : 0;
    const max = inp.max !== "" ? parseFloat(inp.max) : 100;
    const val = parseFloat(inp.value);
    const pct = max > min ? ((val - min) / (max - min)) * 100 : 50;
    inp.style.setProperty("--range-pct", Math.min(100, Math.max(0, pct)).toFixed(1) + "%");
  }

  function syncRangeSliders(root) {
    (root || document).querySelectorAll('input[type="range"]').forEach(updateRangeFill);
  }

  /* ---------------- Custom Pastel Popover Select Enhancer ---------------- */
  let activeCselBtn = null;
  let activeCselSelect = null;

  function closeCustomSelect() {
    const portal = $("#cselPortal");
    if (portal) portal.classList.remove("open");
    if (activeCselBtn) activeCselBtn.classList.remove("open");
    activeCselBtn = null;
    activeCselSelect = null;
  }

  function openCustomSelect(sel, btn) {
    let portal = $("#cselPortal");
    if (!portal) {
      portal = document.createElement("div");
      portal.id = "cselPortal";
      portal.className = "csel-menu";
      document.body.appendChild(portal);
    }
    if (activeCselBtn === btn && portal.classList.contains("open")) {
      closeCustomSelect();
      return;
    }
    closeCustomSelect();
    SFX.tap();
    activeCselBtn = btn;
    activeCselSelect = sel;
    btn.classList.add("open");

    portal.innerHTML = [...sel.options].map((opt, idx) => {
      const isSel = idx === sel.selectedIndex;
      return `<button type="button" class="csel-opt ${isSel ? "selected" : ""}" data-copt="${idx}">
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(opt.text)}</span>
        ${isSel ? `<span class="csel-opt-chk">${I.checkXs}</span>` : ""}
      </button>`;
    }).join("");

    const rect = btn.getBoundingClientRect();
    if (window.innerWidth <= 680) {
      portal.style.width = "";
      portal.style.minWidth = "0";
      portal.classList.add("open");
      const mh = portal.offsetHeight || 220;
      const vh = (window.visualViewport && window.visualViewport.height) || window.innerHeight;
      const spaceBelow = vh - rect.bottom - 16;
      if (spaceBelow < mh && rect.top > mh + 16) {
        portal.style.top = Math.max(12, Math.round(rect.top - mh - 6)) + "px";
      } else {
        portal.style.top = Math.max(12, Math.min(vh - mh - 14, Math.round(rect.bottom + 6))) + "px";
      }
    } else {
      portal.style.width = "max-content";
      portal.style.minWidth = Math.round(rect.width) + "px";
      portal.classList.add("open");
      const pw = portal.offsetWidth || Math.max(rect.width, 220);
      const left = Math.max(10, Math.min(window.innerWidth - pw - 12, rect.left));
      portal.style.left = Math.round(left) + "px";
      const mh = portal.offsetHeight || 220;
      const spaceBelow = window.innerHeight - rect.bottom - 12;
      if (spaceBelow < mh && rect.top > mh + 12) {
        portal.style.top = Math.round(rect.top - mh - 6) + "px";
      } else {
        portal.style.top = Math.round(rect.bottom + 6) + "px";
      }
    }

    const selOptEl = portal.querySelector(".csel-opt.selected");
    if (selOptEl) selOptEl.scrollIntoView({ block: "nearest" });

    portal.querySelectorAll("[data-copt]").forEach((ob) => {
      ob.onclick = (ev) => {
        ev.stopPropagation();
        const idx = +ob.dataset.copt;
        if (sel.selectedIndex !== idx) {
          sel.selectedIndex = idx;
          if (sel._syncLabel) sel._syncLabel();
          closeCustomSelect();
          sel.dispatchEvent(new Event("input", { bubbles: true }));
          sel.dispatchEvent(new Event("change", { bubbles: true }));
        } else {
          SFX.tap();
          closeCustomSelect();
        }
      };
    });
  }

  function enhanceSelects(root) {
    (root || document).querySelectorAll("select.sel, .ctl select").forEach((sel) => {
      if (sel._customEnhanced) {
        if (sel._syncLabel) sel._syncLabel();
        return;
      }
      sel._customEnhanced = true;
      const isFull = sel.style.width === "100%" || !!sel.closest(".ctl");
      const wrap = document.createElement("div");
      wrap.className = "csel-wrap" + (isFull ? " csel-full" : "");
      if (sel.id === "ttsSpeed") wrap.style.height = "26px";

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "csel-btn" + (sel.classList.contains("mono") ? " mono" : "");
      if (sel.id === "ttsSpeed") btn.style.cssText = "height:26px;padding:0 8px;font-size:0.75rem";
      btn.innerHTML = `<span class="csel-lbl"></span><span class="csel-chev">${I.chevD}</span>`;

      sel._syncLabel = () => {
        const curOpt = sel.options[sel.selectedIndex] || sel.options[0];
        const lbl = btn.querySelector(".csel-lbl");
        if (lbl) lbl.textContent = curOpt ? curOpt.text : "";
      };
      sel._syncLabel();

      sel.parentNode.insertBefore(wrap, sel);
      wrap.appendChild(sel);
      wrap.appendChild(btn);
      sel.classList.add("sel-native-hidden");

      btn.onclick = (ev) => {
        ev.stopPropagation();
        openCustomSelect(sel, btn);
      };
    });
  }

  function syncSlidingControls(root) {
    const scope = root || document;
    scope.querySelectorAll(".seg").forEach(updateSegThumb);
    scope.querySelectorAll(".uline-tabs").forEach(updateTabInk);
    syncRangeSliders(scope);
    enhanceSelects(scope);
  }

  function animateNumbers(root) {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    (root || document).querySelectorAll("[data-countup]").forEach((el) => {
      const target = parseFloat(el.dataset.countup);
      if (isNaN(target)) return;
      const suffix = el.dataset.suffix || "";
      const decimals = +(el.dataset.decimals || 0);
      const sepLocale = el.dataset.locale === "vi";
      const t0 = performance.now();
      const dur = 480;
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        const ease = 1 - Math.pow(1 - p, 3);
        const val = target * ease;
        let str = decimals ? val.toFixed(decimals).replace(".", ",") : Math.round(val).toString();
        if (sepLocale && !decimals) str = Math.round(val).toLocaleString("vi-VN");
        el.textContent = str + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  function flashKeycap(keyId) {
    document.querySelectorAll(`[data-kbd="${keyId}"]`).forEach((el) => {
      el.classList.remove("is-pressed");
      void el.offsetWidth;
      el.classList.add("is-pressed");
      setTimeout(() => el.classList.remove("is-pressed"), 145);
    });
  }

  /* ---------------- Data Assembly ---------------- */
  const CHAPTERS = window.IB_CONTENT || [];
  const META = window.COURSE_META || {};
  const MCQS = [
    ...(window.QUIZ_BANK || []),
    ...(window.QUIZ_BANK2 || []),
    ...(window.QUIZ_BANK3 || []),
    ...(window.QUIZ_BANK4 || []),
    ...(window.QUIZ_BANK5 || []),
    ...(window.QUIZ_BANK6 || [])
  ];
  const MCQ_MAP = new Map(MCQS.map((q) => [q.id, q]));
  const ESSAYS = [
    ...(window.ESSAY_BANK || []),
    ...(window.ESSAY_BANK2 || []),
    ...(window.ESSAY_BANK3 || []),
    ...(window.ESSAY_BANK4 || []),
    ...(window.ESSAY_BANK5 || []),
    ...(window.ESSAY_BANK6 || []),
    ...(window.ESSAY_BANK7 || [])
  ];
  const ESSAY_MAP = new Map(ESSAYS.map((e) => [e.id, e]));
  const REVIEWS = window.REVIEW_BANK || [];
  const FLASHCARDS = window.FLASHCARDS || [];
  const CASES = (window.IB_CASE_LIB || []).slice().sort((a, b) => a.ch - b.ch || (a.so || 0) - (b.so || 0));
  const FORMULAS = window.FORMULAS || {};
  const FORMULAS_VI = window.FORMULAS_VI || {};
  const EXAM_BLUEPRINT = { 1: 5, 2: 5, 3: 10, 4: 5, 5: 10, 6: 5 };

  /* ---------------- Storage & State Helpers ---------------- */
  const store = {
    get(k, dflt) {
      try { const v = localStorage.getItem("ibc_" + k); return v !== null ? JSON.parse(v) : dflt; }
      catch (e) { return dflt; }
    },
    set(k, v) {
      try { localStorage.setItem("ibc_" + k, JSON.stringify(v)); } catch (e) {}
    }
  };

  const LANG = () => (window.I18N && window.I18N.lang) || "vi";
  const isEn = () => LANG() === "en";
  const isBi = () => LANG() === "bi";
  const ui = (vi, en) => (isEn() ? en : vi);
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  const L = (obj, f) => (window.L ? window.L(obj, f) : (obj && (obj[f + "Vi"] || obj[f])) || "");
  const Lp = (obj, f) => (window.Lp ? window.Lp(obj, f) : (obj && (obj[f + "Vi"] || obj[f])) || "");
  const h1Bi = (obj, f, prefix) => {
    const pre = prefix ? esc(prefix) : "";
    if (isBi() && obj && obj[f + "Vi"] && obj[f] && obj[f + "Vi"] !== obj[f]) {
      return `${pre}${esc(obj[f + "Vi"])}<span class="h1-sub-en" lang="en">${esc(obj[f])}</span>`;
    }
    return `${pre}${esc(Lp(obj, f))}`;
  };
  const Lg = (obj, f, lg) => {
    if (!obj) return "";
    const v = obj[f + "Vi"];
    return lg === "vi" && v != null && v !== "" ? v : obj[f];
  };
  const theoNN = (fn) => (isBi() && window.ghepKhoi ? window.ghepKhoi(fn("vi"), fn("en")) : fn(isEn() ? "en" : "vi"));

  function sectionHTML(ch, sec, lg) {
    lg = lg || (isEn() ? "en" : "vi");
    const ovr = store.get("content_ovr", {});
    const key = ch.id + "|" + sec.id + (lg === "vi" ? "|vi" : "");
    return ovr[key] || Lg(sec, "html", lg);
  }

  function estimateReadMins(htmlStr) {
    const words = String(htmlStr || "").replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
    return Math.max(2, Math.round(words / 190));
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ---------------- Streak & Celebration FX ---------------- */
  let streak = 0;
  const $ = (sel) => document.querySelector(sel);

  function updateStreak(isCorrect) {
    if (isCorrect) {
      streak++;
      SFX.correct(streak);
    } else {
      streak = 0;
      SFX.wrong();
    }
    const pill = $("#streakPill");
    if (!pill) return;
    if (streak >= 2) {
      pill.classList.remove("hidden", "bump");
      pill.innerHTML = `${I.zap} <span class="streak-lbl">${ui("Chuỗi đúng", "Streak")}</span> <span>${streak}x</span>`;
      void pill.offsetWidth;
      pill.classList.add("bump");
    } else {
      pill.classList.add("hidden");
    }
  }

  function playCelebrationParticles() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cvs = $("#fxCanvas");
    if (!cvs) {
      cvs = document.createElement("canvas");
      cvs.id = "fxCanvas";
      document.body.appendChild(cvs);
    }
    const ctx = cvs.getContext("2d");
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    const colors = palette === "hub"
      ? ["#1f3368", "#a71b29", "#d4952a", "#3b66c4", "#108c6e"]
      : ["#d44d82", "#ec7aa8", "#8b5cf6", "#129676", "#f59e0b"];
    const parts = Array.from({ length: 56 }, () => ({
      x: cvs.width * (0.3 + Math.random() * 0.4),
      y: cvs.height * 0.28,
      vx: (Math.random() - 0.5) * 11,
      vy: -Math.random() * 9 - 3,
      size: 4 + Math.random() * 4,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.2,
      col: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1
    }));
    let frame = 0;
    function step() {
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      frame++;
      let alive = false;
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.28;
        p.rot += p.vr;
        if (frame > 35) p.alpha -= 0.028;
        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.fillStyle = p.col;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
          ctx.restore();
        }
      }
      if (alive && frame < 95) requestAnimationFrame(step);
      else ctx.clearRect(0, 0, cvs.width, cvs.height);
    }
    requestAnimationFrame(step);
  }

  /* ---------------- Progress, Bookmarks, Mistakes ---------------- */
  function getProgress() { return store.get("progress", { read: {} }); }
  function isSecRead(chId, secId) { return !!getProgress().read[chId + "|" + secId]; }
  function setSecRead(chId, secId, val) {
    const p = getProgress();
    if (val) p.read[chId + "|" + secId] = true;
    else delete p.read[chId + "|" + secId];
    store.set("progress", p);
  }
  function chProgress(ch) {
    const p = getProgress();
    const done = ch.sections.filter((s) => p.read[ch.id + "|" + s.id]).length;
    return { done, total: ch.sections.length };
  }
  function nextUnreadTarget() {
    for (const ch of CHAPTERS) {
      for (let i = 0; i < ch.sections.length; i++) {
        if (!isSecRead(ch.id, ch.sections[i].id)) return { ch, secIdx: i, sec: ch.sections[i] };
      }
    }
    return { ch: CHAPTERS[0], secIdx: 0, sec: CHAPTERS[0].sections[0] };
  }

  function getStarsMcq() { return store.get("stars_mcq", {}); }
  function toggleStarMcq(id) {
    SFX.tap();
    const s = getStarsMcq();
    if (s[id]) delete s[id]; else s[id] = true;
    store.set("stars_mcq", s);
    showToast(s[id] ? ui("Đã lưu vào câu hỏi đánh dấu", "Question bookmarked") : ui("Đã bỏ lưu câu hỏi", "Bookmark removed"));
    return !!s[id];
  }

  function getWrongMcq() { return store.get("wrong_mcq", {}); }
  function recordWrongMcq(id) {
    const w = getWrongMcq();
    w[id] = (w[id] || 0) + 1;
    store.set("wrong_mcq", w);
  }
  function removeWrongMcq(id) {
    SFX.tap();
    const w = getWrongMcq();
    delete w[id];
    store.set("wrong_mcq", w);
    showToast(ui("Đã đánh dấu thuộc câu hỏi này", "Removed from mistake list"));
  }

  function getStarsEssay() { return store.get("stars_essay", {}); }
  function toggleStarEssay(id) {
    SFX.tap();
    const s = getStarsEssay();
    if (s[id]) delete s[id]; else s[id] = true;
    store.set("stars_essay", s);
    showToast(s[id] ? ui("Đã lưu bài tự luận", "Essay bookmarked") : ui("Đã bỏ lưu bài tự luận", "Removed bookmark"));
    return !!s[id];
  }

  function getFcKnown() { return store.get("fc_known", {}); }
  function toggleFcKnown(idx) {
    const k = getFcKnown();
    if (k[idx]) delete k[idx]; else k[idx] = true;
    store.set("fc_known", k);
    return !!k[idx];
  }

  /* ---------------- Admin PIN Verification (PBKDF2-HMAC-SHA-256 · Zero Plaintext) ---------------- */
  const ADMIN_PIN_SALT = "BAF736-HUB-ADMIN-RESET-SALT-v1";
  const ADMIN_PIN_ITER = 2500;
  const ADMIN_PIN_HASH = "78a986c8a7f75c55deb0f9acce417c275ef4a444113a2c1c76f8d51a33923278";

  function verifyAdminPin(candidate) {
    const clean = String(candidate || "").trim();
    if (!clean || clean.length < 4 || clean.length > 32 || !window.IBKhoa) return false;
    try {
      const derived = window.IBKhoa.hexRa(
        window.IBKhoa.pbkdf2(
          window.IBKhoa.utf8(clean),
          window.IBKhoa.utf8(ADMIN_PIN_SALT),
          ADMIN_PIN_ITER
        )
      );
      if (derived.length !== ADMIN_PIN_HASH.length) return false;
      let diff = 0;
      for (let i = 0; i < derived.length; i++) diff |= derived.charCodeAt(i) ^ ADMIN_PIN_HASH.charCodeAt(i);
      return diff === 0;
    } catch (e) {
      return false;
    }
  }

  function performFullStudyReset() {
    clearInterval(examTimer);
    stopTTS();
    const STUDY_KEYS = [
      "ibc_progress",
      "ibc_attempts",
      "ibc_wrong_mcq",
      "ibc_stars_mcq",
      "ibc_stars_essay",
      "ibc_fc_known",
      "ibc_active_quiz",
      "ibc_ma_mo"
    ];
    try {
      STUDY_KEYS.forEach((k) => localStorage.removeItem(k));
    } catch (e) {}
    try {
      sessionStorage.removeItem("ibc_autoscroll_off");
    } catch (e) {}

    unlockedCases.clear();
    streak = 0;
    const sp = $("#streakPill");
    if (sp) sp.classList.add("hidden");

    Object.assign(state, {
      view: "home",
      ch: 1,
      sec: 0,
      expandedCh: 1,
      chTab: "all",
      bankCh: 0,
      bankLv: 0,
      bankFilter: "all",
      bankSearch: "",
      bankPicked: {},
      bankPage: 0,
      quiz: null,
      essayCh: 0,
      essayType: "",
      essayExam: "",
      essayStarOnly: false,
      essaySearch: "",
      essayRevealAll: false,
      essayOpen: {},
      midPaper: null,
      fcCh: 0,
      fcFilter: "all",
      fcIdx: 0,
      fcBack: false,
      fcOrder: null,
      qaCh: 0,
      qaType: "",
      qaRevealAll: false,
      qaPicked: {},
      qaOpen: {},
      warmupQid: null,
      warmupPick: null,
      warmupElim: {},
      elimExam: {},
      elimBank: {}
    });

    document.querySelectorAll("mark.user-hl").forEach((m) => {
      const p = m.parentNode;
      if (p) {
        while (m.firstChild) p.insertBefore(m.firstChild, m);
        p.removeChild(m);
      }
    });

    syncExamBodyClass();
    nav("home", {}, { replace: true });
    SFX.complete();
    showToast(ui("Đã đặt lại toàn bộ dữ liệu học tập về 0% (Mới hoàn toàn)", "All study progress reset to 0% (Fresh start)"));
  }

  /* ---------------- Toast, Confirm Modal & Lightbox ---------------- */
  let toastTimer = null;
  function showToast(msg) {
    const t = $("#appToast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2000);
  }

  function openConfirmModal(opts) {
    const ov = $("#confirmOverlay");
    $("#confirmTitle").textContent = opts.title || "";
    $("#confirmDesc").textContent = opts.desc || "";
    const okBtn = $("#confirmOkBtn");
    okBtn.textContent = opts.okLabel || ui("Xác nhận", "Confirm");
    okBtn.className = "btn " + (opts.danger ? "btn-danger" : "btn-primary");
    $("#confirmCancelBtn").textContent = opts.cancelLabel || ui("Quay lại", "Cancel");

    const pinZone = $("#confirmPinZone");
    const pinInp = $("#confirmPinInput");
    const pinErr = $("#confirmPinErr");
    if (pinZone && pinInp && pinErr) {
      pinInp.value = "";
      pinInp.classList.remove("pin-shake");
      pinErr.textContent = "";
      pinErr.classList.add("hidden");
      if (opts.requirePin) {
        pinInp.placeholder = opts.pinPlaceholder || ui("Nhập mã khoá quản trị...", "Enter admin PIN...");
        pinZone.classList.remove("hidden");
        pinInp.oninput = () => {
          pinInp.classList.remove("pin-shake");
          pinErr.classList.add("hidden");
        };
        pinInp.onkeydown = (ev) => {
          if (ev.key === "Enter") {
            ev.preventDefault();
            okBtn.click();
          }
        };
        setTimeout(() => pinInp.focus(), 35);
      } else {
        pinZone.classList.add("hidden");
        pinInp.oninput = null;
        pinInp.onkeydown = null;
      }
    }

    ov.classList.remove("hidden");
    pushOverlayHistory();
    const close = () => {
      if (pinInp) pinInp.value = "";
      ov.classList.add("hidden");
      scheduleOverlayHistoryRelease();
    };
    $("#confirmCancelBtn").onclick = close;
    ov.onclick = (e) => { if (e.target === ov) close(); };
    okBtn.onclick = () => {
      if (opts.requirePin && pinInp) {
        if (!verifyAdminPin(pinInp.value)) {
          SFX.wrong();
          pinInp.classList.remove("pin-shake");
          void pinInp.offsetWidth;
          pinInp.classList.add("pin-shake");
          if (pinErr) {
            pinErr.textContent = ui("Mã khoá quản trị không đúng — dữ liệu được giữ an toàn.", "Incorrect admin PIN — data kept safe.");
            pinErr.classList.remove("hidden");
          }
          pinInp.select();
          return;
        }
        pinInp.value = "";
      }
      ov.classList.add("hidden");
      if (opts.onConfirm) opts.onConfirm();
      scheduleOverlayHistoryRelease();
    };
  }

  let lbZoom = 1;
  function applyLightboxZoom() {
    const body = $("#lightboxBody");
    const svgEl = body && body.querySelector("svg");
    const lbl = $("#lbZoomReset");
    if (lbl) lbl.textContent = Math.round(lbZoom * 100) + "%";
    if (!svgEl) return;
    if (lbZoom === 1) {
      svgEl.style.cssText = "max-width:100%!important;width:100%;height:auto";
    } else {
      svgEl.style.cssText = `max-width:none!important;width:${Math.round(lbZoom * 100)}%;height:auto`;
    }
  }

  function openDiagramLightbox(title, svgHtml) {
    SFX.tap();
    lbZoom = 1;
    const ov = $("#lightboxOverlay");
    $("#lightboxTitle").textContent = title || "";
    $("#lightboxBody").innerHTML = svgHtml || "";
    applyLightboxZoom();
    ov.classList.remove("hidden");
    pushOverlayHistory();
    const closeLb = () => { ov.classList.add("hidden"); scheduleOverlayHistoryRelease(); };
    $("#lightboxClose").onclick = closeLb;
    if ($("#lbZoomIn")) $("#lbZoomIn").onclick = () => { SFX.tap(); lbZoom = Math.min(2.75, +(lbZoom + 0.35).toFixed(2)); applyLightboxZoom(); };
    if ($("#lbZoomOut")) $("#lbZoomOut").onclick = () => { SFX.tap(); lbZoom = Math.max(0.75, +(lbZoom - 0.35).toFixed(2)); applyLightboxZoom(); };
    if ($("#lbZoomReset")) $("#lbZoomReset").onclick = () => { SFX.tap(); lbZoom = 1; applyLightboxZoom(); };
    ov.onclick = (e) => { if (e.target === ov) closeLb(); };
  }

  function wrapTablesForScroll(root) {
    if (!root) return;
    root.querySelectorAll("table").forEach((tbl) => {
      if (tbl.parentElement && tbl.parentElement.classList.contains("tbl-scroll")) return;
      const w = document.createElement("div");
      w.className = "tbl-scroll";
      tbl.parentNode.insertBefore(w, tbl);
      w.appendChild(tbl);
    });
  }

  /* ---------------- Theme, Pastel Palette (Circular View-Transition!), Zen & Scale ---------------- */
  let theme = localStorage.getItem("ibc_theme") || "light";
  let palette = localStorage.getItem("ibc_palette") || "rose";
  let scale = localStorage.getItem("ibc_scale") || "md";
  let zenMode = false;
  const SCALES = ["sm", "md", "lg", "xl"];
  const PALETTES = [
    { id: "rose", vi: "Hồng Đào Pastel (Sakura Blush)", en: "Sakura Blush Pastel" },
    { id: "hub", vi: "Đặc trưng HUB (Navy · Đỏ Đô · Hoàng Kim)", en: "HUB Signature (Navy · Crimson · Gold)" },
    { id: "lavender", vi: "Tím Oải Hương (Lavender Milk)", en: "Lavender Milk Pastel" },
    { id: "sapphire", vi: "Xanh Ngọc Bích (Sapphire Classic)", en: "Sapphire Classic" }
  ];

  const THEME_META_COLORS = {
    light: { rose: "#fdf8fa", hub: "#f7f9fc", lavender: "#faf8fe", sapphire: "#f7f9fc" },
    dark: { rose: "#191118", hub: "#0c1528", lavender: "#161224", sapphire: "#0c1221" }
  };

  function applyThemeAndScale() {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-palette", palette);
    document.documentElement.setAttribute("data-scale", scale);
    document.body.classList.toggle("zen-mode", zenMode);
    const metaTc = $("#metaThemeColor");
    if (metaTc) {
      const grp = THEME_META_COLORS[theme] || THEME_META_COLORS.light;
      metaTc.setAttribute("content", grp[palette] || grp.rose);
    }
    const tb = $("#btnTheme");
    if (tb) mutateBtn(tb, (b) => { b.innerHTML = theme === "dark" ? I.sun : I.moon; });
    const sb = $("#btnScale");
    if (sb) mutateBtn(sb, (b) => { b.textContent = "Aa " + scale.toUpperCase(); });
    const sbMob = $("#btnScaleMob");
    if (sbMob) mutateBtn(sbMob, (b) => { b.textContent = ui("Cỡ chữ: ", "Scale: ") + scale.toUpperCase(); });
    const zb = $("#btnZen");
    if (zb) {
      mutateBtn(zb, (b) => {
        b.innerHTML = zenMode ? I.minimize : I.maximize;
        b.classList.toggle("btn-zen-on", zenMode);
      });
    }
    const snd = $("#btnSound");
    if (snd) {
      mutateBtn(snd, (b) => {
        b.innerHTML = soundOn ? I.volume : I.volumeMute;
        b.classList.toggle("btn-sound-on", soundOn);
      });
    }
    const sndMob = $("#btnSoundMob");
    if (sndMob) {
      mutateBtn(sndMob, (b) => {
        b.innerHTML = soundOn ? I.volume : I.volumeMute;
        b.classList.toggle("btn-sound-on", soundOn);
      });
    }
    syncAutoScrollButtons();
  }

  /* ---------------- 120fps Liquid-Silk Scroll & Ambient Auto-Scroll Engine ---------------- */
  const AUTO_SPEEDS = [
    { px: 26, vi: "Chậm · Đọc kỹ", en: "Slow · Deep Read" },
    { px: 40, vi: "Vừa · Mượt mà", en: "Medium · Smooth" },
    { px: 62, vi: "Nhanh · Xem lướt", en: "Fast · Skim" }
  ];
  let autoScrollSpeedIdx = 1;
  let autoScrollActive = false;
  let autoScrollPinned = false; // true when user explicitly toggled ON via button
  let autoScrollSoftHold = false; // soft-hold while hovering an interactive button/option
  let autoScrollPos = 0;
  let autoScrollVel = 0;
  let autoScrollLastTs = 0;
  let autoScrollRaf = 0;
  let autoScrollBootTimer = 0;

  // Silky inertial mouse-wheel state (desktop notched wheel only)
  let wheelRaf = 0;
  let wheelTargetY = 0;
  let wheelCurY = 0;
  let wheelLastTs = 0;
  let programmaticScrollAnim = 0;
  let cachedMaxScroll = -1;
  let scrollSyncRaf = 0;
  let scrollIdleTimer = 0;
  let isPageScrolling = false;
  let lastFabPct = -10;
  let onScrollSettledHook = null;

  function invalidateScrollMetrics() {
    cachedMaxScroll = -1;
  }
  function getMaxScrollY() {
    if (cachedMaxScroll < 0) {
      cachedMaxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    }
    return cachedMaxScroll;
  }

  function syncAutoScrollButtons() {
    const sp = AUTO_SPEEDS[autoScrollSpeedIdx] || AUTO_SPEEDS[1];
    const b1 = $("#btnAutoScroll");
    if (b1) {
      b1.setAttribute(
        "data-tip",
        autoScrollActive
          ? ui(`Đang tự động cuộn (${sp.vi}) · Bấm hoặc lăn chuột để dừng · Shift+Click đổi tốc độ`, `Auto-scrolling (${sp.en}) · Click or scroll to pause · Shift+Click for speed`)
          : ui("Bật tự động cuộn trang êm ái (Phím A · Shift+Click đổi tốc độ)", "Enable smooth auto-scroll (Key A · Shift+Click for speed)")
      );
      mutateBtn(b1, (b) => {
        b.innerHTML = autoScrollActive ? I.autoScrollOn : I.autoScrollOff;
        b.classList.toggle("btn-autoscroll-on", autoScrollActive);
      });
    }
    const b2 = $("#btnAutoScrollMob");
    if (b2) {
      mutateBtn(b2, (b) => {
        b.innerHTML = autoScrollActive ? I.autoScrollOn : I.autoScrollOff;
        b.classList.toggle("btn-autoscroll-on", autoScrollActive);
      });
    }
  }

  function stopWheelInertia() {
    if (wheelRaf) {
      cancelAnimationFrame(wheelRaf);
      wheelRaf = 0;
    }
    if (programmaticScrollAnim) {
      cancelAnimationFrame(programmaticScrollAnim);
      programmaticScrollAnim = 0;
    }
    wheelTargetY = window.scrollY;
    wheelCurY = window.scrollY;
  }

  function smoothScrollToY(destY, durationMs) {
    stopAutoScroll(false);
    stopWheelInertia();
    invalidateScrollMetrics();
    const startY = window.scrollY;
    const clampedY = Math.max(0, Math.min(getMaxScrollY(), destY));
    const dist = clampedY - startY;
    if (Math.abs(dist) < 2) {
      window.scrollTo(0, clampedY);
      return;
    }
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      window.scrollTo(0, clampedY);
      return;
    }
    const dur = durationMs || Math.min(680, Math.max(320, Math.abs(dist) * 0.35));
    const t0 = performance.now();
    function step(now) {
      const p = Math.min(1, (now - t0) / dur);
      // Quintic ease-out silk curve
      const ease = 1 - Math.pow(1 - p, 4);
      window.scrollTo(0, startY + dist * ease);
      if (p < 1) {
        programmaticScrollAnim = requestAnimationFrame(step);
      } else {
        programmaticScrollAnim = 0;
        wheelTargetY = window.scrollY;
        wheelCurY = window.scrollY;
      }
    }
    programmaticScrollAnim = requestAnimationFrame(step);
  }

  function stepAutoScroll(now) {
    if (!autoScrollActive) {
      autoScrollRaf = 0;
      return;
    }
    const dt = autoScrollLastTs ? Math.min(0.05, Math.max(0.001, (now - autoScrollLastTs) / 1000)) : 0.016;
    autoScrollLastTs = now;

    // Pause cleanly if a modal/drawer is open, text is selected, or during active timed exam (unless pinned manually)
    const sel = window.getSelection && window.getSelection();
    const hasTextSel = !!(($("#selPopover") && $("#selPopover").classList.contains("show")) || (sel && !sel.isCollapsed && String(sel).trim().length > 1));
    const blocked = hasOpenOverlay() || hasTextSel || (state.view === "examRun" && !autoScrollPinned);
    const targetSpeed = (blocked || autoScrollSoftHold) ? 0 : (AUTO_SPEEDS[autoScrollSpeedIdx] || AUTO_SPEEDS[1]).px;
    // Smooth viscous velocity ramp (accelerates & decelerates like silk, zero sudden jerk!)
    const accelRate = 1 - Math.pow(0.02, dt);
    autoScrollVel += (targetSpeed - autoScrollVel) * accelRate;

    if (autoScrollVel > 0.15) {
      const maxY = getMaxScrollY();
      if (maxY <= 4) {
        autoScrollRaf = requestAnimationFrame(stepAutoScroll);
        return;
      }
      // Sync if external layout changed scrollY significantly
      if (Math.abs(window.scrollY - autoScrollPos) > 6) {
        autoScrollPos = window.scrollY;
      }
      autoScrollPos = Math.min(maxY, autoScrollPos + autoScrollVel * dt);
      window.scrollTo(0, autoScrollPos);
      if (autoScrollPos >= maxY - 1) {
        stopAutoScroll(false);
        return;
      }
    }
    autoScrollRaf = requestAnimationFrame(stepAutoScroll);
  }

  function startAutoScroll(isManualToggle) {
    if (autoScrollBootTimer) {
      clearTimeout(autoScrollBootTimer);
      autoScrollBootTimer = 0;
    }
    stopWheelInertia();
    invalidateScrollMetrics();
    const maxY = getMaxScrollY();
    if (isManualToggle && maxY > 20 && window.scrollY >= maxY - 8) {
      window.scrollTo(0, 0);
      autoScrollPos = 0;
    } else {
      autoScrollPos = window.scrollY;
    }
    if (isManualToggle) autoScrollPinned = true;
    autoScrollActive = true;
    autoScrollVel = 0;
    autoScrollLastTs = 0;
    syncAutoScrollButtons();
    if (!autoScrollRaf) autoScrollRaf = requestAnimationFrame(stepAutoScroll);
  }

  function stopAutoScroll(clearPin) {
    if (autoScrollBootTimer) {
      clearTimeout(autoScrollBootTimer);
      autoScrollBootTimer = 0;
    }
    if (clearPin) autoScrollPinned = false;
    if (!autoScrollActive && !autoScrollRaf) {
      syncAutoScrollButtons();
      return;
    }
    autoScrollActive = false;
    autoScrollVel = 0;
    autoScrollLastTs = 0;
    if (autoScrollRaf) {
      cancelAnimationFrame(autoScrollRaf);
      autoScrollRaf = 0;
    }
    syncAutoScrollButtons();
  }

  function toggleAutoScroll(ev) {
    SFX.tap();
    if (ev && ev.shiftKey) {
      autoScrollSpeedIdx = (autoScrollSpeedIdx + 1) % AUTO_SPEEDS.length;
      const sp = AUTO_SPEEDS[autoScrollSpeedIdx];
      if (!autoScrollActive) startAutoScroll(true);
      else syncAutoScrollButtons();
      showToast(ui(`Tốc độ tự cuộn: ${sp.vi}`, `Auto-scroll speed: ${sp.en}`));
      return;
    }
    if (autoScrollActive) {
      stopAutoScroll(true);
      try { sessionStorage.setItem("ibc_autoscroll_off", "1"); } catch (e) {}
      showToast(ui("Đã tạm dừng tự động cuộn trang", "Auto-scroll paused"));
    } else {
      try { sessionStorage.removeItem("ibc_autoscroll_off"); } catch (e) {}
      startAutoScroll(true);
      const sp = AUTO_SPEEDS[autoScrollSpeedIdx];
      showToast(ui(`Đã bật tự động cuộn êm (${sp.vi} · Lăn chuột để dừng)`, `Smooth auto-scroll enabled (${sp.en} · Scroll to pause)`));
    }
  }

  let activeVt = null;
  function runCircularViewTransition(ev, mutateFn) {
    const root = document.documentElement;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) {
      mutateFn();
      return;
    }
    if (activeVt) {
      try { activeVt.skipTransition(); } catch (e) {}
      activeVt = null;
      root.classList.remove("vt-switching");
      mutateFn();
      return;
    }

    // Zero DOM mutations BEFORE startViewTransition so Chromium reuses the live GPU frame buffer in <1ms!
    try {
      const vt = document.startViewTransition(() => {
        if ($("#floatTip")) $("#floatTip").classList.remove("show");
        root.classList.add("vt-switching");
        mutateFn();
      });
      activeVt = vt;
      const cleanupVt = () => {
        if (activeVt === vt) {
          activeVt = null;
          root.classList.remove("vt-switching");
        }
      };
      if (vt.finished && vt.finished.finally) {
        vt.finished.finally(cleanupVt);
      } else {
        setTimeout(cleanupVt, 620);
      }
    } catch (e) {
      activeVt = null;
      root.classList.remove("vt-switching");
      mutateFn();
    }
  }

  function toggleZenMode() {
    SFX.tap();
    zenMode = !zenMode;
    applyThemeAndScale();
    setTimeout(() => {
      invalidateScrollMetrics();
      syncSlidingControls(document);
      syncTocInk(true);
      if (onScrollSettledHook) onScrollSettledHook();
    }, 280);
    showToast(zenMode ? ui("Chế độ đọc tập trung Zen (Bấm Z để thoát)", "Zen focus mode enabled (Press Z to exit)") : ui("Đã khôi phục thanh công cụ", "Workspace panels restored"));
  }

  function toggleThemeWithRipple(ev) {
    SFX.tap();
    const nextTheme = theme === "dark" ? "light" : "dark";
    runCircularViewTransition(ev, () => {
      theme = nextTheme;
      try { localStorage.setItem("ibc_theme", theme); } catch (e) {}
      applyThemeAndScale();
    });
  }

  function cyclePaletteWithRipple(ev) {
    SFX.correct(1);
    const curIdx = Math.max(0, PALETTES.findIndex((p) => p.id === palette));
    const next = PALETTES[(curIdx + 1) % PALETTES.length];
    runCircularViewTransition(ev, () => {
      palette = next.id;
      try { localStorage.setItem("ibc_palette", palette); } catch (e) {}
      applyThemeAndScale();
      showToast(ui(`Tông màu: ${next.vi}`, `Palette: ${next.en}`));
    });
  }

  /* ---------------- App State ---------------- */
  const state = {
    view: "home",
    ch: 1,
    sec: 0,
    expandedCh: 1,
    chTab: "all",

    bankCh: 0,
    bankLv: 0,
    bankFilter: "all",
    bankSearch: "",
    bankStudyMode: "practice",
    bankPicked: {},
    bankPage: 0,

    customCh: 0,
    customLv: 0,
    customCount: 20,
    customFb: "instant",
    quiz: null,

    essayCh: 0,
    essayType: "",
    essayExam: "",
    essayStarOnly: false,
    essaySearch: "",
    essayRevealAll: false,
    essayOpen: {},
    midPaper: null,

    revTab: "fc",
    fcCh: 0,
    fcFilter: "all",
    fcIdx: 0,
    fcBack: false,
    fcDir: "",
    fcTable: false,
    qaCh: 0,
    qaType: "",
    qaRevealAll: false,
    qaPicked: {},
    qaOpen: {},

    caseId: null,
    labGroup: "ch",
    labKey: "1",
    cmdActiveIdx: 0,

    warmupQid: null,
    warmupPick: null,
    warmupElim: {},
    elimExam: {},
    elimBank: {},
    fcOrder: null
  };

  let examTimer = null;

  /* ---------------- Text-to-Speech ---------------- */
  const synth = window.speechSynthesis;
  const tts = { queue: [], idx: 0, playing: false, paused: false };
  let voices = [];
  if (synth) {
    voices = synth.getVoices();
    synth.onvoiceschanged = () => { voices = synth.getVoices(); };
  }
  function startTTS(label, rawText) {
    if (!synth) { showToast(ui("Trình duyệt không hỗ trợ đọc giọng nói", "Speech synthesis unsupported")); return; }
    stopTTS();
    const chunks = rawText.replace(/\s+/g, " ").match(/[^.!?;:]+[.!?;:]+|\S+$/g) || [rawText];
    const merged = [];
    let buf = "";
    chunks.forEach((c) => {
      if ((buf + c).length > 220) { if (buf) merged.push(buf); buf = c; }
      else buf += c;
    });
    if (buf) merged.push(buf);
    tts.queue = merged; tts.idx = 0; tts.playing = true; tts.paused = false;
    $("#ttsBar").classList.remove("hidden");
    $("#ttsLabel").textContent = label;
    $("#ttsPauseBtn").innerHTML = I.pause;
    speakStep();
  }
  function speakStep() {
    if (!tts.playing || tts.idx >= tts.queue.length) { stopTTS(); return; }
    const u = new SpeechSynthesisUtterance(tts.queue[tts.idx]);
    const v = voices.find((x) => x.lang.toLowerCase().startsWith(isEn() ? "en" : "vi")) || voices[0];
    if (v) u.voice = v;
    u.rate = parseFloat(($("#ttsSpeed") || {}).value || "1");
    u.onend = () => { tts.idx++; speakStep(); };
    u.onerror = () => { tts.idx++; speakStep(); };
    synth.speak(u);
  }
  function stopTTS() {
    if (synth) synth.cancel();
    tts.playing = false; tts.queue = [];
    const bar = $("#ttsBar");
    if (bar) bar.classList.add("hidden");
  }

  /* ---------------- Persistent Active Quiz & Native Browser History ---------------- */
  function syncExamBodyClass() {
    document.body.classList.toggle("in-active-exam", !!(state.view === "examRun" && state.quiz && !state.quiz.done));
  }

  function saveActiveQuiz() {
    syncExamBodyClass();
    const qz = state.quiz;
    if (!qz || !Array.isArray(qz.qs) || !qz.qs.length) {
      try { localStorage.removeItem("ibc_active_quiz"); } catch (e) {}
      return;
    }
    store.set("active_quiz", {
      qids: qz.qs.map((q) => q.id),
      answers: qz.answers,
      flagged: qz.flagged || {},
      elimExam: state.elimExam || {},
      cur: qz.cur || 0,
      singleMode: qz.singleMode !== false,
      mode: qz.mode || "practice",
      feedback: qz.feedback || "instant",
      scope: qz.scope || "Practice",
      scopeCh: qz.scopeCh || 0,
      startTime: qz.startTime || Date.now(),
      timeLimit: qz.timeLimit || 0,
      done: !!qz.done,
      score: qz.score || 0,
      byCh: qz.byCh || {},
      reviewFilter: qz.reviewFilter || "all"
    });
  }

  function restoreActiveQuiz() {
    const saved = store.get("active_quiz", null);
    if (!saved || !Array.isArray(saved.qids) || !saved.qids.length) return false;
    const qs = saved.qids.map((id) => MCQ_MAP.get(id)).filter(Boolean);
    if (qs.length !== saved.qids.length) return false;
    state.elimExam = saved.elimExam && typeof saved.elimExam === "object" ? saved.elimExam : {};
    state.quiz = {
      qs,
      answers: Array.isArray(saved.answers) && saved.answers.length === qs.length ? saved.answers : new Array(qs.length).fill(null),
      flagged: saved.flagged && typeof saved.flagged === "object" ? saved.flagged : {},
      cur: Math.max(0, Math.min(qs.length - 1, +saved.cur || 0)),
      singleMode: saved.singleMode !== false,
      mode: saved.mode || "practice",
      feedback: saved.feedback || "instant",
      scope: saved.scope || "Practice",
      scopeCh: +saved.scopeCh || 0,
      startTime: +saved.startTime || Date.now(),
      timeLimit: +saved.timeLimit || 0,
      done: !!saved.done,
      justFinished: false,
      score: +saved.score || 0,
      byCh: saved.byCh || {},
      reviewFilter: saved.reviewFilter || "all"
    };
    return true;
  }

  let overlayHistoryActive = false;
  let overlayReleaseTimer = null;
  let suppressNextPop = false;

  function snapshotNavState() {
    return {
      ibc: true,
      view: state.view,
      ch: state.ch,
      sec: state.sec,
      caseId: state.caseId,
      labGroup: state.labGroup,
      labKey: state.labKey,
      revTab: state.revTab
    };
  }

  function buildNavUrl() {
    if (!/^https?:$/i.test(window.location.protocol)) return undefined;
    const base = window.location.pathname || "/";
    if (state.view === "home") return base;
    const p = new URLSearchParams();
    p.set("view", state.view);
    if (state.view === "chapter") {
      p.set("ch", String(state.ch || 1));
      if (state.sec) p.set("sec", String(state.sec));
    } else if (state.view === "caseRead" && state.caseId) {
      p.set("case", String(state.caseId));
    }
    return base + "?" + p.toString();
  }

  function hasOpenOverlay() {
    return (
      document.body.classList.contains("mob-rail-open") ||
      document.body.classList.contains("mob-exam-sheet-open") ||
      (!!$("#cmdOverlay") && !$("#cmdOverlay").classList.contains("hidden")) ||
      (!!$("#lightboxOverlay") && !$("#lightboxOverlay").classList.contains("hidden")) ||
      (!!$("#confirmOverlay") && !$("#confirmOverlay").classList.contains("hidden"))
    );
  }

  function closeAllTransientOverlays() {
    closeCustomSelect();
    hideFloatTip(true);
    document.body.classList.remove("mob-rail-open", "mob-exam-sheet-open");
    if ($("#cmdOverlay")) $("#cmdOverlay").classList.add("hidden");
    if ($("#lightboxOverlay")) $("#lightboxOverlay").classList.add("hidden");
    if ($("#confirmOverlay")) $("#confirmOverlay").classList.add("hidden");
  }

  function pushOverlayHistory() {
    clearTimeout(overlayReleaseTimer);
    if (overlayHistoryActive) return;
    try {
      history.pushState({ ...snapshotNavState(), ibcOverlay: true }, "");
      overlayHistoryActive = true;
    } catch (e) {}
  }

  function scheduleOverlayHistoryRelease() {
    clearTimeout(overlayReleaseTimer);
    if (!overlayHistoryActive) return;
    overlayReleaseTimer = setTimeout(() => {
      if (!overlayHistoryActive || hasOpenOverlay()) return;
      overlayHistoryActive = false;
      suppressNextPop = true;
      try { history.back(); } catch (e) { suppressNextPop = false; }
    }, 0);
  }

  function syncHistoryState(replace) {
    clearTimeout(overlayReleaseTimer);
    const snap = snapshotNavState();
    const url = buildNavUrl();
    try {
      if (replace || overlayHistoryActive) {
        overlayHistoryActive = false;
        if (url !== undefined) history.replaceState(snap, "", url);
        else history.replaceState(snap, "");
      } else {
        if (url !== undefined) history.pushState(snap, "", url);
        else history.pushState(snap, "");
      }
    } catch (e) {}
  }

  /* ---------------- Navigation & Persistent Precision Gliding Rail ---------------- */
  function nav(view, extra, navOpts) {
    SFX.tap();
    hideFloatTip(true);
    closeCustomSelect();
    const popup = $("#selPopover");
    if (popup) popup.classList.remove("show");
    const prevSnap = snapshotNavState();
    Object.assign(state, { view }, extra || {});
    if (view === "chapter") state.expandedCh = state.ch;
    document.body.classList.remove("mob-rail-open", "mob-exam-sheet-open");
    stopTTS();
    syncExamBodyClass();

    const nextSnap = snapshotNavState();
    const sameRoute =
      prevSnap.view === nextSnap.view &&
      prevSnap.ch === nextSnap.ch &&
      prevSnap.sec === nextSnap.sec &&
      prevSnap.caseId === nextSnap.caseId &&
      prevSnap.labGroup === nextSnap.labGroup &&
      prevSnap.labKey === nextSnap.labKey &&
      prevSnap.revTab === nextSnap.revTab;

    if (!(navOpts && navOpts.fromPop)) {
      syncHistoryState(sameRoute || !!(navOpts && navOpts.replace));
    }

    render(true);
    stopWheelInertia();
    window.scrollTo(0, 0);
    invalidateScrollMetrics();
    if (autoScrollActive) {
      autoScrollPos = 0;
      autoScrollVel = 0;
      if (view === "examRun" && !autoScrollPinned) stopAutoScroll(false);
    }
  }

  let railBuiltLang = null;
  let railAnimFrame = null;
  let railTrackUntil = 0;
  let railCurY = null;
  let railCurH = 33;
  let railHoverTarget = null;
  let railResizeObs = null;

  function relY(el, container) {
    return el.getBoundingClientRect().top - container.getBoundingClientRect().top;
  }

  function syncTreeSubIndicator(chId, immediate) {
    const tree = document.querySelector(`[data-tree-box="${chId}"]`);
    if (!tree) return;
    const pill = tree.querySelector(".tree-active-pill");
    const ink = tree.querySelector(".tree-active-ink");
    const activeSub = tree.querySelector(".nav-sub.active");
    if (!pill || !ink) return;
    if (!activeSub || state.view !== "chapter" || state.ch !== chId) {
      pill.style.opacity = "0";
      ink.style.opacity = "0";
      return;
    }
    const y = relY(activeSub, tree);
    const h = activeSub.offsetHeight || 28;
    if (immediate) {
      pill.style.transition = "none";
      ink.style.transition = "none";
    }
    pill.style.height = h + "px";
    pill.style.transform = `translateY(${y.toFixed(1)}px)`;
    pill.style.opacity = "1";
    ink.style.height = Math.max(14, h - 10) + "px";
    ink.style.transform = `translateY(${(y + 5).toFixed(1)}px)`;
    ink.style.opacity = "1";
    if (immediate) {
      void pill.offsetWidth;
      pill.style.transition = "";
      ink.style.transition = "";
    }
  }

  function syncRailHoverPill() {
    const inner = $("#railInner");
    const pill = $("#railHoverPill");
    if (!inner || !pill) return;
    if (!railHoverTarget || !railHoverTarget.isConnected || railHoverTarget.classList.contains("active")) {
      pill.style.opacity = "0";
      return;
    }
    const y = relY(railHoverTarget, inner);
    pill.style.height = railHoverTarget.offsetHeight + "px";
    pill.style.transform = `translateY(${y.toFixed(1)}px)`;
    pill.style.opacity = "1";
  }

  function syncRailActivePosition(mode) {
    const inner = $("#railInner");
    const pill = $("#railActivePill");
    const bar = $("#railActiveBar");
    if (!inner || !pill || !bar) return;
    const activeItem = inner.querySelector(".nav-item.active");
    if (!activeItem) {
      pill.style.opacity = "0";
      bar.style.opacity = "0";
      return;
    }

    cancelAnimationFrame(railAnimFrame);

    const applyDirect = (y, h, noTrans) => {
      if (noTrans) {
        pill.style.transition = "none";
        bar.style.transition = "none";
      }
      pill.style.height = h + "px";
      pill.style.transform = `translateY(${y.toFixed(2)}px)`;
      pill.style.opacity = "1";
      const bh = Math.max(15, h - 14);
      bar.style.height = bh + "px";
      bar.style.transform = `translateY(${(y + (h - bh) / 2).toFixed(2)}px)`;
      bar.style.opacity = "1";
      if (noTrans) {
        void pill.offsetWidth;
        pill.style.transition = "";
        bar.style.transition = "";
      }
      railCurY = y;
      railCurH = h;
    };

    const targetY0 = relY(activeItem, inner);
    const targetH0 = activeItem.offsetHeight || 33;

    if (mode === "instant" || railCurY === null) {
      applyDirect(targetY0, targetH0, true);
      inner.classList.add("rail-ready");
      return;
    }

    if (mode === "track") {
      // Smooth frame-by-frame spring tracking while chapter accordions expand/collapse above!
      const step = (now) => {
        if (!activeItem.isConnected) return;
        const liveY = relY(activeItem, inner);
        const liveH = activeItem.offsetHeight || 33;
        railCurY += (liveY - railCurY) * 0.34;
        railCurH += (liveH - railCurH) * 0.34;
        applyDirect(railCurY, railCurH, true);
        syncRailHoverPill();
        CHAPTERS.forEach((c) => syncTreeSubIndicator(c.id, true));
        if (now < railTrackUntil || Math.abs(liveY - railCurY) > 0.35) {
          railAnimFrame = requestAnimationFrame(step);
        } else {
          applyDirect(liveY, liveH, true);
        }
      };
      railAnimFrame = requestAnimationFrame(step);
      return;
    }

    // Pure CSS cubic-bezier glide when no accordion heights are shifting
    pill.style.transition = "";
    bar.style.transition = "";
    applyDirect(targetY0, targetH0, false);
  }

  function buildRailStructure(navEl) {
    const row = (v, icon, label, tip, rightId) => `
      <div class="nav-item" data-nav="${v}" data-tip="${esc(tip)}" data-tip-pos="right">
        ${icon}
        <span class="nav-txt">${label}</span>
        ${rightId ? `<span id="${rightId}"></span>` : ""}
      </div>`;

    let h = `<div class="rail-inner" id="railInner">
      <div class="rail-hover-pill" id="railHoverPill"></div>
      <div class="rail-active-pill" id="railActivePill"></div>
      <div class="rail-active-bar" id="railActiveBar"></div>

      <div class="nav-section">
        <div class="nav-heading">${ui("Không gian học", "Workspace")}</div>
        ${row("home", I.grid, ui("Tổng quan học phần", "Course Overview"), ui("Tổng quan tiến độ, ma trận 6 chương & câu hỏi khởi động nhanh", "Dashboard, chapter matrix & quick warm-up"))}
        ${row("syllabus", I.syllabus, ui("Đề cương & Ma trận thi", "Syllabus & Blueprint"), ui("Chuẩn đầu ra CLO, cấu trúc đề 40 câu & danh mục tài liệu gốc", "Course learning outcomes, exam blueprint & primary sources"))}
      </div>

      <div class="nav-section">
        <div class="nav-heading">${ui("Nội dung 6 chương", "Curriculum")}</div>`;

    CHAPTERS.forEach((ch) => {
      const isHeavy = EXAM_BLUEPRINT[ch.id] >= 10;
      const eq = EXAM_BLUEPRINT[ch.id];
      h += `
        <div class="nav-item" data-ch-head="${ch.id}" data-tip="Chương 0${ch.id} · ${esc(Lp(ch, "title"))}" data-tip-sub="${ch.sections.length} mục · Đề thi: ${eq} câu (${(eq * 0.25).toFixed(2).replace(".", ",")}đ)" data-tip-pos="right">
          <span class="nav-idx">0${ch.id}</span>
          <span class="nav-txt">${esc(Lp(ch, "title"))}</span>
          ${isHeavy ? `<span class="nav-dot-warn" data-tip="Trọng tâm: ${eq}/40 câu đề thi cuối kỳ" data-tip-pos="right"></span>` : ""}
          <span data-ring-ch="${ch.id}" style="display:inline-flex;align-items:center"></span>
          <button type="button" class="ch-chev" data-ch-toggle="${ch.id}" aria-label="Đóng mở mục con">${I.chevR}</button>
        </div>
        <div class="acc-grid no-gap" data-tree-ch="${ch.id}">
          <div class="acc-inner">
            <div class="nav-tree" data-tree-box="${ch.id}">
              <span class="tree-active-pill"></span>
              <span class="tree-active-ink"></span>
              ${ch.sections.map((s, idx) => `
                <div class="nav-sub" data-ch-sec="${ch.id}|${idx}" data-tip="${esc(s.id)} — ${esc(Lp(s, "title"))}" data-tip-pos="right">
                  <span class="nav-sub-code">${esc(s.id)}</span>
                  <span style="flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(Lp(s, "title"))}</span>
                  <span class="nav-sub-check">${I.checkXs}</span>
                </div>`).join("")}
            </div>
          </div>
        </div>`;
    });
    h += `</div>`;

    h += `
      <div class="nav-section">
        <div class="nav-heading">${ui("Luyện thi & Mô hình", "Practice & Modeling")}</div>
        ${row("exam", I.target, ui("Thi thử & Luyện đề", "Exam & Quiz Studio"), ui("Thi thử 40 câu 60 phút chuẩn HUB & tự tạo đề luyện", "Timed 40-Q mock final exam & custom practice sets"), "railExamBadge")}
        ${row("bank", I.list, ui("Ngân hàng trắc nghiệm", "Question Bank"), ui("Tra cứu, lọc & tự kiểm tra 1.024 câu hỏi trắc nghiệm", "Browse, filter & self-test 1,024 MCQs"), "railBankBadge")}
        ${row("essays", I.pen, ui("Tự luận & Bài tập", "Essays & Problems"), ui("204 bài tự luận, tính toán định giá kèm biểu điểm chấm", "204 conceptual & quantitative problems with rubrics"), "railEssayBadge")}
        ${row("revision", I.layers, ui("Flashcards & Công thức", "Flashcards & Formulas"), ui("Thẻ lật 3D 56 thuật ngữ, 37 câu Đúng/Sai & công thức 6 chương", "3D flashcards, True/False checks & formula sheets"), "railRevBadge")}
        ${row("cases", I.briefcase, ui("Hồ sơ thương vụ", "Case Studies"), ui("8 hồ sơ thương vụ IPO, M&A, LBO kinh điển từ cáo bạch gốc", "8 transaction dossiers from prospectuses & filings"), "railCaseBadge")}
        ${row("labs", I.sliders, ui("Mô hình định giá", "Valuation Models"), ui("10 mô hình DCF, LBO, WACC, Trái phiếu & 3 tình huống tương tác", "10 interactive financial models & 3 deal simulations"), "railLabBadge")}
        ${row("stats", I.chart, ui("Phân tích & Câu sai", "Analytics & Mistakes"), ui("Thống kê điểm theo chương & giỏ ôn lại các câu từng làm sai", "Performance diagnostics & missed-question repair queue"), "railStatBadge")}
      </div>
    </div>`;

    navEl.innerHTML = h;
    railBuiltLang = LANG();
    railCurY = null;

    if (window.ResizeObserver) {
      if (railResizeObs) railResizeObs.disconnect();
      const inner = $("#railInner");
      if (inner) {
        railResizeObs = new ResizeObserver(() => {
          if (performance.now() < railTrackUntil) return;
          syncRailActivePosition("instant");
          CHAPTERS.forEach((c) => syncTreeSubIndicator(c.id, true));
        });
        railResizeObs.observe(inner);
      }
    }
  }

  function renderRail() {
    const navEl = $("#railNav");
    if (!navEl) return;
    const firstBuild = railBuiltLang !== LANG() || !$("#railInner");
    if (firstBuild) buildRailStructure(navEl);

    const wrongCount = Object.keys(getWrongMcq()).length;
    const totalSecs = CHAPTERS.reduce((s, c) => s + c.sections.length, 0);
    const doneSecs = Object.keys(getProgress().read || {}).length;
    const totalPct = totalSecs ? Math.round((doneSecs / totalSecs) * 100) : 0;

    // Update top-level view items in place
    navEl.querySelectorAll("[data-nav]").forEach((el) => {
      const v = el.dataset.nav;
      const isAct = state.view === v || (v === "exam" && state.view === "examRun") || (v === "cases" && state.view === "caseRead");
      el.classList.toggle("active", isAct);
    });

    let treeChanged = false;
    CHAPTERS.forEach((ch) => {
      const pr = chProgress(ch);
      const isActiveCh = state.view === "chapter" && state.ch === ch.id;
      const isOpenTree = state.expandedCh === ch.id;

      const head = navEl.querySelector(`[data-ch-head="${ch.id}"]`);
      if (head) {
        head.classList.toggle("active", isActiveCh);
        const eq = EXAM_BLUEPRINT[ch.id];
        head.setAttribute("data-tip-sub", `${pr.done}/${pr.total} mục đã đọc · Đề thi: ${eq} câu`);
      }

      const ringSlot = navEl.querySelector(`[data-ring-ch="${ch.id}"]`);
      if (ringSlot && ringSlot._done !== pr.done) {
        ringSlot._done = pr.done;
        ringSlot.innerHTML = miniRingSVG(pr.done, pr.total);
      }

      const chev = navEl.querySelector(`[data-ch-toggle="${ch.id}"]`);
      if (chev) chev.classList.toggle("open", isOpenTree);

      const acc = navEl.querySelector(`[data-tree-ch="${ch.id}"]`);
      if (acc) {
        const wasOpen = acc.classList.contains("is-open");
        if (wasOpen !== isOpenTree) {
          treeChanged = true;
          acc.classList.toggle("is-open", isOpenTree);
        }
      }

      ch.sections.forEach((s, idx) => {
        const subEl = navEl.querySelector(`[data-ch-sec="${ch.id}|${idx}"]`);
        if (subEl) {
          subEl.classList.toggle("read", isSecRead(ch.id, s.id));
          subEl.classList.toggle("active", isActiveCh && state.sec === idx);
        }
      });

      syncTreeSubIndicator(ch.id, firstBuild);
    });

    // Update right-side badges in place
    const setHtml = (id, html) => { const x = document.getElementById(id); if (x && x.innerHTML !== html) x.innerHTML = html; };
    setHtml("railExamBadge", state.quiz && !state.quiz.done ? `<span class="tag tag-warn">Live</span>` : `<span class="nav-count">40c</span>`);
    setHtml("railBankBadge", `<span class="nav-count">${MCQS.length}</span>`);
    setHtml("railEssayBadge", `<span class="nav-count">${ESSAYS.length}</span>`);
    setHtml("railRevBadge", `<span class="nav-count">${FLASHCARDS.length + REVIEWS.length}</span>`);
    setHtml("railCaseBadge", `<span class="nav-count">${CASES.length}</span>`);
    setHtml("railLabBadge", `<span class="nav-count">13</span>`);
    setHtml("railStatBadge", wrongCount ? `<span class="nav-dot-err">${wrongCount}</span>` : "");

    if (treeChanged) railTrackUntil = performance.now() + 360;
    const shouldTrack = !firstBuild && (treeChanged || performance.now() < railTrackUntil);
    syncRailActivePosition(firstBuild ? "instant" : (shouldTrack ? "track" : "glide"));
    syncRailHoverPill();

    const foot = $("#railFoot");
    if (foot) {
      foot.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span>${ui("Tiến độ đọc bài", "Reading completion")}</span>
          <b class="mono" style="color:var(--ink)">${doneSecs}/${totalSecs} (${totalPct}%)</b>
        </div>
        <div class="meter-track"><div class="meter-fill ${totalPct === 100 ? "ok" : ""}" style="width:${totalPct}%"></div></div>
      `;
    }
  }

  function updateCrumb() {
    const el = $("#tbCrumb");
    if (!el) return;
    if (state.view === "chapter") {
      const ch = CHAPTERS.find((c) => c.id === state.ch) || CHAPTERS[0];
      const sec = ch.sections[state.sec] || ch.sections[0];
      el.innerHTML = `<span class="crumb-parent"><span class="crumb-link" data-crumb-nav="home">${ui("Học phần", "Course")}</span> ${I.chevR} <span class="crumb-link" data-crumb-ch="${ch.id}">0${ch.id} · ${esc(Lp(ch, "title"))}</span> ${I.chevR} </span><b>${esc(sec.id)} ${esc(Lp(sec, "title"))}</b>`;
      el.querySelectorAll("[data-crumb-nav]").forEach((x) => (x.onclick = () => nav("home")));
      el.querySelectorAll("[data-crumb-ch]").forEach((x) => (x.onclick = () => nav("chapter", { ch: +x.dataset.crumbCh, sec: 0 })));
      return;
    }
    const activeCaseObj = state.view === "caseRead" ? CASES.find((x) => x.id === state.caseId) : null;
    const caseCrumbLbl = activeCaseObj ? (isEn() ? activeCaseObj.tieuDe.en : activeCaseObj.tieuDe.vi) : (state.caseId || "");
    const labels = {
      home: [ui("Không gian học", "Workspace"), ui("Tổng quan học phần", "Overview")],
      syllabus: [ui("Không gian học", "Workspace"), ui("Đề cương & Ma trận đề thi", "Syllabus & Blueprint")],
      exam: [ui("Đánh giá", "Assessment"), ui("Phòng thi thử & Luyện đề", "Exam Studio")],
      examRun: [ui("Phòng thi thử", "Exam Studio"), state.quiz ? state.quiz.scope : "Session", "exam"],
      bank: [ui("Ngân hàng đề", "Repository"), ui("1.024 Câu hỏi trắc nghiệm", "1,024 MCQs")],
      essays: [ui("Ngân hàng đề", "Repository"), ui("204 Bài tự luận & Tính toán", "204 Essays & Problems")],
      revision: [ui("Ôn tập cốt lõi", "Revision"), ui("Flashcards · Đúng/Sai · Công thức", "Flashcards · Q&A · Formulas")],
      cases: [ui("Thực tiễn", "Practice"), ui("8 Hồ sơ thương vụ (Case Studies)", "Case Studies")],
      caseRead: [ui("Hồ sơ thương vụ", "Case Studies"), caseCrumbLbl, "cases"],
      labs: [ui("Thực hành định lượng", "Quantitative"), ui("Mô hình định giá & Tình huống", "Valuation Models")],
      stats: [ui("Cá nhân", "Personal"), ui("Phân tích kết quả & Câu sai", "Analytics & Mistakes")]
    };
    const pair = labels[state.view] || ["BAF736", ""];
    const backView = pair[2] || (state.view !== "home" ? "home" : "");
    el.innerHTML = `<span class="crumb-parent">${backView ? `<span class="crumb-link" data-crumb-back="${backView}">${esc(pair[0])}</span>` : `<span>${esc(pair[0])}</span>`} ${I.chevR} </span><b>${esc(pair[1])}</b>`;
    el.querySelectorAll("[data-crumb-back]").forEach((x) => (x.onclick = () => nav(x.dataset.crumbBack)));
  }

  /* ======================================================================
     1. OVERVIEW (STAGGERED + SPOTLIGHT + ANIMATED COUNTERS)
     ====================================================================== */
  function renderHome(main) {
    const totalSecs = CHAPTERS.reduce((s, c) => s + c.sections.length, 0);
    const doneSecs = Object.keys(getProgress().read || {}).length;
    const attempts = store.get("attempts", []);
    const avgAcc = attempts.length
      ? Math.round((attempts.reduce((s, a) => s + a.score / a.total, 0) / attempts.length) * 100)
      : null;
    const wrongCount = Object.keys(getWrongMcq()).length;
    const starCount = Object.keys(getStarsMcq()).length;
    const next = nextUnreadTarget();

    main.innerHTML = `
      <div class="page-header stagger" style="--i:0">
        <div>
          <div class="kicker">BAF736 · ${esc(Lp(META, "faculty"))} · ${META.credits} ${ui("Tín chỉ", "Credits")} · TS. Ngô Sỹ Nam</div>
          <h1 class="h1">${h1Bi(META, "name")}</h1>
          <p class="lead">${L(META, "description")}</p>
        </div>
      </div>

      <section class="overview-hero spot-surface stagger" style="--i:1">
        <div>
          <div class="kicker" style="color:var(--ok)">${doneSecs < totalSecs ? ui("Đang học dở · Đề xuất tiếp theo", "Continue Learning") : ui("Đã hoàn thành toàn bộ bài giảng", "All Sections Read")}</div>
          <div style="font-size:1.12rem;font-weight:650;color:var(--ink);margin-bottom:6px">
            ${ui("Chương", "Chapter")} 0${next.ch.id} · ${esc(next.sec.id)} ${esc(Lp(next.sec, "title"))}
          </div>
          <p class="small muted" style="margin-bottom:16px">${esc(Lp(next.ch, "title"))} — ${ui("Đọc bài giảng, sơ đồ nghiệp vụ và phần đào sâu giáo trình.", "Read core concepts, deal diagrams, and textbook commentary.")}</p>
          <div class="hero-cta-row" style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="btn btn-primary" id="heroContinueBtn">${ui("Tiếp tục đọc mục này", "Continue Reading")} ${I.arrowR}</button>
            <button class="btn" id="heroExamBtn">${I.target} ${ui("Thi thử 40 câu chuẩn HUB", "40-Q Mock Final Exam")}</button>
            ${wrongCount ? `<button class="btn btn-danger" id="heroMistakeBtn">${ui(`Ôn lại ${wrongCount} câu sai`, `Review ${wrongCount} Mistakes`)}</button>` : ""}
          </div>
        </div>

        <div class="stat-grid-inline">
          <div class="stat-cell" id="kpiReadCell" data-tip="Bấm để đọc mục bài giảng tiếp theo">
            <div class="stat-cell-lbl">${ui("Mục bài giảng", "Sections Read")} ${I.chevR}</div>
            <div class="stat-cell-val"><span data-countup="${doneSecs}">${doneSecs}</span><span style="font-size:0.95rem;color:var(--ink-3);font-weight:500"> / ${totalSecs}</span></div>
            <div class="stat-cell-sub">${Math.round((doneSecs / Math.max(1, totalSecs)) * 100)}% ${ui("hoàn thành", "completed")}</div>
          </div>
          <div class="stat-cell" id="kpiAccCell" data-tip="Xem phân tích điểm số theo 6 chương">
            <div class="stat-cell-lbl">${ui("Độ chính xác", "Quiz Accuracy")} ${I.chevR}</div>
            <div class="stat-cell-val">${avgAcc !== null ? `<span data-countup="${avgAcc}" data-suffix="%">${avgAcc}%</span>` : "—"}</div>
            <div class="stat-cell-sub">${attempts.length} ${ui("lượt làm đề", "completed attempts")}</div>
          </div>
          <div class="stat-cell" id="kpiBankCell" data-tip="Mở kho 1.024 câu trắc nghiệm">
            <div class="stat-cell-lbl">${ui("Kho đề trắc nghiệm", "MCQ Bank")} ${I.chevR}</div>
            <div class="stat-cell-val"><span data-countup="${MCQS.length}" data-locale="vi">${MCQS.length.toLocaleString("vi-VN")}</span></div>
            <div class="stat-cell-sub">+ ${ESSAYS.length} ${ui("bài tự luận & tính toán", "essays & problems")}</div>
          </div>
          <div class="stat-cell" id="kpiQueueCell" data-tip="Mở danh sách câu sai & đã lưu">
            <div class="stat-cell-lbl">${ui("Giỏ cần ôn lại", "Review Queue")} ${I.chevR}</div>
            <div class="stat-cell-val"><span data-countup="${wrongCount + starCount}">${wrongCount + starCount}</span></div>
            <div class="stat-cell-sub">${wrongCount} ${ui("sai", "missed")} · ${starCount} ${ui("đã lưu", "saved")}</div>
          </div>
        </div>
      </section>

      <!-- Interactive Quick Warm-up Challenge Card -->
      <section class="warmup-box spot-surface stagger" style="--i:2" id="warmupMount"></section>

      <div class="stagger" style="--i:3;display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px;gap:12px;flex-wrap:wrap">
        <h2 style="font-size:1.05rem;font-weight:650;letter-spacing:-0.015em">${ui("Cấu trúc học phần & Phân bổ đề thi cuối kỳ", "Curriculum & Final Exam Allocation")}</h2>
        <span class="small muted">${ui("Chương 03 (M&A) và Chương 05 (Tư vấn DN) chiếm 50% tổng số câu đề thi (20/40 câu)", "Ch.03 and Ch.05 represent 50% of the final exam (20/40 questions)")}</span>
      </div>

      <div class="matrix-box stagger" style="--i:4">
        <div class="matrix-head">
          <div>Mã</div>
          <div>${ui("Chương & Các mục bài giảng", "Chapter & Sections")}</div>
          <div>${ui("Trọng số thi", "Exam Weight")}</div>
          <div>${ui("Tiến độ", "Progress")}</div>
          <div style="text-align:right">${ui("Thao tác", "Actions")}</div>
        </div>
        ${CHAPTERS.map((ch) => {
          const pr = chProgress(ch);
          const pct = pr.total ? Math.round((pr.done / pr.total) * 100) : 0;
          const eq = EXAM_BLUEPRINT[ch.id];
          const heavy = eq >= 10;
          const qCnt = MCQS.filter((q) => q.ch === ch.id).length;
          return `
            <div class="matrix-row">
              <div><span class="ch-mono ${pct === 100 ? "done" : (pct > 0 ? "prog" : "")}">0${ch.id}</span></div>
              <div>
                <div class="ch-row-title" data-open-ch="${ch.id}">${L(ch, "title")}</div>
                <div class="small muted" style="margin-top:2px">${ch.hours}h · ${esc(ch.clo)} · ${qCnt} ${ui("câu trắc nghiệm", "MCQs")}</div>
                <div class="ch-sec-dots">
                  ${ch.sections.map((s, idx) => {
                    const rd = isSecRead(ch.id, s.id);
                    return `<button type="button" class="sec-mini ${rd ? "done" : ""}" data-open-sec="${ch.id}|${idx}" data-tip="${esc(s.id)} · ${esc(Lp(s, "title"))}" data-tip-sub="${rd ? ui("Đã hoàn thành · Bấm để đọc lại", "Completed · Click to open") : ui("Chưa đọc · Bấm để mở bài", "Unread · Click to study")}">${esc(s.id)}</button>`;
                  }).join("")}
                </div>
              </div>
              <div>
                <span class="tag ${heavy ? "tag-warn" : ""}" data-tip="${heavy ? ui("Chương trọng tâm chiếm 25% tổng điểm đề thi", "High-yield chapter (25% of exam)") : ui("Chiếm 12,5% tổng điểm đề thi", "12.5% of exam")}">${eq} ${ui("câu", "Qs")} · ${(eq * 0.25).toFixed(2).replace(".", ",")}đ</span>
              </div>
              <div>
                <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.75rem;margin-bottom:4px" class="mono muted">
                  <span style="display:inline-flex;align-items:center;gap:5px">${miniRingSVG(pr.done, pr.total)} ${pr.done}/${pr.total}</span><span>${pct}%</span>
                </div>
                <div class="meter-track" style="margin-top:0"><div class="meter-fill ${pct === 100 ? "ok" : ""}" style="width:${pct}%"></div></div>
              </div>
              <div style="display:flex;justify-content:flex-end;gap:6px">
                <button class="btn btn-sm" data-open-ch="${ch.id}">${ui("Đọc bài", "Read")}</button>
                <button class="btn btn-sm" data-drill-ch="${ch.id}">${ui("Luyện đề", "Practice")}</button>
              </div>
            </div>`;
        }).join("")}
      </div>

      <div class="launch-grid">
        <div class="launch-card spot-surface stagger" style="--i:5" id="goBankCard">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
              <span class="tag tag-brand">${ui("Tra cứu & Tự kiểm tra", "Self-Testing")}</span>
              <span class="ico-box ico-brand">${I.list}</span>
            </div>
            <div style="font-weight:660;font-size:0.99rem;margin-bottom:5px;color:var(--ink)">${ui("Ngân hàng 1.024 câu Trắc nghiệm", "1,024 Multiple-Choice Bank")}</div>
            <p class="small muted">${ui("Lọc chi tiết theo chương và 4 cấp độ nhận thức, gạch loại trừ phương án nhiễu hoặc mở sẵn lời giải.", "Filter by chapter and cognitive level; eliminate distractors interactively or browse explanations.")}</p>
          </div>
          <div class="small" style="font-weight:620;color:var(--brand-ink);display:flex;align-items:center;gap:5px">${ui("Mở ngân hàng câu hỏi", "Open Question Bank")} <span class="card-cta-arrow">${I.arrowR}</span></div>
        </div>

        <div class="launch-card spot-surface stagger" style="--i:6" id="goEssayCard">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
              <span class="tag tag-violet">${ui("Giữa kỳ & Tự luận", "Written & Quantitative")}</span>
              <span class="ico-box ico-violet">${I.pen}</span>
            </div>
            <div style="font-weight:660;font-size:0.99rem;margin-bottom:5px;color:var(--ink)">${ui("204 Bài Tự luận & Tính toán", "204 Essays & Calculations")}</div>
            <p class="small muted">${ui("Lời giải mẫu từng bước, biểu điểm chấm chuẩn và công cụ rút ngẫu nhiên đề thi Giữa kỳ.", "Step-by-step solutions, marking rubrics, and sample midterm generator.")}</p>
          </div>
          <div class="small" style="font-weight:620;color:var(--violet-ink);display:flex;align-items:center;gap:5px">${ui("Xem kho tự luận", "Open Essay Bank")} <span class="card-cta-arrow">${I.arrowR}</span></div>
        </div>

        <div class="launch-card spot-surface stagger" style="--i:7" id="goLabCard">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
              <span class="tag tag-teal">${ui("Mô hình tài chính", "Financial Modeling")}</span>
              <span class="ico-box ico-teal">${I.sliders}</span>
            </div>
            <div style="font-weight:660;font-size:0.99rem;margin-bottom:5px;color:var(--ink)">${ui("Mô phỏng DCF · LBO · IPO · M&A", "DCF · LBO · IPO Simulators")}</div>
            <p class="small muted">${ui("10 mô hình định giá trực quan phản hồi biến động tức thời kèm 3 tình huống thương vụ.", "10 interactive quantitative models with live delta flashes and 3 deal simulations.")}</p>
          </div>
          <div class="small" style="font-weight:620;color:var(--teal-ink);display:flex;align-items:center;gap:5px">${ui("Mở phòng mô phỏng", "Open Modeling Studio")} <span class="card-cta-arrow">${I.arrowR}</span></div>
        </div>
      </div>
    `;

    // Mount Quick Warm-up Challenge Widget
    const paintWarmup = (slideAnim) => {
      const box = $("#warmupMount");
      if (!box || !MCQS.length) return;
      if (!state.warmupQid || !MCQ_MAP.has(state.warmupQid)) {
        const hiPool = MCQS.filter((q) => q.ch === 3 || q.ch === 5 || q.level >= 2);
        const pickPool = hiPool.length ? hiPool : MCQS;
        state.warmupQid = pickPool[Math.floor(Math.random() * pickPool.length)].id;
        state.warmupPick = null;
        state.warmupElim = {};
      }
      const q = MCQ_MAP.get(state.warmupQid);
      const LV = { 1: ui("Nhận biết", "Recall"), 2: ui("Thông hiểu", "Understand"), 3: ui("Vận dụng", "Apply"), 4: ui("Phân tích", "Analyse") };
      const opts = L(q, "opts") || q.opts;
      const rev = state.warmupPick !== null;
      const isStar = !!getStarsMcq()[q.id];

      box.innerHTML = `
        <div class="${slideAnim ? "stagger" : ""}" style="--i:0">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:10px">
            <div style="display:flex;align-items:center;gap:7px;flex-wrap:wrap">
              <span class="tag tag-accent">${I.zap} ${ui("Khởi động nhanh 1 câu", "Quick Daily Warm-up")}</span>
              <span class="q-code">${esc(q.id)}</span>
              <span class="tag">Ch.0${q.ch}</span>
              <span class="tag">${LV[q.level]}</span>
            </div>
            <div style="display:flex;gap:6px">
              <button type="button" class="btn btn-sm ${isStar ? "btn-primary" : "btn-ghost"}" id="wuStarBtn" data-tip="Lưu câu hỏi này">${isStar ? I.bookmarkFill : I.bookmark}</button>
              <button type="button" class="btn btn-sm" id="wuNextBtn" data-tip="Đổi ngẫu nhiên một câu hỏi khác">${I.rotate} ${ui("Đổi câu khác", "Another Question")}</button>
            </div>
          </div>
          <div class="q-prompt" style="margin-bottom:12px">${L(q, "q")}</div>
          <div class="warmup-opts">
            ${opts.map((o, j) => {
              let cls = "opt-row";
              let capHtml = "ABCD"[j];
              if (rev) {
                if (j === q.ans) { cls += " correct"; capHtml = I.checkDraw; }
                else if (state.warmupPick === j && j !== q.ans) { cls += " wrong"; capHtml = I.xDraw; }
              } else if (state.warmupElim[j]) {
                cls += " is-eliminated";
              }
              return `<div class="${cls}" data-wu-oi="${j}">
                <span class="opt-cap">${capHtml}</span>
                <div class="opt-txt">${o}</div>
                <button type="button" class="opt-elim-btn" data-wu-elim="${j}" data-tip="${ui("Loại trừ phương án nhiễu (Chuột phải)", "Eliminate distractor (Right-click)")}">${I.xXs}</button>
              </div>`;
            }).join("")}
          </div>
          <div class="acc-grid ${rev ? "is-open" : ""}" id="wuExplAcc">
            <div class="acc-inner">
              <div class="expl-panel" id="wuExplBody">${rev ? buildExplInnerHTML(q, state.warmupPick) : ""}</div>
            </div>
          </div>
        </div>
      `;

      box.querySelectorAll("[data-wu-elim]").forEach((eb) => {
        eb.onclick = (ev) => {
          ev.stopPropagation();
          if (state.warmupPick !== null) return;
          SFX.tap();
          const idx = +eb.dataset.wuElim;
          state.warmupElim[idx] = !state.warmupElim[idx];
          eb.closest(".opt-row").classList.toggle("is-eliminated", !!state.warmupElim[idx]);
        };
      });

      box.querySelectorAll("[data-wu-oi]").forEach((row) => {
        row.oncontextmenu = (ev) => {
          if (state.warmupPick !== null) return;
          ev.preventDefault();
          SFX.tap();
          const idx = +row.dataset.wuOi;
          state.warmupElim[idx] = !state.warmupElim[idx];
          row.classList.toggle("is-eliminated", !!state.warmupElim[idx]);
        };
        row.onclick = () => {
          if (state.warmupPick !== null) return;
          const oi = +row.dataset.wuOi;
          state.warmupPick = oi;
          const ok = oi === q.ans;
          updateStreak(ok);
          if (ok) spawnMicroBurst(row.querySelector(".opt-cap"), "var(--ok)");
          else { recordWrongMcq(q.id); renderRail(); }

          box.querySelectorAll("[data-wu-oi]").forEach((rEl, j) => {
            rEl.classList.remove("is-eliminated", "correct", "wrong", "anim-ok", "anim-bad");
            const cap = rEl.querySelector(".opt-cap");
            if (j === q.ans) {
              rEl.classList.add("correct", "anim-ok");
              if (cap) cap.innerHTML = I.checkDraw;
            } else if (j === oi && oi !== q.ans) {
              rEl.classList.add("wrong", "anim-bad");
              if (cap) cap.innerHTML = I.xDraw;
            }
          });
          $("#wuExplBody").innerHTML = buildExplInnerHTML(q, oi);
          requestAnimationFrame(() => $("#wuExplAcc").classList.add("is-open"));
          if (onScrollSettledHook) onScrollSettledHook();
        };
      });

      $("#wuStarBtn").onclick = function () {
        const on = toggleStarMcq(q.id);
        if (on) spawnMicroBurst(this, "var(--accent)");
        mutateBtn(this, (b) => {
          b.className = "btn btn-sm " + (on ? "btn-primary" : "btn-ghost");
          b.innerHTML = on ? I.bookmarkFill : I.bookmark;
        });
      };

      $("#wuNextBtn").onclick = () => {
        SFX.flip();
        const others = MCQS.filter((x) => x.id !== q.id && (x.ch === 3 || x.ch === 5 || x.level >= 2));
        const pool = others.length ? others : MCQS;
        state.warmupQid = pool[Math.floor(Math.random() * pool.length)].id;
        state.warmupPick = null;
        state.warmupElim = {};
        paintWarmup(true);
      };
    };
    paintWarmup(false);

    animateNumbers(main);
    $("#heroContinueBtn").onclick = () => nav("chapter", { ch: next.ch.id, sec: next.secIdx });
    $("#heroExamBtn").onclick = startMockExam40;
    if ($("#heroMistakeBtn")) $("#heroMistakeBtn").onclick = startMistakeDrill;
    $("#kpiReadCell").onclick = () => nav("chapter", { ch: next.ch.id, sec: next.secIdx });
    $("#kpiAccCell").onclick = () => nav("stats");
    $("#kpiBankCell").onclick = () => nav("bank");
    $("#kpiQueueCell").onclick = () => (wrongCount ? nav("bank", { bankFilter: "wrong", bankPage: 0 }) : nav("stats"));
    main.querySelectorAll("[data-open-ch]").forEach((el) => (el.onclick = () => nav("chapter", { ch: +el.dataset.openCh, sec: 0 })));
    main.querySelectorAll("[data-open-sec]").forEach((el) => {
      el.onclick = () => {
        const [c, s] = el.dataset.openSec.split("|").map(Number);
        nav("chapter", { ch: c, sec: s });
      };
    });
    main.querySelectorAll("[data-drill-ch]").forEach((b) => (b.onclick = () => startQuickPractice(+b.dataset.drillCh)));
    $("#goBankCard").onclick = () => nav("bank");
    $("#goEssayCard").onclick = () => nav("essays");
    $("#goLabCard").onclick = () => nav("labs");
  }

  /* ======================================================================
     2. SYLLABUS
     ====================================================================== */
  function renderSyllabus(main) {
    const bibHtml = window.IBNguon ? cleanEmoji(window.IBNguon.danhMuc(isEn() ? "en" : "vi")) : "";
    main.innerHTML = `
      <div class="page-header stagger" style="--i:0">
        <div>
          <div class="kicker">${esc(META.code)} · SYLLABUS & ASSESSMENT</div>
          <h1 class="h1">${ui("Đề cương học phần & Ma trận đánh giá", "Course Syllabus & Assessment Blueprint")}</h1>
          <p class="lead">${L(META, "faculty")} · ${META.credits} ${ui("tín chỉ", "credits")} (${META.hours.classroom}h ${ui("lý thuyết & thảo luận", "contact")} + ${META.hours.selfStudy}h ${ui("tự học", "self-study")}) · ${ui("Tiên quyết:", "Prerequisite:")} ${L(META, "prerequisite")}</p>
        </div>
      </div>

      <div class="resp-grid-2 stagger" style="--i:1;margin-bottom:20px">
        <div class="panel panel-pad panel-hover">
          <div class="kicker">${ui("Đề thi kết thúc học phần (50%)", "Final Exam Structure (50%)")}</div>
          <h3 style="font-size:1rem;margin-bottom:10px">${ui("40 câu trắc nghiệm khách quan · 60 phút", "40 Multiple-Choice Questions · 60 Minutes")}</h3>
          <table class="tbl" style="margin-bottom:0">
            <tr><th>${ui("Chương", "Ch.")}</th><th>${ui("Số câu", "Qs")}</th><th>${ui("Điểm", "Pts")}</th><th>${ui("Tỷ trọng", "Weight")}</th></tr>
            ${CHAPTERS.map((c) => {
              const n = EXAM_BLUEPRINT[c.id];
              return `<tr>
                <td><b>0${c.id}</b> · ${L(c, "title")}</td>
                <td class="mono"><b>${n}</b></td>
                <td class="mono">${(n * 0.25).toFixed(2).replace(".", ",")}</td>
                <td><span class="tag ${n >= 10 ? "tag-warn" : ""}">${Math.round((n / 40) * 100)}%</span></td>
              </tr>`;
            }).join("")}
            <tr><td><b>${ui("Tổng", "Total")}</b></td><td class="mono"><b>40</b></td><td class="mono"><b>10,00</b></td><td><b>100%</b></td></tr>
          </table>
        </div>

        <div class="panel panel-pad panel-hover">
          <div class="kicker">${ui("Thành phần đánh giá", "Grading Breakdown")}</div>
          <h3 style="font-size:1rem;margin-bottom:10px">${ui("Tỷ trọng điểm toàn khoá", "Course Assessment Components")}</h3>
          <table class="tbl" style="margin-bottom:12px">
            <tr><th>${ui("Hạng mục", "Component")}</th><th>${ui("Tỷ trọng", "Share")}</th><th>${ui("Hình thức", "Format")}</th><th>CLO</th></tr>
            ${(META.assessment || []).map((a) => `<tr><td><b>${L(a, "item")}</b></td><td><span class="tag">${esc(a.weight)}</span></td><td>${L(a, "method")}</td><td class="mono">${esc(a.clo)}</td></tr>`).join("")}
          </table>
          <div class="small muted">${ui("Giảng viên:", "Instructor:")} <b style="color:var(--ink)">${L(META, "lecturer")}</b></div>
        </div>
      </div>

      <div class="panel panel-pad panel-hover stagger" style="--i:2;margin-bottom:20px">
        <div class="kicker">COURSE LEARNING OUTCOMES</div>
        <h3 style="font-size:1rem;margin-bottom:10px">${ui("Chuẩn đầu ra học phần (CLO)", "Learning Outcomes")}</h3>
        <table class="tbl" style="margin-bottom:0">
          <tr><th>CLO</th><th>${ui("Nội dung chuẩn đầu ra", "Description")}</th><th>Bloom</th><th>PLO</th></tr>
          ${(META.clos || []).map((c) => `<tr><td class="mono"><b>${esc(c.id)}</b></td><td>${L(c, "text")}</td><td class="mono">${esc(c.level)}</td><td class="mono">${esc(c.plo)}</td></tr>`).join("")}
        </table>
      </div>

      <div class="panel panel-pad panel-hover stagger" style="--i:3;margin-bottom:20px">
        <div class="kicker">TEACHING SCHEDULE</div>
        <h3 style="font-size:1rem;margin-bottom:10px">${ui("Phân bổ thời lượng & Tài liệu đọc theo chương", "Chapter Schedule & Assigned Readings")}</h3>
        <table class="tbl" style="margin-bottom:0">
          <tr><th>${ui("Giờ", "Hrs")}</th><th>${ui("Chương", "Chapter")}</th><th>CLO</th><th>${ui("Tài liệu đọc bắt buộc & tham khảo", "Assigned Readings")}</th></tr>
          ${CHAPTERS.map((ch) => `<tr>
            <td class="mono"><b>${ch.hours}h</b></td>
            <td><b>0${ch.id}. ${L(ch, "title")}</b><div class="small muted">${L(ch, "blurb")}</div></td>
            <td class="mono">${esc(ch.clo)}</td>
            <td class="small">${theoNN((lg) => (window.IBNguon ? window.IBNguon.dien(Lg(ch, "refs", lg), lg) : Lg(ch, "refs", lg)))}</td>
          </tr>`).join("")}
        </table>
      </div>

      <div class="prose stagger" style="--i:4">${bibHtml}</div>
    `;
    wrapTablesForScroll(main);
  }

  /* ======================================================================
     3. 3-COLUMN CHAPTER READER (PRESERVES TAB BAR SO INK GLIDES SMOOTHLY!)
     ====================================================================== */
  let activeHeadings = [];

  function renderChapter(main) {
    $("#pageWrap").classList.add("page-wide");
    const ch = CHAPTERS.find((c) => c.id === state.ch) || CHAPTERS[0];
    if (state.sec >= ch.sections.length) state.sec = 0;
    const sec = ch.sections[state.sec];

    if (!isSecRead(ch.id, sec.id)) {
      setSecRead(ch.id, sec.id, true);
      renderRail();
    }
    const readNow = isSecRead(ch.id, sec.id);

    const deepVi = window.renderDeepDive ? window.renderDeepDive(ch.id, sec.id, "vi") : "";
    const deepEn = window.renderDeepDive ? window.renderDeepDive(ch.id, sec.id, "en") : "";
    const hasDeep = !!(deepVi || deepEn);
    const figHTML = window.renderFigures ? window.renderFigures(ch.id, sec.id) : "";
    const caseHTML = window.renderCases ? window.renderCases(ch.id, sec.id, LANG()) : "";
    const linkedMajorCases = CASES.filter((c) => c.ch === ch.id && (c.muc || []).includes(sec.id));
    const hasEnrich = !!(figHTML || caseHTML || linkedMajorCases.length);

    if (state.chTab === "deep" && !hasDeep) state.chTab = "all";
    if (state.chTab === "enrich" && !hasEnrich) state.chTab = "all";

    const coreBody = theoNN((lg) => {
      const raw = sectionHTML(ch, sec, lg);
      return window.IBNguon ? window.IBNguon.dien(raw, lg) : raw;
    });
    const deepBody = hasDeep ? theoNN((lg) => {
      const raw = window.renderDeepDive(ch.id, sec.id, lg);
      return window.IBNguon ? window.IBNguon.dien(raw, lg) : raw;
    }) : "";
    const nguonHTML = window.IBNguon ? cleanEmoji(window.IBNguon.hopMuc(ch.id, sec.id, isEn() ? "en" : "vi")) : "";

    const majorCasesBlock = linkedMajorCases.length ? `
      <div class="panel panel-pad" style="margin:24px 0;background:var(--bg-subtle)">
        <div class="kicker">${ui("Hồ sơ thương vụ liên quan", "Related Case Studies")}</div>
        ${linkedMajorCases.map((c) => `
          <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;padding:10px 0;border-top:1px solid var(--border)">
            <div>
              <div style="font-weight:650;color:var(--ink)">${esc(isEn() ? c.tieuDe.en : c.tieuDe.vi)}</div>
              <div class="small muted">${esc(isEn() ? c.phu.en : c.phu.vi)}</div>
            </div>
            <button class="btn btn-sm" data-open-case="${esc(c.id)}">${ui("Đọc hồ sơ", "Open Case")} ${I.arrowR}</button>
          </div>`).join("")}
      </div>` : "";

    const computeTabHTML = (tab) => {
      if (tab === "core") return coreBody;
      if (tab === "deep") return deepBody;
      if (tab === "enrich") return (figHTML || "") + (caseHTML || "") + majorCasesBlock;
      if (tab === "meta") {
        return `<div class="panel panel-pad" style="background:var(--bg-subtle)">
          <h3 style="margin-top:0">${ui("Mục tiêu học tập Chương", "Chapter Learning Objectives")} 0${ch.id}</h3>
          <ul>${(L(ch, "objectives") || []).map((o) => `<li>${o}</li>`).join("")}</ul>
          <h3 style="margin-top:20px">${ui("Tài liệu đọc", "Assigned Readings")}</h3>
          <p>${theoNN((lg) => (window.IBNguon ? window.IBNguon.dien(Lg(ch, "refs", lg), lg) : Lg(ch, "refs", lg)))}</p>
        </div>`;
      }
      return coreBody
        + (deepBody ? `<h2 id="sec-deepdive">${ui("Đào sâu theo giáo trình", "Textbook Deep-Dive")}</h2>${deepBody}` : "")
        + (figHTML ? `<h2 id="sec-figures">${ui("Sơ đồ & Mô hình nghiệp vụ", "Diagrams & Visual Models")}</h2>${figHTML}` : "")
        + (caseHTML ? `<h2 id="sec-cases">${ui("Tình huống thực tiễn", "Market Precedents")}</h2>${caseHTML}` : "")
        + majorCasesBlock;
    };

    const fullHtmlForEst = computeTabHTML("all");
    const readMins = estimateReadMins(fullHtmlForEst);

    let prevTarget = null, nextTarget = null;
    if (state.sec > 0) {
      const ps = ch.sections[state.sec - 1];
      prevTarget = { ch: ch.id, sec: state.sec - 1, label: `${ps.id} ${Lp(ps, "title")}` };
    } else if (ch.id > 1) {
      const pc = CHAPTERS.find((x) => x.id === ch.id - 1);
      const ps = pc.sections[pc.sections.length - 1];
      prevTarget = { ch: pc.id, sec: pc.sections.length - 1, label: `Ch.0${pc.id} · ${ps.id} ${Lp(ps, "title")}` };
    }
    if (state.sec < ch.sections.length - 1) {
      const ns = ch.sections[state.sec + 1];
      nextTarget = { ch: ch.id, sec: state.sec + 1, label: `${ns.id} ${Lp(ns, "title")}` };
    } else if (ch.id < CHAPTERS.length) {
      const nc = CHAPTERS.find((x) => x.id === ch.id + 1);
      const ns = nc.sections[0];
      nextTarget = { ch: nc.id, sec: 0, label: `Ch.0${nc.id} · ${ns.id} ${Lp(ns, "title")}` };
    }

    main.innerHTML = `
      <div class="reader-grid">
        <div class="reader-sheet">
          <div class="kicker stagger" style="--i:0;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <span>${ui("Chương", "Chapter")} 0${ch.id} · ${ui("Mục", "Section")} ${esc(sec.id)}</span>
            <span>·</span>
            <span style="display:inline-flex;align-items:center;gap:4px">${I.clock} ~${readMins} ${ui("phút đọc", "min read")}</span>
          </div>
          <h1 class="h1 stagger" style="--i:1;margin-bottom:14px">${h1Bi(sec, "title", sec.id + " — ")}</h1>

          <div class="mob-chapter-bar" id="mobChapterBar">
            <div class="mob-sec-strip" id="mobSecStrip">
              ${ch.sections.map((s, idx) => {
                const rd = isSecRead(ch.id, s.id);
                const act = idx === state.sec;
                return `<button type="button" class="mob-sec-pill ${act ? "active" : (rd ? "done" : "")}" data-mob-rsec="${idx}">
                  ${rd && !act ? I.checkXs : ""}<span>${esc(s.id)}</span>
                </button>`;
              }).join("")}
            </div>
            <div class="mob-ch-actions">
              <button type="button" class="btn btn-sm" id="btnMobTocToggle">${I.toc} ${ui("Mục lục", "Outline")}</button>
              <button type="button" class="btn btn-sm" id="btnListenSecMob">${I.volume} ${ui("Nghe", "Listen")}</button>
              <button type="button" class="btn btn-sm ${readNow ? "btn-ok" : ""}" id="btnMarkSecMob"><span id="icMarkSecMob">${readNow ? I.checkDraw : I.check}</span> <span id="lblMarkSecMob">${readNow ? ui("Đã học", "Done") : ui("Đánh dấu", "Mark")}</span></button>
              <button type="button" class="btn btn-sm" id="btnPracticeChMob">${I.target} ${ui(`Đề Ch.0${ch.id}`, `Ch.0${ch.id} Quiz`)}</button>
              <button type="button" class="btn btn-sm" id="btnLabChMob">${I.sliders} ${ui("Mô hình", "Model")}</button>
            </div>
            <div class="acc-grid no-gap" id="mobTocAcc">
              <div class="acc-inner">
                <ul class="toc-list mob-toc-panel" id="mobOnPageToc" style="margin-bottom:0"></ul>
              </div>
            </div>
          </div>

          <div class="uline-tabs" id="chTabBar">
            <button class="uline-tab ${state.chTab === "all" ? "active" : ""}" data-ctab="all">${ui("Đầy đủ", "Complete")}</button>
            <button class="uline-tab ${state.chTab === "core" ? "active" : ""}" data-ctab="core">${ui("Bài giảng cốt lõi", "Core Lecture")}</button>
            ${hasDeep ? `<button class="uline-tab ${state.chTab === "deep" ? "active" : ""}" data-ctab="deep">${ui("Đào sâu giáo trình", "Deep-Dive")}</button>` : ""}
            ${hasEnrich ? `<button class="uline-tab ${state.chTab === "enrich" ? "active" : ""}" data-ctab="enrich">${ui("Sơ đồ & Tình huống", "Diagrams & Cases")}</button>` : ""}
            <button class="uline-tab ${state.chTab === "meta" ? "active" : ""}" data-ctab="meta">${ui("Mục tiêu & Tài liệu", "Objectives & Refs")}</button>
          </div>

          <article class="prose stagger" style="--i:2" id="lectureBody"></article>

          ${nguonHTML}

          <div class="doc-pager">
            ${prevTarget ? `
              <div class="pager-card spot-surface" id="btnDocPrev">
                <span class="pager-dir">${I.arrowL} ${ui("Mục trước", "Previous")}</span>
                <span class="pager-lbl">${esc(prevTarget.label)}</span>
              </div>` : `<div></div>`}
            ${nextTarget ? `
              <div class="pager-card next spot-surface" id="btnDocNext">
                <span class="pager-dir">${ui("Mục tiếp theo", "Next")} ${I.arrowR}</span>
                <span class="pager-lbl">${esc(nextTarget.label)}</span>
              </div>` : `
              <div class="pager-card next spot-surface" id="btnDocFinish">
                <span class="pager-dir">${ui("Hoàn thành 6 chương", "All Chapters Done")} ${I.arrowR}</span>
                <span class="pager-lbl">${ui("Chuyển sang Phòng thi thử 40 câu", "Enter 40-Q Mock Exam Studio")}</span>
              </div>`}
          </div>
        </div>

        <aside class="reader-toc">
          <div class="toc-title">${ui("Trên trang này", "On this page")}</div>
          <ul class="toc-list" id="onPageToc"></ul>

          <div class="toc-title">${ui("Các mục Chương", "Sections in Ch.")} 0${ch.id}</div>
          <ul class="toc-list">
            ${ch.sections.map((s, idx) => `
              <li><span class="toc-link ${idx === state.sec ? "active" : ""}" data-rsec="${idx}">${esc(s.id)} ${esc(Lp(s, "title"))}</span></li>
            `).join("")}
          </ul>

          <div style="display:flex;flex-direction:column;gap:6px;margin-top:14px">
            <button class="btn btn-sm" id="btnListenSec" style="justify-content:flex-start">${I.volume} ${ui("Nghe đọc bài giảng", "Listen to section")}</button>
            <button class="btn btn-sm ${readNow ? "btn-ok" : ""}" id="btnMarkSec" style="justify-content:flex-start"><span id="icMarkSec">${readNow ? I.checkDraw : I.check}</span> <span id="lblMarkSec">${readNow ? ui("Đã đánh dấu hoàn thành", "Completed") : ui("Đánh dấu đã học", "Mark as completed")}</span></button>
            <button class="btn btn-sm" id="btnPracticeCh" style="justify-content:flex-start">${I.target} ${ui(`Luyện đề Chương 0${ch.id}`, `Practice Ch.0${ch.id} MCQs`)}</button>
            <button class="btn btn-sm" id="btnLabCh" style="justify-content:flex-start">${I.sliders} ${ui(`Mô hình Chương 0${ch.id}`, `Open Ch.0${ch.id} Model`)}</button>
          </div>
        </aside>
      </div>
    `;

    const mountLectureTab = (tab, animate) => {
      state.chTab = tab;
      const lb = $("#lectureBody");
      lb.innerHTML = cleanEmoji(computeTabHTML(tab));
      if (animate) {
        lb.classList.remove("stagger");
        void lb.offsetWidth;
        lb.classList.add("stagger");
        lb.style.setProperty("--i", "0");
      }

      activeHeadings = [...lb.querySelectorAll("h2, h3")];
      wrapTablesForScroll(lb);
      upgradeNativeTitles(lb);
      const tocEl = $("#onPageToc");
      const mobTocEl = $("#mobOnPageToc");
      if (activeHeadings.length) {
        const itemsHtml = activeHeadings.map((hEl, idx) => {
          if (!hEl.id) hEl.id = "hd-" + idx;
          const plain = hEl.textContent;
          const isSub = hEl.tagName === "H3";
          if (!hEl.querySelector(".hd-anchor")) {
            const anc = document.createElement("span");
            anc.className = "hd-anchor";
            anc.textContent = "#";
            anc.setAttribute("data-tip", ui("Đầu mục neo — bấm để cuộn tới", "Section anchor"));
            anc.onclick = () => {
              SFX.tap();
              smoothScrollToY(hEl.getBoundingClientRect().top + window.scrollY - 76);
              hEl.classList.remove("heading-flash");
              void hEl.offsetWidth;
              hEl.classList.add("heading-flash");
            };
            hEl.appendChild(anc);
          }
          return `<li><span class="toc-link ${idx === 0 ? "active" : ""} ${isSub ? "sub" : ""}" data-scroll-id="${hEl.id}">${esc(plain)}</span></li>`;
        }).join("");
        tocEl.innerHTML = `<span class="toc-ink" id="tocInk"></span>` + itemsHtml;
        if (mobTocEl) mobTocEl.innerHTML = itemsHtml;
        const bindTocJump = (container) => {
          if (!container) return;
          container.querySelectorAll("[data-scroll-id]").forEach((a) => {
            a.onclick = () => {
              SFX.tap();
              const mAcc = $("#mobTocAcc");
              if (mAcc) mAcc.classList.remove("is-open");
              const t = document.getElementById(a.dataset.scrollId);
              if (t) {
                smoothScrollToY(t.getBoundingClientRect().top + window.scrollY - 76);
                t.classList.remove("heading-flash");
                void t.offsetWidth;
                t.classList.add("heading-flash");
              }
            };
          });
        };
        bindTocJump(tocEl);
        bindTocJump(mobTocEl);
      } else {
        const single = `<li><span class="toc-link active">${esc(sec.id)} ${esc(Lp(sec, "title"))}</span></li>`;
        tocEl.innerHTML = `<span class="toc-ink" id="tocInk"></span>` + single;
        if (mobTocEl) mobTocEl.innerHTML = single;
      }
      syncTocInk(true);

      // Inject interactive Copy action pill into every formula, keyterm & example callout
      lb.querySelectorAll(".formula, .keyterm, .example").forEach((box) => {
        if (box.querySelector(".callout-copy-btn")) return;
        const cb = document.createElement("button");
        cb.type = "button";
        cb.className = "callout-copy-btn";
        cb.innerHTML = `${I.copy} <span>${ui("Sao chép", "Copy")}</span>`;
        cb.onclick = (ev) => {
          ev.stopPropagation();
          const clone = box.cloneNode(true);
          const btnInClone = clone.querySelector(".callout-copy-btn");
          if (btnInClone) btnInClone.remove();
          const txt = clone.innerText.trim();
          if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).catch(() => {});
          SFX.correct(1);
          spawnMicroBurst(cb, "var(--ok)");
          mutateBtn(cb, (b) => {
            b.classList.add("copied");
            b.innerHTML = `${I.checkDraw} <span>${ui("Đã chép", "Copied")}</span>`;
          });
          clearTimeout(cb._t);
          cb._t = setTimeout(() => {
            mutateBtn(cb, (b) => {
              b.classList.remove("copied");
              b.innerHTML = `${I.copy} <span>${ui("Sao chép", "Copy")}</span>`;
            });
          }, 1600);
        };
        box.insertBefore(cb, box.firstChild);
      });

      lb.querySelectorAll(".fig-card").forEach((card) => {
        const tEl = card.querySelector(".fig-title");
        const bEl = card.querySelector(".fig-body");
        if (tEl && bEl && !tEl.querySelector(".fig-zoom-hint")) {
          const span = document.createElement("span");
          span.className = "muted small fig-zoom-hint";
          span.style.cssText = "font-weight:500;font-size:0.74rem;display:inline-flex;align-items:center;gap:4px;cursor:pointer;white-space:nowrap;flex-shrink:0";
          span.innerHTML = `${I.zoom} ${ui("Phóng to", "Expand")}`;
          tEl.appendChild(span);
          const openLb = () => openDiagramLightbox(tEl.firstChild ? tEl.firstChild.textContent : "", bEl.innerHTML);
          card.style.cursor = "zoom-in";
          card.onclick = (ev) => {
            if (ev.target && ev.target.closest && ev.target.closest("a, button")) return;
            openLb();
          };
        }
      });
      lb.querySelectorAll("[data-open-case]").forEach((b) => (b.onclick = () => nav("caseRead", { caseId: b.dataset.openCase })));
    };

    mountLectureTab(state.chTab, false);
    syncSlidingControls(main);

    const tabBar = $("#chTabBar");
    tabBar.querySelectorAll("[data-ctab]").forEach((b) => {
      b.onclick = () => {
        if (state.chTab === b.dataset.ctab) return;
        SFX.tap();
        tabBar.querySelectorAll(".uline-tab").forEach((x) => x.classList.toggle("active", x === b));
        updateTabInk(tabBar);
        if (b.scrollIntoView) b.scrollIntoView({ inline: "nearest", block: "nearest", behavior: "smooth" });
        mountLectureTab(b.dataset.ctab, true);
      };
    });

    main.querySelectorAll("[data-rsec], [data-mob-rsec]").forEach((b) => (b.onclick = () => {
      const nextSec = +(b.dataset.rsec != null ? b.dataset.rsec : b.dataset.mobRsec);
      if (nextSec === state.sec) return;
      nav("chapter", { ch: ch.id, sec: nextSec });
    }));
    const actMobSec = main.querySelector(".mob-sec-pill.active");
    if (actMobSec && actMobSec.scrollIntoView) {
      requestAnimationFrame(() => actMobSec.scrollIntoView({ inline: "center", block: "nearest" }));
    }

    const triggerListen = () => {
      SFX.tap();
      if (tts.playing) { stopTTS(); return; }
      const lb = $("#lectureBody");
      lb.classList.add("tts-an-trich");
      const txt = lb.innerText;
      lb.classList.remove("tts-an-trich");
      startTTS(`Ch.0${ch.id} · ${sec.id}`, txt);
    };
    const triggerMarkSec = (srcBtn) => {
      const nextState = !isSecRead(ch.id, sec.id);
      if (nextState) { SFX.correct(1); spawnMicroBurst(srcBtn, "var(--ok)"); }
      else SFX.tap();
      setSecRead(ch.id, sec.id, nextState);
      if ($("#btnMarkSec")) $("#btnMarkSec").classList.toggle("btn-ok", nextState);
      if ($("#icMarkSec")) $("#icMarkSec").innerHTML = nextState ? I.checkDraw : I.check;
      if ($("#lblMarkSec")) $("#lblMarkSec").textContent = nextState ? ui("Đã đánh dấu hoàn thành", "Completed") : ui("Đánh dấu đã học", "Mark as completed");
      if ($("#btnMarkSecMob")) $("#btnMarkSecMob").classList.toggle("btn-ok", nextState);
      if ($("#icMarkSecMob")) $("#icMarkSecMob").innerHTML = nextState ? I.checkDraw : I.check;
      if ($("#lblMarkSecMob")) $("#lblMarkSecMob").textContent = nextState ? ui("Đã học", "Done") : ui("Đánh dấu", "Mark");
      showToast(nextState ? ui(`Đã hoàn thành mục ${sec.id}`, `Marked ${sec.id} completed`) : ui(`Đã bỏ đánh dấu mục ${sec.id}`, `Unmarked ${sec.id}`));
      renderRail();
    };
    $("#btnListenSec").onclick = triggerListen;
    if ($("#btnListenSecMob")) $("#btnListenSecMob").onclick = triggerListen;
    $("#btnMarkSec").onclick = function () { triggerMarkSec(this); };
    if ($("#btnMarkSecMob")) $("#btnMarkSecMob").onclick = function () { triggerMarkSec(this); };
    if ($("#btnMobTocToggle")) $("#btnMobTocToggle").onclick = () => {
      SFX.tap();
      const acc = $("#mobTocAcc");
      if (acc) acc.classList.toggle("is-open");
    };
    $("#btnPracticeCh").onclick = () => startQuickPractice(ch.id);
    if ($("#btnPracticeChMob")) $("#btnPracticeChMob").onclick = () => startQuickPractice(ch.id);
    $("#btnLabCh").onclick = () => nav("labs", { labGroup: "ch", labKey: String(ch.id) });
    if ($("#btnLabChMob")) $("#btnLabChMob").onclick = () => nav("labs", { labGroup: "ch", labKey: String(ch.id) });
    if ($("#btnDocPrev")) $("#btnDocPrev").onclick = () => nav("chapter", { ch: prevTarget.ch, sec: prevTarget.sec });
    if ($("#btnDocNext")) $("#btnDocNext").onclick = () => nav("chapter", { ch: nextTarget.ch, sec: nextTarget.sec });
    if ($("#btnDocFinish")) $("#btnDocFinish").onclick = () => nav("exam");
  }

  /* ======================================================================
     4. ASSESSMENT STUDIO (IN-PLACE ACCORDION REVEAL + SVG MORPH + GAUGE)
     ====================================================================== */
  function sampleExam40() {
    const picks = [];
    Object.entries(EXAM_BLUEPRINT).forEach(([chStr, n]) => {
      const ch = +chStr;
      const pool = MCQS.filter((q) => q.ch === ch);
      const lows = shuffle(pool.filter((q) => q.level <= 2));
      const mids = shuffle(pool.filter((q) => q.level === 3));
      const highs = shuffle(pool.filter((q) => q.level === 4));
      const wantLow = Math.ceil(n * 0.55), wantMid = Math.ceil(n * 0.27);
      const sel = [...lows.slice(0, wantLow), ...mids.slice(0, wantMid), ...highs.slice(0, Math.max(0, n - wantLow - wantMid))];
      const rest = shuffle(pool.filter((q) => !sel.includes(q)));
      while (sel.length < n && rest.length) sel.push(rest.pop());
      picks.push(...sel.slice(0, n));
    });
    return picks;
  }

  function launchQuiz(qs, opts) {
    if (!qs.length) {
      showToast(ui("Không có câu hỏi nào khớp điều kiện đã chọn", "No questions match the selected criteria"));
      return;
    }
    SFX.tap();
    clearInterval(examTimer);
    state.elimExam = {};
    state.quiz = {
      qs,
      answers: new Array(qs.length).fill(null),
      flagged: {},
      cur: 0,
      singleMode: opts.singleMode !== false,
      mode: opts.mode || "practice",
      feedback: opts.feedback || "instant",
      scope: opts.scope || "Practice",
      scopeCh: opts.scopeCh || 0,
      startTime: Date.now(),
      timeLimit: opts.timeLimit || 0,
      done: false,
      justFinished: false,
      reviewFilter: "all"
    };
    saveActiveQuiz();
    nav("examRun");
  }

  function startMockExam40() {
    launchQuiz(sampleExam40(), {
      mode: "exam",
      feedback: "end",
      scope: ui("Đề thi thử Cuối kỳ (40 câu)", "Mock Final Exam (40 Qs)"),
      scopeCh: -1,
      timeLimit: 60 * 60,
      singleMode: true
    });
  }
  function startFocus35Quiz() {
    const p3 = shuffle(MCQS.filter((q) => q.ch === 3)).slice(0, 10);
    const p5 = shuffle(MCQS.filter((q) => q.ch === 5)).slice(0, 10);
    launchQuiz([...p3, ...p5], {
      mode: "practice",
      feedback: "instant",
      scope: ui("Chuyên đề Trọng tâm Ch.03 & Ch.05", "High-Yield Ch.03 & Ch.05"),
      scopeCh: 0,
      timeLimit: 30 * 60,
      singleMode: true
    });
  }
  function startQuickPractice(chId) {
    launchQuiz(shuffle(MCQS.filter((q) => q.ch === chId)).slice(0, 20), {
      mode: "practice",
      feedback: "instant",
      scope: `${ui("Luyện tập Chương", "Chapter")} 0${chId}`,
      scopeCh: chId,
      timeLimit: 0,
      singleMode: true
    });
  }
  function startMistakeDrill() {
    const w = new Set(Object.keys(getWrongMcq()));
    const s = new Set(Object.keys(getStarsMcq()));
    const pool = shuffle(MCQS.filter((q) => w.has(q.id) || s.has(q.id)));
    launchQuiz(pool.slice(0, 40), {
      mode: "practice",
      feedback: "instant",
      scope: ui("Ôn tập Câu sai & Đánh dấu", "Mistakes & Bookmarks"),
      scopeCh: 0,
      timeLimit: 0,
      singleMode: true
    });
  }

  function renderExamSetup(main) {
    const wrongCount = Object.keys(getWrongMcq()).length;
    const starCount = Object.keys(getStarsMcq()).length;

    main.innerHTML = `
      <div class="page-header stagger" style="--i:0">
        <div>
          <div class="kicker">ASSESSMENT STUDIO</div>
          <h1 class="h1">${ui("Phòng thi thử & Luyện đề trắc nghiệm", "Mock Exam & Practice Studio")}</h1>
          <p class="lead"><span class="desk-kbd-hint">${ui("Môi trường làm bài tập trung hỗ trợ bàn phím (A–D chọn đáp án, phím mũi tên chuyển câu, F gắn cờ xem lại, S lưu câu hỏi).", "Keyboard-driven testing workspace: A–D to answer, arrows to navigate, F to flag, S to bookmark.")}</span><span class="touch-swipe-hint">${ui("Làm bài tập trung với đồng hồ đếm ngược, gạch loại trừ phương án nhiễu (×), gắn cờ xem lại và bảng điều hướng 40 câu nhanh.", "Focused exam studio with live countdown, distractor elimination, question flagging, and 40-Q navigator sheet.")}</span></p>
        </div>
      </div>

      ${state.quiz && !state.quiz.done ? `
        <div class="panel panel-pad stagger" style="--i:1;margin-bottom:20px;background:var(--bg-subtle);display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
          <div>
            <span class="tag tag-warn" style="margin-bottom:4px">${ui("Phiên làm bài chưa nộp", "Session in progress")}</span>
            <div style="font-weight:650">${esc(state.quiz.scope)} — <span class="mono">${state.quiz.answers.filter((a) => a !== null).length}/${state.quiz.qs.length}</span> ${ui("câu đã chọn", "answered")}</div>
          </div>
          <div style="display:flex;gap:8px">
            <button class="btn btn-primary" id="btnResumeExam">${ui("Tiếp tục làm bài", "Resume")} ${I.arrowR}</button>
            <button class="btn btn-danger" id="btnAbortExam">${ui("Huỷ phiên này", "Discard")}</button>
          </div>
        </div>` : ""}

      <div class="resp-grid-cards" style="gap:20px;align-items:start">
        <div style="display:flex;flex-direction:column;gap:12px">
          <div class="panel panel-pad panel-hover spot-surface stagger" style="--i:1">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <span class="tag tag-ok">${ui("Chuẩn cấu trúc thi cuối kỳ", "Official Exam Blueprint")}</span>
              <span class="mono small muted">40 Qs · 60 min</span>
            </div>
            <h3 style="font-size:1.05rem;margin-bottom:6px">${ui("Đề thi thử kết thúc học phần", "Full-Length Mock Final Exam")}</h3>
            <p class="small muted" style="margin-bottom:14px">${ui("Rút ngẫu nhiên 40 câu phân tầng độ khó theo đúng ma trận đề: Ch.01 (5), Ch.02 (5), Ch.03 (10), Ch.04 (5), Ch.05 (10), Ch.06 (5). Nộp bài mới mở đáp án.", "Stratified 40-question paper matching official chapter weights and cognitive levels. Timed 60 minutes.")}</p>
            <button class="btn btn-primary" id="btnStart40">${ui("Bắt đầu làm đề 40 câu", "Start 40-Q Mock Exam")} ${I.arrowR}</button>
          </div>

          <div class="panel panel-pad panel-hover spot-surface stagger" style="--i:2">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <span class="tag tag-warn">${ui("Trọng tâm 50% điểm số", "High-Yield Focus")}</span>
              <span class="mono small muted">20 Qs · 30 min</span>
            </div>
            <h3 style="font-size:1.05rem;margin-bottom:6px">${ui("Chuyên đề sâu Chương 03 (M&A) & Chương 05 (Tư vấn DN)", "Ch.03 M&A & Ch.05 Restructuring Drill")}</h3>
            <p class="small muted" style="margin-bottom:14px">${ui("Tập trung tối đa vào 2 chương nặng nhất của kỳ thi với chế độ chấm và giải thích ngay sau mỗi câu.", "Targeted 20-question intensive on the two highest-weighted chapters with instant explanations.")}</p>
            <button class="btn" id="btnStart35">${ui("Luyện 20 câu trọng tâm", "Start High-Yield Drill")} ${I.arrowR}</button>
          </div>

          <div class="panel panel-pad panel-hover spot-surface stagger" style="--i:3">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <span class="tag ${wrongCount ? "tag-err" : ""}">${ui("Cá nhân hoá", "Personalized")}</span>
              <span class="mono small muted">${wrongCount + starCount} Qs</span>
            </div>
            <h3 style="font-size:1.05rem;margin-bottom:6px">${ui("Khắc phục câu từng làm sai & Đánh dấu", "Mistake & Bookmark Repair")}</h3>
            <p class="small muted" style="margin-bottom:14px">${ui(`Tổng hợp ${wrongCount} câu bạn từng chọn sai và ${starCount} câu đã đánh dấu lưu lại.`, `Combines ${wrongCount} missed questions and ${starCount} saved questions.`)}</p>
            <button class="btn" id="btnStartWeak" ${wrongCount + starCount === 0 ? "disabled" : ""}>${wrongCount + starCount ? ui("Luyện lại giỏ câu hỏi này", "Start Repair Session") : ui("Giỏ ôn lại đang trống", "No items yet")}</button>
          </div>
        </div>

        <div class="panel panel-pad stagger" style="--i:2">
          <div class="kicker">${ui("Tuỳ chỉnh thông số", "Custom Configuration")}</div>
          <h3 style="font-size:1.05rem;margin-bottom:16px">${ui("Tự thiết lập đề luyện tập", "Build Custom Practice Set")}</h3>

          <div style="margin-bottom:14px">
            <label class="small muted" style="display:block;margin-bottom:5px;font-weight:550">${ui("Phạm vi chương", "Chapter Scope")}</label>
            <select class="sel" id="cfgCh" style="width:100%">
              <option value="0">${ui("Toàn bộ 6 chương", "All 6 Chapters")} (${MCQS.length})</option>
              ${CHAPTERS.map((c) => `<option value="${c.id}" ${state.customCh === c.id ? "selected" : ""}>0${c.id}. ${esc(Lp(c, "title"))} (${MCQS.filter((q) => q.ch === c.id).length})</option>`).join("")}
            </select>
          </div>

          <div style="margin-bottom:14px">
            <label class="small muted" style="display:block;margin-bottom:5px;font-weight:550">${ui("Cấp độ nhận thức", "Cognitive Level")}</label>
            <select class="sel" id="cfgLv" style="width:100%">
              <option value="0">${ui("Tất cả cấp độ", "All Levels")}</option>
              <option value="1">${ui("Mức 1 — Nhận biết", "Level 1 — Recall")}</option>
              <option value="2">${ui("Mức 2 — Thông hiểu", "Level 2 — Understand")}</option>
              <option value="3">${ui("Mức 3 — Vận dụng", "Level 3 — Apply")}</option>
              <option value="4">${ui("Mức 4 — Phân tích", "Level 4 — Analyse")}</option>
            </select>
          </div>

          <div style="margin-bottom:14px">
            <label class="small muted" style="display:block;margin-bottom:5px;font-weight:550">${ui("Số lượng câu hỏi", "Number of Questions")}</label>
            <div class="seg" id="cfgCountSeg" style="width:100%;display:grid;grid-template-columns:repeat(5,1fr)">
              ${[10, 20, 30, 40, 9999].map((n) => `<button type="button" data-cnt="${n}" class="${state.customCount === n ? "active" : ""}">${n === 9999 ? ui("Tất cả", "All") : n}</button>`).join("")}
            </div>
          </div>

          <div style="margin-bottom:20px">
            <label class="small muted" style="display:block;margin-bottom:5px;font-weight:550">${ui("Thời điểm hiện đáp án", "Answer Reveal")}</label>
            <div class="seg" id="cfgFbSeg" style="width:100%;display:grid;grid-template-columns:1fr 1fr">
              <button type="button" data-fb="instant" class="${state.customFb === "instant" ? "active" : ""}">${ui("Sau từng câu", "Instant")}</button>
              <button type="button" data-fb="end" class="${state.customFb === "end" ? "active" : ""}">${ui("Khi nộp bài", "On Submit")}</button>
            </div>
          </div>

          <button class="btn btn-primary btn-lg" id="btnStartCustom" style="width:100%">${ui("Khởi tạo đề luyện tập", "Launch Custom Session")}</button>
        </div>
      </div>
    `;

    syncSlidingControls(main);

    if ($("#btnResumeExam")) $("#btnResumeExam").onclick = () => nav("examRun");
    if ($("#btnAbortExam")) $("#btnAbortExam").onclick = () => { clearInterval(examTimer); state.quiz = null; state.elimExam = {}; saveActiveQuiz(); renderRail(); render(false); };
    $("#btnStart40").onclick = startMockExam40;
    $("#btnStart35").onclick = startFocus35Quiz;
    $("#btnStartWeak").onclick = startMistakeDrill;

    const cSeg = $("#cfgCountSeg"), fSeg = $("#cfgFbSeg");
    cSeg.querySelectorAll("button").forEach((b) => (b.onclick = () => {
      SFX.tap();
      state.customCount = +b.dataset.cnt;
      cSeg.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
      updateSegThumb(cSeg);
    }));
    fSeg.querySelectorAll("button").forEach((b) => (b.onclick = () => {
      SFX.tap();
      state.customFb = b.dataset.fb;
      fSeg.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
      updateSegThumb(fSeg);
    }));
    $("#cfgCh").onchange = (e) => { state.customCh = +e.target.value; };
    $("#cfgLv").onchange = (e) => { state.customLv = +e.target.value; };

    $("#btnStartCustom").onclick = () => {
      const ch = +$("#cfgCh").value;
      const lv = +$("#cfgLv").value;
      const pool = MCQS.filter((q) => (!ch || q.ch === ch) && (!lv || q.level === lv));
      const picked = shuffle(pool).slice(0, Math.min(state.customCount, pool.length));
      launchQuiz(picked, {
        mode: "practice",
        feedback: state.customFb,
        scope: ch ? `${ui("Chương", "Chapter")} 0${ch}` : ui("Đề tổng hợp 6 chương", "All Chapters"),
        scopeCh: ch || 0,
        timeLimit: 0,
        singleMode: true
      });
    };
  }

  function finalizeQuiz() {
    const qz = state.quiz;
    if (!qz || qz.done) return;
    clearInterval(examTimer);
    qz.done = true;
    qz.justFinished = true;
    SFX.complete();

    let score = 0;
    const byCh = {};
    qz.qs.forEach((q, i) => {
      byCh[q.ch] = byCh[q.ch] || [0, 0];
      byCh[q.ch][1]++;
      if (qz.answers[i] === q.ans) {
        score++;
        byCh[q.ch][0]++;
      } else if (qz.answers[i] !== null) {
        recordWrongMcq(q.id);
      }
    });
    qz.score = score;
    qz.byCh = byCh;

    const attempts = store.get("attempts", []);
    attempts.push({
      date: Date.now(),
      mode: qz.mode,
      scope: qz.scope,
      scopeCh: qz.scopeCh,
      score,
      total: qz.qs.length,
      mins: Math.max(1, Math.round((Date.now() - qz.startTime) / 60000)),
      byCh
    });
    store.set("attempts", attempts);
    saveActiveQuiz();
    renderRail();
    render(true);
    window.scrollTo({ top: 0 });
    if (score / qz.qs.length >= 0.8) playCelebrationParticles();
  }

  function requestSubmitQuiz() {
    SFX.tap();
    const qz = state.quiz;
    if (!qz || qz.done) return;
    const blank = qz.answers.filter((a) => a === null).length;
    const flagged = Object.keys(qz.flagged).length;
    if (blank === 0 && flagged === 0) {
      finalizeQuiz();
      return;
    }
    openConfirmModal({
      title: ui("Xác nhận nộp bài", "Submit Assessment?"),
      desc: ui(
        `Bạn đã trả lời ${qz.qs.length - blank}/${qz.qs.length} câu${blank ? ` (còn ${blank} câu bỏ trống)` : ""}${flagged ? `, đang gắn cờ ${flagged} câu xem lại` : ""}. Chấm điểm ngay bây giờ?`,
        `You answered ${qz.qs.length - blank}/${qz.qs.length} questions (${blank} blank, ${flagged} flagged). Submit now?`
      ),
      okLabel: ui("Nộp bài & Chấm điểm", "Submit & Grade"),
      onConfirm: finalizeQuiz
    });
  }

  function buildExamQCardHTML(qz, i) {
    const LV = { 1: ui("Nhận biết", "Recall"), 2: ui("Thông hiểu", "Understand"), 3: ui("Vận dụng", "Apply"), 4: ui("Phân tích", "Analyse") };
    const q = qz.qs[i];
    const sel = qz.answers[i];
    const rev = qz.done || (qz.feedback === "instant" && sel !== null);
    const isFlag = !!qz.flagged[i];
    const isStar = !!getStarsMcq()[q.id];
    const opts = L(q, "opts") || q.opts;

    return `
      <div class="q-item spot-surface" id="exq-${i}" data-exi="${i}">
        <div class="q-meta">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span class="q-code">${ui("CÂU", "Q")} ${String(i + 1).padStart(2, "0")}/${String(qz.qs.length).padStart(2, "0")}</span>
            <span class="tag">${esc(q.id)}</span>
            <span class="tag">Ch.0${q.ch}</span>
            <span class="tag">${LV[q.level]}</span>
          </div>
          <div style="display:flex;gap:6px">
            <button class="btn btn-sm ${isFlag ? "btn-danger" : "btn-ghost"}" data-flag="${i}" data-tip="${ui("Gắn cờ xem lại (Phím F)", "Flag for review (Key F)")}">${isFlag ? I.flagFill : I.flag} ${ui("Xem lại", "Flag")}</button>
            <button class="btn btn-sm ${isStar ? "btn-primary" : "btn-ghost"}" data-star="${esc(q.id)}" data-tip="${ui("Lưu câu hỏi này (Phím S)", "Bookmark question (Key S)")}">${isStar ? I.bookmarkFill : I.bookmark} ${ui("Lưu", "Save")}</button>
          </div>
        </div>
        <div class="q-prompt">${L(q, "q")}</div>
        <div class="opt-list">
          ${opts.map((o, j) => {
            const elimKey = i + "|" + j;
            let cls = "opt-row";
            let capHtml = "ABCD"[j];
            if (rev) {
              if (j === q.ans) { cls += " correct"; capHtml = I.checkDraw; }
              else if (sel === j && sel !== q.ans) { cls += " wrong"; capHtml = I.xDraw; }
            } else {
              if (sel === j) cls += " selected";
              if (state.elimExam[elimKey]) cls += " is-eliminated";
            }
            return `<div class="${cls}" data-qi="${i}" data-oi="${j}">
              <span class="opt-cap">${capHtml}</span>
              <div class="opt-txt">${o}</div>
              <button type="button" class="opt-elim-btn" data-ex-elim="${i}|${j}" data-tip="${ui("Loại trừ phương án nhiễu (Chuột phải)", "Eliminate distractor (Right-click)")}">${I.xXs}</button>
            </div>`;
          }).join("")}
        </div>
        <div class="acc-grid ${rev ? "is-open" : ""}" data-expl-acc="${i}">
          <div class="acc-inner">
            <div class="expl-panel" data-expl-box="${i}">
              ${rev ? buildExplInnerHTML(q, sel) : ""}
            </div>
          </div>
        </div>
      </div>`;
  }

  function buildExplInnerHTML(q, sel) {
    return `
      <div class="expl-head" style="color:${sel === undefined || sel === q.ans ? "var(--ok)" : "var(--err)"}">
        ${sel === undefined || sel === q.ans ? I.checkDraw : I.xDraw}
        <span>${sel === q.ans ? ui("Trả lời chính xác", "Correct") : (sel === undefined ? `${ui("Đáp án chuẩn:", "Correct option:")} ${"ABCD"[q.ans]}` : `${sel === null ? ui("Bỏ trống", "Unanswered") : ui("Chưa chính xác", "Incorrect")} — ${ui("Đáp án chuẩn:", "Correct option:")} ${"ABCD"[q.ans]}`)}</span>
      </div>
      <div>${L(q, "expl")}</div>
      <span class="expl-src">${ui("Tham chiếu:", "Ref:")} ${L(q, "src")}</span>`;
  }

  function updateExamPaletteDOM(qz, bumpedIdx) {
    const ansCount = qz.answers.filter((a) => a !== null).length;
    const cntEl = $("#examAnsCount");
    if (cntEl) cntEl.textContent = `${ansCount}/${qz.qs.length}`;
    const cntMobEl = $("#examAnsCountMob");
    if (cntMobEl) cntMobEl.textContent = `${ansCount}/${qz.qs.length}`;
    const fillEl = $("#examProgressFill");
    if (fillEl) fillEl.style.width = `${Math.round((ansCount / qz.qs.length) * 100)}%`;
    const grid = $("#examMatrixGrid");
    if (grid) {
      grid.querySelectorAll("[data-jump]").forEach((btn) => {
        const i = +btn.dataset.jump;
        const q = qz.qs[i];
        const a = qz.answers[i];
        const rev = qz.done || (qz.feedback === "instant" && a !== null);
        let c = "m-cell";
        if (!qz.done && qz.singleMode && i === qz.cur) c += " cur";
        if (rev) c += a === qz.qs[i].ans ? " ok" : " bad";
        else if (a !== null) c += " ans";
        if (qz.flagged[i]) c += " flag";
        if (bumpedIdx === i) c += " cell-bump";
        btn.className = c;
        const plainQ = String(Lp(q, "q") || q.q).replace(/<[^>]+>/g, "").slice(0, 68);
        const stTxt = a !== null ? `${ui("Đã chọn", "Picked")} ${"ABCD"[a]}` : ui("Chưa chọn", "Unanswered");
        btn.setAttribute("data-tip", `${ui("Câu", "Q")} ${String(i + 1).padStart(2, "0")} · Ch.0${q.ch} — ${plainQ}…`);
        btn.setAttribute("data-tip-sub", `${stTxt}${qz.flagged[i] ? " · " + ui("Đang gắn cờ xem lại", "Flagged") : ""}`);
      });
    }
  }

  /* TRUE IN-PLACE MUTATION WITHOUT DESTROYING .q-item DOM NODE! */
  function wireExamCard(cardEl, qz) {
    cardEl.querySelectorAll("[data-ex-elim]").forEach((eb) => {
      eb.onclick = (ev) => {
        ev.stopPropagation();
        if (qz.done) return;
        const [qiStr] = eb.dataset.exElim.split("|");
        if (qz.feedback === "instant" && qz.answers[+qiStr] !== null) return;
        SFX.tap();
        const k = eb.dataset.exElim;
        state.elimExam[k] = !state.elimExam[k];
        eb.closest(".opt-row").classList.toggle("is-eliminated", !!state.elimExam[k]);
        saveActiveQuiz();
      };
    });

    cardEl.querySelectorAll(".opt-row").forEach((el) => {
      el.oncontextmenu = (ev) => {
        if (qz.done) return;
        const qi = +el.dataset.qi, oi = +el.dataset.oi;
        if (qz.feedback === "instant" && qz.answers[qi] !== null) return;
        ev.preventDefault();
        SFX.tap();
        const k = qi + "|" + oi;
        state.elimExam[k] = !state.elimExam[k];
        el.classList.toggle("is-eliminated", !!state.elimExam[k]);
        saveActiveQuiz();
      };
      el.onclick = () => {
        if (qz.done) return;
        const qi = +el.dataset.qi, oi = +el.dataset.oi;
        const q = qz.qs[qi];
        if (qz.feedback === "instant" && qz.answers[qi] !== null) return;
        qz.answers[qi] = oi;

        if (qz.feedback === "instant") {
          const ok = oi === q.ans;
          updateStreak(ok);
          if (ok) spawnMicroBurst(el.querySelector(".opt-cap"), "var(--ok)");
          else recordWrongMcq(q.id);
          cardEl.querySelectorAll(".opt-row").forEach((row, j) => {
            row.classList.remove("is-eliminated", "selected", "correct", "wrong", "anim-ok", "anim-bad");
            const cap = row.querySelector(".opt-cap");
            if (j === q.ans) {
              row.classList.add("correct", "anim-ok");
              if (cap) cap.innerHTML = I.checkDraw;
            } else if (j === oi && oi !== q.ans) {
              row.classList.add("wrong", "anim-bad");
              if (cap) cap.innerHTML = I.xDraw;
            }
          });
          const box = cardEl.querySelector(`[data-expl-box="${qi}"]`);
          const acc = cardEl.querySelector(`[data-expl-acc="${qi}"]`);
          if (box) box.innerHTML = buildExplInnerHTML(q, oi);
          if (acc) requestAnimationFrame(() => acc.classList.add("is-open"));
        } else {
          SFX.tap();
          cardEl.querySelectorAll(".opt-row").forEach((row, j) => {
            if (j === oi) row.classList.remove("is-eliminated");
            row.classList.toggle("selected", j === oi);
          });
        }
        updateExamPaletteDOM(qz, qi);
        saveActiveQuiz();
        renderRail();
        if (onScrollSettledHook) onScrollSettledHook();
      };
    });
    cardEl.querySelectorAll("[data-flag]").forEach((b) => (b.onclick = () => {
      SFX.tap();
      const idx = +b.dataset.flag;
      if (qz.flagged[idx]) delete qz.flagged[idx]; else { qz.flagged[idx] = true; spawnMicroBurst(b, "var(--warn)"); }
      mutateBtn(b, (el) => {
        el.className = "btn btn-sm " + (qz.flagged[idx] ? "btn-danger" : "btn-ghost");
        el.innerHTML = `${qz.flagged[idx] ? I.flagFill : I.flag} ${ui("Xem lại", "Flag")}`;
      });
      updateExamPaletteDOM(qz, idx);
      saveActiveQuiz();
    }));
    cardEl.querySelectorAll("[data-star]").forEach((b) => (b.onclick = () => {
      const on = toggleStarMcq(b.dataset.star);
      if (on) spawnMicroBurst(b, "var(--accent)");
      mutateBtn(b, (el) => {
        el.className = "btn btn-sm " + (on ? "btn-primary" : "btn-ghost");
        el.innerHTML = `${on ? I.bookmarkFill : I.bookmark} ${ui("Lưu", "Save")}`;
      });
    }));
  }

  function renderExamRun(main) {
    const qz = state.quiz;
    if (!qz) { nav("exam"); return; }
    $("#pageWrap").classList.add("page-wide");
    const answeredCount = qz.answers.filter((a) => a !== null).length;

    let summaryHtml = "";
    if (qz.done) {
      const pct = Math.round((qz.score / qz.qs.length) * 100);
      const ptsNum = (qz.score / qz.qs.length) * 10;
      const pts = ptsNum.toFixed(2).replace(".", ",");
      const r = 35, circ = 2 * Math.PI * r;
      const offset = circ * (1 - pct / 100);

      const chBreakdown = Object.entries(qz.byCh || {}).sort((a, b) => +a[0] - +b[0]).map(([chId, [ok, tot]]) => {
        const cp = Math.round((ok / Math.max(1, tot)) * 100);
        return `<div style="display:flex;align-items:center;gap:8px;font-size:0.78rem">
          <span class="mono muted" style="width:42px">Ch.0${chId}</span>
          <div class="meter-track" style="flex:1;margin:0"><div class="meter-fill ${cp >= 70 ? "ok" : ""}" style="width:${cp}%"></div></div>
          <span class="mono" style="width:68px;text-align:right">${ok}/${tot} (${cp}%)</span>
        </div>`;
      }).join("");

      summaryHtml = `
        <div class="panel panel-pad stagger" style="--i:0;margin-bottom:20px">
          <div class="exam-sum-grid">
            <div style="display:flex;flex-direction:column;gap:12px;min-width:0">
              <div class="exam-sum-hero">
                <div class="score-gauge-wrap">
                  <svg viewBox="0 0 84 84">
                    <circle cx="42" cy="42" r="${r}" fill="none" stroke="var(--bg-muted)" stroke-width="6.5"/>
                    <circle id="scoreGaugeArc" cx="42" cy="42" r="${r}" fill="none" stroke="${pct >= 50 ? "var(--ok)" : "var(--err)"}" stroke-width="6.5" stroke-linecap="round" stroke-dasharray="${circ.toFixed(1)}" stroke-dashoffset="${qz.justFinished ? circ.toFixed(1) : offset.toFixed(1)}" style="transition:stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1)"/>
                  </svg>
                  <div class="score-gauge-center">${pct}%</div>
                </div>
                <div style="min-width:0">
                  <div class="kicker" style="color:${pct >= 50 ? "var(--ok)" : "var(--err)"}">${pct >= 50 ? ui("Kết quả hoàn thành", "Assessment Complete") : ui("Cần củng cố thêm", "Review Recommended")}</div>
                  <div style="font-size:1.45rem;font-weight:700;letter-spacing:-0.03em;line-height:1.2" class="num">
                    <span id="scoreCountUp">${pts}</span><span style="font-size:0.9rem;color:var(--ink-3);font-weight:500"> / 10 điểm</span>
                  </div>
                  <div class="small muted" style="margin-top:3px">${qz.score}/${qz.qs.length} ${ui("câu trả lời đúng", "correct answers")}</div>
                </div>
              </div>
              <div class="seg exam-rev-seg" id="examRevSeg">
                <button type="button" class="${qz.reviewFilter === "all" ? "active" : ""}" data-rvf="all">${ui("Tất cả", "All")} (${qz.qs.length})</button>
                <button type="button" class="${qz.reviewFilter === "wrong" ? "active" : ""}" data-rvf="wrong">${ui("Sai / Trống", "Missed")} (${qz.qs.filter((q, i) => qz.answers[i] !== q.ans).length})</button>
                <button type="button" class="${qz.reviewFilter === "flagged" ? "active" : ""}" data-rvf="flagged">${ui("Gắn cờ", "Flagged")} (${Object.keys(qz.flagged).length})</button>
              </div>
            </div>
            <div style="min-width:220px;flex:1;max-width:360px;display:flex;flex-direction:column;gap:5px">
              ${chBreakdown}
            </div>
            <div class="exam-sum-actions">
              <button class="btn btn-primary" id="btnExamAgain">${I.rotate} ${ui("Tạo đề khác", "New Session")}</button>
              <button class="btn" id="btnExamStats">${I.chart} ${ui("Phân tích", "Analytics")}</button>
            </div>
          </div>
        </div>`;
    }

    const renderExamLeftHtml = () => {
      if (qz.done) {
        const idxs = qz.qs.map((_, i) => i).filter((i) => {
          if (qz.reviewFilter === "wrong") return qz.answers[i] !== qz.qs[i].ans;
          if (qz.reviewFilter === "flagged") return !!qz.flagged[i];
          return true;
        });
        return idxs.length ? idxs.map((i) => buildExamQCardHTML(qz, i)).join("") : `<div class="panel panel-pad muted">${ui("Không có câu hỏi nào trong bộ lọc này.", "No items match this filter.")}</div>`;
      }
      if (qz.singleMode) {
        return `<div class="stagger" style="--i:0">${buildExamQCardHTML(qz, qz.cur)}</div>
          <div class="exam-nav-row" style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;gap:12px;flex-wrap:wrap">
            <button class="btn" id="btnPrevQ" ${qz.cur === 0 ? "disabled" : ""}>${I.arrowL} ${ui("Câu trước", "Previous")}</button>
            <div class="small muted desk-kbd-hint" style="display:flex;gap:5px;align-items:center;flex-wrap:wrap">
              <span class="kbd" data-kbd="a">A</span><span class="kbd" data-kbd="b">B</span><span class="kbd" data-kbd="c">C</span><span class="kbd" data-kbd="d">D</span> ${ui("Chọn", "Pick")} ·
              <span class="kbd" data-kbd="left">←</span><span class="kbd" data-kbd="right">→</span> ${ui("Chuyển", "Move")} ·
              <span class="kbd" data-kbd="f">F</span> ${ui("Cờ", "Flag")} · <span class="kbd" data-kbd="s">S</span> ${ui("Lưu", "Save")}
            </div>
            ${qz.cur < qz.qs.length - 1
              ? `<button class="btn btn-primary" id="btnNextQ">${ui("Câu tiếp theo", "Next")} ${I.arrowR}</button>`
              : `<button class="btn btn-ok" id="btnInlineSubmit">${I.check} ${ui("Nộp bài", "Submit")}</button>`}
          </div>`;
      }
      return qz.qs.map((_, i) => buildExamQCardHTML(qz, i)).join("");
    };

    main.innerHTML = `
      ${summaryHtml}
      <div class="mob-exam-bar">
        <div style="display:flex;align-items:center;gap:7px;flex-shrink:0">
          ${qz.timeLimit && !qz.done ? `<span class="mob-exam-clock" id="examClockMob">--:--</span>` : ""}
          ${qz.done
            ? `<span class="mono small" style="font-weight:650;white-space:nowrap">${ui("Đúng", "Score")} ${qz.score}/${qz.qs.length}</span>`
            : `<span class="mono small" style="font-weight:650;white-space:nowrap" id="examAnsCountMob">${answeredCount}/${qz.qs.length}</span>`}
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <button type="button" class="btn btn-sm" id="btnMobMatrixTog">${I.grid} ${ui("Bảng câu", "Grid")}</button>
          ${!qz.done
            ? `<button type="button" class="btn btn-sm btn-primary" id="btnMobSubmit">${I.check} ${ui("Nộp bài", "Submit")}</button>`
            : `<button type="button" class="btn btn-sm btn-primary" id="btnMobNewExam">${I.rotate} ${ui("Đề mới", "New")}</button>`}
        </div>
      </div>
      <div class="exam-grid">
        <div style="min-width:0" id="examQuestionsCol">${renderExamLeftHtml()}</div>
        <aside class="exam-rail">
          <div class="mob-only-btn" style="width:100%;justify-content:space-between;align-items:center;margin-bottom:10px">
            <b style="font-size:0.9rem">${ui("Bảng điều hướng câu hỏi", "Question Navigator")}</b>
            <button type="button" class="btn btn-ghost btn-sm" id="btnCloseExamSheet">${I.x} ${ui("Đóng", "Close")}</button>
          </div>
          ${qz.timeLimit && !qz.done ? `<div class="clock-display" id="examClock">--:--</div>` : ""}
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.8rem;margin-bottom:6px">
            <b style="color:var(--ink)">${esc(qz.scope)}</b>
            <span class="mono muted" id="examAnsCount">${answeredCount}/${qz.qs.length}</span>
          </div>
          <div class="meter-track" style="margin:0 0 12px"><div class="meter-fill" id="examProgressFill" style="width:${Math.round((answeredCount / qz.qs.length) * 100)}%"></div></div>

          ${!qz.done ? `
            <div class="seg" id="examViewSeg" style="width:100%;display:grid;grid-template-columns:1fr 1fr;margin-bottom:10px">
              <button type="button" data-em="single" class="${qz.singleMode ? "active" : ""}">${ui("Từng câu", "Single")}</button>
              <button type="button" data-em="list" class="${!qz.singleMode ? "active" : ""}">${ui("Toàn bộ", "List")}</button>
            </div>` : ""}

          <div class="matrix-40" id="examMatrixGrid">
            ${qz.qs.map((_, i) => `<button type="button" class="m-cell" data-jump="${i}">${i + 1}</button>`).join("")}
          </div>

          ${!qz.done ? `
            <button class="btn btn-primary" id="btnSubmitQuiz" style="width:100%;margin-top:10px">${I.check} ${ui("Nộp bài & Chấm điểm", "Submit & Grade")}</button>
            <button class="btn btn-ghost btn-sm" id="btnPauseQuiz" style="width:100%;margin-top:6px">${ui("Quay lại thiết lập đề", "Back to Setup")}</button>
          ` : `
            <button class="btn btn-primary" id="btnRailNew" style="width:100%;margin-top:10px">${I.rotate} ${ui("Làm đề mới", "New Session")}</button>
          `}
        </aside>
      </div>
    `;

    const scrollQuestionIntoView = () => {
      if (window.scrollY > 96) smoothScrollToY(0, 340);
    };
    const bindExamLeft = () => {
      const col = $("#examQuestionsCol");
      col.querySelectorAll(".q-item").forEach((c) => wireExamCard(c, qz));
      if ($("#btnPrevQ")) $("#btnPrevQ").onclick = () => {
        if (qz.cur > 0) {
          SFX.tap(); qz.cur--; saveActiveQuiz();
          col.innerHTML = renderExamLeftHtml(); bindExamLeft(); updateExamPaletteDOM(qz);
          scrollQuestionIntoView();
        }
      };
      if ($("#btnNextQ")) $("#btnNextQ").onclick = () => {
        if (qz.cur < qz.qs.length - 1) {
          SFX.tap(); qz.cur++; saveActiveQuiz();
          col.innerHTML = renderExamLeftHtml(); bindExamLeft(); updateExamPaletteDOM(qz);
          scrollQuestionIntoView();
        }
      };
      if ($("#btnInlineSubmit")) $("#btnInlineSubmit").onclick = requestSubmitQuiz;
    };

    bindExamLeft();
    updateExamPaletteDOM(qz);
    syncSlidingControls(main);

    if (qz.done && qz.justFinished) {
      qz.justFinished = false;
      const pct = Math.round((qz.score / qz.qs.length) * 100);
      const targetPts = (qz.score / qz.qs.length) * 10;
      const arc = $("#scoreGaugeArc");
      if (arc) {
        const circ = 2 * Math.PI * 35;
        requestAnimationFrame(() => { arc.style.strokeDashoffset = (circ * (1 - pct / 100)).toFixed(1); });
      }
      const numEl = $("#scoreCountUp");
      if (numEl) {
        const t0 = performance.now();
        const dur = 580;
        const stepNum = (now) => {
          const p = Math.min(1, (now - t0) / dur);
          const ease = 1 - Math.pow(1 - p, 3);
          numEl.textContent = (targetPts * ease).toFixed(2).replace(".", ",");
          if (p < 1) requestAnimationFrame(stepNum);
        };
        requestAnimationFrame(stepNum);
      }
    }

    if (qz.timeLimit && !qz.done) {
      const tick = () => {
        const el = $("#examClock");
        const elMob = $("#examClockMob");
        if (!el && !elMob) { clearInterval(examTimer); return; }
        const rem = Math.max(0, Math.round((qz.startTime + qz.timeLimit * 1000 - Date.now()) / 1000));
        const str = String(Math.floor(rem / 60)).padStart(2, "0") + ":" + String(rem % 60).padStart(2, "0");
        if (el) { el.textContent = str; el.classList.toggle("urgent", rem < 300); }
        if (elMob) { elMob.textContent = str; elMob.classList.toggle("urgent", rem < 300); }
        if (rem <= 0) finalizeQuiz();
      };
      clearInterval(examTimer);
      tick();
      examTimer = setInterval(tick, 500);
    }

    main.querySelectorAll("[data-jump]").forEach((b) => (b.onclick = () => {
      SFX.tap();
      document.body.classList.remove("mob-exam-sheet-open");
      scheduleOverlayHistoryRelease();
      const idx = +b.dataset.jump;
      qz.cur = idx;
      saveActiveQuiz();
      if (!qz.done && qz.singleMode) {
        $("#examQuestionsCol").innerHTML = renderExamLeftHtml();
        bindExamLeft();
        updateExamPaletteDOM(qz);
        smoothScrollToY(0, 380);
      } else {
        const t = document.getElementById("exq-" + idx);
        if (t) {
          const targetY = t.getBoundingClientRect().top + window.scrollY - Math.max(82, (window.innerHeight - t.offsetHeight) * 0.25);
          smoothScrollToY(targetY, 460);
          t.classList.remove("heading-flash");
          void t.offsetWidth;
          t.classList.add("heading-flash");
        }
      }
    }));

    if ($("#btnMobMatrixTog")) $("#btnMobMatrixTog").onclick = () => {
      SFX.tap();
      const nextOpen = !document.body.classList.contains("mob-exam-sheet-open");
      document.body.classList.toggle("mob-exam-sheet-open", nextOpen);
      if (nextOpen) pushOverlayHistory();
      else scheduleOverlayHistoryRelease();
      setTimeout(() => updateSegThumb($("#examViewSeg")), 30);
    };
    if ($("#btnCloseExamSheet")) $("#btnCloseExamSheet").onclick = () => {
      SFX.tap();
      document.body.classList.remove("mob-exam-sheet-open");
      scheduleOverlayHistoryRelease();
    };
    if ($("#btnMobSubmit")) $("#btnMobSubmit").onclick = requestSubmitQuiz;

    const vSeg = $("#examViewSeg");
    if (vSeg) {
      vSeg.querySelectorAll("[data-em]").forEach((b) => (b.onclick = () => {
        SFX.tap();
        qz.singleMode = b.dataset.em === "single";
        saveActiveQuiz();
        vSeg.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
        updateSegThumb(vSeg);
        $("#examQuestionsCol").innerHTML = renderExamLeftHtml();
        bindExamLeft();
        updateExamPaletteDOM(qz);
      }));
    }

    main.querySelectorAll("[data-rvf]").forEach((b) => (b.onclick = () => {
      SFX.tap();
      qz.reviewFilter = b.dataset.rvf;
      saveActiveQuiz();
      const revSeg = $("#examRevSeg");
      if (revSeg) {
        revSeg.querySelectorAll("[data-rvf]").forEach((x) => x.classList.toggle("active", x === b));
        updateSegThumb(revSeg);
      }
      $("#examQuestionsCol").innerHTML = renderExamLeftHtml();
      bindExamLeft();
    }));

    if ($("#btnSubmitQuiz")) $("#btnSubmitQuiz").onclick = requestSubmitQuiz;
    if ($("#btnPauseQuiz")) $("#btnPauseQuiz").onclick = () => nav("exam");
    const resetToNewExam = () => { clearInterval(examTimer); state.quiz = null; state.elimExam = {}; saveActiveQuiz(); nav("exam"); };
    if ($("#btnExamAgain")) $("#btnExamAgain").onclick = resetToNewExam;
    if ($("#btnMobNewExam")) $("#btnMobNewExam").onclick = resetToNewExam;
    if ($("#btnRailNew")) $("#btnRailNew").onclick = resetToNewExam;
    if ($("#btnExamStats")) $("#btnExamStats").onclick = () => nav("stats");
  }

  /* ======================================================================
     5. PRECISION QUESTION BANK (IN-PLACE SMOOTH ACCORDION + SLIDING SEG)
     ====================================================================== */
  function buildPageNumbers(cur, total) {
    if (total <= 1) return "";
    const nums = new Set([0, total - 1, cur, cur - 1, cur + 1]);
    const valid = [...nums].filter((n) => n >= 0 && n < total).sort((a, b) => a - b);
    let html = `<div class="pager-nums"><button class="pg-btn" data-pg="${cur - 1}" ${cur === 0 ? "disabled" : ""}>${I.arrowL}</button>`;
    let prev = -1;
    for (const p of valid) {
      if (prev !== -1 && p - prev > 1) html += `<span class="muted small" style="padding:0 4px">…</span>`;
      html += `<button class="pg-btn ${p === cur ? "active" : ""}" data-pg="${p}">${p + 1}</button>`;
      prev = p;
    }
    html += `<button class="pg-btn" data-pg="${cur + 1}" ${cur >= total - 1 ? "disabled" : ""}>${I.arrowR}</button></div>`;
    return html;
  }

  function buildBankCardHTML(q, idx) {
    const LV = { 1: ui("Nhận biết", "Recall"), 2: ui("Thông hiểu", "Understand"), 3: ui("Vận dụng", "Apply"), 4: ui("Phân tích", "Analyse") };
    const stars = getStarsMcq();
    const wrongs = getWrongMcq();
    const pick = state.bankPicked[q.id];
    const rev = state.bankStudyMode === "read" || pick !== undefined;
    const isStar = !!stars[q.id];
    const wCnt = wrongs[q.id] || 0;
    const opts = L(q, "opts") || q.opts;

    return `
      <div class="q-item spot-surface stagger" style="--i:${Math.min(idx || 0, 10)}" data-bank-qid="${esc(q.id)}">
        <div class="q-meta">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span class="q-code">${esc(q.id)}</span>
            <span class="tag">Ch.0${q.ch}</span>
            <span class="tag">${LV[q.level]}</span>
            <span data-wbadge="${esc(q.id)}">${wCnt ? `<span class="tag tag-err">${ui(`Sai ${wCnt} lần`, `Missed ×${wCnt}`)}</span>` : ""}</span>
          </div>
          <div style="display:flex;gap:6px">
            ${wCnt ? `<button class="btn btn-ghost btn-sm" data-rm-wrong="${esc(q.id)}">${I.check} ${ui("Đã thuộc", "Mastered")}</button>` : ""}
            <button class="btn btn-sm ${isStar ? "btn-primary" : "btn-ghost"}" data-star="${esc(q.id)}">${isStar ? I.bookmarkFill : I.bookmark}</button>
          </div>
        </div>
        <div class="q-prompt">${L(q, "q")}</div>
        <div class="opt-list">
          ${opts.map((o, j) => {
            const ek = q.id + "|" + j;
            let cls = "opt-row";
            let capHtml = "ABCD"[j];
            if (rev) {
              if (j === q.ans) { cls += " correct"; capHtml = I.checkDraw; }
              else if (pick === j && pick !== q.ans) { cls += " wrong"; capHtml = I.xDraw; }
            } else if (state.elimBank[ek]) {
              cls += " is-eliminated";
            }
            return `<div class="${cls}" data-pq="${esc(q.id)}" data-po="${j}">
              <span class="opt-cap">${capHtml}</span>
              <div class="opt-txt">${o}</div>
              <button type="button" class="opt-elim-btn" data-bk-elim="${esc(q.id)}|${j}" data-tip="${ui("Loại trừ phương án nhiễu (Chuột phải)", "Eliminate distractor (Right-click)")}">${I.xXs}</button>
            </div>`;
          }).join("")}
        </div>
        <div class="acc-grid ${rev ? "is-open" : ""}" data-bk-acc="${esc(q.id)}">
          <div class="acc-inner">
            <div class="expl-panel" data-bk-expl="${esc(q.id)}">
              ${rev ? buildExplInnerHTML(q, pick) : ""}
            </div>
          </div>
        </div>
      </div>`;
  }

  function updateBankLiveStats() {
    const entries = Object.entries(state.bankPicked);
    const pill = $("#bkScorePill");
    if (!pill) return;
    if (!entries.length) {
      pill.classList.add("hidden");
      return;
    }
    let ok = 0;
    entries.forEach(([qid, oi]) => {
      const q = MCQ_MAP.get(qid);
      if (q && q.ans === oi) ok++;
    });
    const pct = Math.round((ok / entries.length) * 100);
    pill.classList.remove("hidden", "bump");
    pill.innerHTML = `${I.checkXs} <span>${ui("Đúng", "Correct")} ${ok}/${entries.length} (${pct}%)</span>`;
    void pill.offsetWidth;
    pill.classList.add("bump");
  }

  function updateBankFilterCounts() {
    const sc = $("#bkStarCnt"), wc = $("#bkWrongCnt");
    if (sc) sc.textContent = Object.keys(getStarsMcq()).length;
    if (wc) wc.textContent = Object.keys(getWrongMcq()).length;
    updateSegThumb($("#bkFilterSeg"));
    updateBankLiveStats();
  }

  function wireBankCard(cardEl) {
    cardEl.querySelectorAll("[data-bk-elim]").forEach((eb) => {
      eb.onclick = (ev) => {
        ev.stopPropagation();
        if (state.bankStudyMode === "read") return;
        const [qid] = eb.dataset.bkElim.split("|");
        if (state.bankPicked[qid] !== undefined) return;
        SFX.tap();
        const k = eb.dataset.bkElim;
        state.elimBank[k] = !state.elimBank[k];
        eb.closest(".opt-row").classList.toggle("is-eliminated", !!state.elimBank[k]);
      };
    });

    cardEl.querySelectorAll("[data-pq]").forEach((el) => {
      el.oncontextmenu = (ev) => {
        if (state.bankStudyMode === "read") return;
        const qid = el.dataset.pq, oi = +el.dataset.po;
        if (state.bankPicked[qid] !== undefined) return;
        ev.preventDefault();
        SFX.tap();
        const k = qid + "|" + oi;
        state.elimBank[k] = !state.elimBank[k];
        el.classList.toggle("is-eliminated", !!state.elimBank[k]);
      };
      el.onclick = () => {
        if (state.bankStudyMode === "read") return;
        const qid = el.dataset.pq, oi = +el.dataset.po;
        state.bankPicked[qid] = oi;
        const q = MCQ_MAP.get(qid);
        if (!q) return;
        const ok = oi === q.ans;
        updateStreak(ok);
        if (ok) spawnMicroBurst(el.querySelector(".opt-cap"), "var(--ok)");
        else {
          recordWrongMcq(qid);
          const wCnt = getWrongMcq()[qid];
          const wb = cardEl.querySelector(`[data-wbadge="${qid}"]`);
          if (wb) wb.innerHTML = `<span class="tag tag-err">${ui(`Sai ${wCnt} lần`, `Missed ×${wCnt}`)}</span>`;
        }

        // Smooth in-place class & SVG morph + 0fr->1fr accordion reveal!
        cardEl.querySelectorAll(".opt-row").forEach((row, j) => {
          row.classList.remove("is-eliminated", "correct", "wrong", "anim-ok", "anim-bad");
          const cap = row.querySelector(".opt-cap");
          if (j === q.ans) {
            row.classList.add("correct", "anim-ok");
            if (cap) cap.innerHTML = I.checkDraw;
          } else if (j === oi && oi !== q.ans) {
            row.classList.add("wrong", "anim-bad");
            if (cap) cap.innerHTML = I.xDraw;
          } else if (cap) {
            cap.textContent = "ABCD"[j];
          }
        });

        const explBox = cardEl.querySelector(`[data-bk-expl="${qid}"]`);
        const acc = cardEl.querySelector(`[data-bk-acc="${qid}"]`);
        if (explBox) explBox.innerHTML = buildExplInnerHTML(q, oi);
        if (acc) requestAnimationFrame(() => acc.classList.add("is-open"));

        updateBankFilterCounts();
        renderRail();
        const resetBtn = $("#bkResetWrap");
        if (resetBtn) resetBtn.classList.remove("hidden");
        if (onScrollSettledHook) onScrollSettledHook();
      };
    });

    cardEl.querySelectorAll("[data-star]").forEach((b) => (b.onclick = () => {
      const on = toggleStarMcq(b.dataset.star);
      if (on) spawnMicroBurst(b, "var(--accent)");
      mutateBtn(b, (el) => {
        el.className = "btn btn-sm " + (on ? "btn-primary" : "btn-ghost");
        el.innerHTML = on ? I.bookmarkFill : I.bookmark;
      });
      updateBankFilterCounts();
      if (state.bankFilter === "star" && !on) renderBankListOnly();
    }));

    cardEl.querySelectorAll("[data-rm-wrong]").forEach((b) => (b.onclick = () => {
      const qid = b.dataset.rmWrong;
      removeWrongMcq(qid);
      updateBankFilterCounts();
      renderRail();
      if (state.bankFilter === "wrong") renderBankListOnly();
      else {
        const wb = cardEl.querySelector(`[data-wbadge="${qid}"]`);
        if (wb) wb.innerHTML = "";
        b.remove();
      }
    }));
  }

  function renderBankListOnly() {
    const zone = $("#bankListZone");
    if (!zone) return;
    const stars = getStarsMcq();
    const wrongs = getWrongMcq();
    const kw = state.bankSearch.trim().toLowerCase();

    const filtered = MCQS.filter((q) => {
      if (state.bankCh && q.ch !== state.bankCh) return false;
      if (state.bankLv && q.level !== state.bankLv) return false;
      if (state.bankFilter === "star" && !stars[q.id]) return false;
      if (state.bankFilter === "wrong" && !wrongs[q.id]) return false;
      if (kw) {
        const hay = [q.id, q.q, q.qVi, ...(q.opts || []), ...(q.optsVi || []), q.expl, q.explVi].filter(Boolean).join(" ").toLowerCase();
        if (!hay.includes(kw)) return false;
      }
      return true;
    });

    const PAGE = 25;
    const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
    state.bankPage = Math.min(state.bankPage, pages - 1);
    const slice = filtered.slice(state.bankPage * PAGE, (state.bankPage + 1) * PAGE);

    const metaEl = $("#bankMetaText");
    if (metaEl) metaEl.textContent = ui(`Kết quả: ${filtered.length} câu · Trang ${state.bankPage + 1}/${pages}`, `${filtered.length} results · Page ${state.bankPage + 1}/${pages}`);
    const resetWrap = $("#bkResetWrap");
    if (resetWrap) resetWrap.classList.toggle("hidden", Object.keys(state.bankPicked).length === 0);

    zone.innerHTML = (slice.length
      ? slice.map((q, i) => buildBankCardHTML(q, i)).join("")
      : `<div class="panel panel-pad muted" style="text-align:center;padding:40px">${ui("Không có câu hỏi nào khớp điều kiện lọc.", "No matching questions.")}</div>`)
      + buildPageNumbers(state.bankPage, pages);

    zone.querySelectorAll(".q-item").forEach(wireBankCard);
    zone.querySelectorAll("[data-pg]").forEach((b) => (b.onclick = () => {
      SFX.tap();
      state.bankPage = +b.dataset.pg;
      renderBankListOnly();
      smoothScrollToY(0, 420);
    }));
  }

  function renderBank(main) {
    const LV = { 1: ui("Nhận biết", "Recall"), 2: ui("Thông hiểu", "Understand"), 3: ui("Vận dụng", "Apply"), 4: ui("Phân tích", "Analyse") };
    const stars = getStarsMcq();
    const wrongs = getWrongMcq();

    main.innerHTML = `
      <div class="page-header stagger" style="--i:0;margin-bottom:12px">
        <div>
          <div class="kicker">QUESTION REPOSITORY · ${MCQS.length.toLocaleString("vi-VN")} ITEMS</div>
          <h1 class="h1">${ui("Ngân hàng câu hỏi trắc nghiệm", "Multiple-Choice Question Bank")}</h1>
        </div>
        <div class="seg" id="bkModeSeg">
          <button type="button" data-bmode="practice" class="${state.bankStudyMode === "practice" ? "active" : ""}">${ui("Tự kiểm tra (Ẩn đáp án)", "Self-Test")}</button>
          <button type="button" data-bmode="read" class="${state.bankStudyMode === "read" ? "active" : ""}">${ui("Đọc đáp án", "Show Answers")}</button>
        </div>
      </div>

      <div class="toolbar-sticky">
        <div class="toolbar-mob-row">
          <div class="search-field">
            ${I.search}
            <input class="inp" id="bkSearch" type="search" placeholder="${ui("Tìm theo mã câu, nội dung, khái niệm...", "Filter by keyword or ID...")}" value="${esc(state.bankSearch)}">
          </div>
          <button type="button" class="btn btn-sm mob-only-btn" id="bkMobFilterBtn">${I.filter} <span>${ui("Bộ lọc", "Filters")}</span></button>
        </div>
        <div class="toolbar-filters" id="bkFilterDrawer">
          <select class="sel" id="bkCh">
            <option value="0">${ui("Mọi chương", "All Chapters")} (${MCQS.length})</option>
            ${CHAPTERS.map((c) => `<option value="${c.id}" ${state.bankCh === c.id ? "selected" : ""}>Ch.0${c.id} · ${esc(Lp(c, "title"))} (${MCQS.filter((q) => q.ch === c.id).length})</option>`).join("")}
          </select>
          <select class="sel" id="bkLv">
            <option value="0">${ui("Mọi cấp độ", "All Levels")}</option>
            ${[1, 2, 3, 4].map((l) => `<option value="${l}" ${state.bankLv === l ? "selected" : ""}>${LV[l]} (${MCQS.filter((q) => q.level === l).length})</option>`).join("")}
          </select>
          <div class="seg" id="bkFilterSeg">
            <button type="button" data-bkf="all" class="${state.bankFilter === "all" ? "active" : ""}">${ui("Tất cả", "All")}</button>
            <button type="button" data-bkf="star" class="${state.bankFilter === "star" ? "active" : ""}">${ui("Đã lưu", "Saved")} (<span id="bkStarCnt">${Object.keys(stars).length}</span>)</button>
            <button type="button" data-bkf="wrong" class="${state.bankFilter === "wrong" ? "active" : ""}">${ui("Cần ôn", "Missed")} (<span id="bkWrongCnt">${Object.keys(wrongs).length}</span>)</button>
          </div>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:12px;font-size:0.8rem;color:var(--ink-3)">
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
          <span class="num" id="bankMetaText"></span>
          <span class="streak-pill hidden" id="bkScorePill"></span>
        </div>
        <span id="bkResetWrap" class="hidden"><button class="btn btn-ghost btn-sm" id="bkReset">${I.rotate} ${ui("Xoá lựa chọn nháp", "Clear selections")}</button></span>
      </div>

      <div id="bankListZone"></div>
    `;

    renderBankListOnly();
    updateBankLiveStats();
    syncSlidingControls(main);

    const syncBkFilterBadge = () => {
      const fb = $("#bkMobFilterBtn");
      if (!fb) return;
      const n = (state.bankCh ? 1 : 0) + (state.bankLv ? 1 : 0) + (state.bankFilter !== "all" ? 1 : 0);
      mutateBtn(fb, (el) => {
        el.classList.toggle("btn-primary", n > 0);
        el.innerHTML = `${I.filter} <span>${ui("Lọc", "Filters")}${n ? ` (${n})` : ""}</span>`;
      });
    };
    syncBkFilterBadge();
    if ($("#bkMobFilterBtn")) $("#bkMobFilterBtn").onclick = () => {
      SFX.tap();
      const drw = $("#bkFilterDrawer");
      if (drw) {
        drw.classList.toggle("is-open");
        requestAnimationFrame(() => updateSegThumb($("#bkFilterSeg")));
      }
    };

    const mSeg = $("#bkModeSeg"), fSeg = $("#bkFilterSeg");
    mSeg.querySelectorAll("button").forEach((b) => (b.onclick = () => {
      SFX.tap();
      state.bankStudyMode = b.dataset.bmode;
      mSeg.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
      updateSegThumb(mSeg);
      renderBankListOnly();
    }));
    $("#bkCh").onchange = (e) => { SFX.tap(); state.bankCh = +e.target.value; state.bankPage = 0; syncBkFilterBadge(); renderBankListOnly(); };
    $("#bkLv").onchange = (e) => { SFX.tap(); state.bankLv = +e.target.value; state.bankPage = 0; syncBkFilterBadge(); renderBankListOnly(); };
    fSeg.querySelectorAll("button").forEach((b) => (b.onclick = () => {
      SFX.tap();
      state.bankFilter = b.dataset.bkf;
      state.bankPage = 0;
      fSeg.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
      updateSegThumb(fSeg);
      syncBkFilterBadge();
      renderBankListOnly();
    }));

    let bkComposing = false;
    const bkInp = $("#bkSearch");
    bkInp.addEventListener("compositionstart", () => { bkComposing = true; });
    bkInp.addEventListener("compositionend", (e) => { bkComposing = false; state.bankSearch = e.target.value; state.bankPage = 0; renderBankListOnly(); });
    bkInp.addEventListener("input", (e) => { if (!bkComposing) { state.bankSearch = e.target.value; state.bankPage = 0; renderBankListOnly(); } });
    enhanceSearchField(bkInp, () => { state.bankSearch = ""; state.bankPage = 0; renderBankListOnly(); });

    $("#bkReset").onclick = () => { SFX.tap(); state.bankPicked = {}; state.elimBank = {}; updateBankLiveStats(); renderBankListOnly(); };
  }

  /* ======================================================================
     6. ESSAY STUDIO (SMOOTH 0fr->1fr OPEN & CLOSE ACCORDIONS!)
     ====================================================================== */
  function buildEssayCardHTML(e, idx) {
    const T_LBL = { essay: ui("Tự luận", "Conceptual"), "calc-essay": ui("Tính toán", "Quantitative"), case: ui("Tình huống", "Case Problem") };
    const T_TAG = { essay: "tag-brand", "calc-essay": "tag-violet", case: "tag-teal" };
    const open = state.essayRevealAll || !!state.essayOpen[e.id];
    const isStar = !!getStarsEssay()[e.id];

    return `
      <div class="q-item spot-surface stagger" style="--i:${Math.min(idx || 0, 8)}" data-esid="${esc(e.id)}">
        <div class="q-meta">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span class="q-code">${esc(e.id)}</span>
            <span class="tag ${T_TAG[e.type] || ""}">${T_LBL[e.type] || e.type}</span>
            <span class="tag">Ch.0${e.ch}</span>
            <span class="tag">${esc(e.clo)}</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <span class="mono small" style="font-weight:650">${e.marks} ${ui("điểm", "pts")}</span>
            <button class="btn btn-sm ${isStar ? "btn-primary" : "btn-ghost"}" data-estar="${esc(e.id)}">${isStar ? I.bookmarkFill : I.bookmark}</button>
          </div>
        </div>
        <div class="prose" style="font-size:0.95rem;margin-bottom:14px">${L(e, "q")}</div>
        <button class="btn btn-sm ${open ? "" : "btn-primary"}" data-etog="${esc(e.id)}">${open ? ui("Ẩn lời giải mẫu", "Hide Solution") : ui("Xem lời giải & Biểu điểm", "View Model Solution")}</button>
        <div class="acc-grid ${open ? "is-open" : ""}" data-es-acc="${esc(e.id)}">
          <div class="acc-inner">
            <div class="expl-panel prose" data-es-body="${esc(e.id)}" style="font-size:0.91rem">
              ${open ? `${L(e, "guide")}<div style="margin-top:12px;padding-top:10px;border-top:1px dashed var(--border-strong);font-size:0.83rem;color:var(--ink-3)"><b style="color:var(--ink)">${ui("Biểu điểm chấm (Rubric):", "Marking Rubric:")}</b> ${L(e, "rubric")}</div>` : ""}
            </div>
          </div>
        </div>
      </div>`;
  }

  function wireEssayCard(cardEl) {
    cardEl.querySelectorAll("[data-etog]").forEach((b) => (b.onclick = () => {
      SFX.tap();
      const id = b.dataset.etog;
      const item = ESSAY_MAP.get(id);
      if (!item) return;
      const acc = cardEl.querySelector(`[data-es-acc="${id}"]`);
      const body = cardEl.querySelector(`[data-es-body="${id}"]`);
      const nowOpen = !acc.classList.contains("is-open");
      state.essayOpen[id] = nowOpen;
      if (nowOpen && !body.innerHTML.trim()) {
        body.innerHTML = `${L(item, "guide")}<div style="margin-top:12px;padding-top:10px;border-top:1px dashed var(--border-strong);font-size:0.83rem;color:var(--ink-3)"><b style="color:var(--ink)">${ui("Biểu điểm chấm (Rubric):", "Marking Rubric:")}</b> ${L(item, "rubric")}</div>`;
      }
      requestAnimationFrame(() => acc.classList.toggle("is-open", nowOpen));
      mutateBtn(b, (el) => {
        el.className = "btn btn-sm " + (nowOpen ? "" : "btn-primary");
        el.textContent = nowOpen ? ui("Ẩn lời giải mẫu", "Hide Solution") : ui("Xem lời giải & Biểu điểm", "View Model Solution");
      });
    }));

    cardEl.querySelectorAll("[data-estar]").forEach((b) => (b.onclick = () => {
      const on = toggleStarEssay(b.dataset.estar);
      if (on) spawnMicroBurst(b, "var(--accent)");
      mutateBtn(b, (el) => {
        el.className = "btn btn-sm " + (on ? "btn-primary" : "btn-ghost");
        el.innerHTML = on ? I.bookmarkFill : I.bookmark;
      });
      const sc = $("#esStarCnt");
      if (sc) sc.textContent = Object.keys(getStarsEssay()).length;
      if (state.essayStarOnly && !on) renderEssayListOnly();
    }));
  }

  function renderEssayListOnly() {
    const zone = $("#essayListZone");
    if (!zone) return;
    const stars = getStarsEssay();
    const kw = state.essaySearch.trim().toLowerCase();
    const shown = ESSAYS.filter((e) => {
      if (state.essayCh && e.ch !== state.essayCh) return false;
      if (state.essayType && e.type !== state.essayType) return false;
      const ex = e.exam || "both";
      if (state.essayExam && ex !== state.essayExam && ex !== "both") return false;
      if (state.essayStarOnly && !stars[e.id]) return false;
      if (kw) {
        const hay = [e.id, e.q, e.qVi, e.guide, e.guideVi].filter(Boolean).join(" ").toLowerCase();
        if (!hay.includes(kw)) return false;
      }
      return true;
    });
    const metaEl = $("#essayMetaText");
    if (metaEl) metaEl.textContent = ui(`Hiển thị ${shown.length} / ${ESSAYS.length} bài`, `Showing ${shown.length} of ${ESSAYS.length} problems`);
    zone.innerHTML = shown.length
      ? shown.map((e, idx) => buildEssayCardHTML(e, idx)).join("")
      : `<div class="panel panel-pad muted" style="text-align:center;padding:40px">${ui("Không tìm thấy bài tập phù hợp.", "No matching items.")}</div>`;
    zone.querySelectorAll(".q-item").forEach(wireEssayCard);
  }

  function renderEssays(main) {
    const T_LBL = { essay: ui("Tự luận", "Conceptual"), "calc-essay": ui("Tính toán", "Quantitative"), case: ui("Tình huống", "Case Problem") };
    const stars = getStarsEssay();

    main.innerHTML = `
      <div class="page-header stagger" style="--i:0;margin-bottom:12px">
        <div>
          <div class="kicker">WRITTEN & QUANTITATIVE PROBLEMS · ${ESSAYS.length} ITEMS</div>
          <h1 class="h1">${ui("Ngân hàng Tự luận, Bài tập & Tình huống", "Essay, Calculation & Problem Bank")}</h1>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn btn-sm" id="btnSampleMid">${I.shuffle} ${ui("Rút đề Giữa kỳ mẫu", "Sample Midterm")}</button>
          <button class="btn btn-sm ${state.essayRevealAll ? "btn-primary" : ""}" id="btnExpandEssays">${state.essayRevealAll ? I.eyeOff : I.eye} ${state.essayRevealAll ? ui("Thu gọn lời giải", "Collapse All") : ui("Mở toàn bộ lời giải", "Expand All")}</button>
        </div>
      </div>

      <div class="acc-grid no-gap ${state.midPaper ? "is-open" : ""}" id="midPaperAcc">
        <div class="acc-inner" id="midPaperBody"></div>
      </div>

      <div class="toolbar-sticky">
        <div class="toolbar-mob-row">
          <div class="search-field">
            ${I.search}
            <input class="inp" id="esSearch" type="search" placeholder="${ui("Tìm đề bài, công thức, lời giải...", "Filter problems...")}" value="${esc(state.essaySearch)}">
          </div>
          <button type="button" class="btn btn-sm mob-only-btn" id="esMobFilterBtn">${I.filter} <span>${ui("Lọc", "Filters")}</span></button>
        </div>
        <div class="toolbar-filters" id="esFilterDrawer">
          <select class="sel" id="esCh">
            <option value="0">${ui("Mọi chương", "All Chapters")} (${ESSAYS.length})</option>
            ${CHAPTERS.map((c) => `<option value="${c.id}" ${state.essayCh === c.id ? "selected" : ""}>Ch.0${c.id} · ${esc(Lp(c, "title"))} (${ESSAYS.filter((x) => x.ch === c.id).length})</option>`).join("")}
          </select>
          <select class="sel" id="esType">
            <option value="">${ui("Mọi dạng bài", "All Formats")}</option>
            ${Object.entries(T_LBL).map(([k, v]) => `<option value="${k}" ${state.essayType === k ? "selected" : ""}>${v} (${ESSAYS.filter((x) => x.type === k).length})</option>`).join("")}
          </select>
          <select class="sel" id="esExam">
            <option value="">${ui("Giữa kỳ & Cuối kỳ", "All Assessments")}</option>
            <option value="midterm" ${state.essayExam === "midterm" ? "selected" : ""}>${ui("Giữa kỳ", "Midterm")}</option>
            <option value="final" ${state.essayExam === "final" ? "selected" : ""}>${ui("Cuối kỳ", "Final")}</option>
          </select>
          <button class="btn btn-sm ${state.essayStarOnly ? "btn-primary" : ""}" id="esStarOnly">${I.bookmark} ${ui("Đã lưu", "Saved")} (<span id="esStarCnt">${Object.keys(stars).length}</span>)</button>
        </div>
      </div>

      <div class="small muted num" id="essayMetaText" style="margin-bottom:12px"></div>
      <div id="essayListZone"></div>
    `;

    const paintMidPaper = () => {
      const acc = $("#midPaperAcc"), b = $("#midPaperBody");
      if (!state.midPaper) { acc.classList.remove("is-open"); return; }
      b.innerHTML = `<div class="panel panel-pad" style="margin-bottom:18px;background:var(--bg-subtle)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <div>
            <div class="kicker">${ui("Đề luyện viết tự luận (Chương 01–03)", "Generated Sample Midterm")}</div>
            <div style="font-weight:650">${ui("Tổng điểm:", "Total:")} <span class="mono">${state.midPaper.reduce((s, x) => s + x.marks, 0)}</span> ${ui("điểm", "marks")}</div>
          </div>
          <button class="btn btn-ghost btn-sm" id="btnCloseMid">${I.x}</button>
        </div>
        ${state.midPaper.map((e, idx) => `
          <div class="panel panel-pad" style="margin-bottom:8px">
            <div class="small muted mono" style="margin-bottom:4px">${ui("Câu", "Problem")} ${idx + 1} · ${esc(e.id)} · ${e.marks}đ · ${esc(e.clo)}</div>
            <div>${L(e, "q")}</div>
          </div>`).join("")}
      </div>`;
      requestAnimationFrame(() => acc.classList.add("is-open"));
      $("#btnCloseMid").onclick = () => { SFX.tap(); state.midPaper = null; acc.classList.remove("is-open"); };
    };
    if (state.midPaper) paintMidPaper();

    renderEssayListOnly();

    const syncEsFilterBadge = () => {
      const fb = $("#esMobFilterBtn");
      if (!fb) return;
      const n = (state.essayCh ? 1 : 0) + (state.essayType ? 1 : 0) + (state.essayExam ? 1 : 0) + (state.essayStarOnly ? 1 : 0);
      mutateBtn(fb, (el) => {
        el.classList.toggle("btn-primary", n > 0);
        el.innerHTML = `${I.filter} <span>${ui("Lọc", "Filters")}${n ? ` (${n})` : ""}</span>`;
      });
    };
    syncEsFilterBadge();
    if ($("#esMobFilterBtn")) $("#esMobFilterBtn").onclick = () => {
      SFX.tap();
      const drw = $("#esFilterDrawer");
      if (drw) drw.classList.toggle("is-open");
    };

    $("#esCh").onchange = (e) => { SFX.tap(); state.essayCh = +e.target.value; syncEsFilterBadge(); renderEssayListOnly(); };
    $("#esType").onchange = (e) => { SFX.tap(); state.essayType = e.target.value; syncEsFilterBadge(); renderEssayListOnly(); };
    $("#esExam").onchange = (e) => { SFX.tap(); state.essayExam = e.target.value; syncEsFilterBadge(); renderEssayListOnly(); };
    $("#esStarOnly").onclick = function () {
      SFX.tap();
      state.essayStarOnly = !state.essayStarOnly;
      this.classList.toggle("btn-primary", state.essayStarOnly);
      syncEsFilterBadge();
      renderEssayListOnly();
    };
    $("#btnExpandEssays").onclick = function () {
      SFX.tap();
      state.essayRevealAll = !state.essayRevealAll;
      state.essayOpen = {};
      mutateBtn(this, (el) => {
        el.classList.toggle("btn-primary", state.essayRevealAll);
        el.innerHTML = `${state.essayRevealAll ? I.eyeOff : I.eye} ${state.essayRevealAll ? ui("Thu gọn lời giải", "Collapse All") : ui("Mở toàn bộ lời giải", "Expand All")}`;
      });
      renderEssayListOnly();
    };

    let esComposing = false;
    const esInp = $("#esSearch");
    esInp.addEventListener("compositionstart", () => { esComposing = true; });
    esInp.addEventListener("compositionend", (e) => { esComposing = false; state.essaySearch = e.target.value; renderEssayListOnly(); });
    esInp.addEventListener("input", (e) => { if (!esComposing) { state.essaySearch = e.target.value; renderEssayListOnly(); } });
    enhanceSearchField(esInp, () => { state.essaySearch = ""; renderEssayListOnly(); });

    $("#btnSampleMid").onclick = () => {
      SFX.tap();
      const p = (c) => shuffle(ESSAYS.filter((x) => x.ch === c))[0];
      state.midPaper = [p(1), p(2), p(3)].filter(Boolean);
      paintMidPaper();
    };
  }

  /* ======================================================================
     7. REVISION HUB (SLIDING TAB BAR + 3D CARD + SMOOTH T/F ACCORDIONS)
     ====================================================================== */
  function buildQaCardHTML(r, idx) {
    const userPick = state.qaPicked[r.id];
    const open = state.qaRevealAll || !!state.qaOpen[r.id] || userPick !== undefined;
    return `
      <div class="q-item spot-surface stagger" style="--i:${Math.min(idx || 0, 8)}" data-qacard="${esc(r.id)}">
        <div class="q-meta">
          <div><span class="q-code">${esc(r.id)}</span> <span class="tag">Ch.0${r.ch}</span> <span class="tag">${r.type === "tf" ? ui("Đúng / Sai", "True / False") : ui("Trả lời ngắn", "Short Q&A")}</span></div>
          <button class="btn btn-ghost btn-sm" data-qatog="${esc(r.id)}">${open ? ui("Thu gọn", "Hide") : ui("Xem đáp án", "Reveal")}</button>
        </div>
        <div class="q-prompt">${L(r, "q")}</div>
        ${r.type === "tf" && !state.qaRevealAll ? `
          <div style="display:flex;gap:8px">
            <button class="btn btn-sm ${userPick === true ? (r.tf === true ? "btn-ok" : "btn-danger") : ""}" data-tf="${esc(r.id)}|1">${ui("Đúng (True)", "True")}</button>
            <button class="btn btn-sm ${userPick === false ? (r.tf === false ? "btn-ok" : "btn-danger") : ""}" data-tf="${esc(r.id)}|0">${ui("Sai (False)", "False")}</button>
          </div>` : ""}
        <div class="acc-grid ${open ? "is-open" : ""}" data-qa-acc="${esc(r.id)}">
          <div class="acc-inner">
            <div class="expl-panel">
              ${r.type === "tf" ? `<span class="tag ${r.tf ? "tag-ok" : "tag-err"}" style="margin-right:6px">${r.tf ? ui("ĐÚNG", "TRUE") : ui("SAI", "FALSE")}</span>` : ""}
              ${L(r, "a")}
            </div>
          </div>
        </div>
      </div>`;
  }

  function wireQaCard(cardEl) {
    const rid = cardEl.dataset.qacard;
    const item = REVIEWS.find((x) => x.id === rid);
    if (!item) return;
    const acc = cardEl.querySelector(`[data-qa-acc="${rid}"]`);
    const togBtn = cardEl.querySelector("[data-qatog]");

    if (togBtn) {
      togBtn.onclick = () => {
        SFX.tap();
        const nowOpen = !acc.classList.contains("is-open");
        state.qaOpen[rid] = nowOpen;
        acc.classList.toggle("is-open", nowOpen);
        mutateBtn(togBtn, (el) => { el.textContent = nowOpen ? ui("Thu gọn", "Hide") : ui("Xem đáp án", "Reveal"); });
      };
    }
    cardEl.querySelectorAll("[data-tf]").forEach((b) => (b.onclick = () => {
      const val = b.dataset.tf.endsWith("|1");
      state.qaPicked[rid] = val;
      updateStreak(val === item.tf);
      cardEl.querySelectorAll("[data-tf]").forEach((x) => {
        const xv = x.dataset.tf.endsWith("|1");
        mutateBtn(x, (el) => {
          el.className = "btn btn-sm " + (xv === val ? (val === item.tf ? "btn-ok" : "btn-danger") : "");
        });
      });
      acc.classList.add("is-open");
      if (togBtn) mutateBtn(togBtn, (el) => { el.textContent = ui("Thu gọn", "Hide"); });
    }));
  }

  function renderRevision(main) {
    main.innerHTML = `
      <div class="page-header stagger" style="--i:0;margin-bottom:8px">
        <div>
          <div class="kicker">CORE REVISION</div>
          <h1 class="h1">${ui("Thuật ngữ, Nhận định Đúng/Sai & Sổ tay Công thức", "Terminology, Conceptual Checks & Formula Reference")}</h1>
        </div>
      </div>

      <div class="uline-tabs" id="revTabBar">
        <button class="uline-tab ${state.revTab === "fc" ? "active" : ""}" data-rv="fc">${ui("Flashcards thuật ngữ", "Flashcards")} (${FLASHCARDS.length})</button>
        <button class="uline-tab ${state.revTab === "qa" ? "active" : ""}" data-rv="qa">${ui("Nhận định Đúng/Sai & Câu ngắn", "True/False & Short Q&A")} (${REVIEWS.length})</button>
        <button class="uline-tab ${state.revTab === "formula" ? "active" : ""}" data-rv="formula">${ui("Hệ thống Công thức 6 chương", "Formula Reference")}</button>
      </div>
      <div id="revBodyZone"></div>
    `;

    const renderRevBody = () => {
      const zone = $("#revBodyZone");
      const known = getFcKnown();

      if (state.revTab === "fc") {
        zone.innerHTML = `
          <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:18px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
              <select class="sel" id="fcCh">
                <option value="0">${ui("Tất cả 6 chương", "All Chapters")} (${FLASHCARDS.length})</option>
                ${CHAPTERS.map((c) => `<option value="${c.id}" ${state.fcCh === c.id ? "selected" : ""}>Ch.0${c.id} · ${esc(Lp(c, "title"))} (${FLASHCARDS.filter((x) => x.ch === c.id).length})</option>`).join("")}
              </select>
              <div class="seg" id="fcFilterSeg">
                <button type="button" data-fcf="all" class="${state.fcFilter === "all" ? "active" : ""}">${ui("Tất cả", "All")}</button>
                <button type="button" data-fcf="todo" class="${state.fcFilter === "todo" ? "active" : ""}">${ui("Chưa thuộc", "Learning")} (<span id="fcTodoCnt">${FLASHCARDS.length - Object.keys(known).length}</span>)</button>
                <button type="button" data-fcf="known" class="${state.fcFilter === "known" ? "active" : ""}">${ui("Đã thuộc", "Mastered")} (<span id="fcKnownCnt">${Object.keys(known).length}</span>)</button>
              </div>
            </div>
            <div style="display:flex;gap:6px;align-items:center">
              <button class="btn btn-sm" id="btnFcShuffle" data-tip="Xáo trộn ngẫu nhiên bộ thẻ">${I.shuffle} ${ui("Xáo trộn", "Shuffle")}</button>
              <button class="btn btn-sm" id="btnFcView">${state.fcTable ? ui("Chuyển sang Thẻ lật 3D", "3D Card Deck") : ui("Xem dạng Bảng tra cứu", "Glossary Table")}</button>
            </div>
          </div>
          <div id="fcDeckStage"></div>
        `;

        const paintFcStage = () => {
          const stg = $("#fcDeckStage");
          if (!stg) return;
          const kn = getFcKnown();
          const ordered = state.fcOrder
            ? state.fcOrder.map((idx) => ({ ...FLASHCARDS[idx], _i: idx }))
            : FLASHCARDS.map((c, idx) => ({ ...c, _i: idx }));
          const deck = ordered.filter((c) => {
            if (state.fcCh && c.ch !== state.fcCh) return false;
            if (state.fcFilter === "todo" && kn[c._i]) return false;
            if (state.fcFilter === "known" && !kn[c._i]) return false;
            return true;
          });
          if (state.fcIdx >= deck.length) state.fcIdx = 0;
          const cur = deck[state.fcIdx];
          const slideCls = state.fcDir === "next" ? "slide-next" : (state.fcDir === "prev" ? "slide-prev" : (state.fcDir === "shuffle" ? "slide-shuffle" : ""));
          state.fcDir = "";

          const tc = $("#fcTodoCnt"), kc = $("#fcKnownCnt");
          if (tc) tc.textContent = FLASHCARDS.length - Object.keys(kn).length;
          if (kc) kc.textContent = Object.keys(kn).length;
          updateSegThumb($("#fcFilterSeg"));

          stg.innerHTML = state.fcTable ? `
            <div class="panel stagger" style="--i:0;overflow:hidden">
              <div class="tbl-scroll">
                <table class="tbl" style="margin:0;border:0">
                  <tr><th style="width:60px">Ch.</th><th style="width:200px">${ui("Thuật ngữ", "Term")}</th><th>${ui("Định nghĩa", "Definition")}</th><th style="width:100px"></th></tr>
                  ${deck.map((c) => `
                    <tr>
                      <td class="mono">0${c.ch}</td>
                      <td><b>${L(c, "front")}</b></td>
                      <td>${L(c, "back")}</td>
                      <td><button class="btn btn-sm ${kn[c._i] ? "btn-ok" : ""}" data-fck="${c._i}">${kn[c._i] ? ui("Đã thuộc", "Known") : ui("Đánh dấu", "Mark")}</button></td>
                    </tr>`).join("")}
                </table>
              </div>
            </div>
          ` : (cur ? `
            <div class="fc-deck-wrap">
              <div class="fc-3d-scene ${slideCls}" id="fcScene">
                <div class="fc-3d-tilt" id="fcTilt">
                  <div class="fc-3d-card ${state.fcBack ? "is-flipped" : ""}" id="fcCard">
                    <div class="fc-3d-face fc-3d-front spot-surface">
                      <div style="display:flex;justify-content:space-between;align-items:center">
                        <span class="tag">Ch.0${cur.ch} · ${ui("Thuật ngữ", "Term")}</span>
                        <span class="mono small muted">${state.fcIdx + 1} / ${deck.length}</span>
                      </div>
                      <div class="fc-main-txt">${L(cur, "front")}</div>
                      <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.75rem;color:var(--ink-3);gap:8px">
                        <span class="desk-kbd-hint"><span class="kbd" data-kbd="space">Space</span> ${ui("Lật", "Flip")} · <span class="kbd" data-kbd="left">←</span><span class="kbd" data-kbd="right">→</span> ${ui("Chuyển", "Move")} · <span class="kbd" data-kbd="enter">Enter</span> ${ui("Thuộc", "Master")}</span>
                        <span class="touch-swipe-hint">${ui("Chạm thẻ để lật · Vuốt ngang chuyển thẻ", "Tap to flip · Swipe to navigate")}</span>
                        <span>${kn[cur._i] ? `<span class="tag tag-ok">${ui("Đã thuộc", "Mastered")}</span>` : ""}</span>
                      </div>
                    </div>
                    <div class="fc-3d-face fc-3d-back spot-surface">
                      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
                        <span class="tag tag-accent">Ch.0${cur.ch} · ${ui("Định nghĩa chuẩn", "Definition")}</span>
                        <span class="mono small muted" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(Lp(cur, "front"))}</span>
                      </div>
                      <div class="fc-main-txt" style="font-size:1.01rem;font-weight:480;text-align:left;line-height:1.68">${L(cur, "back")}</div>
                      <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.75rem;color:var(--ink-3);gap:8px">
                        <span class="desk-kbd-hint"><span class="kbd" data-kbd="space">Space</span> ${ui("Lật lại mặt trước", "Flip back")}</span>
                        <span class="touch-swipe-hint">${ui("Chạm thẻ để lật lại", "Tap to flip back")}</span>
                        <span>${kn[cur._i] ? `<span class="tag tag-ok">${ui("Đã thuộc", "Mastered")}</span>` : ""}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="meter-track" style="margin:14px 0"><div class="meter-fill ok" style="width:${Math.round(((state.fcIdx + 1) / deck.length) * 100)}%"></div></div>

              <div class="fc-ctrl-row" style="display:flex;justify-content:center;gap:8px">
                <button class="btn" id="fcPrev">${I.arrowL} ${ui("Trước", "Prev")}</button>
                <button class="btn ${kn[cur._i] ? "btn-ok" : ""}" id="fcToggleKnown">${I.check} ${kn[cur._i] ? ui("Đã thuộc", "Mastered") : ui("Đánh dấu thuộc", "Mark Known")}</button>
                <button class="btn btn-primary" id="fcNext">${ui("Tiếp", "Next")} ${I.arrowR}</button>
              </div>
            </div>
          ` : `<div class="panel panel-pad muted" style="text-align:center;padding:40px">${ui("Tuyệt vời! Không còn thẻ nào chưa thuộc trong nhóm này.", "All cards in this filter are mastered!")}</div>`);

          const scene = $("#fcScene"), tilt = $("#fcTilt");
          if (scene && tilt) {
            scene.onpointermove = (e) => {
              if (e.pointerType === "touch") return;
              const r = scene.getBoundingClientRect();
              const nx = (e.clientX - r.left) / r.width - 0.5;
              const ny = (e.clientY - r.top) / r.height - 0.5;
              tilt.style.setProperty("--rx", (-ny * 6).toFixed(2) + "deg");
              tilt.style.setProperty("--ry", (nx * 7).toFixed(2) + "deg");
            };
            scene.onpointerleave = () => {
              tilt.style.setProperty("--rx", "0deg");
              tilt.style.setProperty("--ry", "0deg");
            };
          }

          if ($("#fcCard")) {
            let dragX0 = null;
            const card = $("#fcCard");
            card.onpointerdown = (ev) => { dragX0 = ev.clientX; };
            card.onpointercancel = () => { dragX0 = null; };
            card.onpointerleave = () => { dragX0 = null; };
            card.onpointerup = (ev) => {
              if (dragX0 !== null) {
                const dx = ev.clientX - dragX0;
                dragX0 = null;
                if (Math.abs(dx) > 54 && deck.length > 1) {
                  card._swiped = true;
                  SFX.tap();
                  if (dx < 0) {
                    state.fcIdx = (state.fcIdx + 1) % deck.length;
                    state.fcBack = false; state.fcDir = "next"; paintFcStage();
                  } else {
                    state.fcIdx = (state.fcIdx - 1 + deck.length) % deck.length;
                    state.fcBack = false; state.fcDir = "prev"; paintFcStage();
                  }
                }
              }
            };
            card.onclick = function () {
              if (this._swiped) { this._swiped = false; return; }
              SFX.flip();
              state.fcBack = !state.fcBack;
              this.classList.toggle("is-flipped", state.fcBack);
              if (onScrollSettledHook) onScrollSettledHook();
            };
          }
          if ($("#fcPrev")) $("#fcPrev").onclick = () => {
            SFX.tap();
            state.fcIdx = (state.fcIdx - 1 + Math.max(1, deck.length)) % Math.max(1, deck.length);
            state.fcBack = false; state.fcDir = "prev"; paintFcStage();
          };
          if ($("#fcNext")) $("#fcNext").onclick = () => {
            SFX.tap();
            state.fcIdx = (state.fcIdx + 1) % Math.max(1, deck.length);
            state.fcBack = false; state.fcDir = "next"; paintFcStage();
          };
          if ($("#fcToggleKnown")) $("#fcToggleKnown").onclick = function () {
            if (!cur) return;
            const nowKnown = toggleFcKnown(cur._i);
            if (nowKnown) { SFX.correct(2); spawnMicroBurst(this, "var(--ok)"); }
            else SFX.tap();
            showToast(nowKnown ? ui("Đã đánh dấu thuộc thuật ngữ", "Term mastered") : ui("Đã đưa lại vào danh sách ôn", "Marked for review"));
            if (nowKnown && state.fcIdx < deck.length - 1 && state.fcFilter !== "todo") {
              state.fcIdx++; state.fcDir = "next";
            }
            state.fcBack = false; paintFcStage();
          };
          stg.querySelectorAll("[data-fck]").forEach((b) => (b.onclick = function () {
            const on = toggleFcKnown(+b.dataset.fck);
            if (on) SFX.correct(1); else SFX.tap();
            mutateBtn(this, (el) => {
              el.className = "btn btn-sm " + (on ? "btn-ok" : "");
              el.textContent = on ? ui("Đã thuộc", "Known") : ui("Đánh dấu", "Mark");
            });
            const tc2 = $("#fcTodoCnt"), kc2 = $("#fcKnownCnt");
            const kn2 = getFcKnown();
            if (tc2) tc2.textContent = FLASHCARDS.length - Object.keys(kn2).length;
            if (kc2) kc2.textContent = Object.keys(kn2).length;
            updateSegThumb($("#fcFilterSeg"));
          }));
        };

        syncSlidingControls(zone);
        paintFcStage();

        if ($("#fcCh")) $("#fcCh").onchange = (e) => { SFX.tap(); state.fcCh = +e.target.value; state.fcIdx = 0; state.fcBack = false; paintFcStage(); };
        const fSeg = $("#fcFilterSeg");
        fSeg.querySelectorAll("[data-fcf]").forEach((b) => (b.onclick = () => {
          if (state.fcFilter === b.dataset.fcf) return;
          SFX.tap();
          state.fcFilter = b.dataset.fcf;
          state.fcIdx = 0;
          state.fcBack = false;
          fSeg.querySelectorAll("[data-fcf]").forEach((x) => x.classList.toggle("active", x === b));
          updateSegThumb(fSeg);
          paintFcStage();
        }));
        if ($("#btnFcShuffle")) $("#btnFcShuffle").onclick = () => {
          SFX.flip();
          state.fcOrder = shuffle(FLASHCARDS.map((_, idx) => idx));
          state.fcIdx = 0;
          state.fcBack = false;
          state.fcDir = "shuffle";
          showToast(ui("Đã xáo trộn ngẫu nhiên bộ thẻ", "Flashcard deck shuffled"));
          paintFcStage();
        };
        if ($("#btnFcView")) $("#btnFcView").onclick = function () {
          SFX.tap();
          state.fcTable = !state.fcTable;
          mutateBtn(this, (el) => {
            el.textContent = state.fcTable ? ui("Chuyển sang Thẻ lật 3D", "3D Card Deck") : ui("Xem dạng Bảng tra cứu", "Glossary Table");
          });
          paintFcStage();
        };
      } else if (state.revTab === "qa") {
        const list = REVIEWS.filter((r) => (!state.qaCh || r.ch === state.qaCh) && (!state.qaType || r.type === state.qaType));
        zone.innerHTML = `
          <div class="toolbar-sticky" style="top:0;position:relative">
            <select class="sel" id="qaCh">
              <option value="0">${ui("Mọi chương", "All Chapters")} (${REVIEWS.length})</option>
              ${CHAPTERS.map((c) => `<option value="${c.id}" ${state.qaCh === c.id ? "selected" : ""}>Ch.0${c.id} · ${esc(Lp(c, "title"))} (${REVIEWS.filter((x) => x.ch === c.id).length})</option>`).join("")}
            </select>
            <select class="sel" id="qaType">
              <option value="">${ui("Mọi định dạng", "All Formats")}</option>
              <option value="tf" ${state.qaType === "tf" ? "selected" : ""}>${ui("Nhận định Đúng / Sai", "True / False")}</option>
              <option value="short" ${state.qaType === "short" ? "selected" : ""}>${ui("Câu hỏi ngắn", "Short Answer")}</option>
            </select>
            <button class="btn btn-sm ${state.qaRevealAll ? "btn-primary" : ""}" id="qaRevBtn">${state.qaRevealAll ? ui("Ẩn giải thích", "Hide Answers") : ui("Mở tất cả giải thích", "Show All Answers")}</button>
          </div>
          <div>${list.map((r, i) => buildQaCardHTML(r, i)).join("")}</div>
        `;
        $("#qaCh").onchange = (e) => { SFX.tap(); state.qaCh = +e.target.value; renderRevBody(); };
        $("#qaType").onchange = (e) => { SFX.tap(); state.qaType = e.target.value; renderRevBody(); };
        $("#qaRevBtn").onclick = () => { SFX.tap(); state.qaRevealAll = !state.qaRevealAll; state.qaOpen = {}; renderRevBody(); };
        enhanceSelects(zone);
        zone.querySelectorAll("[data-qacard]").forEach(wireQaCard);
      } else {
        zone.innerHTML = `<div class="resp-grid-2">
          ${CHAPTERS.map((c, idx) => {
            const f = (lg) => (lg === "vi" && FORMULAS_VI[c.id]) || FORMULAS[c.id] || "—";
            return `
              <div class="panel panel-pad panel-hover spot-surface stagger" style="--i:${idx}">
                <div class="kicker">CHƯƠNG 0${c.id}</div>
                <h3 style="font-size:1rem;margin-bottom:10px">${L(c, "title")}</h3>
                <div style="font-size:0.9rem;line-height:1.85;color:var(--ink-2)">${theoNN(f)}</div>
              </div>`;
          }).join("")}
        </div>`;
      }
    };

    renderRevBody();
    syncSlidingControls(main);

    const revBar = $("#revTabBar");
    revBar.querySelectorAll("[data-rv]").forEach((b) => (b.onclick = () => {
      if (state.revTab === b.dataset.rv) return;
      SFX.tap();
      state.revTab = b.dataset.rv;
      revBar.querySelectorAll(".uline-tab").forEach((x) => x.classList.toggle("active", x === b));
      updateTabInk(revBar);
      if (b.scrollIntoView) b.scrollIntoView({ inline: "nearest", block: "nearest", behavior: "smooth" });
      renderRevBody();
    }));
  }

  /* ======================================================================
     8. CASE STUDIES
     ====================================================================== */
  const unlockedCases = new Map();
  function tryUnlockCase(id, code) {
    const goi = window.IB_PHAN_TICH && window.IB_PHAN_TICH.bai && window.IB_PHAN_TICH.bai[id];
    if (!goi || !window.IBKhoa) return null;
    const nd = window.IBKhoa.moBai(goi, code);
    if (nd) {
      unlockedCases.set(id, nd);
      const m = store.get("ma_mo", {});
      m[id] = code;
      store.set("ma_mo", m);
    }
    return nd;
  }
  function getUnlockedCase(id) {
    if (unlockedCases.has(id)) return unlockedCases.get(id);
    const m = store.get("ma_mo", {});
    for (const c of [m[id], m.__chung].filter(Boolean)) {
      const nd = tryUnlockCase(id, c);
      if (nd) return nd;
    }
    return null;
  }
  function caseTx(o) {
    if (o == null) return "";
    if (typeof o === "string") return o;
    const v = o.vi != null ? o.vi : o.en;
    const e = o.en != null ? o.en : o.vi;
    if (isBi() && window.ghepKhoi) return window.ghepKhoi(v, e);
    return isEn() ? e : v;
  }

  function renderCasesList(main) {
    const saved = store.get("ma_mo", {});
    main.innerHTML = `
      <div class="page-header stagger" style="--i:0">
        <div>
          <div class="kicker">TRANSACTION DOSSIERS · ${CASES.length} CASES</div>
          <h1 class="h1">${ui("Thư viện Hồ sơ thương vụ chuyên sâu", "Transaction Case Study Library")}</h1>
          <p class="lead">${ui("Các thương vụ IPO, M&A, LBO và tái cấu trúc kinh điển dựng từ cáo bạch và báo cáo gốc. Phần bình luận của giảng viên mở bằng mã cấp tại lớp.", "In-depth transaction dossiers built from regulatory filings, prospectuses, and textbooks.")}</p>
        </div>
        <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          <input class="inp mono" id="inpMasterCode" placeholder="${ui("Mã lớp XXXX-XXXX-XX", "Access code")}" style="text-transform:uppercase;flex:1 1 165px;min-width:0">
          <button class="btn" id="btnMasterUnlock">${I.unlock} ${ui("Mở khoá", "Unlock")}</button>
        </div>
      </div>

      <div class="resp-grid-cards">
        ${CASES.map((c, idx) => {
          const open = unlockedCases.has(c.id) || !!saved[c.id] || !!saved.__chung;
          return `
            <div class="launch-card spot-surface stagger" style="--i:${idx + 1}" data-cid="${esc(c.id)}">
              <div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;gap:8px">
                  <div style="display:flex;gap:6px">
                    <span class="tag tag-teal">Ch.0${c.ch}</span>
                    <span class="tag">${esc(c.nam || "")}</span>
                  </div>
                  <span class="tag ${open ? "tag-ok" : "tag-brand"}">${open ? I.unlock + " " + ui("Đã mở phân tích", "Unlocked") : I.lock + " " + ui("Đề bài mở", "Reading Open")}</span>
                </div>
                <h3 style="font-size:1.05rem;font-weight:650;margin-bottom:4px">${esc(isEn() ? c.tieuDe.en : c.tieuDe.vi)}</h3>
                <div class="small muted" style="margin-bottom:10px">${esc(isEn() ? c.phu.en : c.phu.vi)}</div>
                <div class="small" style="color:var(--ink-2)">${caseTx(c.tomTat)}</div>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid var(--border-subtle);font-size:0.8rem">
                <span class="mono muted">${ui("Mục", "Sec.")} ${esc((c.muc || []).join(", "))}</span>
                <span style="font-weight:600;display:inline-flex;align-items:center;gap:4px">${ui("Đọc hồ sơ", "Read Dossier")} <span class="card-cta-arrow">${I.arrowR}</span></span>
              </div>
            </div>`;
        }).join("")}
      </div>
    `;

    main.querySelectorAll("[data-cid]").forEach((el) => (el.onclick = () => nav("caseRead", { caseId: el.dataset.cid })));
    $("#btnMasterUnlock").onclick = () => {
      const val = ($("#inpMasterCode").value || "").trim();
      if (!val) return;
      let cnt = 0;
      CASES.forEach((c) => { if (tryUnlockCase(c.id, val)) cnt++; });
      if (cnt > 1) { const m = store.get("ma_mo", {}); m.__chung = val; store.set("ma_mo", m); }
      if (cnt > 0) { SFX.complete(); showToast(ui(`Đã mở khoá ${cnt} bài phân tích`, `Unlocked ${cnt} analyses`)); render(false); }
      else { SFX.wrong(); showToast(ui("Mã cấp quyền không đúng", "Unrecognised access code")); }
    };
  }

  function renderCaseRead(main) {
    const c = CASES.find((x) => x.id === state.caseId);
    if (!c) { nav("cases"); return; }
    const lg = isEn() ? "en" : "vi";
    const cq = caseTx(c.cauHoi) || [];
    const soLieu = c.soLieu ? caseTx(c.soLieu) : null;
    const mucTieu = caseTx(c.mucTieu) || [];
    const unlocked = getUnlockedCase(c.id);
    const N = window.IBNguon;
    const refsHtml = (c.nguon || []).map(([k, loc]) => (N && N.ref(k) ? `<li>${cleanEmoji(N.ref(k, lg))}${loc ? ` — <span class="muted">${esc(N.vt(loc, lg))}</span>` : ""}</li>` : `<li>${esc(k)}</li>`)).join("");
    const bodyStr = caseTx(c.noiDung);

    main.innerHTML = `
      <div class="reader-sheet stagger" style="--i:0;max-width:790px;margin:0 auto">
        <button class="btn btn-ghost btn-sm" id="btnBackCases" style="margin-bottom:16px">${I.arrowL} ${ui("Tất cả hồ sơ thương vụ", "All Case Studies")}</button>
        <div class="kicker">CHƯƠNG 0${c.ch} · ${esc(c.nam || "")} · ~${estimateReadMins(bodyStr)} ${ui("PHÚT ĐỌC", "MIN READ")}</div>
        <h1 class="h1" style="margin-bottom:6px">${esc(isEn() ? c.tieuDe.en : c.tieuDe.vi)}</h1>
        <p class="lead" style="margin-bottom:22px">${esc(isEn() ? c.phu.en : c.phu.vi)}</p>

        ${soLieu ? `
          <div class="panel" style="overflow:hidden;margin-bottom:24px">
            <table class="tbl" style="margin:0;border:0">${soLieu.map((r) => `<tr><th style="width:32%">${r[0]}</th><td>${r[1]}</td></tr>`).join("")}</table>
          </div>` : ""}

        <div class="panel panel-pad" style="background:var(--bg-subtle);margin-bottom:26px">
          <div class="kicker">${ui("Trọng tâm phân tích", "Analytical Objectives")}</div>
          <ul style="margin-left:18px;font-size:0.9rem;color:var(--ink-2)">${mucTieu.map((x) => `<li style="margin-bottom:4px">${x}</li>`).join("")}</ul>
        </div>

        <article class="prose">${cleanEmoji(bodyStr)}</article>

        <div class="panel panel-pad" style="margin:28px 0;background:var(--bg-subtle)">
          <div class="kicker">${ui("Câu hỏi thảo luận", "Discussion Prompts")}</div>
          <ol style="margin-left:18px;line-height:1.75;font-size:0.94rem">${cq.map((q) => `<li style="margin-bottom:8px">${q}</li>`).join("")}</ol>
        </div>

        ${unlocked ? `
          <div class="panel panel-pad stagger" style="--i:0;border-color:var(--ok-border);margin-bottom:24px">
            <div class="kicker" style="color:var(--ok)">${I.unlock} ${ui("Bài phân tích của Giảng viên", "Instructor Analysis")}</div>
            <div class="prose">${cleanEmoji(caseTx(unlocked))}</div>
          </div>
        ` : `
          <div class="panel panel-pad" style="margin-bottom:24px;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap">
            <div>
              <div style="font-weight:650;display:flex;align-items:center;gap:6px">${I.lock} ${ui("Bài phân tích của Giảng viên đang khoá", "Instructor Analysis Locked")}</div>
              <div class="small muted">${ui("Nhập mã do giảng viên cung cấp sau phiên thảo luận để mở bài giải.", "Enter the class code provided by your instructor.")}</div>
            </div>
            <div style="display:flex;gap:6px;width:100%;max-width:320px">
              <input class="inp mono" id="inpSingleCase" placeholder="XXXX-XXXX-XX" style="text-transform:uppercase;flex:1;min-width:0">
              <button class="btn btn-primary" id="btnSingleUnlock">${ui("Mở khoá", "Unlock")}</button>
            </div>
          </div>
        `}

        <div class="panel panel-pad">
          <div class="kicker">${ui("Tài liệu gốc truy xuất (APA 7th)", "Primary Sources")}</div>
          <ol style="margin-left:18px;font-size:0.82rem;color:var(--ink-3);line-height:1.65">${refsHtml}</ol>
        </div>
      </div>
    `;
    wrapTablesForScroll(main);

    $("#btnBackCases").onclick = () => nav("cases");
    if ($("#btnSingleUnlock")) {
      const triggerUnlock = () => {
        const val = ($("#inpSingleCase").value || "").trim();
        if (tryUnlockCase(c.id, val)) { SFX.complete(); showToast(ui("Đã mở khoá bài phân tích", "Analysis unlocked")); render(false); }
        else { SFX.wrong(); showToast(ui("Mã chưa đúng cho tình huống này", "Invalid code")); }
      };
      $("#btnSingleUnlock").onclick = triggerUnlock;
      $("#inpSingleCase").onkeydown = (e) => { if (e.key === "Enter") triggerUnlock(); };
    }
  }

  /* ======================================================================
     9. VALUATION MODELS & SIMULATIONS (PRESERVES SLIDING TAB BAR!)
     ====================================================================== */
  function renderLabs(main) {
    $("#pageWrap").classList.add("page-wide");
    const labs = window.LABS || {};
    const tools = window.TOOLS || {};
    const games = (window.HUB_GAMES || []).slice().sort((a, b) => (a.ch || 0) - (b.ch || 0));

    main.innerHTML = `
      <div class="page-header stagger" style="--i:0;margin-bottom:8px">
        <div>
          <div class="kicker">QUANTITATIVE & DEAL SIMULATIONS</div>
          <h1 class="h1">${ui("Phòng mô hình định giá & Tình huống ra quyết định", "Valuation Models & Deal Simulations")}</h1>
        </div>
      </div>

      <div class="uline-tabs" id="labTabBar">
        <button class="uline-tab ${state.labGroup === "ch" ? "active" : ""}" data-lg="ch">${ui("Mô phỏng 6 chương", "Chapter Models")} (6)</button>
        <button class="uline-tab ${state.labGroup === "tool" ? "active" : ""}" data-lg="tool">${ui("Công cụ định giá", "Valuation Tools")} (4)</button>
        <button class="uline-tab ${state.labGroup === "game" ? "active" : ""}" data-lg="game">${ui("Tình huống thương vụ", "Deal Scenarios")} (${games.length})</button>
      </div>

      <div id="labBodyZone"></div>
    `;

    const renderLabBody = () => {
      const zone = $("#labBodyZone");
      let items = [];
      if (state.labGroup === "ch") {
        if (!labs[state.labKey]) state.labKey = Object.keys(labs)[0] || "1";
        items = Object.keys(labs).map((k) => {
          const raw = (isEn() ? labs[k].title : (labs[k].titleVi || labs[k].title)).replace(/&amp;/g, "&");
          const short = raw.includes("·") ? raw.split("·")[1].trim() : raw;
          return { k, label: `0${k} · ${short}` };
        });
      } else if (state.labGroup === "tool") {
        if (!tools[state.labKey]) state.labKey = Object.keys(tools)[0] || "dcf";
        items = Object.keys(tools).map((k) => ({ k, label: cleanEmoji(String(Lp(tools[k], "tab"))).replace(/&amp;/g, "&").trim() }));
      } else {
        const idx = Math.min(+state.labKey || 0, Math.max(0, games.length - 1));
        state.labKey = String(idx);
        items = games.map((g, i) => ({ k: String(i), label: cleanEmoji(isEn() ? g.ten.en : g.ten.vi) }));
      }

      zone.innerHTML = `
        <div class="seg" id="labSubSeg" data-count="${items.length}" style="flex-wrap:wrap;margin-bottom:16px">
          ${items.map((it) => `<button type="button" class="${state.labKey === it.k ? "active" : ""}" data-lk="${esc(it.k)}">${esc(it.label)}</button>`).join("")}
        </div>
        <div id="labActiveCard"></div>
      `;

      const paintActiveLab = (animate) => {
        let title = "", guide = "";
        if (state.labGroup === "ch" && labs[state.labKey]) {
          title = L(labs[state.labKey], "title");
          guide = L(labs[state.labKey], "guide");
        } else if (state.labGroup === "tool" && tools[state.labKey]) {
          title = L(tools[state.labKey], "title");
          guide = L(tools[state.labKey], "guide");
        } else if (state.labGroup === "game" && games[+state.labKey]) {
          const g = games[+state.labKey];
          title = esc(cleanEmoji(isEn() ? g.ten.en : g.ten.vi));
          guide = esc(cleanEmoji(isEn() ? g.moTa.en : g.moTa.vi));
        }
        const cardZone = $("#labActiveCard");
        cardZone.innerHTML = `
          <div class="panel panel-pad ${animate ? "stagger" : ""}" style="--i:0">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap;margin-bottom:6px">
              <div>
                <h3 style="font-size:1.08rem;margin-bottom:4px">${title}</h3>
                <p class="small muted">${guide}</p>
              </div>
              <button type="button" class="btn btn-sm" id="btnResetLab" data-tip="Khôi phục bộ thông số mặc định ban đầu">${I.rotate} ${ui("Đặt lại mặc định", "Reset Inputs")}</button>
            </div>
            <div id="labMount" style="margin-top:12px" class="${state.labGroup === "game" ? "game-frame" : ""}"></div>
          </div>
        `;
        const mount = $("#labMount");
        const runMount = () => {
          if (state.labGroup === "ch" && labs[state.labKey]) labs[state.labKey].render(mount);
          else if (state.labGroup === "tool" && tools[state.labKey]) tools[state.labKey].render(mount);
          else if (state.labGroup === "game" && games[+state.labKey]) games[+state.labKey].ve(mount);
          syncRangeSliders(mount);
          enhanceSelects(mount);
          wrapTablesForScroll(mount);
        };
        runMount();

        // Snapshot KPI values to trigger directional delta flashes on live input changes!
        const readPillNums = () => [...mount.querySelectorAll(".result-pill")].map((p) => {
          const rv = p.querySelector(".rv");
          const raw = rv ? rv.textContent.trim() : "";
          const num = parseFloat(raw.replace(/[^0-9.-]/g, ""));
          return { raw, num };
        });
        let prevPills = readPillNums();
        mount.addEventListener("input", () => {
          requestAnimationFrame(() => {
            const nextPills = readPillNums();
            const els = [...mount.querySelectorAll(".result-pill")];
            nextPills.forEach((np, idx) => {
              const pp = prevPills[idx];
              const el = els[idx];
              if (!pp || !el || np.raw === pp.raw) return;
              el.classList.remove("delta-up", "delta-down");
              void el.offsetWidth;
              if (!isNaN(np.num) && !isNaN(pp.num) && np.num < pp.num) el.classList.add("delta-down");
              else el.classList.add("delta-up");
            });
            prevPills = nextPills;
          });
        });

        $("#btnResetLab").onclick = () => {
          SFX.tap();
          runMount();
          prevPills = readPillNums();
          showToast(ui("Đã khôi phục thông số mặc định của mô hình", "Model parameters reset to defaults"));
        };
      };

      syncSlidingControls(zone);
      paintActiveLab(false);

      const subSeg = $("#labSubSeg");
      subSeg.querySelectorAll("[data-lk]").forEach((b) => (b.onclick = () => {
        if (state.labKey === b.dataset.lk) return;
        SFX.tap();
        state.labKey = b.dataset.lk;
        subSeg.querySelectorAll("[data-lk]").forEach((x) => x.classList.toggle("active", x === b));
        updateSegThumb(subSeg);
        if (b.scrollIntoView) b.scrollIntoView({ inline: "nearest", block: "nearest", behavior: "smooth" });
        paintActiveLab(true);
      }));
    };

    renderLabBody();
    syncSlidingControls(main);

    const labBar = $("#labTabBar");
    labBar.querySelectorAll("[data-lg]").forEach((b) => (b.onclick = () => {
      if (state.labGroup === b.dataset.lg) return;
      SFX.tap();
      state.labGroup = b.dataset.lg;
      state.labKey = state.labGroup === "ch" ? "1" : (state.labGroup === "tool" ? "dcf" : "0");
      labBar.querySelectorAll(".uline-tab").forEach((x) => x.classList.toggle("active", x === b));
      updateTabInk(labBar);
      if (b.scrollIntoView) b.scrollIntoView({ inline: "nearest", block: "nearest", behavior: "smooth" });
      renderLabBody();
    }));
  }

  /* ======================================================================
     10. ANALYTICS & MISTAKE QUEUE
     ====================================================================== */
  function renderStats(main) {
    const attempts = store.get("attempts", []).slice().reverse();
    const wrongs = getWrongMcq();
    const stars = getStarsMcq();
    const chAgg = {};
    attempts.forEach((a) => {
      Object.entries(a.byCh || {}).forEach(([ch, [ok, tot]]) => {
        chAgg[ch] = chAgg[ch] || [0, 0];
        chAgg[ch][0] += ok; chAgg[ch][1] += tot;
      });
    });

    main.innerHTML = `
      <div class="page-header stagger" style="--i:0">
        <div>
          <div class="kicker">PERFORMANCE ANALYTICS</div>
          <h1 class="h1">${ui("Phân tích kết quả theo chương & Lịch sử làm đề", "Chapter Diagnostics & Attempt History")}</h1>
        </div>
        <div style="display:flex;gap:8px">
          ${Object.keys(wrongs).length + Object.keys(stars).length ? `<button class="btn btn-primary btn-sm" id="btnDrillAllWeak">${I.target} ${ui("Luyện lại câu sai & đã lưu", "Drill Mistakes & Saved")}</button>` : ""}
          ${attempts.length ? `<button class="btn btn-danger btn-sm" id="btnClearAtt">${I.trash} ${ui("Xoá lịch sử", "Clear History")}</button>` : ""}
        </div>
      </div>

      <div class="panel stagger" style="--i:1;overflow:hidden;margin-bottom:22px">
        <table class="tbl" style="margin:0;border:0">
          <tr><th>${ui("Chương", "Chapter")}</th><th>${ui("Đã làm", "Attempted")}</th><th>${ui("Độ chính xác", "Accuracy")}</th><th>${ui("Cần ôn lại", "Queue")}</th><th style="text-align:right"></th></tr>
          ${CHAPTERS.map((c) => {
            const st = chAgg[c.id];
            const acc = st && st[1] ? Math.round((st[0] / st[1]) * 100) : null;
            const wCnt = MCQS.filter((q) => q.ch === c.id && wrongs[q.id]).length;
            const sCnt = MCQS.filter((q) => q.ch === c.id && stars[q.id]).length;
            return `<tr>
              <td><b>0${c.id}</b> · ${L(c, "title")}</td>
              <td class="mono">${st ? `${st[0]}/${st[1]}` : "—"}</td>
              <td>${acc !== null ? `<span class="tag ${acc >= 75 ? "tag-ok" : (acc >= 50 ? "tag-warn" : "tag-err")}">${acc}%</span>` : `<span class="muted small">—</span>`}</td>
              <td class="mono">${wCnt ? `<span class="tag tag-err">${wCnt} sai</span> ` : ""}${sCnt ? `<span class="tag">${sCnt} lưu</span>` : (!wCnt ? "—" : "")}</td>
              <td style="text-align:right"><button class="btn btn-sm" data-pch="${c.id}">${ui("Luyện chương", "Practice")}</button></td>
            </tr>`;
          }).join("")}
        </table>
      </div>

      <h3 class="stagger" style="--i:2;font-size:1rem;margin-bottom:10px">${ui("Lịch sử các phiên làm bài", "Completed Sessions")} (${attempts.length})</h3>
      ${attempts.length ? `
        <div class="panel stagger" style="--i:3;overflow:hidden">
          <table class="tbl" style="margin:0;border:0">
            <tr><th>${ui("Thời điểm", "Timestamp")}</th><th>${ui("Chế độ", "Type")}</th><th>${ui("Phạm vi", "Scope")}</th><th>${ui("Số câu đúng", "Correct")}</th><th>${ui("Thang 10", "Score / 10")}</th></tr>
            ${attempts.map((a) => `<tr>
              <td class="mono small muted">${new Date(a.date).toLocaleString("vi-VN")}</td>
              <td><span class="tag ${a.mode === "exam" ? "tag-ok" : ""}">${a.mode === "exam" ? ui("Thi thử", "Mock Exam") : ui("Luyện tập", "Practice")}</span></td>
              <td>${esc(a.scope || "")}</td>
              <td class="mono"><b>${a.score}/${a.total}</b> (${Math.round((a.score / a.total) * 100)}%)</td>
              <td class="mono"><b>${((a.score / a.total) * 10).toFixed(2).replace(".", ",")}</b></td>
            </tr>`).join("")}
          </table>
        </div>
      ` : `<div class="panel panel-pad muted small stagger" style="--i:3">${ui("Chưa có phiên làm đề nào được ghi nhận.", "No completed sessions recorded yet.")}</div>`}
    `;
    wrapTablesForScroll(main);

    if ($("#btnDrillAllWeak")) $("#btnDrillAllWeak").onclick = startMistakeDrill;
    if ($("#btnClearAtt")) $("#btnClearAtt").onclick = () => {
      SFX.tap();
      openConfirmModal({
        title: ui("Xoá lịch sử làm đề (Yêu cầu mã bảo vệ)", "Clear Attempt History (PIN Protected)"),
        desc: ui("Nhập mã khoá quản trị để xác nhận xoá thống kê điểm số các lần thi thử trên trình duyệt này.", "Enter the admin PIN to permanently clear recorded quiz scores on this browser."),
        danger: true,
        requirePin: true,
        okLabel: ui("Xác nhận xoá", "Verify & Delete"),
        onConfirm: () => {
          store.set("attempts", []);
          SFX.complete();
          showToast(ui("Đã xoá lịch sử các phiên làm đề", "Attempt history cleared"));
          render(false);
        }
      });
    };
    main.querySelectorAll("[data-pch]").forEach((b) => (b.onclick = () => startQuickPractice(+b.dataset.pch)));
  }

  /* ======================================================================
     COMMAND PALETTE (CTRL+K WITH SMOOTH ENTER/EXIT + ARROW NAVIGATION)
     ====================================================================== */
  function openCmd() {
    SFX.tap();
    $("#cmdOverlay").classList.remove("hidden");
    pushOverlayHistory();
    const inp = $("#cmdInput");
    inp.value = "";
    state.cmdActiveIdx = 0;
    renderCmdList("");
    setTimeout(() => inp.focus(), 20);
  }
  function closeCmd() {
    $("#cmdOverlay").classList.add("hidden");
    scheduleOverlayHistoryRelease();
  }

  function updateCmdHighlight() {
    const box = $("#cmdResults");
    if (!box) return;
    const rows = [...box.querySelectorAll(".cmd-row")];
    rows.forEach((r, idx) => {
      const on = idx === state.cmdActiveIdx;
      r.classList.toggle("active", on);
      if (on) r.scrollIntoView({ block: "nearest" });
    });
  }

  function renderCmdList(q) {
    const rawTrim = q.trim();
    const kw = rawTrim.toLowerCase();
    const res = [];

    // Stealth Admin Reset Trigger:
    // 1) Typing "!reset" opens a masked PIN dialog (safe against shoulder-surfing on mobile/desktop)
    // 2) Typing the exact PIN (or "!reset <PIN>" / "reset <PIN>") unlocks immediate admin actions
    if (kw === "!reset") {
      res.push({
        ico: I.lock,
        title: ui("Khôi phục toàn bộ dữ liệu học tập về 0% (Yêu cầu mã khoá)", "Factory Reset Study Progress to 0% (PIN Required)"),
        sub: ui("Nhập mã khoá ẩn (••••) ở bước tiếp theo để đặt lại trình duyệt này mới hoàn toàn", "Enter masked admin PIN on next step to reset all progress safely"),
        go: () => {
          const inp = $("#cmdInput");
          if (inp) inp.value = "";
          setTimeout(() => {
            openConfirmModal({
              title: ui("Đặt lại dữ liệu học tập về 0%", "Reset All Study Progress to 0%"),
              desc: ui("Toàn bộ mục bài giảng đã đọc, lịch sử đề thi, câu sai, câu đã lưu và flashcards trên thiết bị này sẽ trở về trạng thái ban đầu (giữ nguyên 100% học liệu).", "All read sections, quiz attempts, mistakes, bookmarks, and flashcards on this device will be reset to 0%."),
              danger: true,
              requirePin: true,
              okLabel: ui("Xác thực & Reset 0%", "Verify & Reset 0%"),
              onConfirm: performFullStudyReset
            });
          }, 40);
        }
      });
    } else if (/^(?:!?reset\s+)?\d{6,16}$/i.test(rawTrim)) {
      const pinCandidate = rawTrim.replace(/^!?reset\s+/i, "");
      if (verifyAdminPin(pinCandidate)) {
        res.push({
          ico: I.unlock,
          title: ui("Khôi phục toàn bộ dữ liệu học tập về 0% (Mới hoàn toàn)", "Factory Reset All Study Progress to 0%"),
          sub: ui("Đã xác thực mã khoá · Xoá sạch tiến độ đọc, lịch sử thi thử, câu sai, câu lưu & flashcards", "Admin PIN verified · Clears all personal progress while keeping course materials intact"),
          go: () => {
            const inp = $("#cmdInput");
            if (inp) inp.value = "";
            setTimeout(() => {
              openConfirmModal({
                title: ui("Xác nhận đặt lại toàn bộ về 0%?", "Confirm Full Reset to 0%?"),
                desc: ui("Mã khoá hợp lệ. Thiết bị này sẽ trở về trạng thái 0/27 mục (0%), 0 lượt làm đề, sẵn sàng học mới từ đầu.", "PIN verified. This browser will return to 0/27 sections (0%) and 0 attempts for a fresh start."),
                danger: true,
                okLabel: ui("Đặt lại về 0% ngay", "Reset to 0% Now"),
                onConfirm: performFullStudyReset
              });
            }, 40);
          }
        });
        res.push({
          ico: I.trash,
          title: ui("Chỉ xoá lịch sử các lượt thi thử (Giữ nguyên tiến độ đọc & câu lưu)", "Clear Exam Attempt History Only"),
          sub: ui("Đã xác thực mã khoá · Đặt lại thống kê lượt làm đề về 0", "Admin PIN verified · Clears recorded quiz attempts only"),
          go: () => {
            const inp = $("#cmdInput");
            if (inp) inp.value = "";
            store.set("attempts", []);
            SFX.complete();
            showToast(ui("Đã xoá lịch sử các phiên làm đề", "Attempt history cleared"));
            render(false);
          }
        });
      }
    }

    CHAPTERS.forEach((ch) => {
      ch.sections.forEach((s, idx) => {
        const hay = `${s.id} ${s.title} ${s.titleVi || ""} ${ch.titleVi || ""}`.toLowerCase();
        if (!kw || hay.includes(kw)) {
          res.push({
            ico: I.book,
            title: `Ch.0${ch.id} · ${s.id} ${Lp(s, "title")}`,
            sub: Lp(ch, "title"),
            go: () => nav("chapter", { ch: ch.id, sec: idx })
          });
        }
      });
    });

    if (kw.length >= 2) {
      FLASHCARDS.forEach((f, idx) => {
        if (res.length < 36 && `${f.front} ${f.frontVi || ""} ${f.back} ${f.backVi || ""}`.toLowerCase().includes(kw)) {
          res.push({
            ico: I.layers,
            title: `${f.frontVi || f.front} — ${f.front}`,
            sub: f.backVi || f.back,
            go: () => nav("revision", { revTab: "fc", fcCh: 0, fcFilter: "all", fcOrder: null, fcIdx: idx, fcBack: false, fcTable: false })
          });
        }
      });
      for (const m of MCQS) {
        if (res.length >= 52) break;
        if (`${m.id} ${m.q} ${m.qVi || ""}`.toLowerCase().includes(kw)) {
          res.push({
            ico: I.list,
            title: `[${m.id}] ${m.qVi || m.q}`,
            sub: `${ui("Trắc nghiệm Chương", "MCQ Ch.")} 0${m.ch}`,
            go: () => nav("bank", { bankCh: 0, bankLv: 0, bankFilter: "all", bankSearch: m.id, bankPage: 0 })
          });
        }
      }
      for (const e of ESSAYS) {
        if (res.length >= 64) break;
        if (`${e.id} ${e.q} ${e.qVi || ""}`.toLowerCase().includes(kw)) {
          res.push({
            ico: I.pen,
            title: `[${e.id}] ${(e.qVi || e.q).replace(/<[^>]+>/g, "").slice(0, 90)}`,
            sub: `${ui("Tự luận Chương", "Essay Ch.")} 0${e.ch} · ${e.marks}đ`,
            go: () => nav("essays", { essayCh: 0, essayType: "", essayExam: "", essaySearch: e.id })
          });
        }
      }
    }

    const box = $("#cmdResults");
    const top = res.slice(0, 28);
    state.cmdActiveIdx = 0;
    box._items = top;
    box.innerHTML = top.length
      ? top.map((r, i) => `
          <div class="cmd-row ${i === 0 ? "active" : ""}" data-ci="${i}">
            ${r.ico}
            <div class="cmd-row-main">
              <div class="cmd-row-title">${esc(r.title)}</div>
              <div class="cmd-row-sub">${esc(String(r.sub || "").replace(/<[^>]+>/g, ""))}</div>
            </div>
          </div>`).join("")
      : `<div class="muted small" style="padding:22px;text-align:center">${ui("Không tìm thấy mục nào khớp từ khoá.", "No matching entries.")}</div>`;

    box.querySelectorAll("[data-ci]").forEach((el) => {
      el.onmouseenter = () => { state.cmdActiveIdx = +el.dataset.ci; updateCmdHighlight(); };
      el.onclick = () => {
        const it = top[+el.dataset.ci];
        closeCmd();
        if (it) it.go();
      };
    });
  }

  /* ======================================================================
     RENDER & SHELL INITIALIZATION
     ====================================================================== */
  let prevMobGliderX = null;
  let mobStretchTimer = 0;

  function syncMobTabGlider(immediate) {
    const bar = $("#mobTabbar");
    const glider = $("#mobTabGlider");
    if (!bar || !glider) return;
    const active = bar.querySelector(".mob-tab.active");
    if (!active || !active.offsetWidth) {
      bar.classList.remove("glider-ready");
      prevMobGliderX = null;
      return;
    }
    const nextX = active.offsetLeft;
    const nextW = active.offsetWidth;
    const firstMount = !bar.classList.contains("glider-ready") || immediate || prevMobGliderX === null;
    clearTimeout(mobStretchTimer);

    if (firstMount) {
      glider.style.transition = "none";
      glider.style.setProperty("--gw", nextW.toFixed(1) + "px");
      glider.style.setProperty("--gx", nextX.toFixed(1) + "px");
      glider.style.setProperty("--gsx", "1");
      glider.style.setProperty("--gsy", "1");
      void glider.offsetWidth;
      glider.style.transition = "";
      bar.classList.add("glider-ready");
    } else {
      const dist = Math.abs(nextX - prevMobGliderX);
      glider.style.setProperty("--gw", nextW.toFixed(1) + "px");
      glider.style.setProperty("--gx", nextX.toFixed(1) + "px");
      if (dist > 6) {
        const stretchX = Math.min(1.12, 1 + dist / 1400);
        glider.style.setProperty("--gsx", stretchX.toFixed(3));
        glider.style.setProperty("--gsy", "0.94");
        mobStretchTimer = setTimeout(() => {
          glider.style.setProperty("--gsx", "1");
          glider.style.setProperty("--gsy", "1");
        }, 145);
      }
    }
    prevMobGliderX = nextX;
  }

  function syncMobTabbar(immediateGlider) {
    const bar = $("#mobTabbar");
    if (!bar) return;
    const drawerOpen = document.body.classList.contains("mob-rail-open");
    const moreViews = new Set(["syllabus", "essays", "revision", "cases", "caseRead", "labs", "stats"]);
    const curKey = drawerOpen
      ? "more"
      : (state.view === "examRun" ? "exam" : (moreViews.has(state.view) ? "more" : state.view));
    bar.querySelectorAll(".mob-tab").forEach((b) => {
      b.classList.toggle("active", b.dataset.mtab === curKey);
    });
    const setLbl = (k, vi, en) => {
      const el = bar.querySelector(`[data-mlbl="${k}"]`);
      if (el) el.textContent = ui(vi, en);
    };
    setLbl("home", "Tổng quan", "Overview");
    setLbl("chapter", "Bài giảng", "Chapters");
    setLbl("bank", "Trắc nghiệm", "MCQs");
    setLbl("exam", "Thi thử", "Exam");
    setLbl("more", "Danh mục", "Menu");

    const dot = $("#mobExamDot");
    if (dot) dot.classList.toggle("hidden", !(state.quiz && !state.quiz.done));
    const wb = $("#mobWrongBadge");
    if (wb) {
      const wc = Object.keys(getWrongMcq()).length;
      wb.textContent = wc > 99 ? "99+" : String(wc);
      wb.classList.toggle("hidden", wc === 0);
    }
    syncMobTabGlider(!!immediateGlider);
  }

  function render() {
    const main = $("#pageWrap");
    if (!main) return;
    main.classList.remove("page-wide");
    if (state.view !== "chapter") activeHeadings = [];
    renderRail();
    updateCrumb();
    syncMobTabbar();

    document.querySelectorAll("#langSeg button, #langSegMob button").forEach((b) => b.classList.toggle("active", b.dataset.lang === LANG()));
    updateSegThumb($("#langSeg"));
    updateSegThumb($("#langSegMob"));
    const mobLang = $("#btnMobLang");
    if (mobLang) mutateBtn(mobLang, (b) => { b.textContent = LANG() === "bi" ? "VI·EN" : LANG().toUpperCase(); });
    const pwaBtn = $("#btnPwaInstall");
    if (pwaBtn) mutateBtn(pwaBtn, (b) => { b.innerHTML = `${I.download} <span>${ui("Cài ứng dụng về máy (PWA)", "Install Offline App")}</span>`; });
    const sl = $("#searchPlaceholder");
    if (sl) sl.textContent = ui("Tìm kiếm...", "Search...");

    switch (state.view) {
      case "home": renderHome(main); break;
      case "syllabus": renderSyllabus(main); break;
      case "chapter": renderChapter(main); break;
      case "exam": renderExamSetup(main); break;
      case "examRun": renderExamRun(main); break;
      case "bank": renderBank(main); break;
      case "essays": renderEssays(main); break;
      case "revision": renderRevision(main); break;
      case "cases": renderCasesList(main); break;
      case "caseRead": renderCaseRead(main); break;
      case "labs": renderLabs(main); break;
      case "stats": renderStats(main); break;
      default: renderHome(main);
    }
    upgradeNativeTitles(main);
    syncSlidingControls(main);
    onWindowScroll();
  }

  function syncTocInk(immediate) {
    const tocEl = $("#onPageToc");
    const ink = $("#tocInk");
    if (!tocEl || !ink) return;
    const act = tocEl.querySelector(".toc-link.active");
    if (!act || !act.offsetHeight) {
      ink.style.opacity = "0";
      return;
    }
    const y = relY(act, tocEl);
    const h = Math.max(16, act.offsetHeight - 6);
    if (immediate) ink.style.transition = "none";
    ink.style.height = h + "px";
    ink.style.transform = `translateY(${(y + 3).toFixed(1)}px)`;
    ink.style.opacity = "1";
    if (immediate) {
      void ink.offsetWidth;
      ink.style.transition = "";
    }
  }

  function flushWindowScrollUi() {
    scrollSyncRaf = 0;
    const sy = window.scrollY;
    const docH = getMaxScrollY();
    const pct = docH > 20 ? Math.min(100, Math.max(0, (sy / docH) * 100)) : 0;

    // 100% GPU Compositor scaleX progress bar (zero layout/blur invalidation!)
    const bar = $("#scrollProgress");
    if (bar) {
      const ratio = (state.view === "chapter" || state.view === "caseRead") ? (pct / 100) : 0;
      bar.style.transform = `scaleX(${ratio.toFixed(4)})`;
    }

    // Floating Scroll-to-Top Ring Button (only mutates SVG dashoffset when visible & delta >= 0.35%)
    const fab = $("#scrollFab");
    if (fab) {
      const showFab = sy > 360;
      fab.classList.toggle("visible", showFab);
      if (showFab && Math.abs(pct - lastFabPct) >= 0.35) {
        lastFabPct = pct;
        const fabArc = $("#scrollFabArc");
        if (fabArc) {
          const c = 106.814;
          fabArc.style.strokeDashoffset = (c * (1 - pct / 100)).toFixed(1);
        }
      }
    }

    // Live scroll-spy for "On this page" TOC (coalesced to max 1 check per display frame)
    if (state.view === "chapter" && activeHeadings.length) {
      let curId = activeHeadings[0].id;
      for (let i = 0; i < activeHeadings.length; i++) {
        const h = activeHeadings[i];
        if (h.getBoundingClientRect().top <= 128) curId = h.id;
      }
      const tocEl = $("#onPageToc");
      if (tocEl) {
        let changed = false;
        tocEl.querySelectorAll("[data-scroll-id]").forEach((a) => {
          const isNow = a.dataset.scrollId === curId;
          if (a.classList.contains("active") !== isNow) {
            a.classList.toggle("active", isNow);
            changed = true;
          }
        });
        if (changed) syncTocInk(false);
      }
    }
  }

  function onWindowScroll() {
    if (!isPageScrolling) {
      isPageScrolling = true;
      document.documentElement.classList.add("is-scrolling");
      if (!activeTipTarget || !activeTipTarget.closest || !activeTipTarget.closest(".topbar, .rail, .mob-tabbar")) {
        hideFloatTip(true);
      }
      const selPop = $("#selPopover");
      if (selPop && selPop.classList.contains("show")) selPop.classList.remove("show");
    }
    clearTimeout(scrollIdleTimer);
    scrollIdleTimer = setTimeout(() => {
      isPageScrolling = false;
      document.documentElement.classList.remove("is-scrolling");
      if (onScrollSettledHook) onScrollSettledHook();
    }, 130);

    if (!scrollSyncRaf) {
      scrollSyncRaf = requestAnimationFrame(flushWindowScrollUi);
    }
  }

  function boot() {
    const tbLeft = document.querySelector(".topbar .tb-left");
    if (tbLeft && !$("#streakPill")) {
      const sp = document.createElement("div");
      sp.id = "streakPill";
      sp.className = "streak-pill hidden";
      tbLeft.appendChild(sp);
    }

    if ($("#brandMark") && !$("#brandMark").children.length) $("#brandMark").innerHTML = I.mark;
    $("#searchTriggerIcon").innerHTML = I.search;
    $("#btnRailToggle").innerHTML = I.sidebar;
    if ($("#btnRailClose")) $("#btnRailClose").innerHTML = I.x;
    if ($("#btnTopSearch")) $("#btnTopSearch").innerHTML = I.search;
    $("#cmdBarIcon").innerHTML = I.search;
    $("#ttsIcon").innerHTML = I.volume;
    $("#ttsStopBtn").innerHTML = I.stop;
    if ($("#scrollFabIcon")) $("#scrollFabIcon").innerHTML = I.arrowUp;
    if ($("#selIcoHl")) $("#selIcoHl").innerHTML = I.highlight;
    if ($("#selIcoFind")) $("#selIcoFind").innerHTML = I.search;
    if ($("#selIcoSpeak")) $("#selIcoSpeak").innerHTML = I.volume;
    if ($("#selIcoCopy")) $("#selIcoCopy").innerHTML = I.copy;
    if ($("#mtIcoHome")) $("#mtIcoHome").innerHTML = I.grid;
    if ($("#mtIcoChapter")) $("#mtIcoChapter").innerHTML = I.book;
    if ($("#mtIcoBank")) $("#mtIcoBank").innerHTML = I.list;
    if ($("#mtIcoExam")) $("#mtIcoExam").innerHTML = I.target;
    if ($("#mtIcoMore")) $("#mtIcoMore").innerHTML = I.layers;

    // Rehydrate active quiz session across tab reloads / mobile background eviction
    restoreActiveQuiz();

    // Support PWA Home Screen Shortcut & Deep-Link URLs (?view=exam, ?view=chapter&ch=3&sec=2, ?view=caseRead&case=...)
    try {
      const sp = new URLSearchParams(window.location.search);
      const qView = sp.get("view");
      const validViews = new Set(["home", "syllabus", "chapter", "exam", "examRun", "bank", "essays", "revision", "cases", "caseRead", "labs", "stats"]);
      if (qView && validViews.has(qView)) {
        if (qView === "examRun" && !state.quiz) {
          state.view = "exam";
        } else if (qView === "caseRead") {
          const cid = sp.get("case");
          if (cid && CASES.some((c) => c.id === cid)) {
            state.view = "caseRead";
            state.caseId = cid;
          } else {
            state.view = "cases";
          }
        } else {
          state.view = qView;
          if (qView === "chapter") {
            const qCh = +sp.get("ch");
            const chObj = CHAPTERS.find((c) => c.id === qCh);
            if (chObj) {
              state.ch = qCh;
              state.expandedCh = qCh;
              const qSec = +sp.get("sec");
              if (!isNaN(qSec) && qSec >= 0 && qSec < chObj.sections.length) state.sec = qSec;
            }
          }
        }
      }
    } catch (e) {}

    syncExamBodyClass();
    syncHistoryState(true);

    // Hardware Back Button (Android) & Swipe-Back (iOS / Desktop) History Handler
    window.addEventListener("popstate", (ev) => {
      if (suppressNextPop) {
        suppressNextPop = false;
        return;
      }
      clearTimeout(overlayReleaseTimer);
      if (hasOpenOverlay() || overlayHistoryActive) {
        overlayHistoryActive = false;
        closeAllTransientOverlays();
        if (ev.state && ev.state.ibc && ev.state.view === state.view && ev.state.ch === state.ch && ev.state.sec === state.sec && ev.state.caseId === state.caseId) {
          return;
        }
      }
      closeAllTransientOverlays();
      const s = ev.state;
      if (s && s.ibc) {
        let nextView = s.view || "home";
        if (nextView === "examRun" && !state.quiz) nextView = "exam";
        nav(nextView, {
          ch: s.ch || state.ch,
          sec: s.sec != null ? s.sec : state.sec,
          caseId: s.caseId || null,
          labGroup: s.labGroup || state.labGroup,
          labKey: s.labKey || state.labKey,
          revTab: s.revTab || state.revTab
        }, { fromPop: true });
      } else {
        nav("home", {}, { fromPop: true });
      }
    });

    // Offline / Online Connectivity Status Toasts
    window.addEventListener("offline", () => {
      showToast(ui("Đang ở chế độ Ngoại tuyến — toàn bộ học liệu vẫn hoạt động 100%", "Offline mode — all course materials remain available"));
    });
    window.addEventListener("online", () => {
      showToast(ui("Đã kết nối lại mạng Internet", "Back online"));
    });

    applyThemeAndScale();

    // Rotating search placeholder ticker in Sidebar
    const searchHintsVi = ["Tìm kiếm...", "Tìm WACC, DCF, LBO...", "Tìm M&A, IPO, Dựng sổ...", "Tìm câu Q3-12, E1-01...", "Tìm 56 thuật ngữ..."];
    const searchHintsEn = ["Search...", "Find WACC, DCF, LBO...", "Find M&A, IPO, Bookbuilding...", "Find Q3-12, E1-01...", "Find 56 key terms..."];
    let hintIdx = 0;
    setInterval(() => {
      const rot = $("#searchPlaceholder");
      if (!rot || document.hidden) return;
      const arr = isEn() ? searchHintsEn : searchHintsVi;
      hintIdx = (hintIdx + 1) % arr.length;
      rot.classList.remove("tick");
      void rot.offsetWidth;
      rot.textContent = arr[hintIdx];
      rot.classList.add("tick");
    }, 3800);

    // Direction-Aware Liquid Aurora Portal on Buttons (.btn, .pg-btn, .sec-mini, .m-cell) + Card Spotlight
    const FLAIR_SEL = ".btn, .pg-btn, .sec-mini, .m-cell";
    function getBtnFlair(btn) {
      let f = btn.querySelector(":scope > .btn-flair");
      if (!f) {
        f = document.createElement("span");
        f.className = "btn-flair";
        f.setAttribute("aria-hidden", "true");
        btn.insertBefore(f, btn.firstChild);
      }
      return f;
    }

    document.addEventListener("pointerover", (e) => {
      if (e.pointerType === "touch") return;
      const btn = e.target.closest && e.target.closest(FLAIR_SEL);
      if (!btn || btn.disabled || (e.relatedTarget && btn.contains(e.relatedTarget))) return;
      const r = btn.getBoundingClientRect();
      const x = Math.max(0, Math.min(r.width, e.clientX - r.left));
      const y = Math.max(0, Math.min(r.height, e.clientY - r.top));
      const diameter = Math.ceil(Math.hypot(r.width, r.height) * 2 + 8);
      const flair = getBtnFlair(btn);
      flair.style.width = diameter + "px";
      flair.style.height = diameter + "px";
      const cooledDown = (performance.now() - (btn._outTs || 0)) > 860;
      if (cooledDown && !btn.classList.contains("is-hovered")) {
        flair.style.transition = "none";
        flair.style.left = x.toFixed(1) + "px";
        flair.style.top = y.toFixed(1) + "px";
        void flair.offsetWidth;
        flair.style.transition = "";
      } else {
        flair.style.left = x.toFixed(1) + "px";
        flair.style.top = y.toFixed(1) + "px";
      }
      btn.classList.add("is-hovered");
    }, { passive: true });

    document.addEventListener("pointerout", (e) => {
      if (e.pointerType === "touch") return;
      const btn = e.target.closest && e.target.closest(FLAIR_SEL);
      if (!btn || (e.relatedTarget && btn.contains(e.relatedTarget))) return;
      const r = btn.getBoundingClientRect();
      const x = Math.max(0, Math.min(r.width, e.clientX - r.left));
      const y = Math.max(0, Math.min(r.height, e.clientY - r.top));
      const flair = btn.querySelector(":scope > .btn-flair");
      if (flair) {
        flair.style.left = x.toFixed(1) + "px";
        flair.style.top = y.toFixed(1) + "px";
      }
      btn._outTs = performance.now();
      btn.classList.remove("is-hovered");
    }, { passive: true });

    // Clean Cursor Spotlight & Multi-Card Proximity Specular Rim (60/120fps rAF Tracker)
    const RADAR_SEL = ".spot-surface, .stat-cell, .opt-row:not(.correct):not(.wrong), .matrix-box, .fig-card, .case-card, .result-pill";
    const RADAR_REACH = 220;
    let radarRaf = 0;
    let lastPtrX = -9999;
    let lastPtrY = -9999;
    let lastPtrTarget = null;
    const activeRadarCards = new Set();

    function clearAllRadarCards() {
      activeRadarCards.forEach((el) => {
        el.classList.remove("is-radar-near", "is-radar-inside", "is-radar-subdued");
        el.style.removeProperty("--spot-prox");
      });
      activeRadarCards.clear();
    }

    function updateRadarField() {
      radarRaf = 0;
      const cx = lastPtrX;
      const cy = lastPtrY;
      if (cx < -1000 || cy < -1000 || document.documentElement.classList.contains("vt-switching")) {
        clearAllRadarCards();
        return;
      }
      const hitTarget = document.elementFromPoint(cx, cy) || lastPtrTarget;
      if (hitTarget && hitTarget.closest && hitTarget.closest(".topbar, .rail, .mob-tabbar, .overlay:not(.hidden)")) {
        clearAllRadarCards();
        return;
      }
      const overBtn = !!(hitTarget && hitTarget.closest && hitTarget.closest(".btn, .pg-btn, .sec-mini, .m-cell"));
      const innermostCard = hitTarget && hitTarget.closest ? hitTarget.closest(RADAR_SEL) : null;

      const vh = window.innerHeight || 900;
      const vw = window.innerWidth || 1440;
      const candidates = document.querySelectorAll(RADAR_SEL);
      const nextActive = new Set();

      for (let i = 0; i < candidates.length; i++) {
        const el = candidates[i];
        if (el.classList.contains("fc-3d-back") && !el.closest(".is-flipped")) continue;
        if (el.classList.contains("fc-3d-front") && el.closest(".is-flipped")) continue;
        const r = el.getBoundingClientRect();
        if (r.width < 10 || r.height < 10) continue;
        if (r.bottom < -RADAR_REACH || r.top > vh + RADAR_REACH || r.right < -RADAR_REACH || r.left > vw + RADAR_REACH) continue;

        const dx = cx < r.left ? r.left - cx : (cx > r.right ? cx - r.right : 0);
        const dy = cy < r.top ? r.top - cy : (cy > r.bottom ? cy - r.bottom : 0);
        const dist = Math.hypot(dx, dy);

        if (dist <= RADAR_REACH) {
          nextActive.add(el);
          el.style.setProperty("--mx", (cx - r.left).toFixed(1) + "px");
          el.style.setProperty("--my", (cy - r.top).toFixed(1) + "px");
          const inside = dx === 0 && dy === 0;
          const prox = inside ? 1 : Math.pow(Math.max(0, 1 - dist / RADAR_REACH), 1.4);
          el.style.setProperty("--spot-prox", prox.toFixed(3));
          el.classList.add("is-radar-near");
          el.classList.toggle("is-radar-inside", inside);
          const hasInnerCard = inside && innermostCard && innermostCard !== el && el.contains(innermostCard);
          el.classList.toggle("is-radar-subdued", !!(inside && (hasInnerCard || overBtn)));
        }
      }

      activeRadarCards.forEach((el) => {
        if (!nextActive.has(el)) {
          el.classList.remove("is-radar-near", "is-radar-inside", "is-radar-subdued");
          el.style.removeProperty("--spot-prox");
        }
      });
      activeRadarCards.clear();
      nextActive.forEach((el) => activeRadarCards.add(el));
    }

    function scheduleRadarUpdate() {
      if (!radarRaf) radarRaf = requestAnimationFrame(updateRadarField);
    }
    onScrollSettledHook = () => {
      if (lastPtrX > -1000) scheduleRadarUpdate();
    };

    document.addEventListener("pointermove", (e) => {
      if (e.pointerType === "touch") return;
      const btn = e.target.closest && e.target.closest(FLAIR_SEL);
      if (btn && !btn.disabled && btn.classList.contains("is-hovered")) {
        const rb = btn.getBoundingClientRect();
        const x = Math.max(0, Math.min(rb.width, e.clientX - rb.left));
        const y = Math.max(0, Math.min(rb.height, e.clientY - rb.top));
        const flair = getBtnFlair(btn);
        flair.style.left = x.toFixed(1) + "px";
        flair.style.top = y.toFixed(1) + "px";
      }
      autoScrollSoftHold = !!(e.target && e.target.closest && e.target.closest(".btn, .opt-row, .sec-mini, .csel-btn, input, select, textarea"));
      lastPtrX = e.clientX;
      lastPtrY = e.clientY;
      lastPtrTarget = e.target;
      // Skip expensive card spotlight rasterization during fast manual scrolling, while keeping pointer hover responsive during gentle auto-scroll
      if (!isPageScrolling || autoScrollActive) scheduleRadarUpdate();
    }, { passive: true });

    // Lenis-Grade Silky Mouse-Wheel Inertia (for notched desktop mouse wheels) + Instant Auto-Scroll Pause
    const fineDesktopMedia = window.matchMedia ? window.matchMedia("(hover: hover) and (pointer: fine)") : { matches: false };
    const reduceMotionMedia = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };

    function isInsideInnerScrollable(target, deltaY) {
      let el = target && target.nodeType === 1 ? target : (target && target.parentElement);
      while (el && el !== document.body && el !== document.documentElement) {
        if (el.tagName === "TEXTAREA") return true;
        const st = getComputedStyle(el);
        const oy = st.overflowY;
        if ((oy === "auto" || oy === "scroll") && el.scrollHeight > el.clientHeight + 1) {
          if (deltaY < 0 && el.scrollTop > 0) return true;
          if (deltaY > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1) return true;
        }
        el = el.parentElement;
      }
      return false;
    }

    function runWheelGlide(now) {
      const dt = wheelLastTs ? Math.min(0.05, Math.max(0.001, (now - wheelLastTs) / 1000)) : 0.016;
      wheelLastTs = now;
      const diff = wheelTargetY - wheelCurY;
      if (Math.abs(diff) < 0.45) {
        window.scrollTo(0, wheelTargetY);
        wheelCurY = wheelTargetY;
        wheelRaf = 0;
        wheelLastTs = 0;
        return;
      }
      // Frame-rate independent exponential silk damping (identical feel on 60Hz, 120Hz, 144Hz, 240Hz!)
      const alpha = 1 - Math.pow(0.00045, dt);
      wheelCurY += diff * alpha;
      window.scrollTo(0, wheelCurY);
      wheelRaf = requestAnimationFrame(runWheelGlide);
    }

    window.addEventListener("wheel", (e) => {
      if (autoScrollActive || autoScrollBootTimer) stopAutoScroll(true);
      if (programmaticScrollAnim) {
        cancelAnimationFrame(programmaticScrollAnim);
        programmaticScrollAnim = 0;
      }
      if (!fineDesktopMedia.matches || reduceMotionMedia.matches) return;
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.defaultPrevented) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) * 0.45) return;

      // Normalize line/page wheel modes; leave continuous sub-36px precision touchpad gestures 100% native!
      let dy = e.deltaY;
      if (e.deltaMode === 1) dy *= 36;
      else if (e.deltaMode === 2) dy *= window.innerHeight * 0.85;
      else if (Math.abs(dy) < 38 && Number.isInteger(dy)) return;
      else if (!Number.isInteger(dy) && Math.abs(dy) < 42) return;

      if (isInsideInnerScrollable(e.target, dy)) return;

      e.preventDefault();
      invalidateScrollMetrics();
      const maxY = getMaxScrollY();
      if (!wheelRaf) {
        wheelCurY = window.scrollY;
        wheelTargetY = window.scrollY;
        wheelLastTs = 0;
      }
      wheelTargetY = Math.max(0, Math.min(maxY, wheelTargetY + dy * 0.96));
      if (!wheelRaf) wheelRaf = requestAnimationFrame(runWheelGlide);
    }, { passive: false });

    window.addEventListener("touchstart", (e) => {
      const inChrome = e.target && e.target.closest && e.target.closest(".topbar, .rail, .mob-tabbar");
      if (!inChrome && (autoScrollActive || autoScrollBootTimer)) stopAutoScroll(true);
      stopWheelInertia();
    }, { passive: true });

    window.addEventListener("mousedown", (e) => {
      // Clicking native scrollbar thumb/track immediately yields control
      if (e.clientX >= document.documentElement.clientWidth - 16) {
        if (autoScrollActive || autoScrollBootTimer) stopAutoScroll(true);
        stopWheelInertia();
      }
    }, { passive: true });

    document.addEventListener("pointerleave", () => {
      autoScrollSoftHold = false;
      lastPtrX = -9999;
      lastPtrY = -9999;
      clearAllRadarCards();
    }, { passive: true });

    window.addEventListener("blur", () => {
      lastPtrX = -9999;
      lastPtrY = -9999;
      clearAllRadarCards();
    });

    // Global Tactile Press Ripple on interactive controls
    document.addEventListener("pointerdown", (e) => {
      if (e.button && e.button !== 0) return;
      const host = e.target.closest && e.target.closest(".btn, .opt-row, .nav-item, .nav-sub, .uline-tab, .pg-btn, .m-cell, .sec-mini, .cmd-row");
      if (host && !e.target.closest(".opt-elim-btn, .ch-chev, #btnTheme, #btnPalette")) {
        if (!host.classList.contains("nav-item") && !host.classList.contains("nav-sub")) {
          spawnRipple(host, e);
        } else {
          if (!host.classList.contains("ripple-host")) host.dataset.dynRipple = "1";
          host.classList.add("ripple-host");
          spawnRipple(host, e);
        }
      }
      if (!e.target.closest("#selPopover")) {
        const pop = $("#selPopover");
        if (pop && pop.classList.contains("show") && (!window.getSelection || !String(window.getSelection()).trim())) {
          pop.classList.remove("show");
        }
      }
    }, { passive: true });

    // Zero-Latency Gliding Custom Tooltip delegation (Desktop pointer only — prevents sticky touch tooltips)
    document.addEventListener("pointerover", (e) => {
      if (e.pointerType === "touch") return;
      const t = e.target.closest && e.target.closest("[data-tip]");
      if (t) scheduleFloatTip(t);
      else if (activeTipTarget) hideFloatTip(false);
    }, { passive: true });
    document.addEventListener("pointerdown", (e) => {
      hideFloatTip(true);
      if (activeCselBtn && !e.target.closest("#cselPortal") && !e.target.closest(".csel-btn")) {
        closeCustomSelect();
      }
    }, { passive: true });

    // Scroll glow feedback (.is-scrolling) on root & inner scrollable containers
    document.addEventListener("scroll", (e) => {
      if (activeCselBtn && e.target && e.target.id !== "cselPortal") closeCustomSelect();
      const t = e.target === document ? document.documentElement : e.target;
      if (t && t.classList) {
        t.classList.add("is-scrolling");
        clearTimeout(t._scrT);
        t._scrT = setTimeout(() => t.classList.remove("is-scrolling"), 700);
      }
    }, { capture: true, passive: true });

    // Floating Text-Selection Study Bar inside Lecture & Case Study Prose
    let currentSelectedText = "";
    let currentSelectedRange = null;
    const pop = $("#selPopover");
    const checkProseSelection = () => {
      if (!pop) return;
      const sel = window.getSelection && window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) {
        pop.classList.remove("show");
        return;
      }
      const txt = String(sel).trim();
      if (txt.length < 2 || txt.length > 260) {
        pop.classList.remove("show");
        return;
      }
      const range = sel.getRangeAt(0);
      const anc = range.commonAncestorContainer.nodeType === 1 ? range.commonAncestorContainer : range.commonAncestorContainer.parentElement;
      if (!anc || !anc.closest(".prose")) {
        pop.classList.remove("show");
        return;
      }
      const rect = range.getBoundingClientRect();
      if (!rect.width && !rect.height) return;
      currentSelectedText = txt;
      currentSelectedRange = range.cloneRange();
      pop.classList.add("show");
      const halfW = Math.min(window.innerWidth / 2 - 8, ((pop.offsetWidth || 280) / 2) + 8);
      const x = Math.max(halfW, Math.min(window.innerWidth - halfW, rect.left + rect.width / 2));
      const placeBelow = rect.top < 108;
      const y = placeBelow ? Math.min(window.innerHeight - 76, rect.bottom) : rect.top;
      pop.classList.toggle("below", placeBelow);
      pop.style.left = Math.round(x) + "px";
      pop.style.top = Math.round(y) + "px";
      if ($("#selIcoCopy")) $("#selIcoCopy").innerHTML = I.copy;
      if ($("#selLblCopy")) $("#selLblCopy").textContent = ui("Chép", "Copy");
    };
    document.addEventListener("pointerup", () => setTimeout(checkProseSelection, 15));
    document.addEventListener("keyup", (e) => { if (e.shiftKey) checkProseSelection(); });

    if (pop) {
      pop.onpointerdown = (e) => e.preventDefault(); // Keep text selection intact while clicking toolbar!
      $("#selBtnHl").onclick = () => {
        if (!currentSelectedRange) return;
        try {
          const mark = document.createElement("mark");
          mark.className = "user-hl";
          mark.setAttribute("data-tip", ui("Bấm để bỏ tô sáng", "Click to remove highlight"));
          mark.onclick = function (ev) {
            ev.stopPropagation();
            SFX.tap();
            const parent = this.parentNode;
            while (this.firstChild) parent.insertBefore(this.firstChild, this);
            parent.removeChild(this);
          };
          currentSelectedRange.surroundContents(mark);
          SFX.correct(1);
          spawnMicroBurst(mark, "var(--warn)");
          showToast(ui("Đã tô sáng khái niệm quan trọng", "Highlighted key phrase"));
        } catch (err) {
          if (navigator.clipboard) navigator.clipboard.writeText(currentSelectedText).catch(() => {});
          SFX.tap();
          showToast(ui("Đã sao chép đoạn bôi đen (đoạn trải qua nhiều thẻ)", "Copied multi-block selection"));
        }
        window.getSelection().removeAllRanges();
        pop.classList.remove("show");
      };
      $("#selBtnFind").onclick = () => {
        const kw = currentSelectedText.slice(0, 48);
        window.getSelection().removeAllRanges();
        pop.classList.remove("show");
        openCmd();
        const inp = $("#cmdInput");
        if (inp) {
          inp.value = kw;
          renderCmdList(kw);
        }
      };
      $("#selBtnSpeak").onclick = () => {
        SFX.tap();
        startTTS(currentSelectedText.slice(0, 32), currentSelectedText);
        pop.classList.remove("show");
      };
      $("#selBtnCopy").onclick = () => {
        if (navigator.clipboard) navigator.clipboard.writeText(currentSelectedText).catch(() => {});
        SFX.correct(1);
        $("#selIcoCopy").innerHTML = I.checkDraw;
        $("#selLblCopy").textContent = ui("Đã chép", "Copied");
        showToast(ui("Đã sao chép vào bộ nhớ tạm", "Copied to clipboard"));
        setTimeout(() => {
          window.getSelection().removeAllRanges();
          pop.classList.remove("show");
        }, 420);
      };
    }

    document.addEventListener("input", (e) => {
      const t = e.target;
      if (t && t.tagName === "INPUT" && t.type === "range") {
        updateRangeFill(t);
        const ctl = t.closest(".ctl");
        const valEl = ctl && ctl.querySelector(".val");
        if (valEl) {
          valEl.classList.add("val-pop");
          clearTimeout(valEl._popT);
          valEl._popT = setTimeout(() => valEl.classList.remove("val-pop"), 150);
        }
      }
    }, { passive: true });

    // Persistent Precision Sidebar Hover & Click Choreography
    const railNav = $("#railNav");
    railNav.addEventListener("pointerover", (e) => {
      railHoverTarget = e.target.closest(".nav-item");
      syncRailHoverPill();
    });
    railNav.addEventListener("pointerleave", () => {
      railHoverTarget = null;
      syncRailHoverPill();
    });
    let railScrollSettle = 0;
    railNav.addEventListener("scroll", () => {
      hideFloatTip(true);
      if (railHoverTarget) {
        railHoverTarget = null;
        syncRailHoverPill();
      }
      clearTimeout(railScrollSettle);
      railScrollSettle = setTimeout(() => {
        if (lastPtrX > -1000) {
          const hit = document.elementFromPoint(lastPtrX, lastPtrY);
          const ni = hit && hit.closest && hit.closest("#railNav .nav-item");
          if (ni) {
            railHoverTarget = ni;
            syncRailHoverPill();
          }
        }
      }, 110);
    }, { passive: true });

    railNav.addEventListener("click", (e) => {
      const chevBtn = e.target.closest("[data-ch-toggle]");
      if (chevBtn) {
        e.stopPropagation();
        SFX.tap();
        const cid = +chevBtn.dataset.chToggle;
        state.expandedCh = state.expandedCh === cid ? 0 : cid;
        renderRail();
        return;
      }
      const sub = e.target.closest("[data-ch-sec]");
      if (sub) {
        const [c, s] = sub.dataset.chSec.split("|").map(Number);
        nav("chapter", { ch: c, sec: s });
        return;
      }
      const chHead = e.target.closest("[data-ch-head]");
      if (chHead) {
        const cid = +chHead.dataset.chHead;
        if (state.view === "chapter" && state.ch === cid) {
          SFX.tap();
          state.expandedCh = state.expandedCh === cid ? 0 : cid;
          renderRail();
        } else {
          nav("chapter", { ch: cid, sec: 0 });
        }
        return;
      }
      const it = e.target.closest("[data-nav]");
      if (!it) return;
      const v = it.dataset.nav;
      if (v === "exam" && state.quiz && !state.quiz.done) nav("examRun");
      else nav(v);
    });

    const setMobRail = (open) => {
      const wasOpen = document.body.classList.contains("mob-rail-open");
      if (wasOpen === open) return;
      document.body.classList.toggle("mob-rail-open", open);
      syncMobTabbar(false);
      if (open) {
        document.body.classList.remove("mob-exam-sheet-open");
        pushOverlayHistory();
        if (navigator.serviceWorker && navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({ type: "CHECK_OFFLINE_STATUS" });
        }
        setTimeout(() => {
          updateSegThumb($("#langSegMob"));
          syncRailActivePosition("instant");
        }, 25);
      } else {
        scheduleOverlayHistoryRelease();
      }
    };

    $("#railHead").onclick = (e) => {
      if (e.target.closest("#btnRailClose")) return;
      nav("home");
    };
    if ($("#btnRailClose")) {
      $("#btnRailClose").onclick = (e) => {
        e.stopPropagation();
        SFX.tap();
        setMobRail(false);
      };
    }
    $("#btnRailToggle").onclick = () => {
      SFX.tap();
      if (window.innerWidth <= 900) setMobRail(!document.body.classList.contains("mob-rail-open"));
      else {
        if (zenMode) zenMode = false;
        document.body.classList.toggle("rail-collapsed");
        applyThemeAndScale();
        setTimeout(() => {
          invalidateScrollMetrics();
          syncSlidingControls(document);
          syncTocInk(true);
          if (onScrollSettledHook) onScrollSettledHook();
        }, 280);
      }
    };
    $("#railBackdrop").onclick = () => setMobRail(false);
    if ($("#examSheetBackdrop")) {
      $("#examSheetBackdrop").onclick = () => {
        document.body.classList.remove("mob-exam-sheet-open");
        scheduleOverlayHistoryRelease();
      };
    }

    // Touch swipe-left to close mobile navigation drawer naturally
    const railEl = $("#appRail") || document.querySelector(".rail");
    if (railEl) {
      let rx0 = null, ry0 = null;
      railEl.addEventListener("touchstart", (e) => {
        if (!e.touches || e.touches.length !== 1) return;
        rx0 = e.touches[0].clientX;
        ry0 = e.touches[0].clientY;
      }, { passive: true });
      railEl.addEventListener("touchend", (e) => {
        if (rx0 === null || !e.changedTouches || !e.changedTouches.length) return;
        const dx = e.changedTouches[0].clientX - rx0;
        const dy = e.changedTouches[0].clientY - ry0;
        rx0 = null; ry0 = null;
        if (dx < -55 && Math.abs(dy) < 48 && document.body.classList.contains("mob-rail-open")) {
          setMobRail(false);
        }
      }, { passive: true });
    }

    // Native Mobile Bottom Tabbar Navigation (Tap active tab while scrolled -> smooth scroll to top!)
    if ($("#mobTabbar")) {
      $("#mobTabbar").addEventListener("click", (e) => {
        const t = e.target.closest("[data-mtab]");
        if (!t) return;
        const k = t.dataset.mtab;
        if (k === "more") {
          SFX.tap();
          setMobRail(!document.body.classList.contains("mob-rail-open"));
          return;
        }
        const targetView = k === "exam" ? (state.quiz && !state.quiz.done ? "examRun" : "exam") : k;
        if (state.view === targetView && !document.body.classList.contains("mob-rail-open")) {
          t.classList.remove("rebound");
          void t.offsetWidth;
          t.classList.add("rebound");
          setTimeout(() => t.classList.remove("rebound"), 400);
          if (window.scrollY > 40) {
            SFX.tap();
            smoothScrollToY(0, 480);
          } else {
            SFX.tap();
          }
          return;
        }
        if (k === "exam") {
          nav(targetView);
          return;
        }
        if (k === "chapter") {
          nav("chapter", { ch: state.ch || 1, sec: state.sec || 0 });
          return;
        }
        nav(k);
      });
    }

    const switchLangTo = (lg) => {
      if (!window.I18N || lg === LANG()) return;
      SFX.tap();
      window.I18N.set(lg);
      render();
      enhanceSelects(document);
    };
    $("#langSeg").addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (b) switchLangTo(b.dataset.lang);
    });
    if ($("#langSegMob")) {
      $("#langSegMob").addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (b) switchLangTo(b.dataset.lang);
      });
    }
    if ($("#btnMobLang")) {
      $("#btnMobLang").onclick = () => {
        const order = ["vi", "bi", "en"];
        const nextLg = order[(order.indexOf(LANG()) + 1) % order.length];
        switchLangTo(nextLg);
        const names = { vi: "Tiếng Việt (VI)", bi: "Song ngữ (VI · EN)", en: "English (EN)" };
        showToast(names[nextLg]);
      };
    }

    $("#btnTheme").onclick = toggleThemeWithRipple;
    if ($("#btnPalette")) $("#btnPalette").onclick = cyclePaletteWithRipple;
    if ($("#btnZen")) $("#btnZen").onclick = toggleZenMode;
    const cycleScale = () => {
      SFX.tap();
      scale = SCALES[(SCALES.indexOf(scale) + 1) % SCALES.length];
      try { localStorage.setItem("ibc_scale", scale); } catch (e) {}
      applyThemeAndScale();
      syncSlidingControls(document);
      syncRailActivePosition("instant");
      showToast(ui(`Cỡ chữ đọc bài: ${scale.toUpperCase()}`, `Font scale: ${scale.toUpperCase()}`));
    };
    $("#btnScale").onclick = cycleScale;
    if ($("#btnScaleMob")) $("#btnScaleMob").onclick = cycleScale;

    const toggleSoundPref = () => {
      soundOn = !soundOn;
      try { localStorage.setItem("ibc_sfx", soundOn ? "1" : "0"); } catch (e) {}
      applyThemeAndScale();
      if (soundOn) SFX.tap();
      showToast(soundOn ? ui("Đã bật âm thanh phản hồi nhẹ", "Tactile sound enabled") : ui("Đã tắt âm thanh phản hồi", "Tactile sound muted"));
    };
    if ($("#btnSound")) $("#btnSound").onclick = toggleSoundPref;
    if ($("#btnSoundMob")) $("#btnSoundMob").onclick = toggleSoundPref;
    if ($("#btnAutoScroll")) {
      $("#btnAutoScroll").onclick = toggleAutoScroll;
      $("#btnAutoScroll").oncontextmenu = (ev) => {
        ev.preventDefault();
        toggleAutoScroll({ shiftKey: true });
      };
    }
    if ($("#btnAutoScrollMob")) {
      $("#btnAutoScrollMob").onclick = (ev) => {
        toggleAutoScroll(ev);
        setMobRail(false);
      };
    }

    if ($("#scrollFab")) {
      $("#scrollFab").onclick = () => {
        SFX.tap();
        smoothScrollToY(0, 520);
      };
    }

    window.addEventListener("resize", () => {
      invalidateScrollMetrics();
      closeCustomSelect();
      if (window.innerWidth > 900) document.body.classList.remove("mob-rail-open");
      if (window.innerWidth > 960) document.body.classList.remove("mob-exam-sheet-open");
      syncSlidingControls(document);
      syncMobTabGlider(true);
      syncRailActivePosition("instant");
      syncTocInk(true);
    }, { passive: true });

    $("#btnOpenSearch").onclick = () => { setMobRail(false); flashKeycap("ctrlk"); openCmd(); };
    if ($("#btnTopSearch")) $("#btnTopSearch").onclick = () => openCmd();
    if ($("#cmdCloseBtn")) $("#cmdCloseBtn").onclick = () => { SFX.tap(); closeCmd(); };
    $("#cmdOverlay").onclick = (e) => { if (e.target.id === "cmdOverlay") closeCmd(); };

    // Progressive Web App (PWA): Service Worker Registration & Install Prompt
    let deferredPwaPrompt = null;
    const isStandalone = (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;
    const isIosSafari = !isStandalone && /iphone|ipad|ipod/i.test(navigator.userAgent || "") && !/crios|fxios/i.test(navigator.userAgent || "");
    const pwaInstallBtn = $("#btnPwaInstall");
    if (pwaInstallBtn && isIosSafari) {
      pwaInstallBtn.classList.remove("hidden");
    }
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPwaPrompt = e;
      if (pwaInstallBtn && !isStandalone) pwaInstallBtn.classList.remove("hidden");
    });
    window.addEventListener("appinstalled", () => {
      deferredPwaPrompt = null;
      if (pwaInstallBtn) pwaInstallBtn.classList.add("hidden");
      showToast(ui("Đã cài đặt ứng dụng BAF736 HUB thành công", "App installed successfully"));
    });
    if (pwaInstallBtn) {
      const openIosPwaGuide = () => {
        setMobRail(false);
        openConfirmModal({
          title: ui("Cài đặt ứng dụng BAF736 trên iPhone / iPad", "Install BAF736 App on iOS"),
          desc: ui(
            "Nhấn nút Chia sẻ (biểu tượng ô vuông có mũi tên hướng lên ở thanh Safari) -> chọn 'Thêm vào Màn hình chính' (Add to Home Screen) để mở toàn màn hình và học ngoại tuyến 100%.",
            "Tap the Share button in Safari, then choose 'Add to Home Screen' for full-screen standalone offline access."
          ),
          okLabel: ui("Đã hiểu", "Got it"),
          cancelLabel: ui("Đóng", "Close")
        });
      };
      pwaInstallBtn.onclick = async () => {
        SFX.tap();
        if (deferredPwaPrompt && !isIosSafari) {
          try {
            await deferredPwaPrompt.prompt();
            await deferredPwaPrompt.userChoice;
            deferredPwaPrompt = null;
            pwaInstallBtn.classList.add("hidden");
          } catch (e) {}
        } else if (isIosSafari) {
          openIosPwaGuide();
        } else if (deferredPwaPrompt) {
          try {
            await deferredPwaPrompt.prompt();
            await deferredPwaPrompt.userChoice;
          } catch (e) {}
          deferredPwaPrompt = null;
          pwaInstallBtn.classList.add("hidden");
        }
      };
    }
    if ("serviceWorker" in navigator && /^https?:$/i.test(window.location.protocol)) {
      const pwaBadge = $("#pwaReadyBadge");
      let offlineReadyState = false;
      const paintPwaBadge = () => {
        if (!pwaBadge) return;
        if (offlineReadyState) {
          pwaBadge.classList.remove("hidden");
          pwaBadge.innerHTML = `${I.checkXs} <span>${ui("Sẵn sàng Ngoại tuyến 100%", "100% Offline Ready")}</span>`;
        }
      };
      navigator.serviceWorker.addEventListener("message", (ev) => {
        if (ev.data && ev.data.type === "OFFLINE_STATUS" && ev.data.ready) {
          offlineReadyState = true;
          paintPwaBadge();
        }
      });
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js").then((reg) => {
          if (reg.waiting) reg.waiting.postMessage({ type: "SKIP_WAITING" });
          reg.addEventListener("updatefound", () => {
            const nw = reg.installing;
            if (!nw) return;
            nw.addEventListener("statechange", () => {
              if (nw.state === "installed" && navigator.serviceWorker.controller) {
                nw.postMessage({ type: "SKIP_WAITING" });
              }
            });
          });
          if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({ type: "CHECK_OFFLINE_STATUS" });
          }
        }).catch(() => {});
      });
    }

    let cmdComposing = false;
    const cmdInp = $("#cmdInput");
    cmdInp.addEventListener("compositionstart", () => { cmdComposing = true; });
    cmdInp.addEventListener("compositionend", (e) => { cmdComposing = false; renderCmdList(e.target.value); });
    cmdInp.addEventListener("input", (e) => { if (!cmdComposing) renderCmdList(e.target.value); });
    cmdInp.addEventListener("keydown", (e) => {
      const items = ($("#cmdResults") || {})._items || [];
      if (e.key === "Escape") { closeCmd(); return; }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (items.length) { SFX.tap(); state.cmdActiveIdx = (state.cmdActiveIdx + 1) % items.length; updateCmdHighlight(); }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (items.length) { SFX.tap(); state.cmdActiveIdx = (state.cmdActiveIdx - 1 + items.length) % items.length; updateCmdHighlight(); }
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (items[state.cmdActiveIdx]) { closeCmd(); items[state.cmdActiveIdx].go(); }
      }
    });

    $("#ttsPauseBtn").onclick = function () {
      if (!synth) return;
      if (tts.paused) {
        synth.resume();
        tts.paused = false;
        mutateBtn(this, (b) => { b.innerHTML = I.pause; });
      } else {
        synth.pause();
        tts.paused = true;
        mutateBtn(this, (b) => { b.innerHTML = I.play; });
      }
    };
    $("#ttsStopBtn").onclick = stopTTS;

    window.addEventListener("scroll", onWindowScroll, { passive: true });

    document.addEventListener("keydown", (e) => {
      const tag = ((e.target && e.target.tagName) || "").toUpperCase();
      const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (e.target && e.target.isContentEditable);

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault(); flashKeycap("ctrlk"); openCmd(); return;
      }
      if (!typing && e.key === "/") {
        e.preventDefault(); flashKeycap("ctrlk"); openCmd(); return;
      }
      if (e.key === "Escape") {
        closeAllTransientOverlays();
        scheduleOverlayHistoryRelease();
        if (pop) pop.classList.remove("show");
        return;
      }
      if (activeCselSelect && activeCselBtn) {
        const portal = $("#cselPortal");
        if (portal && portal.classList.contains("open")) {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            const opts = [...portal.querySelectorAll("[data-copt]")];
            if (opts.length) {
              SFX.tap();
              let curI = opts.findIndex((o) => o.classList.contains("selected"));
              curI = e.key === "ArrowDown" ? (curI + 1) % opts.length : (curI - 1 + opts.length) % opts.length;
              opts.forEach((o, i) => o.classList.toggle("selected", i === curI));
              opts[curI].scrollIntoView({ block: "nearest" });
            }
            return;
          }
          if (e.key === "Enter") {
            e.preventDefault();
            const selOpt = portal.querySelector(".csel-opt.selected");
            if (selOpt) selOpt.click();
            return;
          }
        }
      }
      if (typing) return;

      // Pause auto-scroll immediately on manual scroll keys
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End"].includes(e.key) || (e.code === "Space" && state.view !== "revision")) {
        if (autoScrollActive || autoScrollBootTimer) stopAutoScroll(true);
        stopWheelInertia();
      }

      if (!e.ctrlKey && !e.metaKey && !e.altKey && e.key.toLowerCase() === "a" && state.view !== "examRun") {
        toggleAutoScroll(e);
        return;
      }

      if (!e.ctrlKey && !e.metaKey && !e.altKey && e.key.toLowerCase() === "z") {
        toggleZenMode();
        return;
      }

      if (state.view === "examRun" && state.quiz && !state.quiz.done && state.quiz.singleMode) {
        const qz = state.quiz;
        const k = e.key.toLowerCase();
        const m = { a: 0, b: 1, c: 2, d: 3, "1": 0, "2": 1, "3": 2, "4": 3 };
        if (k in m) {
          flashKeycap("abcd"[m[k]]);
          const card = document.getElementById("exq-" + qz.cur);
          const optEl = card && card.querySelector(`[data-oi="${m[k]}"]`);
          if (optEl) optEl.click();
        } else if (e.key === "ArrowRight") {
          flashKeycap("right");
          if ($("#btnNextQ")) $("#btnNextQ").click();
        } else if (e.key === "ArrowLeft") {
          flashKeycap("left");
          if ($("#btnPrevQ")) $("#btnPrevQ").click();
        } else if (k === "f") {
          flashKeycap("f");
          const card = document.getElementById("exq-" + qz.cur);
          const fb = card && card.querySelector("[data-flag]");
          if (fb) fb.click();
        } else if (k === "s") {
          flashKeycap("s");
          const card = document.getElementById("exq-" + qz.cur);
          const sb = card && card.querySelector("[data-star]");
          if (sb) sb.click();
        }
      }

      if (state.view === "revision" && state.revTab === "fc" && !state.fcTable) {
        if (e.code === "Space") { e.preventDefault(); flashKeycap("space"); if ($("#fcCard")) $("#fcCard").click(); }
        else if (e.key === "ArrowRight" && $("#fcNext")) { flashKeycap("right"); $("#fcNext").click(); }
        else if (e.key === "ArrowLeft" && $("#fcPrev")) { flashKeycap("left"); $("#fcPrev").click(); }
        else if (e.key === "Enter" && $("#fcToggleKnown")) { e.preventDefault(); flashKeycap("enter"); $("#fcToggleKnown").click(); }
      }
    });

    enhanceSelects(document);
    render();
    flushWindowScrollUi();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        invalidateScrollMetrics();
        syncSlidingControls(document);
      });
    }
    // Start gentle initial ambient auto-scroll on entry (unless reduced-motion or manually paused in session)
    const userPausedSession = (() => { try { return sessionStorage.getItem("ibc_autoscroll_off") === "1"; } catch (e) { return false; } })();
    if (!reduceMotionMedia.matches && !userPausedSession && state.view !== "examRun") {
      syncAutoScrollButtons();
      autoScrollBootTimer = setTimeout(() => {
        if (!userPausedSession && state.view !== "examRun" && !hasOpenOverlay()) {
          startAutoScroll(false);
        }
      }, 950);
    } else {
      syncAutoScrollButtons();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
