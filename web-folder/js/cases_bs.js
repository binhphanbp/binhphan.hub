/* =====================================================================
   BAF736 · INVESTMENT BANKING — SUPPLEMENTARY CASE BANK (v5.4)

   Why this file exists. The course already carries 201 essay items and a
   19-case deal library, but the case coverage does not follow the exam
   weights. The final paper weights Ch.3 and Ch.5 at ten questions each
   against five for the rest, and those two chapters had only two and three
   case-type items respectively — the thinnest of the six.

   Three cases are added here, aimed at the two double-weighted chapters plus
   the capital-raising chapter, all built around the calculation a candidate
   is most likely to be asked to perform under exam conditions:

     IB-C2  rights issue — theoretical ex-rights price and the value of a right
     IB-C3  share-for-share acquisition — accretion / dilution and the P/E rule
     IB-C5  advisory mandate — conflict of interest and the fairness opinion

   EDITORIAL RULES. Companies and figures are CONSTRUCTED FOR TEACHING, not
   drawn from any real transaction, and may not be cited as real data. Every
   number is internally consistent and was computed before the prose was
   written — in IB-C2 the wealth-conservation identity is checked to the đồng,
   and in IB-C3 the P/E shortcut is verified against the full calculation.
   For real deals see the existing IB_CASES library and its source notes.
   ===================================================================== */
(function () {
"use strict";

/* MUST load after essay.js … essay7.js, which each ASSIGN their own bank.
   This one creates its own array, so order only matters for the app reading it. */
window.ESSAY_BANK7 = (window.ESSAY_BANK7 || []).concat([

/* ---------- CHAPTER 2 · CAPITAL RAISING ---------- */
{ id: "IB-C2", ch: 2, type: "case", clo: "CLO2, CLO3", marks: 8,
  q: `<p><b>"They are selling shares at a 38% discount — we are being robbed."</b></p>
<p>Hoàng Minh Corporation (figures constructed for teaching) has <b>100 million shares</b> trading at <b>40,000 đ</b>. To fund a new plant the board announces a <b>1-for-4 rights issue at 25,000 đ</b>: every shareholder may buy one new share for every four held.</p>
<p>A retail shareholder writes to the board: <i>"You are issuing shares at 25,000 when the market price is 40,000. That is a 38% discount and it transfers my money to whoever buys the new shares. I demand the issue be priced at market."</i></p>
<p><b>Required.</b></p>
<ol>
<li><b>(2 marks)</b> Compute the theoretical ex-rights price (TERP) and the value of one right.</li>
<li><b>(3 marks)</b> A shareholder holds 4 shares before the issue. Show her total wealth (a) before, (b) after, if she exercises her right, and (c) after, if she lets the right lapse. Is the shareholder's complaint correct?</li>
<li><b>(2 marks)</b> If the discount does not harm shareholders, why do issuers bother with one at all? Give two reasons.</li>
<li><b>(1 mark)</b> The bank proposes a <i>standby underwriting</i> arrangement. What risk does that transfer, and from whom to whom?</li>
</ol>`,
  guide: `<p><b>Part 1.</b> New shares issued = 100m × ¼ = <b>25 million</b>.</p>
<p>TERP = (100m × 40,000 + 25m × 25,000) ÷ 125m = (4,000,000m + 625,000m) ÷ 125m = <b>37,000 đ</b>.</p>
<p>Value of one right = (TERP − subscription price) × ratio = (37,000 − 25,000) × ¼ = <b>3,000 đ</b> per existing share held.</p>
<p><b>Part 2.</b></p>
<ul>
<li><b>(a) Before:</b> 4 × 40,000 = <b>160,000 đ</b></li>
<li><b>(b) Exercises:</b> she now owns 5 shares worth 37,000 each = 185,000 đ, but paid 25,000 for the new one. Net wealth = 185,000 − 25,000 = <b>160,000 đ</b>. Equivalently: 4 × 37,000 + (37,000 − 25,000) = 148,000 + 12,000 = 160,000 đ.</li>
<li><b>(c) Lets it lapse:</b> 4 × 37,000 = <b>148,000 đ</b>. She has lost exactly <b>12,000 đ</b> — which is 4 × 3,000, the value of the rights she threw away.</li>
</ul>
<p>The complaint is <b>wrong</b>, and it is wrong in an instructive way. The discount does not transfer wealth <i>from</i> shareholders <i>to</i> anyone, because in a rights issue the buyers of the cheap shares <b>are</b> the existing shareholders, in exact proportion to what they already own. Her wealth is identical to the đồng whether the issue is priced at 25,000 or at 39,000; only the split between share price and right value changes.</p>
<p>What <i>would</i> harm her is a discounted issue placed with outsiders — that is a placing, not a rights issue, and the distinction is the whole point of pre-emption rights.</p>
<p>The one real danger for her is <b>inaction</b>. A shareholder who ignores the letter loses 12,000 đ. This is why underwriters and registrars chase retail holders, and why many markets require unexercised rights to be sold on the shareholder's behalf.</p>
<p><b>Part 3.</b> Two reasons a discount is nevertheless used:</p>
<ul>
<li><b>Take-up insurance.</b> The offer period runs for weeks, and the market price moves during it. If the price fell below the subscription price the issue would fail entirely, because no one pays 39,000 for what the market sells at 37,500. A deep discount buys a margin of safety against that.</li>
<li><b>Underwriting cost.</b> The underwriter's fee prices the probability of being left holding unsubscribed shares. A deeper discount lowers that probability and therefore lowers the fee — the discount is, in effect, paid to shareholders themselves rather than to the bank.</li>
</ul>
<p>A third acceptable answer: a discount improves the optics of take-up, and a visibly well-subscribed issue supports the aftermarket.</p>
<p><b>Part 4.</b> Standby underwriting transfers the risk of <b>under-subscription</b> — the risk that shareholders do not take up their rights — from the <b>issuer</b> to the <b>underwriting bank</b>, which commits to buy whatever is left at the subscription price.</p>
<p>The issuer therefore knows its proceeds with certainty at signing. The bank charges for that certainty and manages the exposure by sub-underwriting to institutions. Note the incentive this creates: the bank prefers a <i>deeper</i> discount than the issuer does, because a deeper discount makes its commitment safer. Whose interest the pricing recommendation actually serves is a fair question for the board to ask.</p>
<p class="small muted"><b>Where to look it up.</b> Rights issue mechanics and pre-emption rules in Vietnam: Law on Securities and the implementing decrees; issuer disclosures on HOSE/HNX for recent rights issues.</p>`,
  rubric: `Part 1: TERP 1.0; value of a right 1.0. Part 2: three wealth figures 1.5; explicit statement that (a) and (b) are equal 0.75; identifying that the loss in (c) equals the value of the rights forgone 0.75. An answer that agrees with the shareholder's complaint scores zero for this part. Part 3: 1.0 per reason. Part 4: naming under-subscription risk and both parties 1.0; the observation about the bank's incentive earns credit if the rest is complete.`,
  qVi: `<p><b>"Họ bán cổ phiếu với mức chiết khấu 38% — chúng tôi đang bị cướp."</b></p>
<p>Tổng công ty Hoàng Minh (số liệu dựng cho mục đích giảng dạy) có <b>100 triệu cổ phiếu</b> đang giao dịch ở giá <b>40.000 đ</b>. Để tài trợ cho một nhà máy mới, hội đồng quản trị công bố <b>đợt chào bán cổ phiếu cho cổ đông hiện hữu theo tỷ lệ 4:1, giá 25.000 đ</b>: cứ sở hữu bốn cổ phiếu thì cổ đông được quyền mua một cổ phiếu mới.</p>
<p>Một cổ đông cá nhân viết thư cho hội đồng quản trị: <i>"Các ông phát hành cổ phiếu giá 25.000 trong khi giá thị trường là 40.000. Đó là mức chiết khấu 38%, và nó chuyển tiền của tôi sang túi bất kỳ ai mua cổ phiếu mới. Tôi yêu cầu đợt phát hành phải được định giá theo giá thị trường."</i></p>
<p><b>Yêu cầu.</b></p>
<ol>
<li><b>(2 điểm)</b> Tính giá lý thuyết sau khi thực hiện quyền (TERP) và giá trị của một quyền mua.</li>
<li><b>(3 điểm)</b> Một cổ đông nắm 4 cổ phiếu trước đợt phát hành. Hãy tính tổng tài sản của bà (a) trước đợt phát hành, (b) sau đợt phát hành nếu bà thực hiện quyền, và (c) sau đợt phát hành nếu bà để quyền hết hạn. Lời phàn nàn của cổ đông có đúng không?</li>
<li><b>(2 điểm)</b> Nếu mức chiết khấu không gây hại cho cổ đông, tại sao tổ chức phát hành vẫn phải chiết khấu? Nêu hai lý do.</li>
<li><b>(1 điểm)</b> Ngân hàng đề xuất hình thức <i>bảo lãnh dự phòng (standby underwriting)</i>. Hình thức này chuyển giao rủi ro gì, từ ai sang ai?</li>
</ol>`,
  guideVi: `<p><b>Phần 1.</b> Số cổ phiếu mới phát hành = 100 triệu × ¼ = <b>25 triệu</b>.</p>
<p>TERP = (100 triệu × 40.000 + 25 triệu × 25.000) ÷ 125 triệu = (4.000 tỷ + 625 tỷ) ÷ 125 triệu = <b>37.000 đ</b>.</p>
<p>Giá trị một quyền = (TERP − giá mua) × tỷ lệ = (37.000 − 25.000) × ¼ = <b>3.000 đ</b> cho mỗi cổ phiếu hiện hữu đang nắm giữ.</p>
<p><b>Phần 2.</b></p>
<ul>
<li><b>(a) Trước:</b> 4 × 40.000 = <b>160.000 đ</b></li>
<li><b>(b) Thực hiện quyền:</b> bà sở hữu 5 cổ phiếu, mỗi cổ phiếu trị giá 37.000 = 185.000 đ, nhưng đã trả 25.000 cho cổ phiếu mới. Tài sản ròng = 185.000 − 25.000 = <b>160.000 đ</b>. Tương đương: 4 × 37.000 + (37.000 − 25.000) = 148.000 + 12.000 = 160.000 đ.</li>
<li><b>(c) Để quyền hết hạn:</b> 4 × 37.000 = <b>148.000 đ</b>. Bà mất đúng <b>12.000 đ</b> — bằng 4 × 3.000, giá trị các quyền mua bà đã bỏ phí.</li>
</ul>
<p>Lời phàn nàn là <b>sai</b>, và sai theo một cách rất đáng học. Mức chiết khấu không chuyển tài sản <i>từ</i> cổ đông <i>sang</i> ai cả, vì trong đợt chào bán cho cổ đông hiện hữu, người mua cổ phiếu giá rẻ <b>chính là</b> các cổ đông hiện hữu, theo đúng tỷ lệ họ đang sở hữu. Tài sản của bà giữ nguyên đến từng đồng dù giá phát hành là 25.000 hay 39.000; chỉ có cách chia giữa giá cổ phiếu và giá trị quyền mua là thay đổi.</p>
<p>Điều <i>thực sự</i> gây hại cho bà là một đợt phát hành có chiết khấu bán cho người ngoài — đó là phát hành riêng lẻ (placing), không phải chào bán cho cổ đông hiện hữu, và sự khác biệt này chính là ý nghĩa của quyền ưu tiên mua trước.</p>
<p>Mối nguy thực sự duy nhất với bà là <b>không làm gì</b>. Cổ đông bỏ qua thông báo sẽ mất 12.000 đ. Đó là lý do tổ chức bảo lãnh và đơn vị quản lý sổ cổ đông phải liên hệ, đốc thúc cổ đông cá nhân, và vì sao nhiều thị trường quy định quyền mua chưa thực hiện phải được bán thay cho cổ đông.</p>
<p><b>Phần 3.</b> Hai lý do vẫn dùng mức chiết khấu:</p>
<ul>
<li><b>Bảo hiểm cho tỷ lệ đăng ký mua.</b> Thời gian chào bán kéo dài nhiều tuần và giá thị trường biến động trong thời gian đó. Nếu giá giảm xuống dưới giá phát hành, đợt phát hành sẽ thất bại hoàn toàn, vì không ai trả 39.000 cho thứ mà thị trường đang bán 37.500. Chiết khấu sâu tạo ra biên an toàn trước rủi ro đó.</li>
<li><b>Chi phí bảo lãnh.</b> Phí bảo lãnh phản ánh xác suất tổ chức bảo lãnh phải ôm số cổ phiếu không được đăng ký mua. Chiết khấu sâu hơn làm giảm xác suất đó và do đó giảm phí — về thực chất, khoản chiết khấu được trả cho chính cổ đông thay vì cho ngân hàng.</li>
</ul>
<p>Câu trả lời thứ ba được chấp nhận: chiết khấu làm tỷ lệ đăng ký mua trông đẹp hơn, và một đợt phát hành được đăng ký mua rõ ràng là thành công sẽ hỗ trợ giá sau phát hành.</p>
<p><b>Phần 4.</b> Bảo lãnh dự phòng chuyển rủi ro <b>không được đăng ký mua hết</b> — rủi ro cổ đông không thực hiện quyền — từ <b>tổ chức phát hành</b> sang <b>ngân hàng bảo lãnh</b>, bên cam kết mua toàn bộ phần còn lại ở giá phát hành.</p>
<p>Nhờ vậy tổ chức phát hành biết chắc số tiền thu được ngay khi ký kết. Ngân hàng tính phí cho sự chắc chắn đó và quản lý rủi ro bằng cách bảo lãnh lại (sub-underwriting) cho các tổ chức khác. Lưu ý động cơ phát sinh: ngân hàng muốn mức chiết khấu <i>sâu hơn</i> so với tổ chức phát hành, vì chiết khấu sâu hơn làm cam kết của ngân hàng an toàn hơn. Khuyến nghị định giá thực sự phục vụ lợi ích của ai là câu hỏi chính đáng mà hội đồng quản trị nên đặt ra.</p>
<p class="small muted"><b>Tra cứu ở đâu.</b> Cơ chế chào bán cho cổ đông hiện hữu và quy định về quyền ưu tiên mua tại Việt Nam: Luật Chứng khoán và các nghị định hướng dẫn; công bố thông tin của tổ chức phát hành trên HOSE/HNX về các đợt phát hành quyền mua gần đây.</p>`,
  rubricVi: `Phần 1: TERP 1,0; giá trị một quyền 1,0. Phần 2: ba con số tài sản 1,5; nêu rõ (a) và (b) bằng nhau 0,75; chỉ ra khoản lỗ ở (c) bằng giá trị các quyền bị bỏ phí 0,75. Bài làm đồng tình với lời phàn nàn của cổ đông được 0 điểm phần này. Phần 3: 1,0 cho mỗi lý do. Phần 4: nêu đúng rủi ro không được đăng ký mua hết và cả hai bên 1,0; nhận xét về động cơ của ngân hàng được cộng điểm nếu các ý khác đã đầy đủ.` },

/* ---------- CHAPTER 3 · M&A (double weight in the final paper) ---------- */
{ id: "IB-C3", ch: 3, type: "case", clo: "CLO3", marks: 8,
  q: `<p><b>Will the deal add to earnings per share?</b></p>
<p>Đại Long is considering an all-share acquisition of Tân Hoà (figures constructed for teaching).</p>
<table class="tbl"><tr><th></th><th>Đại Long (buyer)</th><th>Tân Hoà (target)</th></tr>
<tr><td>Net profit</td><td>900 bn đ</td><td>240 bn đ</td></tr>
<tr><td>Shares outstanding</td><td>300 million</td><td>120 million</td></tr>
<tr><td>Share price</td><td>60,000 đ</td><td>25,000 đ</td></tr></table>
<p>The offer is <b>a 30% premium, paid entirely in Đại Long shares</b>. Assume no synergies at first.</p>
<p><b>Required.</b></p>
<ol>
<li><b>(2 marks)</b> Compute EPS and P/E for each company before the deal.</li>
<li><b>(3 marks)</b> Compute the offer price per share, the total consideration, the number of new Đại Long shares issued, and the combined EPS. Is the deal accretive or dilutive, and by how much?</li>
<li><b>(2 marks)</b> State the P/E rule for a share-for-share deal and verify that it predicts your answer to part 2.</li>
<li><b>(1 mark)</b> The CEO says: "It is accretive, therefore it creates value for our shareholders." Comment.</li>
</ol>`,
  guide: `<p><b>Part 1.</b></p>
<ul>
<li>Đại Long: EPS = 900bn ÷ 300m = <b>3,000 đ</b>; P/E = 60,000 ÷ 3,000 = <b>20.0×</b></li>
<li>Tân Hoà: EPS = 240bn ÷ 120m = <b>2,000 đ</b>; P/E = 25,000 ÷ 2,000 = <b>12.5×</b></li>
</ul>
<p><b>Part 2.</b></p>
<ul>
<li>Offer price = 25,000 × 1.30 = <b>32,500 đ</b> per Tân Hoà share</li>
<li>Total consideration = 32,500 × 120m = <b>3,900 bn đ</b></li>
<li>New shares issued = 3,900bn ÷ 60,000 = <b>65 million</b></li>
<li>Combined profit = 900 + 240 = 1,140 bn; combined shares = 300 + 65 = 365 million</li>
<li>Combined EPS = 1,140bn ÷ 365m = <b>3,123 đ</b></li>
</ul>
<p>EPS rises from 3,000 to 3,123, so the deal is <b>accretive by 4.11%</b> — before any synergies at all.</p>
<p><b>Part 3.</b> The rule: in a share-for-share deal with no synergies, the transaction is <b>accretive if the acquirer's P/E exceeds the P/E it pays for the target</b>, and dilutive if it is lower.</p>
<p>Here the acquirer trades at 20.0×. The P/E paid for the target is 32,500 ÷ 2,000 = <b>16.25×</b>. Since 20.0 > 16.25, the rule predicts accretion — which matches the 4.11% computed directly.</p>
<p>The intuition is worth stating: paying in shares means issuing claims on earnings valued at 20× and buying earnings priced at 16.25×. Each new share issued brings in more earnings than the earnings it dilutes. Note that the premium is already inside the P/E paid — a large enough premium would push the paid P/E above 20× and flip the deal to dilutive. Here the break-even premium is 60% (which would price the target at 40,000 đ = 20× its EPS).</p>
<p><b>Part 4.</b> The CEO's inference is <b>wrong</b>, and this is one of the most important points in the chapter.</p>
<p>Accretion is an <i>arithmetic consequence</i> of the two P/E ratios, not evidence of economic gain. It happens automatically whenever a high-multiple company buys a low-multiple one, even if the target is worth exactly what was paid and not a đồng more. Nothing in the calculation asks whether the businesses fit, whether the 900 bn đ premium will ever be recovered, or whether Đại Long's own multiple deserves to survive after taking on a lower-quality earnings stream.</p>
<p>Indeed the model shows how weak the test is: this deal remains accretive even if the combination <i>destroys</i> up to 45 bn đ of annual profit. A metric that can be satisfied while value is being destroyed is not a test of value creation.</p>
<p>The correct test is whether the present value of the synergies exceeds the premium paid — here, whether the deal generates more than <b>900 bn đ</b> in present value (120m × 7,500 đ of premium). EPS accretion is a communication tool for the market; net present value is the decision rule.</p>
<p class="small muted"><b>Where to look it up.</b> Accretion/dilution practice: the merger-model chapters of any investment banking text; for real transactions, the pro-forma earnings tables in merger circulars and 8-K/S-4 filings.</p>`,
  rubric: `Part 1: 0.5 per figure. Part 2: offer price, consideration, new shares 1.5; combined EPS 1.0; accretion percentage 0.5. Part 3: correct statement of the rule 1.0; verifying it against part 2 with the P/E paid 1.0. Part 4: 1.0 for stating that accretion follows from the multiples rather than from value creation. An answer that endorses the CEO scores zero for part 4; recognising that the correct test is synergies against premium earns full credit.`,
  qVi: `<p><b>Thương vụ có làm tăng thu nhập trên mỗi cổ phiếu?</b></p>
<p>Đại Long đang cân nhắc mua lại Tân Hoà, thanh toán toàn bộ bằng cổ phiếu (số liệu dựng cho mục đích giảng dạy).</p>
<table class="tbl"><tr><th></th><th>Đại Long (bên mua)</th><th>Tân Hoà (mục tiêu)</th></tr>
<tr><td>Lợi nhuận ròng</td><td>900 tỷ đ</td><td>240 tỷ đ</td></tr>
<tr><td>Số cổ phiếu lưu hành</td><td>300 triệu</td><td>120 triệu</td></tr>
<tr><td>Giá cổ phiếu</td><td>60.000 đ</td><td>25.000 đ</td></tr></table>
<p>Đề nghị mua có <b>phần bù 30%, thanh toán toàn bộ bằng cổ phiếu Đại Long</b>. Trước hết giả định không có cộng hưởng.</p>
<p><b>Yêu cầu.</b></p>
<ol>
<li><b>(2 điểm)</b> Tính EPS và P/E của từng công ty trước thương vụ.</li>
<li><b>(3 điểm)</b> Tính giá chào mua mỗi cổ phiếu, tổng giá trị thanh toán, số cổ phiếu Đại Long phát hành mới và EPS hợp nhất. Thương vụ làm tăng hay giảm EPS, và bao nhiêu?</li>
<li><b>(2 điểm)</b> Phát biểu quy tắc P/E cho thương vụ hoán đổi cổ phiếu và kiểm chứng rằng quy tắc này dự báo đúng kết quả ở câu 2.</li>
<li><b>(1 điểm)</b> Tổng giám đốc nói: "Thương vụ làm tăng EPS, vậy nó tạo ra giá trị cho cổ đông của chúng ta." Hãy nhận xét.</li>
</ol>`,
  guideVi: `<p><b>Phần 1.</b></p>
<ul>
<li>Đại Long: EPS = 900 tỷ ÷ 300 triệu = <b>3.000 đ</b>; P/E = 60.000 ÷ 3.000 = <b>20,0×</b></li>
<li>Tân Hoà: EPS = 240 tỷ ÷ 120 triệu = <b>2.000 đ</b>; P/E = 25.000 ÷ 2.000 = <b>12,5×</b></li>
</ul>
<p><b>Phần 2.</b></p>
<ul>
<li>Giá chào mua = 25.000 × 1,30 = <b>32.500 đ</b> mỗi cổ phiếu Tân Hoà</li>
<li>Tổng giá trị thanh toán = 32.500 × 120 triệu = <b>3.900 tỷ đ</b></li>
<li>Số cổ phiếu phát hành mới = 3.900 tỷ ÷ 60.000 = <b>65 triệu</b></li>
<li>Lợi nhuận hợp nhất = 900 + 240 = 1.140 tỷ; số cổ phiếu hợp nhất = 300 + 65 = 365 triệu</li>
<li>EPS hợp nhất = 1.140 tỷ ÷ 365 triệu = <b>3.123 đ</b></li>
</ul>
<p>EPS tăng từ 3.000 lên 3.123, nên thương vụ <b>làm tăng EPS 4,11%</b> — ngay cả khi chưa có cộng hưởng nào.</p>
<p><b>Phần 3.</b> Quy tắc: trong thương vụ hoán đổi cổ phiếu không có cộng hưởng, giao dịch <b>làm tăng EPS nếu P/E của bên mua cao hơn P/E mà bên mua trả cho doanh nghiệp mục tiêu</b>, và làm giảm EPS nếu thấp hơn.</p>
<p>Ở đây bên mua giao dịch ở mức 20,0×. P/E trả cho doanh nghiệp mục tiêu là 32.500 ÷ 2.000 = <b>16,25×</b>. Vì 20,0 > 16,25, quy tắc dự báo EPS tăng — khớp với mức 4,11% tính trực tiếp.</p>
<p>Nên nêu rõ trực giác: thanh toán bằng cổ phiếu nghĩa là phát hành quyền đòi trên lợi nhuận đang được định giá 20 lần để mua lợi nhuận được định giá 16,25 lần. Mỗi cổ phiếu mới phát hành mang về nhiều lợi nhuận hơn phần lợi nhuận mà nó pha loãng. Lưu ý phần bù đã nằm sẵn trong P/E phải trả — phần bù đủ lớn sẽ đẩy P/E phải trả vượt 20× và làm thương vụ chuyển sang giảm EPS. Ở đây phần bù hoà vốn là 60% (tương ứng giá 40.000 đ cho doanh nghiệp mục tiêu = 20 lần EPS).</p>
<p><b>Phần 4.</b> Suy luận của tổng giám đốc là <b>sai</b>, và đây là một trong những điểm quan trọng nhất của chương.</p>
<p>Tăng EPS là <i>hệ quả số học</i> của hai hệ số P/E, không phải bằng chứng về lợi ích kinh tế. Nó tự động xảy ra mỗi khi một công ty có bội số cao mua một công ty có bội số thấp, kể cả khi doanh nghiệp mục tiêu chỉ đáng đúng số tiền đã trả và không hơn một đồng. Không có gì trong phép tính hỏi liệu hai doanh nghiệp có phù hợp với nhau không, liệu khoản phần bù 900 tỷ đ có bao giờ thu hồi được không, hay liệu bội số của chính Đại Long có còn đứng vững sau khi gánh thêm một dòng lợi nhuận chất lượng thấp hơn.</p>
<p>Thực ra mô hình cho thấy phép thử này yếu đến mức nào: thương vụ vẫn làm tăng EPS ngay cả khi việc hợp nhất <i>phá huỷ</i> tới 45 tỷ đ lợi nhuận mỗi năm. Một thước đo vẫn được thoả mãn trong khi giá trị đang bị phá huỷ thì không phải là phép thử về tạo lập giá trị.</p>
<p>Phép thử đúng là giá trị hiện tại của cộng hưởng có vượt phần bù đã trả hay không — ở đây, thương vụ có tạo ra hơn <b>900 tỷ đ</b> giá trị hiện tại hay không (120 triệu × 7.500 đ phần bù). Tăng EPS là công cụ truyền thông với thị trường; giá trị hiện tại ròng mới là quy tắc ra quyết định.</p>
<p class="small muted"><b>Tra cứu ở đâu.</b> Thực hành phân tích tăng/giảm EPS: các chương về mô hình sáp nhập trong giáo trình ngân hàng đầu tư; với giao dịch thực tế, xem các bảng lợi nhuận dự kiến (pro forma) trong tài liệu gửi cổ đông về thương vụ sáp nhập và hồ sơ 8-K/S-4.</p>`,
  rubricVi: `Phần 1: 0,5 cho mỗi con số. Phần 2: giá chào mua, tổng giá trị thanh toán, số cổ phiếu mới 1,5; EPS hợp nhất 1,0; tỷ lệ tăng EPS 0,5. Phần 3: phát biểu đúng quy tắc 1,0; kiểm chứng với kết quả câu 2 bằng P/E phải trả 1,0. Phần 4: 1,0 cho việc nêu rằng tăng EPS là hệ quả của các bội số chứ không phải của tạo lập giá trị. Bài làm tán thành ý kiến của tổng giám đốc được 0 điểm phần 4; nhận ra phép thử đúng là so sánh cộng hưởng với phần bù được trọn điểm.` },

/* ---------- CHAPTER 5 · CORPORATE ADVISORY (double weight) ---------- */
{ id: "IB-C5", ch: 5, type: "case", clo: "CLO4", marks: 6,
  q: `<p><b>Three fees, one adviser.</b></p>
<p>An investment bank is retained by the board of Phú Cường JSC to advise on an unsolicited takeover approach. The engagement letter provides for:</p>
<table class="tbl"><tr><th>Fee</th><th>Amount</th><th>Payable when</th></tr>
<tr><td>Retainer</td><td>8 bn đ</td><td>On signing, non-refundable</td></tr>
<tr><td>Success fee</td><td>0.8% of transaction value</td><td>Only if a sale completes</td></tr>
<tr><td>Fairness opinion fee</td><td>12 bn đ</td><td>On delivery of the opinion</td></tr></table>
<p>The approach values Phú Cường at 4,000 bn đ. The same bank's lending division has an outstanding loan to the bidder, and its research division covers Phú Cường with a "buy" recommendation.</p>
<p><b>Required.</b></p>
<ol>
<li><b>(2 marks)</b> Compute what the bank earns if the deal completes and if it does not. What behaviour does that structure encourage?</li>
<li><b>(2 marks)</b> Identify three distinct conflicts of interest in this engagement and say who is exposed to each.</li>
<li><b>(2 marks)</b> The board asks whether the fairness opinion protects them. Explain what a fairness opinion does and does not establish.</li>
</ol>`,
  guide: `<p><b>Part 1.</b> If the deal completes: 8 + (0.008 × 4,000) + 12 = 8 + 32 + 12 = <b>52 bn đ</b>. If it does not: 8 + 12 = <b>20 bn đ</b>.</p>
<p>So <b>62% of the bank's fee depends on a transaction happening at all</b>, and the success fee also rises with price — but only in the direction of completion. The structure rewards <i>doing the deal</i>, not <i>reaching the right answer</i>. An adviser paid this way has a financial interest in recommending acceptance even where the correct advice to the board is to reject and remain independent.</p>
<p>Note also the sizing: at 0.8%, arguing the price up by 100 bn đ earns the bank an extra 0.8 bn — while advising rejection costs it 32 bn. The incentive to negotiate hard is an order of magnitude weaker than the incentive to close.</p>
<p><b>Part 2.</b> Three distinct conflicts:</p>
<ul>
<li><b>Contingent fee versus objective advice.</b> Exposed party: <b>Phú Cường's shareholders</b>, who are relying on advice from someone paid mainly if they sell.</li>
<li><b>Lending relationship with the bidder.</b> The bank is a creditor of the counterparty on the other side of the table, and a completed acquisition may improve that borrower's position. Exposed party: <b>Phú Cường's shareholders again</b>, plus the bank's own reputation. This conflict is the most serious of the three because it sits <i>outside</i> the engagement and the board may not know about it unless it asks.</li>
<li><b>Research coverage.</b> The research division publishes a recommendation on a company the advisory division is being paid to sell. Exposed party: <b>public investors relying on that research</b>, and the integrity of the research product itself. This is what information barriers are supposed to prevent, and their existence must be disclosed rather than assumed.</li>
</ul>
<p>A fourth acceptable answer: the fairness opinion is delivered by a bank that is separately incentivised for the deal to complete, which compromises the opinion itself — the point of part 3.</p>
<p><b>Part 3.</b> What a fairness opinion <b>does</b>: it states a professional judgement that, as of a specific date and subject to stated assumptions and limitations, the consideration offered is fair <i>from a financial point of view</i> to a specified class of shareholders. It gives directors a documented, expert basis for their decision, and that documentation is its main legal value.</p>
<p>What it <b>does not</b> do — and the board should be told all four:</p>
<ul>
<li>It does <b>not</b> say the price is the best obtainable. "Fair" means within a defensible range, not maximal. A higher bid may well exist.</li>
<li>It does <b>not</b> recommend accepting. That decision belongs to the board and then to shareholders.</li>
<li>It does <b>not</b> address the commercial merits, the strategic logic, or what happens to employees.</li>
<li>It does <b>not</b> substitute for the board's own duty of care. Directors who outsource judgement to an opinion have not discharged that duty; they have documented it.</li>
</ul>
<p>The practical answer to the board's question: the opinion helps, but its protective value is weakened precisely because the bank issuing it also holds a 32 bn đ contingent interest in the answer being yes. Boards facing this problem commission the fairness opinion from a <b>second, unconflicted adviser paid a flat fee</b> — which is exactly why that practice exists.</p>
<p class="small muted"><b>Where to look it up.</b> Fairness opinion practice and its limits: FINRA Rule 5150 and the disclosure requirements it imposes; Delaware case law on the board's duty of care in change-of-control transactions. In Vietnam: the public tender-offer rules of the Law on Securities 2019 and Decree 155/2020/ND-CP (as amended by Decree 245/2025/ND-CP), under which the target's board must publish a written evaluation and recommendation on the offer, together with any dissenting directors' views.</p>`,
  rubric: `Part 1: both figures 1.0; identifying that the majority of the fee is contingent and what that encourages 1.0. Part 2: 0.67 per conflict, requiring both the conflict AND the exposed party; an answer naming only the contingent fee scores at most 0.67. Part 3: what the opinion does establish 0.75; at least three of the four limitations 0.75; connecting the limitation back to this bank's own contingent interest earns the remainder.`,
  qVi: `<p><b>Ba khoản phí, một nhà tư vấn.</b></p>
<p>Một ngân hàng đầu tư được hội đồng quản trị CTCP Phú Cường thuê tư vấn về một đề nghị thâu tóm không được mời (unsolicited). Hợp đồng tư vấn quy định:</p>
<table class="tbl"><tr><th>Phí</th><th>Mức phí</th><th>Thời điểm thanh toán</th></tr>
<tr><td>Phí cam kết (retainer)</td><td>8 tỷ đ</td><td>Khi ký, không hoàn lại</td></tr>
<tr><td>Phí thành công</td><td>0,8% giá trị giao dịch</td><td>Chỉ khi thương vụ bán hoàn tất</td></tr>
<tr><td>Phí ý kiến về tính hợp lý (fairness opinion)</td><td>12 tỷ đ</td><td>Khi giao văn bản ý kiến</td></tr></table>
<p>Đề nghị thâu tóm định giá Phú Cường 4.000 tỷ đ. Bộ phận cho vay của cùng ngân hàng đang có một khoản vay chưa tất toán với bên chào mua, và bộ phận phân tích của ngân hàng theo dõi Phú Cường với khuyến nghị "mua".</p>
<p><b>Yêu cầu.</b></p>
<ol>
<li><b>(2 điểm)</b> Tính số tiền ngân hàng thu được nếu thương vụ hoàn tất và nếu không hoàn tất. Cấu trúc phí đó khuyến khích hành vi nào?</li>
<li><b>(2 điểm)</b> Chỉ ra ba xung đột lợi ích khác nhau trong hợp đồng này và cho biết ai chịu rủi ro từ mỗi xung đột.</li>
<li><b>(2 điểm)</b> Hội đồng quản trị hỏi ý kiến về tính hợp lý có bảo vệ họ không. Giải thích ý kiến về tính hợp lý xác lập điều gì và không xác lập điều gì.</li>
</ol>`,
  guideVi: `<p><b>Phần 1.</b> Nếu thương vụ hoàn tất: 8 + (0,008 × 4.000) + 12 = 8 + 32 + 12 = <b>52 tỷ đ</b>. Nếu không: 8 + 12 = <b>20 tỷ đ</b>.</p>
<p>Như vậy <b>62% phí của ngân hàng phụ thuộc vào việc giao dịch có xảy ra hay không</b>, và phí thành công còn tăng theo giá — nhưng chỉ khi đi đến hoàn tất. Cấu trúc này thưởng cho việc <i>chốt được thương vụ</i>, chứ không phải cho việc <i>đưa ra lời khuyên đúng</i>. Một nhà tư vấn được trả phí theo cách này có lợi ích tài chính trong việc khuyến nghị chấp nhận, ngay cả khi lời khuyên đúng cho hội đồng quản trị là từ chối và giữ độc lập.</p>
<p>Lưu ý cả quy mô: ở mức 0,8%, thương lượng nâng giá thêm 100 tỷ đ chỉ đem lại cho ngân hàng thêm 0,8 tỷ — trong khi khuyến nghị từ chối khiến ngân hàng mất 32 tỷ. Động cơ thương lượng quyết liệt yếu hơn động cơ chốt giao dịch tới cả một bậc độ lớn.</p>
<p><b>Phần 2.</b> Ba xung đột khác nhau:</p>
<ul>
<li><b>Phí có điều kiện đối lập với lời khuyên khách quan.</b> Bên chịu rủi ro: <b>cổ đông của Phú Cường</b>, những người dựa vào lời khuyên của một bên chủ yếu chỉ được trả tiền nếu họ bán.</li>
<li><b>Quan hệ tín dụng với bên chào mua.</b> Ngân hàng là chủ nợ của đối tác ở phía bên kia bàn đàm phán, và một thương vụ thâu tóm hoàn tất có thể cải thiện vị thế của bên vay đó. Bên chịu rủi ro: <b>vẫn là cổ đông của Phú Cường</b>, cùng với uy tín của chính ngân hàng. Đây là xung đột nghiêm trọng nhất trong ba xung đột vì nó nằm <i>ngoài</i> hợp đồng tư vấn và hội đồng quản trị có thể không biết nếu không hỏi.</li>
<li><b>Hoạt động phân tích.</b> Bộ phận phân tích công bố khuyến nghị về một công ty mà bộ phận tư vấn đang được trả tiền để bán. Bên chịu rủi ro: <b>các nhà đầu tư đại chúng dựa vào báo cáo phân tích đó</b>, và tính liêm chính của chính sản phẩm phân tích. Đây là điều mà các hàng rào thông tin (information barriers) phải ngăn chặn, và sự tồn tại của chúng phải được công bố chứ không thể mặc nhiên coi là có.</li>
</ul>
<p>Câu trả lời thứ tư được chấp nhận: ý kiến về tính hợp lý do một ngân hàng có động cơ riêng muốn thương vụ hoàn tất đưa ra, nên chính ý kiến đó bị tổn hại — đây là ý của câu 3.</p>
<p><b>Phần 3.</b> Ý kiến về tính hợp lý <b>có</b> xác lập: một nhận định chuyên môn rằng, tại một thời điểm xác định và trong phạm vi các giả định và giới hạn đã nêu, mức giá được đề nghị là hợp lý <i>xét trên phương diện tài chính</i> đối với một nhóm cổ đông xác định. Nó cho các thành viên hội đồng quản trị một cơ sở chuyên môn bằng văn bản cho quyết định của họ, và giá trị pháp lý chủ yếu của nó nằm ở chính văn bản đó.</p>
<p>Những điều nó <b>không</b> xác lập — và hội đồng quản trị cần được biết cả bốn:</p>
<ul>
<li>Nó <b>không</b> nói rằng đây là mức giá tốt nhất có thể đạt được. "Hợp lý" nghĩa là nằm trong một khoảng có thể bảo vệ được, không phải cao nhất. Hoàn toàn có thể tồn tại một đề nghị cao hơn.</li>
<li>Nó <b>không</b> khuyến nghị chấp nhận. Quyết định đó thuộc về hội đồng quản trị, rồi đến cổ đông.</li>
<li>Nó <b>không</b> đề cập đến lợi ích thương mại, logic chiến lược hay số phận của người lao động.</li>
<li>Nó <b>không</b> thay thế nghĩa vụ cẩn trọng của chính hội đồng quản trị. Thành viên hội đồng phó mặc sự phán đoán cho một văn bản ý kiến thì chưa làm tròn nghĩa vụ đó; họ mới chỉ có giấy tờ ghi nhận nó.</li>
</ul>
<p>Câu trả lời thực tế cho câu hỏi của hội đồng quản trị: văn bản ý kiến có ích, nhưng giá trị bảo vệ của nó bị suy giảm chính vì ngân hàng phát hành ý kiến cũng có khoản lợi ích có điều kiện 32 tỷ đ nếu câu trả lời là "có". Các hội đồng quản trị gặp vấn đề này thường thuê ý kiến về tính hợp lý từ <b>một nhà tư vấn thứ hai, không có xung đột lợi ích, được trả phí cố định</b> — đó chính là lý do thông lệ này tồn tại.</p>
<p class="small muted"><b>Tra cứu ở đâu.</b> Thực hành về ý kiến tính hợp lý và giới hạn của nó: Quy tắc FINRA 5150 và các yêu cầu công bố thông tin mà quy tắc này đặt ra; án lệ Delaware về nghĩa vụ cẩn trọng của hội đồng quản trị trong giao dịch chuyển quyền kiểm soát. Tại Việt Nam: quy định về chào mua công khai trong Luật Chứng khoán 2019 và Nghị định 155/2020/NĐ-CP (sửa đổi bởi Nghị định 245/2025/NĐ-CP), theo đó hội đồng quản trị công ty mục tiêu phải công bố đánh giá, khuyến nghị bằng văn bản về đề nghị chào mua, kèm ý kiến khác (nếu có) của từng thành viên.</p>`,
  rubricVi: `Phần 1: cả hai con số 1,0; chỉ ra phần lớn phí là có điều kiện và điều đó khuyến khích hành vi gì 1,0. Phần 2: 0,67 cho mỗi xung đột, phải nêu cả xung đột LẪN bên chịu rủi ro; bài chỉ nêu phí có điều kiện được tối đa 0,67. Phần 3: điều văn bản ý kiến có xác lập 0,75; ít nhất ba trong bốn giới hạn 0,75; liên hệ giới hạn đó với lợi ích có điều kiện của chính ngân hàng này được phần điểm còn lại.` },

]);
})();
