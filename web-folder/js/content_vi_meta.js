/* =====================================================================
   BAF736 — Bản dịch tiếng Việt: đề cương (CLO, cấu trúc đánh giá, tài liệu).
   (Phần công thức, mô phỏng, công cụ, thẻ ghi nhớ và hình vẽ do
    js/data_vi.js đảm nhiệm.)
   ===================================================================== */
(function () {
  "use strict";
  var M = window.COURSE_META;
  if (!M) return;

  var closVi = [
    "Phân tích các nghiệp vụ ngân hàng đầu tư chủ yếu và vận dụng vào hoạt động của ngân hàng đầu tư.",
    "Có khả năng giải quyết các vấn đề liên quan đến những nghiệp vụ ngân hàng đầu tư chủ yếu.",
    "Có khả năng cấu trúc các nghiệp vụ ngân hàng đầu tư, quản lý hoạt động theo nhóm khách hàng và đánh giá hiệu quả của từng nghiệp vụ trong ngân hàng đầu tư."
  ];
  (M.clos || []).forEach(function (c, i) { if (closVi[i]) c.textVi = closVi[i]; });

  var asmVi = [
    { itemVi: "Chuyên cần", methodVi: "Điểm danh ngẫu nhiên mỗi buổi; tham dự 100% số buổi được 10 điểm chuyên cần" },
    { itemVi: "Đánh giá quá trình 1 (Giữa kỳ)", methodVi: "Bài kiểm tra viết / tự luận sau Chương 3 — không sử dụng tài liệu, phạm vi Chương 1–3 và yêu cầu vận dụng kiến thức" },
    { itemVi: "Đánh giá quá trình 2 (Làm việc nhóm)", methodVi: "Nhóm chọn chủ đề sau mỗi buổi, thuyết trình và phản biện các nhóm khác; nộp bài tiểu luận tổng hợp ở buổi cuối" },
    { itemVi: "Thi cuối kỳ", methodVi: "Bài thi trắc nghiệm — 40 câu, 60 phút, Chương 1–6, không sử dụng tài liệu" }
  ];
  (M.assessment || []).forEach(function (a, i) {
    if (asmVi[i]) { a.itemVi = asmVi[i].itemVi; a.methodVi = asmVi[i].methodVi; }
  });

  M.materialsVi = [
    "[1] Rosenbaum, J., & Pearl, J. (2020). Investment Banking: Valuation, LBOs, M&A, and IPOs (3rd ed.). John Wiley & Sons. — giáo trình bắt buộc",
    "[2] Trần Tuấn Vinh & Hồ Công Hưởng (2023). Giáo trình Nghiệp vụ Ngân hàng Đầu tư. NXB Lao động. — giáo trình chính của học phần",
    "[3] Castillo, J. J., & McAniff, P. J. (2007). The Practitioner's Guide to Investment Banking, Mergers & Acquisitions, Corporate Finance. Scoopbooks.",
    "[4] Stowell, D. P., & Stowell, P. (2024). Investment Banks, Hedge Funds, and Private Equity (4th ed.). Academic Press.",
    "[5] Fleuriet, M. (2018). Investment Banking Explained: An Insider's Guide to the Industry (2nd ed.). McGraw Hill.",
    "[6] Caselli, S., Gigante, G., & Tortoroglio, A. (2021). Corporate and Investment Banking: A Hands-On Approach. Bocconi University Press."
  ];
})();
