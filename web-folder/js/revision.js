/* =====================================================================
   BAF736 — Review bank (True/False & short answer), flashcards, formulas
   type: tf | short
   ===================================================================== */
window.REVIEW_BANK = [

/* ---------- Chapter 1 ---------- */
{ id:"R1-01", ch:1, type:"tf", tf:false, q:"Investment banks fund themselves primarily with retail deposits.",
  a:"False. Retail deposit-taking defines commercial banking. Investment banks fund themselves in wholesale markets and earn fees, spreads and management charges rather than a deposit-funded lending spread." },
{ id:"R1-02", ch:1, type:"tf", tf:true, q:"The Glass-Steagall Act of 1933 separated commercial and investment banking in the United States.",
  a:"True. It was repealed by the Gramm-Leach-Bliley Act in 1999, which permitted the modern universal bank." },
{ id:"R1-03", ch:1, type:"tf", tf:false, q:"Risk management and compliance are front-office functions.",
  a:"False. They are middle-office functions. The front office generates revenue and faces clients (banking, markets, research); the back office settles and records transactions." },
{ id:"R1-04", ch:1, type:"tf", tf:true, q:"Investment banking fee income is more cyclical than commercial banking interest income.",
  a:"True. Fees are earned per transaction, so revenue collapses when issuance and M&A volumes fall — while the cost base (people) stays largely fixed." },
{ id:"R1-05", ch:1, type:"short", q:"State the WACC formula and explain why the cost of debt is multiplied by (1 − t).",
  a:"WACC = (E/V)·r_e + (D/V)·r_d·(1 − t). Interest is tax-deductible, so each dollar of interest reduces taxable income and saves t in tax. The effective cost to the firm is therefore r_d(1 − t) — the tax shield. Dividends are not deductible, so no equivalent adjustment applies to the cost of equity." },
{ id:"R1-06", ch:1, type:"short", q:"Why do banks care about league-table position even on deals with thin economics?",
  a:"League tables rank banks by deal volume and value. Ranking signals capability and market access to prospective clients, so a high position helps win the next mandate. Banks therefore sometimes accept poor economics on a visible deal to protect the ranking that generates future fees." },

/* ---------- Chapter 2 ---------- */
{ id:"R2-01", ch:2, type:"tf", tf:true, q:"In a firm-commitment underwriting the bank bears the risk of not being able to resell the issue.",
  a:"True. The bank buys the whole issue at an agreed price. Under a best-efforts arrangement that placement risk stays with the issuer." },
{ id:"R2-02", ch:2, type:"tf", tf:false, q:"The greenshoe option allows underwriters to sell up to 50% additional shares.",
  a:"False. The over-allotment option is capped at 15% of the base deal size." },
{ id:"R2-03", ch:2, type:"tf", tf:true, q:"Debt underwriting typically carries a much lower gross spread than equity underwriting.",
  a:"True. Bond spreads are often below 1% (and far less for investment-grade issuers), versus 3–7% for a typical IPO, because credit issuance is frequent, standardized and lower-risk to place." },
{ id:"R2-04", ch:2, type:"tf", tf:false, q:"IPO underpricing benefits the issuing company.",
  a:"False. Underpricing means the company sells shares below the price the market will pay — 'money left on the table'. The beneficiaries are the allocated investors, and indirectly the underwriter, whose placement risk falls and whose distribution clients are rewarded." },
{ id:"R2-05", ch:2, type:"short", q:"A company sells 10m shares at $20 with a 6% gross spread. What are gross and net proceeds?",
  a:"Gross proceeds = 10m × $20 = $200m. Underwriting fee = 6% × $200m = $12m. Net proceeds to the issuer = $188m." },
{ id:"R2-06", ch:2, type:"short", q:"Explain the roles of the hurdle rate and carried interest in a private-equity fund.",
  a:"Carried interest is the GP's share of profits, typically 20%. The hurdle (preferred return, often 8%) is the minimum return LPs must receive before the GP earns any carry. Together they ensure the manager is rewarded for genuine outperformance rather than merely for deploying capital; a high-water mark or clawback prevents being paid twice on the same gains." },

/* ---------- Chapter 3 ---------- */
{ id:"R3-01", ch:3, type:"tf", tf:true, q:"In an asset purchase the buyer generally assumes only the liabilities it expressly agrees to take on.",
  a:"True. This is why buyers usually prefer asset deals while sellers prefer share deals, which give a cleaner and often more tax-efficient exit." },
{ id:"R3-02", ch:3, type:"tf", tf:false, q:"Revenue synergies are generally regarded as more reliable than cost synergies.",
  a:"False. Cost synergies are largely within management's control (removing duplicate functions, procurement). Revenue synergies depend on customer behaviour and are routinely discounted by the market." },
{ id:"R3-03", ch:3, type:"tf", tf:true, q:"In an all-stock deal, the transaction is accretive when the acquirer's P/E exceeds the P/E it pays for the target.",
  a:"True. The acquirer issues relatively expensive shares to buy relatively cheaper earnings, raising EPS. If it pays a higher P/E than its own, the deal dilutes." },
{ id:"R3-04", ch:3, type:"tf", tf:false, q:"Empirical evidence shows that acquirer shareholders typically capture most of the value created in M&A.",
  a:"False. Target shareholders capture most of the announced value through the premium; acquirers on average earn approximately zero or slightly negative abnormal returns." },
{ id:"R3-05", ch:3, type:"short", q:"A target trades at $40 unaffected with 50m shares. At a 25% premium, what is the purchase equity value?",
  a:"Offer price = $40 × 1.25 = $50. Purchase equity value = $50 × 50m = $2,500m." },
{ id:"R3-06", ch:3, type:"short", q:"What characteristics make a company a good LBO candidate, and why?",
  a:"Stable, predictable cash flows (to service fixed interest), low capital-expenditure needs (cash is free for debt paydown), tangible or saleable assets (collateral and exit optionality), a defensible market position, and scope for operational improvement. Volatile, capex-heavy or pre-revenue businesses cannot support high fixed debt service." },
{ id:"R3-07", ch:3, type:"short", q:"Why is 'staple financing' a conflict of interest?",
  a:"The sell-side bank advises the seller — whose interest is the highest price — while simultaneously offering debt financing to the buyer, from which it earns a separate fee and whose terms affect what the buyer can pay. Banks manage this with disclosure and separate teams, but the tension is structural." },

/* ---------- Chapter 4 ---------- */
{ id:"R4-01", ch:4, type:"tf", tf:true, q:"Management fees are charged on AUM regardless of whether the fund performs well.",
  a:"True. That is precisely why they are valued: recurring, predictable revenue that stabilises group earnings against cyclical advisory and trading income." },
{ id:"R4-02", ch:4, type:"tf", tf:false, q:"ETFs can only be bought or sold once per day at the closing NAV.",
  a:"False. ETFs trade intraday on an exchange at market prices, kept close to NAV by authorised-participant arbitrage. Open-end mutual funds transact once daily at NAV." },
{ id:"R4-03", ch:4, type:"tf", tf:true, q:"A discretionary mandate allows the manager to trade without obtaining approval for each transaction.",
  a:"True — within the objectives and constraints agreed in the mandate or IPS. An advisory mandate leaves each decision to the client." },
{ id:"R4-04", ch:4, type:"short", q:"A fund charges 2% and 20% carry over an 8% hurdle. Gross return is 15%. What does the investor net?",
  a:"Excess over hurdle = 7%. Carry = 20% × 7% = 1.4%. Net return = 15% − 2% − 1.4% = 11.6%." },
{ id:"R4-05", ch:4, type:"short", q:"Distinguish the Sharpe ratio from the information ratio.",
  a:"Sharpe = (R_P − R_f)/σ_P measures excess return over the risk-free rate per unit of total risk — appropriate when the portfolio is the investor's whole wealth. Information ratio = (R_P − R_B)/tracking error measures active return against a benchmark per unit of active risk — it isolates the manager's skill relative to the mandate." },
{ id:"R4-06", ch:4, type:"short", q:"List the five characteristics of a good benchmark.",
  a:"Unambiguous (constituents and weights known), investable (it could actually be held passively), measurable (returns computable at reasonable frequency), appropriate (consistent with the manager's style), and specified in advance (agreed before the evaluation period, not chosen afterwards)." },

/* ---------- Chapter 5 ---------- */
{ id:"R5-01", ch:5, type:"tf", tf:true, q:"EV/EBITDA is capital-structure neutral, whereas P/E is not.",
  a:"True. EV/EBITDA values the whole business before financing costs, so companies with different leverage remain comparable. P/E is computed after interest, so leverage distorts it." },
{ id:"R5-02", ch:5, type:"tf", tf:false, q:"Analysts normally apply the mean peer multiple to limit the influence of outliers.",
  a:"False. The median is used. Multiples are bounded below by zero but unbounded above, so distributions are right-skewed and one outlier can badly distort the mean." },
{ id:"R5-03", ch:5, type:"tf", tf:true, q:"An equity carve-out raises cash while allowing the parent to retain control of the subsidiary.",
  a:"True. A minority stake is sold via IPO, generating cash and a public market price. A spin-off, by contrast, distributes shares to existing holders and raises no cash." },
{ id:"R5-04", ch:5, type:"short", q:"EBITDA is $120m, the peer multiple 9.0×, net debt $200m and there are 50m shares. What is value per share?",
  a:"EV = 9.0 × $120m = $1,080m. Equity value = 1,080 − 200 = $880m. Value per share = $880m / 50m = $17.60." },
{ id:"R5-05", ch:5, type:"short", q:"Explain the conglomerate discount and the standard remedies.",
  a:"Diversified groups often trade below the sum of their parts because investors cannot see through cross-subsidies, management attention is spread thin, and investors can diversify more cheaply themselves. Remedies are spin-offs, carve-outs and divestitures, justified analytically by a sum-of-the-parts valuation showing the gap." },
{ id:"R5-06", ch:5, type:"short", q:"Why must a Vietnamese company convert to a joint-stock company before a public offering?",
  a:"Only a joint-stock company (công ty cổ phần) may issue transferable shares to the public and list them. Conversion also creates the governance organs — general meeting of shareholders, board, supervisory board — that regulators and outside investors require." },

/* ---------- Chapter 6 ---------- */
{ id:"R6-01", ch:6, type:"tf", tf:false, q:"An agency broker takes principal risk on the trades it executes for clients.",
  a:"False. An agency broker executes in the market for a commission and never takes the other side, so it bears no market risk — only operational and compliance risk." },
{ id:"R6-02", ch:6, type:"tf", tf:true, q:"A market maker's bid-ask spread compensates it for inventory and adverse-selection risk.",
  a:"True, along with order-processing costs. Spreads widen when volatility rises, depth is thin, or informed trading is suspected — which is why the spread is a direct measure of liquidity." },
{ id:"R6-03", ch:6, type:"tf", tf:true, q:"The maximum theoretical loss on a short sale is unlimited.",
  a:"True. A share's price can rise without bound, whereas a long position can only fall to zero. This asymmetry, plus recall and squeeze risk, makes short selling far riskier than a long position of the same size." },
{ id:"R6-04", ch:6, type:"short", q:"Stock is bought at $50 with 50% initial and 25% maintenance margin. What is the margin-call price?",
  a:"Call price = P × (1 − initial)/(1 − maintenance) = 50 × 0.50/0.75 = $33.33. At that price the client's equity has fallen to 25% of market value and further funds must be deposited." },
{ id:"R6-05", ch:6, type:"short", q:"How does the Volcker Rule distinguish market making from proprietary trading?",
  a:"By intent and evidence of client facilitation. Market making means holding inventory reasonably expected to meet near-term client demand; proprietary trading means taking positions to profit from price movements. The rule permits the former (plus underwriting and hedging) and bars the latter — the practical difficulty is documenting which is which." },
{ id:"R6-06", ch:6, type:"short", q:"A dealer accumulates a large unwanted long inventory. What does it do to its quotes and why?",
  a:"It lowers both bid and ask. A lower bid discourages further selling to the dealer; a lower ask makes buying from it more attractive. The dealer skews quotes to manage inventory back toward neutral, not to forecast direction." }

];

/* =====================================================================
   Flashcards — key terms per chapter (front/back)
   ===================================================================== */
window.FLASHCARDS = [
/* Ch.1 */
{ ch:1, front:"Investment bank", back:"A financial intermediary that raises capital, advises on strategic transactions and trades/manages assets — without taking retail deposits." },
{ ch:1, front:"Sell-side vs. buy-side", back:"Sell-side (banks) creates and distributes securities and advice; buy-side (funds) consumes them." },
{ ch:1, front:"Glass-Steagall (1933)", back:"US law separating commercial and investment banking; repealed by Gramm-Leach-Bliley in 1999." },
{ ch:1, front:"Front / middle / back office", back:"Revenue-generating desks · risk & compliance · operations, settlement and technology." },
{ ch:1, front:"WACC", back:"(E/V)·r_e + (D/V)·r_d·(1 − t) — the blended hurdle rate for valuing a firm." },
{ ch:1, front:"Enterprise value (EV)", back:"Equity value + net debt + minority interest + preferred — the operating business independent of financing." },
{ ch:1, front:"Bulge bracket vs. boutique", back:"Large full-service banks with balance sheets vs. advice-focused firms taking little principal risk." },
{ ch:1, front:"Chinese wall", back:"Information barrier separating private-side advisory staff from public-side trading and research." },

/* Ch.2 */
{ ch:2, front:"Underwriting", back:"Committing to buy or place a new issue and resell it, transferring placement risk for the gross spread." },
{ ch:2, front:"Firm commitment vs. best efforts", back:"Bank buys the whole issue and bears resale risk vs. merely agreeing to try to sell it." },
{ ch:2, front:"Gross spread", back:"The underwriting discount — underwriters' fee as a percentage of the offer price (3–7% for a typical IPO)." },
{ ch:2, front:"Greenshoe (over-allotment)", back:"Option to sell up to 15% extra shares to stabilize the aftermarket price." },
{ ch:2, front:"Bookbuilding", back:"Collecting investor price-and-size demand indications during the roadshow to set price and allocation." },
{ ch:2, front:"IPO underpricing", back:"Pricing below expected trading value; 'money left on the table' benefits allocated investors, not the issuer." },
{ ch:2, front:"Private equity", back:"Funds acquiring control of mature companies, often with leverage (LBO); typically '2 and 20'." },
{ ch:2, front:"Venture capital", back:"Staged minority financing of early-stage, high-growth companies; a few winners drive returns." },
{ ch:2, front:"Post-money valuation", back:"Pre-money + new investment. Investor stake = investment / post-money." },
{ ch:2, front:"Hurdle rate / carried interest", back:"Minimum LP return before the GP shares profits · the GP's ~20% profit share." },

/* Ch.3 */
{ ch:3, front:"Merger vs. acquisition", back:"A merger fuses two firms into one; an acquisition is a purchase of control of a target." },
{ ch:3, front:"Control premium", back:"The excess over the target's unaffected share price paid to obtain control (commonly 20–40%)." },
{ ch:3, front:"Synergies", back:"Cost synergies (reliable, within management control) vs. revenue synergies (heavily discounted by markets)." },
{ ch:3, front:"Accretion / dilution", back:"Whether the deal raises or lowers the acquirer's pro forma EPS versus standalone." },
{ ch:3, front:"Poison pill", back:"Defense diluting a hostile bidder that crosses an ownership threshold, forcing negotiation with the board." },
{ ch:3, front:"White knight", back:"A friendlier alternative acquirer invited by a target facing a hostile bid." },
{ ch:3, front:"CIM / teaser", back:"Confidential Information Memorandum (detailed, post-NDA) · one-page anonymous marketing document." },
{ ch:3, front:"Share vs. asset deal", back:"Share: liabilities transfer with the company. Asset: buyer takes only what it expressly assumes." },
{ ch:3, front:"LBO", back:"Acquisition funded mostly by debt serviced by the target's cash flows; returns from paydown, growth and multiple expansion." },
{ ch:3, front:"Staple financing", back:"Financing pre-arranged by the sell-side bank and offered to bidders — fast, but a conflict of interest." },

/* Ch.4 */
{ ch:4, front:"AUM", back:"Assets under management — the base on which management fees are charged." },
{ ch:4, front:"Management fee vs. performance fee", back:"Recurring % of AUM regardless of performance vs. a share of profits above a hurdle." },
{ ch:4, front:"High-water mark", back:"The prior NAV peak; no carry may be charged until it is exceeded, preventing double-charging after losses." },
{ ch:4, front:"NAV per unit", back:"(Total assets − total liabilities) / units outstanding." },
{ ch:4, front:"Mutual fund vs. ETF", back:"Both pooled; ETFs trade intraday on an exchange and usually charge lower fees." },
{ ch:4, front:"Discretionary mandate", back:"Authority to trade within agreed objectives and constraints without approving each trade." },
{ ch:4, front:"Investment policy statement (IPS)", back:"Written mandate setting objectives, risk tolerance, constraints and the benchmark." },
{ ch:4, front:"Sharpe vs. information ratio", back:"Excess return per unit of total risk vs. active return per unit of tracking error." },

/* Ch.5 */
{ ch:5, front:"Comparable companies analysis", back:"Valuing a firm by applying peer trading multiples to its own metrics." },
{ ch:5, front:"EV/EBITDA", back:"Capital-structure-neutral multiple — comparable across firms with different leverage." },
{ ch:5, front:"Equity value bridge", back:"Equity = EV − net debt − minority interest − preferred; divide by diluted shares for value per share." },
{ ch:5, front:"Why the median multiple?", back:"Multiples are right-skewed and peer sets small, so the median resists outlier distortion." },
{ ch:5, front:"Listing advisory", back:"Preparing audited accounts, governance, disclosure capability, valuation and the equity story for an IPO." },
{ ch:5, front:"Equitization (cổ phần hóa)", back:"Converting a state-owned enterprise into a joint-stock company and selling part of the state stake." },
{ ch:5, front:"Spin-off vs. carve-out", back:"Distribute subsidiary shares to existing holders (no cash) vs. IPO a minority stake (raises cash, keeps control)." },
{ ch:5, front:"Conglomerate discount", back:"Diversified groups trading below the sum of their parts; remedied by spin-offs and carve-outs (SOTP analysis)." },
{ ch:5, front:"Leverage & coverage ratios", back:"Net debt / EBITDA (IG under ~3×) · EBIT / interest (comfortable above ~5×)." },
{ ch:5, front:"Governance discount", back:"Lower multiples applied to firms with concentrated control, opaque related-party deals and weak boards." },

/* Ch.6 */
{ ch:6, front:"Agency brokerage", back:"Executing client orders as agent for a commission, taking no principal risk." },
{ ch:6, front:"Market making", back:"Quoting two-sided prices as principal; earns the spread, bears inventory and adverse-selection risk." },
{ ch:6, front:"Bid-ask spread", back:"Ask − bid: the dealer's margin and a direct measure of market liquidity." },
{ ch:6, front:"Adverse selection", back:"Informed traders systematically trade against the dealer just before prices move." },
{ ch:6, front:"Proprietary trading", back:"Trading the firm's own capital to profit from price moves — restricted by the Volcker Rule." },
{ ch:6, front:"Value at Risk (VaR)", back:"Loss not exceeded with a given confidence over a given horizon; silent about tail severity." },
{ ch:6, front:"Initial vs. maintenance margin", back:"Equity required to open a levered position vs. the minimum before a margin call." },
{ ch:6, front:"Margin call price", back:"P × (1 − initial) / (1 − maintenance)." },
{ ch:6, front:"Securities lending", back:"Lending shares against collateral and a fee — the mechanism that enables short selling." },
{ ch:6, front:"Short squeeze", back:"Rising prices force crowded short sellers to cover simultaneously, driving prices higher still." }
];

/* =====================================================================
   Formula sheet per chapter (HTML)
   ===================================================================== */
window.FORMULAS = {
  1: `<b>Cost of equity (CAPM):</b> r<sub>e</sub> = r<sub>f</sub> + β(r<sub>m</sub> − r<sub>f</sub>)<br>
      <b>After-tax cost of debt:</b> r<sub>d</sub>(1 − t)<br>
      <b>WACC</b> = (E/V)·r<sub>e</sub> + (D/V)·r<sub>d</sub>(1 − t)<br>
      <b>Enterprise value:</b> EV = Equity value + Net debt + Minority interest + Preferred<br>
      <b>Net debt</b> = Total debt − Cash &amp; equivalents<br>
      <b>ROE</b> = (NI/Revenue) × (Revenue/Assets) × (Assets/Equity)`,
  2: `<b>Gross spread</b> = (Offer price − Proceeds to issuer) / Offer price<br>
      <b>Gross proceeds</b> = Shares × Offer price<br>
      <b>Net proceeds to issuer</b> = Shares × Offer price × (1 − gross spread)<br>
      <b>Greenshoe shares</b> ≤ 15% × base deal size<br>
      <b>Bond price:</b> P<sub>0</sub> = Σ C/(1+y)<sup>t</sup> + F/(1+y)<sup>n</sup><br>
      <b>VC:</b> Post-money = Pre-money + Investment · Investor stake = Investment / Post-money`,
  3: `<b>Offer price</b> = Unaffected price × (1 + premium)<br>
      <b>Purchase equity value</b> = Offer price × Target shares<br>
      <b>New shares issued</b> = Stock consideration / Acquirer share price<br>
      <b>Pro forma NI</b> = NI<sub>acq</sub> + NI<sub>tgt</sub> + after-tax synergies − after-tax new interest<br>
      <b>Pro forma EPS</b> = Pro forma NI / (Shares<sub>acq</sub> + new shares)<br>
      <b>Accretion/(dilution)</b> = Pro forma EPS / Standalone EPS − 1`,
  4: `<b>Management fee</b> = fee% × AUM<br>
      <b>Excess over hurdle</b> = max(Gross return − Hurdle, 0)<br>
      <b>Performance fee (carry)</b> = carry% × excess over hurdle<br>
      <b>Investor net return</b> = Gross return − management fee% − performance fee%<br>
      <b>NAV per unit</b> = (Total assets − Total liabilities) / Units<br>
      <b>Sharpe</b> = (R<sub>P</sub> − R<sub>f</sub>)/σ<sub>P</sub> · <b>IR</b> = (R<sub>P</sub> − R<sub>B</sub>)/Tracking error`,
  5: `<b>Implied EV</b> = EV/EBITDA multiple × EBITDA<br>
      <b>Equity value</b> = EV − Net debt − Minority interest − Preferred<br>
      <b>Value per share</b> = Equity value / Diluted shares<br>
      <b>Implied price (P/E)</b> = P/E multiple × EPS<br>
      <b>Leverage</b> = Net debt / EBITDA · <b>Interest coverage</b> = EBIT / Interest<br>
      <b>WACC</b> = (E/V)·r<sub>e</sub> + (D/V)·r<sub>d</sub>(1 − t)`,
  6: `<b>Spread</b> = Ask − Bid · <b>Mid</b> = (Ask + Bid)/2<br>
      <b>Buying power</b> = Equity / Initial margin%<br>
      <b>Equity in account</b> = Market value − Loan balance<br>
      <b>Margin call price</b> = Purchase price × (1 − Initial margin) / (1 − Maintenance margin)<br>
      <b>Leverage</b> = 1 / Initial margin%<br>
      <b>Short profit</b> = Sale price − Repurchase price − Borrow fee − Dividends passed through`
};
