/* =====================================================================
   BAF736 Investment Banking — Extended question bank, batch 6 (authored)
   Final coverage batch: applied and analytical items across all six
   chapters, weighted toward Apply (L3) and Analyze (L4) to balance the
   overall bank against the final-examination cognitive mix.
   level: 1 Know · 2 Understand · 3 Apply · 4 Analyze
   ===================================================================== */
window.QUIZ_BANK6 = [

{ id:"W1-01", ch:1, level:3, q:"A bank earns VND 400bn of advisory fees, VND 250bn of underwriting spreads, VND 300bn of trading gains and VND 350bn of management fees. Which line would you expect to fall most in a market downturn?",
  opts:["Interest income","Advisory fees and underwriting spreads","Management fees","Custody fees"],
  ans:1, expl:"Transaction-based revenue collapses when deal and issuance volumes fall; management fees decline only with AUM and remain the most resilient line.", src:"Ch.1 §1.1, §1.5" },

{ id:"W1-02", ch:1, level:4, q:"A universal bank argues its model is more stable than a standalone investment bank. The strongest support for this claim is:",
  opts:["Deposit funding and diversified revenue lines cushion the cyclicality of transaction income","It faces no regulation","It employs more people","It never trades"],
  ans:0, expl:"Combining stable retail/commercial earnings with volatile fee income was the central argument advanced for repealing Glass-Steagall.", src:"Ch.1 §1.2.3" },

{ id:"W1-03", ch:1, level:4, q:"A counter-argument to universal banking after 2008 is that:",
  opts:["Universal banks are too small","Advisory work is illegal for them","Combining deposit-taking with risky capital-markets activity extends the public safety net to speculative business","They cannot underwrite"],
  ans:2, expl:"This concern motivated the Volcker Rule and ring-fencing regimes restricting proprietary trading within deposit-taking groups.", src:"Ch.1 §1.5" },

{ id:"W1-04", ch:1, level:3, q:"A compliance officer must decide whether an employee may be told about a pending deal. The governing consideration is:",
  opts:["The employee's length of service","Whether there is a genuine need to know, with a documented wall-crossing and trading restrictions applied","Whether the deal is profitable","The employee's seniority"],
  ans:1, expl:"Wall crossings are permitted only on a need-to-know basis, are recorded, and place the individual under insider restrictions until the information is public.", src:"Ch.1 §1.4.4" },

{ id:"W1-05", ch:1, level:2, q:"Which best describes 'front office' revenue attribution?",
  opts:["Calculating corporate tax","Allocating settlement costs","Identifying which desks and products generated revenue, to inform resource and compensation decisions","Auditing the accounts"],
  ans:2, expl:"Attribution drives capital allocation and compensation, and is a principal source of internal conflict between divisions.", src:"Ch.1 §1.4.3" },

{ id:"W1-06", ch:1, level:3, q:"An analyst covering a company where the bank has no banking relationship still discloses the absence of any relationship. This reflects the principle that:",
  opts:["Only positive ratings need disclosure","Disclosure is unnecessary","Disclosure is optional for large firms","Investors must be able to assess independence, so relationships — or their absence — are disclosed consistently"],
  ans:3, expl:"Consistent disclosure allows the reader to judge the report's independence rather than having to infer it.", src:"[2] Ch.3 §3.3.2" },

{ id:"W1-07", ch:1, level:4, q:"Which best explains why compensation is the largest cost line in an investment bank?",
  opts:["The franchise rests on relationships, judgement and execution capability, which are embodied in people","Technology is free","Offices are cheap","Regulatory requirement"],
  ans:0, expl:"Human capital is the productive asset; it is also mobile, which is why retention drives pay and why the cost base is sticky.", src:"Ch.1 §1.1, §1.5" },

{ id:"W1-08", ch:1, level:3, q:"A securities firm wants to launch proprietary trading alongside its existing brokerage. The first structural requirement is:",
  opts:["Separating accounts, systems and personnel, with client orders given absolute priority","Sharing client order information internally","Merging the two desks for efficiency","Removing compliance oversight"],
  ans:0, expl:"Without separation and client priority the firm could front-run client flow — the core conflict the rules address.", src:"Ch.6 §6.3.3" },

{ id:"W1-09", ch:1, level:4, q:"An investment bank with a strong league-table position but persistently low profitability most likely:",
  opts:["Is winning volume by underpricing, buying market share at the expense of returns","Has no clients","Is over-regulated","Has too much capital"],
  ans:0, expl:"League-table position is a means to future mandates, not an end; chasing it through underpricing destroys the economics it is meant to protect.", src:"Ch.1 §1.3" },

{ id:"W1-10", ch:1, level:2, q:"'Know your client' (KYC) procedures principally serve to:",
  opts:["Set the share price","Increase commissions","Replace the prospectus","Verify identity and source of funds, supporting anti-money-laundering and suitability obligations"],
  ans:3, expl:"KYC underpins both financial-crime prevention and the suitability assessment required before advising a client.", src:"Ch.6 §6.1.3" },

{ id:"W1-11", ch:1, level:3, q:"A bank declines a lucrative mandate because the client's business would expose it to reputational risk. This decision reflects:",
  opts:["Recognition that reputation is the franchise and outlasts any single fee","An accounting rule","Poor commercial judgement","A regulatory prohibition"],
  ans:0, expl:"Reputation determines future mandate flow, so protecting it can rationally outweigh a single transaction's economics.", src:"Ch.1 §1.5" },

{ id:"W1-12", ch:1, level:4, q:"Comparing an investment bank's ROE across time requires care because:",
  opts:["Changes in permitted leverage alter ROE without any change in operating skill","ROE is unaffected by leverage","Equity never changes","ROE ignores revenue"],
  ans:0, expl:"Since ROE = margin × turnover × leverage, post-crisis deleveraging mechanically lowered reported ROE independent of performance.", src:"Ch.1 §1.5" },

{ id:"W2-01", ch:2, level:3, q:"An issuer's shares are 12× oversubscribed at the top of the range. The most likely consequence is:",
  opts:["Listing is delayed a year","The offering is cancelled","The spread is doubled","The final price is set at or above the top of the range and allocation is scaled back"],
  ans:3, expl:"Strong demand supports pricing at the top of the range; underwriters then allocate selectively, favouring investors judged to be stable holders.", src:"Ch.2 §2.2.4" },

{ id:"W2-02", ch:2, level:4, q:"An IPO prices at the bottom of its range and trades down 8% on debut. The most likely diagnosis is:",
  opts:["The greenshoe was too large","Valuation was too aggressive relative to demand, or market conditions deteriorated during marketing","Deliberate underpricing","The spread was too small"],
  ans:1, expl:"A weak aftermarket despite bottom-of-range pricing points to genuine demand weakness; underwriters may then stabilise by buying to cover the greenshoe short.", src:"Ch.2 §2.2.4" },

{ id:"W2-03", ch:2, level:3, q:"A company raises VND 800bn at a 6% spread but requires VND 780bn net for its investment plan. It has:",
  opts:["Exactly enough","A surplus of VND 48bn","No way to calculate","A shortfall — net proceeds are VND 752bn"],
  ans:3, expl:"Net = 800 × (1 − 0.06) = VND 752bn, VND 28bn short of the requirement — so the deal must be upsized or the plan trimmed.", src:"Ch.2 §2.2.4" },

{ id:"W2-04", ch:2, level:4, q:"An issuer insists on a very low gross spread. The likely underwriter response is:",
  opts:["Increase the greenshoe to 50%","Seek a lower offer price or a best-efforts structure, since it is being paid less for the same risk","Accept with no consequence","Waive due diligence"],
  ans:1, expl:"Fee and risk are linked: paying less for underwriting invites either a wider pricing discount or a shift of placement risk back to the issuer.", src:"Ch.2 §2.1" },

{ id:"W2-05", ch:2, level:3, q:"A 1-for-2 rights issue at VND 24,000 when shares trade at VND 45,000 produces a TERP of:",
  opts:["VND 42,000","VND 30,000","VND 34,500","VND 38,000"],
  ans:3, expl:"TERP = (2 × 45,000 + 1 × 24,000) ÷ 3 = 114,000 ÷ 3 = VND 38,000.", src:"[2] Ch.5 §5.5.1" },

{ id:"W2-06", ch:2, level:3, q:"Using the previous figures, the value of one right is:",
  opts:["VND 3,500","VND 14,000","VND 21,000","VND 7,000"],
  ans:3, expl:"Right = cum-rights − TERP = 45,000 − 38,000 = VND 7,000.", src:"[2] Ch.5 §5.5.2" },

{ id:"W2-07", ch:2, level:4, q:"A deeply discounted rights issue is often used when:",
  opts:["Regulators require it","The issuer needs certainty of take-up, accepting a lower price to ensure the issue is subscribed","No underwriter is available","The company is performing exceptionally"],
  ans:1, expl:"A deep discount makes the rights valuable and take-up near-certain; the trade-off is a larger share count and greater dilution for non-participants.", src:"[2] Ch.5 §5.5" },

{ id:"W2-08", ch:2, level:3, q:"A bond is issued at a benchmark yield of 4.2% plus a 260bp credit spread. Its coupon is approximately:",
  opts:["4.46%","6.80%","1.60%","2.60%"],
  ans:1, expl:"Coupon ≈ 4.20% + 2.60% = 6.80%. A rating downgrade would widen the spread and raise the cost of future issuance.", src:"Ch.2 §2.3" },

{ id:"W2-09", ch:2, level:4, q:"An issuer's rating is downgraded from investment grade to sub-investment grade. The main funding consequence is:",
  opts:["Lower coupons","A materially wider spread and a shift to a different, smaller investor base","No change","Automatic delisting"],
  ans:1, expl:"Many institutional mandates prohibit sub-investment-grade holdings, so the buyer pool shrinks precisely as the required yield rises.", src:"Ch.2 §2.3" },

{ id:"W2-10", ch:2, level:3, q:"A PE fund calls 60% of committed capital in its first three years. The uncalled portion is:",
  opts:["Converted to debt","Returned to LPs immediately","Dry powder — committed but not yet drawn, available for future investments","Lost"],
  ans:2, expl:"Dry powder measures the industry's undeployed purchasing power and is watched as an indicator of competition for assets.", src:"Ch.2 §2.4.1" },

{ id:"W2-11", ch:2, level:4, q:"High levels of industry dry powder tend to:",
  opts:["Eliminate leverage","Increase competition for a limited set of targets, pushing entry multiples up and prospective returns down","Have no market effect","Reduce entry multiples"],
  ans:1, expl:"More capital chasing similar assets raises prices; sponsors must then rely more on operational improvement to generate returns.", src:"Ch.2 §2.4.3" },

{ id:"W2-12", ch:2, level:3, q:"A startup raises a Series B at a lower valuation than its Series A. This is a:",
  opts:["Rights issue","Up round","Secondary offering","Down round, which triggers anti-dilution protection for earlier investors"],
  ans:3, expl:"Down rounds adjust earlier investors' conversion terms, concentrating dilution on founders and unprotected holders.", src:"Ch.2 §2.4.5" },

{ id:"W2-13", ch:2, level:4, q:"Why do VC investors typically hold preferred rather than common shares?",
  opts:["Common shares cannot be issued","Preferred shares pay no dividend","Preference gives priority of capital return on exit and carries protective and control rights","Regulators require it"],
  ans:2, expl:"Liquidation preference, anti-dilution and board rights protect a minority investor who cannot control the company.", src:"Ch.2 §2.4.5" },

{ id:"W2-14", ch:2, level:3, q:"A fund with a 10-year life is in year 8 with several unsold assets. It will most likely:",
  opts:["Extend the fund term or pursue secondary sales and continuation vehicles","Convert to a bank","Hold the assets indefinitely","Cancel the LP commitments"],
  ans:0, expl:"End-of-life pressure can force sales at poor prices, so extensions, secondaries and continuation funds are common solutions.", src:"Ch.2 §2.4.3" },

{ id:"W3-01", ch:3, level:4, q:"An acquirer pays a 40% premium justified entirely by revenue synergies. The principal analytical concern is:",
  opts:["Cost synergies are always negative","Premiums above 30% are illegal","Revenue synergies are tax-free","Revenue synergies are the least reliable category, so the premium rests on the weakest evidence"],
  ans:3, expl:"Revenue synergies depend on customer behaviour and competitor response; markets discount them heavily, so a premium resting solely on them is high risk.", src:"Ch.3 §3.3" },

{ id:"W3-02", ch:3, level:3, q:"Synergies of VND 300bn annually, taxed at 20%, capitalised at a 10% discount rate in perpetuity, are worth approximately:",
  opts:["VND 600 billion","VND 3,000 billion","VND 2,400 billion","VND 240 billion"],
  ans:2, expl:"After-tax synergies = 300 × 0.8 = VND 240bn; PV = 240 ÷ 0.10 = VND 2,400bn — the maximum premium justifiable before costs to achieve.", src:"Ch.3 §3.3" },

{ id:"W3-03", ch:3, level:4, q:"Continuing the previous question, if the premium offered is VND 3,000bn, the acquirer is:",
  opts:["Creating value of VND 600bn","Overpaying by about VND 600bn relative to the synergies identified","Exactly break-even","Unable to complete the deal"],
  ans:1, expl:"Paying more than the present value of the benefits transfers value to the target's shareholders — the standard explanation for acquirers' poor average returns.", src:"Ch.3 §3.3" },

{ id:"W3-04", ch:3, level:3, q:"Costs to achieve synergies (redundancy, systems integration) should be:",
  opts:["Ignored","Deducted from the present value of synergies before comparing with the premium","Capitalised as goodwill","Added to the synergies"],
  ans:1, expl:"Only net realisable synergies justify a premium; integration costs are real, immediate and frequently underestimated.", src:"Ch.3 §3.3" },

{ id:"W3-05", ch:3, level:4, q:"A target's management will remain and is offered equity in the combined entity. This mainly addresses which risk?",
  opts:["Retention and integration risk — keeping the capability that was acquired","Settlement risk","Regulatory risk","Currency risk"],
  ans:0, expl:"In people-dependent businesses the acquired value can leave; retention packages align key staff with the combined entity's success.", src:"Ch.3 §3.5.1" },

{ id:"W3-06", ch:3, level:3, q:"An acquirer discovers during diligence that VND 200bn of the target's reported profit came from a one-off asset sale. It should:",
  opts:["Normalise earnings by excluding it, which reduces the multiple-based valuation","Ignore it as immaterial","Add it to synergies","Increase the offer"],
  ans:0, expl:"Multiples must be applied to sustainable earnings; failing to normalise means paying a recurring multiple for a non-recurring gain.", src:"Ch.3 §3.2.2" },

{ id:"W3-07", ch:3, level:4, q:"A sponsor models an LBO exit at the same multiple as entry, in a downside case at one turn lower. This practice reflects:",
  opts:["An accounting rule","Prudent testing of whether the return depends on market conditions outside the sponsor's control","Excessive caution","A regulatory requirement"],
  ans:1, expl:"Stress-testing the exit multiple separates operational return from market-driven return, which is the key test of thesis robustness.", src:"Ch.3 §3.4" },

{ id:"W3-08", ch:3, level:3, q:"An LBO target generates EBITDA of VND 300bn with debt of VND 1,500bn. Its leverage is:",
  opts:["3.0×","0.2×","5.0×","1.8×"],
  ans:2, expl:"Leverage = 1,500 ÷ 300 = 5.0× — a typical LBO entry level, well above investment-grade norms of under 3×.", src:"Ch.3 §3.4" },

{ id:"W3-09", ch:3, level:4, q:"If that target's EBITDA falls 30% in a recession, leverage becomes:",
  opts:["Zero","3.5×, comfortably safe","Unchanged at 5.0×","About 7.1×, likely breaching covenants"],
  ans:3, expl:"EBITDA falls to 210; leverage = 1,500 ÷ 210 ≈ 7.1×. This is precisely why cash-flow stability outranks growth in LBO screening.", src:"Ch.3 §3.4; [2] Ch.7 §7.3" },

{ id:"W3-10", ch:3, level:3, q:"A covenant requiring leverage to remain below 6.0× tested quarterly is:",
  opts:["An incurrence covenant","A maintenance covenant","A change-of-control clause","A negative pledge"],
  ans:1, expl:"Maintenance covenants are tested periodically regardless of the borrower's actions; incurrence covenants bite only on specified events.", src:"Ch.2 §2.3; Ch.3 §3.4" },

{ id:"W3-11", ch:3, level:4, q:"A buyer insists on an asset purchase while the seller insists on a share purchase. The most practical resolution is usually:",
  opts:["Adjust the price to compensate the party accepting the less favourable structure","Ignore the tax consequences","Abandon the deal","Complete both structures"],
  ans:0, expl:"Structure has quantifiable tax and liability consequences, so the disagreement is usually resolved through price rather than principle.", src:"Ch.3 §3.1.1" },

{ id:"W3-12", ch:3, level:3, q:"An acquirer issues shares such that the target's shareholders end up with 55% of the combined entity. This is best described as:",
  opts:["A reverse takeover in substance, since the target's holders gain control","A minority investment","A rights issue","A spin-off"],
  ans:0, expl:"Where the nominal acquirer's holders end up in the minority, accounting and regulatory treatment may identify the target as the true acquirer.", src:"Ch.3 §3.1.1" },

{ id:"W3-13", ch:3, level:4, q:"A conglomerate trades at 6× EBITDA while its three divisions' peers trade at 8×, 9× and 11×. The advisor should:",
  opts:["Quantify the conglomerate discount by SOTP and evaluate separation options","Recommend further diversification","Increase leverage","Delist immediately"],
  ans:0, expl:"SOTP quantifies the gap and supports a spin-off, carve-out or divestiture to release the trapped value.", src:"Ch.5 §5.3" },

{ id:"W3-14", ch:3, level:3, q:"A break fee is typically expressed as:",
  opts:["The full purchase price","A share of synergies","A fixed percentage of the equity value, payable in defined walk-away circumstances","The advisor's fee"],
  ans:2, expl:"Break fees compensate wasted costs and deal risk and are usually capped by law or listing rules at a modest percentage.", src:"Ch.3 §3.2.2" },

{ id:"W4-01", ch:4, level:3, q:"A fund with VND 3,000bn AUM charges 1.2% management fee. If AUM grows 25% with costs rising 8%, fee revenue rises by:",
  opts:["17%","8%","25%","33%"],
  ans:2, expl:"Fee revenue scales directly with AUM, so it rises 25% while costs rise only 8% — the operating leverage that makes asset gathering so valuable.", src:"Ch.4 §4.1.3" },

{ id:"W4-02", ch:4, level:4, q:"An asset manager's AUM rises 15% but revenue falls 3%. The most likely explanation is:",
  opts:["An accounting error","Reduced redemptions","Higher performance fees","Fee compression — growth concentrated in lower-margin passive products"],
  ans:3, expl:"Mix shift toward cheap index products lowers average revenue per unit of AUM, so assets and revenue can move in opposite directions.", src:"Ch.4 §4.2.3" },

{ id:"W4-03", ch:4, level:3, q:"A manager returns 12% against a 12% benchmark with 5% tracking error. The information ratio is:",
  opts:["1.00","0.42","0.00","2.40"],
  ans:2, expl:"IR = (12 − 12) ÷ 5 = 0. The manager took active risk without generating active return — a poor outcome despite matching the benchmark.", src:"Ch.4 §4.3.2" },

{ id:"W4-04", ch:4, level:4, q:"A fund closely matches its benchmark yet charges active fees. This is best described as:",
  opts:["Arbitrage","Closet indexing — charging for active management while delivering near-index returns","Efficient management","Passive investing"],
  ans:1, expl:"Low active share with active fees is poor value; investors could obtain the same exposure far more cheaply through an index fund.", src:"Ch.4 §4.2.3" },

{ id:"W4-05", ch:4, level:3, q:"An investor holds a fund for 3 years, contributing more capital just before a strong year. Evaluating the manager requires:",
  opts:["The Sharpe ratio only","Absolute return only","Money-weighted return","Time-weighted return, which removes the effect of the investor's cash-flow timing"],
  ans:3, expl:"TWR isolates the manager's decisions; MWR reflects the investor's own timing, which the manager did not control.", src:"Ch.4 §4.3.1" },

{ id:"W4-06", ch:4, level:4, q:"A fund's returns are strong but attribution shows nearly all excess return came from a single overweight sector. The concern is:",
  opts:["Return is concentrated and may reflect a single successful bet rather than repeatable skill","Fees are too low","Attribution is invalid","There is none"],
  ans:0, expl:"Concentrated attribution raises questions about repeatability and about whether the risk taken was consistent with the mandate.", src:"Ch.4 §4.3.1" },

{ id:"W4-07", ch:4, level:3, q:"A client's IPS prohibits derivatives, but the manager uses index futures to manage cash flows efficiently. This is:",
  opts:["Only an issue if losses occur","Required by regulation","Acceptable because it is efficient","A mandate breach, regardless of intent or outcome"],
  ans:3, expl:"The IPS is the governing mandate; breaching it is a compliance failure whether or not the result was favourable.", src:"Ch.4 §4.3.1" },

{ id:"W4-08", ch:4, level:3, q:"A wealth client aged 72 with no other assets asks to put 80% of their wealth into a single small-cap stock. The adviser should:",
  opts:["Execute without comment","Explain the concentration and capacity issues, document the advice, and decline to recommend it","Recommend 100% instead","Ignore the request"],
  ans:1, expl:"Risk capacity is low and concentration risk extreme; the adviser must advise against it and record the discussion even if the client insists on executing.", src:"Ch.4 §4.4.2" },

{ id:"W4-09", ch:4, level:4, q:"An open-end property fund offering daily redemption suspends dealing in a downturn. This illustrates:",
  opts:["Good performance","Liquidity mismatch — daily redemption terms cannot be met by illiquid underlying assets","Excessive diversification","A tax problem"],
  ans:1, expl:"Redemption terms must match asset liquidity; mismatch forces gates or suspension precisely when investors want to exit.", src:"Ch.4 §4.2.3" },

{ id:"W4-10", ch:4, level:3, q:"A fund charges 1% management fee and 15% carry over a 6% hurdle. Gross return is 10%. Net return is:",
  opts:["6.0%","7.5%","9.0%","8.4%"],
  ans:3, expl:"Excess = 10 − 6 = 4%; carry = 15% × 4 = 0.6%; net = 10 − 1 − 0.6 = 8.4%.", src:"Ch.4 §4.2.3" },

{ id:"W4-11", ch:4, level:2, q:"A discretionary manager must still consult the client when:",
  opts:["The proposed action falls outside the mandate or the client's circumstances have materially changed","Markets are volatile","Every trade is placed","Fees are charged"],
  ans:0, expl:"Discretion operates only within the agreed mandate; anything beyond it requires the client's authority and an IPS update.", src:"Ch.4 §4.3.1" },

{ id:"W4-12", ch:4, level:4, q:"Why might two funds with identical returns warrant different assessments?",
  opts:["Fees are always identical","Benchmarks are irrelevant","Returns are all that matter","They may have taken very different risk — volatility, tracking error, concentration or leverage — to achieve them"],
  ans:3, expl:"Risk-adjusted measures such as Sharpe, information ratio and attribution exist precisely to make this distinction.", src:"Ch.4 §4.3.2" },

{ id:"W5-01", ch:5, level:3, q:"A company's revenue grows 20% while receivables grow 60%. This most likely signals:",
  opts:["Deteriorating collection or aggressive revenue recognition — an earnings-quality concern","Improved collection","Higher margins","Lower leverage"],
  ans:0, expl:"Receivables outpacing revenue means sales are not converting to cash, a classic quality-of-earnings red flag warranting investigation.", src:"[2] Ch.4 §4.5.6" },

{ id:"W5-02", ch:5, level:4, q:"A firm capitalises development costs its peers expense. The effect on reported figures is:",
  opts:["Higher cash flow","Higher current profit and assets, with lower reported profit in later years as amortisation follows","Lower profit now","No effect"],
  ans:1, expl:"The policy shifts expense to later periods, flattering current earnings; comparability requires restating to a common basis.", src:"[2] Ch.4 §4.5.6" },

{ id:"W5-03", ch:5, level:3, q:"A company has EBITDA of VND 900bn, capex of VND 600bn and is valued at 8× EBITDA. Its EV/(EBITDA − capex) multiple is:",
  opts:["8.0×","10.7×","24.0×","4.0×"],
  ans:2, expl:"EV = 7,200bn; EBITDA − capex = 300bn; ratio = 7,200 ÷ 300 = 24.0×, revealing how capital-intensive the business really is.", src:"[2] Ch.4 §4.8.4.1" },

{ id:"W5-04", ch:5, level:4, q:"The previous result suggests that for this company EV/EBITDA:",
  opts:["Materially flatters the valuation by ignoring the capital required to sustain the business","Cannot be computed","Overstates the risk","Is the most reliable multiple"],
  ans:0, expl:"For capital-intensive firms EBITDA overstates distributable cash, so EV/EBIT or EV/(EBITDA − capex) discriminates better.", src:"[2] Ch.4 §4.8.4.1" },

{ id:"W5-05", ch:5, level:3, q:"A stock trades at VND 60,000 with EPS of VND 5,000 and book value per share of VND 25,000. Its P/E and P/B are:",
  opts:["5× and 12×","2.4× and 12×","12× and 0.42×","12× and 2.4×"],
  ans:3, expl:"P/E = 60,000 ÷ 5,000 = 12×; P/B = 60,000 ÷ 25,000 = 2.4×. Implied ROE = EPS ÷ BVPS = 20%.", src:"[2] Ch.4 §4.8.4.1" },

{ id:"W5-06", ch:5, level:4, q:"Two companies both have a P/B of 2.0×, but one has ROE of 18% and the other 9%. This implies:",
  opts:["P/B is meaningless","The 9% company looks expensive relative to the returns it generates on book equity","The 18% company is overvalued","They are equally valued"],
  ans:1, expl:"P/B should rise with ROE; equal P/B on half the ROE means the market is paying the same for materially inferior returns.", src:"[2] Ch.4 §4.8.4.5" },

{ id:"W5-07", ch:5, level:3, q:"A DCF uses a WACC of 9% and terminal growth of 8.5%. The result will be:",
  opts:["Negative","Independent of g","Reliable","Extremely large and unstable, because the denominator (r − g) is only 0.5%"],
  ans:3, expl:"As g approaches r the perpetuity explodes. Terminal growth must be well below WACC and below long-run nominal GDP growth.", src:"[2] Ch.4 §4.8.4.3" },

{ id:"W5-08", ch:5, level:3, q:"A company's WACC is 11%, cost of equity 15%, after-tax cost of debt 6%, and it is 40% debt-funded. Verify the WACC:",
  opts:["It equals 21%","It cannot be checked","It equals exactly 11%","0.6 × 15 + 0.4 × 6 = 11.4%, so the stated 11% is slightly understated"],
  ans:3, expl:"9.0 + 2.4 = 11.4%. Cross-checking stated inputs is a routine discipline in reviewing any valuation model.", src:"Ch.5 §5.4.2" },

{ id:"W5-09", ch:5, level:4, q:"An advisor presents a single point valuation of VND 42,300 per share. The appropriate criticism is:",
  opts:["It is too low","Point estimates are always correct","Ranges are prohibited","The number is too precise given the uncertainty in the assumptions; a range with sensitivities is required"],
  ans:3, expl:"Spurious precision misrepresents the confidence available; the football field with sensitivity tables is the professional standard.", src:"Ch.5 §5.1.5" },

{ id:"W5-10", ch:5, level:3, q:"A company plans a listing but has two years of losses. Under typical Vietnamese listing conditions it:",
  opts:["May list immediately","Must delist","Does not meet the profitability requirement and must restructure or defer","Is exempt from all conditions"],
  ans:2, expl:"Listing conditions require profitability and no accumulated losses, so the company must restore profitability before applying.", src:"Ch.5 §5.1.2" },

{ id:"W5-11", ch:5, level:4, q:"A controlling family refuses to appoint independent directors before an IPO. The advisor should explain that:",
  opts:["Only regulators care","Independence is illegal","It has no effect on price","Investors will price the governance risk, reducing the multiple achieved and therefore the family's own proceeds"],
  ans:3, expl:"Framing governance as a pricing issue rather than a compliance burden usually aligns the family's interest with the reform.", src:"Ch.5 §5.5.2" },

{ id:"W5-12", ch:5, level:3, q:"A dividend recapitalisation raises leverage from 2× to 5× EBITDA to fund a distribution to the sponsor. The main consequence is:",
  opts:["Improved credit quality","Higher financial risk and reduced flexibility, with no operational improvement","Lower cost of equity","Automatic rating upgrade"],
  ans:1, expl:"Value is transferred to owners while risk stays with the company — attractive to the sponsor, unattractive to lenders.", src:"Ch.5 §5.4.5" },

{ id:"W5-13", ch:5, level:4, q:"A distressed company's senior secured creditors would recover 80% in liquidation while unsecured creditors would recover 10%. In restructuring negotiations:",
  opts:["Shareholders decide alone","Both classes have equal bargaining power","Unsecured creditors control the outcome","Senior creditors have far stronger leverage, since their alternative to agreement is good"],
  ans:3, expl:"Each class negotiates against its liquidation entitlement; a high recovery alternative means little incentive to compromise.", src:"Ch.5 §5.3" },

{ id:"W5-14", ch:5, level:3, q:"A company with a P/E of 25× acquires one with a P/E of 10× in an all-share deal. Ignoring synergies, EPS will:",
  opts:["Fall (dilutive)","Become negative","Rise (accretive)","Be unchanged"],
  ans:2, expl:"The acquirer issues shares valued at 25× earnings to buy earnings costing 10× — strongly accretive on arithmetic alone, though not necessarily value-creating.", src:"Ch.3 §3.3" },

{ id:"W6-01", ch:6, level:3, q:"An investor buys at VND 55,000 with 50% initial and 30% maintenance margin. The margin call price is:",
  opts:["VND 45,833","VND 33,000","VND 39,286","VND 27,500"],
  ans:2, expl:"Call = 55,000 × (1 − 0.50) ÷ (1 − 0.30) = 55,000 × 0.5 ÷ 0.7 = VND 39,286.", src:"Ch.6 §6.4.1" },

{ id:"W6-02", ch:6, level:4, q:"Two clients hold identical positions but one used 40% initial margin and the other 70%. The 40% client faces:",
  opts:["Lower leverage and a lower call price","Higher leverage (2.5× vs 1.43×) and a call triggered at a higher price","Identical risk","No margin call ever"],
  ans:1, expl:"Lower initial margin means more leverage and a thinner equity cushion, so the call price sits closer to the purchase price.", src:"Ch.6 §6.4.1" },

{ id:"W6-03", ch:6, level:3, q:"A client's account shows market value VND 1,200m and a loan of VND 700m. The equity ratio is:",
  opts:["30.0%","70.0%","58.3%","41.7%"],
  ans:3, expl:"Equity = 1,200 − 700 = VND 500m; ratio = 500 ÷ 1,200 = 41.7%, comfortably above a typical 30% maintenance level.", src:"Ch.6 §6.4.1" },

{ id:"W6-04", ch:6, level:4, q:"A broker's margin book is concentrated in three stocks that all fall 25% simultaneously. The primary risk realised is:",
  opts:["Settlement risk only","Operational risk","Correlated collateral deterioration producing simultaneous calls and forced selling across the book","Currency risk"],
  ans:2, expl:"Concentration removes the diversification the lender assumed; this is why per-security and per-group limits exist.", src:"Ch.6 §6.4.1" },

{ id:"W6-05", ch:6, level:3, q:"A short seller borrows stock at a 4% annual fee for 3 months on a VND 800m position. The borrow cost is:",
  opts:["VND 24 million","VND 32 million","VND 2 million","VND 8 million"],
  ans:3, expl:"Cost = 4% × (3/12) × 800m = 1% × 800m = VND 8m, deducted from any trading gain.", src:"Ch.6 §6.4.2" },

{ id:"W6-06", ch:6, level:4, q:"A stock's borrow fee rises from 2% to 30% annually. This most likely indicates:",
  opts:["Improved liquidity","Scarce lendable supply relative to heavy short demand — elevated squeeze and recall risk","Falling short interest","A dividend increase"],
  ans:1, expl:"A spiking borrow fee is a warning signal: the position is crowded, expensive to carry and vulnerable to forced covering.", src:"Ch.6 §6.4.2" },

{ id:"W6-07", ch:6, level:3, q:"A dealer quotes 25.10 bid / 25.40 ask. A client selling receives and a client buying pays, respectively:",
  opts:["25.10 and 25.40","25.40 and 25.40","25.40 and 25.10","25.25 and 25.25"],
  ans:0, expl:"Clients sell at the dealer's bid and buy at its ask; the 0.30 spread is the dealer's gross compensation.", src:"Ch.6 §6.1.5" },

{ id:"W6-08", ch:6, level:4, q:"An exchange shortens its settlement cycle from T+3 to T+2. The principal benefit is:",
  opts:["Fewer listed companies","Reduced counterparty and market risk during the settlement window","Higher commissions","Wider spreads"],
  ans:1, expl:"Less time between trade and settlement means less exposure to a counterparty failing or prices moving before delivery.", src:"Ch.6 §6.1.3" },

{ id:"W6-09", ch:6, level:3, q:"A large institutional order is worked over several hours rather than sent as one market order to:",
  opts:["Increase commissions","Guarantee the closing price","Reduce market impact and slippage in a book that cannot absorb the full size at once","Avoid settlement"],
  ans:2, expl:"Splitting the order limits price impact; alternatives are block trades negotiated off the continuous book.", src:"Ch.6 §6.1.4" },

{ id:"W6-10", ch:6, level:4, q:"A firm's proprietary desk consistently profits immediately before large client orders execute. This pattern suggests:",
  opts:["Good luck","Possible front-running, requiring immediate surveillance review and escalation","Efficient markets","Superior research"],
  ans:1, expl:"Systematic profit ahead of client flow is the signature of front-running; surveillance exists to detect precisely this pattern.", src:"Ch.6 §6.3.3" },

{ id:"W6-11", ch:6, level:3, q:"An investor places an ATC order. It will execute:",
  opts:["At the opening price","In the closing call auction at the determined closing price, if matched","Immediately at the current price","Only tomorrow"],
  ans:1, expl:"ATC orders participate solely in the closing auction; ATO orders serve the equivalent function at the open.", src:"Ch.6 §6.1.4" },

{ id:"W6-12", ch:6, level:4, q:"Why is a market maker's obligation to quote continuously valuable to a small-cap issuer?",
  opts:["It removes disclosure duties","It guarantees a rising share price","It supplies liquidity and price continuity that may not otherwise exist, reducing the liquidity discount investors apply","It eliminates volatility"],
  ans:2, expl:"Illiquid stocks trade at a discount; a committed market maker narrows spreads and improves investability.", src:"Ch.6 §6.1.5" },

{ id:"W6-13", ch:6, level:3, q:"Rehypothecation limits exist principally to protect:",
  opts:["The regulator","Clients, by capping the extent to which their collateral can be re-used and thus exposed to the broker's failure","The exchange","The issuer"],
  ans:1, expl:"Re-use funds the broker but transfers risk to clients if it fails; limits and disclosure balance the two.", src:"Ch.6 §6.4.1" },

{ id:"W6-14", ch:6, level:4, q:"During a market crash, spreads widen, depth collapses and margin calls accelerate. The common thread is:",
  opts:["Liquidity withdrawal and forced selling reinforcing each other — the pro-cyclical dynamic of leveraged markets","Improved price discovery","Regulatory intervention","Independent coincidences"],
  ans:0, expl:"Dealers price higher risk by widening and reducing size just as leveraged holders must sell — supply rises exactly as liquidity falls.", src:"Ch.6 §6.1.5, §6.4.1" },

{ id:"W6-15", ch:6, level:3, q:"A client complains that a market order executed far from the last traded price. The most likely explanation is:",
  opts:["A settlement failure","A dividend adjustment","Thin depth in the order book, so the order consumed successive price levels — slippage","Broker misconduct necessarily"],
  ans:2, expl:"Market orders guarantee execution, not price; in a thin book the realised price can be well away from the last print.", src:"Ch.6 §6.1.4" },

];
