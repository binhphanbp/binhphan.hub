/* =====================================================================
   BAF736 — Bản dịch tiếng Việt của nội dung học phần
   Vietnamese translation layer for js/content.js.

   Tệp này KHÔNG sao chép lại nội dung tiếng Anh; nó chỉ gắn thêm các
   trường *Vi vào window.IB_CONTENT và window.COURSE_META. Mục nào chưa
   được dịch sẽ tự động hiển thị bằng tiếng Anh (xem hàm L() trong i18n.js).
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- COURSE_META ---------- */
  var M = window.COURSE_META;
  if (M) {
    M.nameVi = "Nghiệp vụ Ngân hàng Đầu tư";
    M.descriptionVi = "Học phần trình bày những vấn đề cơ bản về ngân hàng đầu tư và cơ cấu tổ chức của ngân hàng đầu tư. Học phần mô tả các nghiệp vụ kinh doanh chủ yếu của ngân hàng đầu tư, bao gồm tư vấn mua bán và sáp nhập doanh nghiệp (M&A), hỗ trợ huy động vốn (bảo lãnh phát hành), hoạt động đầu tư, nghiên cứu, quản lý đầu tư, ngân hàng bán buôn và dịch vụ môi giới chính.";
    M.facultyVi = "Khoa Tài chính — Trường Đại học Ngân hàng TP. Hồ Chí Minh";
    M.prerequisiteVi = "Tiền tệ, Ngân hàng và Fintech";
    M.lecturerVi = "TS. Ngô Sỹ Nam · namns@hub.edu.vn · Văn phòng Khoa Tài chính, Tầng 1, Toà nhà chính, 56 Hoàng Diệu 2, TP. Thủ Đức";
  }

  /* ---------- Bản dịch theo chương ----------
     Khoá ngoài  = số chương; "s" = từ điển theo mã mục (1.1, 1.2 …)      */
  var VI = {

    /* ================= CHƯƠNG 1 ================= */
    1: {
      title: "Tổng quan về Ngân hàng Đầu tư",
      blurb: "Khái niệm và đặc điểm của ngân hàng đầu tư, lịch sử và xu hướng phát triển của ngành, vai trò và chức năng, tổ chức hoạt động và môi trường hoạt động.",
      refs: "[2] {@tranTuanVinh2023, Chương 1–3}; [1] {@rp2020, Phần mở đầu}; [4] {@stowell2024, Chương 1–2}; [5] Fleuriet (2018), Chương 1",
      objectives: [
        "Định nghĩa ngân hàng đầu tư và phân biệt với ngân hàng thương mại (nhận tiền gửi).",
        "Phân biệt ngân hàng đầu tư với ngân hàng thương mại theo sáu tiêu chí: mô hình hoạt động, nguồn thu nhập, cách thức huy động vốn, định hướng quản lý tài sản – nguồn vốn, đòn bẩy tài chính và khung pháp lý.",
        "Trình bày lịch sử ngành từ Đạo luật Glass-Steagall (1933), việc bãi bỏ năm 1999 đến sự chuyển đổi của các ngân hàng đầu tư độc lập cuối cùng năm 2008.",
        "Giải thích vai trò của ngân hàng đầu tư đối với doanh nghiệp, nhà đầu tư và nền kinh tế; và sáu chức năng: môi giới, nhà đầu tư, tạo lập thị trường, nhận uỷ thác, tư vấn và cung cấp dịch vụ.",
        "Mô tả bảy nghiệp vụ chính, các chủ thể được phép thực hiện tại Việt Nam và mô hình tổ chức khối kinh doanh / quản trị rủi ro / điều hành.",
        "Nhận diện xung đột lợi ích giữa các khối và giải thích cách vách ngăn thông tin tách biệt bên nội bộ với bên đại chúng."
      ],
      s: {
        "1.1": {
          title: "Khái niệm & Đặc điểm",
          html: '<h2>1.1 Khái niệm và đặc điểm của Ngân hàng Đầu tư</h2>\n<h3>1.1.1 Các định nghĩa trong tài liệu</h3>\n<p>Không tồn tại một định nghĩa pháp lý duy nhất. Học phần xây dựng khái niệm từ nhiều nguồn có uy tín.</p>\n<div class="keyterm"><b>{@shiller2008}, bài giảng tại Yale:</b> "Ngân hàng đầu tư nghĩa là bảo lãnh phát hành chứng khoán, tức là thu xếp việc các công ty phát hành cổ phiếu và trái phiếu." — cách hiểu <i>hẹp, cổ điển</i>.</div>\n<div class="keyterm"><b>Các định nghĩa từ điển:</b> <i>Dictionary of Banking and Finance</i> mô tả ngân hàng đầu tư là ngân hàng bảo lãnh các đợt phát hành mới và tư vấn tài chính cho doanh nghiệp — ở Anh gọi là "issue house". Định nghĩa rộng hơn của Bloomberg bổ sung việc hỗ trợ sáp nhập và tái tổ chức doanh nghiệp, môi giới cho khách hàng cá nhân và tổ chức, và giao dịch cho chính tài khoản của ngân hàng. Marshall và Ellis nói gọn hơn: "Ngân hàng đầu tư là những gì các ngân hàng đầu tư làm." [dẫn theo @giri2017, p. 151]</div>\n<div class="keyterm"><b>{@stowell2024, pp. 8, 10}:</b> một ngân hàng đầu tư lớn có hai mảng kinh doanh chính — <b>Khối Ngân hàng đầu tư</b> phục vụ doanh nghiệp và quỹ đầu tư tư nhân bằng tài trợ qua thị trường chứng khoán, tư vấn M&amp;A và cho vay trực tiếp; và <b>Khối Giao dịch</b> đưa nhà đầu tư tổ chức tiếp cận chứng khoán mới phát hành, thực hiện giao dịch thứ cấp, tạo lập thị trường và cho vay. Phần lớn ngân hàng lớn đã có thêm mảng quản lý tài sản và quản lý gia sản từ giữa thập niên 1990.</div>\n<div class="keyterm"><b>{@caselli2021, pp. 18–19}:</b> chưa tồn tại một định nghĩa duy nhất, mang tính toàn cầu. Ngân hàng doanh nghiệp và đầu tư được định nghĩa trong tương phản với ngân hàng thương mại truyền thống: phục vụ khách hàng doanh nghiệp và hoạt động trên thị trường vốn, nơi nó thu <i>phí</i>, còn ngân hàng thương mại thu <i>chênh lệch lãi suất</i> trên tiền gửi và cho vay.</div>\n<p>Các bảng phân loại thống kê cũng vạch ranh giới như vậy. Trong <b>Bảng phân loại ngành tiêu chuẩn (SIC)</b> của Hoa Kỳ, ngành <b>6211 "Môi giới, kinh doanh chứng khoán và tổ chức phát hành hộ"</b> gồm các cơ sở mua, bán, môi giới chứng khoán và những cơ sở "thường được gọi là ngân hàng đầu tư" chuyên khởi tạo, bảo lãnh và phân phối các đợt phát hành chứng khoán; môi giới và kinh doanh hợp đồng hàng hoá là một ngành riêng (6221) [@sic1987].</p>\n<div class="example"><div class="ex-title">Định nghĩa dùng trong học phần</div>\n<b>Ngân hàng đầu tư</b> là tổ chức giúp khách hàng huy động vốn thông qua bảo lãnh phát hành chứng khoán (cổ phiếu, trái phiếu); cung cấp dịch vụ môi giới, nghiên cứu, tư vấn tái cấu trúc doanh nghiệp và tư vấn mua bán – sáp nhập; quản lý tài sản; đồng thời thực hiện nghiệp vụ tự doanh, đầu tư vốn tư nhân và đầu tư vốn mạo hiểm [tổng hợp từ @stowell2024, p. 8; @giri2017, p. 151; @tranTuanVinh2023].</div>\n<h3>1.1.2 Sáu đặc điểm nhận dạng</h3>\n<p>Học phần so sánh ngân hàng đầu tư (NHĐT) với ngân hàng thương mại (NHTM) theo sáu tiêu chí [@tranTuanVinh2023; @caselli2021, pp. 18–19].</p>\n<p><b>(a) Mô hình hoạt động.</b> NHĐT dẫn vốn từ chủ thể thừa vốn sang chủ thể thiếu vốn <i>thông qua thị trường vốn</i>: vốn đến với tổ chức phát hành, còn <b>rủi ro đầu tư vẫn thuộc về nhà đầu tư</b>. NHTM đặt bảng cân đối của chính mình vào giữa — nhận tiền gửi và cho vay, tự gánh chịu <b>rủi ro tín dụng</b> [@caselli2021, pp. 18–19].</p>\n<p><b>(b) Nguồn thu nhập.</b></p>\n<table>\n<tr><th>Loại</th><th>Ngân hàng đầu tư</th><th>Ngân hàng thương mại</th></tr>\n<tr><td>Phí</td><td>Bảo lãnh phát hành, môi giới, uỷ thác &amp; quản lý tài sản, tư vấn, giao dịch</td><td>Thanh toán, dịch vụ, tư vấn</td></tr>\n<tr><td>Chênh lệch lãi suất</td><td>Giữa lãi suất cho vay và huy động trong nghiệp vụ ngân hàng bán buôn</td><td>Chênh lệch lãi ròng giữa lãi suất huy động và cho vay</td></tr>\n<tr><td>Lãi/lỗ đầu tư</td><td>Hoạt động tự doanh, ngân hàng bán buôn</td><td>Công cụ thị trường tiền tệ, ngoại hối, chứng khoán</td></tr>\n</table>\n<p><b>(c) Cách thức huy động vốn.</b> Điểm bất lợi then chốt của NHĐT là <b>không được phép huy động tiền gửi của công chúng</b>.</p>\n<ul>\n<li><b>Vay ngắn hạn có tài sản bảo đảm</b> — trong lịch sử là nguồn then chốt: repo, bán và mua lại (sell and buy back), cho vay chứng khoán, bán khống và hợp đồng cho vay ký quỹ, tất cả đều được bảo đảm bằng chứng khoán có tính thanh khoản cao. Năm 2007, gần 25% tổng tài sản của các ngân hàng đầu tư Mỹ được tài trợ bằng <b>repo qua đêm</b>, tăng từ khoảng 12% năm 2000 [@stowell2024, pp. 246–247].</li>\n<li><b>Vay không có tài sản bảo đảm:</b> thương phiếu (thường 30–180 ngày, đến hạn thì phát hành mới để đảo nợ), vay ngân hàng thương mại, trái phiếu và kỳ phiếu. Vốn ngắn hạn rẻ và linh hoạt nhưng có thể biến mất: sau khi Lehman sụp đổ vào tháng 10/2008, dư nợ thương phiếu của các ngân hàng đầu tư co lại còn chưa tới một phần ba chỉ trong vài tuần [@stowell2024, pp. 246–247].</li>\n<li><b>Vốn chủ sở hữu:</b> vốn điều lệ, các quỹ và lợi nhuận giữ lại (tương tự NHTM).</li>\n</ul>\n<p>Ở phía tài sản, các nghiệp vụ đối ứng là reverse repo, cho vay chứng khoán, cho vay ký quỹ, tài trợ dự án và cho vay đồng tài trợ, cùng với tài sản đầu tư và tài sản cố định.</p>\n<p><b>(d) Định hướng quản lý tài sản – nguồn vốn.</b> NHTM huy động vốn trước rồi mới quyết định sử dụng — <i>"nguồn vốn quyết định sử dụng vốn"</i>, tức định hướng <b>quản lý tài sản</b>. NHĐT chỉ huy động vốn theo nhu cầu đầu tư thực tế — <i>"sử dụng vốn quyết định nguồn vốn"</i>, tức định hướng <b>quản lý nguồn vốn</b> [@tranTuanVinh2023].</p>\n<p><b>(e) Đòn bẩy tài chính.</b> NHTM có đòn bẩy <i>thấp hơn</i>: ngân hàng thương mại bình quân có tổng tài sản gấp 10–15 lần vốn chủ sở hữu sổ sách (doanh nghiệp phi tài chính 1–3 lần), phần lớn tài sản nằm trong danh mục cho vay và đầu tư nắm giữ dài hạn, và đòn bẩy bị giới hạn bởi hệ số an toàn vốn theo Basel. NHĐT trong lịch sử dùng đòn bẩy cao hơn — 20–30 lần trong giai đoạn 2005–2007 — vì hầu hết tài sản có tính thanh khoản cao và dễ đem cầm cố; quy định sau năm 2008 buộc mức đòn bẩy này giảm xuống [@stowell2024, pp. 247–248]. <b>Chấp nhận đòn bẩy cao và kiểm soát được nó chính là tâm điểm của nghệ thuật quản trị ngân hàng đầu tư.</b></p>\n<p><b>(f) Khung pháp lý.</b> Cơ quan giám sát tuỳ quốc gia và tuỳ loại hoạt động. Tại <b>Hoa Kỳ</b>, SEC giám sát các công ty môi giới – kinh doanh chứng khoán; trước năm 2008 các ngân hàng đầu tư độc lập cũng tính hệ số vốn dưới sự giám sát của SEC, và khi Goldman Sachs, Morgan Stanley trở thành công ty mẹ ngân hàng thì chịu sự giám sát của Cục Dự trữ Liên bang. Tại <b>khu vực đồng euro</b>, các ngân hàng — kể cả ngân hàng đa năng có mảng ngân hàng đầu tư — được giám sát qua Cơ chế Giám sát Chung (SSM): ECB trực tiếp giám sát các tổ chức quan trọng, cơ quan quốc gia giám sát các tổ chức nhỏ hơn, còn MiFID II điều chỉnh cách cung cấp dịch vụ đầu tư [@stowell2024, pp. 25, 248; @caselli2021, pp. 35–36, 107]. Tại <b>Việt Nam</b>, công ty chứng khoán và công ty quản lý quỹ do Uỷ ban Chứng khoán Nhà nước (UBCKNN) cấp phép và giám sát; ngân hàng thương mại chịu sự giám sát của Ngân hàng Nhà nước Việt Nam [@luatCK2019, Art. 70; @luatNHNN2010, Art. 4(11)].</p>\n<table>\n<tr><th>Khác biệt khác [@stowell2024, p. 247; @caselli2021, p. 18]</th><th>Ngân hàng đầu tư</th><th>Ngân hàng thương mại</th></tr>\n<tr><td>Thị trường hoạt động chính</td><td>Thị trường vốn</td><td>Thị trường tiền tệ</td></tr>\n<tr><td>Mức độ ổn định lợi nhuận</td><td>Thấp</td><td>Cao</td></tr>\n<tr><td>Mức độ rủi ro hoạt động</td><td>Cao</td><td>Thấp</td></tr>\n</table>'
        },
        "1.2": {
          title: "Lịch sử & Xu hướng phát triển",
          html: '<h2>1.2 Lịch sử và xu hướng phát triển của ngành</h2>\n<h3>1.2.1 Nguồn gốc</h3>\n<p>Ngân hàng đầu tư bắt nguồn từ <b>các thương nhân</b>. Tài trợ thương mại, kinh doanh hối phiếu và ngoại hối, dùng chứng khoán làm phương tiện trao đổi vốn là một phần công việc của họ; khi bắt đầu mua bán chứng khoán vì chính mình, họ đã thực hiện chức năng của ngân hàng đầu tư. Các ngân hàng thương nhân (merchant bank) ở Anh và nhiều nhà ngân hàng đầu tiên ở Mỹ đều khởi đầu như vậy [@carosso1970, p. 8; @giri2017, p. 152]. Sự phát triển của ngành gắn liền với <b>quá trình công nghiệp hoá</b> và nhu cầu vốn quy mô lớn ngày càng tăng; sự xuất hiện của công ty cổ phần và sự mở rộng của thị trường chứng khoán đã đưa ngành đến hình thái hiện đại.</p>\n<p>Quá trình phát triển không đồng đều giữa các quốc gia. Tại <b>Anh</b>, các ngân hàng đầu tư chuyên biệt hình thành tách khỏi ngân hàng thương mại. Phần lớn <b>châu Âu lục địa</b> áp dụng mô hình <b>ngân hàng đa năng</b>, trong đó một tổ chức duy nhất cung cấp cả dịch vụ ngân hàng thương mại và ngân hàng đầu tư. <b>Hoa Kỳ</b>, dù có sự tách biệt về pháp lý, vẫn chứng kiến sự trỗi dậy của các ngân hàng gần như đa năng thông qua các chi nhánh chứng khoán [@giri2017, pp. 152, 168].</p>\n<p>Hình thức tổ chức khác nhau theo quốc gia và thời kỳ, nhưng chức năng cốt lõi không đổi: <b>tạo điều kiện cho dòng vốn chảy từ người tiết kiệm đến những người cần đầu tư</b>.</p>\n<h3>1.2.2 Tại Hoa Kỳ</h3>\n<p>Sở Giao dịch Chứng khoán New York truy nguồn gốc về <b>Thoả ước Buttonwood</b> do 24 nhà môi giới ký ngày 17/5/1792, đặt ra quy tắc giao dịch cổ phiếu và mức hoa hồng cố định [@nyse]. Ở Hoa Kỳ cũng như châu Âu, ngân hàng đầu tư khởi đầu như một nghề phụ của các ngành kinh doanh khác [@carosso1970, p. 1].</p>\n<ul>\n<li><b>Sau Chiến tranh Cách mạng:</b> hoạt động này do những người trung gian chưa chuyên môn hoá đảm nhận — nhà thầu vay vốn (thương nhân, người đầu cơ mua chứng khoán để bán lại kiếm lời), ngân hàng được cấp phép, người đấu giá và môi giới [@carosso1970, pp. 1–5].</li>\n<li><b>Từ thập niên 1850:</b> nhu cầu vốn của <b>ngành đường sắt</b> làm xuất hiện một số nhà ngân hàng đầu tư đầu tiên [@carosso1970, p. 1].</li>\n<li><b>Nội chiến:</b> nhu cầu vay khổng lồ của chính phủ thúc đẩy đổi mới trong phân phối — Jay Cooke bán trái phiếu của Liên bang qua mạng lưới đại lý, quảng cáo và chào bán quyết liệt tới cả nhà đầu tư nhỏ lẫn tổ chức — và các nhà ngân hàng mới mọc lên nhanh chóng [@carosso1970, pp. 15–17].</li>\n<li><b>1890–1929:</b> sự thống trị của các nhà ngân hàng tư nhân lớn — <b>J.P. Morgan, Kuhn Loeb, Kidder Peabody, Brown Brothers</b> — tài trợ cho đường sắt và các tập đoàn công nghiệp mới. Khi chưa có yêu cầu tách biệt, những nhà như Morgan, Kuhn Loeb, Kidder Peabody vừa nhận tiền gửi vừa khởi tạo, bảo lãnh và phân phối chứng khoán mới [@carosso1970, p. x].</li>\n<li><b>Sau 1929:</b> khủng hoảng và Đại Suy thoái dẫn tới quy định mới và sự tách biệt giữa ngân hàng thương mại và ngân hàng đầu tư.</li>\n</ul>\n<h3>1.2.3 Bốn đạo luật quyết định</h3>\n<table>\n<tr><th>Đạo luật</th><th>Năm</th><th>Tác động</th></tr>\n<tr><td><b>McFadden</b></td><td>1927</td><td>Cho phép ngân hàng quốc gia mở chi nhánh và thực hiện một số loại hình kinh doanh chứng khoán, để cạnh tranh được với ngân hàng tiểu bang và ngân hàng tư nhân. (Đạo luật không cho phép kinh doanh bảo hiểm.) [@carosso1970, p. 273]</td></tr>\n<tr><td><b>Glass-Steagall</b><br>(Đạo luật Ngân hàng)</td><td>1933</td><td>Tách bạch nghiệp vụ ngân hàng thương mại với ngân hàng đầu tư; cấm ngân hàng thành viên FED phát hành, bảo lãnh, bán hoặc phân phối chứng khoán [@stowell2024, p. 40; @carosso1970, p. 371].</td></tr>\n<tr><td><b>Gramm-Leach-Bliley</b><br>(Hiện đại hoá dịch vụ tài chính)</td><td>1999</td><td>Bãi bỏ sự tách biệt bắt buộc; ngân hàng thương mại được tham gia kinh doanh chứng khoán và bảo hiểm [@stowell2024, p. 44].</td></tr>\n<tr><td><b>Dodd-Frank</b></td><td>2010</td><td>Thay đổi quy định sâu rộng nhất kể từ 1934: bảo vệ người tiêu dùng, chấm dứt cứu trợ "quá lớn để sụp đổ", nhận diện rủi ro hệ thống, minh bạch công cụ phức tạp và chế độ đãi ngộ [@stowell2024, pp. 47–50].</td></tr>\n</table>\n<div class="example"><div class="ex-title">Glass-Steagall trên thực tế</div>\nĐạo luật buộc các ngân hàng lớn phải <b>lựa chọn</b>. J.P. Morgan &amp; Co. chọn tiếp tục mảng ngân hàng thương mại; tháng 9/1934, ba thành viên hợp danh của Morgan và hai của Drexel từ chức để lập ngân hàng đầu tư <b>Morgan Stanley &amp; Co.</b> [@carosso1970, p. 373; @stowell2024, p. 42] Về sau, Gramm-Leach-Bliley cho phép <b>Citigroup</b> (hình thành từ vụ sáp nhập Citicorp – Travelers năm 1998) giữ lại mảng ngân hàng đầu tư Salomon Brothers thay vì phải thoái vốn, và cho phép <b>Chase Manhattan</b> sáp nhập với <b>J.P. Morgan</b> năm 2000 [@stowell2024, p. 44].</div>\n<p><b>Tác động của Dodd-Frank:</b> ngân hàng phải bù đắp tài sản bằng ít nhất 5% vốn chủ sở hữu; phải duy trì thanh khoản cao hơn nhiều dưới dạng tài sản dễ chuyển thành tiền mặt; và phải vượt qua <b>bài kiểm tra căng thẳng</b> hằng năm mô phỏng một cuộc khủng hoảng nghiêm trọng ít nhất như năm 2008 mà không cần hỗ trợ của chính phủ [@stowell2024, pp. 47–50].</p>\n<h3>1.2.4 Khủng hoảng 2008 và ngành hiện nay</h3>\n<p>Năm 2008, cả năm ngân hàng đầu tư "thuần tuý" lớn nhất của Mỹ đều biến đổi. <b>Bear Stearns</b> đồng ý bán cho J.P. Morgan với giá 2 USD/cổ phiếu (sau nâng lên 10 USD) để tránh phá sản; <b>Lehman Brothers</b> nộp đơn phá sản; <b>Merrill Lynch</b> bị Bank of America mua lại với giá chỉ bằng một phần nhỏ giá trị năm 2007; <b>Goldman Sachs</b> và <b>Morgan Stanley</b> trở thành <b>công ty mẹ ngân hàng</b> [@stowell2024, pp. 25, 509]. Bức tranh còn lại gồm chín ngân hàng toàn cầu lớn (Bank of America, Barclays, Citi, Credit Suisse, Deutsche Bank, Goldman Sachs, J.P. Morgan, Morgan Stanley, UBS), các ngân hàng khu vực lớn (như BNP Paribas, Mizuho, Nomura, RBC) và các công ty chuyên biệt tập trung vào tư vấn M&amp;A, dùng rất ít vốn — một số như Lazard, Evercore, Rothschild &amp; Co, Centerview thuộc nhóm cố vấn M&amp;A hàng đầu thế giới [@stowell2024, pp. 6–7, 82]. Bản thân Credit Suisse đã sáp nhập vào UBS từ tháng 6/2023 [@ubs2023].</p>\n<p><b>Xu hướng hiện nay:</b> hợp nhất và cấu trúc thị trường "quả tạ"; sự nổi lên của các công ty tư vấn độc lập không dùng bảng cân đối; vốn tư nhân thay thế dần phát hành đại chúng; điện tử hoá làm thu hẹp biên lợi nhuận thị trường thứ cấp; và các quy định vốn – thanh khoản chặt hơn làm giảm ROE toàn ngành về mặt cấu trúc — ROE bình quân 2017–2020 của chín ngân hàng toàn cầu lớn nhất chỉ từ −1,9% đến 11,8% [@stowell2024, p. 8, Exhibit 1.4].</p>'
        },
        "1.3": { title: "Vai trò & Chức năng" },
        "1.4": { title: "Tổ chức hoạt động" },
        "1.5": { title: "Môi trường hoạt động" }
      }
    },

    /* ================= CHƯƠNG 2 ================= */
    2: {
      title: "Nghiệp vụ hỗ trợ huy động vốn",
      blurb: "Tư vấn và bảo lãnh phát hành cổ phiếu, trái phiếu trên thị trường sơ cấp; tư vấn đầu tư vào doanh nghiệp thông qua vốn tư nhân và vốn mạo hiểm.",
      refs: "[2] {@tranTuanVinh2023, Chương 4–5}; [1] {@rp2020, Chương 8} (IPO); [4] {@stowell2024, Chương 3–4}",
      objectives: [
        "Xác định các chủ thể được phát hành cổ phiếu và điều kiện phải đáp ứng theo Luật Chứng khoán 2019.",
        "Phân loại phương thức phát hành theo đợt phát hành, theo đối tượng, theo phương pháp định giá và theo phương thức phân phối.",
        "Giải thích các hình thức cam kết bảo lãnh và chủ thể chịu rủi ro phân phối trong từng hình thức.",
        "Trình bày quy trình phát hành cổ phiếu, trái phiếu và tính toán hiệu quả kinh tế của một đợt phát hành.",
        "Giải thích nghiệp vụ đầu tư vốn tư nhân và vốn mạo hiểm — khái niệm, động cơ, quy trình và các hình thức đầu tư."
      ],
      s: {
        "2.1": { title: "Tư vấn & Bảo lãnh phát hành" },
        "2.2": { title: "Phát hành cổ phiếu" },
        "2.3": { title: "Phát hành trái phiếu" },
        "2.4": { title: "Vốn tư nhân & Vốn mạo hiểm" }
      }
    },

    /* ================= CHƯƠNG 3 ================= */
    3: {
      title: "Nghiệp vụ tư vấn Mua bán & Sáp nhập (M&A)",
      blurb: "Khái niệm M&A, động cơ của bên bán và bên mua, các hình thức M&A, quy trình giao dịch và các bên tham gia, hỗ trợ vốn, hậu M&A và chiến thuật chống thôn tính.",
      refs: "[2] {@tranTuanVinh2023, Chương 6–7}; [1] {@rp2020, Chương 2, 6, 7}; [3] Castillo và McAniff (2007)",
      objectives: [
        "Định nghĩa M&A và phân biệt sáp nhập, hợp nhất, mua lại, giao dịch mua cổ phần và mua tài sản.",
        "Giải thích động cơ của bên bán và bên mua; phân loại M&A theo chiều ngang, chiều dọc và hỗn hợp.",
        "Mô tả quy trình giao dịch và vai trò của từng bên tham gia.",
        "Phân tích các phương án hỗ trợ vốn — tiền mặt, cổ phiếu, trái phiếu và hỗn hợp — và thực hiện phân tích tăng/giảm EPS.",
        "Trình bày hoạt động hậu M&A, các chiến thuật chống thôn tính, chiến thuật phản công và phương án thay thế M&A."
      ],
      s: {
        "3.1": { title: "Tổng quan về M&A" },
        "3.2": { title: "Quy trình & Các bên tham gia" },
        "3.3": { title: "Định giá & Tăng/giảm EPS" },
        "3.4": { title: "Hỗ trợ vốn cho giao dịch M&A" },
        "3.5": { title: "Hậu M&A & Chống thôn tính" }
      }
    },

    /* ================= CHƯƠNG 4 ================= */
    4: {
      title: "Nghiệp vụ quản lý tài sản",
      blurb: "Giới thiệu chung và phân loại quản lý tài sản, nghiệp vụ quản lý quỹ đầu tư, quản lý danh mục đầu tư và quản lý gia sản.",
      refs: "[2] {@tranTuanVinh2023, Chương 9}; [4] {@stowell2024, Chương 11–13}",
      objectives: [
        "Định nghĩa quản lý tài sản, phân loại các loại hình và giải thích ưu điểm.",
        "Mô tả nghiệp vụ quản lý quỹ đầu tư: huy động vốn cho quỹ, đầu tư vốn và các vấn đề hỗ trợ.",
        "Giải thích quy trình quản lý danh mục đầu tư và quy trình xây dựng danh mục.",
        "Trình bày các hình thức và quy trình quản lý gia sản cho khách hàng cá nhân.",
        "Tính lợi nhuận ròng của nhà đầu tư khi có phí quản lý, phí thưởng hiệu quả và ngưỡng sinh lời tối thiểu."
      ],
      s: {
        "4.1": { title: "Giới thiệu về quản lý tài sản" },
        "4.2": { title: "Quản lý quỹ đầu tư" },
        "4.3": { title: "Quản lý danh mục đầu tư" },
        "4.4": { title: "Quản lý gia sản" }
      }
    },

    /* ================= CHƯƠNG 5 ================= */
    5: {
      title: "Nghiệp vụ tư vấn doanh nghiệp",
      blurb: "Tư vấn niêm yết chứng khoán, tư vấn chuyển đổi hình thức doanh nghiệp và cổ phần hoá, tư vấn tái cấu trúc nguồn vốn và tái cấu trúc quản trị doanh nghiệp.",
      refs: "[2] {@tranTuanVinh2023, Chương 10}; [1] {@rp2020, Chương 1–2}",
      objectives: [
        "Mô tả nghiệp vụ tư vấn niêm yết chứng khoán và công tác chuẩn bị cho doanh nghiệp.",
        "Giải thích tư vấn chuyển đổi hình thức doanh nghiệp và cổ phần hoá doanh nghiệp nhà nước.",
        "Giải thích khái niệm, cơ sở lý luận, mục đích và quy trình tư vấn tái cấu trúc nguồn vốn.",
        "Giải thích quản trị doanh nghiệp, tầm quan trọng và quy trình tư vấn tái cấu trúc quản trị.",
        "Định giá doanh nghiệp bằng phương pháp so sánh và chuyển từ giá trị doanh nghiệp sang giá trị vốn chủ sở hữu mỗi cổ phần."
      ],
      s: {
        "5.1": { title: "Tư vấn niêm yết & Định giá" },
        "5.2": { title: "Chuyển đổi hình thức doanh nghiệp" },
        "5.3": { title: "Tái cấu trúc doanh nghiệp" },
        "5.4": { title: "Tái cấu trúc nguồn vốn" },
        "5.5": { title: "Tái cấu trúc quản trị" }
      }
    },

    /* ================= CHƯƠNG 6 ================= */
    6: {
      title: "Nghiệp vụ hỗ trợ giao dịch trên thị trường thứ cấp",
      blurb: "Nghiệp vụ môi giới và giao dịch điện tử, tạo lập thị trường, tự doanh, và cho vay giao dịch chứng khoán qua ký quỹ và cho vay chứng khoán bán khống.",
      refs: "[2] {@tranTuanVinh2023, Chương 8}; [4] {@stowell2024, Chương 5–7}",
      objectives: [
        "Giải thích nghiệp vụ môi giới — khái niệm, đặc điểm, quy trình và giao dịch chứng khoán tại Sở giao dịch.",
        "Đọc bảng điện giao dịch và mô tả giao dịch trực tuyến cùng các loại lệnh.",
        "Giải thích nghiệp vụ tạo lập thị trường và vai trò của nhà tạo lập thị trường.",
        "Mô tả nghiệp vụ tự doanh — khái niệm, mục đích, yêu cầu và quy trình.",
        "Tính toán cơ chế ký quỹ và giải thích cho vay chứng khoán để bán khống, cùng lợi ích và rủi ro."
      ],
      s: {
        "6.1": { title: "Môi giới & Giao dịch tại Sở" },
        "6.2": { title: "Giao dịch điện tử" },
        "6.3": { title: "Nghiệp vụ tự doanh" },
        "6.4": { title: "Ký quỹ & Cho vay chứng khoán" }
      }
    }
  };

  /* ---------- Gắn bản dịch vào IB_CONTENT ---------- */
  var applied = { chapters: 0, sectionTitles: 0, sectionBodies: 0 };
  (window.IB_CONTENT || []).forEach(function (ch) {
    var t = VI[ch.id];
    if (!t) return;
    if (t.title) { ch.titleVi = t.title; applied.chapters++; }
    if (t.blurb) ch.blurbVi = t.blurb;
    if (t.refs) ch.refsVi = t.refs;
    if (t.objectives) ch.objectivesVi = t.objectives;
    (ch.sections || []).forEach(function (sec) {
      var st = t.s && t.s[sec.id];
      if (!st) return;
      if (st.title) { sec.titleVi = st.title; applied.sectionTitles++; }
      if (st.html) { sec.htmlVi = st.html; applied.sectionBodies++; }
    });
  });
  window.IB_CONTENT_VI_APPLIED = applied;
})();
