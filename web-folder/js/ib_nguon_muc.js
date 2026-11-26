/* =====================================================================
   ib_nguon_muc.js — BẢNG TRUY XUẤT: nội dung nào của từng mục bài giảng lấy từ đâu.
   Mỗi hàng: y = nội dung (en/vi) · n = [[khoá nguồn, vị trí]] · co = cờ (tt, mh, vn, th) · g = ghi chú.
   Số trang là trang in; khoá nguồn khai trong ib_nguon_ds.js.
   ===================================================================== */
(function () {
  "use strict";
  const M = (k, rows) => window.IBNguon.them(k, rows);
  const KHUNG = { en: "Organising framework follows the course textbook [2].", vi: "Khung trình bày theo giáo trình chính [2] của học phần." };

  /* ============================ CHƯƠNG 1 ============================ */
  M("1|1.1", [
    { y: { en: "No single definition; the narrow (underwriting) view", vi: "Không có định nghĩa duy nhất; cách hiểu hẹp (bảo lãnh phát hành)" },
      n: [["caselli2021", "p. 19"], ["shiller2008"]] },
    { y: { en: "Dictionary of Banking and Finance, Bloomberg and Marshall–Ellis definitions", vi: "Định nghĩa của Dictionary of Banking and Finance, Bloomberg và Marshall – Ellis" },
      n: [["giri2017", "p. 151"]], g: { en: "Quoted as cited by Giri; the original dictionaries were not consulted.", vi: "Trích theo Giri dẫn lại; chưa đối chiếu bản từ điển gốc." } },
    { y: { en: "Investment Banking Division and Trading Division; asset and wealth management", vi: "Khối Ngân hàng đầu tư và Khối Giao dịch; quản lý tài sản và gia sản" },
      n: [["stowell2024", "pp. 8, 10"]] },
    { y: { en: "SIC industry 6211 (and 6221 for commodity brokers)", vi: "Mã ngành SIC 6211 (và 6221 cho môi giới hàng hoá)" }, n: [["sic1987"]] },
    { y: { en: "Working definition for the course", vi: "Định nghĩa dùng trong học phần" },
      n: [["stowell2024", "p. 8"], ["giri2017", "p. 151"], ["tranTuanVinh2023"]], co: "th" },
    { y: { en: "Six characteristics: (a) fee-based capital-market model vs interest-margin model; (b) income sources", vi: "Sáu đặc điểm: (a) mô hình thu phí trên thị trường vốn so với mô hình chênh lệch lãi suất; (b) nguồn thu nhập" },
      n: [["caselli2021", "pp. 18–19"], ["tranTuanVinh2023"]], g: KHUNG },
    { y: { en: "(c) Short-term funding: repo ~25% of assets in 2007 (12% in 2000); commercial paper; the October 2008 run", vi: "(c) Vốn ngắn hạn: repo ~25% tổng tài sản năm 2007 (12% năm 2000); thương phiếu; cơn rút vốn tháng 10/2008" },
      n: [["stowell2024", "pp. 246–247"]] },
    { y: { en: "(d) Asset-management vs liability-management orientation", vi: "(d) Định hướng quản lý tài sản so với quản lý nguồn vốn" },
      n: [["tranTuanVinh2023"]], co: "th", g: { en: "Didactic contrast taken from the course textbook; read it together with the funding evidence in (c).", vi: "Phép đối chiếu mang tính sư phạm của giáo trình; nên đọc cùng bằng chứng về nguồn vốn ở mục (c)." } },
    { y: { en: "(e) Leverage: commercial banks 10–15×, non-financial firms 1–3×, investment banks 20–30× in 2005–2007; Basel III", vi: "(e) Đòn bẩy: NHTM 10–15 lần, doanh nghiệp phi tài chính 1–3 lần, NHĐT 20–30 lần giai đoạn 2005–2007; Basel III" },
      n: [["stowell2024", "pp. 247–248"]] },
    { y: { en: "(f) Supervisors: SEC and Federal Reserve (US); SSM/ECB and MiFID II (euro area)", vi: "(f) Cơ quan giám sát: SEC và Fed (Mỹ); SSM/ECB và MiFID II (khu vực đồng euro)" },
      n: [["stowell2024", "pp. 25, 248"], ["caselli2021", "pp. 35–36, 107"]] },
    { y: { en: "(f) Vietnam: SSC licenses securities and fund management companies; SBV supervises banks", vi: "(f) Việt Nam: UBCKNN cấp phép công ty chứng khoán, công ty quản lý quỹ; NHNN giám sát ngân hàng" },
      n: [["luatCK2019", "Art. 70"], ["luatNHNN2010", "Art. 4(11)"]], co: "vn" },
    { y: { en: "Summary table (principal market, profit stability, operating risk)", vi: "Bảng tóm tắt (thị trường chính, độ ổn định lợi nhuận, rủi ro hoạt động)" },
      n: [["stowell2024", "p. 247"], ["caselli2021", "p. 18"]], co: "th" },
    { y: { en: "Deep dive: spread vs fee business, client vs counterparty, universal banks and conflicts", vi: "Đọc sâu: kinh doanh chênh lệch so với thu phí, khách hàng so với đối tác, ngân hàng đa năng và xung đột lợi ích" },
      n: [["caselli2021", "pp. 18–19"], ["stowell2024", "p. 8"]], co: "th" },
  ]);

  M("1|1.2", [
    { y: { en: "Merchant origins; British merchant banks vs continental universal banks", vi: "Nguồn gốc thương nhân; ngân hàng thương nhân ở Anh so với ngân hàng đa năng ở lục địa châu Âu" },
      n: [["carosso1970", "p. 8"], ["giri2017", "pp. 152, 168"]] },
    { y: { en: "Buttonwood Agreement, 17 May 1792", vi: "Thoả ước Buttonwood, 17/5/1792" }, n: [["nyse"]] },
    { y: { en: "US timeline: loan contractors, auctioneers and brokers; railroads from the 1850s; Jay Cooke in the Civil War; private bankers taking deposits and underwriting", vi: "Diễn tiến ở Mỹ: nhà thầu vay vốn, người đấu giá, môi giới; đường sắt từ thập niên 1850; Jay Cooke thời Nội chiến; ngân hàng tư nhân vừa nhận tiền gửi vừa bảo lãnh" },
      n: [["carosso1970", "pp. x, 1–5, 15–17, 47"]] },
    { y: { en: "McFadden Act 1927: branching and certain securities business", vi: "Đạo luật McFadden 1927: mở chi nhánh và một số loại kinh doanh chứng khoán" }, n: [["carosso1970", "p. 273"]] },
    { y: { en: "Glass-Steagall 1933 (separation; member banks divest securities affiliates; FDIC)", vi: "Glass-Steagall 1933 (tách biệt; ngân hàng thành viên thoái công ty chứng khoán; FDIC)" },
      n: [["stowell2024", "p. 40"], ["carosso1970", "pp. 351, 371"]] },
    { y: { en: "Morgan Stanley organised in September 1934", vi: "Morgan Stanley thành lập tháng 9/1934" }, n: [["carosso1970", "p. 373"], ["stowell2024", "p. 42"]] },
    { y: { en: "Gramm-Leach-Bliley 1999: Citigroup/Travelers, Chase Manhattan/J.P. Morgan", vi: "Gramm-Leach-Bliley 1999: Citigroup/Travelers, Chase Manhattan/J.P. Morgan" }, n: [["stowell2024", "p. 44"]] },
    { y: { en: "Dodd-Frank 2010: aims; 5% equity, liquidity and annual stress tests", vi: "Dodd-Frank 2010: mục tiêu; 5% vốn chủ, thanh khoản và kiểm tra sức chịu đựng hằng năm" },
      n: [["stowell2024", "pp. 47–50"]], g: { en: "The 5% figure is Stowell's summary of the Act's leverage requirement.", vi: "Con số 5% là cách Stowell tóm tắt yêu cầu đòn bẩy của Đạo luật." } },
    { y: { en: "2008: Bear Stearns ($2, raised to $10), Lehman, Merrill Lynch, Goldman Sachs and Morgan Stanley", vi: "2008: Bear Stearns (2 USD, nâng lên 10 USD), Lehman, Merrill Lynch, Goldman Sachs và Morgan Stanley" },
      n: [["stowell2024", "pp. 25, 509"]] },
    { y: { en: "Today's landscape: nine global banks, regional banks, boutiques; UBS–Credit Suisse 2023", vi: "Bức tranh hiện nay: chín ngân hàng toàn cầu, ngân hàng khu vực, công ty chuyên biệt; UBS – Credit Suisse 2023" },
      n: [["stowell2024", "pp. 6–7, 82"], ["ubs2023"]] },
    { y: { en: "Trends; ROE of the nine largest banks 2017–2020", vi: "Xu hướng; ROE của chín ngân hàng lớn nhất 2017–2020" }, n: [["stowell2024", "p. 8 (Exhibit 1.4)"]], co: "th" },
    { y: { en: "Deep dive: partnerships going public; mechanisms of the 2008 crisis and the regulatory response", vi: "Đọc sâu: công ty hợp danh niêm yết; cơ chế của khủng hoảng 2008 và phản ứng chính sách" },
      n: [["morrisonWilhelm2008"], ["stowell2024", "pp. 24, 48–49, 246–247"]], co: "th" },
  ]);

  M("1|1.3", [
    { y: { en: "Roles for enterprises, investors and the economy; the six functions", vi: "Vai trò với doanh nghiệp, nhà đầu tư và nền kinh tế; sáu chức năng" }, n: [["tranTuanVinh2023"]], g: KHUNG },
    { y: { en: "Broker (agency) vs dealer (principal)", vi: "Môi giới (đại lý) và tự doanh (gốc)" }, n: [["stowell2024", "p. 136"]] },
    { y: { en: "Market maker: liquidity and price discovery; bid–ask spread", vi: "Tạo lập thị trường: thanh khoản và khám phá giá; chênh lệch giá mua – bán" }, n: [["stowell2024", "pp. 129–130"]] },
    { y: { en: "Servicer: prime brokerage (financing, securities lending, custody, clearing)", vi: "Cung cấp dịch vụ: môi giới chính (tài trợ, cho vay chứng khoán, lưu ký, bù trừ)" }, n: [["stowell2024", "pp. 23, 138–141"]] },
    { y: { en: "Deep dive: underwriting solves asymmetric information; reputation as collateral", vi: "Đọc sâu: bảo lãnh phát hành giải quyết bất cân xứng thông tin; uy tín như tài sản bảo đảm" },
      n: [["shiller2008"], ["myersMajluf1984"]] },
    { y: { en: "Deep dive: firm commitment as risk transfer; book-building; proprietary trading and conflicts", vi: "Đọc sâu: cam kết chắc chắn là chuyển giao rủi ro; dựng sổ lệnh; tự doanh và xung đột lợi ích" },
      n: [["stowell2024", "pp. 55, 60, 151"]], co: "th" },
  ]);

  M("1|1.4", [
    { y: { en: "Seven core operations", vi: "Bảy nghiệp vụ chính" }, n: [["tranTuanVinh2023"], ["stowell2024", "pp. 8–10, 24"]], g: KHUNG },
    { y: { en: "Global banks, regional banks, boutiques; universal banks", vi: "Ngân hàng toàn cầu, khu vực, công ty chuyên biệt; ngân hàng đa năng" }, n: [["stowell2024", "p. 7"], ["caselli2021", "p. 18"]] },
    { y: { en: "Vietnam: SSC-licensed securities and fund management companies; bank-owned securities subsidiaries", vi: "Việt Nam: công ty chứng khoán, quản lý quỹ do UBCKNN cấp phép; công ty chứng khoán do ngân hàng sở hữu" },
      n: [["luatCK2019", "Arts. 70, 72, 74(3)"]], co: "vn" },
    { y: { en: "Front, middle and back office; separating risk-taking from risk measurement", vi: "Khối trước, khối giữa, khối sau; tách người chấp nhận rủi ro khỏi người đo lường rủi ro" }, n: [["giri2017", "p. 170"]], co: "th" },
    { y: { en: "Research conflicts; the 2003 Global Research Settlement", vi: "Xung đột của bộ phận phân tích; Thoả thuận nghiên cứu toàn cầu 2003" }, n: [["stowell2024", "p. 47"], ["giri2017", "p. 217"]] },
    { y: { en: "Private and public side; wall-crossing; legal duty to prevent misuse of MNPI", vi: "Phía nội gián và phía công khai; vượt tường; nghĩa vụ pháp lý ngăn lạm dụng thông tin trọng yếu chưa công bố" },
      n: [["stowell2024", "pp. 154, 533"], ["usc78o"]] },
    { y: { en: "Deep dive: Barings (1995); bonus deferral and clawback", vi: "Đọc sâu: Barings (1995); trả thưởng chậm và thu hồi" }, n: [["giri2017", "p. 170"], ["stowell2024", "pp. 49, 249"]] },
  ]);

  M("1|1.5", [
    { y: { en: "Ecosystem of law firms, auditors, rating agencies and others", vi: "Hệ sinh thái công ty luật, kiểm toán, xếp hạng tín nhiệm và các bên khác" }, n: [["stowell2024", "pp. 60, 175"]], co: "th" },
    { y: { en: "Capital and liquidity: Basel III, Dodd-Frank, stress tests", vi: "Vốn và thanh khoản: Basel III, Dodd-Frank, kiểm tra sức chịu đựng" }, n: [["stowell2024", "pp. 49–50, 248"]] },
    { y: { en: "Conduct: Volcker Rule, research independence", vi: "Hành vi: Quy tắc Volcker, tính độc lập của phân tích" }, n: [["stowell2024", "pp. 47, 49"]] },
    { y: { en: "Reputation risk; cyclical fee pools", vi: "Rủi ro uy tín; tính chu kỳ của nguồn phí" }, n: [["stowell2024", "pp. 76, 534"]] },
    { y: { en: "DuPont decomposition of ROE", vi: "Phân tích DuPont của ROE" }, n: [["berkDeMarzo2017", "p. 78"]] },
    { y: { en: "Leverage 20–30× in 2005–2007; ROE −1.9% to 11.8% in 2017–2020", vi: "Đòn bẩy 20–30 lần giai đoạn 2005–2007; ROE −1,9% đến 11,8% giai đoạn 2017–2020" }, n: [["stowell2024", "pp. 8, 247"]] },
    { y: { en: "Vietnam: four licensed operations, stacked licences, minimum capital per operation", vi: "Việt Nam: bốn nghiệp vụ được cấp phép, giấy phép xếp tầng, vốn tối thiểu theo nghiệp vụ" },
      n: [["luatCK2019", "Arts. 70, 72, 74(1)"]], co: "vn" },
    { y: { en: "Deep dive: market depth, regulation, investor base and information infrastructure as constraints", vi: "Đọc sâu: độ sâu thị trường, khung pháp lý, cơ sở nhà đầu tư và hạ tầng thông tin như những ràng buộc" }, co: "th",
      g: { en: "Analytical framing by the lecturer; no single source.", vi: "Khung phân tích của giảng viên; không dựa trên một nguồn duy nhất." } },
  ]);

  /* ============================ CHƯƠNG 2 ============================ */
  M("2|2.1", [
    { y: { en: "Underwriting: the bank buys the issue and resells it, earning the gross spread", vi: "Bảo lãnh phát hành: ngân hàng mua đợt phát hành và bán lại, hưởng chênh lệch bảo lãnh" }, n: [["stowell2024", "p. 55"], ["giri2017", "p. 348"]] },
    { y: { en: "Best efforts, standby and firm commitment (bought deal)", vi: "Cố gắng tối đa, bảo lãnh dự phòng và cam kết chắc chắn (bought deal)" }, n: [["caselli2021", "p. 245"], ["giri2017", "p. 353"]] },
    { y: { en: "Where the risk really lies: settlement risk, liability; block trades and bought deals", vi: "Rủi ro thực sự nằm ở đâu: rủi ro thanh toán, trách nhiệm pháp lý; giao dịch lô lớn và bought deal" }, n: [["stowell2024", "pp. 55–56, 58"]] },
    { y: { en: "Syndicate: active bookrunners, passive bookrunners, co-managers", vi: "Tổ hợp: bookrunner chủ động, bookrunner thụ động, đồng quản lý" }, n: [["stowell2024", "p. 57"], ["rp2020", "pp. 395, 397"]] },
    { y: { en: "Gross spread: ~7% US IPO standard; European IPOs 1.5–4.5%; bonds 0.1–1% (up to 2%)", vi: "Chênh lệch bảo lãnh: ~7% chuẩn IPO ở Mỹ; IPO châu Âu 1,5–4,5%; trái phiếu 0,1–1% (tới 2%)" }, n: [["rp2020", "p. 397"], ["caselli2021", "pp. 135, 251"]] },
    { y: { en: "20/20/60 split: management fee, underwriting fee, selling concession", vi: "Tỷ lệ 20/20/60: phí quản lý, phí bảo lãnh, hoa hồng bán" }, n: [["rp2020", "p. 398"], ["caselli2021", "p. 251"]] },
    { y: { en: "Advisory before the commitment: structure, size, timing, equity story", vi: "Tư vấn trước khi cam kết: cấu trúc, quy mô, thời điểm, câu chuyện đầu tư" }, n: [["stowell2024", "pp. 57–60"]] },
    { y: { en: "Deep dive: 1,500 bn offering at 4.5% spread", vi: "Đọc sâu: đợt chào bán 1.500 tỷ với chênh lệch 4,5%" }, co: "tt,mh" },
    { y: { en: "Deep dive: underpricing (17% average first-day return, US 1960–2015) and the agency explanation", vi: "Đọc sâu: định giá thấp (lợi suất ngày đầu bình quân 17%, Mỹ 1960–2015) và lời giải thích đại diện" }, n: [["berkDeMarzo2017", "p. 880"], ["ritterWelch2002"]] },
  ]);

  M("2|2.2", [
    { y: { en: "Who may issue; methods by round, investor and distribution", vi: "Chủ thể được phát hành; phương thức theo đợt, theo nhà đầu tư và theo cách phân phối" }, n: [["tranTuanVinh2023"], ["luatCK2019", "Art. 15"]], g: KHUNG },
    { y: { en: "Pricing methods: book-building (dominant), auction, fixed price", vi: "Phương pháp định giá: dựng sổ lệnh (phổ biến nhất), đấu giá, giá cố định" }, n: [["caselli2021", "pp. 260, 265"], ["stowell2024", "p. 72"]] },
    { y: { en: "IPO conditions in Vietnam (VND 30 bn, two profitable years, 15%/100 investors, 20% lock-up, adviser, escrow, listing commitment)", vi: "Điều kiện IPO ở Việt Nam (30 tỷ đồng, hai năm có lãi, 15%/100 nhà đầu tư, 20% nắm giữ 1 năm, tổ chức tư vấn, tài khoản phong toả, cam kết niêm yết)" },
      n: [["luatCK2019", "Art. 15(1)"]], co: "vn", g: { en: "Art. 15(1) was not amended by Law 56/2024/QH15 (checked 19/11/2026); the note in the lecture lists what was.", vi: "Khoản 1 Điều 15 không bị Luật 56/2024/QH15 sửa (đối chiếu ngày 19/11/2026); ghi chú trong bài nêu các điểm đã sửa." } },
    { y: { en: "IPO process: team, due diligence, registration, roadshow, book-building, pricing", vi: "Quy trình IPO: đội ngũ, thẩm định, đăng ký, roadshow, dựng sổ, định giá" }, n: [["rp2020", "Chapter 9, pp. 415–440"]] },
    { y: { en: "Greenshoe: up to 15%, exercisable for 30 days; a stabilisation mechanism", vi: "Quyền chọn phân bổ thêm: tối đa 15%, thực hiện trong 30 ngày; cơ chế bình ổn" }, n: [["rp2020", "p. 394"], ["stowell2024", "p. 77"]] },
    { y: { en: "Worked example: 10m shares, $20, 6% spread, 15% greenshoe", vi: "Ví dụ: 10 triệu cổ phiếu, 20 USD, phí 6%, greenshoe 15%" }, co: "tt,mh" },
    { y: { en: "IPO discount of 10–15% to fully distributed value", vi: "Chiết khấu IPO 10–15% so với giá trị khi đã phân phối đầy đủ" }, n: [["rp2020", "p. 427"]] },
    { y: { en: "Deep dive: rights offers protect existing shareholders; cheaper than cash offers", vi: "Đọc sâu: phát hành quyền mua bảo vệ cổ đông hiện hữu; rẻ hơn chào bán tiền mặt" }, n: [["berkDeMarzo2017", "pp. 886–887, 889"]] },
    { y: { en: "Deep dive: private placements and discounted follow-ons/block trades", vi: "Đọc sâu: phát hành riêng lẻ và chào bán thêm/giao dịch lô lớn có chiết khấu" }, n: [["rp2020", "p. 406"]], co: "th" },
  ]);

  M("2|2.3", [
    { y: { en: "Rating advisory; ratings and the cost of debt", vi: "Tư vấn xếp hạng tín nhiệm; xếp hạng và chi phí nợ" }, n: [["stowell2024", "p. 175"]] },
    { y: { en: "Pricing as a spread over a benchmark; book-building of a bond", vi: "Định giá bằng biên lợi suất trên lãi suất chuẩn; dựng sổ trái phiếu" }, n: [["caselli2021", "pp. 143, 165"]] },
    { y: { en: "Bond price formula; par, discount and premium", vi: "Công thức giá trái phiếu; ngang giá, chiết khấu và thặng dư" }, n: [["berkDeMarzo2017", "pp. 211–212"]] },
    { y: { en: "ECM vs DCM fees", vi: "Phí ECM so với DCM" }, n: [["rp2020", "p. 397"], ["caselli2021", "pp. 135, 251"]] },
    { y: { en: "Covenants: maintenance vs incurrence; covenant-lite", vi: "Điều khoản ràng buộc: duy trì và phát sinh; covenant-lite" }, n: [["caselli2021", "pp. 194–195"], ["rp2020", "p. 195"]] },
    { y: { en: "Vietnam: public bond offering conditions; private placements of unlisted JSCs", vi: "Việt Nam: điều kiện chào bán trái phiếu ra công chúng; chào bán riêng lẻ của công ty cổ phần chưa đại chúng" },
      n: [["luatCK2019", "Art. 15(3)"], ["luatDN2020", "Art. 128"]], co: "vn", g: { en: "As amended by Law 56/2024/QH15 (Art. 15(3)(g), from 1/1/2025) and Law 76/2025/QH15 (Art. 128, 5× debt-to-equity cap, from 1/7/2025).", vi: "Theo bản sửa đổi bởi Luật 56/2024/QH15 (điểm g khoản 3 Điều 15, từ 1/1/2025) và Luật 76/2025/QH15 (Điều 128, trần nợ 5 lần vốn chủ sở hữu, từ 1/7/2025)." } },
    { y: { en: "Deep dive: 5-year bond at 4.25% + 1.80%; 50 bp widening = −2.08%", vi: "Đọc sâu: trái phiếu 5 năm 4,25% + 1,80%; nới 50 điểm cơ bản = −2,08%" }, co: "tt,mh" },
  ]);

  M("2|2.4", [
    { y: { en: "PE fund as a limited partnership (GP and LPs)", vi: "Quỹ PE là công ty hợp danh hữu hạn (GP và LP)" }, n: [["stowell2024", "p. 445"]] },
    { y: { en: "Fund life of about ten years; investment period about five years", vi: "Vòng đời quỹ khoảng mười năm; giai đoạn đầu tư khoảng năm năm" }, n: [["demaria2020", "p. 107"], ["stowell2024", "p. 275"]] },
    { y: { en: "Forms: LBO, growth capital, mezzanine, venture capital; stages from seed to turnaround", vi: "Hình thức: LBO, vốn tăng trưởng, mezzanine, vốn mạo hiểm; các giai đoạn từ hạt giống tới tái cơ cấu" }, n: [["stowell2024", "p. 358"], ["demaria2020", "p. 14"]] },
    { y: { en: "Fees: 2% of commitments, 20% carry after a preferred return (often 8%), clawback", vi: "Phí: 2% vốn cam kết, 20% lợi nhuận chia sau lợi suất ưu tiên (thường 8%), điều khoản thu hồi" }, n: [["stowell2024", "pp. 275, 448–451"]] },
    { y: { en: "Investment process; motives of fund and target", vi: "Quy trình đầu tư; động cơ của quỹ và doanh nghiệp mục tiêu" }, n: [["rp2020", "pp. 169–188"]], co: "th" },
    { y: { en: "Venture capital rounds; pre-money and post-money", vi: "Các vòng gọi vốn mạo hiểm; định giá trước và sau khi rót vốn" }, n: [["berkDeMarzo2017", "pp. 866–868"]] },
    { y: { en: "Worked example: $5m at $20m post-money", vi: "Ví dụ: 5 triệu USD ở mức định giá sau rót vốn 20 triệu USD" }, co: "tt,mh" },
    { y: { en: "Deep dive: sources of buyout returns — operations, multiple expansion, debt paydown, leverage", vi: "Đọc sâu: nguồn lợi nhuận của LBO — vận hành, mở rộng bội số, trả nợ, đòn bẩy" }, n: [["rp2020", "pp. 181–184"], ["kaplanStromberg2009"]] },
  ]);

  /* ============================ CHƯƠNG 4 (đặt trước để gom theo tệp; thứ tự hiển thị theo mục) ============================ */
  M("4|4.1", [
    { y: { en: "Asset management: banks manage outside capital for fees; asset and wealth management divisions", vi: "Quản lý tài sản: ngân hàng quản lý vốn của người khác để thu phí; khối quản lý tài sản và gia sản" }, n: [["stowell2024", "pp. 10, 24, 157"]] },
    { y: { en: "Segments and vehicles; managed (segregated) accounts for institutions", vi: "Phân khúc và công cụ; tài khoản quản lý riêng cho tổ chức" }, n: [["stowell2024", "p. 157"]] },
    { y: { en: "Fees by asset class: index/ETF 0.05–0.3%, fixed income 0.3–1.2%, equity 0.5–1.7%, alternatives 1–2% + 10–20%", vi: "Phí theo loại tài sản: chỉ số/ETF 0,05–0,3%, trái phiếu 0,3–1,2%, cổ phiếu 0,5–1,7%, tài sản thay thế 1–2% + 10–20%" }, n: [["stowell2024", "pp. 157–158"]] },
    { y: { en: "Open-end and closed-end public funds (Vietnam)", vi: "Quỹ đại chúng dạng mở và dạng đóng (Việt Nam)" }, n: [["luatCK2019", "Arts. 99, 111–112"]], co: "vn" },
    { y: { en: "Advantages; why banks value recurring fee income; cross-selling", vi: "Ưu điểm; vì sao ngân hàng coi trọng thu nhập phí định kỳ; bán chéo" }, n: [["stowell2024", "p. 10"]], co: "th" },
    { y: { en: "Deep dive: conflicts in asset management and the external-manager policy", vi: "Đọc sâu: xung đột lợi ích trong quản lý tài sản và chính sách dùng nhà quản lý bên ngoài" }, n: [["stowell2024", "pp. 24, 157"]], co: "th" },
  ]);

  M("4|4.2", [
    { y: { en: "Vietnam: public fund offering ≥ VND 50 bn, plan, supervisory bank, listing (except open-end)", vi: "Việt Nam: chào bán chứng chỉ quỹ ≥ 50 tỷ đồng, phương án, ngân hàng giám sát, niêm yết (trừ quỹ mở)" }, n: [["luatCK2019", "Art. 15(5)"]], co: "vn" },
    { y: { en: "Investment process, NAV, custody and reporting", vi: "Quy trình đầu tư, NAV, lưu ký và báo cáo" }, n: [["tranTuanVinh2023"]], co: "th", g: KHUNG },
    { y: { en: "Fee formulas; high-water mark (hedge funds)", vi: "Công thức phí; mốc giá trị cao nhất (quỹ đầu cơ)" }, n: [["stowell2024", "pp. 157, 276"]] },
    { y: { en: "Worked example: $500m, 2% and 20% over 8%", vi: "Ví dụ: 500 triệu USD, 2% và 20% trên ngưỡng 8%" }, co: "tt,mh" },
    { y: { en: "Active vs passive: average net alpha about −0.34%; past winners hard to identify", vi: "Chủ động và thụ động: alpha ròng bình quân khoảng −0,34%; khó nhận ra trước quỹ thắng" }, n: [["berkDeMarzo2017", "pp. 490–492"]] },
    { y: { en: "Deep dive: 1,000 million at 9% for 20 years with 0/1/2% fees", vi: "Đọc sâu: 1.000 triệu đồng, 9%/năm trong 20 năm với phí 0/1/2%" }, co: "tt,mh" },
  ]);

  M("4|4.3", [
    { y: { en: "Discretionary vs advisory mandates; planning–execution–feedback; investment policy statement", vi: "Uỷ thác toàn quyền và tư vấn; lập kế hoạch – thực hiện – phản hồi; bản chính sách đầu tư" }, co: "th",
      g: { en: "Standard portfolio-management framework; no library source gives it in this form.", vi: "Khung quản lý danh mục chuẩn; sách trong thư viện không trình bày đúng dạng này." } },
    { y: { en: "Asset allocation (investment policy) explains about 94% of the variation in total returns", vi: "Phân bổ tài sản (chính sách đầu tư) giải thích khoảng 94% biến động tổng lợi suất" }, n: [["brinson1986"]] },
    { y: { en: "Sharpe ratio", vi: "Hệ số Sharpe" }, n: [["berkDeMarzo2017", "p. 411"]] },
    { y: { en: "Information ratio, tracking error, benchmark quality", vi: "Hệ số thông tin, sai số bám chỉ số, chất lượng chỉ số chuẩn" }, co: "th" },
    { y: { en: "Deep dive: rebalancing and performance attribution", vi: "Đọc sâu: tái cân bằng và phân tích nguồn lợi suất" }, n: [["brinson1986"]], co: "th" },
  ]);

  M("4|4.4", [
    { y: { en: "Wealth/private banking for HNWIs; fiduciary obligation to choose the best funds, internal or external", vi: "Quản lý gia sản/ngân hàng tư nhân cho khách hàng giàu có; nghĩa vụ uỷ thác chọn quỹ tốt nhất, trong hay ngoài" }, n: [["stowell2024", "p. 24"], ["caselli2021", "p. 18"]] },
    { y: { en: "Segments, process, suitability", vi: "Phân khúc, quy trình, tính phù hợp" }, co: "th" },
    { y: { en: "Vietnam: ban on tying non-compulsory insurance to banking services; private bonds only for professional investors", vi: "Việt Nam: cấm gắn bán bảo hiểm không bắt buộc với dịch vụ ngân hàng; trái phiếu riêng lẻ chỉ cho nhà đầu tư chuyên nghiệp" },
      n: [["luatTCTD2024", "Art. 15"], ["luatDN2020", "Art. 128"]], co: "vn" },
    { y: { en: "Deep dive: familiarity bias, overconfidence and excessive trading", vi: "Đọc sâu: thiên lệch quen thuộc, tự tin thái quá và giao dịch quá mức" }, n: [["berkDeMarzo2017", "pp. 482–484"]] },
    { y: { en: "Deep dive: tax, life-cycle and human capital", vi: "Đọc sâu: thuế, vòng đời và vốn con người" }, co: "th" },
  ]);

  /* ============================ CHƯƠNG 5 ============================ */
  M("5|5.1", [
    { y: { en: "Vietnam's single set of listing conditions (capital, UPCoM history, ROE, dispersion, insider lock-up, adviser)", vi: "Bộ điều kiện niêm yết chung của Việt Nam (vốn, lịch sử UPCoM, ROE, phân tán sở hữu, hạn chế chuyển nhượng của người nội bộ, tổ chức tư vấn)" },
      n: [["nd155_2020", "Art. 109"]], co: "vn", g: { en: "Decree as issued; check amendments by Decree 245/2025.", vi: "Theo bản ban hành; cần kiểm tra sửa đổi của Nghị định 245/2025." } },
    { y: { en: "Advantages and disadvantages of going public", vi: "Ưu và nhược điểm của việc niêm yết" }, n: [["stowell2024", "pp. 68–69"], ["berkDeMarzo2017", "p. 872"]] },
    { y: { en: "Listing advisory process", vi: "Quy trình tư vấn niêm yết" }, n: [["rp2020", "Chapter 9, pp. 415–440"]], co: "th" },
    { y: { en: "Enterprise value and equity value; EV multiples independent of capital structure", vi: "Giá trị doanh nghiệp và giá trị vốn chủ; bội số EV độc lập với cấu trúc vốn" }, n: [["rp2020", "pp. 13, 35"]] },
    { y: { en: "Worked example: EBITDA $120m × 9.0×", vi: "Ví dụ: EBITDA 120 triệu USD × 9,0 lần" }, co: "tt,mh" },
    { y: { en: "Use the median rather than the mean multiple", vi: "Dùng trung vị thay vì trung bình của bội số" }, co: "th" },
    { y: { en: "Deep dive: book-building, lock-ups and stabilisation", vi: "Đọc sâu: dựng sổ lệnh, hạn chế chuyển nhượng và bình ổn giá" }, n: [["rp2020", "p. 394"], ["berkDeMarzo2017", "p. 880"]] },
  ]);

  M("5|5.2", [
    { y: { en: "Only joint-stock companies can be public companies and list; public-company status", vi: "Chỉ công ty cổ phần mới có thể là công ty đại chúng và niêm yết; tư cách công ty đại chúng" }, n: [["luatCK2019", "Art. 32"], ["nd155_2020", "Art. 109"]], co: "vn" },
    { y: { en: "LLC capital transfers subject to members' pre-emption; JSC shares freely transferable", vi: "Chuyển nhượng vốn góp trong công ty TNHH phải chào thành viên còn lại; cổ phần tự do chuyển nhượng" }, n: [["luatDN2020", "Arts. 52, 127"]], co: "vn" },
    { y: { en: "JSC governance models: supervisory board or audit committee with ≥ 20% independent directors", vi: "Mô hình quản trị công ty cổ phần: ban kiểm soát hoặc uỷ ban kiểm toán với ≥ 20% thành viên HĐQT độc lập" }, n: [["luatDN2020", "Art. 137"]], co: "vn" },
    { y: { en: "LLC → JSC conversion methods", vi: "Các phương thức chuyển công ty TNHH thành công ty cổ phần" }, n: [["luatDN2020", "Art. 202"]], co: "vn" },
    { y: { en: "SOE equitisation: forms, initial-sale methods, disclosure and listing, valuation including land-use rights and goodwill", vi: "Cổ phần hoá DNNN: hình thức, phương thức bán lần đầu, công khai thông tin và niêm yết, định giá kể cả quyền sử dụng đất và lợi thế kinh doanh" },
      n: [["nd126_2017", "Arts. 5, 7, 11, 13, 29–31"]], co: "vn" },
    { y: { en: "Deep dive: why conversion is done early (audit, governance, tax)", vi: "Đọc sâu: vì sao chuyển đổi phải làm sớm (kiểm toán, quản trị, thuế)" }, co: "th" },
  ]);

  M("5|5.3", [
    { y: { en: "Divestiture, equity carve-out, spin-off, split-off, split-up", vi: "Thoái vốn, tách một phần để IPO, chia tách, hoán đổi tách, chia nhỏ" }, n: [["gaughan2018", "p. 390"], ["stowell2024", "p. 98"]] },
    { y: { en: "Spin-offs as tax-free (divisive) reorganisations", vi: "Chia tách như tái tổ chức miễn thuế" }, n: [["gaughan2018", "p. 616"]] },
    { y: { en: "Conglomerate (diversification) discount; reverse synergy", vi: "Chiết khấu đa ngành; cộng hưởng ngược" }, n: [["gaughan2018", "pp. 150, 397"]] },
    { y: { en: "Sum-of-the-parts valuation", vi: "Định giá tổng các phần" }, n: [["rp2020", "p. 131"]] },
    { y: { en: "Distressed restructuring: liquidation recovery as the benchmark; absolute priority rule", vi: "Tái cấu trúc khi kiệt quệ: giá trị thu hồi khi thanh lý là chuẩn so sánh; nguyên tắc ưu tiên tuyệt đối" }, n: [["gaughan2018", "pp. 456, 471"]] },
    { y: { en: "Deep dive: three-division SOTP example (discount 25.3%)", vi: "Đọc sâu: ví dụ SOTP ba mảng (chiết khấu 25,3%)" }, co: "tt,mh" },
  ]);

  M("5|5.4", [
    { y: { en: "WACC; trade-off theory", vi: "WACC; lý thuyết đánh đổi" }, n: [["berkDeMarzo2017", "p. 594"]] },
    { y: { en: "Pecking order (asymmetric information)", vi: "Lý thuyết trật tự phân hạng (bất cân xứng thông tin)" }, n: [["berkDeMarzo2017", "pp. 613–615"], ["myersMajluf1984"]] },
    { y: { en: "Agency view: free cash flow and the discipline of debt", vi: "Góc nhìn đại diện: dòng tiền tự do và kỷ luật của nợ" }, n: [["berkDeMarzo2017", "pp. 605–606"]] },
    { y: { en: "Leverage rules of thumb: net debt/EBITDA ~3×, EBITDA/interest > 4×; LBOs around 5×", vi: "Quy tắc kinh nghiệm về đòn bẩy: nợ ròng/EBITDA ~3×, EBITDA/lãi vay > 4×; LBO quanh 5×" }, n: [["caselli2021", "p. 523"], ["rp2020", "p. 254"]] },
    { y: { en: "Deep dive: buyback signals (tender offers +12%, Dutch auctions +8%)", vi: "Đọc sâu: tín hiệu mua lại cổ phiếu (chào mua giá cố định +12%, đấu giá Hà Lan +8%)" }, n: [["berkDeMarzo2017", "pp. 656–657"]] },
    { y: { en: "Deep dive: debt-for-equity swaps and avoiding liquidation costs", vi: "Đọc sâu: hoán đổi nợ thành vốn và tránh chi phí thanh lý" }, n: [["gaughan2018", "p. 456"]], co: "th" },
  ]);

  M("5|5.5", [
    { y: { en: "Definition and purposes of corporate governance; recognised codes", vi: "Khái niệm và mục đích của quản trị công ty; các bộ nguyên tắc được thừa nhận" }, n: [["oecd2023"], ["vnCGcode2019"]], co: "th" },
    { y: { en: "Weak governance is priced: stronger shareholder rights, higher firm value", vi: "Quản trị yếu bị định giá thấp: quyền cổ đông mạnh hơn, giá trị doanh nghiệp cao hơn" }, n: [["gompers2003"]] },
    { y: { en: "Vietnam: related-party transaction approval, cumulative voting, pre-emptive offers, 65% supermajority, 25% mandatory tender offer", vi: "Việt Nam: chấp thuận giao dịch với người có liên quan, bầu dồn phiếu, chào bán cho cổ đông hiện hữu, đa số 65%, chào mua công khai bắt buộc ở 25%" },
      n: [["luatDN2020", "Arts. 124, 148, 167"], ["luatCK2019", "Art. 35"]], co: "vn" },
    { y: { en: "Board independence and audit committees", vi: "Tính độc lập của HĐQT và uỷ ban kiểm toán" }, n: [["luatDN2020", "Art. 137"]], co: "vn" },
    { y: { en: "Deep dive: manager–shareholder vs controller–minority conflicts", vi: "Đọc sâu: xung đột nhà quản lý – cổ đông và cổ đông kiểm soát – cổ đông thiểu số" }, n: [["berkDeMarzo2017", "p. 45"]], co: "th" },
  ]);

  /* ============================ CHƯƠNG 6 ============================ */
  M("6|6.1", [
    { y: { en: "Brokerage as agency (vs principal) business", vi: "Môi giới là hoạt động đại lý (so với giao dịch gốc)" }, n: [["stowell2024", "p. 136"]] },
    { y: { en: "Vietnam: segregation, written contracts, client-order priority, suitability, records", vi: "Việt Nam: tách biệt tài sản, hợp đồng bằng văn bản, ưu tiên lệnh khách hàng, tính phù hợp, lưu hồ sơ" }, n: [["luatCK2019", "Art. 89"]], co: "vn" },
    { y: { en: "Order matching by price then time priority", vi: "Khớp lệnh theo ưu tiên giá rồi thời gian" }, n: [["tt120_2020", "Art. 4(1)"]], co: "vn" },
    { y: { en: "Order types (LO, MP/MTL, ATO, ATC) and session structure", vi: "Các loại lệnh (LO, MP/MTL, ATO, ATC) và cấu trúc phiên" }, co: "vn,th",
      g: { en: "Set by the exchange's trading regulation under Circular 120/2020, Art. 4(3); check the current regulation.", vi: "Do quy chế giao dịch của Sở quy định theo khoản 3 Điều 4 Thông tư 120/2020; cần kiểm tra quy chế hiện hành." } },
    { y: { en: "Market makers supply liquidity and price discovery", vi: "Nhà tạo lập thị trường cung cấp thanh khoản và khám phá giá" }, n: [["stowell2024", "pp. 129–130"]] },
    { y: { en: "Spread components: order processing, adverse selection, inventory", vi: "Các cấu phần của chênh lệch giá: chi phí xử lý lệnh, lựa chọn bất lợi, tồn kho" }, n: [["huangStoll1997"]] },
    { y: { en: "Worked example: quote 20.00 / 20.10", vi: "Ví dụ: yết giá 20,00 / 20,10" }, co: "tt,mh" },
    { y: { en: "Deep dive: best execution; soft dollars; MiFID II research unbundling", vi: "Đọc sâu: thực thi tốt nhất; soft dollar; MiFID II tách phí nghiên cứu" }, n: [["stowell2024", "p. 166"], ["caselli2021", "p. 107"]] },
  ]);

  M("6|6.2", [
    { y: { en: "Reading the Vietnamese trading board (reference, ceiling, floor, best three bids/asks, colours)", vi: "Đọc bảng điện tử Việt Nam (tham chiếu, trần, sàn, ba giá mua/bán tốt nhất, màu sắc)" }, co: "vn,th",
      g: { en: "Market convention of the Vietnamese exchanges; price bands and order types follow the exchange's trading regulation.", vi: "Quy ước của các sở giao dịch Việt Nam; biên độ giá và loại lệnh theo quy chế giao dịch của Sở." } },
    { y: { en: "Online trading controls; commission compression; brokers monetising margin and securities lending", vi: "Kiểm soát giao dịch trực tuyến; phí môi giới bị nén; công ty chứng khoán kiếm tiền từ cho vay ký quỹ và cho vay chứng khoán" }, n: [["stowell2024", "pp. 139–141"]], co: "th" },
    { y: { en: "Deep dive: execution algorithms, high-frequency trading and its regulation", vi: "Đọc sâu: thuật toán khớp lệnh, giao dịch tần suất cao và quy định quản lý" }, n: [["stowell2024", "p. 338"]], co: "th" },
  ]);

  M("6|6.3", [
    { y: { en: "Proprietary trading vs market making; the Volcker Rule (3% limits)", vi: "Tự doanh và tạo lập thị trường; Quy tắc Volcker (giới hạn 3%)" }, n: [["stowell2024", "pp. 49, 151"]] },
    { y: { en: "Client orders before the firm's own; conflict prevention and internal control", vi: "Lệnh khách hàng trước lệnh của công ty; ngăn ngừa xung đột lợi ích và kiểm soát nội bộ" }, n: [["luatCK2019", "Art. 89(1), (5)"]], co: "vn" },
    { y: { en: "Value at Risk: definition, 1-day 95% convention, limitations", vi: "Giá trị chịu rủi ro: khái niệm, thông lệ 1 ngày 95%, hạn chế" }, n: [["stowell2024", "p. 152"]] },
    { y: { en: "Deep dive: layered controls; stress testing beside VaR", vi: "Đọc sâu: kiểm soát nhiều lớp; kiểm tra sức chịu đựng bên cạnh VaR" }, n: [["stowell2024", "pp. 152, 154"]], co: "th" },
  ]);

  M("6|6.4", [
    { y: { en: "Margin financing and margin calls; prime-brokerage margin (Archegos 2021)", vi: "Cho vay ký quỹ và lệnh gọi ký quỹ; ký quỹ trong môi giới chính (Archegos 2021)" }, n: [["stowell2024", "pp. 139, 141"]] },
    { y: { en: "Vietnam: margin contract, marginable list, initial/maintenance ratios, no margin for foreign investors", vi: "Việt Nam: hợp đồng ký quỹ, danh mục chứng khoán được ký quỹ, tỷ lệ ký quỹ ban đầu/duy trì, nhà đầu tư nước ngoài không được ký quỹ" }, n: [["tt120_2020", "Art. 9"]], co: "vn" },
    { y: { en: "Formulas and worked example ($50, 50%/25%)", vi: "Công thức và ví dụ (50 USD, 50%/25%)" }, co: "tt,mh" },
    { y: { en: "Securities lending: collateral 2–5% above value, marked daily; rebate; recall; short squeeze", vi: "Cho vay chứng khoán: tài sản bảo đảm cao hơn giá trị 2–5%, định giá hằng ngày; lãi hoàn trả; quyền thu hồi; ép bán khống" }, n: [["stowell2024", "pp. 139–140, 283"]] },
    { y: { en: "Short-sale constraints reduce price efficiency without reducing instability", vi: "Ràng buộc bán khống làm giảm hiệu quả giá mà không giảm bất ổn" }, n: [["saffi2011"]] },
    { y: { en: "Vietnam: covered short selling via VSDC lending; intraday trading", vi: "Việt Nam: bán khống có bảo đảm qua hệ thống vay chứng khoán của VSDC; giao dịch trong ngày" }, n: [["tt120_2020", "Arts. 10–11"]], co: "vn" },
    { y: { en: "Deep dive: 2,000 shares at 50,000 đ; margin call at 35,714 đ", vi: "Đọc sâu: 2.000 cổ phiếu giá 50.000 đ; gọi ký quỹ tại 35.714 đ" }, co: "tt,mh" },
  ]);

  /* ============================ CHƯƠNG 3 ============================ */
  M("3|3.1", [
    { y: { en: "Merger (A + B = A) and consolidation (A + B = C); Vietnamese legal definitions", vi: "Sáp nhập (A + B = A) và hợp nhất (A + B = C); định nghĩa theo luật Việt Nam" },
      n: [["gaughan2018", "p. 13"], ["luatDN2020", "Arts. 200–201"]] },
    { y: { en: "Share (entity) deal vs asset deal: liabilities, step-up, seller preference", vi: "Mua cổ phần (pháp nhân) và mua tài sản: nợ phải trả, đánh giá lại tài sản, ưu tiên của bên bán" }, n: [["gaughan2018", "pp. 24–25"]] },
    { y: { en: "Motives: synergy (revenue enhancement harder than cost reduction), managerial motives", vi: "Động cơ: cộng hưởng (tăng doanh thu khó hơn giảm chi phí), động cơ của nhà quản lý" }, n: [["gaughan2018", "pp. 137–139, 494"]] },
    { y: { en: "Horizontal, vertical, conglomerate; the diversification discount", vi: "Theo chiều ngang, chiều dọc, tổ hợp; chiết khấu đa ngành" }, n: [["gaughan2018", "pp. 14, 150"]] },
    { y: { en: "Deep dive: premium 43%, target +15%, acquirer +1% (US 1980–2005); $240 bn acquirer losses 1998–2001", vi: "Đọc sâu: thặng dư 43%, bên bán +15%, bên mua +1% (Mỹ 1980–2005); bên mua mất 240 tỷ USD giai đoạn 1998–2001" },
      n: [["berkDeMarzo2017", "pp. 997–998"], ["moeller2005"], ["andradeMitchellStafford2001"]] },
    { y: { en: "Deep dive: winner's curse and hubris; bidders overpay", vi: "Đọc sâu: lời nguyền người thắng và sự ngạo mạn; bên mua trả quá cao" }, n: [["gaughan2018", "pp. 169–170, 174"]] },
    { y: { en: "Deep dive: cash vs shares and announcement returns; diversification discount", vi: "Đọc sâu: tiền mặt so với cổ phiếu và lợi suất công bố; chiết khấu đa ngành" }, n: [["travlos1987"], ["gaughan2018", "pp. 150, 590"]] },
    { y: { en: "Deep dive: accretion is not value; PV(synergies) must exceed the premium", vi: "Đọc sâu: tăng EPS không phải là tạo giá trị; PV(cộng hưởng) phải lớn hơn thặng dư" }, n: [["berkDeMarzo2017", "p. 1005"], ["rp2020", "p. 343"]] },
  ]);

  M("3|3.2", [
    { y: { en: "Choosing the process: broad vs targeted auction vs negotiated sale", vi: "Chọn quy trình: đấu giá rộng, đấu giá hẹp hay thương lượng" }, n: [["rp2020", "pp. 275–278, 306"]] },
    { y: { en: "Auction stages: preparation, first round (teaser, CIM, IOIs), second round, negotiation, closing", vi: "Các giai đoạn đấu giá: chuẩn bị, vòng 1 (teaser, CIM, chào giá sơ bộ), vòng 2, đàm phán, hoàn tất" }, n: [["rp2020", "pp. 280–282, 297"]] },
    { y: { en: "Data room and due diligence; definitive agreement (reps, warranties, earn-outs)", vi: "Phòng dữ liệu và thẩm định; hợp đồng chính thức (cam đoan, bảo đảm, earn-out)" }, n: [["rp2020", "pp. 172, 297"]] },
    { y: { en: "Fairness opinion", vi: "Ý kiến về tính hợp lý của giá" }, n: [["rp2020", "pp. 22, 301"], ["stowell2024", "p. 89"]] },
    { y: { en: "Deep dive: go-shop and fiduciary out; exclusivity and Revlon duties", vi: "Đọc sâu: go-shop và quyền rút lui theo nghĩa vụ uỷ thác; độc quyền và nghĩa vụ Revlon" },
      n: [["stowell2024", "p. 372"], ["heinz2013proxy", "Background of the Merger"], ["gaughan2018", "p. 23"]] },
    { y: { en: "Deep dive: exclusivity only after binding bids; two-stage diligence", vi: "Đọc sâu: chỉ trao độc quyền sau chào giá ràng buộc; thẩm định hai giai đoạn" }, co: "th", n: [["rp2020", "p. 280"]] },
  ]);

  M("3|3.3", [
    { y: { en: "Comparables, precedents (control premium and synergies), DCF; valuation hierarchy", vi: "So sánh niêm yết, giao dịch tiền lệ (thặng dư kiểm soát và cộng hưởng), DCF; thứ bậc định giá" }, n: [["rp2020", "pp. 75, 328"]] },
    { y: { en: "Premium paid = offer ÷ unaffected price − 1; typical public premiums", vi: "Thặng dư = giá chào ÷ giá chưa bị ảnh hưởng − 1; mức thặng dư điển hình" },
      n: [["rp2020", "pp. 96, 110"], ["berkDeMarzo2017", "p. 997"], ["gaughan2018", "p. 584"]] },
    { y: { en: "Synergies vs premium test", vi: "Phép thử cộng hưởng so với thặng dư" }, n: [["berkDeMarzo2017", "p. 1005"]] },
    { y: { en: "Accretion/dilution; P/E rule of thumb for all-stock deals", vi: "Tăng/giảm EPS; quy tắc P/E cho thương vụ toàn cổ phiếu" }, n: [["rp2020", "p. 343"]] },
    { y: { en: "Worked example: EPS $4.00 → $4.20", vi: "Ví dụ: EPS 4,00 → 4,20 USD" }, co: "tt,mh" },
    { y: { en: "Deep dive: football field; LBO analysis as a floor", vi: "Đọc sâu: biểu đồ football field; phân tích LBO làm mức sàn" }, n: [["rp2020", "pp. 74, 328–329"]] },
    { y: { en: "Deep dive: terminal value often three-quarters or more of DCF value", vi: "Đọc sâu: giá trị cuối kỳ thường chiếm từ ba phần tư giá trị DCF trở lên" }, n: [["rp2020", "p. 138"]] },
    { y: { en: "Deep dive: EBITDA 185 bn example", vi: "Đọc sâu: ví dụ EBITDA 185 tỷ" }, co: "tt,mh" },
  ]);

  M("3|3.4", [
    { y: { en: "Cash vs shares: risk sharing, tax, signalling", vi: "Tiền mặt so với cổ phiếu: chia sẻ rủi ro, thuế, tín hiệu" }, n: [["gaughan2018", "pp. 588–590"], ["travlos1987"], ["myersMajluf1984"]] },
    { y: { en: "Tax-free reorganisations; stock consideration lowers multiples paid; collars", vi: "Tái tổ chức miễn thuế; trả bằng cổ phiếu làm bội số thấp hơn; biên độ (collar)" }, n: [["stowell2024", "p. 97"], ["rp2020", "pp. 81, 91"]] },
    { y: { en: "Bridge loans; term loans A/B; high-yield bonds; mezzanine/PIK", vi: "Vay cầu nối; vay kỳ hạn A/B; trái phiếu lợi suất cao; mezzanine/PIK" }, n: [["rp2020", "pp. 173–174, 195–198"]] },
    { y: { en: "LBO: characteristics of a strong candidate; returns from EBITDA growth, multiple expansion, debt paydown", vi: "LBO: đặc điểm doanh nghiệp phù hợp; lợi nhuận từ tăng EBITDA, mở rộng bội số, trả nợ" }, n: [["rp2020", "pp. 169, 177–184"]] },
    { y: { en: "Staple financing and its conflict (Del Monte, Rural/Metro)", vi: "Tài trợ đính kèm (staple) và xung đột lợi ích (Del Monte, Rural/Metro)" }, n: [["stowell2024", "pp. 123–125"]] },
    { y: { en: "Deep dive: 3,900 bn acquisition paid in cash vs 65 million new shares", vi: "Đọc sâu: thương vụ 3.900 tỷ trả bằng tiền so với 65 triệu cổ phiếu mới" }, co: "tt,mh" },
  ]);

  M("3|3.5", [
    { y: { en: "Integration: what determines whether synergies are realised", vi: "Tích hợp: điều gì quyết định cộng hưởng có thành hiện thực" }, co: "th", n: [["gaughan2018", "p. 138"]] },
    { y: { en: "Empirical findings on gains to targets and acquirers", vi: "Bằng chứng về lợi ích của bên bán và bên mua" }, n: [["berkDeMarzo2017", "pp. 997–998"], ["moeller2005"]] },
    { y: { en: "Poison pills (trigger 10–20%), staggered boards, supermajority, golden parachutes", vi: "Viên thuốc độc (ngưỡng 10–20%), hội đồng luân phiên, siêu đa số, dù vàng" }, n: [["gaughan2018", "pp. 26, 188, 202, 494"]] },
    { y: { en: "White knight and white squire, lockups/crown jewels, Pac-Man, greenmail, litigation, recapitalisation", vi: "Hiệp sĩ trắng và cận vệ trắng, lockup/viên ngọc quý, Pac-Man, mua lại cổ phần giá cao, kiện tụng, tái cấu trúc vốn" },
      n: [["gaughan2018", "pp. 61, 211–212, 216–217, 222"], ["berkDeMarzo2017", "p. 1013"]] },
    { y: { en: "Evidence: pill-protected targets got higher premiums; staggered boards nearly double the chance of staying independent", vi: "Bằng chứng: doanh nghiệp có viên thuốc độc nhận thặng dư cao hơn; hội đồng luân phiên làm khả năng giữ độc lập tăng gần gấp đôi" }, n: [["gaughan2018", "pp. 198, 202"]] },
    { y: { en: "Alternatives: joint ventures, alliances, internal growth", vi: "Phương án thay thế: liên doanh, liên minh, tăng trưởng nội tại" }, n: [["gaughan2018", "p. 131"]] },
    { y: { en: "Deep dive: poison pill arithmetic (20% → 11.1%)", vi: "Đọc sâu: tính toán viên thuốc độc (20% → 11,1%)" }, co: "tt,mh" },
    { y: { en: "Deep dive: golden parachutes — share prices rise on adoption; more bidders and higher premiums; Revlon and lockups", vi: "Đọc sâu: dù vàng — giá cổ phiếu tăng khi áp dụng; nhiều bên trả giá và thặng dư cao hơn; Revlon và lockup" },
      n: [["berkDeMarzo2017", "p. 1013"], ["gaughan2018", "pp. 98, 217"]] },
  ]);
})();
