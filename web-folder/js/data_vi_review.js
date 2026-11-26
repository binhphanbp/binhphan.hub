/* =====================================================================
   BAF736 — Bản dịch tiếng Việt: ngân hàng câu hỏi ôn tập (Đúng/Sai & trả
   lời ngắn), 37 câu. Gán qVi/aVi theo id. Renderer dùng L(r,"q")/L(r,"a").
   ===================================================================== */
(function () {
  "use strict";
  if (!Array.isArray(window.REVIEW_BANK)) return;

  var V = {
    "R1-01": ["Ngân hàng đầu tư huy động vốn chủ yếu bằng tiền gửi bán lẻ.",
      "Sai. Nhận tiền gửi bán lẻ là đặc trưng của ngân hàng thương mại. Ngân hàng đầu tư huy động vốn trên thị trường bán buôn và kiếm phí, chênh lệch giá cùng phí quản lý, chứ không sống bằng chênh lệch lãi vay – huy động như ngân hàng thương mại."],
    "R1-02": ["Đạo luật Glass-Steagall năm 1933 tách bạch ngân hàng thương mại và ngân hàng đầu tư tại Hoa Kỳ.",
      "Đúng. Đạo luật này bị bãi bỏ bởi Đạo luật Gramm-Leach-Bliley năm 1999, mở đường cho mô hình ngân hàng đa năng hiện đại."],
    "R1-03": ["Quản trị rủi ro và tuân thủ là các chức năng của khối trước (front office).",
      "Sai. Đó là các chức năng của khối giữa (middle office). Khối trước tạo doanh thu và tiếp xúc khách hàng (tư vấn, thị trường, nghiên cứu); khối sau (back office) thanh toán và ghi sổ giao dịch."],
    "R1-04": ["Thu nhập từ phí của ngân hàng đầu tư có tính chu kỳ cao hơn thu nhập lãi của ngân hàng thương mại.",
      "Đúng. Phí được thu theo từng thương vụ, nên doanh thu sụt mạnh khi khối lượng phát hành và M&A giảm — trong khi chi phí nền (nhân sự) gần như cố định."],
    "R1-05": ["Viết công thức WACC và giải thích vì sao chi phí nợ được nhân với (1 − t).",
      "WACC = (E/V)·r_e + (D/V)·r_d·(1 − t). Lãi vay được khấu trừ thuế, nên mỗi đồng lãi vay làm giảm thu nhập chịu thuế và tiết kiệm t tiền thuế. Do đó chi phí thực đối với doanh nghiệp là r_d(1 − t) — lá chắn thuế. Cổ tức không được khấu trừ, nên chi phí vốn chủ không có điều chỉnh tương đương."],
    "R1-06": ["Vì sao ngân hàng vẫn quan tâm đến vị trí trên bảng xếp hạng (league table) ngay cả với những thương vụ ít lợi nhuận?",
      "Bảng xếp hạng xếp các ngân hàng theo khối lượng và giá trị thương vụ. Thứ hạng phát tín hiệu về năng lực và khả năng tiếp cận thị trường tới khách hàng tiềm năng, nên vị trí cao giúp giành hợp đồng tiếp theo. Vì vậy ngân hàng đôi khi chấp nhận lợi nhuận kém trên một thương vụ nổi bật để giữ thứ hạng — thứ tạo ra phí trong tương lai."],
    "R2-01": ["Trong bảo lãnh phát hành theo cam kết chắc chắn (firm commitment), ngân hàng gánh rủi ro không bán lại được đợt phát hành.",
      "Đúng. Ngân hàng mua trọn đợt phát hành ở mức giá đã thoả thuận. Với thoả thuận nỗ lực tối đa (best efforts), rủi ro phân phối vẫn thuộc về tổ chức phát hành."],
    "R2-02": ["Quyền chọn greenshoe cho phép nhà bảo lãnh bán thêm tối đa 50% số cổ phần.",
      "Sai. Quyền chọn vượt mức (over-allotment) bị giới hạn ở 15% quy mô cơ bản của thương vụ."],
    "R2-03": ["Bảo lãnh phát hành nợ thường có phí (gross spread) thấp hơn nhiều so với bảo lãnh phát hành cổ phần.",
      "Đúng. Phí phát hành trái phiếu thường dư 1% (và thấp hơn nhiều đối với tổ chức phát hành hạng đầu tư), so với 3–7% của một đợt IPO điển hình, vì phát hành nợ diễn ra thường xuyên, chuẩn hóa và ít rủi ro khi phân phối."],
    "R2-04": ["Việc định giá thấp trong IPO (underpricing) đem lại lợi ích cho công ty phát hành.",
      "Sai. Định giá thấp nghĩa là công ty bán cổ phần dưới mức giá mà thị trường sẵn sàng trả — 'tiền bỏ lại trên bàn'. Người hưởng lợi là nhà đầu tư được phân bổ, và gián tiếp là nhà bảo lãnh vì rủi ro phân phối giảm và khách hàng phân phối của họ được tưởng thưởng."],
    "R2-05": ["Một công ty bán 10 triệu cổ phần giá 20 USD với phí bảo lãnh 6%. Số tiền thu gộp và thu ròng là bao nhiêu?",
      "Số tiền thu gộp = 10 triệu × 20 USD = 200 triệu USD. Phí bảo lãnh = 6% × 200 triệu = 12 triệu USD. Số tiền thu ròng của tổ chức phát hành = 188 triệu USD."],
    "R2-06": ["Giải thích vai trò của ngưỡng sinh lời (hurdle rate) và lãi thưởng (carried interest) trong một quỹ đầu tư tư nhân (private equity).",
      "Lãi thưởng là phần lợi nhuận chia cho thành viên quản lý (GP), thường là 20%. Ngưỡng sinh lời (mức sinh lời ưu tiên, thường 8%) là mức tối thiểu mà nhà đầu tư (LP) phải nhận được trước khi GP được hưởng lãi thưởng. Cùng nhau, chúng bảo đảm nhà quản lý được thưởng cho hiệu quả vượt trội thực sự chứ không chỉ vì đã giải ngân vốn; điều khoản mốc cao nhất (high-water mark) hoặc thu hồi (clawback) ngăn việc được trả hai lần trên cùng một khoản lãi."],
    "R3-01": ["Trong giao dịch mua tài sản, bên mua nói chung chỉ gánh những nghĩa vụ nợ mà mình đồng ý tiếp nhận một cách rõ ràng.",
      "Đúng. Đó là lý do bên mua thường thích mua tài sản, còn bên bán thích bán cổ phần vì cho một lối thoái vốn sạch sẽ và thường hiệu quả hơn về thuế."],
    "R3-02": ["Cộng hưởng doanh thu (revenue synergies) thường được xem là đáng tin cậy hơn cộng hưởng chi phí (cost synergies).",
      "Sai. Cộng hưởng chi phí phần lớn nằm trong tầm kiểm soát của ban điều hành (loại bỏ chức năng trùng lặp, mua sắm tập trung). Cộng hưởng doanh thu phụ thuộc hành vi khách hàng và thường bị thị trường chiết khấu."],
    "R3-03": ["Trong thương vụ thanh toán hoàn toàn bằng cổ phiếu, giao dịch làm tăng lãi (accretive) khi P/E của bên mua lớn hơn P/E mà họ trả cho công ty mục tiêu.",
      "Đúng. Bên mua phát hành cổ phiếu tương đối đắt để mua lợi nhuận tương đối rẻ, làm tăng EPS. Nếu trả P/E cao hơn P/E của chính mình thì giao dịch làm pha loãng."],
    "R3-04": ["Bằng chứng thực nghiệm cho thấy cổ đông bên mua thường thâu tóm phần lớn giá trị tạo ra trong M&A.",
      "Sai. Cổ đông công ty mục tiêu thâu tóm phần lớn giá trị được công bố thông qua mức thặng dư; bên mua trung bình chỉ đạt lợi suất bất thường xấp xỉ bằng 0 hoặc âm nhẹ."],
    "R3-05": ["Một công ty mục tiêu giao dịch ở 40 USD (chưa bị ảnh hưởng) với 50 triệu cổ phần. Với mức thặng dư 25%, giá trị vốn chủ mua lại là bao nhiêu?",
      "Giá chào mua = 40 USD × 1,25 = 50 USD. Giá trị vốn chủ mua lại = 50 USD × 50 triệu = 2.500 triệu USD."],
    "R3-06": ["Những đặc điểm nào khiến một công ty là ứng viên LBO tốt, và vì sao?",
      "Dòng tiền ổn định và dự đoán được (để trả lãi cố định), nhu cầu đầu tư tài sản cố định thấp (tiền được dành để trả nợ), tài sản hữu hình hoặc dễ bán (làm tài sản bảo đảm và tạo lựa chọn thoái vốn), vị thế thị trường vững chắc, và dư địa cải thiện vận hành. Các doanh nghiệp biến động mạnh, ngốn vốn đầu tư hoặc chưa có doanh thu không thể gánh nổi mức trả nợ cố định cao."],
    "R3-07": ["Vì sao 'tài trợ đính kèm' (staple financing) là một xung đột lợi ích?",
      "Ngân hàng bên bán tư vấn cho người bán — bên có lợi ích là giá cao nhất — trong khi đồng thời chào gói tài trợ nợ cho người mua, thu một khoản phí riêng và với điều khoản ảnh hưởng đến số tiền người mua có thể trả. Ngân hàng xử lý việc này bằng công bố thông tin và tách nhóm, nhưng căng thẳng lợi ích là mang tính cấu trúc."],
    "R4-01": ["Phí quản lý được thu trên tài sản quản lý (AUM) bất kể quỹ hoạt động tốt hay không.",
      "Đúng. Đó chính là lý do phí này được coi trọng: doanh thu định kỳ, dự đoán được, giúp ổn định lợi nhuận của tập đoàn trước thu nhập tư vấn và giao dịch mang tính chu kỳ."],
    "R4-02": ["Quỹ ETF chỉ có thể mua hoặc bán một lần mỗi ngày theo NAV đóng cửa.",
      "Sai. ETF giao dịch trong phiên trên sở giao dịch theo giá thị trường, được giữ sát NAV nhờ hoạt động kinh doanh chênh lệch giá của thành viên lập quỹ được ủy quyền. Quỹ mở truyền thống chỉ giao dịch một lần mỗi ngày theo NAV."],
    "R4-03": ["Mệnh lệnh ủy thác toàn quyền (discretionary) cho phép nhà quản lý giao dịch mà không cần xin duyệt từng giao dịch.",
      "Đúng — trong phạm vi mục tiêu và ràng buộc đã thống nhất trong mệnh lệnh hoặc IPS. Mệnh lệnh tư vấn (advisory) để mỗi quyết định lại cho khách hàng."],
    "R4-04": ["Một quỹ tính phí 2% và lãi thưởng 20% trên ngưỡng 8%. Lợi suất gộp là 15%. Nhà đầu tư nhận ròng bao nhiêu?",
      "Phần vượt ngưỡng = 7%. Lãi thưởng = 20% × 7% = 1,4%. Lợi suất ròng = 15% − 2% − 1,4% = 11,6%."],
    "R4-05": ["Phân biệt tỷ số Sharpe với tỷ số thông tin (information ratio).",
      "Sharpe = (R_P − R_f)/σ_P đo lợi suất vượt trội trên lãi suất phi rủi ro trên mỗi đơn vị rủi ro tổng — phù hợp khi danh mục là toàn bộ tài sản của nhà đầu tư. Tỷ số thông tin = (R_P − R_B)/sai số theo dõi đo lợi suất chủ động so với chỉ số tham chiếu trên mỗi đơn vị rủi ro chủ động — nó tách riêng kỹ năng của nhà quản lý so với mệnh lệnh đầu tư."],
    "R4-06": ["Liệt kê năm đặc điểm của một chỉ số tham chiếu tốt.",
      "Rõ ràng (biết được thành phần và tỷ trọng), có thể đầu tư (thực sự có thể nắm giữ thụ động), đo lường được (tính được lợi suất với tần suất hợp lý), phù hợp (nhất quán với phong cách của nhà quản lý), và xác định trước (thống nhất trước kỳ đánh giá chứ không chọn sau)."],
    "R5-01": ["EV/EBITDA trung lập với cấu trúc vốn, còn P/E thì không.",
      "Đúng. EV/EBITDA định giá toàn bộ doanh nghiệp trước chi phí tài trợ, nên các công ty có mức đòn bẩy khác nhau vẫn so sánh được. P/E được tính sau lãi vay, nên đòn bẩy làm méo nó."],
    "R5-02": ["Chuyên viên phân tích thường áp dụng bội số trung bình của nhóm so sánh để hạn chế ảnh hưởng của giá trị ngoại lai.",
      "Sai. Người ta dùng trung vị. Bội số bị chặn dưới bởi 0 nhưng không có chặn trên, nên phân phối lệch phải và một giá trị ngoại lai có thể làm méo nghiêm trọng số trung bình."],
    "R5-03": ["Chào bán một phần vốn chủ (equity carve-out) huy động được tiền mặt trong khi vẫn cho phép công ty mẹ giữ quyền kiểm soát công ty con.",
      "Đúng. Một tỷ lệ thiểu số được bán qua IPO, tạo ra tiền mặt và một mức giá thị trường công khai. Ngược lại, chia tách (spin-off) phân phối cổ phần cho cổ đông hiện hữu và không huy động tiền mặt."],
    "R5-04": ["EBITDA là 120 triệu USD, bội số nhóm so sánh 9,0×, nợ ròng 200 triệu USD và có 50 triệu cổ phần. Giá trị mỗi cổ phần là bao nhiêu?",
      "EV = 9,0 × 120 triệu = 1.080 triệu USD. Giá trị vốn chủ = 1.080 − 200 = 880 triệu USD. Giá trị mỗi cổ phần = 880 triệu / 50 triệu = 17,60 USD."],
    "R5-05": ["Giải thích chiết khấu tập đoàn (conglomerate discount) và các cách khắc phục thông thường.",
      "Các tập đoàn đa ngành thường giao dịch dưới tổng giá trị các bộ phận vì nhà đầu tư không nhìn xuyên được các khoản trợ cấp chéo, sự chú ý của ban điều hành bị dàn mỏng, và bản thân nhà đầu tư có thể tự đa dạng hóa rẻ hơn. Cách khắc phục là chia tách, chào bán một phần và thoái vốn, được luận chứng bằng định giá tổng các bộ phận (sum-of-the-parts) cho thấy khoảng chênh."],
    "R5-06": ["Vì sao một công ty Việt Nam phải chuyển đổi thành công ty cổ phần trước khi chào bán ra công chúng?",
      "Chỉ công ty cổ phần mới được phát hành cổ phần chuyển nhượng được cho công chúng và niêm yết. Việc chuyển đổi cũng tạo ra các cơ quan quản trị — đại hội đồng cổ đông, hội đồng quản trị, ban kiểm soát — mà cơ quan quản lý và nhà đầu tư bên ngoài yêu cầu."],
    "R6-01": ["Nhà môi giới đại lý (agency broker) gánh rủi ro tự doanh trên các lệnh thực hiện cho khách hàng.",
      "Sai. Nhà môi giới đại lý thực hiện lệnh trên thị trường để hưởng hoa hồng và không bao giờ đứng ở chiều đối ứng, nên không gánh rủi ro thị trường — chỉ có rủi ro vận hành và tuân thủ."],
    "R6-02": ["Chênh lệch giá đặt mua – chào bán của nhà tạo lập thị trường bù đắp cho rủi ro tồn kho và rủi ro lựa chọn bất lợi.",
      "Đúng, cùng với chi phí xử lý lệnh. Chênh lệch giá nới rộng khi biến động tăng, độ sâu thị trường mỏng, hoặc nghi ngờ có giao dịch từ bên nắm nhiều thông tin — vì vậy chênh lệch giá là thước đo trực tiếp của tính thanh khoản."],
    "R6-03": ["Khoản lỗ tối đa về mặt lý thuyết của một giao dịch bán khống là không giới hạn.",
      "Đúng. Giá một cổ phiếu có thể tăng vô hạn, trong khi vị thế mua chỉ có thể giảm về 0. Sự bất đối xứng này, cộng với rủi ro thu hồi và siết mua, khiến bán khống rủi ro hơn nhiều so với vị thế mua cùng quy mô."],
    "R6-04": ["Cổ phiếu được mua ở giá 50 USD với tỷ lệ ký quỹ ban đầu 50% và tỷ lệ duy trì 25%. Giá gọi ký quỹ bổ sung là bao nhiêu?",
      "Giá gọi ký quỹ = P × (1 − ký quỹ ban đầu)/(1 − ký quỹ duy trì) = 50 × 0,50/0,75 = 33,33 USD. Ở mức giá đó, vốn chủ của khách hàng đã giảm còn 25% giá trị thị trường và phải nộp thêm tiền."],
    "R6-05": ["Quy tắc Volcker phân biệt tạo lập thị trường với tự doanh (proprietary trading) như thế nào?",
      "Bằng ý định và bằng chứng phục vụ khách hàng. Tạo lập thị trường nghĩa là nắm giữ tồn kho hợp lý dự kiến để đáp ứng nhu cầu khách hàng trong ngắn hạn; tự doanh nghĩa là mở vị thế để kiếm lời từ biến động giá. Quy tắc cho phép loại thứ nhất (cùng với bảo lãnh phát hành và phòng ngừa rủi ro) và cấm loại thứ hai — khó khăn thực tế là chứng minh đâu là đâu."],
    "R6-06": ["Một nhà tự doanh tích lũy một lượng tồn kho mua lớn ngoài ý muốn. Họ làm gì với các mức yết giá và vì sao?",
      "Họ hạ cả giá đặt mua lẫn giá chào bán. Giá đặt mua thấp hơn làm nản việc tiếp tục bán cho nhà tự doanh; giá chào bán thấp hơn làm việc mua từ họ hấp dẫn hơn. Nhà tự doanh lệch các mức yết để đưa tồn kho về trạng thái cân bằng, chứ không phải để dự đoán hướng đi."]
  };

  var n = 0;
  window.REVIEW_BANK.forEach(function (r) {
    if (V[r.id]) { r.qVi = V[r.id][0]; r.aVi = V[r.id][1]; n++; }
  });
  window.DATA_VI_REVIEW_APPLIED = n;
})();
