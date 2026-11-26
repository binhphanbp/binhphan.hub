/* Bổ sung 7 thẻ ghi nhớ chưa khớp khoá trong data_vi.js */
(function () {
  "use strict";
  var EXTRA = {
    "Glass-Steagall (1933)": ["Đạo luật Glass-Steagall (1933)", "Đạo luật Hoa Kỳ tách bạch ngân hàng thương mại với ngân hàng đầu tư; bị bãi bỏ bởi Gramm-Leach-Bliley năm 1999."],
    "Firm commitment vs. best efforts": ["Cam kết chắc chắn và Nỗ lực tối đa", "Ngân hàng mua trọn đợt phát hành và chịu rủi ro bán lại, so với chỉ cam kết cố gắng bán."],
    "AUM": ["AUM — Tài sản quản lý", "Tổng vốn khách hàng mà công ty quản lý; là cơ sở để tính phí quản lý."],
    "Sharpe vs. information ratio": ["Sharpe và Tỷ số thông tin", "Lợi nhuận vượt trội trên mỗi đơn vị rủi ro tổng, so với lợi nhuận chủ động trên mỗi đơn vị sai số theo dõi."],
    "Why the median multiple?": ["Vì sao dùng bội số trung vị?", "Phân phối bội số lệch phải và nhóm so sánh nhỏ, nên trung vị chống được ảnh hưởng của giá trị ngoại lai."],
    "Spin-off vs. carve-out": ["Chia tách và Chào bán một phần", "Chia cổ phần công ty con cho cổ đông hiện hữu (không thu tiền) so với IPO một phần thiểu số (thu tiền, vẫn giữ kiểm soát)."],
    "Leverage & coverage ratios": ["Hệ số đòn bẩy & khả năng trả lãi", "Nợ ròng / EBITDA (hạng đầu tư dưới ~3×) · EBIT / Chi phí lãi vay (thoải mái trên ~5×)."]
  };
  var n = 0;
  (window.FLASHCARDS || []).forEach(function (c) {
    if (!c.frontVi && EXTRA[c.front]) { c.frontVi = EXTRA[c.front][0]; c.backVi = EXTRA[c.front][1]; n++; }
  });
  window.DATA_VI_FC_APPLIED = n;
})();
