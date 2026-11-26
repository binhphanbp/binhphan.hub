/* =====================================================================
   BAF736 — BỔ SUNG HÌNH VẼ & SƠ ĐỒ (đợt 2, 2026)
   Bù sơ đồ cho các mục chưa có trong figures.js, để MỌI mục của học phần
   đều có ít nhất một hình minh hoạ.

   Tệp này KHÔNG sửa figures.js; nó ghi thêm vào cùng đăng ký window.FIGURES
   và phải được nạp SAU figures.js trong index.html.
   ===================================================================== */
(function () {
  "use strict";
  if (!window.FIGURES) { console.warn("[figures2] figures.js chưa nạp — bỏ qua"); return; }
  var F = window.FIGURES;

  var C = { brand: "#14507d", dark: "#0e3a5c", soft: "#e3eef8", green: "#0e9f6e",
            amber: "#b45309", red: "#b91c1c", grey: "#64748b", line: "#94a3b8", violet: "#6d28d9" };
  function box(x, y, w, h, fill, stroke, r) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (r || 8) +
           '" fill="' + (fill || "#fff") + '" stroke="' + (stroke || C.line) + '" stroke-width="1.5"/>';
  }
  function txt(x, y, s, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || "middle") + '" font-size="' + (o.fs || 12) +
           '" font-weight="' + (o.fw || 400) + '" fill="' + (o.c || "#0f172a") +
           '" font-family="system-ui,Segoe UI,sans-serif">' + s + '</text>';
  }
  function arr(x1, y1, x2, y2, c, dash) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (c || C.brand) +
           '" stroke-width="1.8" marker-end="url(#f2ah)"' + (dash ? ' stroke-dasharray="5 4"' : '') + '/>';
  }
  var DEFS = '<defs><marker id="f2ah" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto">' +
             '<path d="M0,0 L0,6 L8,3 z" fill="' + C.brand + '"/></marker></defs>';
  function svg(w, h, body) {
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" width="100%" style="max-width:' + w +
           'px" xmlns="http://www.w3.org/2000/svg" role="img">' + DEFS + body + '</svg>';
  }
  function lines(x, y, a, o) {
    o = o || {};
    return a.map(function (s, i) { return txt(x, y + i * (o.lh || 15), s, o); }).join("");
  }
  function add(key, fig) { (F[key] = F[key] || []).push(fig); }

  /* ---------------- 2.3 Phát hành trái phiếu ---------------- */
  add("2|2.3", {
    title: "Quy trình một đợt phát hành trái phiếu doanh nghiệp",
    cap: "Khác biệt then chốt so với cổ phiếu: có xếp hạng tín nhiệm, điều khoản ràng buộc và lịch trả nợ cố định. Chào bán riêng lẻ bỏ qua một số bước nhưng giới hạn người mua.",
    svg: svg(880, 300,
      box(20, 30, 155, 66, C.soft, C.brand) + txt(97, 55, "① Chuẩn bị", { fw: 700, c: C.dark }) + lines(97, 74, ["Kiểm tra sức khoẻ", "tài chính, dòng tiền"], { fs: 10, c: C.grey }) +
      arr(177, 63, 205, 63) +
      box(207, 30, 155, 66, "#fff", C.brand) + txt(284, 55, "② Xếp hạng", { fw: 700, c: C.dark }) + lines(284, 74, ["Tổ chức xếp hạng", "độc lập chấm điểm"], { fs: 10, c: C.grey }) +
      arr(364, 63, 392, 63) +
      box(394, 30, 155, 66, "#fff", C.brand) + txt(471, 55, "③ Cấu trúc", { fw: 700, c: C.dark }) + lines(471, 74, ["Kỳ hạn, coupon,", "tài sản bảo đảm"], { fs: 10, c: C.grey }) +
      arr(551, 63, 579, 63) +
      box(581, 30, 155, 66, "#fff", C.brand) + txt(658, 55, "④ Chào bán", { fw: 700, c: C.dark }) + lines(658, 74, ["Ra công chúng hoặc", "riêng lẻ"], { fs: 10, c: C.grey }) +
      arr(738, 63, 766, 63) +
      box(768, 30, 92, 66, "#f0fdf4", C.green) + txt(814, 58, "⑤ Niêm yết", { fw: 700, c: C.green, fs: 11 }) + txt(814, 76, "& thanh toán", { fs: 10, c: C.grey }) +
      txt(440, 132, "BỐN ĐIỀU KHOẢN QUYẾT ĐỊNH RỦI RO CỦA TRÁI CHỦ", { fw: 700, c: C.dark, fs: 12 }) +
      box(30, 148, 195, 84, "#fff", C.grey) + txt(127, 170, "Kỳ hạn & lịch trả gốc", { fw: 700, fs: 11 }) + lines(127, 192, ["Trả một lần cuối kỳ", "= rủi ro tái cấp vốn cao"], { fs: 10, c: C.grey }) +
      box(235, 148, 195, 84, "#fff", C.grey) + txt(332, 170, "Tài sản bảo đảm", { fw: 700, fs: 11 }) + lines(332, 192, ["Có bảo đảm = thứ tự ưu", "tiên cao khi vỡ nợ"], { fs: 10, c: C.grey }) +
      box(440, 148, 195, 84, "#fff", C.grey) + txt(537, 170, "Điều khoản ràng buộc", { fw: 700, fs: 11 }) + lines(537, 192, ["Trần nợ, hạn chế cổ tức,", "duy trì hệ số tài chính"], { fs: 10, c: C.grey }) +
      box(645, 148, 195, 84, "#fff", C.grey) + txt(742, 170, "Mục đích sử dụng vốn", { fw: 700, fs: 11 }) + lines(742, 192, ["Phong toả/giải ngân theo", "tiến độ = chống lạm dụng"], { fs: 10, c: C.grey }) +
      txt(440, 262, "Thiếu xếp hạng độc lập → thị trường không phân biệt được tổ chức phát hành mạnh và yếu", { fs: 11, fw: 700, c: C.red }) +
      txt(440, 284, "→ mọi bên trả lãi suất gần như nhau khi thuận lợi, và không ai phát hành được khi niềm tin đổ vỡ", { fs: 11, c: C.grey })
    )
  });

  /* ---------------- 3.2 Quy trình và các bên trong M&A ---------------- */
  add("3|3.2", {
    title: "Các bên tham gia và dòng công việc trong một thương vụ M&A",
    cap: "Bên bán chạy quy trình cạnh tranh để tối đa hoá giá; bên mua chạy thẩm định để phát hiện rủi ro. Ngân hàng đầu tư đứng ở cả hai phía nhưng không bao giờ trong cùng một thương vụ.",
    svg: svg(880, 330,
      box(30, 24, 380, 26, C.soft, C.brand, 6) + txt(220, 42, "PHÍA BÊN BÁN (sell-side)", { fw: 700, c: C.dark, fs: 12 }) +
      box(470, 24, 380, 26, "#fff7ed", C.amber, 6) + txt(660, 42, "PHÍA BÊN MUA (buy-side)", { fw: 700, c: C.amber, fs: 12 }) +
      box(30, 62, 380, 60, "#fff", C.brand) + txt(220, 84, "① Chuẩn bị hồ sơ chào bán", { fw: 700, fs: 11 }) + txt(220, 104, "Teaser · Bản giới thiệu · Phòng dữ liệu ảo", { fs: 10, c: C.grey }) +
      box(470, 62, 380, 60, "#fff", C.amber) + txt(660, 84, "① Sàng lọc mục tiêu", { fw: 700, fs: 11 }) + txt(660, 104, "Tiêu chí chiến lược · năng lực tài chính", { fs: 10, c: C.grey }) +
      box(30, 130, 380, 60, "#fff", C.brand) + txt(220, 152, "② Tiếp cận nhà đầu tư tiềm năng", { fw: 700, fs: 11 }) + txt(220, 172, "Ký thoả thuận bảo mật (NDA)", { fs: 10, c: C.grey }) +
      box(470, 130, 380, 60, "#fff", C.amber) + txt(660, 152, "② Chào giá sơ bộ không ràng buộc", { fw: 700, fs: 11 }) + txt(660, 172, "Định giá dựa trên thông tin công khai", { fs: 10, c: C.grey }) +
      box(30, 198, 380, 60, "#fff", C.brand) + txt(220, 220, "③ Quản lý đấu giá", { fw: 700, fs: 11 }) + txt(220, 240, "Tạo sức ép cạnh tranh giữa các bên mua", { fs: 10, c: C.grey }) +
      box(470, 198, 380, 60, "#fff", C.amber) + txt(660, 220, "③ Thẩm định chi tiết (due diligence)", { fw: 700, fs: 11 }) + txt(660, 240, "Tài chính · pháp lý · thuế · thương mại", { fs: 10, c: C.grey }) +
      arr(415, 92, 462, 92, C.grey, 1) + arr(462, 160, 415, 160, C.grey, 1) + arr(415, 228, 462, 228, C.grey, 1) +
      box(230, 270, 420, 46, "#f0fdf4", C.green) + txt(440, 290, "④ Đàm phán hợp đồng · Xin chấp thuận cơ quan quản lý · Hoàn tất", { fw: 700, fs: 11, c: C.green }) +
      txt(440, 310, "Giá chỉ là một biến số — điều khoản bảo đảm, điều kiện tiên quyết và khoản phí phá vỡ quyết định phần còn lại", { fs: 10, c: C.grey })
    )
  });

  /* ---------------- 3.4 Tài trợ thương vụ M&A ---------------- */
  add("3|3.4", {
    title: "Ba nguồn tài trợ cho thương vụ M&A và tác động lên bảng cân đối",
    cap: "Mỗi nguồn tài trợ chuyển rủi ro sang một nhóm khác nhau. Bên tư vấn phải chỉ ra cái giá thật của từng lựa chọn, không chỉ chi phí danh nghĩa.",
    svg: svg(880, 300,
      box(30, 26, 260, 172, "#f0fdf4", C.green) + txt(160, 50, "TIỀN MẶT SẴN CÓ", { fw: 700, c: C.green }) +
      lines(160, 76, ["Nhanh nhất, ít điều kiện", "Không pha loãng cổ đông", "Không tăng đòn bẩy", "", "NHƯNG:", "Mất đệm thanh khoản", "Chi phí cơ hội của tiền"], { fs: 11 }) +
      box(310, 26, 260, 172, "#fff7ed", C.amber) + txt(440, 50, "VAY NỢ", { fw: 700, c: C.amber }) +
      lines(440, 76, ["Lá chắn thuế từ lãi vay", "Không pha loãng sở hữu", "Kỷ luật dòng tiền", "", "NHƯNG:", "Hệ số nợ tăng, có thể bị", "hạ xếp hạng tín nhiệm"], { fs: 11 }) +
      box(590, 26, 260, 172, C.soft, C.brand) + txt(720, 50, "PHÁT HÀNH CỔ PHIẾU", { fw: 700, c: C.brand }) +
      lines(720, 76, ["Không tăng nghĩa vụ nợ", "Chia sẻ rủi ro với bên bán", "Phù hợp thương vụ lớn", "", "NHƯNG:", "PHA LOÃNG cổ đông hiện hữu", "Phát tín hiệu: cổ phiếu đắt?"], { fs: 11 }) +
      txt(440, 228, "CÂU HỎI KIỂM TRA: sau thương vụ, hệ số Nợ/EBITDA và EPS thay đổi thế nào?", { fw: 700, fs: 12, c: C.dark }) +
      txt(440, 254, "Thương vụ làm TĂNG EPS (accretive) chưa chắc tạo giá trị — nếu trả giá quá cao vẫn phá huỷ giá trị", { fs: 11, c: C.red, fw: 700 }) +
      txt(440, 278, "Thực tế: phần lớn thương vụ lớn dùng cơ cấu KẾT HỢP để cân bằng ba ràng buộc trên", { fs: 11, c: C.grey })
    )
  });

  /* ---------------- 4.3 Quản lý danh mục ---------------- */
  add("4|4.3", {
    title: "Quy trình quản lý danh mục đầu tư và nơi phát sinh phí",
    cap: "Vòng lặp khép kín: chính sách đầu tư → phân bổ tài sản → chọn chứng khoán → thực thi → đo lường → điều chỉnh. Phần lớn chênh lệch hiệu quả dài hạn đến từ bước phân bổ tài sản.",
    svg: svg(880, 320,
      box(330, 20, 220, 52, C.soft, C.brand) + txt(440, 42, "① Chính sách đầu tư (IPS)", { fw: 700, c: C.dark, fs: 12 }) + txt(440, 60, "mục tiêu · rủi ro chấp nhận · ràng buộc", { fs: 10, c: C.grey }) +
      arr(550, 46, 680, 92) +
      box(650, 96, 210, 52, "#fff", C.brand) + txt(755, 118, "② Phân bổ tài sản", { fw: 700, fs: 12 }) + txt(755, 136, "cổ phiếu / trái phiếu / tiền", { fs: 10, c: C.grey }) +
      arr(755, 152, 700, 196) +
      box(560, 200, 210, 52, "#fff", C.brand) + txt(665, 222, "③ Chọn chứng khoán", { fw: 700, fs: 12 }) + txt(665, 240, "chủ động hoặc mô phỏng chỉ số", { fs: 10, c: C.grey }) +
      arr(555, 226, 445, 250) +
      box(230, 240, 210, 52, "#fff7ed", C.amber) + txt(335, 262, "④ Thực thi giao dịch", { fw: 700, fs: 12 }) + txt(335, 280, "chi phí giao dịch, trượt giá", { fs: 10, c: C.grey }) +
      arr(228, 250, 165, 200) +
      box(60, 150, 210, 52, "#fff", C.brand) + txt(165, 172, "⑤ Đo lường hiệu quả", { fw: 700, fs: 12 }) + txt(165, 190, "so với chỉ số tham chiếu", { fs: 10, c: C.grey }) +
      arr(165, 146, 330, 60) +
      box(300, 128, 280, 74, "#f8fafc", C.grey) +
      txt(440, 150, "PHÍ ĂN VÀO ĐÂY", { fw: 700, fs: 11, c: C.red }) +
      lines(440, 172, ["Phí quản lý (theo tài sản) mỗi năm", "+ chi phí giao dịch ở bước ④"], { fs: 10, c: C.grey })
    )
  });

  /* ---------------- 5.3 Tái cơ cấu doanh nghiệp ---------------- */
  add("5|5.3", {
    title: "Thang phương án tái cơ cấu: từ nhẹ đến nặng",
    cap: "Càng xuống dưới, chi phí và mất mát giá trị càng lớn. Vai trò của bên tư vấn là giữ doanh nghiệp ở nấc thang cao nhất có thể — và hành động SỚM, vì mọi phương án đều thu hẹp theo thời gian.",
    svg: svg(880, 340,
      box(40, 24, 800, 46, "#f0fdf4", C.green) + txt(440, 44, "① TÁI CƠ CẤU HOẠT ĐỘNG — chưa đụng tới cấu trúc vốn", { fw: 700, c: C.green, fs: 12 }) +
      txt(440, 62, "Cắt chi phí · bán tài sản không cốt lõi · cải thiện vốn lưu động · đàm phán lại hợp đồng", { fs: 10.5, c: C.grey }) +
      box(40, 80, 800, 46, "#ecfeff", "#0891b2") + txt(440, 100, "② ĐÀM PHÁN LẠI NỢ NGOÀI TOÀ (thoả thuận tự nguyện)", { fw: 700, c: "#0891b2", fs: 12 }) +
      txt(440, 118, "Giãn kỳ hạn · giảm lãi · hoán đổi nợ thành cổ phần · cần SỰ ĐỒNG THUẬN của chủ nợ", { fs: 10.5, c: C.grey }) +
      box(40, 136, 800, 46, "#fffbeb", C.amber) + txt(440, 156, "③ TÁI CƠ CẤU ĐÃ THOẢ THUẬN TRƯỚC, ĐƯA RA TOÀ CÔNG NHẬN", { fw: 700, c: C.amber, fs: 12 }) +
      txt(440, 174, "Chốt phương án với các bên rồi mới nộp đơn — nhanh, kiểm soát được (GM 2009: ~40 ngày)", { fs: 10.5, c: C.grey }) +
      box(40, 192, 800, 46, "#fff7ed", "#ea580c") + txt(440, 212, "④ PHÁ SẢN CÓ TÁI TỔ CHỨC (thủ tục toà án đầy đủ)", { fw: 700, c: "#ea580c", fs: 12 }) +
      txt(440, 230, "Toà giám sát toàn bộ · chi phí cao · kéo dài · doanh nghiệp mất khách hàng và nhân sự giỏi", { fs: 10.5, c: C.grey }) +
      box(40, 248, 800, 46, "#fef2f2", C.red) + txt(440, 268, "⑤ THANH LÝ — chấm dứt hoạt động, bán tài sản trả nợ theo thứ tự ưu tiên", { fw: 700, c: C.red, fs: 12 }) +
      txt(440, 286, "Giá trị thu hồi thấp nhất; cổ đông thường mất trắng", { fs: 10.5, c: C.grey }) +
      txt(440, 318, "Giá trị doanh nghiệp GIẢM DẦN khi đi xuống thang — và mỗi tháng chậm trễ đẩy doanh nghiệp xuống một nấc", { fs: 11.5, fw: 700, c: C.red })
    )
  });

  /* ---------------- 5.5 Tái cơ cấu quản trị ---------------- */
  add("5|5.5", {
    title: "Tái cơ cấu quản trị: vấn đề người đại diện và các chốt kiểm soát",
    cap: "Tách quyền sở hữu khỏi quyền điều hành sinh ra chi phí đại diện. Mỗi chốt kiểm soát dưới đây xử lý một dạng lệch lợi ích cụ thể.",
    svg: svg(880, 320,
      box(300, 20, 280, 50, C.soft, C.brand) + txt(440, 42, "CỔ ĐÔNG (chủ sở hữu)", { fw: 700, c: C.dark }) + txt(440, 60, "muốn tối đa hoá giá trị dài hạn", { fs: 10, c: C.grey }) +
      arr(440, 74, 440, 108) + txt(530, 96, "uỷ quyền", { fs: 10, c: C.grey, a: "start" }) +
      box(300, 112, 280, 50, "#fff", C.brand) + txt(440, 134, "HỘI ĐỒNG QUẢN TRỊ", { fw: 700, c: C.dark }) + txt(440, 152, "giám sát thay mặt cổ đông", { fs: 10, c: C.grey }) +
      arr(440, 166, 440, 200) + txt(530, 188, "bổ nhiệm & giám sát", { fs: 10, c: C.grey, a: "start" }) +
      box(300, 204, 280, 50, "#fff7ed", C.amber) + txt(440, 226, "BAN ĐIỀU HÀNH", { fw: 700, c: C.amber }) + txt(440, 244, "có thể ưu tiên lợi ích ngắn hạn của mình", { fs: 10, c: C.grey }) +
      box(20, 100, 250, 168, "#f8fafc", C.grey) + txt(145, 122, "CHỐT KIỂM SOÁT", { fw: 700, fs: 11, c: C.dark }) +
      lines(145, 146, [
        "• Thành viên HĐQT độc lập",
        "• Uỷ ban kiểm toán độc lập",
        "• Thù lao gắn kết quả dài hạn",
        "• Công bố thông tin đầy đủ",
        "• Kiểm toán độc lập",
        "• Quyền biểu quyết của cổ đông",
        "• Thị trường kiểm soát công ty"
      ], { fs: 10.5, c: "#0f172a" }) +
      box(610, 100, 250, 168, "#fef2f2", C.red) + txt(735, 122, "DẤU HIỆU LỆCH LỢI ÍCH", { fw: 700, fs: 11, c: C.red }) +
      lines(735, 146, [
        "• Chủ tịch kiêm tổng giám đốc",
        "• HĐQT thiếu thành viên độc lập",
        "• Giao dịch với bên liên quan",
        "• Cổ phiếu hai hạng quyền biểu quyết",
        "• Thù lao không gắn hiệu quả",
        "• Kiểm toán bị thay đổi bất thường",
        "• Công bố thông tin chậm/thiếu"
      ], { fs: 10.5, c: "#0f172a" }) +
      txt(440, 288, "Vai trò của bên tư vấn: thiết kế lại các chốt kiểm soát TRƯỚC khi lên sàn hoặc gọi vốn lớn", { fs: 11, fw: 700, c: C.brand }) +
      txt(440, 308, "— nhà đầu tư tổ chức định giá thấp doanh nghiệp có quản trị yếu, dù kết quả kinh doanh tốt", { fs: 10.5, c: C.grey })
    )
  });

  /* ---------------- 6.3 Nghiệp vụ tự doanh ---------------- */
  add("6|6.3", {
    title: "Tự doanh: ba lằn ranh phòng thủ",
    cap: "Nhân viên giao dịch chịu trách nhiệm đầu tiên, nhưng phải có hai lớp kiểm soát ĐỘC LẬP phía sau. Vụ Société Générale 2008 xảy ra vì người bị kiểm soát chính là người hiểu rõ cách kiểm soát vận hành.",
    svg: svg(880, 300,
      box(30, 30, 255, 200, C.soft, C.brand) + txt(157, 56, "LẰN RANH 1", { fw: 700, c: C.brand, fs: 13 }) + txt(157, 76, "Khối kinh doanh (front office)", { fw: 700, fs: 11 }) +
      lines(157, 102, ["Nhân viên giao dịch mở vị thế", "Chịu trách nhiệm trong hạn mức", "Tự theo dõi lãi/lỗ hằng ngày", "", "RỦI RO: chính người tạo", "rủi ro lại tự báo cáo rủi ro"], { fs: 10.5 }) +
      arr(287, 130, 315, 130) +
      box(317, 30, 255, 200, "#fff7ed", C.amber) + txt(444, 56, "LẰN RANH 2", { fw: 700, c: C.amber, fs: 13 }) + txt(444, 76, "Quản trị rủi ro (middle office)", { fw: 700, fs: 11 }) +
      lines(444, 102, ["Định giá ĐỘC LẬP vị thế", "Đối chiếu với đối tác", "Giám sát hạn mức, VaR", "Xác nhận giao dịch", "", "Phải KHÔNG báo cáo cho", "trưởng bộ phận kinh doanh"], { fs: 10.5 }) +
      arr(574, 130, 602, 130) +
      box(604, 30, 255, 200, "#f0fdf4", C.green) + txt(731, 56, "LẰN RANH 3", { fw: 700, c: C.green, fs: 13 }) + txt(731, 76, "Kiểm toán nội bộ", { fw: 700, fs: 11 }) +
      lines(731, 102, ["Kiểm tra định kỳ, độc lập", "Báo cáo thẳng Uỷ ban kiểm toán", "Kiểm tra CHÍNH các chốt", "kiểm soát ở lằn ranh 2", "", "Nghỉ phép liên tục bắt buộc", "= chốt kiểm soát đơn giản nhất"], { fs: 10.5 }) +
      txt(440, 262, "Société Générale 2008: nhân viên từng làm ở bộ phận kiểm soát (middle office) → biết cách né đối chiếu → lỗ ≈ 4,9 tỷ EUR", { fs: 11, fw: 700, c: C.red }) +
      txt(440, 286, "Bài học: trạng thái RÒNG trông nhỏ không có nghĩa rủi ro nhỏ — phải xem cả quy mô GỘP của vị thế", { fs: 11, c: C.grey })
    )
  });

  window.figureCount = Object.values(F).reduce(function (s, a) { return s + a.length; }, 0);
})();
