/* =====================================================================
   BAF736 — Bản dịch tiếng Việt cho phòng mô phỏng, công cụ, hình vẽ,
   bảng công thức và thẻ ghi nhớ.
   Vietnamese layer for labs, tools, figures, formulas and flashcards.
   Gắn thêm trường *Vi; mục chưa dịch tự động hiển thị tiếng Anh.
   ===================================================================== */
(function () {
  "use strict";
  var n = { labs: 0, tools: 0, figures: 0, cards: 0, formulas: 0 };

  /* ---------------- Phòng mô phỏng theo chương ---------------- */
  var LABS_VI = {
    1: { title: "Mô phỏng 1 · WACC &amp; Chi phí sử dụng vốn",
         guide: "Mọi định giá của ngân hàng đầu tư đều chiết khấu dòng tiền theo WACC. Hãy xây dựng nó từ gốc: CAPM cho ra chi phí vốn chủ sở hữu, lá chắn thuế làm nợ vay rẻ đi, và tỷ trọng cơ cấu vốn kết hợp hai thành phần. Sau đó quan sát đường WACC khi bạn thay đổi tỷ trọng vốn chủ sở hữu — lưu ý rằng với beta cố định quan hệ này là tuyến tính, chính vì vậy sự đánh đổi thực tế (r<sub>e</sub> tăng và chi phí kiệt quệ tài chính) mới là điều quan trọng." },
    2: { title: "Mô phỏng 2 · Hiệu quả kinh tế của đợt IPO",
         guide: "Định giá một đợt phát hành cổ phiếu sơ cấp theo cách bộ phận ECM vẫn làm. Thiết lập quy mô đợt phát hành, giá chào bán và phí bảo lãnh, rồi thực hiện quyền chọn mua vượt mức (greenshoe). Hãy quan sát phần vốn thực sự về tay tổ chức phát hành so với phần thuộc về tổ hợp bảo lãnh, và cách định giá thấp chuyển giá trị sang các nhà đầu tư được phân bổ." },
    3: { title: "Mô phỏng 3 · Tăng/Giảm EPS trong M&amp;A",
         guide: "Câu hỏi được đặt ra nhiều nhất trong một buổi chào thầu bên mua: thương vụ này tác động thế nào tới EPS của bên mua? Hãy đặt mức phần bù, tỷ lệ tiền mặt/cổ phiếu, chi phí tài trợ và giá trị cộng hưởng. Đường cong thể hiện mức tăng/giảm EPS trên toàn dải tỷ lệ thanh toán bằng cổ phiếu — hãy tìm điểm hoà vốn nơi thương vụ chuyển từ làm tăng sang làm giảm EPS." },
    4: { title: "Mô phỏng 4 · Phí quỹ &amp; Lợi nhuận ròng của nhà đầu tư",
         guide: "Ngành quản lý tài sản sống nhờ hai dòng phí. Hãy đặt phí quản lý, phí thưởng hiệu quả và ngưỡng sinh lời tối thiểu, rồi quét dải lợi nhuận gộp. Điểm gãy của đường biểu diễn chính là ngưỡng sinh lời: dưới ngưỡng, nhà quản lý chỉ thu phí quản lý; trên ngưỡng, phí thưởng lấy một tỷ lệ cố định của mỗi điểm phần trăm tăng thêm. Lưu ý phí quản lý vẫn được thu ngay cả khi lợi nhuận gộp âm." },
    5: { title: "Mô phỏng 5 · Định giá theo phương pháp so sánh",
         guide: "Xây dựng một định giá theo bội số giao dịch của các công ty tương đương và bắc cầu từ giá trị doanh nghiệp sang giá trị mỗi cổ phần. Thay đổi bội số để thấy toàn bộ dải định giá, rồi so sánh kết quả EV/EBITDA với kết quả P/E — khoảng chênh lệch lớn giữa hai phương pháp hầu như luôn cho thấy đòn bẩy của doanh nghiệp khác biệt so với nhóm so sánh." },
    6: { title: "Mô phỏng 6 · Giao dịch ký quỹ &amp; Đòn bẩy",
         guide: "Cho vay ký quỹ là cách công ty chứng khoán khai thác thị trường thứ cấp — và cũng là cách khách hàng gặp rắc rối. Hãy đặt tỷ lệ ký quỹ ban đầu và ký quỹ duy trì, rồi thay đổi giá. Biểu đồ so sánh tỷ suất sinh lời trên vốn chủ của nhà đầu tư với tỷ suất khi không dùng đòn bẩy; đường màu đỏ đánh dấu mức giá kích hoạt lệnh gọi ký quỹ, khi đó khách hàng phải nộp thêm tiền hoặc bị bán giải chấp." }
  };

  var TOOLS_VI = {
    dcf: { tab: "Định giá DCF", title: "Chiết khấu dòng tiền — giá trị doanh nghiệp và vốn chủ sở hữu",
           guide: "Phương pháp định giá nội tại, bổ sung cho định giá so sánh. Hãy dự phóng dòng tiền tự do, chiết khấu theo WACC và cộng giá trị cuối kỳ theo mô hình tăng trưởng Gordon. Lưu ý tỷ trọng rất lớn của giá trị cuối kỳ trong tổng giá trị — thường 60–80% — đó là lý do tốc độ tăng trưởng dài hạn luôn là giả định được thương lượng gay gắt nhất trong mọi mô hình DCF." },
    lbo: { tab: "Tỷ suất sinh lời LBO", title: "Mua lại bằng vốn vay — IRR và bội số vốn",
           guide: "Tỷ suất sinh lời của quỹ đến từ ba động lực: trả bớt nợ bằng chính dòng tiền của doanh nghiệp mục tiêu, tăng trưởng EBITDA, và thoái vốn ở một bội số khác. Hãy thay đổi đòn bẩy và bội số thoái vốn để nhận diện động lực nào thực sự tạo ra lợi nhuận — và mức độ đổ vỡ của thương vụ khi bội số thoái vốn thu hẹp." },
    bond: { tab: "Định giá trái phiếu", title: "Định giá trái phiếu, thời lượng (duration) và độ lồi",
            guide: "Toàn bộ thị trường vốn nợ trong một màn hình. Hãy định giá trái phiếu theo lợi suất, rồi quan sát cách thời lượng (duration) dự báo mức thay đổi giá khi lợi suất biến động nhỏ và cách độ lồi (convexity) hiệu chỉnh khi biến động lớn. Lưu ý đường giá – lợi suất luôn lồi, và điều này luôn có lợi cho trái chủ." },
    mm: { tab: "Chênh lệch giá của Nhà tạo lập", title: "Tạo lập thị trường — thu nhập từ chênh lệch giá và rủi ro tồn kho",
          guide: "Mô phỏng một ngày giao dịch của nhà tạo lập thị trường. Chênh lệch giá mua – bán mang lại lợi nhuận trên mỗi vòng giao dịch, nhưng lượng tồn kho còn lại chịu rủi ro biến động giá và rủi ro giao dịch với nhà đầu tư có thông tin. Hãy tăng tỷ lệ dòng lệnh có thông tin và quan sát nghiệp vụ tạo lập thị trường từ có lãi chuyển thành thua lỗ — đó chính là lý do nhà tạo lập nới rộng chênh lệch giá khi nghi ngờ bên kia nắm thông tin tốt hơn mình." }
  };

  if (window.LABS) Object.keys(LABS_VI).forEach(function (k) {
    if (window.LABS[k]) { window.LABS[k].titleVi = LABS_VI[k].title; window.LABS[k].guideVi = LABS_VI[k].guide; n.labs++; }
  });
  if (window.TOOLS) Object.keys(TOOLS_VI).forEach(function (k) {
    if (window.TOOLS[k]) {
      window.TOOLS[k].titleVi = TOOLS_VI[k].title;
      window.TOOLS[k].guideVi = TOOLS_VI[k].guide;
      window.TOOLS[k].tabVi = TOOLS_VI[k].tab;
      n.tools++;
    }
  });

  /* ---------------- Bảng công thức ---------------- */
  window.FORMULAS_VI = {
    1: '<b>Chi phí vốn chủ sở hữu (CAPM):</b> r<sub>e</sub> = r<sub>f</sub> + β(r<sub>m</sub> − r<sub>f</sub>)<br>' +
       '<b>Chi phí nợ vay sau thuế:</b> r<sub>d</sub>(1 − t)<br>' +
       '<b>WACC</b> = (E/V)·r<sub>e</sub> + (D/V)·r<sub>d</sub>(1 − t)<br>' +
       '<b>Giá trị doanh nghiệp:</b> EV = Giá trị vốn chủ + Nợ ròng + Lợi ích cổ đông thiểu số + Cổ phiếu ưu đãi<br>' +
       '<b>Nợ ròng</b> = Tổng nợ vay − Tiền và tương đương tiền<br>' +
       '<b>ROE</b> = (LNST/Doanh thu) × (Doanh thu/Tài sản) × (Tài sản/Vốn chủ)',
    2: '<b>Phí bảo lãnh</b> = (Giá chào bán − Số tiền tổ chức phát hành nhận) / Giá chào bán<br>' +
       '<b>Tổng số tiền thu về</b> = Số cổ phiếu × Giá chào bán<br>' +
       '<b>Số tiền ròng tổ chức phát hành nhận</b> = Số cổ phiếu × Giá chào bán × (1 − phí bảo lãnh)<br>' +
       '<b>Cổ phiếu greenshoe</b> ≤ 15% × quy mô đợt phát hành gốc<br>' +
       '<b>Giá trái phiếu:</b> P<sub>0</sub> = Σ C/(1+y)<sup>t</sup> + F/(1+y)<sup>n</sup><br>' +
       '<b>Vốn mạo hiểm:</b> Định giá sau đầu tư = Định giá trước + Vốn góp · Tỷ lệ sở hữu = Vốn góp / Định giá sau',
    3: '<b>Giá chào mua</b> = Giá chưa bị tác động × (1 + phần bù)<br>' +
       '<b>Giá trị vốn chủ phải trả</b> = Giá chào mua × Số cổ phiếu bên bán<br>' +
       '<b>Số cổ phiếu phát hành thêm</b> = Giá trị thanh toán bằng cổ phiếu / Giá cổ phiếu bên mua<br>' +
       '<b>LNST hợp nhất</b> = LNST<sub>bên mua</sub> + LNST<sub>bên bán</sub> + Cộng hưởng sau thuế − Lãi vay mới sau thuế<br>' +
       '<b>EPS hợp nhất</b> = LNST hợp nhất / (Số cổ phiếu bên mua + Số cổ phiếu phát hành thêm)<br>' +
       '<b>Mức tăng/(giảm) EPS</b> = EPS hợp nhất / EPS độc lập − 1',
    4: '<b>Phí quản lý</b> = tỷ lệ phí × Tài sản quản lý (AUM)<br>' +
       '<b>Phần vượt ngưỡng</b> = max(Lợi nhuận gộp − Ngưỡng sinh lời, 0)<br>' +
       '<b>Phí thưởng hiệu quả</b> = tỷ lệ thưởng × Phần vượt ngưỡng<br>' +
       '<b>Lợi nhuận ròng của nhà đầu tư</b> = Lợi nhuận gộp − phí quản lý − phí thưởng<br>' +
       '<b>NAV mỗi đơn vị quỹ</b> = (Tổng tài sản − Tổng nợ phải trả) / Số đơn vị quỹ<br>' +
       '<b>Sharpe</b> = (R<sub>P</sub> − R<sub>f</sub>)/σ<sub>P</sub> · <b>IR</b> = (R<sub>P</sub> − R<sub>B</sub>)/Sai số theo dõi',
    5: '<b>EV ước tính</b> = Bội số EV/EBITDA × EBITDA<br>' +
       '<b>Giá trị vốn chủ</b> = EV − Nợ ròng − Lợi ích cổ đông thiểu số − Cổ phiếu ưu đãi<br>' +
       '<b>Giá trị mỗi cổ phần</b> = Giá trị vốn chủ / Số cổ phiếu pha loãng<br>' +
       '<b>Giá ước tính (P/E)</b> = Bội số P/E × EPS<br>' +
       '<b>Hệ số đòn bẩy</b> = Nợ ròng / EBITDA · <b>Hệ số thanh toán lãi vay</b> = EBIT / Chi phí lãi vay<br>' +
       '<b>WACC</b> = (E/V)·r<sub>e</sub> + (D/V)·r<sub>d</sub>(1 − t)',
    6: '<b>Chênh lệch giá</b> = Giá chào bán − Giá chào mua · <b>Giá giữa</b> = (Chào bán + Chào mua)/2<br>' +
       '<b>Sức mua</b> = Vốn chủ / Tỷ lệ ký quỹ ban đầu<br>' +
       '<b>Vốn chủ trong tài khoản</b> = Giá trị thị trường − Dư nợ vay<br>' +
       '<b>Giá gọi ký quỹ</b> = Giá mua × (1 − Ký quỹ ban đầu) / (1 − Ký quỹ duy trì)<br>' +
       '<b>Đòn bẩy</b> = 1 / Tỷ lệ ký quỹ ban đầu<br>' +
       '<b>Lãi bán khống</b> = Giá bán − Giá mua lại − Phí vay chứng khoán − Cổ tức phải trả lại'
  };
  n.formulas = Object.keys(window.FORMULAS_VI).length;

  /* ---------------- Thẻ ghi nhớ ---------------- */
  var FC_VI = {
    "Investment bank": ["Ngân hàng đầu tư", "Định chế tài chính huy động vốn, tư vấn giao dịch chiến lược và giao dịch/quản lý tài sản — nhưng không nhận tiền gửi của công chúng."],
    "Sell-side vs. buy-side": ["Bên bán và bên mua", "Bên bán (ngân hàng đầu tư) tạo ra và phân phối chứng khoán, tư vấn; bên mua (các quỹ) sử dụng chúng."],
    "Glass-Steagall Act (1933)": ["Đạo luật Glass-Steagall (1933)", "Đạo luật Hoa Kỳ tách bạch ngân hàng thương mại với ngân hàng đầu tư; bị bãi bỏ bởi Gramm-Leach-Bliley năm 1999."],
    "Front / middle / back office": ["Khối kinh doanh / quản trị rủi ro / điều hành", "Bộ phận tạo doanh thu · quản trị rủi ro và tuân thủ · vận hành, thanh toán và công nghệ."],
    "WACC": ["WACC — Chi phí sử dụng vốn bình quân", "(E/V)·r_e + (D/V)·r_d·(1 − t); mức sinh lời yêu cầu dùng để định giá doanh nghiệp."],
    "Enterprise value (EV)": ["Giá trị doanh nghiệp (EV)", "Giá trị vốn chủ + nợ ròng + lợi ích cổ đông thiểu số + cổ phiếu ưu đãi — giá trị hoạt động kinh doanh, độc lập với cơ cấu tài trợ."],
    "Bulge bracket vs. boutique": ["Ngân hàng lớn và công ty tư vấn chuyên biệt", "Ngân hàng toàn diện quy mô lớn có bảng cân đối mạnh, so với công ty chỉ tập trung tư vấn, hầu như không chịu rủi ro vốn."],
    "Chinese wall": ["Vách ngăn thông tin", "Rào chắn thông tin tách bên nội bộ (tư vấn) khỏi bên đại chúng (nghiên cứu và giao dịch)."],
    "Underwriting": ["Bảo lãnh phát hành", "Cam kết mua hoặc phân phối đợt phát hành mới rồi bán lại, chuyển rủi ro phân phối để đổi lấy phí bảo lãnh."],
    "Firm-commitment vs. best-efforts": ["Cam kết chắc chắn và Nỗ lực tối đa", "Ngân hàng mua trọn đợt phát hành và chịu rủi ro bán lại, so với chỉ cam kết cố gắng bán."],
    "Gross spread": ["Phí bảo lãnh phát hành", "Phần chiết khấu bảo lãnh: phí của tổ hợp bảo lãnh tính theo tỷ lệ phần trăm giá chào bán (thường 3–7% với một đợt IPO)."],
    "Greenshoe (over-allotment)": ["Quyền chọn mua vượt mức (greenshoe)", "Quyền bán thêm tối đa 15% số cổ phiếu để bình ổn giá trên thị trường sau niêm yết."],
    "Bookbuilding": ["Dựng sổ lệnh", "Thu thập nhu cầu về giá và khối lượng từ nhà đầu tư trong quá trình chào bán để xác định giá và phân bổ cuối cùng."],
    "IPO underpricing": ["Định giá thấp trong IPO", "Định giá dưới mức thị trường sẵn sàng trả; phần \"tiền để lại trên bàn\" thuộc về nhà đầu tư được phân bổ, không thuộc tổ chức phát hành."],
    "Private equity": ["Đầu tư vốn tư nhân", "Quỹ mua quyền kiểm soát doanh nghiệp trưởng thành, thường dùng đòn bẩy (LBO); cơ chế phí điển hình \"2 và 20\"."],
    "Venture capital": ["Đầu tư vốn mạo hiểm", "Tài trợ theo từng vòng, nắm cổ phần thiểu số ở doanh nghiệp giai đoạn đầu tăng trưởng cao; lợi nhuận dựa vào một số ít thương vụ thành công vượt trội."],
    "Post-money valuation": ["Định giá sau đầu tư", "Định giá trước đầu tư + vốn góp mới. Tỷ lệ sở hữu của nhà đầu tư = vốn góp / định giá sau đầu tư."],
    "Hurdle rate / carried interest": ["Ngưỡng sinh lời / Phí thưởng hiệu quả", "Mức lợi nhuận tối thiểu nhà đầu tư phải nhận trước khi quỹ được chia lãi · phần chia lãi khoảng 20% của quỹ."],
    "Merger vs. acquisition": ["Sáp nhập và Mua lại", "Sáp nhập gộp hai doanh nghiệp thành một; mua lại là việc mua quyền kiểm soát doanh nghiệp mục tiêu."],
    "Control premium": ["Phần bù kiểm soát", "Phần chênh lệch trả thêm so với giá cổ phiếu chưa bị tác động để giành quyền kiểm soát (thường 20–40%)."],
    "Synergies": ["Giá trị cộng hưởng", "Cộng hưởng chi phí (đáng tin cậy, trong tầm kiểm soát của ban điều hành) và cộng hưởng doanh thu (thị trường thường chiết khấu mạnh)."],
    "Accretion / dilution": ["Tăng/giảm EPS", "Thương vụ làm tăng (accretive) hay giảm (dilutive) EPS hợp nhất của bên mua so với khi độc lập."],
    "Poison pill": ["Thuốc độc (poison pill)", "Chiến thuật pha loãng cổ phần của bên thôn tính khi vượt ngưỡng sở hữu, buộc phải thương lượng với hội đồng quản trị."],
    "White knight": ["Hiệp sĩ áo trắng", "Bên mua thân thiện hơn được doanh nghiệp mục tiêu mời tham gia để cạnh tranh với bên thôn tính thù nghịch."],
    "CIM / teaser": ["Bản chào tóm tắt / Bản giới thiệu chi tiết", "Bản giới thiệu chi tiết bảo mật (sau khi ký NDA) · tài liệu một trang ẩn danh dùng để thăm dò quan tâm."],
    "Share vs. asset deal": ["Mua cổ phần và Mua tài sản", "Mua cổ phần: nghĩa vụ nợ chuyển theo doanh nghiệp. Mua tài sản: bên mua chỉ nhận những nghĩa vụ đã thoả thuận rõ."],
    "LBO": ["LBO — Mua lại bằng vốn vay", "Thương vụ tài trợ chủ yếu bằng nợ, được hoàn trả từ dòng tiền của chính doanh nghiệp mục tiêu."],
    "Staple financing": ["Gói tài trợ kèm theo", "Gói tài trợ do ngân hàng bên bán chuẩn bị sẵn và chào cho các bên mua — nhanh gọn nhưng phát sinh xung đột lợi ích."],
    "Assets under management (AUM)": ["Tài sản quản lý (AUM)", "Tổng vốn khách hàng mà công ty quản lý; là cơ sở để tính phí quản lý."],
    "Management fee vs. performance fee": ["Phí quản lý và Phí thưởng hiệu quả", "Phí định kỳ theo tỷ lệ AUM bất kể kết quả, so với phần chia lợi nhuận vượt ngưỡng sinh lời."],
    "High-water mark": ["Mốc giá trị cao nhất", "Đỉnh NAV trước đó; không được thu phí thưởng cho tới khi vượt mốc này, tránh thu phí hai lần sau khi thua lỗ."],
    "NAV per unit": ["NAV mỗi đơn vị quỹ", "(Tổng tài sản − tổng nợ phải trả) / số đơn vị quỹ đang lưu hành."],
    "Mutual fund vs. ETF": ["Quỹ mở và Quỹ ETF", "Đều là quỹ đại chúng; ETF giao dịch trong phiên trên sở giao dịch và thường có mức phí thấp hơn."],
    "Discretionary mandate": ["Uỷ thác toàn quyền", "Quyền giao dịch trong phạm vi mục tiêu và ràng buộc đã thoả thuận mà không cần phê duyệt từng lệnh."],
    "Investment policy statement (IPS)": ["Tuyên bố chính sách đầu tư (IPS)", "Văn bản xác lập mục tiêu, khả năng chấp nhận rủi ro, các ràng buộc và chỉ số tham chiếu."],
    "Comparable companies analysis": ["Phân tích công ty so sánh", "Định giá doanh nghiệp bằng cách áp bội số giao dịch của các công ty niêm yết tương đương lên chỉ tiêu của doanh nghiệp."],
    "EV/EBITDA": ["EV/EBITDA", "Bội số trung lập với cơ cấu vốn — so sánh được giữa các doanh nghiệp có mức đòn bẩy khác nhau."],
    "Equity value bridge": ["Cầu nối sang giá trị vốn chủ", "Giá trị vốn chủ = EV − nợ ròng − lợi ích cổ đông thiểu số − cổ phiếu ưu đãi; chia cho số cổ phiếu pha loãng."],
    "Listing advisory": ["Tư vấn niêm yết", "Chuẩn bị báo cáo tài chính kiểm toán, quản trị công ty, năng lực công bố thông tin, định giá và câu chuyện đầu tư."],
    "Equitization (cổ phần hóa)": ["Cổ phần hoá", "Chuyển doanh nghiệp nhà nước thành công ty cổ phần và bán một phần vốn nhà nước."],
    "Spin-off / carve-out": ["Chia tách / Chào bán công ty con", "Chia cổ phần công ty con cho cổ đông hiện hữu (không thu tiền) so với IPO một phần thiểu số (thu tiền, vẫn giữ quyền kiểm soát)."],
    "Conglomerate discount": ["Chiết khấu tập đoàn", "Tập đoàn đa ngành giao dịch dưới tổng giá trị các bộ phận; khắc phục bằng chia tách hoặc chào bán công ty con (phân tích SOTP)."],
    "Governance discount": ["Chiết khấu quản trị", "Mức định giá thấp hơn áp cho doanh nghiệp có sở hữu tập trung, giao dịch với bên liên quan thiếu minh bạch và hội đồng quản trị yếu."],
    "Agency brokerage": ["Môi giới đại lý", "Thực hiện lệnh của khách hàng với tư cách đại lý để hưởng phí, không chịu rủi ro tự doanh."],
    "Market making": ["Tạo lập thị trường", "Yết giá hai chiều với tư cách nhà đầu tư chính; hưởng chênh lệch giá nhưng chịu rủi ro tồn kho và rủi ro đối tác có thông tin."],
    "Bid-ask spread": ["Chênh lệch giá mua – bán", "Chênh lệch giữa giá chào mua và giá chào bán: biên lợi nhuận của nhà tạo lập và là thước đo trực tiếp của thanh khoản."],
    "Adverse selection": ["Lựa chọn đối nghịch", "Nhà đầu tư có thông tin thường giao dịch ngược chiều với nhà tạo lập ngay trước khi giá biến động."],
    "Proprietary trading": ["Nghiệp vụ tự doanh", "Giao dịch bằng vốn của chính công ty để tìm lợi nhuận từ biến động giá — bị hạn chế bởi Quy tắc Volcker."],
    "Value at Risk (VaR)": ["Giá trị chịu rủi ro (VaR)", "Mức lỗ không bị vượt quá với một độ tin cậy trong một khoảng thời gian; không nói gì về mức độ nghiêm trọng ở phần đuôi."],
    "Initial vs. maintenance margin": ["Ký quỹ ban đầu và Ký quỹ duy trì", "Vốn chủ cần có để mở vị thế sử dụng đòn bẩy, so với mức tối thiểu phải duy trì trước khi bị gọi ký quỹ."],
    "Margin call price": ["Giá gọi ký quỹ", "Giá mua × (1 − ký quỹ ban đầu) / (1 − ký quỹ duy trì)."],
    "Securities lending": ["Cho vay chứng khoán", "Cho vay cổ phiếu có tài sản bảo đảm và thu phí — cơ chế giúp thực hiện bán khống."],
    "Short squeeze": ["Ép mua bù (short squeeze)", "Giá tăng buộc hàng loạt nhà đầu tư bán khống phải mua lại cùng lúc, đẩy giá lên cao hơn nữa."]
  };

  (window.FLASHCARDS || []).forEach(function (c) {
    var t = FC_VI[c.front];
    if (t) { c.frontVi = t[0]; c.backVi = t[1]; n.cards++; }
  });

  /* ---------------- Hình vẽ: tiêu đề và chú thích ---------------- */
  var FIG_VI = {
    "1|1.1": [
      ["Hình 1.1 — Mô hình hoạt động: ngân hàng đầu tư và ngân hàng thương mại",
       "Ngân hàng đầu tư kết nối chủ thể thừa vốn với chủ thể thiếu vốn <b>thông qua thị trường vốn</b>: vốn đến với tổ chức phát hành còn <b>rủi ro đầu tư vẫn thuộc về nhà đầu tư</b>. Ngân hàng thương mại đặt bảng cân đối của mình vào giữa — nhận tiền gửi, cho vay và tự gánh <b>rủi ro tín dụng</b>. Chính khác biệt này giải thích sự khác nhau về nguồn thu, cách huy động vốn và đòn bẩy."],
      ["Hình 1.2 — Sáu đặc điểm nhận dạng",
       "Sáu tiêu chí học phần dùng để phân biệt hai định chế. Đặc biệt lưu ý <b>cách huy động vốn</b>: ngân hàng đầu tư không được nhận tiền gửi công chúng, nên nguồn lớn nhất là <b>đi vay có tài sản bảo đảm</b> (repo, bán và mua lại, cho vay chứng khoán, hợp đồng ký quỹ), nguồn thứ hai là đi vay không bảo đảm (vay ngân hàng, trái phiếu, thương phiếu)."]
    ],
    "1|1.2": [
      ["Hình 1.3 — Dòng thời gian pháp lý Hoa Kỳ định hình ngành",
       "Mỗi đạo luật vẽ lại ranh giới giữa ngân hàng thương mại và ngân hàng đầu tư. <b>Glass-Steagall (1933)</b> buộc các định chế phải lựa chọn — J.P. Morgan &amp; Co. giữ mảng ngân hàng thương mại, nhân sự ra đi lập nên Morgan Stanley. <b>Gramm-Leach-Bliley (1999)</b> đảo ngược điều đó. <b>Dodd-Frank (2010)</b> bổ sung yêu cầu về vốn, thanh khoản và kiểm tra sức chịu đựng sau khủng hoảng 2008."],
      ["Hình 1.4 — Khủng hoảng 2008 và các định chế lớn",
       "Năm ngân hàng đầu tư độc lập của Phố Wall năm 2007 đều không tồn tại nguyên vẹn: hai sụp đổ hoặc được giải cứu, một bị thâu tóm, và hai định chế còn lại chuyển đổi thành <b>công ty mẹ ngân hàng</b> — chấp nhận sự giám sát của Cục Dự trữ Liên bang để đổi lấy khả năng tiếp cận thanh khoản. Mô hình ngân hàng đầu tư độc lập chấm dứt từ đây."]
    ]
  };

  if (window.FIGURES) Object.keys(FIG_VI).forEach(function (key) {
    var list = window.FIGURES[key];
    if (!list) return;
    FIG_VI[key].forEach(function (pair, i) {
      if (list[i]) { list[i].titleVi = pair[0]; list[i].capVi = pair[1]; n.figures++; }
    });
  });

  /* renderFigures phải dùng bản dịch khi đang ở tiếng Việt */
  if (typeof window.renderFigures === "function") {
    window.renderFigures = function (chId, secId) {
      var list = (window.FIGURES || {})[chId + "|" + secId];
      if (!list || !list.length) return "";
      return list.map(function (f) {
        return '<figure class="fig-card"><div class="fig-title">' + window.L(f, "title") +
               '</div><div class="fig-body">' + f.svg +
               '</div><figcaption class="fig-cap">' + window.L(f, "cap") + '</figcaption></figure>';
      }).join("");
    };
  }

  window.DATA_VI_APPLIED = n;
})();
