/* =====================================================================
   ib_nguon.js — SỔ NGUỒN APA 7 CỦA HỌC PHẦN BAF736 (bản độc lập)

   Yêu cầu: nội dung bài giảng phải có cơ sở khoa học rõ ràng và truy xuất được.
   Một nguồn duy nhất cho mọi trích dẫn:
     IBNguon.khai({ khoá: { apa, ngan, kt, ghi } })      — khai tài liệu (ib_nguon_ds.js)
     IBNguon.them("ch|mục", [ { y:{en,vi}, n:[[khoá, "p. 44"]], co } ])  — bảng truy xuất
   Mức đối chiếu (kt):
     tr   đã mở sách / tài liệu và dò đúng trang
     doi  bài báo: đối chiếu siêu dữ liệu với Crossref (DOI) và nội dung tóm tắt
     url  văn bản chính thức / báo cáo công khai đã đọc trực tuyến (ghi ngày truy cập)
     luat văn bản quy phạm pháp luật Việt Nam: đã đọc nguyên văn các điều, khoản được dẫn
     tm   tài liệu gốc không có trong tay — trích qua một nguồn đã dò trang
     bao  bài báo đã đọc trực tuyến (nguồn thứ cấp, dùng khi không có văn bản gốc đọc được)
   Cờ của hàng (co): tt = ví dụ tự tính · mh = số liệu giả định · vn = quy định Việt Nam ·
   th = tổng hợp nhiều nguồn / lập luận của bài giảng.
   ===================================================================== */
(function () {
  "use strict";
  const DS = {};
  const MUC = {};
  const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const laVi = (lang) => (lang || (window.I18N && window.I18N.lang) || "en") === "vi";
  const KT = {
    tr: { en: "page verified", vi: "đã dò trang" },
    doi: { en: "DOI checked", vi: "đã đối chiếu DOI" },
    url: { en: "official text read", vi: "đã đọc văn bản gốc" },
    luat: { en: "cited articles read", vi: "đã đọc nguyên văn điều luật" },
    tm: { en: "cited via secondary source", vi: "dẫn qua nguồn thứ cấp" },
    bao: { en: "press report read", vi: "đã đọc bài báo" },
  };
  const CO = {
    tt: { en: "own calculation", vi: "tự tính" },
    mh: { en: "illustrative numbers", vi: "số giả định" },
    vn: { en: "Vietnamese law", vi: "quy định VN" },
    th: { en: "synthesis", vi: "tổng hợp" },
  };

  function khai(o) { Object.assign(DS, o); }
  function them(khoa, hang) { (MUC[khoa] = MUC[khoa] || []).push(...hang); }

  /** Đổi cách ghi vị trí sang tiếng Việt: pp. → tr., Ch. → Ch., Exhibit → Exhibit (giữ nguyên tên bảng gốc). */
  function vt(loc, lang) {
    if (!loc) return "";
    if (!laVi(lang)) return loc;
    return String(loc).replace(/\bpp?\.\s*/g, "tr. ").replace(/\bChapter\b/g, "Chương").replace(/\bsection\b/gi, "mục").replace(/\bpara\.\s*/g, "đoạn ").replace(/\bArts?\.\s*/g, "Điều ").replace(/\bn\.d\./g, "không ngày");
  }
  const tenNgan = (k, lang) => { const d = DS[k]; if (!d) return k; const n = d.ngan; return typeof n === "string" ? n : laVi(lang) ? n.vi || n.en : n.en; };
  const nam = (k, lang) => { const d = DS[k]; if (!d) return ""; return laVi(lang) && d.namVi ? d.namVi : d.nam; };
  /** Trích dẫn trong câu: (Tác giả, năm, vị trí). */
  function t(k, loc, lang) { return "(" + tn1(k, loc, lang) + ")"; }
  function tn1(k, loc, lang) { return tenNgan(k, lang) + ", " + nam(k, lang) + (loc ? ", " + vt(loc, lang) : ""); }
  function tn(ds, lang) { return "(" + ds.map(([k, loc]) => tn1(k, loc, lang)).join("; ") + ")"; }
  /** Trích dẫn trong thân bài giảng: tệp nội dung ghi dấu [@khoá, vị trí; @khoá2] (kiểu Pandoc);
      hàm này đổi thành (Tác giả, năm, tr. …) theo ngôn ngữ. Nhiều nguồn trong một ngoặc xếp theo
      tên tác giả (APA 7, mục 8.12). Khoá chưa khai hiện "(?khoá)" để bộ kiểm bắt được. */
  /* Cho phép tiền tố ngắn trước khoá đầu tiên: [as cited in @giri2017, p. 151] · [dẫn theo @giri2017, p. 151]. */
  const DAU = /\[((?:[^\]\[@<>]{0,40} )?@[A-Za-z0-9_]+[^\]]*)\]/g;
  function phanTich(trong) {
    return trong.split(/;\s*(?=@)/).map((p) => { const m = p.trim().match(/^(?:(.*?)\s+)?@([A-Za-z0-9_]+)(?:\s*,\s*(.+))?$/); return m ? [m[2], m[3] ? m[3].trim() : "", m[1] || ""] : null; }).filter(Boolean);
  }
  /* Dạng tường thuật {@khoá, vị trí} → Tác giả (năm, vị trí); trong câu dùng "and"/"và" thay "&" (APA 7, mục 8.17). */
  const DAU_TT = /\{(@[A-Za-z0-9_]+[^}]*)\}/g;
  function dien(html, lang) {
    if (!html || (html.indexOf("[@") < 0 && html.indexOf("{@") < 0)) return html || "";
    const loi = (x) => `<span class="ib-cite ib-cite-loi">(?${esc(x)})</span>`;
    return String(html).replace(DAU, (toan, trong) => {
      const ds = phanTich(trong);
      const sai = ds.filter(([k]) => !DS[k]);
      if (!ds.length || sai.length) return loi(sai.map(([k]) => k).join("; ") || trong);
      const tienTo = ds[0][2];
      ds.sort((a, b) => tenNgan(a[0], lang).replace(/^[“"‘]+/, "").localeCompare(tenNgan(b[0], lang).replace(/^[“"‘]+/, ""), laVi(lang) ? "vi" : "en"));
      return `<span class="ib-cite">(${tienTo ? tienTo + " " : ""}${ds.map(([k, loc]) => tn1(k, loc, lang)).join("; ")})</span>`;
    }).replace(DAU_TT, (toan, trong) => {
      const ds = phanTich(trong);
      if (ds.length !== 1 || !DS[ds[0][0]]) return loi(trong);
      const [k, loc] = ds[0];
      const ten = tenNgan(k, lang).replace(/ &amp; /g, laVi(lang) ? " và " : " and ");
      return `${ten} <span class="ib-cite">(${nam(k, lang)}${loc ? ", " + vt(loc, lang) : ""})</span>`;
    });
  }
  /** Mọi dấu trích dẫn trong một chuỗi: [[khoá, vị trí], …] (bộ kiểm dùng). */
  function dauTrong(html) {
    const ra = [], s = String(html || "");
    s.replace(DAU, (t, trong) => { ra.push(...phanTich(trong)); return t; });
    s.replace(DAU_TT, (t, trong) => { ra.push(...phanTich(trong)); return t; });
    return ra;
  }
  /** Dạng APA đầy đủ (danh mục). */
  function ref(k, lang) { const d = DS[k]; if (!d) return ""; return laVi(lang) && d.apaVi ? d.apaVi : d.apa; }
  function huyHieu(k, lang) {
    const d = DS[k]; if (!d || !KT[d.kt]) return "";
    const ten = laVi(lang) ? KT[d.kt].vi : KT[d.kt].en;
    const ghi = laVi(lang) ? d.ghi : d.ghiEn || d.ghi;
    return ` <span class="src-kt kt-${d.kt}" title="${esc(ghi || "")}">✔ ${ten}</span>`;
  }

  /** Hộp cuối mỗi mục bài giảng: nội dung nào lấy từ đâu. Đặt NGOÀI #lectureBody (nút Nghe không đọc nó). */
  function hopMuc(ch, sec, lang) {
    const hang = MUC[ch + "|" + sec];
    if (!hang || !hang.length) return "";
    const V = laVi(lang);
    const dung = new Set();
    let h = `<details class="card ib-nguon-muc" open><summary><b>${V ? "Cơ sở khoa học &amp; nguồn trích dẫn của mục" : "Scholarly basis &amp; sources for this section"} ${esc(sec)}</b></summary>
      <table class="tbl small"><tr><th style="width:52%">${V ? "Nội dung trong bài" : "Content in the lecture"}</th><th>${V ? "Cơ sở / nguồn (APA 7)" : "Basis / source (APA 7)"}</th></tr>`;
    for (const r of hang) {
      (r.n || []).forEach(([k]) => dung.add(k));
      const nhan = r.co ? r.co.split(",").map((c) => (CO[c] ? `<span class="chip gray">${V ? CO[c].vi : CO[c].en}</span>` : "")).join(" ") : "";
      h += `<tr><td>${V ? r.y.vi || r.y.en : r.y.en}</td><td>${r.n && r.n.length ? tn(r.n, lang) : ""} ${nhan}${r.g ? `<div class="muted">${V ? r.g.vi || r.g.en : r.g.en}</div>` : ""}</td></tr>`;
    }
    h += `</table><div class="small" style="margin-top:8px"><b>${V ? "Tài liệu dùng trong mục" : "References used in this section"}</b><ol class="ib-ref">`;
    [...dung].filter((k) => DS[k]).sort((a, b) => ref(a, lang).localeCompare(ref(b, lang))).forEach((k) => (h += `<li>${ref(k, lang)}${huyHieu(k, lang)}</li>`));
    h += `</ol></div></details>`;
    return h;
  }
  /** Danh mục toàn bộ tài liệu (trang Đề cương). */
  function danhMuc(lang) {
    const V = laVi(lang);
    const ks = Object.keys(DS).sort((a, b) => ref(a, lang).localeCompare(ref(b, lang)));
    return `<div class="card"><h3>${V ? "Tài liệu tham khảo (APA 7)" : "References (APA 7th)"}</h3>
      <p class="small muted">${V ? "Mỗi tài liệu ghi rõ mức đối chiếu (rê chuột lên huy hiệu để xem ghi chú). Giáo trình và sách chuyên khảo đã dò đúng trang; bài báo khoa học đã đối chiếu DOI; văn bản pháp luật Việt Nam đã đọc nguyên văn các điều được dẫn; báo chí chỉ được dùng cho sự kiện của tình huống khi không có văn bản gốc đọc được." : "Each entry shows how it was verified (hover over the badge for notes). Books were checked page by page, journal articles against their DOI record, and Vietnamese legal texts against the original wording of the articles cited; press reports are used only for case facts when no primary document could be read."}</p>
      <ol class="ib-ref">${ks.map((k) => `<li>${ref(k, lang)}${huyHieu(k, lang)}</li>`).join("")}</ol></div>`;
  }
  /** Kiểm toàn vẹn (bộ kiểm dùng): khoá được dùng mà chưa khai. */
  function thieu() {
    const ra = [];
    for (const [m, hang] of Object.entries(MUC)) for (const r of hang) for (const [k] of r.n || []) if (!DS[k]) ra.push(m + ":" + k);
    for (const c of window.IB_CASE_LIB || []) for (const [k] of c.nguon || []) if (!DS[k]) ra.push("case " + c.id + ":" + k);
    return ra;
  }

  window.IBNguon = { DS, MUC, khai, them, vt, t, tn, ref, huyHieu, hopMuc, danhMuc, thieu, dien, dauTrong };
})();
