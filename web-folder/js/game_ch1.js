/* =====================================================================
   BAF736 · CHƯƠNG 1 — TRÒ CHƠI "ĐỊNH GIÁ THƯƠNG VỤ IPO"

   Chương 1 giới thiệu ngân hàng đầu tư làm gì. Sinh viên thường tóm gọn thành "giúp
   doanh nghiệp lên sàn" và dừng ở đó. Cái bị bỏ sót là điều làm nghề này khó: ngân
   hàng đầu tư đứng GIỮA hai bên có lợi ích ngược nhau, và ăn phí từ một bên trong khi
   phải giữ được lòng tin của bên kia.

   Nên trò này đặt sinh viên vào ghế tổ chức bảo lãnh phát hành. Doanh nghiệp muốn giá
   chào bán thật cao. Nhà đầu tư tổ chức chỉ mua khi thấy rẻ. Bạn chốt một mức giá.

   Ba kết cục, không có cái nào "thắng sạch":
     · giá quá cao  → không bán hết, thương vụ đổ, doanh nghiệp mất mặt, uy tín bạn tụt
     · giá quá thấp → bán vèo, giá nhảy vọt ngày đầu, doanh nghiệp mắng bạn đã cho
                      không hàng trăm tỷ ("money left on the table")
     · vừa phải     → phí thu đủ, hai bên tạm hài lòng, uy tín nhích lên

   Uy tín được cộng dồn qua sáu thương vụ, và nó quyết định số nhà đầu tư chịu nghe
   máy ở thương vụ sau. Nhờ vậy sinh viên tự thấy vì sao ngân hàng đầu tư luôn định
   giá thấp hơn một chút — không phải vì kém, mà vì họ chơi ván lặp lại.

   Hạt giống cố định theo thương vụ để buổi giảng lặp lại được.
   ===================================================================== */
(function () {
"use strict";

function vi() { return !(window.I18N && window.I18N.lang === "en"); }
function L(en, v) { return vi() ? v : en; }
const T = n => Math.round(n).toLocaleString("vi-VN");
const T1 = n => (Math.round(n * 10) / 10).toLocaleString("vi-VN", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function rng(seed) {
  let a = seed >>> 0;
  return function () {
    a += 0x6D2B79F5; let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const PHI = 3.5;        // % phí bảo lãnh trên giá trị bán được
const SO_VU = 6;

/* Sáu doanh nghiệp. 'that' = giá trị hợp lý mà THỊ TRƯỜNG sẽ định sau khi niêm yết —
   sinh viên KHÔNG thấy con số này, chỉ thấy khoảng ước tính của phòng phân tích và
   mức giá doanh nghiệp đòi. Đó chính là bất định thật của nghề. */
const VU = [
  { ten: { en: "Sunrise Seafood", vi: "Thuỷ sản Bình Minh" }, ic: "", coPhieu: 20,
    that: 52, doiHoi: 68, thap: 40, cao: 62,
    ghi: { en: "Family exporter, strong margins but one big customer.", vi: "Doanh nghiệp gia đình xuất khẩu, biên lợi nhuận tốt nhưng phụ thuộc một khách hàng lớn." } },
  { ten: { en: "Mekong Logistics", vi: "Logistics Mê Kông" }, ic: "", coPhieu: 35,
    that: 41, doiHoi: 46, thap: 33, cao: 50,
    ghi: { en: "Steady cash flows, heavy debt, unexciting growth.", vi: "Dòng tiền đều, nợ nhiều, tăng trưởng không có gì hấp dẫn." } },
  { ten: { en: "VietTech Software", vi: "Phần mềm VietTech" }, ic: "", coPhieu: 15,
    that: 96, doiHoi: 105, thap: 70, cao: 120,
    ghi: { en: "Fast growth, no profits yet, valuation range is wide.", vi: "Tăng trưởng nhanh, chưa có lãi, khoảng định giá rất rộng." } },
  { ten: { en: "An Phú Cement", vi: "Xi măng An Phú" }, ic: "", coPhieu: 50,
    that: 24, doiHoi: 34, thap: 20, cao: 32,
    ghi: { en: "Cyclical, the sector just peaked. Management is optimistic.", vi: "Ngành có chu kỳ, vừa qua đỉnh. Ban lãnh đạo thì rất lạc quan." } },
  { ten: { en: "Hà Nội Retail", vi: "Bán lẻ Hà Nội" }, ic: "", coPhieu: 28,
    that: 58, doiHoi: 62, thap: 48, cao: 66,
    ghi: { en: "Solid brand, thin margins, expanding fast.", vi: "Thương hiệu vững, biên mỏng, đang mở rộng nhanh." } },
  { ten: { en: "Green Energy JSC", vi: "Năng lượng Xanh" }, ic: "", coPhieu: 40,
    that: 73, doiHoi: 78, thap: 55, cao: 88,
    ghi: { en: "Policy-dependent, investors are enthusiastic this quarter.", vi: "Phụ thuộc chính sách, quý này nhà đầu tư đang hào hứng." } },
];

let S = null;
function batDau() { S = { vu: 0, uyTin: 50, gia: null, ls: [], xong: false, tongPhi: 0 }; }

/* Cầu của nhà đầu tư giảm dần khi giá vượt giá trị thật. Uy tín cao thì nhà đầu tư
   chịu nghe hơn, tức cùng một mức giá vẫn bán được nhiều hơn. */
function tinh(gia) {
  const v = VU[S.vu];
  const r = rng(736000 + S.vu * 7919 + Math.round(gia * 13));
  const lech = (gia - v.that) / v.that;                     // >0 là chào đắt hơn giá trị thật
  const doUyTin = 0.85 + (S.uyTin / 100) * 0.30;            // 0,85 → 1,15
  /* Độ dốc 2,4: chào đắt hơn giá trị thật 10% thì mất ~24% cầu. Bản đầu để 3,2 —
     cửa sổ thành công chỉ rộng chừng 5 điểm giá, thành ra trò chơi biến thành đoán
     đúng một con số chứ không phải cân nhắc một đánh đổi. */
  let banDuoc = (1 - Math.max(0, lech) * 2.4) * doUyTin + (r() - 0.5) * 0.10;
  banDuoc = Math.max(0, Math.min(1, banDuoc));
  const dat = banDuoc >= 0.85;                              // dưới 85% coi như thương vụ đổ
  const tienHuyDong = dat ? gia * v.coPhieu * banDuoc : 0;
  const phi = tienHuyDong * PHI / 100;
  /* Giá ngày đầu niêm yết: kéo về giá trị thật, cộng chút hưng phấn nếu chào rẻ. */
  const giaSan = dat ? v.that * (1 + Math.max(0, -lech) * 0.55 + (r() - 0.5) * 0.06) : 0;
  const nhayGia = dat ? (giaSan / gia - 1) * 100 : 0;
  const boLo = dat ? Math.max(0, (giaSan - gia) * v.coPhieu) : 0;   // tiền bỏ lại trên bàn
  return { v, gia, lech, banDuoc, dat, tienHuyDong, phi, giaSan, nhayGia, boLo };
}

/* ---------- Vẽ ---------- */
let goc = null;
const CSS = `
.ib-w{max-width:880px}
.ib-note{background:#fdf2e3;border:1px solid #f2ddb3;border-radius:10px;padding:14px 17px;
  font-size:13.5px;line-height:1.75;margin-bottom:14px}
.ib-card{border:1px solid #dde3ec;border-radius:12px;padding:16px 18px;background:#fff;margin-bottom:14px}
.ib-card h4{margin:0 0 6px;font-size:16px}
.ib-r{display:flex;gap:10px;flex-wrap:wrap;margin:10px 0}
.ib-r div{border:1px solid #dde3ec;border-radius:9px;padding:7px 13px;font-size:13px;background:#f8f9fc}
.ib-r b{font-family:ui-monospace,Menlo,monospace;font-size:15px}
.ib-slider{margin:14px 0}
.ib-slider input{width:100%}
.ib-gia{font-size:26px;font-weight:800;font-family:ui-monospace,Menlo,monospace;color:#2f4fd8;text-align:center}
.ib-hai{display:flex;justify-content:space-between;font-size:12px;color:#6b7280;margin-top:3px}
.ib-kq{border-radius:10px;padding:13px 16px;margin-top:12px;font-size:13.5px;line-height:1.75}
.ib-kq.tot{background:#e7f7f0;border:1px solid #a8ddc5}
.ib-kq.vua{background:#fdf2e3;border:1px solid #f2ddb3}
.ib-kq.xau{background:#fdeaea;border:1px solid #f3b4b4}
.ib-t{width:100%;border-collapse:collapse;font-size:12.5px;margin-top:12px}
.ib-t th,.ib-t td{border:1px solid #e3e7ef;padding:5px 9px;text-align:right}
.ib-t th{background:#f0f3fa;font-weight:700}
.ib-t td:first-child,.ib-t th:first-child{text-align:left}
.ib-hoc{background:#e7f7f0;border-radius:9px;padding:11px 15px;font-size:13.5px;line-height:1.75;margin-top:12px}
.ib-uy{height:9px;border-radius:99px;background:#e9edf5;overflow:hidden;margin-top:5px}
.ib-uy i{display:block;height:100%;background:#2f4fd8}
`;
function gaiCSS() {
  if (document.getElementById("ibGameCSS")) return;
  const st = document.createElement("style");
  st.id = "ibGameCSS"; st.textContent = CSS; document.head.appendChild(st);
}

function ve() {
  gaiCSS();
  if (S.xong) return veTongKet();
  const v = VU[S.vu];
  if (S.gia === null) S.gia = Math.round((v.thap + v.cao) / 2);
  goc.innerHTML = '<div class="ib-w">'
    + (S.vu === 0 && !S.ls.length ? '<div class="ib-note"><b>'
        + L("You are the underwriter. Six IPOs to price.", "Bạn là tổ chức bảo lãnh phát hành. Sáu thương vụ IPO cần định giá.") + "</b><br><br>"
        + L("The company wants the highest possible price. Institutional investors will only buy if the deal looks cheap enough. You sit between them, and you earn <b>" + PHI + "%</b> of whatever actually gets sold — but only if the deal completes.",
            "Doanh nghiệp muốn giá cao nhất có thể. Nhà đầu tư tổ chức chỉ xuống tiền nếu thấy đủ rẻ. Bạn đứng giữa hai bên, và bạn ăn <b>" + PHI + "%</b> trên số thật sự bán được — nhưng chỉ khi thương vụ hoàn tất.")
        + "<br><br>"
        + L("Below <b>85%</b> subscribed the deal is pulled: no fee, and your reputation takes a hit. Reputation matters — it decides how many investors pick up the phone next time.",
            "Bán được dưới <b>85%</b> thì thương vụ bị huỷ: không có phí, và uy tín của bạn sứt mẻ. Uy tín quan trọng — nó quyết định lần sau bao nhiêu nhà đầu tư chịu nghe máy.")
        + "</div>" : "")

    + '<div class="ib-card"><h4>' + v.ic + " " + L(v.ten.en, v.ten.vi)
    + ' <span style="font-size:13px;color:#6b7280">(' + L("deal ", "thương vụ ") + (S.vu + 1) + "/" + SO_VU + ")</span></h4>"
    + '<p style="margin:0;font-size:13.5px;color:#3e4c55">' + L(v.ghi.en, v.ghi.vi) + "</p>"
    + '<div class="ib-r">'
    + "<div>" + L("Shares offered", "Số cổ phiếu chào bán") + " <b>" + v.coPhieu + " " + L("m", "tr") + "</b></div>"
    + "<div>" + L("Research range", "Khoảng định giá của phòng phân tích") + " <b>" + v.thap + "–" + v.cao + "</b></div>"
    + "<div>" + L("Company wants", "Doanh nghiệp đòi") + ' <b style="color:#d97706">' + v.doiHoi + "</b></div>"
    + "<div>" + L("Your reputation", "Uy tín của bạn") + " <b>" + Math.round(S.uyTin) + "/100</b>"
    + '<div class="ib-uy"><i style="width:' + Math.max(2, Math.min(100, S.uyTin)) + '%"></i></div></div>'
    + "</div>"
    + '<div class="ib-slider"><div class="ib-gia" id="ibG">' + S.gia + " " + L("k/share", "k/cp") + "</div>"
    + '<input type="range" id="ibR" min="' + Math.round(v.thap * 0.8) + '" max="' + Math.round(v.doiHoi * 1.15) + '" value="' + S.gia + '">'
    + '<div class="ib-hai"><span>' + L("cheap — sells out, company angry", "rẻ — bán hết, doanh nghiệp giận")
    + "</span><span>" + L("expensive — deal may fail", "đắt — có thể đổ thương vụ") + "</span></div></div>"
    + '<div class="ib-r"><div>' + L("You would raise", "Huy động được") + ' <b id="ibHuy">—</b></div>'
    + "<div>" + L("Your fee", "Phí của bạn") + ' <b id="ibPhi">—</b></div></div>'
    + '<button class="btn primary" id="ibGo" style="width:100%">' + L("Set this price and open the book", "Chốt giá này và mở sổ lệnh") + "</button>"
    + "</div>"
    + (S.ls.length ? veBang() : "") + "</div>";

  const r = goc.querySelector("#ibR");
  const capNhat = () => {
    S.gia = +r.value;
    goc.querySelector("#ibG").textContent = S.gia + " " + L("k/share", "k/cp");
    goc.querySelector("#ibHuy").textContent = T(S.gia * v.coPhieu) + " " + L("bn", "tỷ");
    goc.querySelector("#ibPhi").textContent = T(S.gia * v.coPhieu * PHI / 100) + " " + L("bn", "tỷ");
  };
  r.oninput = capNhat; capNhat();
  goc.querySelector("#ibGo").onclick = () => { chot(); ve(); };
}

function chot() {
  const k = tinh(S.gia);
  /* Uy tín: đổ thương vụ mất nhiều; định giá quá rẻ cũng mất, vì doanh nghiệp kể lại
     với các doanh nghiệp khác. Vừa phải thì tăng. */
  let d;
  if (!k.dat) d = -18;
  else if (k.nhayGia > 30) d = -6;
  else if (k.nhayGia > 12) d = +4;
  else d = +7;
  S.uyTin = Math.max(5, Math.min(100, S.uyTin + d));
  S.tongPhi += k.phi;
  S.ls.push(Object.assign({ vu: S.vu, dUyTin: d, uyTin: S.uyTin }, k));
  S.gia = null;
  if (S.vu >= SO_VU - 1) S.xong = true; else S.vu++;
}

function veBang() {
  return '<table class="ib-t"><tr><th>' + L("Company", "Doanh nghiệp") + "</th><th>" + L("Your price", "Giá bạn chốt")
    + "</th><th>" + L("Fair value", "Giá trị thật") + "</th><th>" + L("Subscribed", "Bán được")
    + "</th><th>" + L("Day-1 move", "Nhảy giá ngày đầu") + "</th><th>" + L("Left on table", "Bỏ lại trên bàn")
    + "</th><th>" + L("Your fee", "Phí") + "</th><th>" + L("Reputation", "Uy tín") + "</th></tr>"
    + S.ls.map(g => "<tr><td>" + g.v.ic + " " + L(g.v.ten.en, g.v.ten.vi) + "</td><td>" + g.gia
        + "</td><td>" + g.v.that + '</td><td style="color:' + (g.dat ? "#0e9f6e" : "#dc2626") + '">'
        + Math.round(g.banDuoc * 100) + "%" + (g.dat ? "" : " ✘") + '</td><td style="color:'
        + (g.nhayGia > 30 ? "#d97706" : "#0e9f6e") + '">' + (g.dat ? T1(g.nhayGia) + "%" : "—")
        + "</td><td>" + (g.boLo > 0 ? T(g.boLo) + " " + L("bn", "tỷ") : "—") + "</td><td>" + T(g.phi)
        + '</td><td style="color:' + (g.dUyTin > 0 ? "#0e9f6e" : "#dc2626") + '">'
        + (g.dUyTin > 0 ? "+" : "") + g.dUyTin + " → " + Math.round(g.uyTin) + "</td></tr>").join("")
    + "</table>";
}

function veTongKet() {
  const do_ = S.ls.filter(g => !g.dat).length;
  const reQua = S.ls.filter(g => g.dat && g.nhayGia > 30).length;
  const tot = S.ls.filter(g => g.dat && g.nhayGia <= 30).length;
  const tongBoLo = S.ls.reduce((a, g) => a + g.boLo, 0);
  goc.innerHTML = '<div class="ib-w">'
    + '<div class="ib-note"><b>' + L("Six deals done. Here is the scorecard.", "Xong sáu thương vụ. Đây là bảng điểm.") + "</b><br><br>"
    + L("Fees earned: <b>" + T(S.tongPhi) + " bn</b> · Reputation: <b>" + Math.round(S.uyTin) + "/100</b> · Deals pulled: <b>" + do_ + "</b> · Priced far too cheap: <b>" + reQua + "</b> · Well priced: <b>" + tot + "</b>",
        "Phí thu được: <b>" + T(S.tongPhi) + " tỷ</b> · Uy tín: <b>" + Math.round(S.uyTin) + "/100</b> · Thương vụ đổ: <b>" + do_ + "</b> · Định giá quá rẻ: <b>" + reQua + "</b> · Định giá hợp lý: <b>" + tot + "</b>")
    + "<br><br>"
    + (tongBoLo > 0
        ? L("Across the six deals you left <b>" + T(tongBoLo) + " bn</b> on the table — money the issuing companies could have raised but did not, because the shares jumped on day one.",
            "Qua sáu thương vụ bạn đã bỏ lại <b>" + T(tongBoLo) + " tỷ</b> trên bàn — số tiền mà các doanh nghiệp phát hành lẽ ra huy động được nhưng đã không, vì cổ phiếu nhảy giá ngay ngày đầu.")
        : L("You left almost nothing on the table — the issuers got close to full value.",
            "Bạn gần như không bỏ lại gì trên bàn — các doanh nghiệp phát hành nhận được gần đủ giá trị."))
    + "</div>"

    + '<div class="ib-hoc"><b>' + L("What chapter 1 is really about", "Chương 1 thật ra nói về điều gì") + "</b><br><br>"
    + L("Notice you were never able to please both sides at once. Price it where the company wants and the book does not fill; price it where investors want and the company watches its shares jump and asks why you sold them so cheaply. That squeeze <i>is</i> the job — an investment bank is paid to stand in a place where two clients want opposite things.",
        "Hãy để ý bạn chưa bao giờ làm vừa lòng được cả hai bên cùng lúc. Chốt theo giá doanh nghiệp đòi thì sổ lệnh không đầy; chốt theo giá nhà đầu tư muốn thì doanh nghiệp nhìn cổ phiếu nhảy vọt rồi hỏi vì sao bán rẻ vậy. Chính cái kẹt đó <i>là</i> nghề — ngân hàng đầu tư được trả tiền để đứng ở chỗ mà hai khách hàng muốn hai điều ngược nhau.")
    + "<br><br>"
    + L("And notice why deliberate <b>underpricing</b> is normal rather than incompetent: the fee on one deal is small next to the reputation that brings the next ten. A bank that burns investors once finds the phone stops being answered. Underpricing is what a repeated game looks like from the inside — which is also why the same few names keep winning mandates.",
        "Và để ý vì sao việc <b>định giá thấp hơn một chút</b> là chuyện bình thường chứ không phải kém: phí của một thương vụ là nhỏ so với uy tín mang lại mười thương vụ sau. Ngân hàng làm nhà đầu tư mất tiền một lần thì lần sau gọi không ai nghe. Định giá thấp chính là hình dạng của một ván chơi lặp lại khi nhìn từ bên trong — cũng là lý do chỉ vài cái tên quen thuộc cứ thắng thầu mãi.")
    + "</div>"
    + veBang()
    + '<div style="margin-top:14px"><button class="btn" id="ibLai">↻ ' + L("Play again", "Chơi lại") + "</button></div></div>";
  goc.querySelector("#ibLai").onclick = () => { batDau(); ve(); };
}

/* ---------------- Đăng ký ---------------- */
window.HUB_GAMES = window.HUB_GAMES || [];
window.HUB_GAMES.push({
  ch: 1, loai: "game",
  ten: { en: "Ch.1 · Pricing an IPO", vi: "Ch.1 · Định giá thương vụ IPO" },
  moTa: { en: "Take the underwriter's chair for six IPOs. The company wants a high price, investors want a low one, and you are paid by the company but need the investors back tomorrow. Find out why underpricing is normal rather than incompetent.",
          vi: "Ngồi vào ghế tổ chức bảo lãnh cho sáu thương vụ IPO. Doanh nghiệp muốn giá cao, nhà đầu tư muốn giá thấp, còn bạn ăn phí của doanh nghiệp nhưng ngày mai vẫn cần nhà đầu tư quay lại. Tự thấy vì sao định giá thấp là bình thường chứ không phải kém." },
  ve(el) { goc = el; batDau(); ve(); },
});
})();
