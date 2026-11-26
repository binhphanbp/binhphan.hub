/* =====================================================================
   BAF736 — Bản dịch tiếng Việt: phần giải thích theo mẫu của 500 câu trắc
   nghiệm trong ngân hàng câu hỏi của khoa (QB-xxx).

   Các câu này dùng đúng một mẫu câu, trong đó đoạn trích dẫn LUÔN bằng
   phương án đúng opts[ans]. Vì vậy explVi được sinh tự động từ optsVi[ans]
   đã dịch — bảo đảm nhất quán tuyệt đối giữa giải thích và phương án.

   PHẢI nạp SAU các tệp data_vi_mcq_ch*.js (nơi gán optsVi).
   ===================================================================== */
(function () {
  "use strict";
  var BANKS = ["QUIZ_BANK", "QUIZ_BANK2", "QUIZ_BANK3", "QUIZ_BANK4", "QUIZ_BANK5", "QUIZ_BANK6"];

  /* Tên chương tiếng Việt — khớp với js/content_vi.js */
  var CH_VI = {
    1: "Tổng quan về Ngân hàng Đầu tư",
    2: "Nghiệp vụ hỗ trợ huy động vốn",
    3: "Nghiệp vụ tư vấn Mua bán & Sáp nhập (M&A)",
    4: "Nghiệp vụ quản lý tài sản",
    5: "Nghiệp vụ tư vấn doanh nghiệp",
    6: "Nghiệp vụ hỗ trợ giao dịch trên thị trường thứ cấp"
  };

  var TEMPLATE = /^The correct choice is &ldquo;(.+)&rdquo;\. Review Chapter (\d) &mdash; (.+?) &mdash; for the underlying concept\.$/;

  var applied = 0, skipped = 0;
  BANKS.forEach(function (name) {
    var b = window[name];
    if (!Array.isArray(b)) return;
    b.forEach(function (q) {
      if (q.explVi) return;                       // đã dịch thủ công
      if (!TEMPLATE.test(q.expl || "")) return;   // không thuộc mẫu
      var opts = q.optsVi;
      if (!Array.isArray(opts) || !opts[q.ans]) { skipped++; return; }
      var ch = CH_VI[q.ch] || ("Chương " + q.ch);
      q.explVi = "Đáp án đúng là &ldquo;" + opts[q.ans] + "&rdquo;. Xem lại Chương " +
                 q.ch + " — " + ch + " — để nắm khái niệm nền tảng.";
      applied++;
    });
  });
  window.DATA_VI_MCQ_EXPL_APPLIED = { generated: applied, awaitingOpts: skipped };
})();
