/* =====================================================================
   NGÂN HÀNG ĐẦU TƯ · CHƯƠNG 4 — "HAI VÀ HAI MƯƠI"

   Chương quản lý tài sản dạy cơ cấu phí của quỹ: phí quản lý tính trên tài sản,
   phí thành công tính trên lợi nhuận. Sinh viên nghe "2% và 20%" rồi gật đầu —
   hai phần trăm nghe như một khoản nhỏ.

   Nó không nhỏ. Và điều làm nó không nhỏ không phải bản thân con số, mà là
   PHÉP NHÂN LẶP LẠI: khoản phí lấy đi năm nay còn lấy đi cả phần lãi mà số
   tiền ấy đáng ra sinh ra trong tất cả những năm sau. Chi phí không cộng dồn,
   nó luỹ thừa — y hệt lợi nhuận, chỉ ngược dấu.

   Đã CHẠY MÔ HÌNH trước khi viết (vốn 100, thị trường sinh lời 10%/năm, 20 năm):
     · Không phí          → 672,7
     · Quỹ chỉ số 0,3%    → 633,5   (mất  5,8% của phần đáng lẽ có)
     · Chủ động 2% + 20%  → 335,6   (mất 50,1% — một nửa)
   Nhà quản lý quỹ chủ động phải thắng thị trường 4,38 điểm phần trăm MỖI NĂM,
   suốt hai mươi năm, chỉ để nhà đầu tư hoà bằng quỹ chỉ số. Số này dò bằng
   phương pháp chia đôi rồi kiểm ngược: chạy lại với đúng mức alpha ấy cho ra
   633,5 — bằng đúng quỹ chỉ số.

   (Bốn con số trên tôi viết theo ước lượng ở bản nháp đầu — 636,6 / 371,0 /
   3,7% — rồi chạy mô hình mới thấy sai. Bài học thật ra còn nặng hơn ước
   lượng của tôi, nhưng nếu không chạy thì cả trang giấy đã sai số.)

   Trò không nói quản lý chủ động là vô ích. Nó chỉ đặt đúng câu hỏi mà sinh
   viên sẽ phải trả lời khi đi làm: NGƯỠNG phải vượt là bao nhiêu, và có bao
   nhiêu người vượt được ngưỡng ấy suốt hai mươi năm?
   ===================================================================== */
(function () {
"use strict";
const G = window.GK;
const { L, T, T1, T2, hop, hangThe, khung, moTa, nut, veDuong } = G;

const VON = 100, NAM = 20;
let goc = null, tt = 10.0, phiQL = 2.0, phiTC = 20, alpha = 0.0, daMo = false;

/* Mỗi năm: tài sản tăng theo (thị trường + alpha), trừ phí quản lý tính trên
   tài sản, rồi trừ phí thành công tính trên phần lãi dương còn lại.
   Phí thành công tính trên lãi SAU phí quản lý — đúng thông lệ. */
function chay(loiSuat, pQL, pTC) {
  const v = [VON];
  for (let n = 1; n <= NAM; n++) {
    const truoc = v[n - 1];
    const sauThiTruong = truoc * (1 + loiSuat / 100);
    const sauPhiQL = sauThiTruong * (1 - pQL / 100);
    const lai = sauPhiQL - truoc;
    const sau = sauPhiQL - (lai > 0 ? lai * pTC / 100 : 0);
    v.push(sau);
  }
  return v;
}

/* Alpha cần thiết để nhà đầu tư trong quỹ chủ động hoà bằng quỹ chỉ số.
   Dò bằng chia đôi — nhanh, chắc, và kiểm lại được trên giấy. */
function alphaHoaVon(loiSuat, pQL, pTC, pQLChiSo) {
  const dich = chay(loiSuat, pQLChiSo, 0)[NAM];
  let lo = 0, hi = 30;
  for (let i = 0; i < 60; i++) {
    const giua = (lo + hi) / 2;
    if (chay(loiSuat + giua, pQL, pTC)[NAM] < dich) lo = giua; else hi = giua;
  }
  return (lo + hi) / 2;
}

const PHI_CHI_SO = 0.3;

function ve() {
  const khongPhi = chay(tt, 0, 0);
  const chiSo = chay(tt, PHI_CHI_SO, 0);
  const chuDong = chay(tt + alpha, phiQL, phiTC);
  const can = alphaHoaVon(tt, phiQL, phiTC, PHI_CHI_SO);

  let h = moTa(L(
    `You put ${T(VON)} into a fund and leave it for ${NAM} years. The market returns ${T1(tt)}% a year. ` +
    `The fund charges ${T1(phiQL)}% of your assets every year plus ${T(phiTC)}% of any profit. Two per cent sounds small. Watch it for twenty years.`,
    `Bạn bỏ ${T(VON)} vào một quỹ và để yên trong ${NAM} năm. Thị trường sinh lời ${T1(tt)}% mỗi năm. ` +
    `Quỹ thu ${T1(phiQL)}% trên tài sản mỗi năm, cộng ${T(phiTC)}% trên phần lợi nhuận. Hai phần trăm nghe như ít. Hãy nhìn nó suốt hai mươi năm.`));

  h += veDuong([
    { ten: L("No fees at all", "Không mất phí nào"), mau: "#94a3b8", diem: khongPhi, net: true },
    { ten: L("Index fund " + T1(PHI_CHI_SO) + "%", "Quỹ chỉ số " + T1(PHI_CHI_SO) + "%"), mau: "#059669", diem: chiSo },
    { ten: L("Active fund", "Quỹ chủ động"), mau: "#dc2626", diem: chuDong },
  ], {
    cao: 250, min: 0,
    nhanX: khongPhi.map((_, i) => (i % 5 === 0 ? L("yr ", "năm ") + i : null)),
    dinhDangY: v => T(v),
  });

  h += G.thanhTruot("ib4-ql", L("Management fee (% of assets, every year)", "Phí quản lý (% tài sản, mỗi năm)"), 0, 40, Math.round(phiQL * 10), "#dc2626", T1(phiQL) + "%");
  h += G.thanhTruot("ib4-tc", L("Performance fee (% of profit)", "Phí thành công (% lợi nhuận)"), 0, 40, phiTC, "#b45309", phiTC + "%");
  h += G.thanhTruot("ib4-al", L("Manager's skill: extra return before fees", "Tài của nhà quản lý: lợi suất vượt trội trước phí"), 0, 80, Math.round(alpha * 10), "#059669", "+" + T1(alpha) + "%");
  h += G.thanhTruot("ib4-tt", L("Market return", "Thị trường sinh lời"), 40, 160, Math.round(tt * 10), "#1e3a8a", T1(tt) + "%");

  const matSoVoiChiSo = (chiSo[NAM] - chuDong[NAM]) / chiSo[NAM] * 100;
  h += hangThe([
    [L("Index fund", "Quỹ chỉ số"), T(chiSo[NAM]), "#059669"],
    [L("Active fund", "Quỹ chủ động"), T(chuDong[NAM]), chuDong[NAM] >= chiSo[NAM] ? "#059669" : "#dc2626"],
    [L("Difference", "Chênh lệch"), (chuDong[NAM] >= chiSo[NAM] ? "+" : "") + T(chuDong[NAM] - chiSo[NAM]),
      chuDong[NAM] >= chiSo[NAM] ? "#059669" : "#dc2626",
      T1(-matSoVoiChiSo) + "%"],
    [L("Skill needed to break even", "Tài cần có để hoà"), "+" + T2(can) + "%/" + L("yr", "năm"), "#b45309"],
  ]);

  h += hop(
    (alpha >= can
      ? L(`With ${T1(alpha)}% of extra return a year before fees, the manager clears the bar — just. Note how high the bar is: <b>${T2(can)}% every single year for ${NAM} years</b>, ` +
          `not on average, not in good years. That is the number a fee structure of ${T1(phiQL)}% and ${T(phiTC)}% quietly demands.`,
          `Với ${T1(alpha)}% lợi suất vượt trội mỗi năm trước phí, nhà quản lý vượt được ngưỡng — vừa đủ. Hãy để ý ngưỡng ấy cao thế nào: <b>${T2(can)}% mỗi năm, suốt ${NAM} năm</b>, ` +
          `không phải trung bình, không phải chỉ những năm thuận. Đó là con số mà cơ cấu phí ${T1(phiQL)}% và ${T(phiTC)}% lặng lẽ đòi hỏi.`)
      : L(`The manager delivers ${T1(alpha)}% of extra return a year before fees, and you still end up <b>${T(chiSo[NAM] - chuDong[NAM])} behind</b> the index fund — ${T1(matSoVoiChiSo)}% less money. ` +
          `To break even you would need <b>${T2(can)}% every year for ${NAM} years</b>.`,
          `Nhà quản lý tạo ra ${T1(alpha)}% lợi suất vượt trội mỗi năm trước phí, mà bạn vẫn <b>kém quỹ chỉ số ${T(chiSo[NAM] - chuDong[NAM])}</b> — ít hơn ${T1(matSoVoiChiSo)}% tiền. ` +
          `Muốn hoà thì cần <b>${T2(can)}% mỗi năm, suốt ${NAM} năm</b>.`)),
    alpha >= can ? "dat" : "hong");

  if (!daMo) h += nut("ib4-mo", L("Why does 2% cost so much?", "Vì sao 2% lại đắt đến thế?"), true);
  else {
    const k0 = chay(tt, 0, 0)[NAM], k1 = chay(tt, PHI_CHI_SO, 0)[NAM], k2 = chay(tt, phiQL, phiTC)[NAM];
    h += hop(L(
      `Because a fee is not a one-off deduction; it removes money that would otherwise have kept earning for the rest of your life.<br><br>` +
      `Over ${NAM} years at ${T1(tt)}%, ${T(VON)} with no fees becomes <b>${T(k0)}</b>. A ${T1(PHI_CHI_SO)}% index fund leaves you ${T(k1)} — you gave up ${T1((k0 - k1) / k0 * 100)}% of the pot. ` +
      `A ${T1(phiQL)}% and ${T(phiTC)}% structure with no outperformance at all leaves you <b>${T(k2)}</b> — you gave up <b>${T1((k0 - k2) / k0 * 100)}%</b>. ` +
      `The manager did not lose your money on bad investments; the market returned exactly the same ${T1(tt)}% in all three cases.<br><br>` +
      `<b>Two things follow, and neither is "never pay fees".</b><br>` +
      `First, fees have to be compared against the ${T2(can)}% hurdle, not against zero. A manager charging ${T1(phiQL)} and ${T(phiTC)} is not asking for ${T1(phiQL)}% of your money — ` +
      `they are asking you to bet that they can beat the market by ${T2(can)}% a year for two decades. Ask how many managers have ever done that, and how you would identify them in advance.<br><br>` +
      `Second, the performance fee has a shape worth noticing: the manager takes ${T(phiTC)}% of the gains but none of the losses. That is not a partnership, it is an option — and options are worth ` +
      `more when things are volatile, which quietly rewards taking risk with someone else's money. Serious funds address this with high-water marks and hurdle rates; ask whether the one in front of you does.`,

      `Vì một khoản phí không phải một lần trừ đi rồi thôi; nó lấy mất số tiền mà lẽ ra còn tiếp tục sinh lời trong suốt phần đời còn lại của bạn.<br><br>` +
      `Sau ${NAM} năm ở mức ${T1(tt)}%, ${T(VON)} không mất phí thành <b>${T(k0)}</b>. Quỹ chỉ số ${T1(PHI_CHI_SO)}% để lại cho bạn ${T(k1)} — bạn đã nhường đi ${T1((k0 - k1) / k0 * 100)}% cả nồi. ` +
      `Cơ cấu ${T1(phiQL)}% và ${T(phiTC)}% mà KHÔNG vượt trội chút nào để lại <b>${T(k2)}</b> — bạn đã nhường đi <b>${T1((k0 - k2) / k0 * 100)}%</b>. ` +
      `Nhà quản lý không hề làm mất tiền của bạn vì đầu tư dở; cả ba trường hợp thị trường đều sinh lời đúng ${T1(tt)}% như nhau.<br><br>` +
      `<b>Hai điều rút ra, và không điều nào là "đừng bao giờ trả phí".</b><br>` +
      `Thứ nhất, phí phải được đem so với ngưỡng ${T2(can)}%, không phải so với số không. Một nhà quản lý thu ${T1(phiQL)} và ${T(phiTC)} không phải đang xin ${T1(phiQL)}% tiền của bạn — ` +
      `họ đang mời bạn đặt cược rằng họ thắng được thị trường ${T2(can)}% mỗi năm trong hai thập kỷ. Hãy hỏi đã có bao nhiêu người làm được điều đó, và bạn nhận ra họ TRƯỚC bằng cách nào.<br><br>` +
      `Thứ hai, phí thành công có một hình dạng đáng để ý: nhà quản lý lấy ${T(phiTC)}% phần lãi nhưng không chịu phần lỗ nào. Đó không phải quan hệ hợp tác, đó là một quyền chọn — mà quyền chọn thì ` +
      `đáng giá hơn khi mọi thứ biến động mạnh, tức là lặng lẽ thưởng cho việc mạo hiểm bằng tiền người khác. Các quỹ nghiêm túc xử lý điều này bằng mốc đỉnh cũ và ngưỡng lợi suất tối thiểu; hãy hỏi xem quỹ trước mặt bạn có không.`),
      "canh", L("Fees compound too", "Phí cũng lãi kép"));
  }

  goc.innerHTML = khung(h);
  const b = (id, f) => { const e = goc.querySelector(id); if (e) e.oninput = () => { f(+e.value); ve(); }; };
  b("#ib4-ql", v => phiQL = v / 10);
  b("#ib4-tc", v => phiTC = v);
  b("#ib4-al", v => alpha = v / 10);
  b("#ib4-tt", v => tt = v / 10);
  const m = goc.querySelector("#ib4-mo"); if (m) m.onclick = () => { daMo = true; ve(); };
}

window.HUB_GAMES = window.HUB_GAMES || [];
window.HUB_GAMES.push({
  ch: 4, loai: "game",
  ten: { en: "Ch.4 · Two and twenty", vi: "Ch.4 · Hai và hai mươi" },
  moTa: {
    en: "Put 100 into a fund for twenty years. A 2%-and-20% fee structure takes 45% of what you would otherwise have had — without the manager losing a single trade. Find out how much skill is needed just to break even against a cheap index fund.",
    vi: "Bỏ 100 vào một quỹ trong hai mươi năm. Cơ cấu phí 2% và 20% lấy đi 45% số tiền đáng lẽ bạn có — mà nhà quản lý không hề thua một thương vụ nào. Hãy xem cần bao nhiêu tài năng chỉ để hoà bằng một quỹ chỉ số rẻ tiền.",
  },
  ve(el) { goc = el; ve(); },
});
})();
