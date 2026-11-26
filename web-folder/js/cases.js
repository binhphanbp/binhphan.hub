/* =====================================================================
   BAF736 Investment Banking — CASE STUDY LIBRARY  (v1, 2026)
   Thư viện tình huống thực tế, song ngữ Anh–Việt.

   Cấu trúc: CASES["<chương>|<mã mục>"] = [ {...case}, … ]
   Mỗi case: { id, tag, title/titleVi, deal (bảng số liệu), body/bodyVi,
               fig (SVG tuỳ chọn), qs/qsVi (câu hỏi thảo luận), src }

   NGUYÊN TẮC BIÊN SOẠN
   • Chỉ dùng thương vụ CÓ THẬT, đã được công bố rộng rãi trên báo chí tài chính
     và hồ sơ pháp lý (SEC filings, thông cáo của doanh nghiệp, báo cáo thường niên).
   • Số liệu là con số ĐƯỢC CÔNG BỐ RỘNG RÃI, làm tròn hợp lý; sinh viên PHẢI đối
     chiếu lại với nguồn gốc (bản cáo bạch, 8-K/S-1, báo cáo kiểm toán) khi trích dẫn
     trong tiểu luận — mục "Nguồn tra cứu" ở cuối mỗi tình huống chỉ rõ nơi tra.
   • Mỗi tình huống gắn với đúng nghiệp vụ đang học, kết thúc bằng câu hỏi thảo luận
     bám chuẩn đầu ra (CLO) để dùng cho bài tập nhóm (Đánh giá quá trình 2).
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- tiện ích vẽ sơ đồ nhỏ gọn (độc lập với figures.js) ---------- */
  var C = { brand: "#14507d", dark: "#0e3a5c", soft: "#e3eef8", green: "#0e9f6e",
            amber: "#b45309", red: "#b91c1c", grey: "#64748b", line: "#94a3b8" };
  function box(x, y, w, h, fill, stroke, r) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (r || 8) +
           '" fill="' + (fill || "#fff") + '" stroke="' + (stroke || C.line) + '" stroke-width="1.5"/>';
  }
  function txt(x, y, s, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || "middle") +
           '" font-size="' + (o.fs || 12) + '" font-weight="' + (o.fw || 400) +
           '" fill="' + (o.c || "#0f172a") + '" font-family="system-ui,Segoe UI,sans-serif">' + s + '</text>';
  }
  function arr(x1, y1, x2, y2, c, dash) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (c || C.brand) +
           '" stroke-width="1.8" marker-end="url(#cah)"' + (dash ? ' stroke-dasharray="5 4"' : '') + '/>';
  }
  var DEFS = '<defs><marker id="cah" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto">' +
             '<path d="M0,0 L0,6 L8,3 z" fill="' + C.brand + '"/></marker></defs>';
  function svg(w, h, body) {
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" width="100%" style="max-width:' + w + 'px" ' +
           'xmlns="http://www.w3.org/2000/svg" role="img">' + DEFS + body + '</svg>';
  }
  function lines(x, y, arr2, o) {
    o = o || {};
    return arr2.map(function (s, i) { return txt(x, y + i * (o.lh || 15), s, o); }).join("");
  }

  var CASES = {};

  /* =====================================================================
     CHƯƠNG 1 — TỔNG QUAN NGÂN HÀNG ĐẦU TƯ
     ===================================================================== */

  CASES["1|1.2"] = [{
    id: "c1-2008",
    tag: "Khủng hoảng 2008 · Mô hình & khung pháp lý",
    title: "2008: the end of the independent US investment bank",
    titleVi: "2008: hồi kết của mô hình ngân hàng đầu tư độc lập ở Mỹ",
    deal: [
      ["Bear Stearns", "Mar 2008 — bán cho JPMorgan Chase, giá ban đầu 2 USD/cp (sau nâng lên 10 USD/cp), có bảo lãnh của Fed"],
      ["Lehman Brothers", "15/9/2008 — nộp đơn phá sản Chương 11, nợ ~613 tỷ USD: vụ phá sản lớn nhất lịch sử Mỹ"],
      ["Merrill Lynch", "9/2008 — bán cho Bank of America (~50 tỷ USD bằng cổ phiếu)"],
      ["Goldman Sachs &amp; Morgan Stanley", "21/9/2008 — Fed chấp thuận chuyển thành <b>công ty mẹ ngân hàng</b> (bank holding company)"]
    ],
    body: `
      <p>Before 2008 the five large US "bulge-bracket" independent investment banks funded long-dated,
      illiquid assets (mortgage securities) with very short-term wholesale money — chiefly overnight
      <b>repurchase agreements</b>. Leverage reached roughly <b>30:1</b>. Because they were not deposit-taking
      banks they had <b>no access to the Federal Reserve's discount window</b> and no deposit insurance.</p>
      <p>When counterparties refused to roll the repo, the funding disappeared in days, not months. This is
      precisely the vulnerability of the IB funding model set out in section 1.1: <i>an investment bank may
      not take deposits from the public</i>.</p>
      <p>By converting into bank holding companies, Goldman Sachs and Morgan Stanley accepted Federal Reserve
      supervision and stricter capital rules in exchange for permanent access to central-bank liquidity.
      The independent investment bank as a stand-alone legal model effectively ended.</p>`,
    bodyVi: `
      <p>Trước 2008, năm ngân hàng đầu tư độc lập lớn của Mỹ tài trợ cho tài sản dài hạn, kém thanh khoản
      (chứng khoán thế chấp bất động sản) bằng nguồn vốn bán buôn <b>rất ngắn hạn</b> — chủ yếu là hợp đồng
      <b>mua lại (repo) qua đêm</b>. Đòn bẩy lên tới khoảng <b>30:1</b>. Vì không phải ngân hàng nhận tiền gửi,
      họ <b>không được vay tái chiết khấu từ Fed</b> và không có bảo hiểm tiền gửi.</p>
      <p>Khi đối tác từ chối gia hạn repo, nguồn vốn biến mất trong vài ngày chứ không phải vài tháng. Đây
      chính là điểm yếu của mô hình huy động vốn ngân hàng đầu tư đã nêu ở mục 1.1: <i>ngân hàng đầu tư không
      được nhận tiền gửi từ công chúng</i>.</p>
      <p>Khi chuyển thành công ty mẹ ngân hàng, Goldman Sachs và Morgan Stanley chấp nhận chịu sự giám sát của
      Fed và quy định vốn chặt hơn, đổi lại được tiếp cận thanh khoản của ngân hàng trung ương một cách lâu dài.
      Mô hình ngân hàng đầu tư độc lập trên thực tế đã chấm dứt.</p>`,
    fig: {
      title: "Vòng xoáy thanh khoản của mô hình ngân hàng đầu tư độc lập",
      cap: "Tài sản dài hạn + vốn qua đêm + đòn bẩy cao = rủi ro tái cấp vốn. Ngân hàng thương mại có tiền gửi và cửa sổ chiết khấu nên chịu được cú sốc này.",
      svg: svg(880, 250,
        box(20, 30, 190, 70, "#fff", C.brand) + txt(115, 55, "Tài sản dài hạn", { fw: 700, c: C.dark }) + lines(115, 74, ["Chứng khoán thế chấp (MBS/CDO)", "kém thanh khoản"], { fs: 10, c: C.grey }) +
        arr(212, 65, 268, 65) +
        box(270, 30, 190, 70, C.soft, C.brand) + txt(365, 55, "Vốn repo qua đêm", { fw: 700, c: C.dark }) + lines(365, 74, ["phải gia hạn HÀNG NGÀY", "đòn bẩy ~30:1"], { fs: 10, c: C.grey }) +
        arr(462, 65, 518, 65, C.red) +
        box(520, 30, 190, 70, "#fef2f2", C.red) + txt(615, 55, "Đối tác ngừng gia hạn", { fw: 700, c: C.red }) + lines(615, 74, ["nghi ngờ chất lượng tài sản", "(tháng 9/2008)"], { fs: 10, c: C.grey }) +
        arr(712, 65, 768, 65, C.red) +
        box(770, 30, 95, 70, "#fef2f2", C.red) + txt(817, 60, "Mất", { fw: 700, c: C.red }) + txt(817, 78, "thanh khoản", { fw: 700, c: C.red }) +
        txt(440, 135, "KHÔNG có tiền gửi  ·  KHÔNG được vay cửa sổ chiết khấu Fed  →  không có nguồn dự phòng", { fs: 12, fw: 700, c: C.red }) +
        box(120, 160, 300, 60, "#f0fdf4", C.green) + txt(270, 183, "Lối thoát: chuyển thành", { fs: 11, c: C.grey }) + txt(270, 202, "công ty mẹ ngân hàng (BHC)", { fw: 700, c: C.green }) +
        box(460, 160, 300, 60, "#f0fdf4", C.green) + txt(610, 183, "Đánh đổi: chịu giám sát của Fed,", { fs: 11, c: C.grey }) + txt(610, 202, "quy định vốn chặt hơn", { fw: 700, c: C.green })
      )
    },
    qs: [
      "Using the six criteria in 1.1, explain why a commercial bank with the same assets would have survived longer than Lehman.",
      "Was converting to a bank holding company a <i>rescue</i> or a <i>permanent change of business model</i>? Argue both sides.",
      "Vietnam's securities companies may not take deposits either. Which funding sources replace repo for them, and what is the equivalent risk?"
    ],
    qsVi: [
      "Dùng sáu tiêu chí ở mục 1.1, giải thích vì sao một ngân hàng thương mại nắm cùng danh mục tài sản lại trụ được lâu hơn Lehman.",
      "Việc chuyển thành công ty mẹ ngân hàng là một <i>cuộc giải cứu</i> hay là <i>thay đổi mô hình kinh doanh vĩnh viễn</i>? Hãy lập luận cho cả hai phía.",
      "Công ty chứng khoán Việt Nam cũng không được nhận tiền gửi. Nguồn vốn nào thay thế repo đối với họ, và rủi ro tương đương là gì?"
    ],
    src: "SEC EDGAR (hồ sơ 8-K của Lehman, Goldman Sachs, Morgan Stanley 9/2008); Báo cáo của Uỷ ban Điều tra Khủng hoảng Tài chính Hoa Kỳ (FCIC, 2011); Stowell, Ch. 3."
  }];

  CASES["1|1.5"] = [{
    id: "c1-chinesewall",
    tag: "Xung đột lợi ích · Vách ngăn thông tin",
    title: "Research analysts and the Global Settlement (2003)",
    titleVi: "Bộ phận nghiên cứu và Thoả thuận Dàn xếp Toàn cầu (2003)",
    deal: [
      ["Thời điểm", "Tháng 4/2003, sau bong bóng dot-com"],
      ["Số tổ chức bị xử lý", "10 ngân hàng đầu tư lớn của Phố Wall"],
      ["Tổng mức phạt &amp; chi trả", "khoảng 1,4 tỷ USD"],
      ["Bản chất vi phạm", "Báo cáo phân tích khuyến nghị MUA được dùng để đổi lấy hợp đồng bảo lãnh phát hành"]
    ],
    body: `
      <p>Regulators found that research departments had published favourable ratings on companies in order to
      win or keep underwriting mandates for the banking division — exactly the conflict described in section 1.5.
      Internal e-mails showed analysts privately describing as "junk" the same stocks they rated a Buy.</p>
      <p>The settlement forced structural remedies that remain standard practice today: research and investment
      banking must be <b>physically and reportingly separated</b>; analyst pay may <b>not</b> be tied to banking
      revenue; banking staff may not pre-approve research; and firms had to fund independent third-party research
      for retail investors.</p>
      <p>This is the origin of the modern <b>information barrier</b> ("Chinese wall") between the private side
      (which knows unpublished deal information) and the public side (which speaks to the market).</p>`,
    bodyVi: `
      <p>Cơ quan quản lý phát hiện các bộ phận nghiên cứu đã công bố khuyến nghị có lợi cho doanh nghiệp nhằm
      giành hoặc giữ hợp đồng bảo lãnh phát hành cho khối ngân hàng đầu tư — đúng xung đột lợi ích mô tả ở mục 1.5.
      Thư điện tử nội bộ cho thấy chuyên viên phân tích gọi riêng là "rác" chính những cổ phiếu mà họ khuyến nghị MUA.</p>
      <p>Thoả thuận dàn xếp buộc áp dụng các biện pháp cơ cấu đến nay vẫn là chuẩn mực: nghiên cứu và ngân hàng đầu tư
      phải <b>tách biệt cả về vị trí làm việc lẫn tuyến báo cáo</b>; thù lao chuyên viên phân tích <b>không</b> được
      gắn với doanh thu ngân hàng đầu tư; nhân sự khối ngân hàng không được duyệt trước báo cáo phân tích; và các
      công ty phải tài trợ nghiên cứu độc lập từ bên thứ ba cho nhà đầu tư cá nhân.</p>
      <p>Đây chính là nguồn gốc của <b>vách ngăn thông tin</b> hiện đại giữa bên nội bộ (nắm thông tin thương vụ chưa
      công bố) và bên đại chúng (tiếp xúc thị trường).</p>`,
    qs: [
      "Draw the information barrier for a bank advising Company A on a takeover of listed Company B, where the research team also covers B.",
      "Why is separating pay more effective than merely separating desks?",
      "Which Vietnamese regulations impose comparable duties on securities companies?"
    ],
    qsVi: [
      "Vẽ vách ngăn thông tin cho một ngân hàng đang tư vấn Công ty A thâu tóm Công ty B niêm yết, trong khi bộ phận nghiên cứu cũng theo dõi cổ phiếu B.",
      "Vì sao tách biệt <i>thù lao</i> lại hiệu quả hơn chỉ tách biệt <i>chỗ ngồi</i>?",
      "Quy định nào của Việt Nam đặt ra nghĩa vụ tương tự cho công ty chứng khoán?"
    ],
    src: "SEC Press Release 2003-54 ngày 28/4/2003; hồ sơ Global Research Analyst Settlement; Luật Chứng khoán 2019 và các văn bản hướng dẫn về xung đột lợi ích."
  }];

  /* =====================================================================
     CHƯƠNG 2 — HỖ TRỢ HUY ĐỘNG VỐN (BẢO LÃNH PHÁT HÀNH)
     ===================================================================== */

  CASES["2|2.1"] = [{
    id: "c2-alibaba",
    tag: "IPO · Tổ hợp bảo lãnh · Quyền chọn vượt mức",
    title: "Alibaba NYSE IPO (2014) — the mechanics of a record book-build",
    titleVi: "IPO Alibaba trên NYSE (2014) — cơ chế một đợt dựng sổ kỷ lục",
    deal: [
      ["Ngày niêm yết", "19/9/2014, Sở GDCK New York (mã BABA)"],
      ["Giá chào bán", "68 USD/cổ phiếu — đỉnh của khoảng giá đã nâng lên 66–68 USD (khoảng ban đầu 60–66 USD)"],
      ["Số tiền huy động", "≈ 21,8 tỷ USD; ≈ <b>25 tỷ USD</b> sau khi thực hiện quyền chọn vượt mức"],
      ["Quyền chọn vượt mức (greenshoe)", "15% — được thực hiện toàn bộ vài ngày sau khi niêm yết"],
      ["Đồng bảo lãnh chính", "Credit Suisse, Deutsche Bank, Goldman Sachs, J.P. Morgan, Morgan Stanley, Citi"],
      ["Phí bảo lãnh", "≈ 1,2% — thấp bất thường, do quy mô thương vụ quá lớn"]
    ],
    body: `
      <p>This deal is the textbook illustration of every mechanism in section 2.1.</p>
      <p><b>Book-building.</b> The syndicate collected indications of interest during a global roadshow, built an
      order book that was many times oversubscribed, and used that demand to raise the range from $60–66 to a
      final price of $68 — demand information, not a formula, sets the price.</p>
      <p><b>Firm-commitment underwriting.</b> The syndicate bought the shares and resold them, so the banks — not
      Alibaba — bore the placement risk. The <b>fee falls as size rises</b>: 1.2% on $25bn still produced roughly
      $300m of fees, but the percentage is far below the 6–7% typical of a small US IPO.</p>
      <p><b>Over-allotment (greenshoe).</b> The syndicate sold 15% more shares than existed, leaving it short.
      If the price had fallen, it would have bought in the market to cover — supporting the price. Because the
      price rose (first trade $92.70), it exercised the option and bought from the issuer at $68 instead.</p>`,
    bodyVi: `
      <p>Thương vụ này minh hoạ kinh điển mọi cơ chế trình bày ở mục 2.1.</p>
      <p><b>Dựng sổ (book-building).</b> Tổ hợp bảo lãnh thu thập nhu cầu đặt mua trong chuyến giới thiệu toàn cầu,
      dựng sổ lệnh với mức đăng ký gấp nhiều lần lượng chào bán, rồi dùng chính thông tin cầu đó để nâng khoảng giá
      từ 60–66 USD lên giá chốt 68 USD — <b>giá do thông tin về cầu quyết định</b>, không phải do công thức.</p>
      <p><b>Bảo lãnh với cam kết chắc chắn.</b> Tổ hợp mua đứt cổ phiếu rồi bán lại, nên rủi ro phân phối thuộc về
      các ngân hàng chứ không phải Alibaba. <b>Tỷ lệ phí giảm khi quy mô tăng</b>: 1,2% trên 25 tỷ USD vẫn đem lại
      khoảng 300 triệu USD phí, nhưng tỷ lệ phần trăm thấp hơn nhiều so với mức 6–7% thường thấy ở một đợt IPO nhỏ tại Mỹ.</p>
      <p><b>Quyền chọn mua vượt mức (greenshoe).</b> Tổ hợp bán nhiều hơn 15% so với lượng cổ phiếu hiện có, tức là
      đang ở trạng thái bán khống. Nếu giá giảm, họ sẽ mua trên thị trường để bù — qua đó <b>đỡ giá</b>. Vì giá tăng
      (khớp lệnh đầu tiên ở 92,70 USD), họ thực hiện quyền chọn và mua từ tổ chức phát hành với giá 68 USD.</p>`,
    fig: {
      title: "Cơ chế quyền chọn vượt mức (greenshoe) 15%",
      cap: "Bán vượt mức tạo trạng thái bán khống cho tổ hợp bảo lãnh. Giá giảm → mua trên sàn để bù (đỡ giá). Giá tăng → thực hiện quyền chọn, mua từ tổ chức phát hành.",
      svg: svg(880, 300,
        box(330, 20, 220, 54, C.soft, C.brand) + txt(440, 42, "Tổ hợp bảo lãnh bán 115%", { fw: 700, c: C.dark }) + txt(440, 61, "(100% cơ sở + 15% vượt mức)", { fs: 10, c: C.grey }) +
        txt(440, 96, "→ đang THIẾU 15% cổ phiếu (bán khống)", { fs: 11, fw: 700, c: C.amber }) +
        arr(380, 108, 230, 148, C.red) + arr(500, 108, 650, 148, C.green) +
        box(60, 152, 340, 118, "#fef2f2", C.red) +
        txt(230, 175, "GIÁ GIẢM dưới giá chào bán", { fw: 700, c: C.red }) +
        lines(230, 200, [
          "Tổ hợp MUA trên thị trường để bù trạng thái",
          "→ tạo lực cầu, đỡ giá (ổn định giá)",
          "Không thực hiện quyền chọn",
          "Tổ chức phát hành KHÔNG bán thêm cổ phiếu"
        ], { fs: 11, c: "#0f172a" }) +
        box(480, 152, 340, 118, "#f0fdf4", C.green) +
        txt(650, 175, "GIÁ TĂNG trên giá chào bán", { fw: 700, c: C.green }) +
        lines(650, 200, [
          "Mua trên sàn sẽ lỗ → THỰC HIỆN quyền chọn",
          "Mua 15% từ tổ chức phát hành ở giá chào bán",
          "Alibaba: 68 USD, khớp đầu tiên 92,70 USD",
          "Tổng huy động 21,8 → ≈ 25 tỷ USD"
        ], { fs: 11, c: "#0f172a" })
      )
    },
    qs: [
      "Compute the syndicate's gross fee at 1.2% of $25bn, then compare with 7% of a $200m IPO. Why do issuers of different sizes face such different rates?",
      "The greenshoe is described as 'price stabilisation'. Under what circumstances could it instead be criticised as market manipulation?",
      "If the first trade had been $55 rather than $92.70, describe every cash flow of the syndicate."
    ],
    qsVi: [
      "Tính tổng phí của tổ hợp ở mức 1,2% trên 25 tỷ USD, rồi so với mức 7% của một đợt IPO 200 triệu USD. Vì sao tổ chức phát hành có quy mô khác nhau lại chịu tỷ lệ phí khác nhau đến vậy?",
      "Quyền chọn vượt mức được gọi là công cụ \"ổn định giá\". Trong hoàn cảnh nào nó có thể bị phê phán là thao túng thị trường?",
      "Nếu khớp lệnh đầu tiên là 55 USD thay vì 92,70 USD, hãy mô tả toàn bộ dòng tiền của tổ hợp bảo lãnh."
    ],
    src: "Bản cáo bạch F-1 và 424B4 của Alibaba Group (SEC EDGAR, 2014); thông cáo thực hiện quyền chọn vượt mức 9/2014; Rosenbaum &amp; Pearl Ch. 8."
  }, {
    id: "c2-facebook",
    tag: "IPO · Rủi ro định giá &amp; phân phối",
    title: "Facebook IPO (2012) — when the book-build goes wrong",
    titleVi: "IPO Facebook (2012) — khi việc dựng sổ thất bại",
    deal: [
      ["Ngày niêm yết", "18/5/2012, sàn NASDAQ"],
      ["Giá chào bán", "38 USD/cổ phiếu — định giá công ty ≈ 104 tỷ USD"],
      ["Số tiền huy động", "≈ 16 tỷ USD"],
      ["Bảo lãnh chính", "Morgan Stanley (cùng J.P. Morgan, Goldman Sachs)"],
      ["Diễn biến", "Trục trặc hệ thống khớp lệnh của NASDAQ làm chậm phiên mở cửa; giá thủng mệnh giá chào bán ngay các phiên sau"],
      ["Hệ quả pháp lý", "NASDAQ bị SEC phạt 10 triệu USD (2013); nhiều vụ kiện tập thể của nhà đầu tư"]
    ],
    body: `
      <p>Read this case <b>against</b> the Alibaba case. Same instruments, opposite outcome.</p>
      <p>The syndicate raised both the price range and the deal size late in the process, absorbing almost all the
      apparent demand. When trading opened, there was little residual buying left; the greenshoe support was
      exhausted and the price fell below $38 within days.</p>
      <p>A second issue went to the heart of the <b>information barrier</b>: analysts at underwriting banks cut their
      revenue forecasts during the roadshow after the company revised its filing, and that information reached
      institutional clients but not retail buyers — a conflict of exactly the type Chapter 1.5 warns about.</p>
      <p>The lesson for underwriters: pricing at the absolute maximum the book will bear leaves no cushion, and
      damages the bank's placing power on the <i>next</i> deal.</p>`,
    bodyVi: `
      <p>Hãy đọc tình huống này <b>đối chiếu</b> với Alibaba. Cùng công cụ, kết quả trái ngược.</p>
      <p>Tổ hợp bảo lãnh vừa nâng khoảng giá vừa tăng quy mô chào bán ở giai đoạn cuối, hút gần hết lượng cầu biểu kiến.
      Khi mở cửa giao dịch, gần như không còn lực mua dư; nguồn lực đỡ giá từ quyền chọn vượt mức cạn kiệt và giá
      thủng mốc 38 USD chỉ sau vài phiên.</p>
      <p>Vấn đề thứ hai chạm đúng vào <b>vách ngăn thông tin</b>: chuyên viên phân tích tại chính các ngân hàng bảo lãnh
      đã hạ dự báo doanh thu ngay trong chuyến giới thiệu sau khi doanh nghiệp điều chỉnh hồ sơ, và thông tin đó đến
      được nhà đầu tư tổ chức nhưng không đến nhà đầu tư cá nhân — đúng loại xung đột lợi ích mà mục 1.5 cảnh báo.</p>
      <p>Bài học cho tổ chức bảo lãnh: định giá kịch trần khả năng hấp thụ của sổ lệnh sẽ không còn biên độ đệm, và
      làm tổn hại năng lực phân phối của chính ngân hàng đó ở <i>thương vụ kế tiếp</i>.</p>`,
    qs: [
      "List three decisions the syndicate could have taken differently, and state the cost of each.",
      "Whose interest does the underwriter serve when it sets the price: the issuer's or the investor's? Use both cases to answer.",
      "Design a disclosure rule that would have prevented the selective forecast problem."
    ],
    qsVi: [
      "Nêu ba quyết định mà tổ hợp bảo lãnh lẽ ra nên làm khác, và cho biết cái giá phải trả của từng phương án.",
      "Khi định giá, tổ chức bảo lãnh phục vụ lợi ích của ai: tổ chức phát hành hay nhà đầu tư? Dùng cả hai tình huống để trả lời.",
      "Hãy thiết kế một quy tắc công bố thông tin có thể ngăn được vấn đề dự báo chọn lọc nói trên."
    ],
    src: "Bản cáo bạch S-1/424B4 của Facebook, Inc. (SEC EDGAR, 2012); SEC Release 34-69655 (2013) về NASDAQ; hồ sơ tố tụng In re Facebook IPO Securities Litigation."
  }];

  CASES["2|2.2"] = [{
    id: "c2-vietnam",
    tag: "Việt Nam · IPO &amp; chào bán riêng lẻ",
    title: "Vietnam 2018: Techcombank and Vinhomes",
    titleVi: "Việt Nam 2018: Techcombank và Vinhomes",
    deal: [
      ["Techcombank (TCB)", "IPO/chào bán 2018, huy động ≈ 922 triệu USD; niêm yết HOSE tháng 6/2018 — đợt IPO lớn nhất Việt Nam khi đó"],
      ["Vinhomes (VHM)", "Chào bán riêng lẻ cho nhà đầu tư tổ chức tháng 5/2018, ≈ 1,35 tỷ USD — giao dịch vốn cổ phần lớn nhất tại Việt Nam vào thời điểm đó"],
      ["Bên tư vấn", "Tổ hợp gồm ngân hàng đầu tư quốc tế và công ty chứng khoán trong nước"],
      ["Khung pháp lý", "Luật Chứng khoán; quy định về chào bán ra công chúng, chào bán riêng lẻ và tỷ lệ sở hữu nước ngoài"]
    ],
    body: `
      <p>These two 2018 transactions show the two routes in section 2.2 side by side:
      a <b>public offering</b> (Techcombank) and a <b>private placement to institutions</b> (Vinhomes).</p>
      <p>The private placement was faster and involved lighter disclosure, but restricted the buyer base to
      professional investors and typically prices at a discount to the public route. The public offering reached a
      much wider investor base and created a liquid listed market, at the cost of a full prospectus, regulatory
      review and continuing disclosure obligations.</p>
      <p>Both illustrate a structural feature of the Vietnamese market: <b>foreign ownership limits</b> and the
      relative scarcity of large domestic institutional investors mean sizeable deals normally require an
      international syndicate alongside a domestic securities company.</p>`,
    bodyVi: `
      <p>Hai giao dịch năm 2018 này cho thấy song song hai con đường trình bày ở mục 2.2:
      <b>chào bán ra công chúng</b> (Techcombank) và <b>chào bán riêng lẻ cho nhà đầu tư tổ chức</b> (Vinhomes).</p>
      <p>Chào bán riêng lẻ nhanh hơn, nghĩa vụ công bố thông tin nhẹ hơn, nhưng giới hạn người mua trong nhóm nhà đầu tư
      chuyên nghiệp và thường phải định giá chiết khấu so với chào bán ra công chúng. Chào bán ra công chúng tiếp cận
      lượng nhà đầu tư rộng hơn nhiều và tạo ra thị trường niêm yết có thanh khoản, đổi lại phải có bản cáo bạch đầy đủ,
      chịu thẩm định của cơ quan quản lý và nghĩa vụ công bố thông tin thường xuyên.</p>
      <p>Cả hai đều phản ánh một đặc điểm cấu trúc của thị trường Việt Nam: <b>giới hạn sở hữu nước ngoài</b> và sự khan
      hiếm tương đối của nhà đầu tư tổ chức trong nước khiến các thương vụ quy mô lớn thường cần tổ hợp quốc tế đi cùng
      một công ty chứng khoán trong nước.</p>`,
    qs: [
      "Build a table comparing public offering vs private placement on: speed, disclosure, investor base, pricing, ongoing obligations.",
      "For a Vietnamese company needing 500 million USD in six months, which route would you advise and why?",
      "How do foreign ownership limits change the underwriter's distribution strategy?"
    ],
    qsVi: [
      "Lập bảng so sánh chào bán ra công chúng và chào bán riêng lẻ theo các tiêu chí: tốc độ, công bố thông tin, đối tượng nhà đầu tư, mức giá, nghĩa vụ sau phát hành.",
      "Với một doanh nghiệp Việt Nam cần 500 triệu USD trong sáu tháng, anh/chị tư vấn chọn con đường nào và vì sao?",
      "Giới hạn sở hữu nước ngoài làm thay đổi chiến lược phân phối của tổ chức bảo lãnh như thế nào?"
    ],
    src: "Bản cáo bạch và công bố thông tin của Techcombank, Vinhomes (2018) trên HOSE và website doanh nghiệp; Luật Chứng khoán 2019."
  }];

  CASES["2|2.3"] = [{
    id: "c2-bonds",
    tag: "Trái phiếu · Xếp hạng &amp; kỷ luật thị trường",
    title: "Vietnam's corporate bond market 2022 and Decree 65",
    titleVi: "Thị trường trái phiếu doanh nghiệp Việt Nam 2022 và Nghị định 65",
    deal: [
      ["Bối cảnh", "Thị trường trái phiếu doanh nghiệp riêng lẻ tăng rất nhanh giai đoạn 2019–2021, tập trung ở bất động sản"],
      ["Điểm yếu cấu trúc", "Nhiều đợt phát hành riêng lẻ được phân phối gián tiếp tới nhà đầu tư cá nhân; tài sản bảo đảm và mục đích sử dụng vốn thiếu minh bạch"],
      ["Bước ngoặt 2022", "Các vụ việc xử lý vi phạm phát hành khiến niềm tin sụt giảm, thanh khoản thị trường thứ cấp gần như đóng băng"],
      ["Phản ứng chính sách", "Nghị định 65/2022/NĐ-CP siết điều kiện phát hành riêng lẻ, chuẩn nhà đầu tư chứng khoán chuyên nghiệp và công bố thông tin; sau đó Nghị định 08/2023/NĐ-CP cho phép giãn hoãn, đàm phán lại điều khoản"],
      ["Hạ tầng mới", "Hệ thống giao dịch trái phiếu doanh nghiệp riêng lẻ tập trung tại HNX vận hành từ 2023"]
    ],
    body: `
      <p>Section 2.3 explains bond issuance mechanics: coupon, tenor, covenants, credit rating, and the difference
      between a public offering and a private placement. Vietnam's recent experience shows what happens when the
      <b>investor-protection layer</b> around those mechanics is thin.</p>
      <p>Three lessons map directly onto the syllabus. First, <b>a private placement is legally an offer to professional
      investors</b>; when the paper reaches households through indirect distribution, the regulatory premise breaks
      down. Second, without <b>independent credit ratings</b>, price cannot discriminate between a strong and a weak
      issuer, so all issuers pay a similar coupon until confidence breaks — then none of them can issue at all.
      Third, an issuer that funds long-dated projects with short-tenor bonds carries the same <b>maturity mismatch</b>
      that destroyed Lehman in Chapter 1.</p>
      <p>For an investment banker the practical question is: what would you have insisted on in the term sheet —
      rating, escrow of proceeds, security, covenants, amortisation — to make the issue survive a downturn?</p>`,
    bodyVi: `
      <p>Mục 2.3 trình bày cơ chế phát hành trái phiếu: lãi coupon, kỳ hạn, điều khoản ràng buộc, xếp hạng tín nhiệm, và
      khác biệt giữa chào bán ra công chúng với phát hành riêng lẻ. Thực tiễn Việt Nam gần đây cho thấy điều gì xảy ra khi
      <b>lớp bảo vệ nhà đầu tư</b> quanh các cơ chế đó còn mỏng.</p>
      <p>Ba bài học ánh xạ trực tiếp vào đề cương. Thứ nhất, <b>phát hành riêng lẻ về mặt pháp lý là chào bán cho nhà đầu tư
      chuyên nghiệp</b>; khi trái phiếu đến tay hộ gia đình qua kênh phân phối gián tiếp, tiền đề quản lý bị phá vỡ. Thứ hai,
      thiếu <b>xếp hạng tín nhiệm độc lập</b> thì giá không thể phân biệt tổ chức phát hành mạnh với yếu, nên mọi tổ chức
      phát hành đều trả lãi suất gần như nhau cho tới khi niềm tin đổ vỡ — và khi đó không ai phát hành được nữa. Thứ ba,
      tổ chức phát hành tài trợ dự án dài hạn bằng trái phiếu kỳ hạn ngắn mang đúng rủi ro <b>lệch kỳ hạn</b> đã đánh sập
      Lehman ở Chương 1.</p>
      <p>Với một chuyên viên ngân hàng đầu tư, câu hỏi thực tiễn là: anh/chị sẽ yêu cầu điều gì trong bản điều khoản —
      xếp hạng, phong toả tiền thu, tài sản bảo đảm, điều khoản ràng buộc, lịch trả gốc — để đợt phát hành trụ được qua
      giai đoạn suy giảm?</p>`,
    qs: [
      "Write five covenants you would require from a real-estate issuer, and state the behaviour each one prevents.",
      "Why does the absence of independent ratings compress credit spreads in a boom and widen them violently in a bust?",
      "Compare the investor-protection design of Decree 65 with the public-offering regime. What is the remaining gap?"
    ],
    qsVi: [
      "Hãy viết năm điều khoản ràng buộc mà anh/chị yêu cầu đối với tổ chức phát hành là doanh nghiệp bất động sản, và nêu hành vi mà mỗi điều khoản ngăn chặn.",
      "Vì sao việc thiếu xếp hạng tín nhiệm độc lập làm thu hẹp chênh lệch lãi suất tín dụng trong giai đoạn bùng nổ và mở rộng dữ dội khi thị trường đổ vỡ?",
      "So sánh thiết kế bảo vệ nhà đầu tư của Nghị định 65 với cơ chế chào bán ra công chúng. Khoảng trống còn lại là gì?"
    ],
    src: "Nghị định 153/2020/NĐ-CP, 65/2022/NĐ-CP, 08/2023/NĐ-CP; số liệu thị trường của HNX và Bộ Tài chính; báo cáo thị trường trái phiếu của VBMA."
  }];

  CASES["2|2.4"] = [{
    id: "c2-vcstartup",
    tag: "Đầu tư mạo hiểm · Vòng gọi vốn &amp; pha loãng",
    title: "How a venture round actually dilutes the founders",
    titleVi: "Một vòng gọi vốn mạo hiểm thực sự pha loãng người sáng lập ra sao",
    deal: [
      ["Trước vòng gọi vốn", "Doanh nghiệp định giá trước tiền (pre-money) 20 triệu USD, người sáng lập nắm 100% (2.000.000 cổ phần)"],
      ["Vòng gọi vốn", "Quỹ đầu tư rót 5 triệu USD"],
      ["Định giá sau tiền", "20 + 5 = 25 triệu USD → quỹ nắm 5/25 = <b>20%</b>"],
      ["Quỹ cổ phần thưởng (ESOP)", "Yêu cầu lập 10% ESOP <b>trước</b> khi đầu tư — trích từ phần người sáng lập"],
      ["Kết quả", "Người sáng lập còn ≈ 70%, quỹ 20%, ESOP 10%"]
    ],
    body: `
      <p>Section 2.4 covers private equity and venture capital. The single most misunderstood point is that
      <b>the headline valuation is not the whole deal</b> — the term sheet decides who really owns what.</p>
      <p>Two clauses matter most. The <b>option pool shuffle</b>: if the ESOP is created pre-money, its dilution falls
      entirely on existing shareholders, so a "20 million pre-money" with a 10% pre-money pool is economically worse
      for the founder than the same number with a post-money pool. The <b>liquidation preference</b>: a 1× non-participating
      preference means the fund takes its 5 million back before anyone else on an exit; a participating preference means
      it takes 5 million <i>and then</i> shares the rest — very different outcomes in a modest exit.</p>
      <p>An adviser earns their fee by modelling the <b>exit waterfall</b> at several exit values, not by celebrating
      the headline valuation.</p>`,
    bodyVi: `
      <p>Mục 2.4 bàn về đầu tư tư nhân và đầu tư mạo hiểm. Điểm bị hiểu sai nhiều nhất là <b>mức định giá công bố không
      phải toàn bộ thương vụ</b> — chính bản điều khoản mới quyết định ai thực sự sở hữu bao nhiêu.</p>
      <p>Hai điều khoản quan trọng nhất. <b>Thủ thuật quỹ quyền chọn</b>: nếu ESOP được lập trước khi rót vốn (pre-money),
      toàn bộ phần pha loãng rơi vào cổ đông hiện hữu; nên mức "định giá trước tiền 20 triệu USD" kèm quỹ ESOP 10% lập trước
      thực chất bất lợi cho người sáng lập hơn so với cùng con số đó nhưng lập quỹ sau khi rót vốn. <b>Quyền ưu tiên thanh toán
      khi thanh lý</b>: quyền ưu tiên 1 lần không tham gia chia phần có nghĩa quỹ lấy lại 5 triệu USD trước mọi người khi thoái vốn;
      quyền ưu tiên có tham gia chia phần nghĩa là quỹ lấy 5 triệu USD <i>rồi vẫn</i> chia phần còn lại — kết quả rất khác nhau
      khi giá trị thoái vốn ở mức khiêm tốn.</p>
      <p>Bên tư vấn xứng đáng với khoản phí của mình khi mô hình hoá <b>thứ tự phân chia tiền khi thoái vốn</b> ở nhiều mức giá
      trị khác nhau, chứ không phải khi tung hô con số định giá công bố.</p>`,
    qs: [
      "Build the cap table before and after, with the ESOP created pre-money and then post-money. Quantify the difference for the founder.",
      "Exit at 30 million USD: compute the founder's proceeds under (a) 1× non-participating and (b) 1× participating preference.",
      "At what exit value do the two preference structures give the fund the same amount?"
    ],
    qsVi: [
      "Lập bảng cơ cấu sở hữu trước và sau vòng gọi vốn, với ESOP lập trước khi rót vốn rồi lập sau khi rót vốn. Lượng hoá chênh lệch đối với người sáng lập.",
      "Thoái vốn ở mức 30 triệu USD: tính số tiền người sáng lập nhận được theo (a) quyền ưu tiên 1 lần không tham gia chia phần và (b) quyền ưu tiên 1 lần có tham gia chia phần.",
      "Ở mức giá trị thoái vốn nào thì hai cấu trúc quyền ưu tiên đem lại cho quỹ số tiền như nhau?"
    ],
    src: "Mẫu term sheet của NVCA (Hoa Kỳ); Rosenbaum &amp; Pearl phần cấu trúc vốn; thực tiễn các vòng gọi vốn công bố của startup Việt Nam."
  }];

  /* =====================================================================
     CHƯƠNG 3 — MUA BÁN & SÁP NHẬP (M&A)
     ===================================================================== */

  CASES["3|3.1"] = [{
    id: "c3-disneyfox",
    tag: "M&A · Cạnh tranh chào mua · Cấu trúc đối giá",
    title: "Disney vs Comcast for 21st Century Fox (2017–2019)",
    titleVi: "Disney và Comcast tranh mua 21st Century Fox (2017–2019)",
    deal: [
      ["12/2017", "Disney công bố mua tài sản của 21CF: ≈ 52,4 tỷ USD, thanh toán <b>toàn bộ bằng cổ phiếu</b>"],
      ["6/2018", "Comcast chào mua đối kháng ≈ 65 tỷ USD, <b>toàn bộ bằng tiền mặt</b>"],
      ["6/2018", "Disney nâng giá lên ≈ <b>71,3 tỷ USD</b>, cơ cấu <b>tiền mặt và cổ phiếu</b> (SV được chọn hình thức)"],
      ["7/2018", "Cổ đông 21CF thông qua phương án của Disney; Comcast rút lui, chuyển sang thâu tóm Sky"],
      ["20/3/2019", "Giao dịch hoàn tất"]
    ],
    body: `
      <p>The single best illustration of section 3.1: <b>the form of consideration is a strategic weapon, not an
      accounting detail.</b></p>
      <p>Comcast's all-cash bid was superficially attractive — certain value, no exposure to the buyer's share price.
      Disney answered by adding cash to its stock offer. This mattered for two reasons. First, a cash-and-stock mix
      let 21CF shareholders defer part of their tax liability on the stock portion. Second, it raised headline value
      without consuming Disney's entire debt capacity.</p>
      <p>The bidding also shows the advisers' role: running a defensive auction, assessing <b>deal certainty</b>
      (Comcast faced a harder antitrust path after its NBCUniversal ownership) and advising the board on whether a
      higher nominal price with lower closing probability is truly superior.</p>`,
    bodyVi: `
      <p>Minh hoạ rõ nhất cho mục 3.1: <b>hình thức thanh toán là một vũ khí chiến lược, không phải chi tiết kế toán.</b></p>
      <p>Đề nghị toàn tiền mặt của Comcast thoạt nhìn hấp dẫn — giá trị chắc chắn, không chịu rủi ro giá cổ phiếu bên mua.
      Disney đáp lại bằng cách bổ sung tiền mặt vào phương án cổ phiếu. Điều này quan trọng vì hai lẽ. Thứ nhất, cơ cấu
      tiền mặt kết hợp cổ phiếu cho phép cổ đông 21CF hoãn một phần nghĩa vụ thuế đối với phần nhận bằng cổ phiếu.
      Thứ hai, nó nâng giá trị danh nghĩa mà không tiêu hết dư địa vay nợ của Disney.</p>
      <p>Cuộc tranh mua còn cho thấy vai trò của bên tư vấn: tổ chức đấu giá phòng thủ, đánh giá <b>mức độ chắc chắn hoàn tất
      giao dịch</b> (Comcast đối mặt con đường chống độc quyền khó hơn do đã sở hữu NBCUniversal) và tư vấn hội đồng quản trị
      xem một mức giá danh nghĩa cao hơn nhưng xác suất hoàn tất thấp hơn có thực sự ưu việt hay không.</p>`,
    fig: {
      title: "So sánh hình thức thanh toán trong thương vụ",
      cap: "Ba hình thức thanh toán và ai gánh rủi ro gì. Đây là khung phân tích cần dùng cho mọi tình huống M&A.",
      svg: svg(880, 270,
        box(20, 20, 270, 220, "#fff", C.green) + txt(155, 45, "TOÀN BỘ TIỀN MẶT", { fw: 700, c: C.green }) +
        lines(155, 70, ["Comcast: ≈ 65 tỷ USD", "", "Bên bán: giá trị CHẮC CHẮN", "Bên bán: chịu thuế NGAY", "Bên mua: dùng hết tiền/vay nợ", "Bên mua: giữ nguyên tỷ lệ sở hữu", "Rủi ro: đòn bẩy tăng"], { fs: 11, c: "#0f172a" }) +
        box(305, 20, 270, 220, "#fff", C.brand) + txt(440, 45, "TOÀN BỘ CỔ PHIẾU", { fw: 700, c: C.brand }) +
        lines(440, 70, ["Disney lần đầu: ≈ 52,4 tỷ USD", "", "Bên bán: chịu rủi ro giá cổ phiếu", "Bên bán: hoãn thuế", "Bên mua: không tốn tiền mặt", "Bên mua: BỊ PHA LOÃNG", "Rủi ro: giá bên mua giảm"], { fs: 11, c: "#0f172a" }) +
        box(590, 20, 270, 220, "#fffbeb", C.amber) + txt(725, 45, "TIỀN MẶT + CỔ PHIẾU", { fw: 700, c: C.amber }) +
        lines(725, 70, ["Disney lần cuối: ≈ 71,3 tỷ USD", "", "Chia sẻ rủi ro hai bên", "Hoãn thuế một phần", "Cân bằng đòn bẩy và pha loãng", "Cho cổ đông quyền CHỌN", "→ Phương án THẮNG"], { fs: 11, c: "#0f172a" })
      )
    },
    qs: [
      "If you held 21CF shares and expected Disney's share price to rise, which offer would you prefer, and why might your answer differ from a pension fund's?",
      "Explain how 'deal certainty' can justify accepting a lower headline price. Quantify it with a simple expected-value calculation.",
      "What defensive advice would you have given the Fox board in June 2018?"
    ],
    qsVi: [
      "Nếu anh/chị nắm cổ phiếu 21CF và kỳ vọng giá cổ phiếu Disney sẽ tăng, anh/chị chọn đề nghị nào, và vì sao câu trả lời của một quỹ hưu trí có thể khác?",
      "Giải thích vì sao \"mức độ chắc chắn hoàn tất giao dịch\" có thể biện minh cho việc chấp nhận giá danh nghĩa thấp hơn. Hãy lượng hoá bằng một phép tính giá trị kỳ vọng đơn giản.",
      "Anh/chị sẽ tư vấn phòng thủ như thế nào cho hội đồng quản trị Fox vào tháng 6/2018?"
    ],
    src: "Hồ sơ S-4, DEFM14A của The Walt Disney Company và Twenty-First Century Fox (SEC EDGAR 2017–2019); thông cáo báo chí của Comcast 6/2018."
  }];

  CASES["3|3.3"] = [{
    id: "c3-msft",
    tag: "M&A · Rủi ro pháp lý &amp; chống độc quyền",
    title: "Microsoft – Activision Blizzard (2022–2023): regulatory risk priced in",
    titleVi: "Microsoft – Activision Blizzard (2022–2023): định giá rủi ro pháp lý",
    deal: [
      ["Công bố", "18/1/2022 — 95 USD/cổ phiếu bằng tiền mặt, tổng ≈ <b>68,7 tỷ USD</b>"],
      ["Phản đối", "FTC (Mỹ) khởi kiện; CMA (Anh) ban đầu ngăn chặn giao dịch"],
      ["Điều chỉnh", "Microsoft nhượng quyền phát trực tuyến trò chơi trên nền tảng đám mây cho Ubisoft để giải toả quan ngại của CMA"],
      ["Hoàn tất", "13/10/2023 — sau gần 21 tháng"],
      ["Dấu hiệu thị trường", "Giá cổ phiếu ATVI giao dịch thấp hơn đáng kể so với 95 USD trong suốt thời gian chờ — <b>chênh lệch chờ sáp nhập (merger arbitrage spread)</b>"]
    ],
    body: `
      <p>Section 3.3 treats deal execution as a process with legal risk. This case makes that risk observable and
      measurable: because the price was fixed at $95 in cash, any discount in the market price was the market's
      estimate of the probability that the deal would <b>fail</b>.</p>
      <p>If ATVI traded at $75 while the offer was $95, and you believed closure was certain, the spread was a
      21% return for waiting. The market did not believe that, because two regulators were actively opposing.
      Merger arbitrage desks in investment banks trade precisely this spread.</p>
      <p>Practical lesson for advisers: the value of an M&amp;A team is not only in negotiating price but in
      designing <b>remedies</b> (here, divesting cloud-streaming rights) that convert a blocked deal into an
      approved one.</p>`,
    bodyVi: `
      <p>Mục 3.3 xem thực thi giao dịch là một quy trình có rủi ro pháp lý. Tình huống này khiến rủi ro đó trở nên
      <b>quan sát được và đo lường được</b>: vì giá đã cố định ở 95 USD tiền mặt, mọi mức chiết khấu của giá thị trường
      chính là ước lượng của thị trường về xác suất giao dịch <b>đổ vỡ</b>.</p>
      <p>Nếu ATVI giao dịch ở 75 USD trong khi giá chào mua là 95 USD, và anh/chị tin chắc giao dịch sẽ hoàn tất, thì
      khoản chênh lệch đó là mức sinh lời 21% cho việc chờ đợi. Thị trường đã không tin như vậy, bởi hai cơ quan quản lý
      đang tích cực phản đối. Bộ phận kinh doanh chênh lệch giá sáp nhập tại các ngân hàng đầu tư giao dịch đúng khoản
      chênh lệch này.</p>
      <p>Bài học thực tiễn cho bên tư vấn: giá trị của một đội M&amp;A không chỉ nằm ở đàm phán giá, mà ở việc thiết kế
      <b>biện pháp khắc phục</b> (ở đây là nhượng quyền phát trực tuyến trên đám mây) để biến một giao dịch bị chặn thành
      một giao dịch được chấp thuận.</p>`,
    qs: [
      "Given an offer of $95 and a market price of $75, and assuming the shares would fall to $65 if the deal broke, what probability of completion does the market imply?",
      "Rank the following by how much they raise regulatory risk: horizontal overlap, vertical foreclosure, data concentration, cross-border national-security review.",
      "Draft the two remedies you would have proposed first, with the revenue each would cost."
    ],
    qsVi: [
      "Với giá chào mua 95 USD và giá thị trường 75 USD, giả định cổ phiếu sẽ rơi về 65 USD nếu giao dịch đổ vỡ, thị trường đang ngầm định xác suất hoàn tất là bao nhiêu?",
      "Xếp hạng các yếu tố sau theo mức độ làm tăng rủi ro pháp lý: chồng lấn theo chiều ngang, khép kín theo chiều dọc, tập trung dữ liệu, thẩm định an ninh quốc gia xuyên biên giới.",
      "Hãy phác thảo hai biện pháp khắc phục mà anh/chị sẽ đề xuất trước tiên, kèm mức doanh thu phải đánh đổi cho mỗi biện pháp."
    ],
    src: "Hồ sơ 8-K, DEFM14A của Activision Blizzard (SEC EDGAR 2022); FTC v. Microsoft; quyết định của CMA (Anh) 2023."
  }, {
    id: "c3-sabeco",
    tag: "Việt Nam · Thoái vốn nhà nước",
    title: "ThaiBev – Sabeco (2017): the largest M&A in Vietnam",
    titleVi: "ThaiBev – Sabeco (2017): thương vụ M&A lớn nhất Việt Nam",
    deal: [
      ["Thời điểm", "Tháng 12/2017 — đấu giá công khai phần vốn nhà nước"],
      ["Tỷ lệ chào bán", "53,59% vốn điều lệ Sabeco"],
      ["Giá trị", "≈ 110 nghìn tỷ đồng (≈ 4,8 tỷ USD)"],
      ["Bên mua", "ThaiBev (Thái Lan), thực hiện qua pháp nhân Việt Nam là Vietnam Beverage"],
      ["Vấn đề then chốt", "Giới hạn sở hữu nước ngoài → phải dùng cấu trúc pháp nhân trong nước"]
    ],
    body: `
      <p>This is the reference case for cross-border M&amp;A into Vietnam. Three features are worth close study.</p>
      <p><b>Structure driven by ownership limits.</b> A foreign buyer could not directly hold the stake at the desired
      level, so the acquisition was made through a Vietnamese-incorporated vehicle. Advising on that structure — and
      on whether it satisfies both the letter and the purpose of the rules — is core M&amp;A advisory work.</p>
      <p><b>State divestment as a sale process.</b> The seller was the State. The process was an auction with a floor
      price, which changes the adviser's task from negotiating with one counterparty to maximising competitive tension.</p>
      <p><b>Valuation debate.</b> The price implied a high multiple of earnings by regional standards; the case is
      therefore also a good vehicle for discussing whether control premium and market-access value justify paying
      above comparable-company multiples.</p>`,
    bodyVi: `
      <p>Đây là tình huống tham chiếu cho M&amp;A xuyên biên giới vào Việt Nam. Có ba đặc điểm đáng nghiên cứu kỹ.</p>
      <p><b>Cấu trúc bị chi phối bởi giới hạn sở hữu.</b> Nhà đầu tư nước ngoài không thể trực tiếp nắm giữ tỷ lệ mong muốn,
      nên việc mua được thực hiện qua một pháp nhân thành lập tại Việt Nam. Tư vấn về cấu trúc đó — và về việc nó có thoả mãn
      cả câu chữ lẫn tinh thần của quy định hay không — chính là công việc cốt lõi của tư vấn M&amp;A.</p>
      <p><b>Thoái vốn nhà nước như một quy trình bán.</b> Bên bán là Nhà nước. Quy trình là đấu giá có giá sàn, điều này biến
      nhiệm vụ của bên tư vấn từ đàm phán với một đối tác duy nhất thành tối đa hoá sức ép cạnh tranh.</p>
      <p><b>Tranh luận về định giá.</b> Mức giá hàm ý hệ số lợi nhuận cao so với mặt bằng khu vực; vì vậy tình huống này cũng
      là chất liệu tốt để thảo luận xem phần bù kiểm soát và giá trị tiếp cận thị trường có biện minh được cho việc trả cao
      hơn hệ số của các công ty so sánh hay không.</p>`,
    qs: [
      "Compare this auction with a bilateral negotiation: which gives the seller a better price, and under what conditions?",
      "If you advised a rival bidder, what would your maximum price have been and how would you justify it to your board?",
      "Discuss the governance risks for minority shareholders after a 53.59% stake changes hands."
    ],
    qsVi: [
      "So sánh cuộc đấu giá này với một cuộc đàm phán song phương: hình thức nào đem lại giá tốt hơn cho bên bán, và trong điều kiện nào?",
      "Nếu tư vấn cho một bên dự thầu cạnh tranh, mức giá tối đa của anh/chị là bao nhiêu và anh/chị biện minh thế nào trước hội đồng quản trị?",
      "Thảo luận rủi ro quản trị đối với cổ đông thiểu số sau khi 53,59% vốn đổi chủ."
    ],
    src: "Công bố thông tin của Sabeco (SAB) trên HOSE 12/2017; báo cáo thường niên ThaiBev; quy định về thoái vốn nhà nước tại doanh nghiệp."
  }];

  /* =====================================================================
     CHƯƠNG 4 — QUẢN LÝ TÀI SẢN
     ===================================================================== */

  CASES["4|4.1"] = [{
    id: "c4-passive",
    tag: "Quản lý tài sản · Chủ động và thụ động",
    title: "The shift to passive management and the fee compression it caused",
    titleVi: "Sự dịch chuyển sang quản lý thụ động và sức ép giảm phí",
    deal: [
      ["Xu hướng", "Quỹ chỉ số và ETF chiếm tỷ trọng ngày càng lớn trong tài sản quản lý toàn cầu trong hai thập niên qua"],
      ["Cơ chế cạnh tranh", "Phí quản lý quỹ chỉ số cổ phiếu lớn của Mỹ đã giảm về mức vài điểm cơ bản (0,0x%/năm)"],
      ["Hệ quả với ngân hàng đầu tư", "Doanh thu chuyển từ <b>phí theo tỷ lệ tài sản</b> sang <b>quy mô</b>, công nghệ và sản phẩm thay thế"],
      ["Đối chứng", "Nghiên cứu SPIVA của S&amp;P định kỳ cho thấy phần lớn quỹ chủ động không vượt được chỉ số tham chiếu sau phí trong dài hạn"]
    ],
    body: `
      <p>Section 4.1 distinguishes active from passive mandates. The economics matter more than the definition.</p>
      <p>An active equity fund charging 1.0% per year must beat its benchmark by more than 1.0% <i>after costs</i>
      simply to tie. Compounded over a decade this is a very high hurdle, and the published SPIVA scorecards show
      most managers do not clear it consistently.</p>
      <p>For an investment bank's asset-management arm the strategic response has been threefold: build scale in
      low-fee index products; move up the fee curve into private markets and alternatives where fees remain high;
      and sell <b>technology and risk-analytics platforms</b> to other managers, converting expertise into a
      recurring software revenue stream rather than an asset-based fee.</p>`,
    bodyVi: `
      <p>Mục 4.1 phân biệt uỷ thác chủ động và thụ động. Bài toán kinh tế của chúng còn quan trọng hơn định nghĩa.</p>
      <p>Một quỹ cổ phiếu chủ động thu phí 1,0%/năm phải vượt chỉ số tham chiếu hơn 1,0% <i>sau chi phí</i> thì mới chỉ
      hoà. Cộng dồn qua một thập niên, đây là rào cản rất cao, và các báo cáo SPIVA công bố định kỳ cho thấy phần lớn
      nhà quản lý không vượt qua được một cách ổn định.</p>
      <p>Với khối quản lý tài sản của một ngân hàng đầu tư, phản ứng chiến lược gồm ba hướng: xây quy mô ở nhóm sản phẩm
      chỉ số phí thấp; dịch lên phía trên đường cong phí bằng thị trường tư nhân và sản phẩm thay thế nơi phí vẫn cao;
      và bán <b>nền tảng công nghệ, phân tích rủi ro</b> cho các nhà quản lý khác, biến chuyên môn thành dòng doanh thu
      phần mềm định kỳ thay vì phí tính trên tài sản.</p>`,
    qs: [
      "A fund charges 1.2% and beats its index by 0.9% gross per year. Show the ten-year outcome for the client against a 0.05% index fund.",
      "Why do fees remain high in private equity and hedge funds when they have collapsed in public equity?",
      "Which of the three strategic responses best suits a Vietnamese fund management company today?"
    ],
    qsVi: [
      "Một quỹ thu phí 1,2% và vượt chỉ số 0,9%/năm trước phí. Hãy tính kết quả mười năm cho khách hàng so với một quỹ chỉ số phí 0,05%.",
      "Vì sao phí vẫn cao ở quỹ đầu tư tư nhân và quỹ phòng hộ, trong khi đã sụt mạnh ở cổ phiếu niêm yết?",
      "Trong ba hướng chiến lược nêu trên, hướng nào phù hợp nhất với một công ty quản lý quỹ Việt Nam hiện nay?"
    ],
    src: "Báo cáo SPIVA Scorecard của S&amp;P Dow Jones Indices (công bố định kỳ); báo cáo thường niên của các công ty quản lý tài sản lớn."
  }];

  CASES["3|3.5"] = [{
    id: "c3-defence",
    tag: "Phòng thủ thâu tóm · Viên thuốc độc",
    title: "Twitter's poison pill (2022) — a defence that did not stop the bid",
    titleVi: "Viên thuốc độc của Twitter (2022) — biện pháp phòng thủ không chặn được thương vụ",
    deal: [
      ["13/4/2022", "Elon Musk chào mua toàn bộ Twitter ở 54,20 USD/cổ phiếu"],
      ["15/4/2022", "Hội đồng quản trị Twitter thông qua <b>kế hoạch quyền cổ đông</b> (viên thuốc độc), kích hoạt nếu một bên đạt 15% sở hữu"],
      ["25/4/2022", "Hội đồng quản trị chấp thuận bán ở đúng mức giá 54,20 USD"],
      ["Sau đó", "Bên mua tìm cách rút lui; Twitter khởi kiện tại Toà Chancery bang Delaware; thương vụ hoàn tất 27/10/2022"]
    ],
    body: `
      <p>Section 3.5 lists takeover defences. This case shows what they are actually <i>for</i>.</p>
      <p>A poison pill does not make a company unbuyable. It makes it impossible to buy <b>without talking to the board</b>,
      because crossing the trigger threshold massively dilutes the bidder. Its real function is to buy negotiating time
      and force the price up — a <b>bargaining tool</b>, not a wall.</p>
      <p>Here the board adopted the pill, used the time to test the offer, and then accepted at the original price. The
      subsequent litigation adds a second lesson: the <b>merger agreement</b> itself is a defence. Specific-performance
      clauses meant the seller could sue to <i>force</i> completion rather than merely collect a break fee.</p>
      <p>Compare with the Fox case in 3.1: there the board used a competing bidder to raise the price; here the board
      used a legal instrument. Both are the adviser's toolkit.</p>`,
    bodyVi: `
      <p>Mục 3.5 liệt kê các biện pháp phòng thủ thâu tóm. Tình huống này cho thấy chúng thực chất <i>dùng để làm gì</i>.</p>
      <p>Viên thuốc độc không làm cho doanh nghiệp trở nên không thể mua được. Nó làm cho việc mua <b>không thể thực hiện nếu
      không đàm phán với hội đồng quản trị</b>, bởi vượt ngưỡng kích hoạt sẽ khiến bên chào mua bị pha loãng nghiêm trọng.
      Chức năng thật của nó là mua thêm thời gian đàm phán và đẩy giá lên — một <b>công cụ mặc cả</b>, không phải bức tường.</p>
      <p>Ở đây hội đồng quản trị áp dụng viên thuốc độc, dùng khoảng thời gian có được để kiểm chứng đề nghị, rồi chấp thuận ở
      đúng mức giá ban đầu. Vụ kiện sau đó bổ sung bài học thứ hai: chính <b>hợp đồng sáp nhập</b> cũng là một biện pháp phòng thủ.
      Điều khoản buộc thực hiện đúng nghĩa vụ cho phép bên bán khởi kiện để <i>buộc</i> hoàn tất giao dịch, thay vì chỉ nhận
      khoản phí phá vỡ hợp đồng.</p>
      <p>Hãy so sánh với tình huống Fox ở mục 3.1: ở đó hội đồng quản trị dùng một bên chào mua cạnh tranh để đẩy giá; ở đây
      hội đồng quản trị dùng một công cụ pháp lý. Cả hai đều nằm trong bộ công cụ của bên tư vấn.</p>`,
    qs: [
      "Explain mechanically how a 15% trigger dilutes a bidder. Use a simple share count.",
      "If a pill can always be redeemed by the board, is it a defence at all? Argue both sides.",
      "Compare a break fee with a specific-performance clause from the seller's point of view."
    ],
    qsVi: [
      "Giải thích về mặt cơ chế, ngưỡng kích hoạt 15% pha loãng bên chào mua như thế nào. Hãy dùng một ví dụ số lượng cổ phần đơn giản.",
      "Nếu hội đồng quản trị luôn có thể thu hồi viên thuốc độc, thì nó có thực sự là biện pháp phòng thủ không? Hãy lập luận cho cả hai phía.",
      "So sánh khoản phí phá vỡ hợp đồng với điều khoản buộc thực hiện đúng nghĩa vụ, dưới góc nhìn của bên bán."
    ],
    src: "Hồ sơ 8-K của Twitter, Inc. về Rights Plan 15/4/2022; DEFM14A 2022; hồ sơ vụ kiện Twitter v. Musk, Toà Chancery Delaware."
  }];

  CASES["4|4.2"] = [{
    id: "c4-vnfunds",
    tag: "Việt Nam · Quỹ mở, ETF &amp; quỹ ngoại",
    title: "Fund management in Vietnam: open-ended funds, ETFs and foreign-owned capital",
    titleVi: "Quản lý quỹ tại Việt Nam: quỹ mở, ETF và dòng vốn ngoại",
    deal: [
      ["Cấu trúc phổ biến", "Quỹ mở (chứng chỉ quỹ phát hành/mua lại theo NAV), quỹ ETF mô phỏng chỉ số (VN30, VNDIAMOND, VNFIN LEAD)"],
      ["Vai trò ngân hàng giám sát", "Bắt buộc phải có ngân hàng giám sát tách biệt để lưu ký tài sản và giám sát hoạt động — chốt bảo vệ nhà đầu tư"],
      ["Nhà đầu tư nước ngoài", "Chịu giới hạn sở hữu theo ngành; ETF nội và chứng chỉ lưu ký là kênh tiếp cận gián tiếp"],
      ["Đặc điểm thị trường", "Tỷ trọng nhà đầu tư cá nhân trong giá trị giao dịch rất cao so với các thị trường phát triển"]
    ],
    body: `
      <p>Section 4.2 covers fund management. The Vietnamese market is a good laboratory because two structural
      features are unusually visible.</p>
      <p><b>Custody separation.</b> Vietnamese regulation requires an independent supervisory bank holding the fund's
      assets. This is the practical answer to the question "what stops a fund manager from taking the money?" — the
      manager gives instructions but never holds client assets. Students should be able to explain why this separation,
      not the manager's reputation, is the real investor protection.</p>
      <p><b>Access constraints shape products.</b> Because direct foreign ownership is capped in many sectors, index
      products with diversified baskets, and depositary receipts, become the practical route for foreign money. Product
      design here is driven by regulation as much as by investment logic.</p>
      <p>Finally, a heavily retail market means flows are more sentiment-driven, so an open-ended fund faces sharper
      subscription/redemption swings — a direct liquidity-management problem for the portfolio manager.</p>`,
    bodyVi: `
      <p>Mục 4.2 bàn về quản lý quỹ. Thị trường Việt Nam là phòng thí nghiệm tốt vì hai đặc điểm cấu trúc hiện lên rất rõ.</p>
      <p><b>Tách bạch lưu ký.</b> Quy định Việt Nam buộc phải có ngân hàng giám sát độc lập nắm giữ tài sản của quỹ. Đây chính là
      câu trả lời thực tiễn cho câu hỏi "điều gì ngăn công ty quản lý quỹ lấy tiền của nhà đầu tư?" — công ty quản lý quỹ ra lệnh
      nhưng không bao giờ nắm giữ tài sản khách hàng. Sinh viên phải giải thích được vì sao chính sự tách bạch này, chứ không phải
      uy tín của công ty quản lý, mới là lớp bảo vệ nhà đầu tư thực sự.</p>
      <p><b>Rào cản tiếp cận định hình sản phẩm.</b> Vì sở hữu trực tiếp của nhà đầu tư nước ngoài bị giới hạn ở nhiều ngành, các
      sản phẩm chỉ số với rổ cổ phiếu đa dạng và chứng chỉ lưu ký trở thành con đường thực tế cho dòng vốn ngoại. Thiết kế sản phẩm
      ở đây bị chi phối bởi quy định pháp lý không kém gì bởi logic đầu tư.</p>
      <p>Cuối cùng, một thị trường có tỷ trọng nhà đầu tư cá nhân lớn khiến dòng tiền bị chi phối mạnh bởi tâm lý, nên quỹ mở đối mặt
      biên độ mua/bán chứng chỉ quỹ lớn hơn — đây là bài toán quản trị thanh khoản trực tiếp của người quản lý danh mục.</p>`,
    qs: [
      "Explain the roles of fund management company, supervisory bank, transfer agent and auditor. Which one protects against fraud, and how?",
      "An open-ended fund faces redemptions of 20% of NAV in a week. Set out the manager's options in order of preference.",
      "Why might an ETF trade away from its NAV in Vietnam more than in a developed market?"
    ],
    qsVi: [
      "Giải thích vai trò của công ty quản lý quỹ, ngân hàng giám sát, đại lý chuyển nhượng và kiểm toán. Chủ thể nào bảo vệ chống gian lận, và bằng cách nào?",
      "Một quỹ mở bị yêu cầu mua lại 20% NAV trong một tuần. Hãy nêu các phương án của người quản lý theo thứ tự ưu tiên.",
      "Vì sao chứng chỉ quỹ ETF ở Việt Nam có thể lệch khỏi NAV nhiều hơn so với thị trường phát triển?"
    ],
    src: "Luật Chứng khoán 2019 và quy định về quỹ đầu tư chứng khoán; bản cáo bạch các quỹ mở/ETF niêm yết tại Việt Nam; số liệu cơ cấu nhà đầu tư của VSDC/HOSE."
  }];

  /* =====================================================================
     CHƯƠNG 5 — TƯ VẤN DOANH NGHIỆP (LBO, TÁI CƠ CẤU)
     ===================================================================== */

  CASES["5|5.1"] = [{
    id: "c5-rjr",
    tag: "LBO kinh điển · Đấu giá &amp; đòn bẩy",
    title: "RJR Nabisco (1988–89) — the LBO that defined the term",
    titleVi: "RJR Nabisco (1988–89) — thương vụ LBO định hình khái niệm",
    deal: [
      ["Bên thắng", "Kohlberg Kravis Roberts &amp; Co. (KKR)"],
      ["Giá chốt", "109 USD/cổ phiếu — vốn cổ phần ≈ 25 tỷ USD; tổng giá trị ≈ 31 tỷ USD kể cả nợ tiếp nhận"],
      ["Khởi điểm", "Ban điều hành đề nghị mua lại ở 75 USD/cổ phiếu"],
      ["Cấu trúc", "Đòn bẩy rất cao, tài trợ chủ yếu bằng nợ, gồm trái phiếu lợi suất cao (junk bond)"],
      ["Di sản", "Cuốn <i>Barbarians at the Gate</i>; là thương vụ LBO lớn nhất trong khoảng 17 năm"]
    ],
    body: `
      <p>Everything in section 5.1 appears here in its purest form.</p>
      <p><b>The conflict.</b> The process began with a <b>management buyout</b> proposal at $75. Management were
      simultaneously the buyers and the agents of the shareholders — the sharpest conflict of interest in corporate
      finance. The board's response, forming a special committee with independent advisers, is now standard practice.</p>
      <p><b>Auction dynamics.</b> Competing bids drove the price from $75 to $109 — a 45% increase created purely by
      competitive tension. This is the single strongest argument for running a broad auction rather than a
      negotiated sale.</p>
      <p><b>Leverage.</b> The capital structure relied on debt serviced by the target's own cash flows. High leverage
      magnifies equity returns when the plan works and destroys the equity when it does not; RJR's subsequent
      performance was disappointing, which is as instructive as the deal itself.</p>`,
    bodyVi: `
      <p>Mọi nội dung của mục 5.1 xuất hiện ở đây dưới dạng thuần khiết nhất.</p>
      <p><b>Xung đột lợi ích.</b> Quy trình khởi đầu bằng đề nghị <b>mua lại từ ban điều hành</b> ở mức 75 USD. Ban điều hành
      vừa là người mua vừa là người đại diện cho cổ đông — đây là xung đột lợi ích gay gắt nhất trong tài chính doanh nghiệp.
      Cách hội đồng quản trị ứng phó, lập tiểu ban đặc biệt với các bên tư vấn độc lập, nay đã thành thông lệ chuẩn.</p>
      <p><b>Động lực đấu giá.</b> Các đề nghị cạnh tranh đẩy giá từ 75 USD lên 109 USD — tăng 45% chỉ nhờ sức ép cạnh tranh.
      Đây là lập luận mạnh nhất cho việc tổ chức đấu giá rộng rãi thay vì bán theo thương lượng.</p>
      <p><b>Đòn bẩy.</b> Cấu trúc vốn dựa vào nợ được trả bằng chính dòng tiền của doanh nghiệp mục tiêu. Đòn bẩy cao khuếch đại
      suất sinh lời vốn cổ phần khi kế hoạch thành công và xoá sạch vốn cổ phần khi thất bại; kết quả kinh doanh sau đó của
      RJR gây thất vọng — điều này cũng đáng học không kém bản thân thương vụ.</p>`,
    fig: {
      title: "Cơ chế tạo lợi nhuận của một thương vụ LBO",
      cap: "Ba nguồn tạo giá trị: trả bớt nợ, cải thiện lợi nhuận hoạt động, và thay đổi hệ số định giá khi thoái vốn. Đòn bẩy khuếch đại cả lãi lẫn lỗ.",
      svg: svg(880, 300,
        txt(440, 24, "NGÀY MUA", { fw: 700, c: C.dark, fs: 13 }) +
        box(60, 40, 200, 60, C.soft, C.brand) + txt(160, 65, "Vốn cổ phần quỹ", { fs: 11, c: C.grey }) + txt(160, 85, "20–30%", { fw: 700, c: C.brand, fs: 15 }) +
        box(60, 104, 200, 96, "#fff7ed", C.amber) + txt(160, 132, "NỢ VAY", { fs: 11, c: C.grey }) + txt(160, 154, "70–80%", { fw: 700, c: C.amber, fs: 15 }) + txt(160, 176, "trả bằng dòng tiền DN", { fs: 10, c: C.grey }) +
        arr(272, 120, 340, 120) +
        box(345, 60, 190, 140, "#fff", C.grey) + txt(440, 84, "TRONG 3–7 NĂM", { fw: 700, c: C.dark, fs: 12 }) +
        lines(440, 110, ["① Trả bớt nợ gốc", "② Tăng EBITDA", "   (cắt chi phí, tăng trưởng)", "③ Chờ hệ số định giá", "   cải thiện"], { fs: 11, c: "#0f172a" }) +
        arr(540, 120, 608, 120) +
        txt(720, 24, "NGÀY THOÁI VỐN", { fw: 700, c: C.dark, fs: 13 }) +
        box(615, 40, 200, 44, "#f0fdf4", C.green) + txt(715, 68, "Vốn cổ phần đã tăng mạnh", { fw: 700, c: C.green, fs: 11 }) +
        box(615, 88, 200, 60, "#fff7ed", C.amber) + txt(715, 122, "Nợ còn lại (đã giảm)", { fs: 11, c: C.amber }) +
        txt(440, 232, "RJR Nabisco: 75 USD (đề nghị ban điều hành) → 109 USD (KKR thắng) = +45% nhờ cạnh tranh", { fs: 12, fw: 700, c: C.brand }) +
        txt(440, 258, "CẢNH BÁO: đòn bẩy khuếch đại theo CẢ HAI chiều — nếu EBITDA giảm, vốn cổ phần có thể về 0", { fs: 11, fw: 700, c: C.red }) +
        txt(440, 282, "Kết quả kinh doanh của RJR sau thương vụ gây thất vọng — giá cao chưa chắc là thương vụ tốt", { fs: 11, c: C.grey })
      )
    },
    qs: [
      "A fund buys a company for 10× EBITDA with 70% debt, grows EBITDA 30% over five years, repays half the debt and exits at 10×. Compute the equity multiple and approximate IRR.",
      "Repeat with EBITDA falling 20%. What happens to the equity?",
      "Design the governance safeguards a board should impose the moment management proposes a buyout."
    ],
    qsVi: [
      "Một quỹ mua doanh nghiệp ở mức 10 lần EBITDA với 70% vốn vay, EBITDA tăng 30% sau năm năm, trả được một nửa nợ và thoái vốn ở mức 10 lần. Hãy tính bội số vốn cổ phần và IRR xấp xỉ.",
      "Làm lại với giả định EBITDA giảm 20%. Điều gì xảy ra với vốn cổ phần?",
      "Hãy thiết kế các biện pháp bảo vệ quản trị mà hội đồng quản trị cần áp dụng ngay khi ban điều hành đề xuất mua lại doanh nghiệp."
    ],
    src: "Burrough &amp; Helyar, <i>Barbarians at the Gate</i> (1990); hồ sơ chào mua công khai của RJR Nabisco (SEC 1988–89); Rosenbaum &amp; Pearl Ch. 4–5."
  }, {
    id: "c5-twitter",
    tag: "LBO hiện đại · Nợ mắc kẹt",
    title: "Twitter / X (2022) — the LBO where the banks could not sell the debt",
    titleVi: "Twitter / X (2022) — thương vụ LBO mà ngân hàng không bán được nợ",
    deal: [
      ["Giá chào mua", "54,20 USD/cổ phiếu — tổng ≈ <b>44 tỷ USD</b>"],
      ["Hoàn tất", "27/10/2022"],
      ["Phần nợ ngân hàng cam kết", "≈ 13 tỷ USD, do một tổ hợp dẫn đầu bởi Morgan Stanley"],
      ["Vấn đề", "Ngân hàng cam kết cho vay trước, dự định bán lại khoản nợ cho nhà đầu tư; điều kiện thị trường xấu đi khiến khoản nợ <b>mắc kẹt</b> trên bảng cân đối"],
      ["Hệ quả", "Các ngân hàng phải trích lập giảm giá đáng kể trên khoản cam kết này"]
    ],
    body: `
      <p>Section 5.1 says the bank's role in an LBO includes <b>staple financing</b> and underwriting the debt. This
      case shows the risk hidden in that role.</p>
      <p>In a leveraged buyout the banks typically <b>commit</b> to lend at signing, then <b>syndicate</b> — sell the
      loan down to institutional investors — before or shortly after closing. The commitment is firm; the syndication
      is not guaranteed. When rates rose sharply and sentiment turned in 2022, investors would not take the paper at
      the agreed terms, and the banks were left holding it. Debt that cannot be sold at par is called <b>hung debt</b>.</p>
      <p>Read together with RJR Nabisco, the pair covers both sides of leverage: the sponsor's return mathematics,
      and the underwriter's warehouse risk.</p>`,
    bodyVi: `
      <p>Mục 5.1 nêu rằng vai trò của ngân hàng trong một thương vụ LBO bao gồm <b>thu xếp tài trợ</b> và bảo lãnh khoản nợ.
      Tình huống này cho thấy rủi ro ẩn trong vai trò đó.</p>
      <p>Trong giao dịch mua lại bằng vốn vay, các ngân hàng thường <b>cam kết</b> cho vay ngay khi ký hợp đồng, sau đó
      <b>phân phối lại</b> — bán khoản vay cho nhà đầu tư tổ chức — trước hoặc ngay sau khi hoàn tất. Cam kết là chắc chắn;
      việc phân phối thì không được bảo đảm. Khi lãi suất tăng mạnh và tâm lý thị trường đảo chiều trong năm 2022, nhà đầu tư
      không nhận khoản nợ theo điều kiện đã thoả thuận, và ngân hàng phải ôm lại. Khoản nợ không bán được theo mệnh giá được
      gọi là <b>nợ mắc kẹt</b>.</p>
      <p>Đọc cùng với RJR Nabisco, cặp tình huống này bao quát cả hai mặt của đòn bẩy: bài toán suất sinh lời của quỹ tài trợ,
      và rủi ro lưu kho của tổ chức bảo lãnh.</p>`,
    qs: [
      "Explain why the commitment letter is firm while syndication is not. What does the bank charge for bearing that gap?",
      "If a bank commits $1bn at 8% and can only sell at a price implying 11%, estimate the mark-down it must take.",
      "What conditions ('flex' terms) would you negotiate into the commitment to protect the bank?"
    ],
    qsVi: [
      "Giải thích vì sao thư cam kết cấp tín dụng là chắc chắn trong khi việc phân phối lại thì không. Ngân hàng thu phí gì để bù cho khoảng trống rủi ro đó?",
      "Nếu ngân hàng cam kết 1 tỷ USD ở lãi suất 8% mà chỉ bán được ở mức giá hàm ý lợi suất 11%, hãy ước lượng mức giảm giá phải ghi nhận.",
      "Anh/chị sẽ đàm phán những điều khoản linh hoạt nào trong cam kết để bảo vệ ngân hàng?"
    ],
    src: "Hồ sơ DEFM14A và 8-K của Twitter, Inc. (SEC EDGAR 2022); báo cáo tài chính của các ngân hàng thu xếp khoản vay."
  }];

  CASES["5|5.3"] = [{
    id: "c5-gm",
    tag: "Tái cơ cấu · Phá sản có kiểm soát",
    title: "General Motors Chapter 11 (2009) — restructuring in 40 days",
    titleVi: "General Motors phá sản theo Chương 11 (2009) — tái cơ cấu trong 40 ngày",
    deal: [
      ["Nộp đơn", "1/6/2009 — một trong những vụ phá sản công nghiệp lớn nhất lịch sử Mỹ"],
      ["Thoát khỏi thủ tục", "10/7/2009 — chỉ khoảng 40 ngày"],
      ["Hỗ trợ của Chính phủ Mỹ", "≈ 49,5 tỷ USD"],
      ["Cơ chế", "Bán tài sản tốt theo Điều 363 cho một pháp nhân mới (\"New GM\"); tài sản và nghĩa vụ xấu ở lại pháp nhân cũ"],
      ["Kết quả", "New GM IPO trở lại năm 2010"]
    ],
    body: `
      <p>Section 5.3 covers restructuring advisory. GM is the canonical example of a <b>pre-negotiated, court-supervised
      restructuring</b> used as a surgical tool rather than a liquidation.</p>
      <p>The key mechanism is the section 363 sale: viable plants, brands and contracts were transferred to a new
      entity free of most legacy claims, while unwanted liabilities remained with the old estate to be settled from
      its assets. This converts an insolvent operating business into a solvent one in weeks instead of years.</p>
      <p>The adviser's work here is not valuation but <b>negotiation architecture</b>: agreeing in advance with unions,
      bondholders and the government who takes what haircut, so that the court process merely ratifies a deal that has
      already been struck.</p>`,
    bodyVi: `
      <p>Mục 5.3 bàn về tư vấn tái cơ cấu. GM là ví dụ điển hình của <b>tái cơ cấu đã thoả thuận trước, dưới sự giám sát
      của toà án</b>, được dùng như một công cụ phẫu thuật chứ không phải để thanh lý.</p>
      <p>Cơ chế then chốt là bán tài sản theo Điều 363: các nhà máy, thương hiệu và hợp đồng còn khả thi được chuyển sang
      một pháp nhân mới, sạch phần lớn các nghĩa vụ cũ; trong khi những nghĩa vụ không mong muốn ở lại pháp nhân cũ để
      xử lý bằng tài sản của chính nó. Cách này biến một doanh nghiệp mất khả năng thanh toán thành doanh nghiệp lành mạnh
      trong vài tuần thay vì nhiều năm.</p>
      <p>Công việc của bên tư vấn ở đây không phải là định giá, mà là <b>kiến trúc đàm phán</b>: thoả thuận trước với công đoàn,
      trái chủ và chính phủ về việc ai chịu mức cắt giảm nào, để thủ tục toà án chỉ còn là công nhận một thoả thuận đã đạt được.</p>`,
    qs: [
      "Rank the claimants (secured lenders, bondholders, pension funds, suppliers, shareholders) by expected recovery and justify the order.",
      "Why is a pre-negotiated filing faster and cheaper than a contested one?",
      "Apply the same logic to a large Vietnamese company in distress: which steps transfer, which do not, and why?"
    ],
    qsVi: [
      "Xếp hạng các chủ nợ và bên liên quan (chủ nợ có bảo đảm, trái chủ, quỹ hưu trí, nhà cung cấp, cổ đông) theo mức thu hồi kỳ vọng và giải thích thứ tự đó.",
      "Vì sao việc nộp đơn khi đã thoả thuận trước lại nhanh hơn và rẻ hơn so với trường hợp có tranh chấp?",
      "Áp dụng cùng logic cho một doanh nghiệp lớn của Việt Nam đang gặp khó khăn: bước nào chuyển giao được, bước nào không, và vì sao?"
    ],
    src: "Hồ sơ vụ In re General Motors Corp., Toà Phá sản Liên bang khu vực Nam New York (2009); báo cáo của Văn phòng Tổng Thanh tra Chương trình TARP (SIGTARP)."
  }];

  /* =====================================================================
     CHƯƠNG 6 — HỖ TRỢ GIAO DỊCH THỊ TRƯỜNG THỨ CẤP
     ===================================================================== */

  CASES["6|6.4"] = [{
    id: "c6-archegos",
    tag: "Môi giới chính · Ký quỹ · Rủi ro đối tác",
    title: "Archegos Capital (2021) — how prime brokerage risk destroyed a bank",
    titleVi: "Archegos Capital (2021) — rủi ro môi giới chính đánh sập một ngân hàng",
    deal: [
      ["Thời điểm", "Tháng 3/2021"],
      ["Chủ thể", "Archegos Capital Management — văn phòng gia đình của Bill Hwang"],
      ["Công cụ", "Hợp đồng hoán đổi tổng lợi tức (total return swap) — nắm giữ kinh tế mà không đứng tên sở hữu, nên <b>không phải công bố thông tin</b>"],
      ["Cơ chế đổ vỡ", "Giá cổ phiếu cơ sở giảm → gọi ký quỹ → không đáp ứng → các môi giới chính đồng loạt bán giải chấp"],
      ["Thiệt hại công bố", "Credit Suisse ≈ 5,5 tỷ USD; Nomura ≈ 2,9 tỷ USD; Morgan Stanley ≈ 0,9 tỷ USD; UBS ≈ 0,8 tỷ USD"],
      ["Hệ quả dài hạn", "Là một trong những nguyên nhân dẫn tới sự sụp đổ của Credit Suisse và việc UBS tiếp quản năm 2023"]
    ],
    body: `
      <p>This is the most important cautionary case for section 6.4 (margin and securities lending / prime brokerage).</p>
      <p><b>Why the banks could not see the risk.</b> Archegos held its positions through total return swaps at
      <i>several</i> prime brokers at once. Each bank saw only its own exposure and believed it was adequately
      collateralised. Because swaps are not registered holdings, none of them — and no regulator — saw the aggregate.</p>
      <p><b>Why the loss was so fast.</b> When prices fell, margin calls went unmet. Every prime broker held the same
      concentrated positions as collateral, so all of them tried to liquidate the same illiquid stocks in the same days.
      The first movers escaped with modest losses; the slowest — Credit Suisse and Nomura — took the largest hits.</p>
      <p><b>The governance failure.</b> Post-mortems pointed to a client whose leverage was allowed to grow far beyond
      the firm's own limits because the revenue was attractive. This is the risk-versus-revenue tension in the
      middle office described in Chapter 1.</p>`,
    bodyVi: `
      <p>Đây là tình huống cảnh báo quan trọng nhất cho mục 6.4 (ký quỹ, cho vay chứng khoán và môi giới chính).</p>
      <p><b>Vì sao các ngân hàng không nhìn thấy rủi ro.</b> Archegos nắm giữ vị thế qua hợp đồng hoán đổi tổng lợi tức tại
      <i>nhiều</i> môi giới chính cùng lúc. Mỗi ngân hàng chỉ thấy phần rủi ro của riêng mình và tin rằng đã có đủ tài sản
      bảo đảm. Vì hợp đồng hoán đổi không phải là sở hữu đứng tên, không ngân hàng nào — và không cơ quan quản lý nào —
      nhìn thấy tổng vị thế.</p>
      <p><b>Vì sao khoản lỗ đến quá nhanh.</b> Khi giá giảm, lệnh gọi ký quỹ không được đáp ứng. Mọi môi giới chính đều đang
      giữ cùng những vị thế tập trung đó làm tài sản bảo đảm, nên tất cả cùng bán giải chấp một nhóm cổ phiếu kém thanh khoản
      trong cùng vài ngày. Bên hành động trước thoát với khoản lỗ vừa phải; bên chậm nhất — Credit Suisse và Nomura — chịu
      thiệt hại lớn nhất.</p>
      <p><b>Thất bại về quản trị.</b> Các báo cáo rà soát sau đó chỉ ra rằng đòn bẩy của khách hàng này được cho phép vượt xa
      hạn mức nội bộ vì nguồn thu quá hấp dẫn. Đây chính là mâu thuẫn giữa rủi ro và doanh thu ở khối quản trị rủi ro đã mô tả
      ở Chương 1.</p>`,
    fig: {
      title: "Vì sao không ngân hàng nào thấy được tổng vị thế",
      cap: "Mỗi môi giới chính chỉ thấy phần của mình. Hợp đồng hoán đổi che giấu quyền sở hữu kinh tế nên tổng đòn bẩy vô hình cho tới khi giá giảm.",
      svg: svg(880, 300,
        box(340, 20, 200, 56, "#fef2f2", C.red) + txt(440, 43, "ARCHEGOS", { fw: 700, c: C.red }) + txt(440, 62, "vị thế tập trung, đòn bẩy cao", { fs: 10, c: C.grey }) +
        arr(390, 78, 150, 128) + arr(415, 78, 340, 128) + arr(465, 78, 540, 128) + arr(490, 78, 730, 128) +
        box(60, 132, 180, 62, "#fff", C.brand) + txt(150, 155, "Credit Suisse", { fw: 700, c: C.dark, fs: 12 }) + txt(150, 176, "chỉ thấy phần của mình", { fs: 10, c: C.grey }) +
        box(250, 132, 180, 62, "#fff", C.brand) + txt(340, 155, "Nomura", { fw: 700, c: C.dark, fs: 12 }) + txt(340, 176, "chỉ thấy phần của mình", { fs: 10, c: C.grey }) +
        box(450, 132, 180, 62, "#fff", C.brand) + txt(540, 155, "Morgan Stanley", { fw: 700, c: C.dark, fs: 12 }) + txt(540, 176, "chỉ thấy phần của mình", { fs: 10, c: C.grey }) +
        box(640, 132, 180, 62, "#fff", C.brand) + txt(730, 155, "UBS + khác", { fw: 700, c: C.dark, fs: 12 }) + txt(730, 176, "chỉ thấy phần của mình", { fs: 10, c: C.grey }) +
        txt(440, 222, "Hợp đồng hoán đổi = nắm giữ KINH TẾ, không đứng tên sở hữu → KHÔNG phải công bố", { fs: 12, fw: 700, c: C.amber }) +
        txt(440, 248, "→ Không ai — kể cả cơ quan quản lý — nhìn thấy TỔNG đòn bẩy", { fs: 12, fw: 700, c: C.red }) +
        txt(440, 278, "Giá giảm → gọi ký quỹ → tất cả cùng bán giải chấp một rổ cổ phiếu → thiệt hại > 10 tỷ USD", { fs: 11, c: C.grey })
      )
    },
    qs: [
      "Design three controls a prime brokerage desk should have that would have caught this exposure.",
      "Why did the banks that liquidated first lose least? What does this imply about the fairness of collateral rules?",
      "Should total return swaps carry the same disclosure duty as direct shareholdings? Argue both sides."
    ],
    qsVi: [
      "Hãy thiết kế ba biện pháp kiểm soát mà bộ phận môi giới chính cần có để phát hiện được vị thế này.",
      "Vì sao các ngân hàng giải chấp trước lại lỗ ít nhất? Điều này hàm ý gì về tính công bằng của quy tắc tài sản bảo đảm?",
      "Hợp đồng hoán đổi tổng lợi tức có nên chịu nghĩa vụ công bố thông tin như sở hữu cổ phần trực tiếp không? Hãy lập luận cho cả hai phía."
    ],
    src: "Báo cáo điều tra độc lập của Credit Suisse về vụ Archegos (7/2021); báo cáo tài chính của Nomura, Morgan Stanley, UBS (2021); hồ sơ tố tụng của US DOJ/SEC đối với Bill Hwang."
  }];

  CASES["6|6.2"] = [{
    id: "c6-gamestop",
    tag: "Tạo lập thị trường · Thanh toán bù trừ",
    title: "GameStop (January 2021) — clearing, collateral and payment for order flow",
    titleVi: "GameStop (tháng 1/2021) — bù trừ, ký quỹ và phí dẫn lệnh",
    deal: [
      ["Sự kiện", "Giá cổ phiếu GME tăng đột biến do lực mua của nhà đầu tư cá nhân, gây <b>siết bán khống</b>"],
      ["Điểm nghẽn kỹ thuật", "Trung tâm bù trừ yêu cầu công ty môi giới bổ sung ký quỹ rất lớn do biến động tăng vọt"],
      ["Hệ quả", "Một số công ty môi giới <b>hạn chế lệnh mua</b> các cổ phiếu liên quan"],
      ["Vấn đề chính sách", "Mô hình <b>phí dẫn lệnh</b> (payment for order flow) và vai trò nhà tạo lập thị trường bán buôn bị đưa ra chất vấn tại Quốc hội Mỹ"],
      ["Bối cảnh chu kỳ", "Chu kỳ thanh toán khi đó là T+2; Mỹ đã rút ngắn về T+1 từ năm 2024"]
    ],
    body: `
      <p>Section 6.2 covers electronic trading and the plumbing behind it. This episode is the clearest public
      demonstration that <b>the plumbing has limits</b>.</p>
      <p>A broker does not settle instantly; between trade and settlement it must post collateral at the clearing
      house sized to the risk of the position. When volatility exploded, required deposits rose by orders of
      magnitude overnight, and brokers that could not fund them restricted opening new positions.</p>
      <p>The episode then exposed the <b>economics of retail brokerage</b>: commission-free trading is financed by
      routing orders to wholesale market makers who pay for that flow. Whether this creates a conflict — best
      execution versus revenue — is a live regulatory debate and an excellent essay topic.</p>`,
    bodyVi: `
      <p>Mục 6.2 nói về giao dịch điện tử và hạ tầng phía sau nó. Sự kiện này là minh chứng công khai rõ ràng nhất rằng
      <b>hạ tầng đó có giới hạn</b>.</p>
      <p>Công ty môi giới không thanh toán tức thời; giữa thời điểm khớp lệnh và thời điểm thanh toán, họ phải ký quỹ tại
      trung tâm bù trừ với mức tương ứng rủi ro của vị thế. Khi biến động bùng nổ, mức ký quỹ yêu cầu tăng gấp nhiều lần
      chỉ sau một đêm, và những công ty môi giới không thu xếp được nguồn đã hạn chế việc mở vị thế mới.</p>
      <p>Sự kiện sau đó phơi bày <b>bài toán kinh tế của môi giới bán lẻ</b>: giao dịch miễn phí hoa hồng được tài trợ bằng
      cách dẫn lệnh tới các nhà tạo lập thị trường bán buôn, những đơn vị trả tiền cho luồng lệnh đó. Việc này có tạo ra
      xung đột lợi ích hay không — giữa nghĩa vụ thực hiện lệnh tốt nhất và nguồn thu — vẫn đang là tranh luận pháp lý và
      là đề tài tiểu luận rất tốt.</p>`,
    qs: [
      "Explain step by step why higher volatility raises a broker's clearing deposit.",
      "Does payment for order flow harm retail investors? Present the evidence for and against.",
      "How would moving from T+2 to T+1 (and hypothetically T+0) change the risk described here? What new risks appear?"
    ],
    qsVi: [
      "Giải thích từng bước vì sao biến động tăng lại làm tăng mức ký quỹ bù trừ của công ty môi giới.",
      "Phí dẫn lệnh có gây thiệt hại cho nhà đầu tư cá nhân không? Hãy trình bày bằng chứng cho cả hai phía.",
      "Việc rút ngắn chu kỳ thanh toán từ T+2 xuống T+1 (và giả định T+0) sẽ thay đổi rủi ro nêu trên như thế nào? Rủi ro mới nào xuất hiện?"
    ],
    src: "SEC Staff Report on Equity and Options Market Structure Conditions in Early 2021 (10/2021); biên bản điều trần Uỷ ban Dịch vụ Tài chính Hạ viện Mỹ 2/2021."
  }];

  CASES["6|6.3"] = [{
    id: "c6-sg-kerviel",
    tag: "Tự doanh · Rủi ro tác nghiệp &amp; kiểm soát nội bộ",
    title: "Société Générale (2008) — a single trader, €4.9bn of losses",
    titleVi: "Société Générale (2008) — một nhân viên giao dịch, khoản lỗ 4,9 tỷ EUR",
    deal: [
      ["Công bố", "Tháng 1/2008"],
      ["Khoản lỗ", "≈ <b>4,9 tỷ EUR</b> khi ngân hàng đóng vị thế"],
      ["Cách thức", "Nhân viên giao dịch mở vị thế chỉ số rất lớn, che giấu bằng các giao dịch đối ứng giả để bảng trạng thái ròng trông như đã phòng hộ"],
      ["Điểm yếu bị khai thác", "Từng làm ở bộ phận kiểm soát giao dịch (middle office) nên nắm rõ quy trình đối chiếu và biết cách né kiểm soát"],
      ["Hệ quả pháp lý", "Ngân hàng bị cơ quan quản lý Pháp phạt; nhân viên bị truy tố hình sự"]
    ],
    body: `
      <p>Section 6.3 covers proprietary trading. The lesson is not about market risk — it is about
      <b>the separation of front, middle and back office</b> introduced in Chapter 1.4.</p>
      <p>The positions were directional and enormous; the fictitious offsetting trades made the <i>net</i> exposure look
      small. The controls that should have caught it are mundane: independent confirmation with counterparties,
      reconciliation of cash and margin movements, and mandatory block leave (a trader who must take two consecutive
      weeks off cannot maintain a concealment that requires daily upkeep).</p>
      <p>The root cause was that the person who knew how the checks worked was the person being checked. Any
      middle-office design must assume this and rely on <b>independent</b> confirmation from outside the desk.</p>`,
    bodyVi: `
      <p>Mục 6.3 bàn về nghiệp vụ tự doanh. Bài học ở đây không nằm ở rủi ro thị trường, mà ở
      <b>sự tách bạch giữa khối kinh doanh, khối quản trị rủi ro và khối điều hành</b> đã nêu ở mục 1.4.</p>
      <p>Các vị thế đều là vị thế đặt cược một chiều và có quy mô rất lớn; những giao dịch đối ứng giả khiến trạng thái
      <i>ròng</i> trông có vẻ nhỏ. Những chốt kiểm soát lẽ ra phải phát hiện được đều rất bình thường: xác nhận độc lập với
      đối tác, đối chiếu dòng tiền và biến động ký quỹ, và quy định nghỉ phép liên tục bắt buộc (một nhân viên buộc phải nghỉ
      hai tuần liền thì không thể duy trì một sự che giấu đòi hỏi phải chỉnh sửa hằng ngày).</p>
      <p>Nguyên nhân gốc là người nắm rõ cách các chốt kiểm soát vận hành lại chính là người bị kiểm soát. Mọi thiết kế khối
      quản trị rủi ro phải giả định điều này và dựa vào xác nhận <b>độc lập</b> từ bên ngoài bộ phận kinh doanh.</p>`,
    qs: [
      "List five controls that would each independently have detected the concealment, and say who must own each one.",
      "Why is 'net exposure looks small' a dangerous risk metric on its own? What should sit beside it?",
      "Compare this operational-risk failure with the Archegos counterparty-risk failure in 6.4: which is easier to prevent, and why?"
    ],
    qsVi: [
      "Liệt kê năm chốt kiểm soát mà mỗi cái tự nó đã đủ để phát hiện sự che giấu này, và cho biết bộ phận nào phải chịu trách nhiệm từng chốt.",
      "Vì sao chỉ tiêu \"trạng thái ròng trông nhỏ\" tự nó là một thước đo rủi ro nguy hiểm? Cần đặt thêm chỉ tiêu nào bên cạnh?",
      "So sánh thất bại về rủi ro tác nghiệp này với thất bại về rủi ro đối tác trong vụ Archegos ở mục 6.4: loại nào dễ phòng ngừa hơn, và vì sao?"
    ],
    src: "Báo cáo của Uỷ ban đặc biệt (Green Report) của Société Générale 2008; quyết định xử phạt của Commission bancaire (Pháp); báo cáo thường niên SocGen 2008."
  }];

  /* =====================================================================
     API CÔNG KHAI
     ===================================================================== */
  window.IB_CASES = CASES;

  /** Số tình huống của cả học phần (hiển thị ở trang tổng quan). */
  window.caseCount = Object.values(CASES).reduce(function (s, a) { return s + a.length; }, 0);

  /** Số tình huống của một chương. */
  window.caseCountForChapter = function (chId) {
    var n = 0;
    Object.keys(CASES).forEach(function (k) {
      if (k.split("|")[0] === String(chId)) n += CASES[k].length;
    });
    return n;
  };

  /**
   * Kết xuất HTML các tình huống của một mục.
   * @param {number|string} chId  số chương
   * @param {string} secId        mã mục (vd "3.1")
   * @param {string} lang         "vi" | "en"
   */
  window.renderCases = function (chId, secId, lang) {
    var list = CASES[chId + "|" + secId];
    if (!list || !list.length) return "";
    var vi = lang === "vi";
    var L = function (o, k) { return (vi && o[k + "Vi"]) ? o[k + "Vi"] : o[k]; };
    return list.map(function (c) {
      var deal = (c.deal || []).map(function (r) {
        return "<tr><td style=\"white-space:nowrap;font-weight:600\">" + r[0] + "</td><td>" + r[1] + "</td></tr>";
      }).join("");
      var qs = (L(c, "qs") || []).map(function (q) { return "<li>" + q + "</li>"; }).join("");
      var fig = c.fig ? '<figure class="fig-card"><div class="fig-title">' + c.fig.title +
        '</div><div class="fig-body">' + c.fig.svg + '</div><figcaption class="fig-cap">' + c.fig.cap + "</figcaption></figure>" : "";
      return '<div class="case-card">' +
        '<div class="case-head"><span class="case-badge">' + (vi ? "TÌNH HUỐNG" : "CASE STUDY") + "</span>" +
        '<span class="case-tag">' + c.tag + "</span></div>" +
        "<h3 class=\"case-title\">" + L(c, "title") + "</h3>" +
        (deal ? '<table class="case-facts">' + deal + "</table>" : "") +
        '<div class="case-body">' + L(c, "body") + "</div>" +
        fig +
        (qs ? '<div class="case-qs"><b>' + (vi ? "Câu hỏi thảo luận (dùng cho bài tập nhóm)" : "Discussion questions (for group assignment)") +
              "</b><ol>" + qs + "</ol></div>" : "") +
        (c.src ? '<div class="case-src"><b>' + (vi ? "Nguồn tra cứu: " : "Sources to verify: ") + "</b>" + c.src + "</div>" : "") +
        "</div>";
    }).join("");
  };

})();
