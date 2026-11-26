/* =====================================================================
   BAF736 — SONG NGỮ CHO HÌNH VẼ & TÌNH HUỐNG NGẮN (rà soát 2026-11)

   Vì sao có tệp này. Rà soát song ngữ tháng 11/2026 cho thấy:
   • Chữ BÊN TRONG hình SVG chỉ có một ngôn ngữ: hình đợt 1 (figures.js) viết
     tiếng Anh, hình đợt 2 (figures2.js) và hình trong tình huống ngắn viết
     tiếng Việt — đổi ngôn ngữ thì tiêu đề đổi theo nhưng chữ trong hình thì không.
   • Bảy hình đợt 2 ghi tiêu đề/chú thích tiếng Việt vào trường tiếng Anh, nên
     chế độ EN hiện tiếng Việt và không có bản Anh nào.
   • 19 tình huống ngắn (cases.js) chỉ có tiếng Việt ở nhãn, bảng số liệu,
     dòng "Nguồn tra cứu" và hình — chế độ EN hiện nguyên tiếng Việt.

   Cách sửa, không đụng vào từng tệp SVG:
   1. Từ điển nhãn hai chiều (EN_VI, VI_EN), dịch đúng nội dung của từng thẻ
      <text>/<tspan> lúc vẽ. Nhãn nhiều dòng được dịch TỪNG DÒNG để giữ bố cục.
      Tên riêng, mã, con số không có trong từ điển thì giữ nguyên.
   2. Hình đợt 2 và tình huống ngắn: đặt bản Anh làm trường gốc, chuyển bản Việt
      sang trường *Vi — đúng quy ước L(obj,"field") của cả học phần.
   3. Vẽ lại renderFigures / renderCases theo ba chế độ en / vi / bi.

   PHẢI nạp SAU figures.js, figures2.js, cases.js, data_vi.js, data_vi_fig.js
   và TRƯỚC app.js.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- 1. Nhãn SVG tiếng Anh → tiếng Việt (hình đợt 1) ---------- */
  var EN_VI = {
    /* Hình 1.1 */
    "INVESTMENT BANK MODEL": "MÔ HÌNH NGÂN HÀNG ĐẦU TƯ", "Surplus units": "Chủ thể thừa vốn", "(investors)": "(nhà đầu tư)",
    /* "BANK" là dòng thứ hai của CẢ ô "INVESTMENT / BANK" lẫn ô "COMMERCIAL / BANK" — dồn mỗi ô thành một dòng */
    "INVESTMENT": "NH ĐẦU TƯ", "BANK": "", "Deficit units": "Chủ thể thiếu vốn", "(issuers)": "(tổ chức phát hành)",
    "capital": "vốn", "securities": "chứng khoán", "Investment risk stays with the investor": "Rủi ro đầu tư do nhà đầu tư gánh",
    "COMMERCIAL BANK MODEL": "MÔ HÌNH NGÂN HÀNG THƯƠNG MẠI", "Depositors": "Người gửi tiền", "(surplus)": "(thừa vốn)",
    "COMMERCIAL": "NH THƯƠNG MẠI", "Borrowers": "Người đi vay", "(deficit)": "(thiếu vốn)", "deposit": "tiền gửi", "loan": "cho vay",
    "Credit risk": "Rủi ro tín dụng", "on the bank": "do ngân hàng gánh",
    /* Hình 1.2 */
    "Business model": "Mô hình kinh doanh", "Capital market intermediary": "Trung gian thị trường vốn", "Balance-sheet intermediary": "Trung gian qua bảng cân đối",
    "Income": "Thu nhập", "Fees + spreads + trading P&L": "Phí + chênh lệch giá + lãi/lỗ giao dịch", "Net interest margin": "Biên lãi ròng",
    "Funding": "Nguồn vốn", "(no public deposits)": "(không nhận tiền gửi công chúng)", "Public deposits": "Tiền gửi của công chúng",
    "ALM orientation": "Định hướng quản lý tài sản – nợ", "Use of funds drives funding": "Sử dụng vốn quyết định huy động", "Funding drives use of funds": "Huy động quyết định sử dụng vốn",
    "Leverage": "Đòn bẩy", "High (liquid, pledgeable assets)": "Cao (tài sản thanh khoản, cầm cố được)", "Low (Basel capital ratios)": "Thấp (tỷ lệ vốn Basel)",
    "Main market": "Thị trường chính", "Capital market": "Thị trường vốn", "Money market": "Thị trường tiền tệ",
    "Criterion": "Tiêu chí", "Investment bank": "Ngân hàng đầu tư", "Commercial bank": "Ngân hàng thương mại",
    /* Hình 1.3 */
    "McFadden Act": "Đạo luật McFadden", "Banks limited to": "Ngân hàng chỉ hoạt động", "their own state": "trong bang của mình",
    "Commercial and": "NH thương mại và", "investment banking": "NH đầu tư", "separated": "bị tách riêng",
    "Repeal: universal": "Bãi bỏ: ngân hàng", "banking returns": "đa năng trở lại", "Capital, liquidity,": "Vốn, thanh khoản,",
    "Volcker Rule,": "Quy tắc Volcker,", "stress tests": "kiểm tra sức chịu đựng",
    "Separation → repeal → re-regulation": "Tách riêng → bãi bỏ → siết lại", "The pendulum of investment-bank regulation": "Con lắc quản lý ngân hàng đầu tư",
    /* Hình 1.4 */
    "BEFORE 2008 — independent": "TRƯỚC 2008 — độc lập", "AFTER 2008": "SAU 2008",
    "Acquired by JPMorgan (Mar 2008)": "JPMorgan mua lại (3/2008)", "Bankrupt (Sep 2008)": "Phá sản (9/2008)",
    "Acquired by Bank of America": "Bank of America mua lại", "→ Bank holding company": "→ Công ty mẹ ngân hàng",
    /* Hình 1.5 */
    "Broker": "Môi giới", "Agent — matches buyers": "Đại lý — kết nối người mua", "and sellers, earns commission": "với người bán, hưởng hoa hồng",
    "Dealer": "Tự doanh", "Principal — trades from": "Chủ thể — giao dịch bằng", "its own account": "tài khoản của chính mình",
    "Market maker": "Tạo lập thị trường", "Quotes two-sided prices,": "Chào giá hai chiều,", "earns the bid-ask spread": "hưởng chênh lệch mua – bán",
    "Trustee": "Nhận uỷ thác", "Executes and manages": "Thực hiện và quản lý", "investments for clients": "khoản đầu tư cho khách hàng",
    "Advisor": "Tư vấn", "Issuance, equitization,": "Phát hành, cổ phần hoá,", "M&amp;A, strategy, JVs": "M&amp;A, chiến lược, liên doanh",
    "Servicer": "Dịch vụ", "Prime brokerage services": "Dịch vụ môi giới chính", "for hedge funds": "cho quỹ phòng hộ",
    "Agency functions earn fees · principal functions earn spreads and bear risk": "Chức năng đại lý thu phí · chức năng chủ thể hưởng chênh lệch và chịu rủi ro",
    /* Hình 1.6 */
    "BROKER — agency": "MÔI GIỚI — đại lý", "Sellers": "Người bán", "BANK (broker)": "NGÂN HÀNG (môi giới)", "Buyers": "Người mua",
    "commission": "hoa hồng", "DEALER / MARKET MAKER — principal": "TỰ DOANH / TẠO LẬP THỊ TRƯỜNG — chủ thể", "BANK (dealer)": "NGÂN HÀNG (tự doanh)",
    "buys at BID": "mua ở giá BID", "sells at ASK": "bán ở giá ASK", "Ask = Bid + spread  →  dealer profit": "Ask = Bid + chênh lệch  →  lợi nhuận tự doanh",
    /* Hình 1.7 */
    "FRONT OFFICE — revenue": "KHỐI KINH DOANH — tạo doanh thu", "Investment banking": "Ngân hàng đầu tư", "(M&amp;A · ECM · DCM)": "(M&amp;A · ECM · DCM)",
    "Sales &amp; trading": "Bán hàng &amp; giao dịch", "Research": "Phân tích", "Asset management": "Quản lý tài sản",
    "MIDDLE OFFICE — control": "KHỐI QUẢN TRỊ RỦI RO — kiểm soát", "Risk management": "Quản trị rủi ro", "Compliance": "Tuân thủ",
    "Treasury": "Nguồn vốn", "Product control": "Kiểm soát sản phẩm", "BACK OFFICE — processing": "KHỐI ĐIỀU HÀNH — xử lý",
    "Operations": "Vận hành", "Settlement &amp; custody": "Thanh toán &amp; lưu ký", "Technology": "Công nghệ", "Finance / HR": "Tài chính / Nhân sự",
    "PRIVATE SIDE (inside info)": "PHÍA NỘI BỘ (thông tin nội bộ)", "Chinese wall": "Vách ngăn thông tin", "PUBLIC SIDE (research/trading)": "PHÍA CÔNG KHAI (phân tích/giao dịch)",
    /* Hình 1.8 */
    "Entities (Vietnam)": "Chủ thể (Việt Nam)", "Partially universal bank": "Ngân hàng đa năng một phần",
    "e.g. commercial banks with a securities arm": "VD: NHTM có công ty chứng khoán con", "Securities company": "Công ty chứng khoán",
    "Fund management company": "Công ty quản lý quỹ", "Securities investment company": "Công ty đầu tư chứng khoán",
    "(not yet established)": "(chưa hình thành)", "Seven core operations": "Bảy nghiệp vụ cốt lõi",
    "Capital-raising support (Ch.2)": "Hỗ trợ huy động vốn (Ch.2)", "M&amp;A support (Ch.3)": "Hỗ trợ M&amp;A (Ch.3)",
    "Asset management (Ch.4)": "Quản lý tài sản (Ch.4)", "Wholesale banking": "Ngân hàng bán buôn",
    "Corporate advisory (Ch.5)": "Tư vấn doanh nghiệp (Ch.5)", "Brokerage (Ch.6)": "Môi giới (Ch.6)",
    /* Hình 1.9 */
    "DOMESTIC &amp; INTERNATIONAL LEGAL FRAMEWORK": "KHUNG PHÁP LÝ TRONG NƯỚC &amp; QUỐC TẾ", "ECONOMIC &amp; SOCIAL CONDITIONS": "ĐIỀU KIỆN KINH TẾ &amp; XÃ HỘI",
    "Law firms": "Công ty luật", "Auditors": "Kiểm toán", "Credit rating": "Xếp hạng tín nhiệm", "Tax advisors": "Tư vấn thuế",
    "Commercial banks": "Ngân hàng thương mại", "Custody &amp; settlement": "Lưu ký &amp; thanh toán", "Research firms": "Công ty phân tích", "Due diligence": "Thẩm định",
    /* Hình 2.1 */
    "Firm commitment": "Cam kết chắc chắn", "Bank buys the entire issue": "Ngân hàng mua toàn bộ đợt phát hành", "BANK bears risk": "NGÂN HÀNG chịu rủi ro",
    "Best efforts": "Nỗ lực tối đa", "Bank only agrees to try": "Ngân hàng chỉ cam kết cố gắng bán", "ISSUER bears risk": "TỔ CHỨC PHÁT HÀNH chịu rủi ro",
    "Bought deal": "Mua trọn lô", "Bank buys the block instantly": "Ngân hàng mua ngay cả lô", "BANK — highest risk": "NGÂN HÀNG — rủi ro cao nhất",
    "Standby": "Bảo lãnh dự phòng", "Bank buys the unsubscribed rest": "Ngân hàng mua phần không ai đăng ký", "BANK — residual": "NGÂN HÀNG — phần còn lại",
    "Placement risk transfers at the underwriting agreement": "Rủi ro phân phối chuyển giao khi ký hợp đồng bảo lãnh",
    "Gross spread = (Offer price − Proceeds to issuer) / Offer price": "Chênh lệch gộp = (Giá chào bán − Tiền về tổ chức phát hành) / Giá chào bán",
    /* Hình 2.2 */
    "Mandate": "Nhận uỷ nhiệm", "/ bake-off": "/ thi tuyển", "&amp; structuring": "&amp; cấu trúc", "Registration": "Đăng ký",
    "(prospectus)": "(bản cáo bạch)", "Valuation": "Định giá", "&amp; price range": "&amp; khoảng giá", "Roadshow": "Tiếp thị (roadshow)",
    "Bookbuilding": "Dựng sổ lệnh", "Pricing": "Định giá chốt", "&amp; allocation": "&amp; phân bổ", "Stabilisation": "Bình ổn giá", "(greenshoe)": "(quyền chọn vượt mức)",
    "Risk passes to the underwriter at pricing (firm commitment)": "Rủi ro chuyển sang tổ chức bảo lãnh khi chốt giá (cam kết chắc chắn)",
    "Greenshoe ≤ 15% of the base deal size": "Quyền chọn vượt mức ≤ 15% quy mô đợt cơ sở",
    /* Hình 2.3 */
    "Base deal 10m × $20": "Đợt cơ sở 10 tr. × $20", "+ greenshoe 1.5m": "+ vượt mức 1,5 tr.", "Gross proceeds": "Tổng tiền thu",
    "− spread 6%": "− chênh lệch 6%", "Net to issuer": "Ròng cho tổ chức phát hành", "Offering economics ($m)": "Kinh tế của đợt chào bán (triệu $)",
    "Net proceeds = Shares × Offer price × (1 − gross spread)": "Tiền thu ròng = Số cổ phần × Giá chào bán × (1 − chênh lệch gộp)",
    /* Hình 2.4 */
    "LIMITED PARTNERS (LPs)": "THÀNH VIÊN GÓP VỐN (LP)", "Pension funds, insurers,": "Quỹ hưu trí, công ty bảo hiểm,",
    "endowments, sovereign funds": "quỹ tài trợ, quỹ đầu tư quốc gia", "THE FUND": "QUỸ", "(partnership)": "(hợp danh)",
    "GENERAL PARTNER (GP)": "THÀNH VIÊN QUẢN LÝ (GP)", "Sources, executes and": "Tìm kiếm, thực hiện và", "manages the investments": "quản lý các khoản đầu tư",
    "commit": "cam kết góp", "returns": "lợi nhuận", "manage": "quản lý", "Profit waterfall": "Thứ tự phân chia lợi nhuận",
    "1. Return of capital": "1. Hoàn vốn", "100% to LPs": "100% cho LP", "2. Preferred return (hurdle ~8%)": "2. Lợi nhuận ưu tiên (ngưỡng ~8%)",
    "3. Catch-up": "3. Bắt kịp (catch-up)", "mostly to GP": "phần lớn cho GP", "4. Split above the hurdle": "4. Chia phần vượt ngưỡng", "80% LP / 20% GP": "80% LP / 20% GP",
    /* Hình 3.1 */
    "HORIZONTAL": "THEO CHIỀU NGANG", "Firm A": "Công ty A", "Firm B": "Công ty B", "same industry, same stage": "cùng ngành, cùng công đoạn",
    "→ scale, market share": "→ quy mô, thị phần", "VERTICAL": "THEO CHIỀU DỌC", "Supplier": "Nhà cung cấp", "Firm": "Công ty", "Customer": "Khách hàng",
    "→ supply security, margin capture": "→ chủ động nguồn cung, giữ biên lợi nhuận", "CONGLOMERATE": "TẬP ĐOÀN ĐA NGÀNH", "Steel": "Thép", "Media": "Truyền thông",
    "unrelated businesses": "ngành không liên quan", "→ diversification (often discounted)": "→ đa dạng hoá (thường bị định giá chiết khấu)",
    "Structure separately: share purchase vs. asset purchase": "Cấu trúc riêng: mua cổ phần hay mua tài sản",
    /* Hình 3.2 */
    "Preparation": "Chuẩn bị", "Financials, model, valuation expectations": "Báo cáo tài chính, mô hình, kỳ vọng định giá", "Teaser": "Bản giới thiệu ngắn",
    "One page, anonymous": "Một trang, ẩn danh", "NDA → CIM": "NDA → CIM", "Detailed memorandum": "Bản thông tin chi tiết", "Round 1": "Vòng 1",
    "Non-binding indications (IOI)": "Chào giá không ràng buộc (IOI)", "Round 2": "Vòng 2", "Management meetings + data room": "Gặp ban điều hành + phòng dữ liệu",
    "Final bids": "Chào giá cuối", "Binding + mark-up of the agreement": "Ràng buộc + sửa dự thảo hợp đồng", "Sign → Close": "Ký → Hoàn tất",
    "Approvals, then closing": "Phê duyệt, rồi hoàn tất", "Broad auction": "Đấu giá rộng", "+ maximum price discovery": "+ khám phá giá tối đa",
    "− leak &amp; disruption risk": "− rủi ro rò rỉ &amp; xáo trộn", "Targeted process": "Quy trình chọn lọc", "+ confidentiality, speed": "+ bảo mật, nhanh",
    "− less competitive tension": "− ít sức ép cạnh tranh", "Sell-side auction timeline": "Tiến trình đấu giá phía bán",
    /* Hình 3.3 */
    "Pro forma EPS bridge ($m unless stated)": "Cầu nối EPS dự phóng (triệu $ trừ khi ghi khác)", "Acquirer NI": "LNST bên mua", "+ Target NI": "+ LNST mục tiêu",
    "+ Synergies": "+ Cộng hưởng", "− New interest": "− Lãi vay mới", "= Pro forma NI": "= LNST dự phóng", "÷ 125m shares → EPS $4.20": "÷ 125 tr. cổ phần → EPS $4,20",
    "Standalone EPS": "EPS độc lập", "Pro forma EPS": "EPS dự phóng", "$4.20  →  +5.0% ACCRETIVE": "$4,20  →  TĂNG 5,0% (accretive)",
    "Acquirer P/E 15.0× vs P/E paid 16.7×": "P/E bên mua 15,0× so với P/E trả 16,7×", "stock leg dilutive · debt + synergies rescue it": "phần cổ phiếu gây pha loãng · nợ + cộng hưởng bù lại",
    /* Hình 3.4 */
    "CONSIDERATION": "HÌNH THỨC THANH TOÁN", "Cash": "Tiền mặt", "Certain value, no dilution;": "Giá trị chắc chắn, không pha loãng;",
    "taxable to seller, uses capacity": "bên bán chịu thuế, tốn năng lực tài chính", "Stock": "Cổ phiếu", "No cash outlay, shares risk;": "Không tốn tiền mặt, chia sẻ rủi ro;",
    "dilutes, signals overvaluation": "pha loãng, phát tín hiệu cổ phiếu đắt", "Mix / earn-out": "Kết hợp / trả theo kết quả", "Bridges valuation gaps;": "Thu hẹp khác biệt định giá;",
    "complex, dispute-prone": "phức tạp, dễ tranh chấp", "FINANCING TOOLKIT": "CÔNG CỤ TÀI TRỢ", "Bridge loan (certainty at signing)": "Khoản vay bắc cầu (chắc chắn khi ký)",
    "Term loans A / B (senior secured)": "Khoản vay kỳ hạn A / B (ưu tiên, có bảo đảm)", "High-yield bonds (cov-lite, longer)": "Trái phiếu lợi suất cao (ít ràng buộc, dài hơn)",
    "Mezzanine / PIK (subordinated)": "Mezzanine / PIK (thứ cấp)", "New equity / sponsor equity": "Vốn cổ phần mới / vốn của quỹ",
    /* Hình 3.5 */
    "PREVENTIVE (before a bid)": "PHÒNG NGỪA (trước khi bị chào mua)", "Poison pill": "Viên thuốc độc", "Dilutes a bidder crossing a threshold": "Pha loãng bên mua vượt ngưỡng sở hữu",
    "Staggered board": "HĐQT nhiệm kỳ so le", "Control needs two annual meetings": "Cần hai kỳ ĐHĐCĐ mới nắm quyền", "Golden parachute": "Chiếc dù vàng",
    "Raises the cost of change of control": "Tăng chi phí thay đổi quyền kiểm soát", "Supermajority clause": "Điều khoản siêu đa số",
    "High approval threshold in the charter": "Ngưỡng biểu quyết cao trong điều lệ", "REACTIVE (after a bid)": "ĐỐI PHÓ (sau khi bị chào mua)",
    "White knight": "Hiệp sĩ trắng", "Invite a friendlier acquirer to outbid": "Mời bên mua thân thiện trả giá cao hơn", "Crown jewel": "Bán tài sản quý",
    "Sell the asset the bidder wants most": "Bán tài sản bên mua thèm muốn nhất", "Pac-Man": "Pac-Man (phản công)", "Turn around and bid for the raider": "Quay lại chào mua chính bên thâu tóm",
    "Greenmail / litigation": "Mua lại cổ phần / kiện tụng", "Buy the stake back; or sue to delay": "Mua lại phần sở hữu; hoặc kiện để trì hoãn",
    /* Hình 4.1 */
    "Institutional": "Tổ chức", "Pension funds, insurers, sovereign funds": "Quỹ hưu trí, bảo hiểm, quỹ đầu tư quốc gia", "Segregated mandate": "Uỷ thác tách biệt",
    "Retail funds": "Quỹ bán lẻ", "The investing public": "Công chúng đầu tư", "Mutual funds, ETFs": "Quỹ mở, ETF", "Private wealth": "Quản lý tài sản cá nhân",
    "High-net-worth individuals": "Cá nhân có tài sản lớn", "Advisory / discretionary": "Tư vấn / uỷ thác toàn quyền", "Alternatives": "Đầu tư thay thế",
    "Sophisticated investors": "Nhà đầu tư chuyên nghiệp", "Hedge funds, PE funds": "Quỹ phòng hộ, quỹ PE", "1–2% + carry": "1–2% + phí thưởng",
    "Segment": "Phân khúc", "Client": "Khách hàng", "Vehicle": "Hình thức", "Typical fee": "Mức phí điển hình",
    "Recurring, AUM-linked revenue is what stabilises a universal bank's earnings": "Doanh thu định kỳ theo tài sản quản lý giúp ổn định lợi nhuận ngân hàng đa năng",
    /* Hình 4.2 */
    "Raise capital": "Huy động vốn", "Invest to": "Đầu tư theo", "the mandate": "chính sách quỹ", "Value &amp; strike": "Định giá &amp; chốt",
    "NAV daily": "NAV hằng ngày", "Subscriptions": "Mua chứng chỉ quỹ", "&amp; redemptions": "&amp; bán lại", "Report to": "Báo cáo cho", "investors": "nhà đầu tư",
    "The fund management cycle": "Chu trình quản lý quỹ", "NAV per unit = (Total assets − Total liabilities) ÷ Units outstanding": "NAV/đơn vị = (Tổng tài sản − Tổng nợ) ÷ Số đơn vị quỹ đang lưu hành",
    "Gross return 15% splits as…": "Lợi nhuận gộp 15% chia thành…", "Management fee 2%": "Phí quản lý 2%", "Carry 20% × (15%−8%)": "Phí thưởng 20% × (15%−8%)",
    "Investor net return": "Lợi nhuận ròng của nhà đầu tư", "Hurdle 8% must be cleared before any carry is earned": "Phải vượt ngưỡng 8% mới được hưởng phí thưởng",
    /* Hình 4.3 (quản lý tài sản cá nhân) */
    "1. Profile the client": "1. Tìm hiểu khách hàng", "Assets, liabilities, goals,": "Tài sản, nợ, mục tiêu,", "risk tolerance &amp; capacity": "khẩu vị &amp; năng lực chịu rủi ro",
    "2. Draft the IPS": "2. Soạn chính sách đầu tư (IPS)", "Objectives, constraints,": "Mục tiêu, ràng buộc,", "benchmark, review cycle": "chỉ số tham chiếu, chu kỳ rà soát",
    "3. Allocate &amp; implement": "3. Phân bổ &amp; triển khai", "Strategic allocation,": "Phân bổ chiến lược,", "then security selection": "rồi chọn chứng khoán",
    "4. Review &amp; rebalance": "4. Rà soát &amp; tái cân bằng", "Performance vs goals,": "Kết quả so với mục tiêu,", "life events, drift": "biến cố cuộc sống, độ lệch",
    "continuous cycle — the IPS is revisited at every review": "chu trình liên tục — IPS được xem lại ở mỗi lần rà soát", "Goals-based advice, not product selling": "Tư vấn theo mục tiêu, không phải bán sản phẩm",
    "Suitability + disclosure = the sector's key legal duty": "Phù hợp + công bố thông tin = nghĩa vụ pháp lý cốt lõi của ngành",
    /* Hình 5.1 */
    "Listing readiness": "Sẵn sàng niêm yết", "Financial": "Tài chính", "Audited accounts, clean history, forecasting": "Báo cáo kiểm toán, lịch sử minh bạch, dự báo",
    "Legal &amp; structural": "Pháp lý &amp; cấu trúc", "Clear ownership, related-party clean-up": "Sở hữu rõ ràng, xử lý giao dịch bên liên quan", "Governance": "Quản trị",
    "Independent board, audit committee, controls": "HĐQT độc lập, uỷ ban kiểm toán, kiểm soát nội bộ", "Disclosure": "Công bố thông tin",
    "Prospectus, risk factors, ongoing reporting": "Bản cáo bạch, yếu tố rủi ro, báo cáo định kỳ", "EV → equity bridge": "Cầu nối EV → vốn chủ sở hữu",
    "− Net debt": "− Nợ ròng", "− Minorities / preferred": "− Cổ đông thiểu số / cổ phần ưu đãi", "= Equity value": "= Giá trị vốn chủ sở hữu",
    "÷ 50m diluted shares": "÷ 50 tr. cổ phần pha loãng", "= $17.60 / share": "= $17,60 / cổ phần",
    /* Hình 5.2 */
    "Limited liability co.": "Công ty TNHH", "or SOE": "hoặc DNNN", "convert": "chuyển đổi", "Joint-stock company": "Công ty cổ phần", "(JSC)": "(CTCP)", "offer": "chào bán",
    "Public offering": "Chào bán ra công chúng", "&amp; listing": "&amp; niêm yết", "Why convert: only a JSC can issue transferable shares to the public": "Vì sao chuyển đổi: chỉ công ty cổ phần mới phát hành cổ phần chuyển nhượng được ra công chúng",
    "Equitization steps for a state-owned enterprise": "Các bước cổ phần hoá doanh nghiệp nhà nước", "Establish the": "Thành lập", "steering committee": "ban chỉ đạo",
    "Inventory assets": "Kiểm kê tài sản", "&amp; settle finances": "&amp; xử lý tài chính", "Enterprise": "Xác định giá trị", "valuation": "doanh nghiệp",
    "Approve the": "Phê duyệt", "equitization plan": "phương án cổ phần hoá", "Sell shares": "Bán cổ phần", "(IPO / strategic)": "(IPO / chiến lược)",
    "Register the": "Đăng ký", "joint-stock co.": "công ty cổ phần",
    /* Hình 5.3 */
    "Debt / total capital  →": "Nợ / tổng vốn  →", "Cost of capital": "Chi phí vốn", "Cost of equity": "Chi phí vốn chủ sở hữu", "After-tax cost of debt": "Chi phí nợ sau thuế",
    "optimal structure": "cơ cấu tối ưu", "Tax shield dominates": "Lá chắn thuế chiếm ưu thế", "→ WACC falls": "→ WACC giảm", "Distress costs dominate": "Chi phí kiệt quệ chiếm ưu thế", "→ WACC rises": "→ WACC tăng",
    /* Hình 6.1 */
    "Client → broker → exchange": "Khách hàng → môi giới → sở giao dịch", "Investor": "Nhà đầu tư", "Exchange": "Sở giao dịch", "Matching:": "Khớp lệnh:", "price → time": "giá → thời gian",
    "Limit order — executes at the stated price or better": "Lệnh giới hạn — khớp ở giá đã đặt hoặc tốt hơn",
    "Market order — executes at the best available price": "Lệnh thị trường — khớp ở giá tốt nhất hiện có",
    "At-the-open — participates in the opening call auction": "Lệnh ATO — tham gia phiên khớp lệnh định kỳ mở cửa",
    "At-the-close — participates in the closing call auction": "Lệnh ATC — tham gia phiên khớp lệnh định kỳ đóng cửa",
    "Price priority first, then time priority — the core of continuous order matching": "Ưu tiên giá trước, rồi ưu tiên thời gian — cốt lõi của khớp lệnh liên tục",
    /* Hình 6.2 */
    "Balanced book": "Trạng thái cân bằng", "spread = 10¢ → dealer profit per round-trip": "chênh lệch = 10¢ → lợi nhuận mỗi vòng mua – bán",
    "Long inventory builds → skew both quotes down": "Hàng tồn tăng → hạ cả hai mức giá chào", "quotes shift down to discourage sellers and attract buyers": "giá chào hạ xuống để bớt người bán và thu hút người mua",
    "Risks paid for: inventory · adverse selection · processing": "Rủi ro được bù đắp: hàng tồn · lựa chọn bất lợi · xử lý giao dịch",
    /* Hình 6.3 */
    "Account at purchase — $50 × 1,000 shares": "Tài khoản lúc mua — $50 × 1.000 cổ phần", "Equity $25,000 (50%)": "Vốn tự có $25.000 (50%)", "Loan $25,000 (50%)": "Vay $25.000 (50%)",
    "Buying power = Equity ÷ Initial margin = 2× leverage": "Sức mua = Vốn tự có ÷ Tỷ lệ ký quỹ ban đầu = đòn bẩy 2×", "purchase": "lúc mua",
    "call @30% maint.": "gọi ký quỹ @30% duy trì", "call @25% maint.": "gọi ký quỹ @25% duy trì", "equity wiped": "mất hết vốn", "margin call line": "ngưỡng gọi ký quỹ",
    /* Hình 6.4 */
    "LENDER": "BÊN CHO VAY", "(fund / custodian)": "(quỹ / tổ chức lưu ký)", "SHORT SELLER": "NGƯỜI BÁN KHỐNG", "(borrower)": "(bên vay)", "MARKET": "THỊ TRƯỜNG", "(buyers)": "(người mua)",
    "① lends stock": "① cho vay cổ phiếu", "collateral + fee": "tài sản bảo đảm + phí", "② sells at $100": "② bán ở $100", "cash proceeds": "tiền bán", "③ buys back at $80": "③ mua lại ở $80", "④ returns stock": "④ trả cổ phiếu",
    "Profit = 100 − 80 − borrow fee − dividends = gain if the price falls": "Lãi = 100 − 80 − phí vay − cổ tức = có lãi nếu giá giảm",
    "Loss is unlimited if the price rises · recall and squeeze risk": "Lỗ không giới hạn nếu giá tăng · rủi ro bị đòi lại và bị siết"
  };

  /* ---------- 2. Nhãn SVG tiếng Việt → tiếng Anh (hình đợt 2 + hình trong tình huống ngắn) ---------- */
  var VI_EN = {
    /* Hình 3.2 [1] — các bên trong thương vụ M&A */
    "PHÍA BÊN BÁN (sell-side)": "SELL SIDE", "PHÍA BÊN MUA (buy-side)": "BUY SIDE",
    "① Chuẩn bị hồ sơ chào bán": "① Prepare the sale materials", "Teaser · Bản giới thiệu · Phòng dữ liệu ảo": "Teaser · Information memorandum · Virtual data room",
    "① Sàng lọc mục tiêu": "① Screen targets", "Tiêu chí chiến lược · năng lực tài chính": "Strategic criteria · financial capacity",
    "② Tiếp cận nhà đầu tư tiềm năng": "② Approach potential buyers", "Ký thoả thuận bảo mật (NDA)": "Sign a non-disclosure agreement (NDA)",
    "② Chào giá sơ bộ không ràng buộc": "② Non-binding indicative offer", "Định giá dựa trên thông tin công khai": "Valuation on public information",
    "③ Quản lý đấu giá": "③ Run the auction", "Tạo sức ép cạnh tranh giữa các bên mua": "Create competitive tension among buyers",
    "③ Thẩm định chi tiết (due diligence)": "③ Detailed due diligence", "Tài chính · pháp lý · thuế · thương mại": "Financial · legal · tax · commercial",
    "④ Đàm phán hợp đồng · Xin chấp thuận cơ quan quản lý · Hoàn tất": "④ Negotiate the agreement · Obtain regulatory approval · Close",
    "Giá chỉ là một biến số — điều khoản bảo đảm, điều kiện tiên quyết và khoản phí phá vỡ quyết định phần còn lại": "Price is only one variable — warranties, conditions precedent and the break fee decide the rest",
    /* Hình 2.3 — phát hành trái phiếu doanh nghiệp */
    "① Chuẩn bị": "① Prepare", "Kiểm tra sức khoẻ": "Check financial health", "tài chính, dòng tiền": "and cash flow", "② Xếp hạng": "② Rating",
    "Tổ chức xếp hạng": "An independent agency", "độc lập chấm điểm": "assigns the rating", "③ Cấu trúc": "③ Structure", "Kỳ hạn, coupon,": "Tenor, coupon,",
    "tài sản bảo đảm": "collateral", "④ Chào bán": "④ Offer", "Ra công chúng hoặc": "Public or", "riêng lẻ": "private placement", "⑤ Niêm yết": "⑤ Listing", "& thanh toán": "& settlement",
    "BỐN ĐIỀU KHOẢN QUYẾT ĐỊNH RỦI RO CỦA TRÁI CHỦ": "FOUR TERMS THAT DECIDE THE BONDHOLDER'S RISK", "Kỳ hạn & lịch trả gốc": "Tenor & amortisation",
    "Trả một lần cuối kỳ": "Bullet repayment at maturity", "= rủi ro tái cấp vốn cao": "= high refinancing risk", "Tài sản bảo đảm": "Collateral",
    "Có bảo đảm = thứ tự ưu": "Secured = higher priority", "tiên cao khi vỡ nợ": "in default", "Điều khoản ràng buộc": "Covenants",
    "Trần nợ, hạn chế cổ tức,": "Debt cap, dividend limits,", "duy trì hệ số tài chính": "financial-ratio maintenance", "Mục đích sử dụng vốn": "Use of proceeds",
    "Phong toả/giải ngân theo": "Escrow / staged", "tiến độ = chống lạm dụng": "drawdown = prevents misuse",
    "Thiếu xếp hạng độc lập → thị trường không phân biệt được tổ chức phát hành mạnh và yếu": "Without independent ratings → the market cannot tell strong issuers from weak ones",
    "→ mọi bên trả lãi suất gần như nhau khi thuận lợi, và không ai phát hành được khi niềm tin đổ vỡ": "→ everyone pays similar rates in good times, and nobody can issue once confidence breaks",
    /* Hình 3.4 — ba nguồn tài trợ M&A */
    "TIỀN MẶT SẴN CÓ": "CASH ON HAND", "Nhanh nhất, ít điều kiện": "Fastest, fewest conditions", "Không pha loãng cổ đông": "No shareholder dilution",
    "Không tăng đòn bẩy": "No added leverage", "NHƯNG:": "BUT:", "Mất đệm thanh khoản": "Loses the liquidity cushion", "Chi phí cơ hội của tiền": "Opportunity cost of cash",
    "VAY NỢ": "DEBT", "Lá chắn thuế từ lãi vay": "Interest tax shield", "Không pha loãng sở hữu": "No ownership dilution", "Kỷ luật dòng tiền": "Cash-flow discipline",
    "Hệ số nợ tăng, có thể bị": "Leverage rises; rating", "hạ xếp hạng tín nhiệm": "may be downgraded", "PHÁT HÀNH CỔ PHIẾU": "ISSUE SHARES",
    "Không tăng nghĩa vụ nợ": "No added debt obligation", "Chia sẻ rủi ro với bên bán": "Shares risk with the seller", "Phù hợp thương vụ lớn": "Suits large deals",
    "PHA LOÃNG cổ đông hiện hữu": "DILUTES existing shareholders", "Phát tín hiệu: cổ phiếu đắt?": "Signal: are the shares overvalued?",
    "CÂU HỎI KIỂM TRA: sau thương vụ, hệ số Nợ/EBITDA và EPS thay đổi thế nào?": "CHECK QUESTION: after the deal, how do Debt/EBITDA and EPS change?",
    "Thương vụ làm TĂNG EPS (accretive) chưa chắc tạo giá trị — nếu trả giá quá cao vẫn phá huỷ giá trị": "An ACCRETIVE deal does not necessarily create value — overpaying still destroys value",
    "Thực tế: phần lớn thương vụ lớn dùng cơ cấu KẾT HỢP để cân bằng ba ràng buộc trên": "In practice most large deals use a MIX to balance the three constraints",
    /* Hình 4.3 — quy trình quản lý danh mục */
    "① Chính sách đầu tư (IPS)": "① Investment policy (IPS)", "mục tiêu · rủi ro chấp nhận · ràng buộc": "objectives · risk tolerance · constraints",
    "② Phân bổ tài sản": "② Asset allocation", "cổ phiếu / trái phiếu / tiền": "equities / bonds / cash", "③ Chọn chứng khoán": "③ Security selection",
    "chủ động hoặc mô phỏng chỉ số": "active or index replication", "④ Thực thi giao dịch": "④ Trade execution", "chi phí giao dịch, trượt giá": "transaction costs, slippage",
    "⑤ Đo lường hiệu quả": "⑤ Performance measurement", "so với chỉ số tham chiếu": "against the benchmark", "PHÍ ĂN VÀO ĐÂY": "WHERE FEES BITE",
    "Phí quản lý (theo tài sản) mỗi năm": "Annual management fee (on assets)", "+ chi phí giao dịch ở bước ④": "+ transaction costs at step ④",
    /* Hình 5.3 [2] — thang tái cơ cấu */
    "① TÁI CƠ CẤU HOẠT ĐỘNG — chưa đụng tới cấu trúc vốn": "① OPERATIONAL RESTRUCTURING — capital structure untouched",
    "Cắt chi phí · bán tài sản không cốt lõi · cải thiện vốn lưu động · đàm phán lại hợp đồng": "Cut costs · sell non-core assets · improve working capital · renegotiate contracts",
    "② ĐÀM PHÁN LẠI NỢ NGOÀI TOÀ (thoả thuận tự nguyện)": "② OUT-OF-COURT DEBT RENEGOTIATION (voluntary workout)",
    "Giãn kỳ hạn · giảm lãi · hoán đổi nợ thành cổ phần · cần SỰ ĐỒNG THUẬN của chủ nợ": "Extend maturities · cut interest · debt-for-equity swap · needs creditor CONSENT",
    "③ TÁI CƠ CẤU ĐÃ THOẢ THUẬN TRƯỚC, ĐƯA RA TOÀ CÔNG NHẬN": "③ PRE-AGREED RESTRUCTURING, CONFIRMED BY THE COURT",
    "Chốt phương án với các bên rồi mới nộp đơn — nhanh, kiểm soát được (GM 2009: ~40 ngày)": "Agree the plan first, then file — fast and controlled (GM 2009: ~40 days)",
    "④ PHÁ SẢN CÓ TÁI TỔ CHỨC (thủ tục toà án đầy đủ)": "④ BANKRUPTCY WITH REORGANISATION (full court procedure)",
    "Toà giám sát toàn bộ · chi phí cao · kéo dài · doanh nghiệp mất khách hàng và nhân sự giỏi": "Full court supervision · costly · lengthy · the firm loses customers and key staff",
    "⑤ THANH LÝ — chấm dứt hoạt động, bán tài sản trả nợ theo thứ tự ưu tiên": "⑤ LIQUIDATION — cease operations, sell assets and pay creditors in order of priority",
    "Giá trị thu hồi thấp nhất; cổ đông thường mất trắng": "Lowest recovery; shareholders usually lose everything",
    "Giá trị doanh nghiệp GIẢM DẦN khi đi xuống thang — và mỗi tháng chậm trễ đẩy doanh nghiệp xuống một nấc": "Enterprise value FALLS down the ladder — and every month of delay pushes the firm one rung lower",
    /* Hình 5.5 — tái cơ cấu quản trị */
    "CỔ ĐÔNG (chủ sở hữu)": "SHAREHOLDERS (owners)", "muốn tối đa hoá giá trị dài hạn": "want to maximise long-term value", "uỷ quyền": "delegate",
    "HỘI ĐỒNG QUẢN TRỊ": "BOARD OF DIRECTORS", "giám sát thay mặt cổ đông": "oversees on shareholders' behalf", "bổ nhiệm & giám sát": "appoints & monitors",
    "BAN ĐIỀU HÀNH": "MANAGEMENT", "có thể ưu tiên lợi ích ngắn hạn của mình": "may favour its own short-term interests", "CHỐT KIỂM SOÁT": "CONTROL MECHANISMS",
    "• Thành viên HĐQT độc lập": "• Independent directors", "• Uỷ ban kiểm toán độc lập": "• Independent audit committee", "• Thù lao gắn kết quả dài hạn": "• Pay tied to long-term results",
    "• Công bố thông tin đầy đủ": "• Full disclosure", "• Kiểm toán độc lập": "• Independent audit", "• Quyền biểu quyết của cổ đông": "• Shareholder voting rights",
    "• Thị trường kiểm soát công ty": "• Market for corporate control", "DẤU HIỆU LỆCH LỢI ÍCH": "WARNING SIGNS OF MISALIGNMENT",
    "• Chủ tịch kiêm tổng giám đốc": "• Chair is also the CEO", "• HĐQT thiếu thành viên độc lập": "• Board lacks independent members", "• Giao dịch với bên liên quan": "• Related-party transactions",
    "• Cổ phiếu hai hạng quyền biểu quyết": "• Dual-class voting shares", "• Thù lao không gắn hiệu quả": "• Pay not linked to performance",
    "• Kiểm toán bị thay đổi bất thường": "• Unusual change of auditor", "• Công bố thông tin chậm/thiếu": "• Late or incomplete disclosure",
    "Vai trò của bên tư vấn: thiết kế lại các chốt kiểm soát TRƯỚC khi lên sàn hoặc gọi vốn lớn": "The adviser's role: redesign the controls BEFORE listing or a major capital raise",
    "— nhà đầu tư tổ chức định giá thấp doanh nghiệp có quản trị yếu, dù kết quả kinh doanh tốt": "— institutional investors discount weakly governed firms, even when results are good",
    /* Hình 6.3 [1] — ba lằn ranh phòng thủ */
    "LẰN RANH 1": "LINE 1", "Khối kinh doanh (front office)": "Front office", "Nhân viên giao dịch mở vị thế": "Traders open positions",
    "Chịu trách nhiệm trong hạn mức": "Accountable within limits", "Tự theo dõi lãi/lỗ hằng ngày": "Track their own daily P&L", "RỦI RO: chính người tạo": "RISK: the risk-taker",
    "rủi ro lại tự báo cáo rủi ro": "reports their own risk", "LẰN RANH 2": "LINE 2", "Quản trị rủi ro (middle office)": "Risk management (middle office)",
    "Định giá ĐỘC LẬP vị thế": "INDEPENDENT position valuation", "Đối chiếu với đối tác": "Reconcile with counterparties", "Giám sát hạn mức, VaR": "Monitor limits, VaR",
    "Xác nhận giao dịch": "Confirm trades", "Phải KHÔNG báo cáo cho": "Must NOT report to", "trưởng bộ phận kinh doanh": "the head of trading", "LẰN RANH 3": "LINE 3",
    "Kiểm toán nội bộ": "Internal audit", "Kiểm tra định kỳ, độc lập": "Periodic, independent review", "Báo cáo thẳng Uỷ ban kiểm toán": "Reports directly to the audit committee",
    "Kiểm tra CHÍNH các chốt": "Tests the controls", "kiểm soát ở lằn ranh 2": "of line 2 THEMSELVES", "Nghỉ phép liên tục bắt buộc": "Mandatory consecutive leave",
    "= chốt kiểm soát đơn giản nhất": "= the simplest control",
    "Société Générale 2008: nhân viên từng làm ở bộ phận kiểm soát (middle office) → biết cách né đối chiếu → lỗ ≈ 4,9 tỷ EUR": "Société Générale 2008: a former middle-office employee → knew how to evade reconciliation → loss ≈ €4.9bn",
    "Bài học: trạng thái RÒNG trông nhỏ không có nghĩa rủi ro nhỏ — phải xem cả quy mô GỘP của vị thế": "Lesson: a small NET position does not mean small risk — look at the GROSS size too",
    /* Tình huống c1-2008 — vòng xoáy thanh khoản */
    "Tài sản dài hạn": "Long-term assets", "Chứng khoán thế chấp (MBS/CDO)": "Mortgage securities (MBS/CDO)", "kém thanh khoản": "illiquid",
    "Vốn repo qua đêm": "Overnight repo funding", "phải gia hạn HÀNG NGÀY": "must be rolled over DAILY", "đòn bẩy ~30:1": "leverage ~30:1",
    "Đối tác ngừng gia hạn": "Counterparties stop rolling", "nghi ngờ chất lượng tài sản": "doubts about asset quality", "(tháng 9/2008)": "(September 2008)",
    "Mất": "Liquidity", "thanh khoản": "lost",
    "KHÔNG có tiền gửi  ·  KHÔNG được vay cửa sổ chiết khấu Fed  →  không có nguồn dự phòng": "NO deposits  ·  NO access to the Fed discount window  →  no backstop",
    "Lối thoát: chuyển thành": "Exit: convert into a", "công ty mẹ ngân hàng (BHC)": "bank holding company (BHC)", "Đánh đổi: chịu giám sát của Fed,": "Trade-off: Fed supervision,",
    "quy định vốn chặt hơn": "tighter capital rules",
    /* Tình huống c2-alibaba — greenshoe */
    "Tổ hợp bảo lãnh bán 115%": "The syndicate sells 115%", "(100% cơ sở + 15% vượt mức)": "(100% base + 15% over-allotment)", "→ đang THIẾU 15% cổ phiếu (bán khống)": "→ it is SHORT 15% of the shares",
    "GIÁ GIẢM dưới giá chào bán": "PRICE FALLS below the offer price", "Tổ hợp MUA trên thị trường để bù trạng thái": "Syndicate BUYS in the market to cover",
    "→ tạo lực cầu, đỡ giá (ổn định giá)": "→ buying supports the price (stabilisation)", "Không thực hiện quyền chọn": "Option not exercised",
    "Tổ chức phát hành KHÔNG bán thêm cổ phiếu": "Issuer sells NO extra shares", "GIÁ TĂNG trên giá chào bán": "PRICE RISES above the offer price",
    "Mua trên sàn sẽ lỗ → THỰC HIỆN quyền chọn": "Buying in the market would lose → EXERCISE the option", "Mua 15% từ tổ chức phát hành ở giá chào bán": "Buy 15% from the issuer at the offer price",
    "Alibaba: 68 USD, khớp đầu tiên 92,70 USD": "Alibaba: $68 offer, first trade $92.70", "Tổng huy động 21,8 → ≈ 25 tỷ USD": "Total raised $21.8bn → ≈ $25bn",
    /* Tình huống c3-disneyfox — hình thức thanh toán */
    "TOÀN BỘ TIỀN MẶT": "ALL CASH", "Comcast: ≈ 65 tỷ USD": "Comcast: ≈ $65bn", "Bên bán: giá trị CHẮC CHẮN": "Seller: CERTAIN value", "Bên bán: chịu thuế NGAY": "Seller: taxed NOW",
    "Bên mua: dùng hết tiền/vay nợ": "Buyer: uses cash / borrows", "Bên mua: giữ nguyên tỷ lệ sở hữu": "Buyer: ownership unchanged", "Rủi ro: đòn bẩy tăng": "Risk: higher leverage",
    "TOÀN BỘ CỔ PHIẾU": "ALL STOCK", "Disney lần đầu: ≈ 52,4 tỷ USD": "Disney first bid: ≈ $52.4bn", "Bên bán: chịu rủi ro giá cổ phiếu": "Seller: bears share-price risk",
    "Bên bán: hoãn thuế": "Seller: tax deferred", "Bên mua: không tốn tiền mặt": "Buyer: no cash outlay", "Bên mua: BỊ PHA LOÃNG": "Buyer: DILUTED",
    "Rủi ro: giá bên mua giảm": "Risk: buyer's share price falls", "TIỀN MẶT + CỔ PHIẾU": "CASH + STOCK", "Disney lần cuối: ≈ 71,3 tỷ USD": "Disney final bid: ≈ $71.3bn",
    "Chia sẻ rủi ro hai bên": "Risk shared by both sides", "Hoãn thuế một phần": "Tax partly deferred", "Cân bằng đòn bẩy và pha loãng": "Balances leverage and dilution",
    "Cho cổ đông quyền CHỌN": "Lets shareholders CHOOSE", "→ Phương án THẮNG": "→ The WINNING offer",
    /* Tình huống c5-rjr — cơ chế lợi nhuận LBO */
    "NGÀY MUA": "ENTRY", "Vốn cổ phần quỹ": "Sponsor equity", "NỢ VAY": "DEBT", "trả bằng dòng tiền DN": "repaid from company cash flow", "TRONG 3–7 NĂM": "OVER 3–7 YEARS",
    "① Trả bớt nợ gốc": "① Pay down debt", "② Tăng EBITDA": "② Grow EBITDA", "(cắt chi phí, tăng trưởng)": "(cost cuts, growth)", "③ Chờ hệ số định giá": "③ Wait for the multiple",
    "cải thiện": "to improve", "NGÀY THOÁI VỐN": "EXIT", "Vốn cổ phần đã tăng mạnh": "Equity has grown sharply", "Nợ còn lại (đã giảm)": "Remaining debt (reduced)",
    "RJR Nabisco: 75 USD (đề nghị ban điều hành) → 109 USD (KKR thắng) = +45% nhờ cạnh tranh": "RJR Nabisco: $75 (management offer) → $109 (KKR wins) = +45% from competition",
    "CẢNH BÁO: đòn bẩy khuếch đại theo CẢ HAI chiều — nếu EBITDA giảm, vốn cổ phần có thể về 0": "WARNING: leverage cuts BOTH ways — if EBITDA falls, the equity can go to zero",
    "Kết quả kinh doanh của RJR sau thương vụ gây thất vọng — giá cao chưa chắc là thương vụ tốt": "RJR's results after the deal disappointed — a high price is not necessarily a good deal",
    /* Tình huống c6-archegos */
    "vị thế tập trung, đòn bẩy cao": "concentrated, highly levered positions", "chỉ thấy phần của mình": "sees only its own slice", "UBS + khác": "UBS + others",
    "Hợp đồng hoán đổi = nắm giữ KINH TẾ, không đứng tên sở hữu → KHÔNG phải công bố": "Swaps = ECONOMIC exposure without legal ownership → NO disclosure required",
    "→ Không ai — kể cả cơ quan quản lý — nhìn thấy TỔNG đòn bẩy": "→ Nobody — regulators included — could see the TOTAL leverage",
    "Giá giảm → gọi ký quỹ → tất cả cùng bán giải chấp một rổ cổ phiếu → thiệt hại > 10 tỷ USD": "Prices fall → margin calls → everyone dumps the same basket → losses > $10bn"
  };

  /* ---------- 3. Bảy hình đợt 2: [tiêu đề, chú thích] bản Anh ---------- */
  var FIG2_EN = {
    "3|3.2": { 1: ["The parties and the workflow in an M&amp;A deal",
      "The sell side runs a competitive process to maximise price; the buy side runs due diligence to uncover risk. An investment bank works on both sides of the market, but never on both sides of the same deal."] },
    "2|2.3": { 0: ["The corporate bond issuance process",
      "The key differences from equity: a credit rating, covenants and a fixed repayment schedule. A private placement skips some steps but limits who can buy."] },
    "3|3.4": { 0: ["Three sources of M&amp;A financing and their balance-sheet effects",
      "Each source shifts risk onto a different group. The adviser must show the true cost of every option, not just its nominal cost."] },
    "4|4.3": { 0: ["The portfolio management process and where fees arise",
      "A closed loop: investment policy → asset allocation → security selection → execution → measurement → adjustment. Most of the long-run difference in performance comes from the asset-allocation step."] },
    "5|5.3": { 0: ["The restructuring ladder: from light to heavy",
      "The further down, the higher the cost and the greater the loss of value. The adviser's job is to keep the company on the highest rung possible — and to act EARLY, because every option narrows over time."] },
    "5|5.5": { 0: ["Governance restructuring: the agency problem and the control mechanisms",
      "Separating ownership from control creates agency costs. Each control mechanism below addresses one specific form of misaligned interests."] },
    "6|6.3": { 0: ["Proprietary trading: the three lines of defence",
      "Traders carry first-line responsibility, but two INDEPENDENT lines of control must stand behind them. The Société Générale case of 2008 happened because the person being controlled knew exactly how the controls worked."] }
  };

  /* ---------- 4. Tình huống ngắn: bản Anh của nhãn, bảng số liệu, hình và nguồn ---------- */
  var CASE_EN = {
    "c1-2008": {
      tag: "2008 crisis · Business model &amp; legal framework",
      deal: [["Bear Stearns", "Mar 2008 — sold to JPMorgan Chase at an initial $2 a share (later raised to $10), with Fed support"],
        ["Lehman Brothers", "15 Sep 2008 — Chapter 11 filing with ~$613bn of debt: the largest bankruptcy in US history"],
        ["Merrill Lynch", "Sep 2008 — sold to Bank of America (~$50bn in stock)"],
        ["Goldman Sachs &amp; Morgan Stanley", "21 Sep 2008 — Fed approves their conversion into <b>bank holding companies</b>"]],
      figTitle: "The liquidity spiral of the independent investment-bank model",
      figCap: "Long-term assets + overnight funding + high leverage = refinancing risk. A commercial bank, with deposits and the discount window, can absorb this shock.",
      src: "SEC EDGAR (8-K filings of Lehman, Goldman Sachs and Morgan Stanley, Sep 2008); Financial Crisis Inquiry Commission report (FCIC, 2011); Stowell, Ch. 3."
    },
    "c1-chinesewall": {
      tag: "Conflicts of interest · Information barriers",
      deal: [["When", "April 2003, after the dot-com bubble"], ["Firms sanctioned", "10 leading Wall Street investment banks"],
        ["Total fines &amp; payments", "about $1.4bn"], ["Nature of the violation", "BUY-rated research was traded for underwriting mandates"]],
      src: "SEC Press Release 2003-54 (28 Apr 2003); Global Research Analyst Settlement filings; Vietnam's Law on Securities 2019 and its implementing rules on conflicts of interest."
    },
    "c2-alibaba": {
      tag: "IPO · Underwriting syndicate · Over-allotment option",
      deal: [["Listing date", "19 Sep 2014, New York Stock Exchange (ticker BABA)"],
        ["Offer price", "$68 a share — top of the range raised to $66–68 (initial range $60–66)"],
        ["Proceeds", "≈ $21.8bn; ≈ <b>$25bn</b> after the over-allotment option was exercised"],
        ["Over-allotment option (greenshoe)", "15% — exercised in full a few days after listing"],
        ["Joint lead underwriters", "Credit Suisse, Deutsche Bank, Goldman Sachs, J.P. Morgan, Morgan Stanley, Citi"],
        ["Underwriting fee", "≈ 1.2% — unusually low, because the deal was so large"]],
      figTitle: "How a 15% over-allotment option (greenshoe) works",
      figCap: "Over-allotting leaves the syndicate short. If the price falls → it buys in the market to cover (supporting the price). If the price rises → it exercises the option and buys from the issuer.",
      src: "Alibaba Group F-1 and 424B4 prospectus (SEC EDGAR, 2014); over-allotment exercise announcement, Sep 2014; Rosenbaum &amp; Pearl, Ch. 8."
    },
    "c2-facebook": {
      tag: "IPO · Valuation &amp; distribution risk",
      deal: [["Listing date", "18 May 2012, NASDAQ"], ["Offer price", "$38 a share — valuing the company at ≈ $104bn"], ["Proceeds", "≈ $16bn"],
        ["Lead underwriter", "Morgan Stanley (with J.P. Morgan and Goldman Sachs)"],
        ["What happened", "A NASDAQ matching-system glitch delayed the opening; the shares fell below the offer price within days"],
        ["Legal consequences", "SEC fined NASDAQ $10m (2013); multiple investor class actions"]],
      src: "Facebook, Inc. S-1/424B4 prospectus (SEC EDGAR, 2012); SEC Release 34-69655 (2013) on NASDAQ; In re Facebook IPO Securities Litigation."
    },
    "c2-vietnam": {
      tag: "Vietnam · IPO &amp; private placement",
      deal: [["Techcombank (TCB)", "2018 share offering raising ≈ $922m; listed on HOSE in June 2018 — Vietnam's largest IPO at the time"],
        ["Vinhomes (VHM)", "Private placement to institutional investors in May 2018, ≈ $1.35bn — the largest equity deal in Vietnam at the time"],
        ["Advisers", "Syndicates of international investment banks and domestic securities companies"],
        ["Legal framework", "Law on Securities; rules on public offerings, private placements and foreign-ownership limits"]],
      src: "Prospectuses and disclosures of Techcombank and Vinhomes (2018) on HOSE and company websites; Law on Securities 2019."
    },
    "c2-bonds": {
      tag: "Bonds · Ratings &amp; market discipline",
      deal: [["Background", "The private corporate bond market grew very fast in 2019–2021, concentrated in real estate"],
        ["Structural weakness", "Many private placements reached retail investors indirectly; collateral and use of proceeds lacked transparency"],
        ["Turning point, 2022", "Enforcement cases over issuance violations collapsed confidence; secondary-market liquidity nearly froze"],
        ["Policy response", "Decree 65/2022/ND-CP tightened private-placement conditions, the professional-investor standard and disclosure; Decree 08/2023/ND-CP then allowed deferral and renegotiation of terms"],
        ["New infrastructure", "A centralised trading system for privately placed corporate bonds at HNX since 2023"]],
      src: "Decrees 153/2020/ND-CP, 65/2022/ND-CP and 08/2023/ND-CP; market data from HNX and the Ministry of Finance; VBMA bond-market reports."
    },
    "c2-vcstartup": {
      tag: "Venture capital · Funding rounds &amp; dilution",
      deal: [["Before the round", "Pre-money valuation $20m; the founders own 100% (2,000,000 shares)"], ["The round", "A fund invests $5m"],
        ["Post-money valuation", "20 + 5 = $25m → the fund owns 5/25 = <b>20%</b>"],
        ["Employee option pool (ESOP)", "A 10% ESOP must be created <b>before</b> the investment — carved out of the founders' stake"],
        ["Result", "Founders ≈ 70%, fund 20%, ESOP 10%"]],
      src: "NVCA model term sheet (US); Rosenbaum &amp; Pearl on capital structure; published funding rounds of Vietnamese start-ups."
    },
    "c3-disneyfox": {
      tag: "M&amp;A · Competing bids · Consideration structure",
      deal: [["Dec 2017", "Disney announces its purchase of 21CF assets: ≈ $52.4bn, paid <b>entirely in stock</b>"],
        ["Jun 2018", "Comcast makes a rival bid of ≈ $65bn, <b>all cash</b>"],
        ["Jun 2018", "Disney raises its offer to ≈ <b>$71.3bn</b> in <b>cash and stock</b> (shareholders choose the mix)"],
        ["Jul 2018", "21CF shareholders approve Disney's offer; Comcast withdraws and turns to Sky"], ["20 Mar 2019", "Transaction completed"]],
      figTitle: "Comparing forms of consideration in the deal",
      figCap: "Three forms of consideration and who carries which risk. This is the framework to apply to every M&amp;A case.",
      src: "S-4 and DEFM14A filings of The Walt Disney Company and Twenty-First Century Fox (SEC EDGAR 2017–2019); Comcast press release, June 2018."
    },
    "c3-msft": {
      tag: "M&amp;A · Regulatory &amp; antitrust risk",
      deal: [["Announced", "18 Jan 2022 — $95 a share in cash, ≈ <b>$68.7bn</b> in total"],
        ["Opposition", "The US FTC sued; the UK CMA initially blocked the deal"],
        ["Remedy", "Microsoft sold the cloud-streaming rights for the games to Ubisoft to meet the CMA's concerns"],
        ["Completed", "13 Oct 2023 — after almost 21 months"],
        ["Market signal", "ATVI traded well below $95 throughout the wait — the <b>merger arbitrage spread</b>"]],
      src: "Activision Blizzard 8-K and DEFM14A filings (SEC EDGAR 2022); FTC v. Microsoft; UK CMA decisions, 2023."
    },
    "c3-sabeco": {
      tag: "Vietnam · State divestment",
      deal: [["When", "December 2017 — public auction of the state's stake"], ["Stake offered", "53.59% of Sabeco's charter capital"],
        ["Value", "≈ VND 110 trillion (≈ $4.8bn)"], ["Buyer", "ThaiBev (Thailand), through a Vietnamese entity, Vietnam Beverage"],
        ["Key issue", "Foreign-ownership limits → a domestic-entity structure was needed"]],
      src: "Sabeco (SAB) disclosures on HOSE, December 2017; ThaiBev annual report; rules on state divestment from enterprises."
    },
    "c4-passive": {
      tag: "Asset management · Active vs passive",
      deal: [["Trend", "Index funds and ETFs have taken a steadily larger share of global assets under management over the past two decades"],
        ["Competitive mechanism", "Fees on large US equity index funds have fallen to a few basis points (0.0x% a year)"],
        ["Consequences for investment banks", "Revenue shifts from <b>asset-based fees</b> to <b>scale</b>, technology and alternative products"],
        ["Evidence", "S&amp;P's periodic SPIVA studies show most active funds fail to beat their benchmark after fees over the long run"]],
      src: "S&amp;P Dow Jones Indices SPIVA Scorecard (periodic); annual reports of the large asset managers."
    },
    "c3-defence": {
      tag: "Takeover defence · Poison pill",
      deal: [["13 Apr 2022", "Elon Musk offers to buy all of Twitter at $54.20 a share"],
        ["15 Apr 2022", "Twitter's board adopts a <b>shareholder rights plan</b> (poison pill), triggered at 15% ownership"],
        ["25 Apr 2022", "The board agrees to sell at the same $54.20"],
        ["Afterwards", "The buyer tried to walk away; Twitter sued in the Delaware Court of Chancery; the deal closed on 27 Oct 2022"]],
      src: "Twitter, Inc. 8-K on the Rights Plan, 15 Apr 2022; DEFM14A 2022; Twitter v. Musk, Delaware Court of Chancery."
    },
    "c4-vnfunds": {
      tag: "Vietnam · Open-ended funds, ETFs &amp; foreign funds",
      deal: [["Common structures", "Open-ended funds (units issued and redeemed at NAV) and ETFs tracking indices (VN30, VNDIAMOND, VNFIN LEAD)"],
        ["Supervisory bank", "A separate supervisory bank is mandatory to hold the assets in custody and monitor the fund — a key investor safeguard"],
        ["Foreign investors", "Subject to sector ownership limits; domestic ETFs and depositary receipts offer indirect access"],
        ["Market features", "Retail investors account for a very high share of trading value compared with developed markets"]],
      src: "Law on Securities 2019 and the rules on securities investment funds; prospectuses of open-ended funds and ETFs listed in Vietnam; VSDC/HOSE investor-structure data."
    },
    "c5-rjr": {
      tag: "Classic LBO · Auction &amp; leverage",
      deal: [["Winner", "Kohlberg Kravis Roberts &amp; Co. (KKR)"],
        ["Final price", "$109 a share — equity ≈ $25bn; total value ≈ $31bn including assumed debt"],
        ["Starting point", "Management proposed a buyout at $75 a share"],
        ["Structure", "Very high leverage, funded mainly with debt, including high-yield (junk) bonds"],
        ["Legacy", "The book <i>Barbarians at the Gate</i>; the largest LBO for about 17 years"]],
      figTitle: "How an LBO generates its return",
      figCap: "Three sources of value: paying down debt, improving operating profit, and a change in the valuation multiple at exit. Leverage magnifies both gains and losses.",
      src: "Burrough &amp; Helyar, <i>Barbarians at the Gate</i> (1990); RJR Nabisco tender-offer filings (SEC 1988–89); Rosenbaum &amp; Pearl, Ch. 4–5."
    },
    "c5-twitter": {
      tag: "Modern LBO · Hung debt",
      deal: [["Offer price", "$54.20 a share — ≈ <b>$44bn</b> in total"], ["Completed", "27 Oct 2022"],
        ["Bank debt committed", "≈ $13bn, from a syndicate led by Morgan Stanley"],
        ["The problem", "The banks committed to lend first, planning to sell the debt to investors; as markets deteriorated, the loans were left <b>hung</b> on their balance sheets"],
        ["Consequence", "The banks had to take significant mark-downs on the commitment"]],
      src: "Twitter, Inc. DEFM14A and 8-K filings (SEC EDGAR 2022); financial statements of the arranging banks."
    },
    "c5-gm": {
      tag: "Restructuring · Controlled bankruptcy",
      deal: [["Filed", "1 Jun 2009 — one of the largest industrial bankruptcies in US history"], ["Emerged", "10 Jul 2009 — after only about 40 days"],
        ["US government support", "≈ $49.5bn"],
        ["Mechanism", "A Section 363 sale of the good assets to a new entity (\"New GM\"); bad assets and liabilities stayed in the old entity"],
        ["Outcome", "New GM returned to the market with an IPO in 2010"]],
      src: "In re General Motors Corp., US Bankruptcy Court for the Southern District of New York (2009); reports of the Special Inspector General for TARP (SIGTARP)."
    },
    "c6-archegos": {
      tag: "Prime brokerage · Margin · Counterparty risk",
      deal: [["When", "March 2021"], ["Who", "Archegos Capital Management — Bill Hwang's family office"],
        ["Instrument", "Total return swaps — economic exposure without legal ownership, so <b>no disclosure was required</b>"],
        ["How it collapsed", "Underlying shares fell → margin calls → not met → the prime brokers sold the collateral at the same time"],
        ["Reported losses", "Credit Suisse ≈ $5.5bn; Nomura ≈ $2.9bn; Morgan Stanley ≈ $0.9bn; UBS ≈ $0.8bn"],
        ["Long-term consequence", "One of the causes of Credit Suisse's collapse and its takeover by UBS in 2023"]],
      figTitle: "Why no bank could see the total position",
      figCap: "Each prime broker saw only its own slice. Swaps hid the economic ownership, so the total leverage was invisible until prices fell.",
      src: "Credit Suisse independent report on Archegos (July 2021); 2021 financial statements of Nomura, Morgan Stanley and UBS; US DOJ/SEC proceedings against Bill Hwang."
    },
    "c6-gamestop": {
      tag: "Market making · Clearing &amp; settlement",
      deal: [["Event", "GME shares spiked on retail buying, causing a <b>short squeeze</b>"],
        ["Technical bottleneck", "The clearing house required brokers to post very large extra collateral because volatility soared"],
        ["Consequence", "Some brokers <b>restricted buy orders</b> in the affected stocks"],
        ["Policy issue", "<b>Payment for order flow</b> and the role of wholesale market makers were questioned in the US Congress"],
        ["Settlement cycle", "Settlement was T+2 at the time; the US moved to T+1 in 2024"]],
      src: "SEC Staff Report on Equity and Options Market Structure Conditions in Early 2021 (Oct 2021); US House Financial Services Committee hearing, Feb 2021."
    },
    "c6-sg-kerviel": {
      tag: "Proprietary trading · Operational risk &amp; internal control",
      deal: [["Disclosed", "January 2008"], ["Loss", "≈ <b>€4.9bn</b> when the bank unwound the positions"],
        ["How", "A trader built very large index positions and hid them with fictitious offsetting trades, so the net book looked hedged"],
        ["Weakness exploited", "Having worked in the middle office, he knew the reconciliation procedures and how to evade the controls"],
        ["Legal consequences", "The bank was fined by the French regulator; the trader was criminally prosecuted"]],
      src: "Société Générale special committee and General Inspection (\"Green\") reports, 2008; Commission bancaire (France) sanction decision; SocGen 2008 annual report."
    }
  };

  /* ---------- dịch nhãn SVG ---------- */
  function dichSvg(svg, tuDien) {
    return String(svg || "").replace(/(<(text|tspan)\b[^>]*>)([^<]+)(<\/\2>)/g, function (m, mo, the, chu, dong) {
      var khoa = chu.trim(), t = tuDien[khoa];
      return t == null ? m : mo + chu.replace(khoa, t) + dong;
    });
  }
  /** svg gốc viết bằng `goc` ("en"|"vi"); trả bản cho chế độ đang chọn (đối chiếu → tiếng Việt). */
  function svgTheo(svg, goc) {
    var lang = (window.I18N && window.I18N.lang) || "en";
    var can = lang === "en" ? "en" : "vi";
    if (can === goc) return svg;
    return dichSvg(svg, goc === "en" ? EN_VI : VI_EN);
  }
  window.dichNhanHinh = { EN_VI: EN_VI, VI_EN: VI_EN, dichSvg: dichSvg };

  /* ---------- áp bản Anh cho hình đợt 2 ---------- */
  var F = window.FIGURES || {};
  Object.keys(F).forEach(function (k) {
    (F[k] || []).forEach(function (f, i) {
      var en = FIG2_EN[k] && FIG2_EN[k][i];
      if (en && !f._svGoc) {
        f._svGoc = "vi";                        // chữ trong svg viết tiếng Việt
        f.titleVi = f.titleVi || f.title; f.capVi = f.capVi || f.cap;
        f.title = en[0]; f.cap = en[1];
      } else if (!f._svGoc) f._svGoc = "en";
    });
  });

  /* ---------- áp bản Anh cho tình huống ngắn ---------- */
  var C = window.IB_CASES || {};
  Object.keys(C).forEach(function (k) {
    (C[k] || []).forEach(function (c) {
      var en = CASE_EN[c.id];
      if (!en || c._daSongNgu) return;
      c._daSongNgu = true;
      c.tagVi = c.tag; c.tag = en.tag;
      c.dealVi = c.deal; c.deal = en.deal;
      c.srcVi = c.src; c.src = en.src;
      if (c.fig && en.figTitle) { c.fig.titleVi = c.fig.title; c.fig.title = en.figTitle; c.fig.capVi = c.fig.cap; c.fig.cap = en.figCap; }
    });
  });

  /* ---------- vẽ hình theo ba chế độ ---------- */
  window.renderFigures = function (chId, secId) {
    var list = F[chId + "|" + secId];
    if (!list || !list.length) return "";
    return list.map(function (f) {
      return '<figure class="fig-card"><div class="fig-title">' + window.L(f, "title") +
        '</div><div class="fig-body">' + svgTheo(f.svg, f._svGoc || "en") +
        '</div><figcaption class="fig-cap">' + window.L(f, "cap") + "</figcaption></figure>";
    }).join("");
  };

  /* ---------- vẽ tình huống ngắn theo ba chế độ ---------- */
  var NHAN = {
    badge: ["CASE STUDY", "TÌNH HUỐNG"],
    qs: ["Discussion questions (for group assignment)", "Câu hỏi thảo luận (dùng cho bài tập nhóm)"],
    src: ["Sources to verify: ", "Nguồn tra cứu: "]
  };
  window.renderCases = function (chId, secId, lang) {
    var list = C[chId + "|" + secId];
    if (!list || !list.length) return "";
    lang = lang || "en";
    var bi = lang === "bi", vi = lang === "vi";
    var nhan = function (k) { return bi ? NHAN[k][1] + " · " + NHAN[k][0] : NHAN[k][vi ? 1 : 0]; };
    var Lc = function (o, k) {
      var v = o[k + "Vi"], e = o[k];
      if (bi) return window.ghepKhoi(v, e);
      return (vi && v) ? v : e;
    };
    return list.map(function (c) {
      var bang = function (rows) {
        return (rows || []).map(function (r) { return "<tr><td style=\"white-space:nowrap;font-weight:600\">" + r[0] + "</td><td>" + r[1] + "</td></tr>"; }).join("");
      };
      var deal = bi ? bang(c.dealVi || c.deal) : bang(vi ? (c.dealVi || c.deal) : c.deal);
      var dealEn = bi && c.dealVi ? bang(c.deal) : "";
      var qs = (Lc(c, "qs") || []).map(function (q) { return "<li>" + q + "</li>"; }).join("");
      var fig = c.fig ? '<figure class="fig-card"><div class="fig-title">' + Lc(c.fig, "title") +
        '</div><div class="fig-body">' + svgTheo(c.fig.svg, "vi") + '</div><figcaption class="fig-cap">' + Lc(c.fig, "cap") + "</figcaption></figure>" : "";
      return '<div class="case-card">' +
        '<div class="case-head"><span class="case-badge">' + nhan("badge") + "</span>" +
        '<span class="case-tag">' + (bi ? (c.tagVi || c.tag) : (vi ? (c.tagVi || c.tag) : c.tag)) + "</span></div>" +
        '<h3 class="case-title">' + Lc(c, "title") + "</h3>" +
        (deal ? '<table class="case-facts">' + deal + "</table>" : "") +
        (dealEn ? '<div class="bi-alt" lang="en"><table class="case-facts">' + dealEn + "</table></div>" : "") +
        '<div class="case-body">' + Lc(c, "body") + "</div>" +
        fig +
        (qs ? '<div class="case-qs"><b>' + nhan("qs") + "</b><ol>" + qs + "</ol></div>" : "") +
        (c.src ? '<div class="case-src"><b>' + nhan("src") + "</b>" + Lc(c, "src") + "</div>" : "") +
        "</div>";
    }).join("");
  };

  window.SONG_NGU_HINH_APPLIED = { nhanEnVi: Object.keys(EN_VI).length, nhanViEn: Object.keys(VI_EN).length, tinhHuong: Object.keys(CASE_EN).length };
})();
