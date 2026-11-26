/* =====================================================================
   BAF736 — Bản dịch tiếng Việt: tiêu đề và chú thích hình vẽ (Chương 1–6).
   Bổ sung cho js/data_vi.js (đã dịch hình 1.1–1.4). Mỗi phần tử là cặp
   [titleVi, capVi] gán theo đúng chỉ số của mảng FIGURES[key].
   ===================================================================== */
(function () {
  "use strict";
  if (!window.FIGURES) return;

  var FIG_VI = {
    "1|1.3": [
      ["Hình 1.5 — Sáu chức năng của ngân hàng đầu tư",
       "Theo slide bài giảng: <b>môi giới</b> (đại lý, hưởng hoa hồng), <b>tự doanh</b> và <b>tạo lập thị trường</b> (giao dịch cho chính mình, hưởng chênh lệch giá), <b>nhận uỷ thác</b> (thực hiện và quản lý thay khách hàng), <b>tư vấn</b> (phát hành, cổ phần hóa, M&amp;A, chiến lược) và <b>cung cấp dịch vụ</b> (môi giới trọn gói cho quỹ đầu cơ)."],
      ["Hình 1.6 — Môi giới (đại lý) và tự doanh / tạo lập thị trường (chính chủ)",
       "Với vai trò <b>môi giới</b>, ngân hàng không bao giờ sở hữu chứng khoán — chỉ đứng giữa bên mua và bên bán để hưởng hoa hồng. Với vai trò <b>tự doanh / tạo lập thị trường</b>, ngân hàng mua theo giá đặt mua và bán theo giá chào bán, nắm giữ tồn kho ở giữa: <b>Giá chào bán = Giá đặt mua + chênh lệch</b>. Chênh lệch này bù đắp cho rủi ro tồn kho và cho việc giao dịch với đối tác nắm nhiều thông tin hơn."]
    ],
    "1|1.4": [
      ["Hình 1.7 — Cơ cấu tổ chức: khối trước, khối giữa và khối sau",
       "<b>Khối trước (front office)</b> tạo doanh thu và tiếp xúc khách hàng; <b>khối giữa (middle office)</b> đo lường và kiểm soát rủi ro phát sinh; <b>khối sau (back office)</b> thanh toán và ghi sổ. Khối trước còn được ngăn cách bởi một <b>bức tường thông tin</b> thành <b>bên riêng tư</b> (chuyên viên tư vấn nắm thông tin nội bộ) và <b>bên công khai</b> (nghiên cứu, bán hàng và giao dịch)."],
      ["Hình 1.8 — Ai được thực hiện nghiệp vụ ngân hàng đầu tư tại Việt Nam",
       "Theo pháp luật Việt Nam hiện hành, các chức năng này do <b>ngân hàng đa năng một phần</b>, <b>công ty chứng khoán</b> (SSI, HSC…), <b>công ty quản lý quỹ</b> (VFM…) và, về nguyên tắc, công ty đầu tư chứng khoán thực hiện. Bảy nghiệp vụ cốt lõi liệt kê bên phải là nội dung của các Chương 2–6."]
    ],
    "1|1.5": [
      ["Hình 1.9 — Hệ sinh thái hoạt động của ngân hàng đầu tư",
       "Ngân hàng đầu tư không bao giờ thực hiện một thương vụ một mình. Các hãng luật, kiểm toán, tư vấn thuế, tổ chức xếp hạng tín nhiệm, ngân hàng lưu ký, các đơn vị nghiên cứu và thẩm định vây quanh giao dịch, và toàn bộ hệ sinh thái đó nằm trong khuôn khổ pháp lý trong nước và quốc tế cùng bối cảnh kinh tế – xã hội hiện hành."]
    ],
    "2|2.1": [
      ["Hình 2.1 — Bảo lãnh phát hành: ai gánh rủi ro phân phối",
       "Bảo lãnh phát hành là việc tổ chức phát hành thuê <b>bảng cân đối</b> và <b>mạng lưới phân phối</b> của ngân hàng. Bốn hình thức cam kết chỉ khác nhau ở chỗ rủi ro chứng khoán ế đọng rơi vào ai — và mức phí bảo lãnh (gross spread) mà tổ chức phát hành trả tăng dần theo mức rủi ro ngân hàng gánh chịu."]
    ],
    "2|2.2": [
      ["Hình 2.2 — Quy trình IPO, từ trao thầu đến bình ổn giá",
       "Tám bước của một đợt chào bán ra công chúng. Việc định giá và khoảng giá được xác định <i>trước</i> roadshow; <b>dựng sổ (bookbuilding)</b> chuyển nhu cầu của nhà đầu tư thành giá cuối cùng; và <b>quyền chọn vượt mức (greenshoe)</b> hỗ trợ thị trường thứ cấp trong khoảng 30 ngày sau niêm yết."],
      ["Hình 2.3 — Dòng tiền đi về đâu trong một đợt chào bán",
       "Một ví dụ tính theo mô hình thác nước: 10 triệu cổ phần giá 20 USD kèm quyền greenshoe 15% huy động <b>230 triệu USD gộp</b>; phí bảo lãnh 6% trả cho tổ hợp <b>13,8 triệu USD</b>, còn lại <b>216,2 triệu USD</b> cho tổ chức phát hành. Nếu giá đóng cửa sau đó cao hơn giá chào bán, phần giá trị tăng thêm — &lsquo;tiền bỏ lại trên bàn&rsquo; — thuộc về nhà đầu tư được phân bổ chứ không thuộc về công ty."]
    ],
    "2|2.4": [
      ["Hình 2.4 — Cấu trúc quỹ tư nhân và mô hình thác nước &lsquo;2 và 20&rsquo;",
       "Thành viên góp vốn (limited partner) cam kết vốn; thành viên quản lý (general partner) đầu tư số vốn đó và được trả <b>phí quản lý 2%</b> cộng <b>20% lãi thưởng (carried interest)</b> trên phần lợi nhuận vượt <b>ngưỡng sinh lời (hurdle)</b> (thường là 8%). Ngưỡng này bảo đảm nhà đầu tư nhận được mức sinh lời ưu tiên trước khi nhà quản lý được chia phần lợi nhuận."]
    ],
    "3|3.1": [
      ["Hình 3.1 — Các hình thức kết hợp doanh nghiệp",
       "Kết hợp <b>theo chiều ngang</b> mua thị phần trong cùng ngành và cùng công đoạn (và thu hút sự giám sát về cạnh tranh). Kết hợp <b>theo chiều dọc</b> di chuyển lên hoặc xuống chuỗi cung ứng để bảo đảm nguồn cung hoặc giành lấy biên lợi nhuận. Kết hợp <b>tập đoàn</b> gộp các ngành nghề không liên quan — trong lịch sử là loại dễ phá huỷ giá trị nhất."]
    ],
    "3|3.2": [
      ["Hình 3.2 — Đấu giá bên bán: tạo ra sức ép cạnh tranh",
       "Sức ép cạnh tranh chính là sản phẩm của nhà tư vấn bên bán. <b>Đấu giá rộng</b> tối đa hóa việc khám phá giá nhưng có nguy cơ rò rỉ và làm gián đoạn hoạt động; <b>quy trình có mục tiêu</b> bảo vệ tính bảo mật nhưng đánh đổi bằng sức ép cạnh tranh. Lưu ý điểm mà thoả thuận bảo mật (NDA) mở cổng cho bản CIM, và điểm mà các ý định không ràng buộc trở thành chào giá ràng buộc."]
    ],
    "3|3.3": [
      ["Hình 3.3 — Tăng / giảm lãi trên cổ phần: câu hỏi đầu tiên của bên mua",
       "Tính theo ví dụ bài giảng. <b>P/E 15×</b> của bên mua so với <b>16,7× mà họ phải trả</b> có nghĩa là riêng phần thanh toán bằng cổ phiếu đã làm giảm EPS; nợ vay giá rẻ sau thuế và 20 triệu USD giá trị cộng hưởng cứu thương vụ về mức <b>+5,0% tăng lãi</b>. Đổi cơ cấu thanh toán thì kết quả đổi — đây chính là điều Bài thực hành 3 cho sinh viên khám phá."],
      ["Hình 3.4 — Hình thức thanh toán và nguồn tài trợ",
       "<b>Hình thức thanh toán</b> là thứ bên bán nhận về; <b>nguồn tài trợ</b> là nơi bên mua tìm ra số tiền đó. Tiền mặt là chắc chắn và thường làm tăng EPS khi nợ rẻ, nhưng tiêu hao dư địa bảng cân đối và bị đánh thuế đối với bên bán. Cổ phiếu chia sẻ rủi ro và có thể hoãn thuế, nhưng làm pha loãng bên mua và có thể phát tín hiệu rằng cổ phiếu của họ đang bị định giá cao."]
    ],
    "3|3.5": [
      ["Hình 3.5 — Các biện pháp chống thâu tóm và cách phản công",
       "Các biện pháp phòng thủ có hai mặt: chúng củng cố vị thế thương lượng của hội đồng quản trị — hoặc bảo vệ ban điều hành yếu kém và tước đi phần thặng dư của cổ đông. Thực nghiệm cho thấy phòng thủ mạnh (đặc biệt là hội đồng quản trị bầu so le) gắn liền với <b>mức thặng dư thực nhận thấp hơn</b>."]
    ],
    "4|4.1": [
      ["Hình 4.1 — Quản lý tài sản: các phân khúc và mức phí",
       "Quản lý tài sản là đầu tư <b>tiền của người khác</b> để thu phí — khác với hoạt động tự đầu tư bằng vốn của chính ngân hàng. Phí tăng dần khi mệnh lệnh đầu tư càng riêng biệt và càng ít ràng buộc, từ vài điểm cơ bản cho mệnh lệnh chỉ số tổ chức đến &lsquo;2 và 20&rsquo; cho các sản phẩm thay thế."]
    ],
    "4|4.2": [
      ["Hình 4.2 — Cơ chế vận hành quỹ: NAV, mua/bán chứng chỉ và cách chia phí",
       "Chu trình của quỹ: huy động → đầu tư theo mệnh lệnh → xác định <b>NAV</b> → xử lý mua và mua lại chứng chỉ quỹ → báo cáo. Phí được trừ trước tiên: phí quản lý thu cả năm được lẫn năm mất, còn lãi thưởng chỉ áp dụng cho phần vượt ngưỡng sinh lời."]
    ],
    "4|4.4": [
      ["Hình 4.3 — Quy trình quản lý gia sản",
       "Quản lý gia sản dựa trên mục tiêu và mang tính chu kỳ. <b>Tuyên bố chính sách đầu tư (IPS)</b> là trục xoay: nó chuyển hoàn cảnh của khách hàng thành một mệnh lệnh bằng văn bản với mục tiêu, ràng buộc và một chỉ số tham chiếu, và là tài liệu để về sau đối chiếu, đánh giá hiệu quả cùng mức độ phù hợp."]
    ],
    "5|5.1": [
      ["Hình 5.1 — Sự sẵn sàng niêm yết và cầu nối từ EV sang vốn chủ",
       "Bên trái: bốn luồng công việc chuẩn bị mà một nhà tư vấn niêm yết phải hoàn tất. Bên phải: phép tính mà mọi định giá theo công ty so sánh đều kết thúc — lấy bội số <b>trung vị</b> của nhóm so sánh để ra giá trị doanh nghiệp (EV), rồi trừ nợ ròng (và lợi ích cổ đông thiểu số / cổ phần ưu đãi) để ra giá trị vốn chủ trên mỗi cổ phần."]
    ],
    "5|5.2": [
      ["Hình 5.2 — Chuyển đổi loại hình doanh nghiệp và cổ phần hóa",
       "Chỉ <b>công ty cổ phần</b> mới được chào bán cổ phần ra công chúng, nên việc chuyển đổi phải diễn ra trước mọi đợt IPO. Đối với doanh nghiệp nhà nước, quá trình này là <b>cổ phần hóa</b>, trong đó định giá doanh nghiệp — đặc biệt là định giá quyền sử dụng đất — là bước gây tranh cãi nhất và bị giám sát chặt chẽ nhất."]
    ],
    "5|5.4": [
      ["Hình 5.3 — Tái cấu trúc vốn: sự đánh đổi của WACC",
       "Thay vốn chủ đắt đỏ bằng nợ vay giá rẻ được khấu trừ thuế sẽ làm giảm WACC — nhưng chỉ đến một mức. Vượt mức đó, tỷ suất sinh lời đòi hỏi trên cả nợ lẫn vốn chủ tăng lên cùng với <b>chi phí kiệt quệ tài chính</b> dự kiến sẽ lấn át, khiến WACC quay đầu đi lên. Điểm tối ưu nằm thấp hơn đối với các doanh nghiệp biến động mạnh và ít tài sản."]
    ],
    "6|6.1": [
      ["Hình 6.1 — Các loại lệnh và cơ chế khớp lệnh của sở giao dịch",
       "Lệnh đến sở giao dịch qua công ty môi giới và được khớp theo <b>ưu tiên về giá, rồi ưu tiên về thời gian</b>. Lệnh <b>giới hạn (LO)</b> bảo đảm giá nhưng không bảo đảm khớp; lệnh <b>thị trường (MP/MTL)</b> bảo đảm khớp nhưng không bảo đảm giá; lệnh <b>ATO/ATC</b> chỉ tham gia phiên khớp lệnh định kỳ mở cửa và đóng cửa."]
    ],
    "6|6.2": [
      ["Hình 6.2 — Tạo lập thị trường: chênh lệch giá và độ lệch tồn kho",
       "Nhà tạo lập yết cả hai chiều và hưởng chênh lệch giá trên một vòng mua – bán. Khi liên tục bị khớp ở một chiều, tồn kho tích lũy và nhà tạo lập <b>lệch cả hai mức yết</b> để thu hút dòng lệnh đối ứng — quản trị tồn kho chứ không dự đoán hướng đi. Nới rộng chênh lệch giá là phản ứng trước biến động và trước nghi ngờ có giao dịch từ bên nắm nhiều thông tin."]
    ],
    "6|6.4": [
      ["Hình 6.3 — Cho vay ký quỹ: sức mua và giá gọi ký quỹ bổ sung",
       "Tính theo ví dụ bài giảng. Mua ở giá 50 USD với tỷ lệ ký quỹ ban đầu 50% và tỷ lệ duy trì 25% tạo ra <b>đòn bẩy 2×</b> và điểm gọi ký quỹ bổ sung ở <b>33,33 USD</b>. Dưới ngưỡng đó, khách hàng phải nộp thêm tiền hoặc bị bán giải chấp — và đòn bẩy đã nhân đôi mức lỗ tính theo phần trăm trên vốn của chính họ."],
      ["Hình 6.4 — Cho vay chứng khoán và cơ chế bán khống",
       "Bên cho vay (một nhà đầu tư nắm giữ dài hạn) cung cấp cổ phiếu để đổi lấy tài sản bảo đảm và một khoản phí; người bán khống bán ngay bây giờ và phải mua lại về sau. Lợi nhuận = <b>giá bán − giá mua lại − phí vay − cổ tức phải trả lại</b>. Khoản lỗ về lý thuyết là không giới hạn, và một lệnh <b>thu hồi (recall)</b> hoặc một đợt siết mua có thể buộc phải mua bù đúng vào thời điểm bất lợi nhất."]
    ]
  };

  var n = 0;
  Object.keys(FIG_VI).forEach(function (key) {
    var list = window.FIGURES[key];
    if (!list) return;
    FIG_VI[key].forEach(function (pair, i) {
      if (list[i]) { list[i].titleVi = pair[0]; list[i].capVi = pair[1]; n++; }
    });
  });
  window.DATA_VI_FIG_APPLIED = n;
})();
