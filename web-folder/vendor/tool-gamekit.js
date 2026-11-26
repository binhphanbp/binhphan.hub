/* =====================================================================
   tool-gamekit.js — v5.1
   BỘ DỰNG HÌNH DÙNG CHUNG CHO CÁC TRÒ CHƠI MINH HOẠ.

   Bốn trò đầu tiên viết tay từ đầu tới cuối, mỗi trò chừng 350 dòng, trong đó
   250 dòng là thứ giống hệt nhau: vẽ trục, vẽ cột, dựng thẻ số liệu, thanh
   trượt, hộp giải thích, bộ đếm vòng trắc nghiệm. Còn hơn ba mươi chương nữa
   phải có trò; chép tay ba mươi lần thì vừa chậm vừa chắc chắn sinh ra ba mươi
   dị bản lệch nhau, sửa một lỗi phải sửa ba mươi chỗ.

   Tệp này gom phần lặp lại. Mỗi trò sau đó chỉ còn phần thật sự thuộc về nó:
   mô hình và lời giảng.

   Nạp TRƯỚC tool-games.js. Không phụ thuộc gì ngoài trình duyệt.
   ===================================================================== */
(function (W) {
"use strict";

/* ---------------- Ngôn ngữ và định dạng số ---------------- */
function vi() { return !(W.I18N && W.I18N.lang === "en"); }
function L(en, v) { return vi() ? v : en; }
const loc = () => (vi() ? "vi-VN" : "en-US");
/* Dấu thập phân phải theo ngôn ngữ đang xem: ở bản tiếng Anh, "5,77" bị đọc
   thành năm trăm bảy bảy — sai một trăm lần. */
const T = n => Math.round(n).toLocaleString(loc());
const Tn = (n, k) => (Math.round(n * Math.pow(10, k)) / Math.pow(10, k))
  .toLocaleString(loc(), { minimumFractionDigits: k, maximumFractionDigits: k });
const T1 = n => Tn(n, 1);
const T2 = n => Tn(n, 2);
const esc = s => String(s == null ? "" : s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* ---------------- Số giả ngẫu nhiên CÓ HẠT GIỐNG ----------------
   Cả lớp phải thấy cùng một bộ tình huống, và thầy cô mở lại tuần sau vẫn đúng
   bộ ấy. Dùng Math.random() thì mỗi máy một kiểu, không ai đối chiếu được với ai. */
function rng(seed) {
  let a = seed | 0;
  const f = function () {
    a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
  f.chuan = function () {                       // phân phối chuẩn, Box–Muller
    let u = 0, v = 0;
    while (u === 0) u = f();
    while (v === 0) v = f();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };
  f.trong = (lo, hi) => lo + f() * (hi - lo);
  f.nguyen = (lo, hi) => Math.floor(f.trong(lo, hi + 1));
  return f;
}

/* ---------------- Mảnh giao diện ---------------- */
const MAU = {
  luc: "#059669", do: "#dc2626", cam: "#b45309", lam: "#1e3a8a",
  ngoc: "#0f766e", tim: "#7c3aed", xam: "#64748b", den: "#0f172a",
};

function the(nhan, gt, mau, phu) {
  return `<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:9px;padding:8px 9px;text-align:center">` +
    `<div style="font-size:11px;color:#64748b">${nhan}</div>` +
    `<div style="font-size:17px;font-weight:700;color:${mau || MAU.den}">${gt}</div>` +
    (phu ? `<div style="font-size:10.5px;color:#94a3b8;margin-top:1px">${phu}</div>` : "") + `</div>`;
}
function hangThe(ds) {
  /* v7.2: tự xuống dòng thay vì chia cứng N cột — 4 thẻ trên điện thoại từng chỉ
     còn ~80 px mỗi thẻ, số liệu bị cắt. */
  return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(${ds.length > 3 ? 112 : 96}px,1fr));gap:9px;margin:11px 0">` +
    ds.map(x => the(x[0], x[1], x[2], x[3])).join("") + `</div>`;
}

/* tone: 'thong' xanh dương · 'dat' xanh lá · 'canh' vàng · 'hong' đỏ */
const _TONE = {
  thong: ["#eff6ff", "#bfdbfe"], dat: ["#ecfdf5", "#6ee7b7"],
  canh: ["#fffbeb", "#fcd34d"], hong: ["#fef2f2", "#fecaca"], xam: ["#f8fafc", "#e2e8f0"],
};
function hop(noiDung, tone, tieuDe) {
  const [nen, vien] = _TONE[tone || "thong"] || _TONE.thong;
  return `<div style="background:${nen};border:1px solid ${vien};border-radius:10px;padding:12px 15px;font-size:13.5px;line-height:1.65;margin:11px 0">` +
    (tieuDe ? `<b>${tieuDe}</b><br><br>` : "") + noiDung + `</div>`;
}

function thanhTruot(id, nhan, min, max, gt, mau, hienTai) {
  /* v7.2: nhãn co giãn và cho xuống dòng — nhãn cứng 190 px trên điện thoại ép
     thanh kéo còn vài chục pixel, kéo không nổi. */
  return `<div style="display:flex;align-items:center;gap:6px 10px;margin-bottom:7px;flex-wrap:wrap">` +
    `<span style="flex:1 1 170px;min-width:120px;font-size:12.5px">${nhan}</span>` +
    `<input type="range" id="${id}" min="${min}" max="${max}" value="${gt}" style="flex:3 1 160px;min-width:140px;accent-color:${mau || MAU.ngoc}">` +
    `<span style="width:74px;text-align:right;font-weight:700">${hienTai != null ? hienTai : gt}</span></div>`;
}

function nhomNut(lop, ds, dangChon, mau) {
  return `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:11px">` +
    ds.map((x, i) => {
      const on = dangChon === i;
      return `<button class="${lop}" data-i="${i}" style="border:1px solid ${on ? (mau || MAU.ngoc) : "#cbd5e1"};` +
        `background:${on ? (mau || MAU.ngoc) : "#fff"};color:${on ? "#fff" : MAU.den};` +
        `border-radius:8px;padding:6px 12px;cursor:pointer;font-size:13px;font-weight:600">${x}</button>`;
    }).join("") + `</div>`;
}

function nut(id, nhan, chinh) {
  return `<button id="${id}" style="border:${chinh ? "0" : "1px solid #cbd5e1"};` +
    `background:${chinh ? MAU.ngoc : "#fff"};color:${chinh ? "#fff" : MAU.den};` +
    `border-radius:8px;padding:9px 17px;cursor:pointer;font-weight:600;font-size:13.5px;margin-right:7px">${nhan}</button>`;
}

function khung(noiDung) {
  return `<div style="font:14px/1.6 system-ui,-apple-system,Segoe UI,sans-serif;color:${MAU.den}">${noiDung}</div>`;
}

/* ---------------- v7.2: Khối "Lời giải chi tiết" ----------------
   Người dùng xin "nút hiện lời giải chi tiết cho phần bài làm". Trò chơi thường
   chỉ hiện KẾT QUẢ (giá mở cửa, vốn chủ còn lại, giá trái phiếu) mà không cho
   thấy phép tính — mà phép tính mới là thứ phải làm được trong bài thi.

   Dùng <details> để mở/đóng không cần trạng thái riêng. Nhưng trò vẽ lại bằng
   innerHTML mỗi lần kéo thanh trượt, và <details> vừa mở sẽ đóng lại ngay. Nên
   nhớ khoá của những khối đang mở, và dựng lại với thuộc tính `open`. Sự kiện
   'toggle' không nổi bọt — nghe ở pha bắt. */
const _giaiDangMo = new Set();
document.addEventListener("toggle", (e) => {
  const d = e.target;
  if (!d || !d.getAttribute) return;
  const k = d.getAttribute("data-gk-giai");
  if (!k) return;
  if (d.open) _giaiDangMo.add(k); else _giaiDangMo.delete(k);
}, true);
function loiGiai(khoa, noiDung, tieuDe) {
  return `<details data-gk-giai="${esc(khoa)}"${_giaiDangMo.has(khoa) ? " open" : ""} ` +
    `style="border:1px solid #ddd6fe;background:#faf5ff;border-radius:10px;margin:11px 0;padding:0">` +
    `<summary style="cursor:pointer;padding:9px 14px;font-weight:700;font-size:13.5px;color:#6d28d9;list-style-position:inside">` +
    `${tieuDe || L("Detailed solution", "Lời giải chi tiết")}</summary>` +
    `<div style="padding:4px 15px 13px;font-size:13.5px;line-height:1.75;color:${MAU.den}">${noiDung}</div></details>`;
}
/* Một dòng phép tính in theo kiểu "sổ tay": công thức → thay số → kết quả. */
function buocTinh(ds) {
  return `<div style="font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12.5px;background:#fff;` +
    `border:1px solid #ede9fe;border-radius:8px;padding:9px 12px;margin:7px 0;overflow-x:auto;line-height:1.9">` +
    ds.join("<br>") + `</div>`;
}
function moTa(t) { return `<p style="margin:0 0 11px;color:#475569">${t}</p>`; }

/* ---------------- Biểu đồ ---------------- */
/* Đường: ds = [{ten, mau, diem:[y,...]}], nhanX = mảng nhãn trục ngang */
function veDuong(ds, tuyChon) {
  const o = tuyChon || {};
  const W_ = o.rong || 560, H = o.cao || 260, ml = o.ml || 52, mb = 38, mt = 14, mr = 16;
  let lo = o.min, hi = o.max;
  if (lo == null || hi == null) {
    const het = ds.reduce((a, s) => a.concat(s.diem.filter(v => v != null)), []);
    lo = lo != null ? lo : Math.min(...het);
    hi = hi != null ? hi : Math.max(...het);
    const d = (hi - lo) || 1; lo -= d * .08; hi += d * .08;
  }
  const n = Math.max(...ds.map(s => s.diem.length));
  const x = i => ml + (n > 1 ? i / (n - 1) : .5) * (W_ - ml - mr);
  const y = v => H - mb - (v - lo) / (hi - lo || 1) * (H - mt - mb);
  let g = "";
  const soVach = o.soVach || 5;
  for (let k = 0; k <= soVach; k++) {
    const v = lo + (hi - lo) * k / soVach;
    g += `<line x1="${ml}" y1="${y(v).toFixed(1)}" x2="${W_ - mr}" y2="${y(v).toFixed(1)}" stroke="#e2e8f0"/>` +
      `<text x="${ml - 6}" y="${(y(v) + 3).toFixed(1)}" font-size="10" fill="#64748b" text-anchor="end">${o.dinhDangY ? o.dinhDangY(v) : T1(v)}</text>`;
  }
  if (o.nhanX) o.nhanX.forEach((nh, i) => {
    if (nh == null) return;
    g += `<text x="${x(i).toFixed(1)}" y="${H - mb + 15}" font-size="10" fill="#64748b" text-anchor="middle">${esc(nh)}</text>`;
  });
  if (o.moc != null) g += `<line x1="${ml}" y1="${y(o.moc)}" x2="${W_ - mr}" y2="${y(o.moc)}" stroke="#94a3b8" stroke-dasharray="5 4"/>`;
  for (const s of ds) {
    const d = s.diem.map((v, i) => (v == null ? null : (i ? "L" : "M") + x(i).toFixed(1) + "," + y(v).toFixed(1)))
      .filter(Boolean).join("").replace(/^L/, "M");
    g += `<path d="${d}" fill="none" stroke="${s.mau}" stroke-width="${s.day || 2.4}"${s.net ? ' stroke-dasharray="5 4"' : ""}/>`;
    if (s.cham) s.diem.forEach((v, i) => { if (v != null) g += `<circle cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="3.4" fill="${s.mau}"/>`; });
  }
  if (o.diemNoiBat) for (const p of o.diemNoiBat) {
    g += `<circle cx="${x(p.i).toFixed(1)}" cy="${y(p.v).toFixed(1)}" r="${p.r || 7}" fill="${p.mau || "#f59e0b"}" stroke="#fff" stroke-width="2"/>`;
    if (p.nhan) g += `<text x="${x(p.i).toFixed(1)}" y="${(y(p.v) - 12).toFixed(1)}" font-size="11" font-weight="700" fill="${p.mau || "#b45309"}" text-anchor="middle">${esc(p.nhan)}</text>`;
  }
  g += `<line x1="${ml}" y1="${H - mb}" x2="${W_ - mr}" y2="${H - mb}" stroke="#94a3b8"/>` +
       `<line x1="${ml}" y1="${mt}" x2="${ml}" y2="${H - mb}" stroke="#94a3b8"/>`;
  if (o.tenX) g += `<text x="${(W_ + ml) / 2}" y="${H - 3}" font-size="11" fill="#334155" text-anchor="middle">${esc(o.tenX)}</text>`;
  if (o.chuThich !== false && ds.length > 1) {
    let cx = ml + 6;
    for (const s of ds) {
      g += `<rect x="${cx}" y="${mt - 2}" width="10" height="10" rx="2" fill="${s.mau}"/>` +
           `<text x="${cx + 14}" y="${mt + 7}" font-size="10.5" fill="#334155">${esc(s.ten)}</text>`;
      cx += 22 + String(s.ten).length * 5.6;
    }
  }
  return `<svg viewBox="0 0 ${W_} ${H}" style="width:100%;height:auto;background:#fff;border-radius:10px">${g}</svg>`;
}

/* Cột: ds = [{ten, gt, mau}] */
function veCot(ds, tuyChon) {
  const o = tuyChon || {};
  const W_ = o.rong || 560, H = o.cao || 220, ml = 52, mb = 42, mt = 14, mr = 14;
  const hi = o.max != null ? o.max : Math.max(...ds.map(d => d.gt), 0);
  const lo = o.min != null ? o.min : Math.min(0, ...ds.map(d => d.gt));
  const y = v => H - mb - (v - lo) / (hi - lo || 1) * (H - mt - mb);
  const w = (W_ - ml - mr) / ds.length;
  let g = "";
  for (let k = 0; k <= 4; k++) {
    const v = lo + (hi - lo) * k / 4;
    g += `<line x1="${ml}" y1="${y(v).toFixed(1)}" x2="${W_ - mr}" y2="${y(v).toFixed(1)}" stroke="#e2e8f0"/>` +
      `<text x="${ml - 6}" y="${(y(v) + 3).toFixed(1)}" font-size="10" fill="#64748b" text-anchor="end">${o.dinhDangY ? o.dinhDangY(v) : T(v)}</text>`;
  }
  ds.forEach((d, i) => {
    const x0 = ml + i * w + w * .16, wc = w * .68;
    const y0 = y(Math.max(d.gt, lo < 0 ? 0 : lo)), y1 = y(Math.min(d.gt, lo < 0 ? 0 : lo));
    g += `<rect x="${x0.toFixed(1)}" y="${Math.min(y0, y1).toFixed(1)}" width="${wc.toFixed(1)}" height="${Math.max(1, Math.abs(y1 - y0)).toFixed(1)}" rx="3" fill="${d.mau || MAU.ngoc}"/>` +
      `<text x="${(x0 + wc / 2).toFixed(1)}" y="${(Math.min(y0, y1) - 5).toFixed(1)}" font-size="11" font-weight="700" fill="${d.mau || MAU.ngoc}" text-anchor="middle">${d.nhanGT != null ? d.nhanGT : T(d.gt)}</text>` +
      `<text x="${(x0 + wc / 2).toFixed(1)}" y="${H - mb + 15}" font-size="10.5" fill="#334155" text-anchor="middle">${esc(d.ten)}</text>`;
  });
  if (lo < 0) g += `<line x1="${ml}" y1="${y(0)}" x2="${W_ - mr}" y2="${y(0)}" stroke="#475569"/>`;
  g += `<line x1="${ml}" y1="${H - mb}" x2="${W_ - mr}" y2="${H - mb}" stroke="#94a3b8"/>`;
  return `<svg viewBox="0 0 ${W_} ${H}" style="width:100%;height:auto;background:#fff;border-radius:10px">${g}</svg>`;
}

/* ---------------- Bộ chạy nhiều vòng trắc nghiệm ----------------
   Dùng cho các trò kiểu "chọn phương án rồi xem đúng sai". Nhận danh sách vòng,
   tự lo đếm điểm, hiện giải thích, và gọi khiXong() ở vòng cuối.

   Mỗi vòng: { de, pa:[{nhan, dat, vi_sao}], sau, giai? }

   v7.2: thêm "← Câu trước" để xem lại câu đã làm (KHÔNG sửa được đáp án — xem
   lại để học, không phải để gỡ điểm), và "Lời giải chi tiết": giải thích
   MỌI phương án vì sao đúng/sai, cộng phần `giai` nếu vòng có. Mở lời giải khi
   chưa trả lời thì câu đó tính là bỏ qua (chon = -1) — nếu không, bấm xem đáp
   án rồi chọn đúng là được điểm không công. */
function chayVong(ctx) {
  const { el, vong, tieuDe, khiXong } = ctx;
  let i = 0;
  const chon = [], moGiai = [];
  function ve() {
    const v = vong[i], daChon = chon[i] != null, boQua = chon[i] === -1;
    let h = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:9px;gap:8px;flex-wrap:wrap">` +
      `<b>${tieuDe || L("Round", "Vòng")} ${i + 1}/${vong.length}</b>` +
      `<span style="font-size:12.5px;color:#64748b">${L("Correct", "Đúng")}: ${demDung()}/${chon.filter(x => x != null).length}</span></div>`;
    h += `<div style="font-size:14.5px;margin-bottom:11px">${v.de}</div>`;
    v.pa.forEach((p, k) => {
      const la = chon[i] === k;
      const vien = daChon ? (p.dat ? MAU.luc : (la ? MAU.do : "#e2e8f0")) : (la ? MAU.ngoc : "#e2e8f0");
      const nen = daChon && p.dat ? "#ecfdf5" : daChon && la ? "#fef2f2" : "#fff";
      h += `<div class="gk-pa" data-k="${k}" style="border:2px solid ${vien};background:${nen};border-radius:9px;` +
        `padding:9px 12px;margin-bottom:7px;cursor:${daChon ? "default" : "pointer"};font-size:13.5px">` +
        `${p.nhan}` +
        (daChon && (la || p.dat) && p.vi_sao ? `<div style="font-size:12.5px;color:#475569;margin-top:5px">${p.vi_sao}</div>` : "") +
        `</div>`;
    });
    if (boQua) h += hop(L("You opened the solution before answering, so this question counts as skipped.",
                          "Bạn đã mở lời giải trước khi trả lời, nên câu này tính là bỏ qua."), "xam");
    if (daChon && !boQua && v.sau) h += hop(v.sau, v.pa[chon[i]].dat ? "dat" : "canh");
    if (moGiai[i]) {
      /* Lời giải chi tiết: đi qua TỪNG phương án — biết vì sao ba phương án kia
         sai quan trọng không kém biết vì sao phương án đúng là đúng. */
      const dong = v.pa.map((p, k) =>
        `<div style="margin:6px 0"><b style="color:${p.dat ? MAU.luc : MAU.do}">${p.dat ? "✓" : "✗"} ${String.fromCharCode(65 + k)}.</b> ` +
        `${p.nhan}${p.vi_sao ? `<div style="color:#475569;font-size:12.5px;margin-left:22px">${p.vi_sao}</div>` : ""}</div>`).join("");
      h += `<div style="border:1px solid #ddd6fe;background:#faf5ff;border-radius:10px;padding:10px 14px;margin:11px 0;font-size:13.5px;line-height:1.7">` +
        `<b style="color:#6d28d9">${L("Detailed solution", "Lời giải chi tiết")}</b>${dong}` +
        (v.giai ? `<div style="margin-top:8px;padding-top:8px;border-top:1px dashed #ddd6fe">${v.giai}</div>` : "") +
        (v.sau && boQua ? `<div style="margin-top:8px">${v.sau}</div>` : "") + `</div>`;
    }
    h += `<div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:6px">`;
    if (i > 0) h += nut("gk-lui", "← " + L("Previous", "Câu trước"));
    h += nut("gk-giai", moGiai[i] ? L("Hide solution", "Ẩn lời giải") : "" + L("Detailed solution", "Lời giải chi tiết"));
    if (daChon) h += nut("gk-tiep", i < vong.length - 1 ? L("Next →", "Câu tiếp →") : L("Finish", "Kết thúc"), true);
    h += `</div>`;
    el.innerHTML = khung(h);
    el.querySelectorAll(".gk-pa").forEach(x => {
      x.onclick = () => { if (chon[i] == null) { chon[i] = +x.getAttribute("data-k"); ve(); } };
    });
    const t = el.querySelector("#gk-tiep");
    if (t) t.onclick = () => {
      if (i < vong.length - 1) { i++; ve(); }
      else khiXong({ dung: demDung(), tong: vong.length, chon });
    };
    const lui = el.querySelector("#gk-lui");
    if (lui) lui.onclick = () => { i--; ve(); };
    el.querySelector("#gk-giai").onclick = () => {
      if (chon[i] == null) chon[i] = -1;
      moGiai[i] = !moGiai[i];
      ve();
    };
  }
  const demDung = () => chon.reduce((a, c, k) => a + (c != null && c >= 0 && vong[k].pa[c].dat ? 1 : 0), 0);
  ve();
}

W.GK = {
  vi, L, loc, T, Tn, T1, T2, esc, rng, MAU,
  the, hangThe, hop, thanhTruot, nhomNut, nut, khung, moTa,
  veDuong, veCot, chayVong,
  loiGiai, buocTinh,          // v7.2
};
})(window);
