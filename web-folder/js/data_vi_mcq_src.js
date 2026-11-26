/* =====================================================================
   BAF736 — Bản dịch tiếng Việt: trường nguồn trích dẫn (src) của toàn bộ
   ngân hàng câu hỏi trắc nghiệm. Chuyển "Ch.n" → "Chương n" một cách cơ học,
   giữ nguyên số hiệu mục, số hiệu tài liệu [n] và tên riêng.
   ===================================================================== */
(function () {
  "use strict";
  var BANKS = ["QUIZ_BANK", "QUIZ_BANK2", "QUIZ_BANK3", "QUIZ_BANK4", "QUIZ_BANK5", "QUIZ_BANK6"];

  function viSrc(s) {
    if (!s) return s;
    return String(s)
      .replace(/\bCh\.\s*/g, "Chương ")
      .replace(/\bChapter\s+/gi, "Chương ")
      .replace(/\bLecture slides?\b/gi, "Slide bài giảng")
      .replace(/\bTextbook\b/gi, "Giáo trình")
      .replace(/\bcourse text\b/gi, "giáo trình học phần")
      .replace(/\bSlides?\b/g, "Slide");
  }

  var n = 0;
  BANKS.forEach(function (name) {
    var b = window[name];
    if (!Array.isArray(b)) return;
    b.forEach(function (q) {
      if (q.src && !q.srcVi) {
        var v = viSrc(q.src);
        if (v !== q.src) { q.srcVi = v; n++; }
      }
    });
  });
  window.DATA_VI_MCQ_SRC_APPLIED = n;
})();
