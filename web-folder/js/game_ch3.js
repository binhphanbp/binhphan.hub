/* =====================================================================
   NGÂN HÀNG ĐẦU TƯ · CHƯƠNG 3 — TRÒ CHƠI "LỜI NGUYỀN NGƯỜI THẮNG"

   Chương M&A dạy các phương pháp định giá, và sinh viên rời lớp với ấn tượng
   rằng khó khăn nằm ở chỗ định giá cho đúng. Nhưng phần lớn thương vụ M&A thất
   bại KHÔNG phải vì bên mua định giá kém. Họ định giá tử tế, rồi vẫn trả quá tay.

   Lý do là một điều phản trực giác, và nó là toàn bộ nội dung trò chơi này:
   TRONG MỘT CUỘC ĐẤU GIÁ, VIỆC BẠN THẮNG ĐÃ LÀ MỘT TIN XẤU. Sáu bên mua cùng
   ước lượng một doanh nghiệp, mỗi bên sai một ít theo hướng khác nhau. Bên
   thắng gần như luôn là bên ước lượng CAO NHẤT — tức là bên sai nhiều nhất về
   phía lạc quan. Thắng đấu giá và trả quá tay là gần như cùng một việc.

   Số liệu đã mô phỏng 20.000 phiên trước khi viết:
     · Nếu mọi bên trả đúng bằng ước lượng của mình: giá thắng trung bình 1.191
       trên giá trị thật 1.000 — người thắng lỗ trung bình 191.
     · Chỉ 1,6% thương vụ mang lại lãi cho bên thắng.
     · Muốn hoà vốn, mọi bên phải hạ giá chào khoảng 190 so với ước lượng của
       mình, tức khoảng 1,3 lần độ lớn sai số.

   Sinh viên chơi vai một bên mua: nhận ước lượng của riêng mình, ra giá, rồi
   xem kết quả. Chơi mười phiên là tự rút ra quy tắc, không cần ai giảng.
   ===================================================================== */
(function () {
"use strict";

function vi() { return !(window.I18N && window.I18N.lang === "en"); }
function L(en, v) { return vi() ? v : en; }
const _loc = () => (vi() ? "vi-VN" : "en-US");   // dấu thập phân theo ngôn ngữ đang xem
const T = n => Math.round(n).toLocaleString(_loc());
const T1 = n => (Math.round(n * 10) / 10).toLocaleString(_loc(), { minimumFractionDigits: 1, maximumFractionDigits: 1 });

const GIA_TRI = 1000;      // giá trị thật, tỷ đồng — sinh viên KHÔNG thấy
const NHIEU = 150;         // độ lớn sai số ước lượng của mỗi bên
const SO_BEN = 6;          // số bên tham gia, kể cả người chơi
const SO_PHIEN = 10;

const DOI_THU = [
  { ten: { en: "Meridian Capital",  vi: "Meridian Capital" },  ic: "" },
  { ten: { en: "Trường Sơn Group",  vi: "Tập đoàn Trường Sơn" }, ic: "" },
  { ten: { en: "Hoa Sen Holdings",  vi: "Hoa Sen Holdings" },  ic: "" },
  { ten: { en: "Pacific Rim Fund",  vi: "Quỹ Pacific Rim" },   ic: "" },
  { ten: { en: "An Bình Invest",    vi: "An Bình Invest" },    ic: "" },
];

/* Bộ số giả ngẫu nhiên có hạt giống: cả lớp gặp cùng bộ tình huống, thầy cô mở
   lại lần sau vẫn đúng bộ ấy, và ai thắc mắc thì kiểm lại được. */
function mul(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function chuan(r) {
  let u = 0, v = 0;
  while (u === 0) u = r();
  while (v === 0) v = r();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

let goc = null;
let phien = 0;
let lichSu = [];          // {uocLuong, giaChao, giaThang, aiThang, lai}
let giaChao = 1000;
let daXongHet = false;

function dungPhien(i) {
  /* Bộ hạt giống này được DÒ ra chứ không gõ bừa. Bốn tiêu chí để mười phiên
     dạy được điều cần dạy: ước lượng của người chơi không thiên lệch (lệch −6);
     chào đúng bằng ước lượng thì thắng 3 phiên và LỖ 526 — thấy được lời nguyền;
     chào cao hơn 100 thì thắng nhiều hơn (4 phiên) mà lỗ nặng hơn (1.018) — càng
     hăng càng thiệt; hạ 200 thì chỉ thắng 1 phiên nhưng CÓ LÃI — thấy cách chữa.
     Bản nháp đầu dùng hạt giống tuỳ tiện và người chơi không thắng nổi phiên nào
     trong cả mười vòng: chơi xong chỉ thấy chữ "bạn thua", không rút ra được gì. */
  const r = mul(139544 + i * 4523);
  const uoc = [];
  for (let k = 0; k < SO_BEN; k++) uoc.push(GIA_TRI + NHIEU * chuan(r));
  /* Các bên khác trả giá bằng đúng ước lượng của mình, có nhiễu nhỏ về phong
     cách — đây là hành vi "ngây thơ" mà trò chơi muốn sinh viên nhìn thấy hậu
     quả. Nếu cho đối thủ chơi khôn ngay từ đầu thì không còn gì để học. */
  const giaDoiThu = uoc.slice(1).map((x, k) => x * (1 + 0.01 * chuan(r)));
  return { uocCuaToi: uoc[0], giaDoiThu };
}

function ve() {
  if (phien >= SO_PHIEN) return veTongKet();
  const p = dungPhien(phien);
  const daChao = lichSu.length > phien;

  let h = `<div style="font:14px/1.6 system-ui,-apple-system,Segoe UI,sans-serif;color:#0f172a">`;
  h += `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:9px">` +
    `<b>${L("Deal", "Thương vụ")} ${phien + 1}/${SO_PHIEN}</b>` +
    `<span style="font-size:12.5px;color:#64748b">${L("Cumulative profit", "Lãi lỗ cộng dồn")}: ` +
    `<b style="color:${tongLai() >= 0 ? "#059669" : "#dc2626"}">${tongLai() >= 0 ? "+" : ""}${T(tongLai())}</b></span></div>`;

  if (!daChao) {
    h += `<p style="margin:0 0 11px;color:#475569">` +
      L(`A target company is up for sale. Six bidders, sealed envelopes, highest bid wins and pays its own bid. ` +
        `Nobody knows what the company is really worth — each bidder's analysts produce an estimate that is close, but off by a bit in either direction.`,
        `Một doanh nghiệp đang được chào bán. Sáu bên mua, bỏ phong bì kín, ai trả cao nhất thì thắng và phải trả đúng giá mình chào. ` +
        `Không ai biết doanh nghiệp thật sự đáng bao nhiêu — bộ phận phân tích của mỗi bên đưa ra một ước lượng gần đúng, nhưng lệch một chút theo hướng nào đó.`) + `</p>`;

    h += `<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:13px 15px;margin-bottom:12px">` +
      `<div style="font-size:12.5px;color:#1e40af">${L("Your analysts' valuation", "Định giá của bộ phận phân tích BÊN BẠN")}</div>` +
      `<div style="font-size:30px;font-weight:800;color:#1e3a8a">${T(p.uocCuaToi)} <span style="font-size:15px;font-weight:600">${L("bn ₫", "tỷ ₫")}</span></div>` +
      `<div style="font-size:12px;color:#475569;margin-top:3px">` +
      L(`Your team is competent: on average their estimate is right. Any single estimate is typically off by about ${T(NHIEU)} either way.`,
        `Đội của bạn làm việc tử tế: tính trung bình thì họ ước lượng đúng. Nhưng từng lần một thì thường lệch chừng ${T(NHIEU)} theo hướng này hoặc hướng kia.`) +
      `</div></div>`;

    h += `<div style="display:flex;align-items:center;gap:11px;margin-bottom:9px">` +
      `<span style="font-size:13px;width:110px">${L("Your bid", "Giá bạn chào")}</span>` +
      `<input type="range" id="wc-gia" min="${Math.round(p.uocCuaToi - 450)}" max="${Math.round(p.uocCuaToi + 200)}" value="${Math.round(giaChao)}" style="flex:1;accent-color:#1e3a8a">` +
      `<span id="wc-hien" style="width:120px;text-align:right;font-weight:800;font-size:18px">${T(giaChao)}</span></div>`;
    h += `<div id="wc-lech" style="font-size:12.5px;color:#64748b;margin-bottom:12px"></div>`;
    h += `<button id="wc-chao" style="border:0;background:#1e3a8a;color:#fff;border-radius:8px;padding:10px 20px;cursor:pointer;font-weight:700;font-size:14px">` +
      L("Submit the bid", "Nộp phong bì") + `</button>`;

    if (phien > 0) h += bangLichSu();
    h += `</div>`;
    goc.innerHTML = h;

    const sl = goc.querySelector("#wc-gia"), hien = goc.querySelector("#wc-hien"), lech = goc.querySelector("#wc-lech");
    const capNhat = () => {
      giaChao = +sl.value;
      hien.textContent = T(giaChao);
      const d = giaChao - p.uocCuaToi;
      lech.innerHTML = Math.abs(d) < 8
        ? L("You are bidding exactly your own valuation.", "Bạn đang chào đúng bằng định giá của mình.")
        : (d < 0
          ? L(`You are bidding <b>${T(-d)} below</b> your own valuation.`, `Bạn đang chào <b>thấp hơn ${T(-d)}</b> so với định giá của mình.`)
          : L(`You are bidding <b>${T(d)} above</b> your own valuation.`, `Bạn đang chào <b>cao hơn ${T(d)}</b> so với định giá của mình.`));
    };
    sl.oninput = capNhat; capNhat();
    goc.querySelector("#wc-chao").onclick = () => { nopGia(p); ve(); };
    return;
  }

  // ---- đã chào: hiện kết quả phiên ----
  const kq = lichSu[phien];
  const thang = kq.aiThang === 0;
  h += `<div style="background:${thang ? (kq.lai >= 0 ? "#ecfdf5" : "#fef2f2") : "#f8fafc"};` +
    `border:1px solid ${thang ? (kq.lai >= 0 ? "#6ee7b7" : "#fecaca") : "#e2e8f0"};border-radius:10px;padding:13px 15px;margin-bottom:12px">`;
  if (thang) {
    h += `<div style="font-size:16px;font-weight:800;margin-bottom:6px">${L("You won the deal.", "Bạn thắng thương vụ.")}</div>`;
    h += L(`You paid <b>${T(kq.giaChao)}</b>. The company was actually worth <b>${T(GIA_TRI)}</b>.<br>` +
           `<span style="font-size:19px;font-weight:800;color:${kq.lai >= 0 ? "#059669" : "#dc2626"}">${kq.lai >= 0 ? "+" : ""}${T(kq.lai)}</span>`,
           `Bạn trả <b>${T(kq.giaChao)}</b>. Doanh nghiệp thật sự đáng <b>${T(GIA_TRI)}</b>.<br>` +
           `<span style="font-size:19px;font-weight:800;color:${kq.lai >= 0 ? "#059669" : "#dc2626"}">${kq.lai >= 0 ? "+" : ""}${T(kq.lai)}</span>`);
  } else {
    h += `<div style="font-size:16px;font-weight:800;margin-bottom:6px">${L("You lost the auction.", "Bạn không thắng.")}</div>`;
    h += L(`${DOI_THU[kq.aiThang - 1].ten.en} won at <b>${T(kq.giaThang)}</b>. The company was worth <b>${T(GIA_TRI)}</b> — ` +
           `so they ${kq.laiCuaHo >= 0 ? "made" : "lost"} <b>${T(Math.abs(kq.laiCuaHo))}</b>. You made nothing, and lost nothing.`,
           `${DOI_THU[kq.aiThang - 1].ten.vi} thắng ở mức <b>${T(kq.giaThang)}</b>. Doanh nghiệp đáng <b>${T(GIA_TRI)}</b> — ` +
           `nên họ ${kq.laiCuaHo >= 0 ? "lãi" : "lỗ"} <b>${T(Math.abs(kq.laiCuaHo))}</b>. Bạn không được gì, và cũng không mất gì.`);
  }
  h += `</div>`;

  // bảng giá chào của cả sáu bên
  h += `<div style="font-size:12.5px;color:#64748b;margin-bottom:5px">${L("All six envelopes", "Sáu phong bì")}</div>`;
  h += `<div style="display:grid;gap:4px;margin-bottom:12px">`;
  const tatCa = [{ ten: L("You", "Bạn"), ic: "", gia: kq.giaChao, la: true }]
    .concat(kq.giaDoiThu.map((g, i) => ({ ten: DOI_THU[i].ten[vi() ? "vi" : "en"], ic: DOI_THU[i].ic, gia: g })));
  tatCa.sort((a, b) => b.gia - a.gia);
  for (const x of tatCa) {
    const cao = Math.abs(x.gia - kq.giaThang) < 0.5;
    h += `<div style="display:flex;align-items:center;gap:8px;padding:5px 9px;border-radius:7px;` +
      `background:${x.la ? "#eff6ff" : "#fff"};border:1px solid ${cao ? "#f59e0b" : "#e2e8f0"}">` +
      `<span>${x.ic}</span><span style="flex:1;font-size:13px${x.la ? ";font-weight:700" : ""}">${x.ten}</span>` +
      `<span style="font-weight:700;font-size:13.5px;color:${x.gia > GIA_TRI ? "#dc2626" : "#059669"}">${T(x.gia)}</span>` +
      (cao ? `<span style="font-size:11px;color:#b45309;font-weight:700">${L("won", "thắng")}</span>` : `<span style="width:32px"></span>`) +
      `</div>`;
  }
  h += `</div>`;
  h += `<p style="font-size:12px;color:#64748b;margin:0 0 12px">` +
    L(`Green means the bid was below what the company was worth; red means above. Notice where the winning bid tends to sit.`,
      `Màu xanh là chào thấp hơn giá trị thật, màu đỏ là chào cao hơn. Để ý xem giá thắng thường nằm ở đâu.`) + `</p>`;

  h += `<button id="wc-tiep" style="border:0;background:#1e3a8a;color:#fff;border-radius:8px;padding:9px 18px;cursor:pointer;font-weight:600">` +
    (phien < SO_PHIEN - 1 ? L("Next deal", "Thương vụ tiếp") : L("See the whole picture", "Xem toàn cảnh")) + `</button>`;
  h += bangLichSu();
  h += `</div>`;
  goc.innerHTML = h;
  goc.querySelector("#wc-tiep").onclick = () => { phien++; ve(); };
}

function nopGia(p) {
  const tatCa = [giaChao].concat(p.giaDoiThu);
  const giaThang = Math.max(...tatCa);
  const aiThang = tatCa.indexOf(giaThang);
  lichSu[phien] = {
    uocLuong: p.uocCuaToi, giaChao, giaDoiThu: p.giaDoiThu, giaThang, aiThang,
    lai: aiThang === 0 ? GIA_TRI - giaChao : 0,
    laiCuaHo: GIA_TRI - giaThang,
  };
}
const tongLai = () => lichSu.reduce((a, x) => a + (x ? x.lai : 0), 0);

function bangLichSu() {
  if (!lichSu.length) return "";
  let h = `<div style="margin-top:14px"><div style="font-size:12.5px;color:#64748b;margin-bottom:5px">${L("Your record", "Sổ tay của bạn")}</div>` +
    `<div style="display:grid;grid-template-columns:repeat(${Math.min(lichSu.length, 10)},1fr);gap:3px">`;
  for (const x of lichSu) {
    if (!x) continue;
    const thang = x.aiThang === 0;
    h += `<div title="${L("bid", "chào")} ${T(x.giaChao)}" style="height:34px;border-radius:5px;display:flex;align-items:center;justify-content:center;` +
      `font-size:11px;font-weight:700;color:#fff;background:${!thang ? "#94a3b8" : x.lai >= 0 ? "#059669" : "#dc2626"}">` +
      (!thang ? "—" : (x.lai >= 0 ? "+" : "") + T(x.lai)) + `</div>`;
  }
  h += `</div><div style="font-size:11.5px;color:#94a3b8;margin-top:4px">` +
    L("grey = did not win · green = won at a profit · red = won at a loss", "xám = không thắng · xanh = thắng có lãi · đỏ = thắng bị lỗ") +
    `</div></div>`;
  return h;
}

/* ---------------- Tổng kết ---------------- */
function veTongKet() {
  const thang = lichSu.filter(x => x.aiThang === 0);
  const laiKhiThang = thang.length ? thang.reduce((a, x) => a + x.lai, 0) / thang.length : 0;
  const traQua = thang.filter(x => x.giaChao > GIA_TRI).length;
  const lechTB = lichSu.reduce((a, x) => a + (x.giaChao - x.uocLuong), 0) / lichSu.length;

  // Toàn cảnh: nếu MỌI bên chào đúng bằng ước lượng thì bên thắng lãi lỗ ra sao
  const moPhong = (() => {
    const r = mul(20260831);
    let tong = 0, coLai = 0, n = 4000;
    for (let k = 0; k < n; k++) {
      let max = -1e9;
      for (let i = 0; i < SO_BEN; i++) { const u = GIA_TRI + NHIEU * chuan(r); if (u > max) max = u; }
      tong += GIA_TRI - max;
      if (GIA_TRI - max > 0) coLai++;
    }
    return { tb: tong / n, tyLe: coLai / n * 100 };
  })();

  let h = `<div style="font:14px/1.6 system-ui,-apple-system,Segoe UI,sans-serif;color:#0f172a">`;
  h += `<h3 style="margin:0 0 10px;font-size:17px">${L("Ten deals later", "Sau mười thương vụ")}</h3>`;

  h += `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:9px;margin-bottom:13px">` +
    o(L("Deals won", "Thương vụ thắng"), thang.length + "/" + SO_PHIEN, "#0f172a") +
    o(L("Total profit", "Tổng lãi lỗ"), (tongLai() >= 0 ? "+" : "") + T(tongLai()), tongLai() >= 0 ? "#059669" : "#dc2626") +
    o(L("Avg. when you won", "Trung bình khi thắng"), (laiKhiThang >= 0 ? "+" : "") + T(laiKhiThang), laiKhiThang >= 0 ? "#059669" : "#dc2626") +
    o(L("Overpaid", "Số lần trả quá tay"), traQua + "/" + (thang.length || 0), traQua ? "#dc2626" : "#059669") +
    `</div>`;

  h += bangLichSu();

  h += `<div style="margin-top:14px;background:#fffbeb;border:1px solid #fcd34d;border-radius:10px;padding:14px 16px;font-size:13.5px;line-height:1.7">` +
    `<b>${L("Winning is bad news", "Thắng là một tin xấu")}</b><br><br>` +
    L(`Every bidder's analysts were competent — on average their valuations were exactly right. And yet the auction does not pick a random bidder. ` +
      `It picks the one who bid highest, which is almost always the one whose estimate was <i>most optimistic</i>. ` +
      `So the moment you win, you have learned something painful: your five rivals all valued this company lower than you did.<br><br>` +
      `Simulating ${T(4000)} auctions where everyone bids exactly their own valuation: the winner pays <b>${T(GIA_TRI - moPhong.tb)}</b> on average ` +
      `for something worth <b>${T(GIA_TRI)}</b> — a loss of ${T(-moPhong.tb)} per deal, and only <b>${T1(moPhong.tyLe)}%</b> of deals end up profitable for the winner. ` +
      `This is not bad luck. It is arithmetic, and it has a name: the winner's curse.<br><br>` +
      `<b>The fix is uncomfortable but simple: bid below your own valuation.</b> With six bidders and estimates typically off by ${T(NHIEU)}, ` +
      `you need to shade roughly <b>${T(190)}</b> — about 1.3 times the size of the error — just to break even. ` +
      `You will lose most auctions. That is the point: the auctions you lose are mostly the ones you should have lost.`,

      `Bộ phận phân tích của bên nào cũng làm việc tử tế — tính trung bình thì họ định giá đúng. Nhưng cuộc đấu giá không chọn ngẫu nhiên một bên. ` +
      `Nó chọn bên trả cao nhất, mà bên đó gần như luôn là bên có ước lượng <i>lạc quan nhất</i>. ` +
      `Nên ngay khoảnh khắc bạn thắng, bạn vừa biết thêm một điều khó chịu: cả năm đối thủ đều định giá doanh nghiệp này thấp hơn bạn.<br><br>` +
      `Mô phỏng ${T(4000)} phiên đấu giá trong đó ai cũng chào đúng bằng định giá của mình: bên thắng trả trung bình <b>${T(GIA_TRI - moPhong.tb)}</b> ` +
      `cho thứ đáng <b>${T(GIA_TRI)}</b> — lỗ ${T(-moPhong.tb)} mỗi thương vụ, và chỉ <b>${T1(moPhong.tyLe)}%</b> số thương vụ mang lại lãi cho bên thắng. ` +
      `Đây không phải xui. Đây là số học, và nó có tên: lời nguyền người thắng.<br><br>` +
      `<b>Cách chữa thì khó nuốt nhưng đơn giản: chào THẤP HƠN định giá của chính mình.</b> Với sáu bên mua và sai số ước lượng chừng ${T(NHIEU)}, ` +
      `bạn phải hạ khoảng <b>${T(190)}</b> — chừng 1,3 lần độ lớn sai số — mới chỉ để hoà vốn. ` +
      `Bạn sẽ thua phần lớn các phiên. Đó chính là điều cần đạt: những phiên bạn thua phần lớn là những phiên đáng thua.`) +
    `<br><br><span style="color:#92400e">` +
    L(`Your own record: on average you bid ${lechTB >= 0 ? T(lechTB) + " above" : T(-lechTB) + " below"} your valuation. ` +
      (lechTB > -100
        ? "That is not enough shading for a six-bidder auction — the numbers above say why."
        : "That is roughly the right instinct; notice how many auctions you had to walk away from to get it."),
      `Sổ của bạn: trung bình bạn chào ${lechTB >= 0 ? "cao hơn " + T(lechTB) : "thấp hơn " + T(-lechTB)} so với định giá của mình. ` +
      (lechTB > -100
        ? "Với phiên sáu bên thì hạ chừng đó là chưa đủ — các con số phía trên nói rõ vì sao."
        : "Bản năng như vậy là gần đúng; để ý xem bạn đã phải bỏ qua bao nhiêu phiên để có được nó.")) +
    `</span></div>`;

  h += `<div style="margin-top:12px;font-size:12.5px;color:#64748b;line-height:1.6">` +
    L("Two things this model deliberately leaves out, both of which make real M&A worse, not better: bidders who want the deal for reasons other than value " +
      "(empire building, a CEO's legacy), and advisers paid a percentage of the transaction rather than of the return. Both push bids up, not down.",
      "Hai điều mô hình này cố tình bỏ qua, và cả hai đều làm M&A ngoài đời tệ hơn chứ không tốt hơn: những bên muốn thâu tóm vì lý do khác giá trị " +
      "(mở rộng đế chế, di sản của tổng giám đốc), và bên tư vấn hưởng phần trăm trên GIÁ TRỊ THƯƠNG VỤ chứ không phải trên lợi nhuận nó mang lại. Cả hai đều đẩy giá chào lên, không kéo xuống.") +
    `</div>`;

  h += `<button id="wc-lai" style="margin-top:12px;border:1px solid #cbd5e1;background:#fff;border-radius:8px;padding:8px 15px;cursor:pointer;font-size:13px">` +
    L("Play again", "Chơi lại") + `</button></div>`;
  goc.innerHTML = h;
  goc.querySelector("#wc-lai").onclick = () => { phien = 0; lichSu = []; giaChao = 1000; ve(); };
}

function o(nhan, gt, mau) {
  return `<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:9px;padding:8px 9px;text-align:center">` +
    `<div style="font-size:11px;color:#64748b">${nhan}</div>` +
    `<div style="font-size:17px;font-weight:700;color:${mau}">${gt}</div></div>`;
}

/* ---------------- Đăng ký ---------------- */
window.HUB_GAMES = window.HUB_GAMES || [];
window.HUB_GAMES.push({
  ch: 3, loai: "game",
  ten: { en: "Ch.3 · The winner's curse", vi: "Ch.3 · Lời nguyền người thắng" },
  moTa: {
    en: "Bid for ten companies against five rivals whose analysts are just as good as yours. Winning the auction and overpaying turn out to be nearly the same event — only 1.6% of deals are profitable for the winner if nobody shades their bid.",
    vi: "Đấu giá mười doanh nghiệp với năm đối thủ có đội phân tích giỏi ngang bạn. Hoá ra thắng đấu giá và trả quá tay gần như là cùng một việc — chỉ 1,6% thương vụ có lãi cho bên thắng nếu không ai chịu hạ giá chào.",
  },
  ve(el) { goc = el; ve(); },
});
})();
