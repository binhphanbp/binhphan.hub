/* =====================================================================
   BAF736 · BỔ SUNG TRẮC NGHIỆM CHƯƠNG 3 VÀ CHƯƠNG 5 (v5.5)

   Vì sao hai chương này. Chúng chiếm 10 câu mỗi chương trên tổng 40 của đề
   thi — gấp đôi bốn chương còn lại — nhưng lại có tỷ lệ câu ôn trên mỗi câu
   thi THẤP NHẤT: chương 5 được 17,7 và chương 3 được 18,3, trong khi chương 6
   được 35,0. Tức là hai chương thi nặng nhất lại là hai chương ít câu luyện
   nhất tính theo trọng số.

   Hai mươi tư câu ở đây bám vào những chỗ mà tầng đào sâu mới (deepdive.js)
   vừa chỉ ra là hay sai:
     • tăng lãi cơ bản KHÔNG phải phép thử giá trị
     • lựa chọn tiền mặt hay cổ phiếu phát ra tín hiệu gì
     • giao dịch nào làm cái bánh to lên, giao dịch nào chỉ cắt lại
     • quản trị: xung đột nào đang diễn ra quyết định cơ chế nào có tác dụng
     • chuyển đổi loại hình ≠ đại chúng ≠ niêm yết

   MỌI CON SỐ ĐÃ CHẠY KIỂM trước khi viết đề. Cặp câu mua lại cổ phiếu quỹ
   (B7-14 và B7-15) được dựng để cho ra +11,1% và −11,1% đối xứng nhau.

   Song ngữ nằm ngay trong từng câu (qVi/optsVi/explVi), theo đúng cách
   data_vi_mcq_ch*.js gắn bản dịch — nên không cần thêm tệp dịch riêng.
   Ghép vào QUIZ_BANK6 (app.js đã gộp sẵn ngân hàng này ở dòng 14).
   ===================================================================== */
(function () {
"use strict";

var ADD = [

/* ================== CHƯƠNG 3 — MUA BÁN VÀ SÁP NHẬP ================== */

{ id:"B7-01", ch:3, level:3,
  q:"Across decades of event studies, the typical division of announced M&A gains is:",
  opts:["Acquirer shareholders capture most of the gains","Target shareholders capture almost all of the gains, while acquirer shareholders on average earn about zero","Gains are split roughly evenly","Both sides lose on average"],
  ans:1,
  expl:"In US deals of 1980–2005 acquirers paid an average premium of 43%; on announcement target shares rose about 15% while acquirers moved about +1%, with large losses concentrated in a few very big deals (1998–2001). The combined firm is often worth a little more, but that increment is handed over in the premium.",
  qVi:"Qua hàng chục năm nghiên cứu sự kiện, phần lợi công bố của một thương vụ M&A thường được chia thế nào?",
  optsVi:["Cổ đông bên mua hưởng phần lớn","Cổ đông bên bán hưởng gần như toàn bộ, còn cổ đông bên mua trung bình hưởng xấp xỉ bằng không","Chia đôi tương đối đều","Trung bình cả hai bên đều thiệt"],
  explVi:"Với các thương vụ ở Mỹ giai đoạn 1980–2005, bên mua trả thặng dư bình quân 43%; khi công bố, giá cổ phiếu bên bán tăng khoảng 15% còn bên mua khoảng +1%, với các khoản lỗ lớn tập trung ở vài thương vụ rất lớn (1998–2001). Doanh nghiệp hợp nhất thường đáng giá hơn một chút, nhưng phần chênh ấy đã được trao đi trong thặng dư chào mua.",
  src:"Deep dive 3.1" },

{ id:"B7-02", ch:3, level:3,
  q:"The 'winner's curse' in a competitive acquisition auction means that:",
  opts:["The winning bidder always has the worst analysts","Winning the auction and overpaying are close to the same event, because the winner is disproportionately the bidder whose estimate was most optimistic","The loser suffers reputational damage","The seller's adviser has failed to run a fair process"],
  ans:1,
  expl:"With unbiased but noisy estimates, the highest bid comes disproportionately from the most optimistic error. This happens even when every bidder analyses competently. The only defence is to bid below your own valuation by an amount that grows with the number of bidders.",
  qVi:"'Lời nguyền người thắng' trong một cuộc đấu giá thâu tóm cạnh tranh nghĩa là:",
  optsVi:["Bên thắng luôn có đội phân tích kém nhất","Thắng đấu giá và trả quá tay gần như là cùng một sự kiện, vì bên thắng phần lớn là bên có ước lượng lạc quan nhất","Bên thua bị tổn hại uy tín","Bên tư vấn cho người bán đã không tổ chức được một quy trình công bằng"],
  explVi:"Với các ước lượng không thiên lệch nhưng có nhiễu, giá chào cao nhất phần lớn đến từ sai số lạc quan nhất. Điều này xảy ra ngay cả khi mọi bên đều phân tích tử tế. Cách phòng duy nhất là chào thấp hơn định giá của chính mình, mức hạ tăng theo số bên tham gia.",
  src:"Deep dive 3.1" },

{ id:"B7-03", ch:3, level:3,
  q:"When a deal model relies mainly on revenue synergies to justify the premium, the analyst should be sceptical because:",
  opts:["Revenue synergies are never real","Revenue synergies depend on customer behaviour nobody controls, whereas cost synergies depend on decisions inside the firm","Accounting rules prohibit recognising them","They are taxed at a higher rate"],
  ans:1,
  expl:"Cost synergies (overlapping functions, procurement scale) are far more dependable because management can execute them unilaterally. A model leaning on cross-selling has usually run out of arguments — ask which line of the synergy schedule the premium actually rests on.",
  qVi:"Khi một mô hình thương vụ chủ yếu dựa vào cộng hưởng doanh thu để biện minh cho thặng dư chào mua, người phân tích nên hoài nghi vì:",
  optsVi:["Cộng hưởng doanh thu không bao giờ có thật","Cộng hưởng doanh thu phụ thuộc vào hành vi khách hàng mà không ai kiểm soát được, trong khi cộng hưởng chi phí phụ thuộc vào quyết định bên trong doanh nghiệp","Quy định kế toán cấm ghi nhận chúng","Chúng chịu thuế suất cao hơn"],
  explVi:"Cộng hưởng chi phí (chức năng trùng lặp, quy mô mua hàng) đáng tin hơn nhiều vì ban điều hành tự thực hiện được. Mô hình phải dựa vào bán chéo thường là mô hình đã hết lý lẽ — hãy hỏi thặng dư ấy thật ra tựa vào dòng nào trong bảng cộng hưởng.",
  src:"Deep dive 3.1" },

{ id:"B7-04", ch:3, level:4,
  q:"An acquirer earns 500 bn đ on 100 million shares (EPS 5,000đ) and trades at 100,000đ. It buys a target earning 80 bn đ for 1,300 bn đ, paid entirely in new shares. The deal is:",
  opts:["Dilutive: EPS falls to about 4,870đ","Accretive: EPS rises to about 5,133đ, an increase of 2.65%","EPS neutral, since the price paid equals fair value","Impossible to determine without the synergy forecast"],
  ans:1,
  expl:"Shares issued = 1,300bn/100,000 = 13m. Combined earnings 580 bn on 113m shares = 5,133đ. The acquirer's P/E is 20; the P/E paid for the target is 1,300/80 = 16.25. Buying earnings more cheaply than the market prices your own is accretive by arithmetic.",
  qVi:"Bên mua đạt lợi nhuận 500 tỷ đồng trên 100 triệu cổ phần (EPS 5.000đ) và giao dịch ở 100.000đ. Họ mua một doanh nghiệp có lợi nhuận 80 tỷ với giá 1.300 tỷ, thanh toán hoàn toàn bằng cổ phiếu mới. Thương vụ này:",
  optsVi:["Làm giảm lãi cơ bản: EPS xuống còn khoảng 4.870đ","Làm tăng lãi cơ bản: EPS lên khoảng 5.133đ, tăng 2,65%","Trung tính về lãi cơ bản, vì giá trả đúng bằng giá trị hợp lý","Không xác định được nếu chưa có dự báo cộng hưởng"],
  explVi:"Số cổ phần phát hành = 1.300 tỷ/100.000 = 13 triệu. Lợi nhuận hợp nhất 580 tỷ trên 113 triệu cổ phần = 5.133đ. P/E của bên mua là 20; P/E trả cho bên bán là 1.300/80 = 16,25. Mua lợi nhuận rẻ hơn mức thị trường định giá lợi nhuận của chính mình thì tăng lãi cơ bản là chuyện số học.",
  src:"Deep dive 3.1" },

{ id:"B7-05", ch:3, level:4,
  q:"Continuing the previous question: the chief executive argues the deal must create value because it is accretive. The correct rebuttal is:",
  opts:["The accretion figure was calculated incorrectly","Accretion follows automatically whenever a high-P/E acquirer buys a lower-P/E target, and would still occur even if the deal destroyed value each year — the test of value is whether the present value of synergies exceeds the premium","Accretion is only valid for cash deals","EPS is irrelevant to shareholders"],
  ans:1,
  expl:"A measure that can be satisfied while value is being destroyed is not a measure of value. Accretion is a consequence of the two P/E ratios, not evidence about synergies. This is one of the most frequently examined points in the chapter.",
  qVi:"Tiếp câu trên: tổng giám đốc lập luận rằng thương vụ chắc chắn tạo giá trị vì nó làm tăng lãi cơ bản. Cách bác lại đúng là:",
  optsVi:["Con số tăng lãi cơ bản đã tính sai","Tăng lãi cơ bản tự động xảy ra mỗi khi bên mua có P/E cao mua doanh nghiệp có P/E thấp hơn, và vẫn xảy ra ngay cả khi thương vụ phá huỷ giá trị mỗi năm — phép thử giá trị là hiện giá cộng hưởng có vượt thặng dư chào mua hay không","Tăng lãi cơ bản chỉ đúng với thương vụ trả tiền mặt","Lãi cơ bản không liên quan gì tới cổ đông"],
  explVi:"Một thước đo có thể thoả mãn được trong lúc giá trị đang bị phá huỷ thì không phải thước đo giá trị. Tăng lãi cơ bản là hệ quả của hai hệ số P/E, không phải bằng chứng về cộng hưởng. Đây là một trong những điểm ra thi nhiều nhất của chương.",
  src:"Deep dive 3.1" },

{ id:"B7-06", ch:3, level:3,
  q:"A target trades at 40,000đ (unaffected price) with 50 million shares. The acquirer offers 52,000đ per share and estimates synergies with a present value of 800 bn đ. The value accruing to the acquirer's shareholders is:",
  opts:["800 bn đ — the full synergy value","600 bn đ","200 bn đ — synergies of 800 bn less a premium of 600 bn","Zero, because the premium always equals the synergies"],
  ans:2,
  expl:"Premium = (52,000 − 40,000) × 50m = 600 bn đ, handed to the target's shareholders. The acquirer keeps 800 − 600 = 200 bn. This is the calculation that decides whether a deal is worth doing, and it is the one the accretion test cannot perform.",
  qVi:"Một doanh nghiệp mục tiêu giao dịch ở 40.000đ (giá chưa bị ảnh hưởng) với 50 triệu cổ phần. Bên mua chào 52.000đ mỗi cổ phần và ước tính cộng hưởng có hiện giá 800 tỷ đồng. Giá trị mà cổ đông bên mua nhận được là:",
  optsVi:["800 tỷ — toàn bộ giá trị cộng hưởng","600 tỷ","200 tỷ — cộng hưởng 800 tỷ trừ thặng dư 600 tỷ","Bằng không, vì thặng dư luôn đúng bằng cộng hưởng"],
  explVi:"Thặng dư = (52.000 − 40.000) × 50 triệu = 600 tỷ, trao cho cổ đông bên bán. Bên mua giữ lại 800 − 600 = 200 tỷ. Đây mới là phép tính quyết định thương vụ có đáng làm hay không, và là phép tính mà phép thử tăng lãi cơ bản không làm được.",
  src:"Lecture 3.3" },

{ id:"B7-07", ch:3, level:3,
  q:"A target trades at 60,000đ and the acquirer at 100,000đ. In an all-share offer at a 30% premium, the exchange ratio is:",
  opts:["0.60 acquirer shares per target share","0.78 acquirer shares per target share","1.28 acquirer shares per target share","1.67 acquirer shares per target share"],
  ans:1,
  expl:"Offer price = 60,000 × 1.30 = 78,000đ. Exchange ratio = 78,000/100,000 = 0.78. Note that in a fixed-ratio deal the target's shareholders carry the risk of the acquirer's share price moving between announcement and completion — which is why collars exist.",
  qVi:"Doanh nghiệp mục tiêu giao dịch ở 60.000đ, bên mua ở 100.000đ. Trong một đề nghị thanh toán hoàn toàn bằng cổ phiếu với thặng dư 30%, tỷ lệ hoán đổi là:",
  optsVi:["0,60 cổ phần bên mua cho mỗi cổ phần bên bán","0,78 cổ phần bên mua cho mỗi cổ phần bên bán","1,28 cổ phần bên mua cho mỗi cổ phần bên bán","1,67 cổ phần bên mua cho mỗi cổ phần bên bán"],
  explVi:"Giá chào = 60.000 × 1,30 = 78.000đ. Tỷ lệ hoán đổi = 78.000/100.000 = 0,78. Lưu ý trong thương vụ có tỷ lệ cố định, cổ đông bên bán gánh rủi ro giá cổ phiếu bên mua biến động giữa lúc công bố và lúc hoàn tất — đó là lý do tồn tại các điều khoản khung.",
  src:"Lecture 3.3" },

{ id:"B7-08", ch:3, level:3,
  q:"Announcement returns for share-financed acquisitions are systematically worse than for cash deals. The signalling explanation is that:",
  opts:["Share deals take longer to complete","A board that believes its shares are undervalued would pay cash; choosing shares suggests management thinks its own stock is expensive","Share deals attract more regulatory scrutiny","Cash deals have lower advisory fees"],
  ans:1,
  expl:"Management knows more about its own share price than the market does. Rational investors read the choice of currency as a statement about the acquirer's own valuation — whether or not it was intended as one.",
  qVi:"Lợi suất công bố của thương vụ tài trợ bằng cổ phiếu kém một cách có hệ thống so với thương vụ trả tiền mặt. Cách giải thích theo lý thuyết tín hiệu là:",
  optsVi:["Thương vụ bằng cổ phiếu mất nhiều thời gian hoàn tất hơn","Hội đồng tin cổ phiếu mình bị định giá thấp sẽ trả tiền mặt; chọn trả bằng cổ phiếu hàm ý ban điều hành cho rằng cổ phiếu của chính mình đang đắt","Thương vụ bằng cổ phiếu bị cơ quan quản lý soi kỹ hơn","Thương vụ tiền mặt có phí tư vấn thấp hơn"],
  explVi:"Ban điều hành biết về giá cổ phiếu của chính mình nhiều hơn thị trường. Nhà đầu tư tỉnh táo đọc lựa chọn 'đồng tiền thanh toán' như một tuyên bố về định giá của chính bên mua — dù có chủ ý hay không.",
  src:"Deep dive 3.4" },

{ id:"B7-09", ch:3, level:3,
  q:"A tax-sensitive seller may accept a lower headline price in shares than in cash because:",
  opts:["Share consideration carries no market risk","In many jurisdictions a share-for-share exchange defers capital gains tax while a cash sale crystallises it immediately","Shares are always worth more than their market price","Regulators require a discount on cash offers"],
  ans:1,
  expl:"Deferral is worth real money to a founder with a very low cost base. This is one of the four practical constraints — alongside debt capacity, ownership dilution, and speed/certainty — that usually decide the financing mix in practice.",
  qVi:"Một người bán nhạy cảm về thuế có thể chấp nhận giá danh nghĩa thấp hơn khi nhận cổ phiếu so với khi nhận tiền mặt, vì:",
  optsVi:["Thanh toán bằng cổ phiếu không có rủi ro thị trường","Ở nhiều nơi, hoán đổi cổ phiếu lấy cổ phiếu làm hoãn thuế thu nhập từ chuyển nhượng, trong khi bán lấy tiền mặt thì phát sinh thuế ngay","Cổ phiếu luôn đáng giá hơn giá thị trường của nó","Cơ quan quản lý yêu cầu chiết khấu với đề nghị trả tiền mặt"],
  explVi:"Việc hoãn thuế đáng giá thật với một nhà sáng lập có giá vốn rất thấp. Đây là một trong bốn ràng buộc thực tế — cùng với dư địa vay nợ, pha loãng sở hữu, và tốc độ/độ chắc chắn — thường quyết định cơ cấu tài trợ trên thực tế.",
  src:"Deep dive 3.4" },

{ id:"B7-10", ch:3, level:2,
  q:"In a competitive sale process, exclusivity should be granted to a single bidder:",
  opts:["Before the information memorandum is issued, to save time","Only after binding bids have been received","At the same time as the non-disclosure agreement","Never — exclusivity is prohibited"],
  ans:1,
  expl:"Exclusivity given too early hands away the remaining leverage, and the buyer's price has a way of drifting downwards during confirmatory diligence. Granting it only after binding bids is what separates a professional process from an amateur one.",
  qVi:"Trong một quy trình bán cạnh tranh, quyền độc quyền nên được trao cho một bên mua duy nhất vào lúc:",
  optsVi:["Trước khi phát hành bản giới thiệu thông tin, để tiết kiệm thời gian","Chỉ sau khi đã nhận được các chào giá ràng buộc","Cùng lúc với thoả thuận bảo mật","Không bao giờ — trao độc quyền là bị cấm"],
  explVi:"Trao độc quyền quá sớm là dâng nốt lợi thế đàm phán còn lại, và giá của bên mua có xu hướng trôi xuống trong giai đoạn thẩm định xác nhận. Chỉ trao sau khi có chào giá ràng buộc là điều phân biệt quy trình chuyên nghiệp với quy trình nghiệp dư.",
  src:"Deep dive 3.2" },

{ id:"B7-11", ch:3, level:3,
  q:"In a competitive M&A process, due diligence takes place:",
  opts:["Once, immediately before signing","In two stages: limited data-room access before binding bids, then deeper confirmatory diligence during exclusivity","Only after completion","Only if the buyer requests it"],
  ans:1,
  expl:"Confusing the two stages makes it impossible to explain why the price sometimes falls between the exclusivity letter and completion — the buyer discovers something in confirmatory diligence and reopens the price.",
  qVi:"Trong một quy trình M&A cạnh tranh, việc thẩm định diễn ra:",
  optsVi:["Một lần, ngay trước khi ký","Hai giai đoạn: tiếp cận phòng dữ liệu có giới hạn trước khi chào giá ràng buộc, rồi thẩm định xác nhận sâu hơn trong thời gian độc quyền","Chỉ sau khi hoàn tất","Chỉ khi bên mua yêu cầu"],
  explVi:"Lẫn hai giai đoạn này thì không giải thích nổi vì sao giá đôi khi giảm giữa lúc ký thư độc quyền và lúc hoàn tất — bên mua phát hiện điều gì đó trong thẩm định xác nhận rồi mở lại chuyện giá.",
  src:"Deep dive 3.2" },

{ id:"B7-12", ch:3, level:2,
  q:"A 'go-shop' provision protects a seller who has:",
  opts:["Run a broad auction with many bidders","Signed with a single counterparty without competitive tension, by allowing better offers to be solicited for a fixed period after signing","Received a hostile approach","Been refused regulatory clearance"],
  ans:1,
  expl:"A negotiated sale preserves confidentiality and speed but sacrifices competitive tension. A go-shop period, and a fiduciary out subject to a break fee, restore some of the price protection the auction would have provided.",
  qVi:"Điều khoản 'go-shop' bảo vệ người bán trong trường hợp họ đã:",
  optsVi:["Tổ chức đấu giá rộng với nhiều bên tham gia","Ký với một đối tác duy nhất không có áp lực cạnh tranh — bằng cách cho phép chào mời đề nghị tốt hơn trong một khoảng thời gian sau khi ký","Nhận một đề nghị thâu tóm thù địch","Bị từ chối chấp thuận của cơ quan quản lý"],
  explVi:"Đàm phán riêng giữ được bảo mật và tốc độ nhưng đánh đổi áp lực cạnh tranh. Khoảng thời gian go-shop, cùng với điều khoản fiduciary out kèm phí phá vỡ hợp đồng, khôi phục phần nào sự bảo vệ về giá mà một cuộc đấu giá lẽ ra đã mang lại.",
  src:"Deep dive 3.2" },

{ id:"B7-13", ch:3, level:3,
  q:"Which combination of deal characteristics is most associated with acquisitions that do create value for the acquirer?",
  opts:["Large relative size, share consideration, diversifying into a new industry","Smaller relative size, cash consideration, related business, an acquirer with an integration track record","Large relative size, cash consideration, unrelated business","Smaller relative size, share consideration, first-time acquirer"],
  ans:1,
  expl:"The pattern in the research is reasonably consistent on all four dimensions. Note that each element reduces one of the three failure mechanisms: smaller size limits the damage, cash avoids the negative signal, relatedness makes cost synergies achievable, and experience addresses integration risk.",
  qVi:"Tổ hợp đặc điểm nào của thương vụ gắn nhiều nhất với những vụ thâu tóm THỰC SỰ tạo giá trị cho bên mua?",
  optsVi:["Quy mô tương đối lớn, trả bằng cổ phiếu, đa dạng hoá sang ngành mới","Quy mô tương đối nhỏ hơn, trả bằng tiền mặt, ngành nghề liên quan, bên mua có kinh nghiệm tích hợp","Quy mô tương đối lớn, trả bằng tiền mặt, ngành không liên quan","Quy mô nhỏ hơn, trả bằng cổ phiếu, bên mua lần đầu thâu tóm"],
  explVi:"Quy luật trong các nghiên cứu khá nhất quán ở cả bốn chiều. Đáng chú ý là mỗi yếu tố đều làm giảm một trong ba cơ chế thất bại: quy mô nhỏ hạn chế thiệt hại, tiền mặt tránh tín hiệu xấu, ngành liên quan làm cộng hưởng chi phí khả thi, và kinh nghiệm xử lý rủi ro tích hợp.",
  src:"Deep dive 3.1" },

/* ================== CHƯƠNG 5 — TÁI CẤU TRÚC ================== */

{ id:"B7-14", ch:5, level:4,
  q:"A company earns 400 bn đ on 200 million shares (EPS 2,000đ) with shares at 50,000đ. It buys back 20 million shares using surplus cash. The new EPS is:",
  opts:["2,000đ — unchanged","2,222đ, an increase of 11.1%","1,800đ, a decrease of 10.0%","2,500đ, an increase of 25.0%"],
  ans:1,
  expl:"400 bn / 180m shares = 2,222đ. But note what left the balance sheet: 20m × 50,000 = 1,000 bn đ of cash. Shareholders who stay own a larger fraction of a smaller company — in a frictionless world nothing has been created.",
  qVi:"Một doanh nghiệp có lợi nhuận 400 tỷ đồng trên 200 triệu cổ phần (EPS 2.000đ), giá cổ phiếu 50.000đ. Doanh nghiệp mua lại 20 triệu cổ phần bằng tiền mặt dư. EPS mới là:",
  optsVi:["2.000đ — không đổi","2.222đ, tăng 11,1%","1.800đ, giảm 10,0%","2.500đ, tăng 25,0%"],
  explVi:"400 tỷ / 180 triệu cổ phần = 2.222đ. Nhưng hãy để ý cái gì đã rời khỏi bảng cân đối: 20 triệu × 50.000 = 1.000 tỷ đồng tiền mặt. Cổ đông ở lại sở hữu phần lớn hơn của một doanh nghiệp nhỏ hơn — trong một thế giới không ma sát thì chẳng có gì được tạo ra.",
  src:"Deep dive 5.4" },

{ id:"B7-15", ch:5, level:4,
  q:"Same company, same buyback of 20 million shares at 50,000đ — but funded by borrowing 1,000 bn đ at 10% with a 20% tax rate. The new EPS is:",
  opts:["2,222đ, the same as the cash-funded case","1,778đ, a decrease of 11.1%","2,000đ, unchanged","1,600đ, a decrease of 20.0%"],
  ans:1,
  expl:"After-tax interest = 1,000 × 10% × (1 − 20%) = 80 bn. Earnings fall to 320 bn; 320/180m = 1,778đ. The identical transaction is accretive when funded with cash and dilutive when funded with debt — proof that 'EPS rises' says nothing about value until you ask what paid for it.",
  qVi:"Vẫn doanh nghiệp đó, vẫn mua lại 20 triệu cổ phần giá 50.000đ — nhưng tài trợ bằng khoản vay 1.000 tỷ đồng lãi suất 10%, thuế suất 20%. EPS mới là:",
  optsVi:["2.222đ, giống hệt trường hợp dùng tiền mặt","1.778đ, giảm 11,1%","2.000đ, không đổi","1.600đ, giảm 20,0%"],
  explVi:"Lãi vay sau thuế = 1.000 × 10% × (1 − 20%) = 80 tỷ. Lợi nhuận còn 320 tỷ; 320/180 triệu = 1.778đ. Cùng một giao dịch: tăng lãi cơ bản khi dùng tiền mặt, giảm lãi cơ bản khi đi vay — bằng chứng cho thấy câu 'lãi cơ bản tăng' chẳng nói gì về giá trị cho tới khi ta hỏi cái gì đã trả cho nó.",
  src:"Deep dive 5.4" },

{ id:"B7-16", ch:5, level:3,
  q:"Which of the following genuinely changes the size of the pie rather than only how it is sliced?",
  opts:["A stock split","A share buyback funded from surplus cash, in a frictionless world","The interest tax shield created by replacing equity with debt","Paying a special dividend"],
  ans:2,
  expl:"Interest is deductible and dividends are not, so leverage genuinely transfers value from the state to investors. It is bounded by distress costs — the trade-off theory. Splits, frictionless buybacks and dividends only redistribute or relabel existing value.",
  qVi:"Giao dịch nào dưới đây THỰC SỰ làm cái bánh to lên, chứ không chỉ cắt lại cái bánh?",
  optsVi:["Chia tách cổ phiếu","Mua lại cổ phiếu quỹ bằng tiền mặt dư, trong một thế giới không ma sát","Lá chắn thuế từ lãi vay khi thay vốn chủ bằng nợ","Trả một khoản cổ tức đặc biệt"],
  explVi:"Lãi vay được khấu trừ còn cổ tức thì không, nên đòn bẩy thật sự chuyển giá trị từ nhà nước sang nhà đầu tư. Nó bị giới hạn bởi chi phí kiệt quệ — lý thuyết đánh đổi. Chia tách, mua lại cổ phiếu trong điều kiện không ma sát và trả cổ tức chỉ phân phối lại hoặc dán nhãn lại giá trị đã có.",
  src:"Deep dive 5.4" },

{ id:"B7-17", ch:5, level:3,
  q:"A company borrows 1,000 bn đ permanently. With a corporate tax rate of 20%, the present value of the interest tax shield is approximately:",
  opts:["100 bn đ","200 bn đ","800 bn đ","1,000 bn đ"],
  ans:1,
  expl:"For perpetual debt, PV of the tax shield = tax rate × debt = 0.20 × 1,000 = 200 bn. Note the elegance: the interest rate cancels out, because a higher rate means both a larger shield and a larger discount rate.",
  qVi:"Một doanh nghiệp vay vĩnh viễn 1.000 tỷ đồng. Với thuế suất thuế thu nhập doanh nghiệp 20%, hiện giá lá chắn thuế từ lãi vay xấp xỉ:",
  optsVi:["100 tỷ đồng","200 tỷ đồng","800 tỷ đồng","1.000 tỷ đồng"],
  explVi:"Với khoản nợ vĩnh viễn, hiện giá lá chắn thuế = thuế suất × dư nợ = 0,20 × 1.000 = 200 tỷ. Điểm thanh nhã: lãi suất triệt tiêu, vì lãi suất cao hơn vừa cho lá chắn lớn hơn vừa cho suất chiết khấu lớn hơn.",
  src:"Deep dive 5.4" },

{ id:"B7-18", ch:5, level:4,
  q:"A distressed company owes 800 bn đ and agrees a debt-for-equity swap at 20,000đ per share. It currently has 60 million shares. After the swap, existing shareholders own:",
  opts:["100% — creditors receive preference shares only","60% of the company, with lenders holding 40%","40% of the company, with lenders holding 60%","They are wiped out entirely"],
  ans:1,
  expl:"800 bn / 20,000 = 40 million new shares. Existing holders fall from 60/60 to 60/100 = 60%. The value created here is not financial engineering — it is avoiding the deadweight costs of liquidation, where assets would fetch far less than their worth inside a functioning business.",
  qVi:"Một doanh nghiệp kiệt quệ nợ 800 tỷ đồng và thoả thuận hoán đổi nợ thành vốn chủ ở mức 20.000đ mỗi cổ phần. Doanh nghiệp hiện có 60 triệu cổ phần. Sau khi hoán đổi, cổ đông hiện hữu sở hữu:",
  optsVi:["100% — chủ nợ chỉ nhận cổ phần ưu đãi","60% doanh nghiệp, chủ nợ nắm 40%","40% doanh nghiệp, chủ nợ nắm 60%","Bị mất trắng hoàn toàn"],
  explVi:"800 tỷ / 20.000 = 40 triệu cổ phần mới. Cổ đông cũ tụt từ 60/60 xuống 60/100 = 60%. Giá trị tạo ra ở đây không phải kỹ thuật tài chính — mà là tránh được chi phí chết của việc thanh lý, khi tài sản bị bán với giá thấp hơn nhiều so với giá trị của chúng bên trong một doanh nghiệp đang vận hành.",
  src:"Deep dive 5.4" },

{ id:"B7-19", ch:5, level:3,
  q:"The strongest argument for a leveraged recapitalisation is usually:",
  opts:["It raises EPS","Debt obliges management to pay cash out on a schedule, limiting the free cash available for value-destroying expansion — most valuable in a mature, cash-generative business with few investment opportunities","It reduces the cost of equity","It improves the credit rating"],
  ans:1,
  expl:"The discipline argument. Note the qualifier: it applies to mature businesses with weak investment opportunities. Applying the same logic to a young company with many positive-NPV projects would be actively harmful, because the debt service would crowd out the investment.",
  qVi:"Lập luận mạnh nhất cho việc tái cấu trúc theo hướng tăng đòn bẩy thường là:",
  optsVi:["Nó làm tăng lãi cơ bản","Nợ buộc ban điều hành phải chi tiền ra theo lịch, hạn chế dòng tiền tự do dùng vào mở rộng phá huỷ giá trị — có giá trị nhất ở doanh nghiệp đã trưởng thành, sinh tiền tốt, ít cơ hội đầu tư","Nó làm giảm chi phí vốn chủ","Nó cải thiện xếp hạng tín nhiệm"],
  explVi:"Lập luận về kỷ luật. Chú ý mệnh đề giới hạn: nó áp dụng cho doanh nghiệp trưởng thành, ít cơ hội đầu tư. Áp cùng logic ấy vào một doanh nghiệp trẻ có nhiều dự án NPV dương thì gây hại thật sự, vì nghĩa vụ trả nợ sẽ lấn át phần đầu tư.",
  src:"Deep dive 5.4" },

{ id:"B7-20", ch:5, level:3,
  q:"Converting a limited liability company into a joint-stock company means that:",
  opts:["The company automatically becomes a public company","The company is automatically listed on an exchange","Ownership is held in freely transferable shares rather than capital contributions requiring consent — but the company may still be entirely private","The founders lose limited liability"],
  ans:2,
  expl:"Three distinct statuses: joint-stock form, public company status (triggered by shareholder numbers and a public offering), and listing on an exchange. Answers that collapse these into one lose most of the available marks — this is among the most common errors in the chapter.",
  qVi:"Chuyển đổi công ty trách nhiệm hữu hạn thành công ty cổ phần có nghĩa là:",
  optsVi:["Doanh nghiệp tự động trở thành công ty đại chúng","Doanh nghiệp tự động được niêm yết trên sở giao dịch","Sở hữu nằm ở cổ phần chuyển nhượng tự do thay vì phần vốn góp cần có sự đồng ý — nhưng doanh nghiệp vẫn có thể hoàn toàn riêng tư","Các nhà sáng lập mất chế độ trách nhiệm hữu hạn"],
  explVi:"Ba tư cách khác nhau: hình thức công ty cổ phần, tư cách công ty đại chúng (phát sinh theo số lượng cổ đông và việc chào bán ra công chúng), và niêm yết trên sở giao dịch. Bài nào gộp ba thứ này làm một sẽ mất phần lớn số điểm — đây là một trong những lỗi phổ biến nhất của chương.",
  src:"Deep dive 5.2" },

{ id:"B7-21", ch:5, level:3,
  q:"A company plans to list in 18 months. Its adviser recommends converting to a joint-stock company now rather than shortly before filing, mainly because:",
  opts:["Conversion fees rise closer to a listing","The audited financial statements of the years before conversion matter for the listing file, so a late conversion lets the audit, not the market window, set the timetable","Regulators require a minimum of 18 months","Share prices are higher after a long conversion period"],
  ans:1,
  expl:"Conversion pulls the company into a stricter reporting regime, and the listing file reaches back over prior years. Companies that convert three months before filing routinely find their timetable dictated by the auditors — and miss the market window they were aiming for.",
  qVi:"Một doanh nghiệp dự định niêm yết sau 18 tháng. Bên tư vấn khuyến nghị chuyển đổi thành công ty cổ phần NGAY chứ không phải ngay trước khi nộp hồ sơ, chủ yếu vì:",
  optsVi:["Phí chuyển đổi tăng lên khi càng gần thời điểm niêm yết","Báo cáo tài chính đã kiểm toán của những năm trước khi chuyển đổi có ý nghĩa với hồ sơ niêm yết, nên chuyển đổi muộn sẽ khiến khâu kiểm toán — chứ không phải cửa sổ thị trường — quyết định lịch trình","Cơ quan quản lý yêu cầu tối thiểu 18 tháng","Giá cổ phiếu cao hơn sau một thời gian chuyển đổi dài"],
  explVi:"Chuyển đổi kéo doanh nghiệp vào chế độ báo cáo chặt hơn, và hồ sơ niêm yết truy ngược lại các năm trước. Doanh nghiệp chuyển đổi ba tháng trước khi nộp hồ sơ thường xuyên thấy lịch trình của mình do đơn vị kiểm toán định đoạt — và lỡ mất cửa sổ thị trường mà họ nhắm tới.",
  src:"Deep dive 5.2" },

{ id:"B7-22", ch:5, level:4,
  q:"In a market where most listed companies have a controlling shareholder, the dominant governance conflict is between:",
  opts:["Managers and shareholders — the classic agency problem","Controlling shareholders and minority shareholders","Shareholders and creditors","The board and the regulator"],
  ans:1,
  expl:"With concentrated ownership the problem is not a lazy manager but a controller who can extract value through related-party transactions, transfer pricing to private affiliates, or dilutive issues to connected parties. Naming the right conflict decides which mechanisms will actually work.",
  qVi:"Ở thị trường mà phần lớn doanh nghiệp niêm yết có cổ đông kiểm soát, xung đột quản trị chi phối là giữa:",
  optsVi:["Người quản lý và cổ đông — vấn đề người đại diện kinh điển","Cổ đông kiểm soát và cổ đông thiểu số","Cổ đông và chủ nợ","Hội đồng quản trị và cơ quan quản lý"],
  explVi:"Với sở hữu tập trung, vấn đề không phải một người quản lý lười biếng mà là một chủ sở hữu kiểm soát có thể rút giá trị qua giao dịch với bên liên quan, chuyển giá sang công ty sân sau, hoặc phát hành pha loãng cho người thân cận. Gọi đúng tên xung đột sẽ quyết định cơ chế nào thực sự có tác dụng.",
  src:"Deep dive 5.5" },

{ id:"B7-23", ch:5, level:3,
  q:"Which mechanism is designed specifically for the controller–minority conflict rather than the manager–shareholder conflict?",
  opts:["Performance-linked executive pay","The market for corporate control","Approval of related-party transactions by disinterested shareholders, plus cumulative voting","An audit committee of the board"],
  ans:2,
  expl:"Disinterested approval strips the controller of the votes on transactions in which it has an interest; cumulative voting lets minorities elect a director. The other three constrain managers, and do little where the controller appoints the constrainer.",
  qVi:"Cơ chế nào được thiết kế riêng cho xung đột cổ đông kiểm soát – cổ đông thiểu số, chứ không phải xung đột người quản lý – cổ đông?",
  optsVi:["Thù lao ban điều hành gắn với kết quả","Thị trường kiểm soát doanh nghiệp","Giao dịch với bên liên quan phải được cổ đông không có lợi ích liên quan thông qua, cộng với bầu dồn phiếu","Uỷ ban kiểm toán thuộc hội đồng quản trị"],
  explVi:"Phê duyệt bởi cổ đông không có lợi ích liên quan tước quyền biểu quyết của bên kiểm soát ở chính những giao dịch họ có lợi ích; bầu dồn phiếu cho phép cổ đông thiểu số bầu được một thành viên hội đồng. Ba cơ chế còn lại kiềm chế người quản lý, và có tác dụng rất ít khi chính bên kiểm soát bổ nhiệm người kiềm chế.",
  src:"Deep dive 5.5" },

{ id:"B7-24", ch:5, level:3,
  q:"The concrete, measurable payoff that justifies a governance restructuring mandate before a listing is:",
  opts:["Compliance with the exchange's rulebook","A lower cost of capital — investors pay more for shares in a company with credible minority protections","Reduced audit fees","A higher credit rating"],
  ans:1,
  expl:"The buyer of the shares is paying for governance quality whether or not anyone says so. Framing the advice this way turns governance from a compliance cost into an investment with a return the client can see in the offer price.",
  qVi:"Lợi ích cụ thể, đo được, biện minh cho một hợp đồng tư vấn tái cấu trúc quản trị trước khi niêm yết là:",
  optsVi:["Tuân thủ quy chế của sở giao dịch","Chi phí vốn thấp hơn — nhà đầu tư trả giá cao hơn cho cổ phần của doanh nghiệp có cơ chế bảo vệ cổ đông thiểu số đáng tin","Phí kiểm toán giảm","Xếp hạng tín nhiệm cao hơn"],
  explVi:"Người mua cổ phần đang trả tiền cho chất lượng quản trị dù có ai nói ra hay không. Trình bày lời tư vấn theo cách này sẽ biến quản trị từ một khoản chi phí tuân thủ thành một khoản đầu tư có suất sinh lời mà khách hàng nhìn thấy ngay trong giá chào bán.",
  src:"Deep dive 5.5" }

];

/* Ghép vào QUIZ_BANK6 — app.js đã gộp sẵn ngân hàng này ở dòng 14, nên không
   phải sửa app.js. Bản dịch nằm ngay trong từng câu nên cũng không cần thêm
   tệp data_vi_mcq_* nào. */
window.QUIZ_BANK6 = (window.QUIZ_BANK6 || []).concat(ADD);
})();
