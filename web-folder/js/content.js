/* =====================================================================
   BAF736 Investment Banking — Course metadata & lecture content
   Structure and terminology follow the official course lecture slides
   (NVNHDT Chương 1–6) and the course textbook:
   Trần Tuấn Vinh & Hồ Công Hưởng (2023), Giáo trình Nghiệp vụ Ngân hàng
   Đầu tư, NXB Lao động. Required text: Rosenbaum & Pearl (2020),
   Investment Banking: Valuation, LBOs, M&A, and IPOs (3rd ed.), Wiley.
   ===================================================================== */

window.COURSE_META = {
  code: "BAF736",
  name: "Investment Banking",
  nameVN: "Nghiệp vụ ngân hàng đầu tư",
  credits: 3,
  hours: { total: 150, classroom: 45, selfStudy: 105 },
  faculty: "Faculty of Finance — Ho Chi Minh University of Banking",
  lecturer: "Dr Nam Ngo · namns@hub.edu.vn · Finance Faculty Office, 1st Floor, Main Building, 56 Hoang Dieu 2, Thu Duc City",
  prerequisite: "Money, Banking, and Fintech",
  description: "The course presents fundamental issues regarding investment banking and organizational structures. It describes the key business operations of investment banks, including mergers and acquisitions (M&A) advisory, capital raising support (underwriting), investment activities, research, investment management, wholesale banking, and prime brokerage services.",
  clos: [
    { id: "CLO1", text: "Analyze major investment banking operations and apply them to the activities of investment banks.", level: 4, co: "CO1", plo: "PLO6" },
    { id: "CLO2", text: "Capable of solving problems regarding major investment banking operations.", level: 4, co: "CO1", plo: "PLO7" },
    { id: "CLO3", text: "Capable of structuring investment banking operations, managing operations by client group, and evaluating the efficiency of each operation within an investment bank.", level: 4, co: "CO2", plo: "PLO8" }
  ],
  assessment: [
    { item: "Attendance", weight: "10%", method: "Roll call each session at a random time; attending 100% of sessions earns 10 attendance points", clo: "—" },
    { item: "Process Assessment 1 (Mid-term)", weight: "20%", method: "Essay / written test after Chapter 3 — closed book, covering Chapters 1–3 and requiring application of knowledge", clo: "CLO1" },
    { item: "Process Assessment 2 (Group work)", weight: "20%", method: "Groups select topics after each session, present, and question other groups; a consolidated essay is submitted at the final session", clo: "CLO3" },
    { item: "Final Examination", weight: "50%", method: "Objective test — 40 questions, 60 minutes, Chapters 1–6, closed book", clo: "CLO1, CLO2" }
  ],
  materials: [
    "[1] Rosenbaum, J., & Pearl, J. (2020). Investment Banking: Valuation, LBOs, M&A, and IPOs (3rd ed.). John Wiley & Sons. — required textbook",
    "[2] Trần Tuấn Vinh & Hồ Công Hưởng (2023). Giáo trình Nghiệp vụ Ngân hàng Đầu tư. NXB Lao động. — main course textbook",
    "[3] Castillo, J. J., & McAniff, P. J. (2007). The Practitioner's Guide to Investment Banking, Mergers & Acquisitions, Corporate Finance. Scoopbooks.",
    "[4] Stowell, D. P., & Stowell, P. (2024). Investment Banks, Hedge Funds, and Private Equity (4th ed.). Academic Press.",
    "[5] Fleuriet, M. (2018). Investment Banking Explained: An Insider's Guide to the Industry (2nd ed.). McGraw Hill.",
    "[6] Caselli, S., Gigante, G., & Tortoroglio, A. (2021). Corporate and Investment Banking: A Hands-On Approach. Bocconi University Press."
  ]
};

window.IB_CONTENT = [

/* ================= CHAPTER 1 ================= */
{
  id: 1,
  title: "Overview of Investment Banking",
  hours: 5,
  clo: "CLO1",
  blurb: "Concept and characteristics of investment banking, the history and development of the industry, its roles and functions, how it is organised, and the environment in which it operates.",
  refs: "[2] {@tranTuanVinh2023, Chapters 1–3}; [1] {@rp2020, Introduction}; [4] {@stowell2024, Chapters 1–2}; [5] Fleuriet (2018), Chapter 1",
  objectives: [
    "Define investment banking from several authoritative sources and construct a working definition.",
    "Distinguish an investment bank from a commercial bank across six criteria: business model, income sources, funding, asset–liability management, leverage and legal framework.",
    "Trace the history of the industry internationally and in the United States, and explain the effect of McFadden, Glass-Steagall, Gramm-Leach-Bliley and Dodd-Frank.",
    "Explain the roles of investment banks for enterprises, investors and the economy, and the six functions: broker, dealer, market maker, trustee, advisor and servicer.",
    "Describe the seven core operations, the entities licensed to perform them in Vietnam, and the front / middle / back office structure.",
    "Identify conflicts of interest between divisions and explain how the information barrier separates the private and public sides."
  ],
  sections: [
    { id: "1.1", title: "Concept & Characteristics", html: `
      <h2>1.1 Concept and Characteristics of Investment Banking</h2>
      <h3>1.1.1 How the literature defines it</h3>
      <p>There is no single statutory definition. The course builds one from several authoritative sources.</p>
      <div class="keyterm"><b>{@shiller2008}, Yale lecture:</b> "Investment banking means the underwriting of securities. That is, arranging for the issuance by corporations of stocks and bonds." — the <i>narrow, classical</i> view.</div>
      <div class="keyterm"><b>Dictionary definitions:</b> the <i>Dictionary of Banking and Finance</i> describes an investment bank as one that underwrites new issues and advises corporations on their financial affairs — the British equivalent being an "issue house". Bloomberg's broader definition adds facilitating mergers and reorganisations, broking for individual and institutional clients, and trading for the bank's own account. Marshall and Ellis put it more bluntly: "Investment banking is what investment banks do." [as cited in @giri2017, p. 151]</div>
      <div class="keyterm"><b>{@stowell2024, pp. 8, 10}:</b> a large investment bank runs two principal businesses — an <b>Investment Banking Division</b> that serves corporate clients and private equity funds with securities financing, M&amp;A advice and direct lending, and a <b>Trading Division</b> that gives institutional investors access to new issues, secondary-market execution, market making and lending. Most large banks added asset and wealth management by the mid-1990s.</div>
      <div class="keyterm"><b>{@caselli2021, pp. 18–19}:</b> "a single, global definition of the term does not yet exist". Corporate and investment banking is defined by contrast with the traditional commercial bank: it serves corporate clients and operates in capital markets, where it earns <i>fees</i>, whereas the commercial bank earns an <i>interest margin</i> on deposits and loans.</div>
      <p>Statistical classifications draw the same line. In the US <b>Standard Industrial Classification (SIC)</b>, industry <b>6211 "Security Brokers, Dealers, and Flotation Companies"</b> covers establishments that buy, sell and broker securities and those "generally known as investment bankers" that originate, underwrite and distribute issues of securities; commodity contracts brokers and dealers are a separate industry (6221) [@sic1987].</p>
      <div class="example"><div class="ex-title">Working definition for this course</div>
        An <b>investment bank</b> is an organisation that helps clients raise capital by underwriting the issuance of securities (shares and bonds); provides brokerage, research, corporate-restructuring and M&amp;A advisory services; manages assets; and conducts proprietary trading, private equity and venture capital investment [synthesised from @stowell2024, p. 8; @giri2017, p. 151; @tranTuanVinh2023].</div>
      <h3>1.1.2 The six defining characteristics</h3>
      <p>The course compares investment banks (IB) with commercial banks (CB) on six criteria [@tranTuanVinh2023; @caselli2021, pp. 18–19].</p>
      <p><b>(a) Business model.</b> The IB channels capital from surplus units to deficit units <i>through the capital market</i>: the capital reaches the issuer and the <b>investment risk remains with the investor</b>. The CB interposes its own balance sheet — it takes deposits and lends, absorbing the <b>credit risk</b> itself [@caselli2021, pp. 18–19].</p>
      <p><b>(b) Sources of income.</b></p>
      <table>
        <tr><th>Type</th><th>Investment bank</th><th>Commercial bank</th></tr>
        <tr><td>Fees</td><td>Underwriting, brokerage, trusteeship &amp; asset management, advisory, transactions</td><td>Payments, services, advisory</td></tr>
        <tr><td>Interest spread</td><td>Between lending and borrowing rates in wholesale banking</td><td>Net interest margin between deposit and lending rates</td></tr>
        <tr><td>Investment P&amp;L</td><td>Proprietary trading, wholesale banking</td><td>Money-market, FX and securities instruments</td></tr>
      </table>
      <p><b>(c) How they raise funds.</b> The key disadvantage of an IB is that it <b>may not take deposits from the public</b>.</p>
      <ul>
        <li><b>Short-term secured borrowing</b> — historically the critical source: repo, sell-and-buy-back, securities lending, short selling and margin-lending agreements, all collateralised by highly liquid securities. Almost 25% of US investment banks' total assets were financed by <b>overnight repos</b> in 2007, up from about 12% in 2000 [@stowell2024, pp. 246–247].</li>
        <li><b>Unsecured borrowing:</b> commercial paper (usually 30–180 days, rolled over at maturity), loans from commercial banks, and bonds and notes. Short-term funding is cheap and flexible but can vanish: after Lehman's collapse in October 2008, investment banks' commercial paper outstanding shrank to less than a third within weeks [@stowell2024, pp. 246–247].</li>
        <li><b>Equity:</b> charter capital, reserves and retained earnings (as for a CB).</li>
      </ul>
      <p>On the asset side the mirror images are reverse repo, securities lending out, margin loans, project finance and syndicated lending, plus investment assets and fixed assets.</p>
      <p><b>(d) Asset–liability management orientation.</b> A CB raises funds first and then decides how to deploy them — <i>"funding determines use of funds"</i>, an <b>asset-management</b> orientation. An IB raises funding only against actual investment needs — <i>"use of funds determines funding"</i>, a <b>liability-management</b> orientation [@tranTuanVinh2023].</p>
      <p><b>(e) Financial leverage.</b> A CB has <i>lower</i> leverage: the average commercial bank runs total assets of 10–15 times book equity (a non-financial company 1–3 times), with much of its balance sheet in loans and long-held investments and its leverage constrained by Basel capital-adequacy ratios. Investment banks historically ran more — 20–30 times in 2005–2007 — because most of their assets are liquid and readily pledged as collateral; post-2008 rules forced that leverage down [@stowell2024, pp. 247–248]. <b>Accepting high leverage and controlling it is the heart of the art of managing an investment bank.</b></p>
      <p><b>(f) Legal framework.</b> The supervisor depends on the country and the activity. In the <b>US</b>, the SEC supervises broker-dealers; until 2008 the stand-alone investment banks also computed their capital ratios under SEC supervision, and when Goldman Sachs and Morgan Stanley became bank holding companies they came under the Federal Reserve. In the <b>euro area</b>, banks — including universal banks with investment-banking arms — are supervised through the Single Supervisory Mechanism, with the ECB directly supervising significant institutions and national authorities the smaller ones, while MiFID II governs how investment services are provided [@stowell2024, pp. 25, 248; @caselli2021, pp. 35–36, 107]. In <b>Vietnam</b>, securities companies and fund management companies are licensed and supervised by the State Securities Commission (SSC); commercial banks are supervised by the State Bank of Vietnam [@luatCK2019, Art. 70; @luatNHNN2010, Art. 4(11)].</p>
      <table>
        <tr><th>Other differences [@stowell2024, p. 247; @caselli2021, p. 18]</th><th>Investment bank</th><th>Commercial bank</th></tr>
        <tr><td>Principal market</td><td>Capital market</td><td>Money market</td></tr>
        <tr><td>Stability of profit</td><td>Low</td><td>High</td></tr>
        <tr><td>Level of operating risk</td><td>High</td><td>Low</td></tr>
      </table>
    `},
    { id: "1.2", title: "History & Development Trends", html: `
      <h2>1.2 History and Development Trends of the Industry</h2>
      <h3>1.2.1 Origins</h3>
      <p>The roots of investment banking lie with <b>merchants</b>. Financing trade, dealing in bills and foreign exchange, and using securities as a medium of exchange were part of their business; once they began buying and selling securities in their own right, they were performing an investment-banking function. Britain's merchant banks and many early American houses began this way [@carosso1970, p. 8; @giri2017, p. 152]. The development of the industry is inseparable from <b>industrialisation</b> and the growing demand for large-scale capital; the emergence of joint-stock companies and the expansion of securities markets then pushed it into its modern form.</p>
      <p>Development was uneven across countries. In <b>Britain</b>, specialised investment banks emerged separately from commercial banks. Most of <b>continental Europe</b> adopted the <b>universal banking</b> model, in which a single institution provides both commercial and investment banking services. The <b>United States</b>, despite a legal separation of banking and commerce, also saw the rise of quasi-universal banks through securities affiliates and close relationships between commercial and investment banks [@giri2017, pp. 152, 168].</p>
      <p>Organisational forms and practices differ across countries and eras, but the core function is constant: <b>to channel capital from savers to those who need to invest it</b>.</p>
      <h3>1.2.2 The United States</h3>
      <p>The New York Stock Exchange traces its origins to the <b>Buttonwood Agreement</b>, signed by 24 stockbrokers on 17 May 1792, which set rules for trading stocks and fixed commissions [@nyse]. In the United States, as in Europe, investment banking started out as a sideline of other businesses [@carosso1970, p. 1].</p>
      <ul>
        <li><b>Post-Revolutionary War:</b> the business was carried on by unspecialised middlemen — loan contractors (merchants and speculators who bought securities to resell at a profit), incorporated banks, auctioneers and brokers [@carosso1970, pp. 1–5].</li>
        <li><b>From the 1850s:</b> the financial needs of the <b>railroads</b> gave rise to some of the first investment banking houses [@carosso1970, p. 1].</li>
        <li><b>Civil War:</b> massive government borrowing drove innovation in distribution — Jay Cooke sold Union bonds through agents, advertising and aggressive salesmanship to small investors as well as institutions — and new banking houses multiplied [@carosso1970, pp. 15–17].</li>
        <li><b>1890–1929:</b> dominance of the great private bankers — <b>J.P. Morgan, Kuhn Loeb, Kidder Peabody, Brown Brothers</b> — financing the railroads and the new industrial corporations. With no required separation, houses such as Morgan, Kuhn Loeb and Kidder Peabody both accepted deposits and originated, underwrote and distributed new securities [@carosso1970, p. x].</li>
        <li><b>After 1929:</b> the crash and the Great Depression brought regulation, the separation of commercial and investment banking, and new types of firm.</li>
      </ul>
      <h3>1.2.3 The four decisive statutes</h3>
      <table>
        <tr><th>Act</th><th>Year</th><th>Effect</th></tr>
        <tr><td><b>McFadden Act</b></td><td>1927</td><td>Authorised national banks to open branches and to carry on certain types of securities business, so that they could compete with state-chartered and private banks. (It did not grant insurance powers.) [@carosso1970, p. 273]</td></tr>
        <tr><td><b>Glass-Steagall Act</b><br>(Banking Act)</td><td>1933</td><td>Separated commercial from investment banking; barred Federal Reserve member banks from issuing, underwriting, selling or distributing securities, and barred firms "principally engaged" in investment banking from owning member banks [@stowell2024, p. 40; @carosso1970, p. 371].</td></tr>
        <tr><td><b>Gramm-Leach-Bliley Act</b><br>(Financial Services Modernization Act)</td><td>1999</td><td>Repealed the mandatory separation; commercial banks may again engage in securities and insurance business [@stowell2024, p. 44].</td></tr>
        <tr><td><b>Dodd-Frank Act</b></td><td>2010</td><td>The deepest regulatory change since 1934: consumer protection, ending "too big to fail" bailouts, regulator coordination, early identification of systemic risk, transparency for complex instruments and executive compensation [@stowell2024, pp. 47–50].</td></tr>
      </table>
      <div class="example"><div class="ex-title">Glass-Steagall in practice</div>
        The Act forced large houses to <b>choose</b>. J.P. Morgan &amp; Co. chose to remain a commercial bank; in September 1934 three Morgan partners and two from Drexel resigned to organise the investment bank <b>Morgan Stanley &amp; Co.</b> [@carosso1970, p. 373; @stowell2024, p. 42] Gramm-Leach-Bliley later allowed <b>Citigroup</b> (formed from the 1998 Citicorp–Travelers merger) to keep Travelers' Salomon Brothers investment-banking arm instead of divesting it, and permitted <b>Chase Manhattan</b> to merge with <b>J.P. Morgan</b> in 2000 [@stowell2024, p. 44].</div>
      <p><b>Dodd-Frank's operational effect on investment banks:</b> banks must support their assets with at least 5% equity; must hold much higher liquidity in the form of highly liquid assets convertible quickly into cash; and must pass an <b>annual stress test</b> simulating a crisis at least as severe as 2008 without government support [@stowell2024, pp. 47–50].</p>
      <h3>1.2.4 The 2008 crisis and the industry today</h3>
      <p>In 2008 all five of the largest US "pure-play" investment banks were transformed. <b>Bear Stearns</b> agreed to be bought by J.P. Morgan for $2 a share (later raised to $10) to avoid bankruptcy; <b>Lehman Brothers</b> filed for bankruptcy; <b>Merrill Lynch</b> was acquired by Bank of America at a fraction of its 2007 value; <b>Goldman Sachs</b> and <b>Morgan Stanley</b> became <b>bank holding companies</b> [@stowell2024, pp. 25, 509]. The surviving landscape mixes nine large global banks (Bank of America, Barclays, Citi, Credit Suisse, Deutsche Bank, Goldman Sachs, J.P. Morgan, Morgan Stanley, UBS), large regional banks (e.g. BNP Paribas, Mizuho, Nomura, RBC) and boutiques that focus on M&amp;A advice and deploy little capital — some, such as Lazard, Evercore, Rothschild &amp; Co and Centerview, rank among the leading global M&amp;A advisers [@stowell2024, pp. 6–7, 82]. Credit Suisse itself was merged into UBS in June 2023 [@ubs2023].</p>
      <p><b>Current trends:</b> consolidation and a "barbell" market structure; the rise of independent advisory boutiques that carry no balance sheet; growth of private capital as a substitute for public issuance; electronification compressing secondary-market margins; and tighter capital and liquidity rules that have structurally lowered industry ROE — the nine largest global banks averaged between −1.9% and 11.8% in 2017–2020 [@stowell2024, p. 8, Exhibit 1.4].</p>
    `},
    { id: "1.3", title: "Roles & Functions", html: `
      <h2>1.3 Roles and Functions of Investment Banks</h2>
      <h3>1.3.1 Roles</h3>
      <table>
        <tr><th>For enterprises</th><th>For investors</th><th>For the economy</th></tr>
        <tr>
          <td>Raise capital efficiently; advise and support restructuring to increase competitiveness</td>
          <td>Supply research products and services; provide securities brokerage and investment advice</td>
          <td>Support the smooth circulation of capital; contribute to economic development [@tranTuanVinh2023]</td>
        </tr>
      </table>
      <h3>1.3.2 The six functions</h3>
      <p><b>(a) Broker.</b> Acting as an <b>agent</b>: the bank stands between sellers and buyers, arranging the transfer of the product against the flow of cash, and earns a <b>commission</b>. It takes no position and bears no market risk. Brokerage may be organised on the sell side or the buy side [@stowell2024, p. 136].</p>
      <p><b>(b) Dealer.</b> Acting as <b>principal</b>: the bank buys and sells for its own account, profiting from price movements and bearing the resulting market risk [@stowell2024, p. 136].</p>
      <p><b>(c) Market maker.</b> Standing ready to quote both sides continuously. The relationship is simply <b>Ask price = Bid price + spread</b>; the spread is the market maker's compensation for supplying immediacy and for carrying inventory [@stowell2024, pp. 129–130].</p>
      <p><b>(d) Trustee.</b> Executing transactions decided by the client on the client's behalf, and managing investments under a trust or mandate [@tranTuanVinh2023].</p>
      <p><b>(e) Advisor.</b> Advising on securities issuance and equitization, and participating in M&amp;A advisory, strategic advice, and the formation of alliances and joint ventures [@tranTuanVinh2023].</p>
      <p><b>(f) Servicer.</b> Providing <b>prime brokerage</b> services to hedge funds — financing, clearing, custody, securities lending and reporting [@stowell2024, pp. 23, 138–141].</p>
      <div class="note"><b>Agency versus principal.</b> Broker, trustee, advisor and servicer are <i>agency</i> functions earning fees with little balance-sheet risk. Dealer and market maker are <i>principal</i> functions earning spreads while carrying inventory and market risk. Almost every regulatory and conflict-of-interest issue in this course arises where the two meet.</div>
    `},
    { id: "1.4", title: "Organisation of Operations", html: `
      <h2>1.4 Organisation of Investment Banking Operations</h2>
      <h3>1.4.1 The seven core operations</h3>
      <table>
        <tr><th>Operation [@tranTuanVinh2023; @stowell2024, pp. 8–10, 24]</th><th>Content</th><th>Course</th></tr>
        <tr><td><b>Capital-raising support</b></td><td>Helping capital-deficit entities raise funds by supporting the issuance of shares and bonds, and accessing specialised capital sources.</td><td>Chapter 2</td></tr>
        <tr><td><b>M&amp;A support</b></td><td>Advising on mergers, acquisitions, joint ventures, strategic alliances, divestment, and defence strategies against hostile takeovers.</td><td>Chapter 3</td></tr>
        <tr><td><b>Asset management</b></td><td>Advising on and managing client assets for a fee — institutional investors and, increasingly, wealthy individuals.</td><td>Chapter 4</td></tr>
        <tr><td><b>Wholesale banking</b></td><td>A high-risk proprietary activity investing in alternatives: private equity, real estate, leveraged lending, syndicated loans and project finance.</td><td>—</td></tr>
        <tr><td><b>Corporate advisory</b></td><td>Advising enterprises on solutions to their difficulties: conversion of business form, restructuring, listing advisory.</td><td>Chapter 5</td></tr>
        <tr><td><b>Research</b></td><td>Macro and micro analysis of the economy, industries, enterprises, securities and investment tactics to support client decisions.</td><td>—</td></tr>
        <tr><td><b>Brokerage</b></td><td>Executing securities transactions for clients in the secondary market.</td><td>Chapter 6</td></tr>
      </table>
      <h3>1.4.2 Entities performing investment-banking operations</h3>
      <ul>
        <li><b>Investment banks</b> (in the pure sense).</li>
        <li><b>Universal banks</b> — partially universal or fully universal [@stowell2024, p. 7; @caselli2021, p. 18].</li>
        <li><b>Securities companies</b>, <b>fund management companies</b> and <b>securities investment companies</b>.</li>
      </ul>
      <p>In <b>Vietnam</b>, these operations are carried out mainly by securities companies (e.g. SSI, HSC) and fund management companies (e.g. VFM), licensed by the State Securities Commission, and by commercial banks — largely through their securities and fund-management subsidiaries [@luatCK2019, Arts. 70, 72, 74(3)].</p>
      <h3>1.4.3 Organisational model</h3>
      <p>Investment banks are organised in three blocks:</p>
      <ul>
        <li><b>Front office (business block)</b> — investment banking division, sales &amp; trading, research, asset management. Generates revenue and faces clients.</li>
        <li><b>Middle office (risk management block)</b> — risk management, compliance, treasury, product control.</li>
        <li><b>Back office (operations block)</b> — operations, settlement, custody, technology, finance and HR [@giri2017, p. 170].</li>
      </ul>
      <p>Business models range from the <b>independent investment bank</b> (full-service or specialised/boutique) to the <b>universal bank</b> combining commercial banking, investment banking and insurance [@stowell2024, p. 7].</p>
      <h3>1.4.4 Interaction between divisions</h3>
      <p><b>Conflicts of interest</b> arise systematically:</p>
      <ul>
        <li>Between <b>research</b> and the <b>investment-banking division</b>: pressure to publish reports favourable to a banking client relationship [@stowell2024, p. 47; @giri2017, p. 217].</li>
        <li>Between <b>research</b> and the <b>proprietary investment division</b>: pressure to publish reports that favour the trading book.</li>
        <li>Between the <b>investment-banking division</b> and <b>investment management</b>: for example when raising capital to establish a new fund.</li>
      </ul>
      <p><b>Information sharing</b> distinguishes public information from confidential (inside) information:</p>
      <ul>
        <li><b>Private side</b> — staff of the investment-banking division, who access material non-public client information.</li>
        <li><b>Public side</b> — staff of the research and investment (trading) divisions.</li>
      </ul>
      <div class="note"><b>The hard wall (vách ngăn cứng).</b> Separation is enforced by a physical and logical information barrier between the private and public sides, supervised by a control/compliance room, with wall-crossing procedures and restricted lists: staff brought "over the wall" may not trade the securities on which they hold material non-public information [@stowell2024, pp. 154, 533]. It is a legal requirement, not an internal courtesy — in the US every registered broker-dealer must establish, maintain and enforce written policies and procedures to prevent the misuse of material non-public information [@usc78o].</div>
    `},
    { id: "1.5", title: "Operating Environment", html: `
      <h2>1.5 The Operating Environment</h2>
      <p>An investment bank never executes a mandate alone. It sits at the centre of an ecosystem of specialist firms, all of it framed by domestic and international law and by prevailing economic and social conditions [@stowell2024, pp. 60, 175].</p>
      <table>
        <tr><th>Counterparty</th><th>Contribution to a transaction</th></tr>
        <tr><td>Law firms</td><td>Transaction documentation, regulatory clearance, legal due diligence</td></tr>
        <tr><td>Audit firms</td><td>Audited financial statements, financial due diligence, comfort letters</td></tr>
        <tr><td>Tax advisors</td><td>Deal structuring for tax efficiency</td></tr>
        <tr><td>Credit rating agencies</td><td>Ratings that determine the coupon on debt issues</td></tr>
        <tr><td>Commercial banks</td><td>Bridge financing, syndicated lending, settlement accounts</td></tr>
        <tr><td>Custody &amp; settlement providers</td><td>Depository, clearing and settlement of securities</td></tr>
        <tr><td>Research and investigation firms</td><td>Market data, commercial due diligence, background checks</td></tr>
      </table>
      <h3>Regulatory and reputational constraints</h3>
      <ul>
        <li><b>Capital and liquidity:</b> Basel III ratios, Dodd-Frank equity and liquidity requirements, annual stress testing [@stowell2024, pp. 49–50, 248].</li>
        <li><b>Conduct:</b> the Volcker Rule limiting proprietary trading; analyst-independence rules; disclosure of conflicts [@stowell2024, pp. 47, 49].</li>
        <li><b>Reputation:</b> mandates are won on credibility. Reputational damage destroys the franchise faster than a trading loss [@stowell2024, p. 534].</li>
        <li><b>Cyclicality:</b> fee income tracks issuance and deal volumes, while the cost base — principally people — is largely fixed [@stowell2024, p. 76].</li>
      </ul>
      <div class="formula">ROE = (Net income / Revenue) × (Revenue / Assets) × (Assets / Equity) [@berkDeMarzo2017, p. 78]
        <span class="fnote">The third term is leverage. US investment banks ran assets of 20–30 times equity in 2005–2007; post-crisis capital rules compressed permissible leverage, and in 2017–2020 the nine largest global investment banks averaged ROEs between −1.9% (Deutsche Bank) and 11.8% (J.P. Morgan) [@stowell2024, pp. 8, 247].</span></div>
      <p>In <b>Vietnam</b>, securities companies operate under the Law on Securities 2019 (amended in 2024) and are licensed by the State Securities Commission. A company may be licensed for one, several or all of four operations — brokerage, proprietary trading, underwriting and securities investment advisory — but the licences are stacked: proprietary trading requires a brokerage licence and underwriting requires a proprietary-trading licence. Charter capital must be contributed in Vietnamese dong, and the Government sets a separate minimum for each operation [@luatCK2019, Arts. 70, 72, 74(1)].</p>
    `}
  ]
},

/* ================= CHAPTER 2 ================= */
{
  id: 2,
  title: "Capital Raising Support Operations",
  hours: 5,
  clo: "CLO1",
  blurb: "Advisory and underwriting for share and bond issuance on the primary market, and corporate investment advisory through private equity and venture capital.",
  refs: "[2] {@tranTuanVinh2023, Chapters 4–5}; [1] {@rp2020, Chapter 8} (IPOs); [4] {@stowell2024, Chapters 3–4}",
  objectives: [
    "Identify the entities entitled to issue shares and the conditions they must satisfy under the Law on Securities 2019.",
    "Classify issuance methods by offering round, by target investor, by pricing method and by distribution method.",
    "Explain the underwriting commitment types and who bears placement risk in each.",
    "Walk the share-issuance and bond-issuance processes and compute the economics of an offering.",
    "Explain private equity and venture capital — concept, motives, process and investment forms."
  ],
  sections: [
    { id: "2.1", title: "Advisory & Underwriting", html: `
      <h2>2.1 Advisory and Underwriting — Overview</h2>
      <p><b>Underwriting (bảo lãnh phát hành)</b> is the commitment by an investment bank to purchase — or to place — a new issue of securities and resell it to investors. The bank supplies two things the issuer lacks: a <b>balance sheet</b> willing to absorb placement risk, and a <b>distribution network</b> of investors [@stowell2024, p. 55; @giri2017, p. 348].</p>
      <table>
        <tr><th>Commitment type [@caselli2021, p. 245; @giri2017, p. 353]</th><th>The bank's undertaking</th><th>Who bears placement risk</th></tr>
        <tr><td><b>Firm commitment</b></td><td>Buys the entire issue at an agreed price and resells it</td><td>The bank</td></tr>
        <tr><td><b>Best efforts</b></td><td>Agrees only to use its best efforts to sell</td><td>The issuer</td></tr>
        <tr><td><b>Bought deal</b></td><td>Buys the whole block immediately, often overnight, without bookbuilding</td><td>The bank — highest risk</td></tr>
        <tr><td><b>Standby</b></td><td>Agrees to buy whatever is left unsubscribed in a rights issue</td><td>The bank — residual</td></tr>
      </table>
      <div class="note"><b>How much risk does "firm commitment" really carry?</b> In a book-built offering the bank signs the underwriting agreement only after it has collected investors' indications and set the price, so its exposure is concentrated in the days between pricing and settlement (settlement risk) and in its legal liability for the offering documents. Genuine price risk is taken in block trades and bought deals, where the bank buys at an agreed price before it has placed the securities [@stowell2024, pp. 55–56, 58].</div>
      <div class="keyterm"><b>The syndicate.</b> Large issues are underwritten by a group. The <b>lead manager / bookrunner</b> runs the process and takes the largest share of fees; co-managers add distribution. Risk and fees are allocated in the underwriting agreement [@stowell2024, p. 57; @rp2020, pp. 395, 397].</div>
      <div class="formula">Gross spread = (Offer price − Proceeds to issuer) / Offer price
        <span class="fnote">The US industry standard for IPOs is about 7%, lower for larger deals [@rp2020, p. 397]; in Europe large IPOs pay about 1.5–2.5% and mid-sized IPOs (€50–600m) about 3.5% on average. Bond fees are far lower: about 0.3–0.8% for investment-grade issuers and 0.8–1% for high yield [@caselli2021, pp. 135, 251]. The spread is conventionally split 20% management fee, 20% underwriting fee and 60% selling concession [@rp2020, p. 398; @caselli2021, p. 251].</span></div>
      <h3>The advisory component</h3>
      <p>Before any underwriting commitment, the bank advises on: whether to raise equity or debt; the size and timing of the offering; the corporate and capital structure required; regulatory eligibility; the equity story; and the valuation range [@stowell2024, pp. 57–60]. This advisory work is what converts a company into an <i>issuable</i> proposition.</p>
    `},
    { id: "2.2", title: "Share Issuance", html: `
      <h2>2.2 Advisory and Underwriting for Share Issuance</h2>
      <h3>2.2.1 Who may issue</h3>
      <ul>
        <li><b>Joint-stock companies (công ty cổ phần).</b></li>
        <li><b>Other enterprise forms undergoing equitization</b> in accordance with the law — limited liability companies and state-owned enterprises [@tranTuanVinh2023].</li>
      </ul>
      <h3>2.2.2 Methods of issuance</h3>
      <p><b>(a) By offering round</b> [@tranTuanVinh2023]</p>
      <ul>
        <li><b>Initial issuance (IPO)</b> — the first offering of shares to the public.</li>
        <li><b>Secondary / seasoned issuance</b> — subsequent offerings by an already-public company.</li>
      </ul>
      <p><b>(b) By target investor</b></p>
      <ul>
        <li><b>Public offering</b> — offered widely to the public; requires registration with the State Securities Commission and full disclosure [@luatCK2019, Art. 15].</li>
        <li><b>Private placement</b> — offered to a limited number of professional or strategic investors; lighter disclosure but transfer restrictions apply.</li>
        <li><b>Rights issue</b> — offered to existing shareholders in proportion to their holdings.</li>
        <li><b>Employee stock ownership plan (ESOP)</b> — offered to employees.</li>
      </ul>
      <p><b>(c) By pricing method</b></p>
      <ul>
        <li><b>Fixed price</b> — the price is set and published before subscription opens; simple, but risks mispricing.</li>
        <li><b>Bookbuilding</b> — underwriters collect price-and-quantity indications from institutional investors to build a demand curve, then set the final price [@caselli2021, pp. 260, 265; @stowell2024, p. 72].</li>
        <li><b>Auction</b> — investors bid; shares are allocated from the highest bid downwards.</li>
      </ul>
      <p><b>(d) By distribution method</b> — direct issuance by the issuer, or issuance through an underwriting intermediary.</p>
      <h3>2.2.3 Conditions for issuance</h3>
      <p>Under the <b>Law on Securities 2019</b>, a public offering of shares by a joint-stock company requires broadly [@luatCK2019, Art. 15(1)]:</p>
      <ul>
        <li>Paid-up <b>charter capital of at least VND 30 billion</b> at the time of registration, by book value;</li>
        <li><b>Profitable operations in the two preceding years</b> and no accumulated losses up to the year of registration;</li>
        <li>An approved offering and share-use plan passed by the General Meeting of Shareholders;</li>
        <li>At least <b>15% of voting shares sold to at least 100 non-major shareholders</b> (10% if charter capital is VND 1,000 billion or more);</li>
        <li>A joint commitment by the pre-IPO major shareholders to hold at least 20% of charter capital for at least one year from the end of the offering;</li>
        <li>The issuer is not being prosecuted for, or convicted (and not yet cleared) of, an offence against the order of economic management;</li>
        <li>A <b>securities company advising on the registration dossier</b>, except where the issuer is itself a securities company — the law requires an adviser, not an underwriter;</li>
        <li>A commitment to list or register the shares for trading after the offering, and a <b>blocked (escrow) account</b> to receive subscription money.</li>
      </ul>
      <div class="note">The list follows Article 15(1) of the Law on Securities. Law No. 56/2024/QH15 (effective 1 January 2025) left Article 15(1) unchanged but amended Article 15(2)(d) — a follow-on public offering that raises money for a project must sell at least 70% of the shares offered, except an offering to existing shareholders in proportion to their holdings — and Article 15(3)(g) on public bond offerings. Decree No. 245/2025/ND-CP amended the implementing rules. Always check the consolidated text in force before advising a client.</div>
      <h3>2.2.4 The issuance process</h3>
      <ol>
        <li><b>Preparation and mandate</b> — appoint the underwriter and advisors; restructure if required.</li>
        <li><b>Due diligence</b> — legal, financial and business review.</li>
        <li><b>Registration dossier</b> — prospectus and registration statement filed with the SSC.</li>
        <li><b>Valuation and price range.</b></li>
        <li><b>Roadshow and bookbuilding</b> [@rp2020, pp. 415–440].</li>
        <li><b>Pricing, distribution and allocation.</b></li>
        <li><b>Reporting of results, share registration, and listing.</b></li>
        <li><b>Aftermarket stabilisation</b> via the greenshoe (up to 15% of the base deal) [@rp2020, p. 394; @stowell2024, p. 77].</li>
      </ol>
      <div class="formula">Net proceeds to issuer = Shares × Offer price × (1 − gross spread)
        <span class="fnote">With the greenshoe fully exercised, total shares = base shares × 1.15.</span></div>
      <div class="example"><div class="ex-title">Worked example</div>
        A company offers <b>10 million shares at $20.00</b> with a <b>6% gross spread</b> and a fully exercised <b>15% greenshoe</b>.<br>
        Total shares = 10m × 1.15 = <b>11.5m</b> · Gross proceeds = 11.5m × $20 = <b>$230m</b><br>
        Underwriting fee = 6% × $230m = <b>$13.8m</b> · Net to issuer = <b>$216.2m</b><br>
        If the stock closes at $24 on day one, a further 11.5m × $4 = <b>$46m</b> is "left on the table" for allocated investors.</div>
    `},
    { id: "2.3", title: "Bond Issuance", html: `
      <h2>2.3 Advisory and Underwriting for Bond Issuance</h2>
      <p>Debt capital markets bring bonds to fixed-income investors. The process is faster and more standardised than an equity offering, but its analytical core is <b>credit</b> rather than growth.</p>
      <h3>Key steps</h3>
      <ul>
        <li><b>Rating advisory</b> — prepare the issuer for the rating agencies; the rating largely determines the credit spread [@stowell2024, p. 175].</li>
        <li><b>Structuring</b> — maturity, fixed or floating coupon, seniority, security, call/put features, convertibility and covenants.</li>
        <li><b>Pricing</b> — quoted as a <b>spread over a benchmark</b> yield (e.g. government bond + 180bp) [@caselli2021, pp. 143, 165].</li>
        <li><b>Distribution</b> — allocation to institutional fixed-income investors.</li>
      </ul>
      <div class="formula">P<sub>0</sub> = Σ C/(1+y)<sup>t</sup> + F/(1+y)<sup>n</sup>
        <span class="fnote">A bond prices at par when the coupon equals the yield; at a discount when y &gt; coupon; at a premium when y &lt; coupon [@berkDeMarzo2017, pp. 211–212].</span></div>
      <table>
        <tr><th></th><th>Equity (ECM)</th><th>Debt (DCM)</th></tr>
        <tr><td>Gross spread</td><td>High (IPOs: ~7% US standard; 1.5–4.5% in Europe)</td><td>Low (~0.1–1%; up to 2% for difficult high-yield deals) [@rp2020, p. 397; @caselli2021, pp. 135, 251]</td></tr>
        <tr><td>Volume</td><td>Lower, episodic</td><td>Much higher, repeat issuance</td></tr>
        <tr><td>Key risk analysed</td><td>Growth and valuation</td><td>Default and recovery</td></tr>
        <tr><td>Investor base</td><td>Equity funds</td><td>Insurers, pension and bond funds</td></tr>
        <tr><td>Effect on the issuer</td><td>Dilutes ownership</td><td>Fixed obligation; tax-deductible interest</td></tr>
      </table>
      <div class="keyterm"><b>Covenants.</b> Contractual protections for bondholders — leverage and coverage maintenance tests, limits on additional indebtedness, asset sales, dividends and investments. Weak ("cov-lite") terms shift risk to lenders and typically appear in hot credit markets [@caselli2021, pp. 194–195; @rp2020, p. 195].</div>
      <p>In Vietnam, corporate bond issuance is divided into <b>public offerings</b> — registered with the SSC and requiring, among other things, VND 30 billion of paid-up capital, a profit in the preceding year with no accumulated losses and no debts overdue by more than a year, an advising securities company, an escrow account, a listing commitment and — as amended from 1 January 2025 — compliance with Government rules on a bondholders' representative, the debt ratio, the issue size relative to equity and credit rating [@luatCK2019, Art. 15(3)] — and <b>private placements</b>, which for unlisted joint-stock companies must be made without public advertising to fewer than 100 investors (excluding professional securities investors), and only to professional securities investors (or to strategic investors for convertible bonds and bonds with warrants) [@luatDN2020, Art. 128]. Since 1 July 2025 a private bond issuer must also keep its liabilities, including the planned issue, within five times its equity, with exceptions set out in the law [@luatDN2020, Art. 128(3)].</p>
    `},
    { id: "2.4", title: "Private Equity & Venture Capital", html: `
      <h2>2.4 Corporate Investment Advisory: Private Equity and Venture Capital</h2>
      <h3>2.4.1 Private equity — concept</h3>
      <p><b>Private equity (đầu tư vốn tư nhân)</b> is investment in the equity of companies that are not publicly traded, or the taking private of listed companies, typically with a defined holding period and an exit plan. Funds are structured as partnerships [@stowell2024, p. 445]: <b>limited partners (LPs)</b> commit the capital; the <b>general partner (GP)</b> sources, executes and manages the investments over a fund life of about ten years [@demaria2020, p. 107; @stowell2024, p. 275].</p>
      <h3>2.4.2 Motives</h3>
      <ul>
        <li><b>For the investor (fund):</b> returns above public markets through control, operational improvement, leverage and multiple expansion; diversification into an asset class uncorrelated with daily market pricing.</li>
        <li><b>For the target company:</b> access to capital without public disclosure; a professional shareholder bringing governance, networks and operating expertise; a solution to succession or to shareholder liquidity needs [@rp2020, pp. 169–188].</li>
      </ul>
      <h3>2.4.3 The investment process</h3>
      <ol>
        <li><b>Fundraising</b> — commitments from LPs.</li>
        <li><b>Deal sourcing and screening</b> against the fund's mandate.</li>
        <li><b>Due diligence</b> — commercial, financial, legal, tax and operational.</li>
        <li><b>Valuation and structuring</b> — price, instrument, governance and protective rights.</li>
        <li><b>Negotiation and completion</b> — shareholders' agreement, board seats, veto rights.</li>
        <li><b>Value creation</b> — operational improvement, add-on acquisitions, deleveraging.</li>
        <li><b>Exit</b> — trade sale, secondary sale to another fund, IPO, or recapitalisation.</li>
      </ol>
      <h3>2.4.4 Forms of private equity investment</h3>
      <ul>
        <li><b>Leveraged buyout (LBO)</b> — acquiring control using substantial debt serviced by the target's cash flows.</li>
        <li><b>Growth capital</b> — minority investment to fund expansion.</li>
        <li><b>Mezzanine</b> — subordinated debt with equity features.</li>
        <li><b>Distressed / turnaround</b> — investing in troubled companies [@stowell2024, p. 358; @demaria2020, p. 14].</li>
        <li><b>Secondary</b> — buying existing LP interests.</li>
      </ul>
      <h3>2.4.5 Venture capital</h3>
      <p><b>Venture capital (đầu tư vốn mạo hiểm)</b> finances early-stage, high-growth companies in staged rounds — seed, Series A, B, C — in exchange for <b>minority</b> equity and protective rights, with no leverage. The economics rely on a small number of very large winners offsetting a high failure rate [@berkDeMarzo2017, pp. 866–868].</p>
      <div class="formula">Post-money = Pre-money + Investment &nbsp;·&nbsp; Investor stake = Investment ÷ Post-money
        <span class="fnote">GP economics in a typical private equity fund: a management fee of about 2% of committed capital during the investment period (then on unreturned invested capital) plus carried interest — conventionally 20% — paid only after LPs have received a preferred return, often 8% a year, with a clawback if the GP is overpaid [@stowell2024, pp. 275, 448–451]. (The high-water mark is a hedge-fund device, not a PE one.)</span></div>
      <div class="example"><div class="ex-title">Worked example</div>
        A fund invests <b>$5m</b> at a <b>$20m post-money</b> valuation.<br>
        Pre-money = $20m − $5m = <b>$15m</b> · Investor stake = 5/20 = <b>25%</b><br>
        Founders fall from 100% to 75% — but of a larger, funded company.</div>
      <table>
        <tr><th></th><th>Venture capital</th><th>Buyout private equity</th></tr>
        <tr><td>Stage</td><td>Early, high growth</td><td>Mature, cash-generative</td></tr>
        <tr><td>Stake</td><td>Minority</td><td>Control</td></tr>
        <tr><td>Leverage</td><td>None</td><td>High</td></tr>
        <tr><td>Return driver</td><td>A few outsized winners</td><td>Deleveraging, growth, multiple expansion</td></tr>
        <tr><td>Failure rate</td><td>High and expected</td><td>Low but costly</td></tr>
      </table>
    `}
  ]
},

/* ================= CHAPTER 3 ================= */
{
  id: 3,
  title: "Mergers & Acquisitions (M&A) Support Operations",
  hours: 10,
  clo: "CLO1",
  blurb: "M&A concepts, buyer and seller motives, forms of combination, the transaction process and its parties, financing, post-merger integration, and anti-takeover tactics.",
  refs: "[2] {@tranTuanVinh2023, Chapters 6–7}; [1] {@rp2020, Chapters 2, 6, 7}; [3] Castillo and McAniff (2007)",
  objectives: [
    "Define M&A and distinguish mergers, acquisitions, consolidations, and share versus asset deals.",
    "Explain the motives of the seller and of the buyer, and classify horizontal, vertical and conglomerate combinations.",
    "Describe the transaction process and the role of each participating party.",
    "Analyse the financing alternatives — cash, shares, bonds and mixed consideration — and perform an accretion/dilution analysis.",
    "Explain post-M&A integration, anti-takeover defences, counter-attack tactics and alternatives to M&A."
  ],
  sections: [
    { id: "3.1", title: "Overview of M&A", html: `
      <h2>3.1 Overview of Mergers and Acquisitions</h2>
      <h3>3.1.1 Concept</h3>
      <ul>
        <li><b>Merger (sáp nhập)</b> — one or more companies transfer all assets, rights, obligations and interests to another existing company and cease to exist [@gaughan2018, p. 13; @luatDN2020, Art. 201].</li>
        <li><b>Consolidation (hợp nhất)</b> — two or more companies combine to form a <i>new</i> company; all the original companies cease to exist [@gaughan2018, p. 13; @luatDN2020, Art. 200].</li>
        <li><b>Acquisition (mua lại)</b> — one company purchases all or part of another's shares or assets sufficient to control it; the target may continue to exist as a subsidiary.</li>
      </ul>
      <table>
        <tr><th>[@gaughan2018, pp. 24–25]</th><th>Share purchase</th><th>Asset purchase</th></tr>
        <tr><td>What is acquired</td><td>The company's shares</td><td>Selected assets and liabilities</td></tr>
        <tr><td>Liabilities</td><td>Transfer with the company, including undisclosed ones</td><td>Only those expressly assumed</td></tr>
        <tr><td>Seller preference</td><td>Usually preferred — a clean exit</td><td>Less preferred — potential double taxation</td></tr>
        <tr><td>Buyer preference</td><td>Simpler, but inherits risk</td><td>Preferred — cherry-picking and asset step-up</td></tr>
      </table>
      <h3>3.1.2 Motives of the seller and the buyer</h3>
      <table>
        <tr><th>Buyer motives [@gaughan2018, pp. 137–139, 494]</th><th>Seller motives</th></tr>
        <tr><td>Cost and revenue synergies; economies of scale and scope</td><td>Liquidity — monetising an illiquid holding</td></tr>
        <tr><td>Rapid access to markets, technology, licences and talent</td><td>Succession with no heir or capable manager</td></tr>
        <tr><td>Vertical control of the supply chain</td><td>Capturing a premium at a favourable point in the cycle</td></tr>
        <tr><td>Tax and financial engineering; use of surplus cash</td><td>Inability to fund the next stage of growth</td></tr>
        <tr><td>Eliminating a competitor; increasing market power</td><td>Exit from a non-core or loss-making business</td></tr>
        <tr><td>Managerial motives — growth, empire building (agency)</td><td>Financial distress; pressure from creditors</td></tr>
      </table>
      <h3>3.1.3 Forms of M&amp;A</h3>
      <ul>
        <li><b>Horizontal</b> — same industry and production stage: scale, market share, cost synergies; attracts competition-law scrutiny.</li>
        <li><b>Vertical</b> — supplier or customer: supply security, margin capture, distribution control.</li>
        <li><b>Conglomerate</b> — unrelated businesses: diversification, often penalised by a conglomerate discount [@gaughan2018, pp. 14, 150].</li>
      </ul>
      <p>Deals are further classified as <b>friendly</b> (negotiated with the target's board) or <b>hostile</b> (a tender offer directly to shareholders, or a proxy contest to replace directors), and as <b>domestic</b> or <b>cross-border</b>.</p>
    `},
    { id: "3.2", title: "The M&A Process & Parties", html: `
      <h2>3.2 The Transaction Process and the Parties</h2>
      <h3>3.2.1 The sell-side (auction) process</h3>
      <ol>
        <li><b>Preparation</b> — financial and legal readiness, the operating model, and agreed valuation expectations.</li>
        <li><b>Marketing materials</b> — a one-page anonymous <b>teaser</b>, then the <b>Confidential Information Memorandum (CIM)</b> released after an NDA is signed.</li>
        <li><b>First round</b> — non-binding indications of interest (IOIs) from a contacted buyer universe [@rp2020, pp. 280–282].</li>
        <li><b>Second round</b> — management presentations, site visits and the <b>data room</b> for due diligence [@rp2020, pp. 172, 297].</li>
        <li><b>Final bids</b> — binding offers with a mark-up of the purchase agreement.</li>
        <li><b>Negotiation and signing</b> of the definitive agreement.</li>
        <li><b>Closing</b> after regulatory and shareholder approvals [@rp2020, p. 297].</li>
      </ol>
      <div class="keyterm"><b>Broad versus targeted auction.</b> A broad auction maximises price discovery and competitive tension but risks leaks and disruption to employees and customers. A targeted process approaches a handful of logical buyers, protecting confidentiality at the cost of some tension. Choosing between them is core sell-side advice [@rp2020, pp. 275–278].</div>
      <h3>3.2.2 The buy-side process</h3>
      <ol>
        <li><b>Strategy and screening</b> — define acquisition criteria and build a target list.</li>
        <li><b>Approach and valuation</b> — standalone value plus the value of synergies.</li>
        <li><b>Due diligence</b> — commercial, financial, tax, legal, environmental, HR and IT.</li>
        <li><b>Structuring and financing.</b></li>
        <li><b>Negotiation</b> — price, representations and warranties, indemnities, earn-outs, break fees, conditions precedent [@rp2020, p. 297].</li>
        <li><b>Integration planning</b> — begun before signing, not after closing.</li>
      </ol>
      <h3>3.2.3 The parties</h3>
      <table>
        <tr><th>Party</th><th>Role</th></tr>
        <tr><td><b>Buy side</b></td><td>Strategic acquirer or financial sponsor; defines criteria, funds and executes the acquisition.</td></tr>
        <tr><td><b>Sell side</b></td><td>Owners and management of the target; decide to sell and set expectations on price and terms.</td></tr>
        <tr><td><b>Investment bank</b></td><td>Advises either side: valuation, process design, marketing, negotiation, financing and fairness opinions.</td></tr>
        <tr><td><b>Strategic consultants</b></td><td>Commercial due diligence, market and synergy assessment, integration planning.</td></tr>
        <tr><td><b>Legal advisors</b></td><td>Structure, documentation, regulatory clearance, competition filings, legal due diligence.</td></tr>
        <tr><td><b>Auditors / tax advisors</b></td><td>Financial due diligence, quality of earnings, tax structuring.</td></tr>
        <tr><td><b>Regulators</b></td><td>Competition authority, sector regulators, and the SSC for public companies.</td></tr>
      </table>
      <div class="note"><b>Fairness opinion.</b> A written opinion from an investment bank that the consideration is fair, from a financial point of view, to the shareholders. It does not say the deal is a good idea — it protects the board's discharge of its fiduciary duty [@rp2020, pp. 22, 301; @stowell2024, p. 89].</div>
    `},
    { id: "3.3", title: "Valuation & Accretion/Dilution", html: `
      <h2>3.3 Valuation, Synergies and Accretion / Dilution</h2>
      <p>Three methods dominate M&amp;A practice and are usually presented together as a "football field" of value ranges:</p>
      <ul>
        <li><b>Comparable companies</b> — trading multiples of listed peers; contains no control premium.</li>
        <li><b>Precedent transactions</b> — multiples paid in past deals; includes a control premium [@rp2020, pp. 75, 328].</li>
        <li><b>Discounted cash flow</b> — intrinsic value of projected free cash flows discounted at WACC.</li>
      </ul>
      <div class="formula">Offer price = Unaffected price × (1 + premium) &nbsp;·&nbsp; Purchase equity value = Offer price × Target shares
        <span class="fnote">The "unaffected" price precedes any leak or rumour of the transaction [@rp2020, pp. 96, 110]. Premiums of 30–40% are typical for listed targets, but averages swing widely by period and sector: US deals averaged 43% in 1980–2005 [@berkDeMarzo2017, p. 997], and the 2016 Mergerstat average, excluding negative premiums, was 55% [@gaughan2018, p. 584].</span></div>
      <h3>Do the synergies justify the premium?</h3>
      <p>The acquirer pays the premium on day one; synergies arrive over years and are uncertain. The test is simply whether the <b>present value of synergies exceeds the premium paid</b> [@berkDeMarzo2017, p. 1005]. Cost synergies — overlapping functions, procurement, facility closures — are far more reliable than revenue synergies, which markets discount heavily.</p>
      <h3>Accretion / dilution analysis</h3>
      <div class="formula">Pro forma EPS = (NI<sub>acquirer</sub> + NI<sub>target</sub> + after-tax synergies − after-tax new interest) ÷ (Shares<sub>acquirer</sub> + new shares issued)
        <span class="fnote">Accretion/(dilution) % = Pro forma EPS ÷ Standalone EPS − 1. Positive means accretive.</span></div>
      <div class="example"><div class="ex-title">Worked example</div>
        Acquirer: EPS $4.00 · 100m shares · price $60 → NI = $400m.<br>
        Target: NI $150m · 50m shares · unaffected price $40 · premium 25% → offer $50, equity purchase $2,500m.<br>
        Financing: 60% stock ($1,500m ÷ $60 = 25m new shares), 40% cash ($1,000m at 4.5% after tax = $45m interest).<br>
        After-tax synergies $20m.<br>
        Pro forma NI = 400 + 150 + 20 − 45 = <b>$525m</b>; shares = 125m → EPS <b>$4.20</b> → <b>+5.0% accretive</b>.</div>
      <div class="note"><b>The P/E rule of thumb.</b> In an all-stock deal the transaction is accretive when the acquirer's P/E <i>exceeds</i> the P/E it pays for the target — it issues expensive currency to buy cheaper earnings [@rp2020, p. 343]. Debt-funded cash is accretive when the after-tax cost of debt is below the target's earnings yield (E/P). In the example above the acquirer trades at 15.0× and pays 16.7×, so the stock leg alone is dilutive; cheap debt and synergies rescue the deal.</div>
    `},
    { id: "3.4", title: "Financing M&A", html: `
      <h2>3.4 Capital Support for M&amp;A Transactions</h2>
      <p>The <b>consideration</b> (what the seller receives) and the <b>financing</b> (where the buyer finds it) are separate decisions with different consequences.</p>
      <h3>3.4.1 Raising capital in cash</h3>
      <p>Cash gives certain value, avoids dilution and is usually accretive when debt is cheap — but it consumes balance-sheet capacity, raises leverage and is immediately taxable to the seller [@gaughan2018, pp. 588–590]. Sources include existing cash, bridge loans, term loans and new bond issues.</p>
      <h3>3.4.2 Raising capital with shares</h3>
      <p>Share consideration avoids a cash outlay and shares post-deal risk with the seller, and may be tax-deferred. It dilutes existing shareholders and can signal that management considers its own shares overvalued — which the market often reads negatively on announcement [@travlos1987; @myersMajluf1984].</p>
      <h3>3.4.3 Raising capital with bonds</h3>
      <p>Acquisition bonds — including <b>high-yield</b> issues for leveraged transactions — provide long-dated funding without dilution. The cost is fixed obligations, covenants and rating pressure. A <b>bridge loan</b> typically guarantees funds at signing and is refinanced into bonds after closing [@rp2020, pp. 173–174, 195–198].</p>
      <h3>3.4.4 Mixed consideration</h3>
      <p>Most large transactions blend cash and shares, sometimes with <b>earn-outs</b> (deferred consideration contingent on future performance) or <b>vendor loans</b>. Mixed structures bridge valuation gaps and share risk, at the cost of complexity and potential disputes over measurement [@stowell2024, p. 97; @rp2020, pp. 81, 91].</p>
      <table>
        <tr><th>Instrument [@rp2020, pp. 173–174, 195–198]</th><th>Characteristics</th></tr>
        <tr><td>Bridge loan</td><td>Short-term certainty of funds at signing; priced to escalate, encouraging refinancing</td></tr>
        <tr><td>Term loan A / B</td><td>Senior secured bank and institutional debt; amortising or bullet</td></tr>
        <tr><td>High-yield bonds</td><td>Sub-investment grade, longer maturity, covenant-light, callable</td></tr>
        <tr><td>Mezzanine / PIK</td><td>Subordinated, higher cost, sometimes with warrants</td></tr>
        <tr><td>Equity</td><td>New issuance, rights issue, or sponsor equity in an LBO</td></tr>
      </table>
      <div class="keyterm"><b>Leveraged buyout (LBO).</b> A financial sponsor acquires a company using mostly debt serviced by the target's own cash flows. Returns come from debt paydown, EBITDA growth and exit multiple expansion. Suitable targets have stable cash flows, low capital expenditure, tangible or saleable assets and scope for operational improvement [@rp2020, pp. 169, 177–184].</div>
      <div class="note"><b>Staple financing.</b> A financing package pre-arranged by the sell-side bank and offered to all bidders. It accelerates the auction and earns the bank a financing fee — but creates a conflict, since the bank advises the seller while lending to the buyer [@stowell2024, pp. 123–125].</div>
    `},
    { id: "3.5", title: "Post-M&A & Defences", html: `
      <h2>3.5 Post-M&amp;A, Anti-takeover Tactics and Alternatives</h2>
      <h3>3.5.1 Post-M&amp;A integration</h3>
      <p>Value is realised — or destroyed — after closing. Integration covers organisational structure and reporting lines, systems and data migration, brand and customer communication, harmonisation of policies and remuneration, and above all <b>people</b>: retaining key staff and managing cultural difference [@gaughan2018, p. 138].</p>
      <p>The consistent empirical findings:</p>
      <ul>
        <li><b>Target shareholders</b> capture most of the announced value, because they receive the premium.</li>
        <li><b>Acquirer shareholders</b> on average earn approximately zero or slightly negative abnormal returns [@berkDeMarzo2017, pp. 997–998; @moeller2005].</li>
        <li>The dominant causes of failure are <b>overpayment</b>, <b>overestimated synergies</b> (especially revenue synergies) and <b>integration failure</b>.</li>
      </ul>
      <div class="note"><b>Integration checklist.</b> Day-1 readiness · retention packages for key staff · clear governance and decision rights · systems and data migration plan · customer and supplier communication · a synergy tracker with named owners, values and deadlines.</div>
      <h3>3.5.2 Defences against hostile takeover</h3>
      <table>
        <tr><th>Preventive defence [@gaughan2018, pp. 26, 188, 202, 494]</th><th>Mechanism</th></tr>
        <tr><td><b>Poison pill</b> (shareholder rights plan)</td><td>If a bidder crosses a threshold (e.g. 15%), other holders may buy discounted shares, massively diluting the bidder</td></tr>
        <tr><td><b>Staggered board</b></td><td>Only part of the board is elected each year, so control requires two annual meetings</td></tr>
        <tr><td><b>Golden parachute</b></td><td>Large executive severance raises the cost of a change of control</td></tr>
        <tr><td><b>Supermajority provisions</b></td><td>A high approval threshold in the charter for change-of-control transactions</td></tr>
        <tr><td><b>Cross-shareholding</b></td><td>Friendly parties hold blocking stakes</td></tr>
      </table>
      <table>
        <tr><th>Counter-attack (reactive) [@gaughan2018, pp. 61, 211–212, 216–217, 222; @berkDeMarzo2017, p. 1013]</th><th>Mechanism</th></tr>
        <tr><td><b>White knight</b></td><td>Invite a friendlier acquirer to outbid the hostile one</td></tr>
        <tr><td><b>Crown jewel / lockup</b></td><td>Sell, or grant an option over, the asset the bidder most wants; courts have struck down lockups that cut off an auction</td></tr>
        <tr><td><b>Pac-Man</b></td><td>Turn around and launch a counter-bid for the raider</td></tr>
        <tr><td><b>Greenmail</b></td><td>Repurchase the raider's stake at a premium</td></tr>
        <tr><td><b>Litigation / regulatory</b></td><td>Challenge the bid to gain time and raise its cost</td></tr>
        <tr><td><b>Recapitalisation</b></td><td>Leverage up and pay a special dividend to make the target less attractive</td></tr>
      </table>
      <p>Defences are double-edged: they can strengthen the board's bargaining power and extract a higher price, or entrench weak management and deny shareholders a premium. The evidence reflects both sides: targets protected by poison pills have received higher premiums when they were sold, but an effective staggered board nearly doubles the likelihood that a target stays independent — so shareholders may <b>forgo the premium altogether</b> [@gaughan2018, pp. 198, 202].</p>
      <h3>3.5.3 Alternatives to M&amp;A</h3>
      <ul>
        <li><b>Joint ventures</b> — a jointly owned vehicle sharing risk and capital.</li>
        <li><b>Strategic alliances</b> — contractual cooperation without equity.</li>
        <li><b>Licensing and distribution agreements</b>; <b>minority stakes</b> with options to increase.</li>
        <li><b>Organic (greenfield) expansion</b> — slower but avoids the premium and integration risk.</li>
      </ul>
    `}
  ]
},

/* ================= CHAPTER 4 ================= */
{
  id: 4,
  title: "Asset Management Operations",
  hours: 5,
  clo: "CLO2",
  blurb: "General introduction to asset management and its classification, investment fund management, portfolio management, and wealth management for individuals.",
  refs: "[2] {@tranTuanVinh2023, Chapter 9}; [4] {@stowell2024, Chapters 11–13}",
  objectives: [
    "Define asset management, classify its types and explain its advantages.",
    "Describe fund management operations: raising capital for the fund, investing it, and the supporting arrangements.",
    "Explain the portfolio management process and the portfolio construction process.",
    "Describe the forms and process of wealth management for individual clients.",
    "Compute investor net return under a management fee plus carried interest with a hurdle rate."
  ],
  sections: [
    { id: "4.1", title: "Introduction to Asset Management", html: `
      <h2>4.1 General Introduction to Asset Management</h2>
      <h3>4.1.1 Concept</h3>
      <p><b>Asset management (quản lý tài sản)</b> is the professional management of client capital across asset classes in exchange for fees, on a discretionary or advisory basis. It is distinct from the bank's own <b>proprietary investing</b>: here the bank invests <b>other people's money</b>, bearing business and reputational risk rather than market risk [@stowell2024, pp. 10, 24, 157].</p>
      <h3>4.1.2 Types of asset management</h3>
      <table>
        <tr><th>Segment [@stowell2024, p. 157]</th><th>Client</th><th>Vehicle</th></tr>
        <tr><td><b>Institutional mandates</b></td><td>Pension funds, insurers, sovereign funds</td><td>Segregated ("managed") account</td></tr>
        <tr><td><b>Investment funds</b></td><td>The retail public</td><td>Open-end and closed-end funds, ETFs</td></tr>
        <tr><td><b>Portfolio management</b></td><td>Institutions and wealthy individuals</td><td>Discretionary mandate</td></tr>
        <tr><td><b>Wealth management</b></td><td>High-net-worth individuals and families</td><td>Advisory or discretionary account</td></tr>
        <tr><td><b>Alternatives</b></td><td>Professional investors</td><td>Hedge funds, PE funds</td></tr>
      </table>
      <p>Fees depend mainly on the <b>asset class</b>. Typical annual management fees: index funds and ETFs <b>0.05–0.3%</b> of AUM; fixed income <b>0.3–1.2%</b>; equities <b>0.5–1.7%</b>; alternatives <b>1–2%</b> plus a performance fee of 10–20% of gains (in LBO funds often only above an 8% hurdle) [@stowell2024, pp. 157–158].</p>
      <p>Funds are also classified by <b>structure</b>: an <b>open-end fund</b> continuously issues and redeems units at NAV; a <b>closed-end fund</b> has a fixed number of units traded on the secondary market with no redemption obligation; an <b>ETF</b> is an open-end structure whose units trade intraday on an exchange [@luatCK2019, Arts. 99, 111–112].</p>
      <h3>4.1.3 Advantages of asset management</h3>
      <ul>
        <li><b>Diversification</b> at a small minimum investment.</li>
        <li><b>Professional selection and monitoring</b> by a full-time research capability.</li>
        <li><b>Economies of scale</b> in trading, custody and administration.</li>
        <li><b>Access</b> to instruments, markets and issues individuals cannot easily reach.</li>
        <li><b>Administration</b> — record-keeping, valuation, tax and regulatory reporting.</li>
        <li><b>Liquidity</b> — daily dealing in open-end vehicles.</li>
      </ul>
      <div class="keyterm"><b>Why banks value this division.</b> Unlike advisory and trading, management fees are <b>recurring and predictable</b>. They stabilise group earnings across the cycle, which is why universal banks prize asset management despite its lower headline margins [@stowell2024, p. 10].</div>
    `},
    { id: "4.2", title: "Investment Fund Management", html: `
      <h2>4.2 Investment Fund Management Operations</h2>
      <h3>4.2.1 Raising capital for the fund</h3>
      <p>Fund formation involves: designing the fund (objective, strategy, benchmark, fee schedule, term); obtaining regulatory approval and appointing the <b>supervisory bank / custodian</b>; preparing the prospectus and charter; and distributing units through the fund manager's own channels, securities companies, banks or financial advisors. In Vietnam a public fund's initial offering must total at least VND 50 billion, follow an approved issuance and investment plan, be monitored by a supervisory bank, and — except for open-end funds — be listed after the offering [@luatCK2019, Art. 15(5)].</p>
      <h3>4.2.2 Investing the capital</h3>
      <ol>
        <li><b>Mandate and benchmark</b> — investment objective, permitted asset classes and limits.</li>
        <li><b>Asset allocation</b> — long-run strategic weights, then tactical tilts.</li>
        <li><b>Security selection</b> — research-driven choice within each class.</li>
        <li><b>Execution</b> — trading with best execution and cost control.</li>
        <li><b>Risk control</b> — diversification and regulatory limits (single-issuer caps, prohibitions on lending or borrowing beyond limits).</li>
        <li><b>Monitoring and rebalancing</b> [@tranTuanVinh2023].</li>
      </ol>
      <h3>4.2.3 Supporting arrangements</h3>
      <div class="formula">NAV per unit = (Total assets − Total liabilities) ÷ Units outstanding
        <span class="fnote">NAV is normally struck daily. Open-end funds transact at NAV; ETF market prices are kept near NAV by authorised-participant arbitrage.</span></div>
      <ul>
        <li><b>Custody and supervision</b> — assets held by an independent supervisory bank that also checks compliance with the charter.</li>
        <li><b>Valuation and NAV calculation</b>, subscriptions and redemptions.</li>
        <li><b>Reporting</b> to investors and the regulator; audited annual accounts.</li>
        <li><b>Fee collection</b> — management fee, and performance fee where permitted.</li>
      </ul>
      <div class="formula">Management fee = fee% × AUM &nbsp;·&nbsp; Performance fee = carry% × max(Gross return − Hurdle, 0)<br>
        Investor net return = Gross return − management fee% − performance fee%
        <span class="fnote">A high-water mark (a hedge-fund device) means performance fees are paid only when the fund's value exceeds its previous highest NAV, so carry is not charged twice on the same gains after a loss year [@stowell2024, pp. 157, 276].</span></div>
      <div class="example"><div class="ex-title">Worked example</div>
        AUM $500m · management fee 2% · carry 20% over an 8% hurdle · gross return 15%.<br>
        Excess over hurdle = 7% · Performance fee = 20% × 7% = <b>1.4%</b><br>
        Investor net return = 15% − 2% − 1.4% = <b>11.6%</b> · Manager revenue = 3.4% × $500m = <b>$17m</b></div>
      <div class="note"><b>Active versus passive.</b> Index funds and ETFs deliver the benchmark at a fraction of the cost. Because the average actively managed equity fund delivers a negative alpha to its investors after fees (about −0.34% a year in US studies) and past winners are hard to identify in advance [@berkDeMarzo2017, pp. 490–492], capital has shifted to passive vehicles, compressing industry fees — the defining economic trend in asset management.</div>
    `},
    { id: "4.3", title: "Portfolio Management", html: `
      <h2>4.3 Portfolio Management Operations</h2>
      <h3>4.3.1 The portfolio management process</h3>
      <p>A <b>discretionary mandate</b> authorises the manager to trade within agreed objectives and constraints without pre-approving each transaction; an <b>advisory mandate</b> only recommends, leaving each decision to the client.</p>
      <ol>
        <li><b>Planning</b> — identify objectives and constraints: required return, risk tolerance, time horizon, liquidity needs, tax position, legal and unique circumstances; record them in the <b>investment policy statement</b>.</li>
        <li><b>Execution</b> — strategic asset allocation, tactical tilts, security selection and trading.</li>
        <li><b>Feedback</b> — monitoring, rebalancing, and performance measurement and attribution.</li>
      </ol>
      <h3>4.3.2 The portfolio construction process</h3>
      <ol>
        <li>Determine the investor's risk–return objective.</li>
        <li>Analyse capital-market expectations for each asset class.</li>
        <li>Set the <b>strategic asset allocation</b> — empirically the dominant driver of return variability [@brinson1986].</li>
        <li>Select securities within each class.</li>
        <li>Implement, controlling transaction costs and taxes.</li>
        <li>Monitor, rebalance to target weights, and evaluate against the benchmark.</li>
      </ol>
      <div class="formula">Sharpe = (R<sub>P</sub> − R<sub>f</sub>) ÷ σ<sub>P</sub> [@berkDeMarzo2017, p. 411] &nbsp;·&nbsp; Information ratio = (R<sub>P</sub> − R<sub>B</sub>) ÷ Tracking error
        <span class="fnote">Sharpe judges total risk and suits an investor's whole portfolio; the information ratio isolates active skill against a benchmark. Tracking error is the standard deviation of active returns.</span></div>
      <div class="keyterm"><b>Benchmark quality.</b> A good benchmark is unambiguous, investable, measurable, appropriate to the manager's style, and specified in advance. A poorly chosen benchmark can make a weak manager look skilful — a recurring examination point.</div>
    `},
    { id: "4.4", title: "Wealth Management", html: `
      <h2>4.4 Wealth Management Operations</h2>
      <h3>4.4.1 Concept and forms</h3>
      <p><b>Wealth management (quản lý gia sản)</b> is comprehensive, goals-based advice for individuals and families. It is broader than portfolio management: it integrates investments with tax, retirement, estate, succession and philanthropic planning, and often with credit and insurance solutions [@stowell2024, p. 24; @caselli2021, p. 18].</p>
      <table>
        <tr><th>Segment</th><th>Service model</th></tr>
        <tr><td><b>Mass affluent</b></td><td>Standardised model portfolios, increasingly digital / robo-advisory</td></tr>
        <tr><td><b>High-net-worth (HNW)</b></td><td>Tailored advice with a dedicated relationship manager</td></tr>
        <tr><td><b>Ultra-high-net-worth (UHNW)</b></td><td>Bespoke solutions, structuring, cross-border and philanthropic planning</td></tr>
        <tr><td><b>Family office</b></td><td>A full institutional service for a single family (single-family or multi-family office)</td></tr>
      </table>
      <h3>4.4.2 The wealth management process</h3>
      <ol>
        <li><b>Client profiling</b> — assets, liabilities, income, goals, time horizon, and both risk <i>tolerance</i> (willingness) and risk <i>capacity</i> (ability).</li>
        <li><b>Investment policy statement</b> — objectives, constraints, benchmark and review schedule.</li>
        <li><b>Asset allocation and product selection.</b></li>
        <li><b>Implementation</b> — execution, custody and, where relevant, structuring.</li>
        <li><b>Ongoing review</b> — performance against goals, rebalancing, and changes triggered by life events.</li>
      </ol>
      <div class="note"><b>Suitability and fiduciary duty.</b> Advice must fit the client's circumstances, and conflicts — in-house products, retrocessions, commissions — must be disclosed. Mis-selling is the sector's principal regulatory exposure. In Vietnam the law now responds directly: banks and their staff may not tie non-compulsory insurance to any banking product or service in any form [@luatTCTD2024, Art. 15], and privately placed corporate bonds may be sold only to professional securities investors (or strategic investors for convertible bonds and bonds with warrants) [@luatDN2020, Art. 128].</div>
    `}
  ]
},

/* ================= CHAPTER 5 ================= */
{
  id: 5,
  title: "Corporate Advisory Operations",
  hours: 10,
  clo: "CLO2",
  blurb: "Listing advisory, advisory on conversion of business form and equitization, and advisory on the restructuring of capital and of corporate governance.",
  refs: "[2] {@tranTuanVinh2023, Chapter 10}; [1] {@rp2020, Chapters 1–2}",
  objectives: [
    "Explain the concept, conditions, advantages and disadvantages, forms and process of securities listing.",
    "Describe advisory on conversion of business form and the equitization of state-owned enterprises.",
    "Explain the concept, rationale, purpose and process of capital restructuring advisory.",
    "Explain corporate governance, its importance, and the process of governance restructuring advisory.",
    "Value a company using comparable-company multiples and bridge enterprise value to value per share."
  ],
  sections: [
    { id: "5.1", title: "Listing Advisory", html: `
      <h2>5.1 Securities Listing Advisory</h2>
      <h3>5.1.1 Concept</h3>
      <p><b>Listing (niêm yết)</b> is the admission of a company's securities to trading on a stock exchange after the exchange has verified that the issuer satisfies its qualitative and quantitative standards. <b>Initial listing</b> is the first admission; <b>additional listing</b> registers newly issued shares; <b>re-listing</b> follows a delisting; <b>delisting</b> removes the securities from trading.</p>
      <h3>5.1.2 Listing conditions</h3>
      <p>Exchanges impose conditions on capital, profitability, ownership dispersion, governance and disclosure. Since 2021 Vietnam has had <b>one set of share-listing conditions</b> for the Vietnam Exchange system [@nd155_2020, Art. 109]; which exchange and board a stock is placed on is then decided under the exchange's listing regulation, using charter capital, market capitalisation, operating history, financial condition, shareholder structure and governance.</p>
      <table>
        <tr><th>Criterion</th><th>Condition (Decree 155/2020, Art. 109(1))</th></tr>
        <tr><td>Size</td><td>Joint-stock company with paid-up charter capital ≥ VND 30 billion and market capitalisation ≥ VND 30 billion</td></tr>
        <tr><td>Approval and history</td><td>Listing approved by the General Meeting of Shareholders; at least 2 years of trading on UPCoM, unless the company has made a public offering or is an equitised SOE</td></tr>
        <tr><td>Profitability</td><td>ROE ≥ 5% in the preceding year; profitable in each of the two preceding years; no debts overdue by more than one year; no accumulated losses</td></tr>
        <tr><td>Ownership dispersion</td><td>≥ 15% of voting shares held by ≥ 100 non-major shareholders (10% if charter capital ≥ VND 1,000 billion); not required of equitised SOEs</td></tr>
        <tr><td>Insider lock-up</td><td>Board members, supervisors, senior managers, the chief accountant and related major shareholders keep 100% of their shares for 6 months from the first trading day and 50% for the following 6 months</td></tr>
        <tr><td>Other</td><td>No sanction for prohibited securities conduct in the past 2 years; a securities company advising on the listing dossier (unless the issuer is one)</td></tr>
      </table>
      <div class="note">The table follows Decree 155/2020 as issued; Decree 245/2025/ND-CP amended many of its articles. Always confirm the consolidated rule in force before advising a client.</div>
      <h3>5.1.3 Advantages and disadvantages of listing</h3>
      <table>
        <tr><th>Advantages [@stowell2024, pp. 68–69; @berkDeMarzo2017, p. 872]</th><th>Disadvantages</th></tr>
        <tr><td>Access to capital on better terms; a market price for the shares</td><td>Cost of listing and continuing compliance</td></tr>
        <tr><td>Liquidity for existing shareholders</td><td>Extensive, continuous disclosure obligations</td></tr>
        <tr><td>Reputation, brand visibility and credibility with partners</td><td>Pressure for short-term results; exposure to market sentiment</td></tr>
        <tr><td>Shares usable as acquisition currency and for employee incentives</td><td>Risk of dilution and of loss of control; takeover exposure</td></tr>
      </table>
      <h3>5.1.4 The listing advisory process</h3>
      <ol>
        <li><b>Assessment</b> of eligibility against the exchange's criteria; gap analysis.</li>
        <li><b>Restructuring and preparation</b> — governance, accounting, related-party transactions, legal structure.</li>
        <li><b>Valuation</b> and choice of exchange and timing.</li>
        <li><b>Dossier preparation</b> — listing application, prospectus, audited financial statements.</li>
        <li><b>Submission and approval</b> by the exchange and, where relevant, the SSC.</li>
        <li><b>First trading day</b>, followed by ongoing disclosure and investor relations [@rp2020, pp. 415–440].</li>
      </ol>
      <h3>5.1.5 Comparable-company valuation</h3>
      <div class="formula">Implied EV = Peer EV/EBITDA × Subject EBITDA<br>
        Equity value = EV − Net debt − Minority interest − Preferred<br>
        Value per share = Equity value ÷ Diluted shares
        <span class="fnote">Use the <b>median</b> peer multiple: multiples are bounded below by zero and unbounded above, so distributions are right-skewed and the mean is distorted by outliers.</span></div>
      <div class="example"><div class="ex-title">Worked example</div>
        EBITDA $120m · peer median 9.0× · net debt $200m · 50m diluted shares.<br>
        Implied EV = <b>$1,080m</b> · Equity = 1,080 − 200 = <b>$880m</b> · Per share = <b>$17.60</b><br>
        Cross-check by P/E: EPS $3.00 × 16× = <b>$48.00</b>. A gap this large signals different leverage or non-recurring items — investigate before presenting.</div>
      <div class="keyterm"><b>Why EV/EBITDA rather than P/E?</b> EV/EBITDA is <b>capital-structure neutral</b>: it values the whole business before financing, so companies with different leverage remain comparable. P/E is measured after interest, so leverage distorts it [@rp2020, pp. 13, 35].</div>
    `},
    { id: "5.2", title: "Business Form Conversion", html: `
      <h2>5.2 Advisory on Conversion of Business Form</h2>
      <h3>5.2.1 Purpose of conversion</h3>
      <p>Only a <b>joint-stock company (công ty cổ phần)</b> may issue transferable shares to the public and list them [@luatCK2019, Art. 32; @nd155_2020, Art. 109]. Conversion is therefore a precondition for public fundraising, and it also:</p>
      <ul>
        <li>enables outside and strategic investment, and employee share incentives;</li>
        <li>creates formal governance organs — a General Meeting of Shareholders, a Board of Directors and either a Supervisory Board or an audit committee under the board (in which case at least 20% of directors must be independent) [@luatDN2020, Art. 137] — raising investability;</li>
        <li>separates ownership from management and improves transparency;</li>
        <li>is the legal route for the <b>equitization</b> of state-owned enterprises.</li>
      </ul>
      <h3>5.2.2 Forms of conversion</h3>
      <ul>
        <li>Limited liability company → joint-stock company (and the reverse) [@luatDN2020, Art. 202];</li>
        <li>State-owned enterprise → joint-stock company (equitization);</li>
        <li>Private enterprise or partnership → limited liability or joint-stock company;</li>
        <li>Division, separation, merger or consolidation of enterprises.</li>
      </ul>
      <h3>5.2.3 Equitization of state-owned enterprises</h3>
      <p><b>Equitization (cổ phần hóa)</b> converts an SOE into a joint-stock company and sells part of the state's holding to other investors, in order to mobilise capital, improve governance and efficiency, and develop the securities market.</p>
      <ol>
        <li>Establish the <b>steering committee</b> and the assisting team.</li>
        <li><b>Inventory and classify assets</b>; settle financial matters and outstanding obligations [@nd126_2017, Art. 13].</li>
        <li><b>Enterprise valuation</b> — the most contested step, especially the treatment of <b>land-use rights</b>, brand value and goodwill [@nd126_2017, Arts. 29–31].</li>
        <li>Prepare and obtain approval of the <b>equitization plan</b> — charter capital, share structure, allocation to the state, strategic investors, employees and the public.</li>
        <li><b>Sell shares</b> — the initial sale may use a public auction, underwriting, direct negotiation or book-building; sale to strategic investors; and preferential sale to employees and the trade union. The plan chooses one of three forms: keep the state's capital and issue new shares, sell part of the state's capital, or sell all of it (each may be combined with a new issue) [@nd126_2017, Arts. 5, 7].</li>
        <li><b>Register the joint-stock company</b>, hold the first General Meeting of Shareholders, and hand over.</li>
        <li>Register for trading / listing [@nd126_2017, Art. 11].</li>
      </ol>
      <div class="note"><b>The valuation problem.</b> Undervaluing land-use rights or brand transfers public wealth to private buyers; overvaluing them makes the offering fail. This is the single most scrutinised judgement in Vietnamese equitization, and the advisor's methodology must be defensible.</div>
      <h3>5.2.4 The conversion process</h3>
      <ol>
        <li>Assess the current legal and ownership structure and the objective of conversion.</li>
        <li>Select the target form and design the charter capital and share structure.</li>
        <li>Value the enterprise and settle financial matters.</li>
        <li>Draft the charter and obtain the necessary shareholder or owner resolutions.</li>
        <li>Register the conversion with the business registration authority.</li>
        <li>Complete post-conversion matters — accounting, tax, labour and governance arrangements.</li>
      </ol>
    `},
    { id: "5.3", title: "Corporate Restructuring", html: `
      <h2>5.3 Corporate Restructuring Advisory</h2>
      <p><b>Operational restructuring</b> changes what the company owns and how it is organised, to sharpen focus and release value.</p>
      <table>
        <tr><th>Transaction [@gaughan2018, p. 390; @stowell2024, p. 98]</th><th>Mechanism</th><th>Rationale</th></tr>
        <tr><td><b>Divestiture</b></td><td>Sell a division for cash</td><td>Exit non-core assets; raise funds</td></tr>
        <tr><td><b>Spin-off</b></td><td>Distribute a subsidiary's shares to existing shareholders</td><td>Separate businesses valued differently; usually tax-efficient [@gaughan2018, p. 616]; raises no cash</td></tr>
        <tr><td><b>Equity carve-out</b></td><td>IPO a minority stake in a subsidiary</td><td>Raise cash and establish a market price while retaining control</td></tr>
        <tr><td><b>Split-off</b></td><td>Shareholders exchange parent shares for subsidiary shares</td><td>Separate distinct ownership groups</td></tr>
        <tr><td><b>Liquidation</b></td><td>Sell assets piecemeal and wind up</td><td>When break-up value exceeds going-concern value</td></tr>
      </table>
      <div class="keyterm"><b>The conglomerate discount.</b> Diversified groups often trade below the sum of their parts because investors cannot see through cross-subsidies and can diversify more cheaply themselves. Spin-offs and carve-outs are the standard remedy [@gaughan2018, pp. 150, 397]; the analytical basis is a <b>sum-of-the-parts (SOTP)</b> valuation [@rp2020, p. 131].</div>
      <h3>Distressed restructuring</h3>
      <p>Where a company cannot service its debt, the advisor works on rescheduling maturities, debt-for-equity swaps, new money injection, asset disposals, or a formal insolvency procedure. The negotiation runs between creditor classes by seniority, and every class measures any proposal against what it would recover in a liquidation [@gaughan2018, pp. 456, 471].</p>
    `},
    { id: "5.4", title: "Capital Restructuring", html: `
      <h2>5.4 Capital Restructuring Advisory</h2>
      <h3>5.4.1 Concept</h3>
      <p><b>Capital restructuring (tái cấu trúc nguồn vốn)</b> changes the composition of the right-hand side of the balance sheet — the mix of debt and equity and the maturity and currency profile of liabilities — without necessarily changing the operating business.</p>
      <h3>5.4.2 Theoretical basis</h3>
      <div class="formula">WACC = (E/V)·r<sub>e</sub> + (D/V)·r<sub>d</sub>·(1 − t)
        <span class="fnote">Debt is cheaper than equity because it is senior, and its interest is tax-deductible. Substituting debt for equity therefore lowers WACC and raises firm value — until financial-distress costs and rising r<sub>e</sub> and r<sub>d</sub> outweigh the tax shield.</span></div>
      <p>This is the <b>trade-off theory</b>: an optimal capital structure exists where the marginal tax benefit of debt equals the marginal expected cost of financial distress [@berkDeMarzo2017, p. 594]. Complementary perspectives are the <b>pecking-order theory</b> (firms prefer internal funds, then debt, then equity, because of asymmetric information) [@berkDeMarzo2017, pp. 613–615; @myersMajluf1984] and the <b>agency</b> view (debt disciplines managers by committing free cash flow to debt service) [@berkDeMarzo2017, pp. 605–606].</p>
      <h3>5.4.3 Purposes of capital restructuring</h3>
      <ul>
        <li>Reduce the cost of capital and increase enterprise value.</li>
        <li>Match the maturity and currency of liabilities to the assets they fund.</li>
        <li>Restore financial flexibility and debt capacity.</li>
        <li>Resolve covenant breaches or refinancing risk.</li>
        <li>Return surplus capital to shareholders, or fund growth.</li>
      </ul>
      <h3>5.4.4 Situations that trigger restructuring</h3>
      <ul>
        <li>Leverage too high relative to cash-flow volatility; interest cover deteriorating.</li>
        <li>Over-reliance on short-term debt to fund long-term assets — a maturity mismatch.</li>
        <li>Currency mismatch between borrowings and revenues.</li>
        <li>An idle, over-capitalised balance sheet depressing return on equity.</li>
        <li>Impending refinancing walls, rating downgrades or covenant tests.</li>
      </ul>
      <h3>5.4.5 Typical transactions and the advisory process</h3>
      <p>Transactions include <b>recapitalisation</b>, <b>dividend recapitalisation</b>, <b>refinancing</b>, <b>share buybacks</b>, <b>rights issues</b> and <b>debt-for-equity swaps</b>.</p>
      <ol>
        <li>Analyse the current structure, cash flows and covenant headroom.</li>
        <li>Model scenarios and determine the target structure.</li>
        <li>Select instruments and prepare the plan.</li>
        <li>Negotiate with lenders, rating agencies and shareholders; obtain approvals.</li>
        <li>Execute and monitor against covenants.</li>
      </ol>
      <div class="formula">Leverage = Net debt ÷ EBITDA &nbsp;·&nbsp; Interest coverage = EBIT ÷ Interest expense
        <span class="fnote">Rules of thumb: net debt/EBITDA above about 3× signals elevated default risk and EBITDA/interest should ideally exceed 4× — though stable businesses such as infrastructure can run 7–8× and stay investment grade [@caselli2021, p. 523]. Leveraged buyouts are typically structured around 5× (5.2× in an illustrative LBO) [@rp2020, p. 254]. Covenants are written directly against these ratios, so any restructuring must leave headroom.</span></div>
    `},
    { id: "5.5", title: "Governance Restructuring", html: `
      <h2>5.5 Corporate Governance Restructuring Advisory</h2>
      <h3>5.5.1 Concept</h3>
      <p><b>Corporate governance</b> is the system of rules, practices and processes by which a company is directed and controlled — essentially, how the interests of managers, shareholders (including minorities), creditors and other stakeholders are balanced and enforced [@oecd2023; @vnCGcode2019].</p>
      <h3>5.5.2 Why governance matters</h3>
      <ul>
        <li>It determines how reliably a company's cash flows actually reach outside investors.</li>
        <li>Weak governance is <b>priced</b>: investors apply a discount for the risk of expropriation, raising the cost of capital [@gompers2003].</li>
        <li>It reduces agency costs between owners and managers, and between controlling and minority shareholders.</li>
        <li>It is a precondition for listing, for attracting institutional and foreign investors, and increasingly for ESG-linked capital.</li>
      </ul>
      <h3>5.5.3 Typical improvements</h3>
      <ul>
        <li><b>Board composition</b> — genuinely independent directors; separation of chair and chief executive [@luatDN2020, Art. 137].</li>
        <li><b>Committees</b> — audit, remuneration and nomination committees with real authority.</li>
        <li><b>Internal control and audit</b> — a reputable external auditor and a functioning internal audit reporting to the audit committee.</li>
        <li><b>Disclosure</b> — timely, accurate, bilingual reporting to international standards.</li>
        <li><b>Minority protection</b> — control of related-party transactions, pre-emption rights, cumulative voting [@luatDN2020, Arts. 124, 148, 167].</li>
        <li><b>Incentives</b> — aligning management remuneration with long-term shareholder value.</li>
      </ul>
      <h3>5.5.4 The advisory process</h3>
      <ol>
        <li>Assess the current governance structure against a recognised code (OECD principles, the Vietnam Corporate Governance Code of Best Practices) [@oecd2023; @vnCGcode2019].</li>
        <li>Identify gaps and prioritise them by investor impact.</li>
        <li>Design the target structure — board, committees, charter and internal regulations.</li>
        <li>Implement — amend the charter, appoint directors, establish committees and reporting lines.</li>
        <li>Communicate to investors and monitor.</li>
      </ol>
      <div class="keyterm"><b>The governance discount.</b> Companies with concentrated control, opaque related-party dealings and weak boards trade at lower multiples than comparable peers [@gompers2003]. Closing that gap is measurable value creation — often the cheapest valuation uplift an advisor can deliver, and a standard pre-IPO workstream.</div>
    `}
  ]
},

/* ================= CHAPTER 6 ================= */
{
  id: 6,
  title: "Secondary Market Transaction Support Operations",
  hours: 5,
  clo: "CLO2 · CLO3",
  blurb: "Brokerage and electronic trading, market making, proprietary trading, and financing client transactions through margin lending and securities lending for short selling.",
  refs: "[2] {@tranTuanVinh2023, Chapter 8}; [4] {@stowell2024, Chapters 5–7}",
  objectives: [
    "Explain brokerage — concept, characteristics, process, and trading at the stock exchange.",
    "Read a trading board and describe online trading and order types.",
    "Explain market making and the role of the market maker.",
    "Describe proprietary trading — concept, purpose, requirements and process.",
    "Compute margin mechanics and explain securities lending for short selling, with their benefits and risks."
  ],
  sections: [
    { id: "6.1", title: "Brokerage & Exchange Trading", html: `
      <h2>6.1 Brokerage Operations</h2>
      <h3>6.1.1 Concept and characteristics</h3>
      <p><b>Brokerage (môi giới)</b> is the execution of securities transactions for clients as an <b>agent</b>, in exchange for a commission. The firm never takes the other side of the trade, so it bears no market risk — only operational, settlement and compliance risk [@stowell2024, p. 136].</p>
      <p>Characteristics: it is an agency relationship; the broker acts on the client's instruction; the client bears the investment outcome; and the broker owes duties of best execution, confidentiality and priority of client orders.</p>
      <h3>6.1.2 Functions of the broker</h3>
      <ul>
        <li>Execute client orders accurately and promptly.</li>
        <li>Provide market information, research and investment advice.</li>
        <li>Open and manage trading accounts; support deposits and settlement.</li>
        <li>Connect capital supply and demand, contributing to market liquidity.</li>
      </ul>
      <div class="note"><b>Core obligations:</b> best execution · segregation of client assets from the firm's own · client order priority (no front-running) · suitability and disclosure for retail clients. In Vietnam most of these are statutory: a securities company must keep each client's assets separate from other clients' and from its own, sign written contracts, execute client orders before its own, know its clients and give only suitable advice, and keep complete records [@luatCK2019, Art. 89].</div>
      <h3>6.1.3 The brokerage process</h3>
      <ol>
        <li><b>Open the account</b> — identification, contract, risk profiling.</li>
        <li><b>Deposit funds and securities</b> into the designated accounts.</li>
        <li><b>Receive the order</b> — in person, by telephone or online, and check funds/securities availability.</li>
        <li><b>Enter the order</b> into the exchange's trading system.</li>
        <li><b>Matching</b> by the exchange, and confirmation to the client.</li>
        <li><b>Clearing and settlement</b> through the depository (T+n cycle).</li>
        <li><b>Report and account statement</b> to the client.</li>
      </ol>
      <h3>6.1.4 Trading at the stock exchange</h3>
      <p>Orders are matched by <b>price priority first, then time priority</b> [@tt120_2020, Art. 4(1)]. The main session types are the opening call auction, continuous matching, and the closing call auction.</p>
      <table>
        <tr><th>Order type</th><th>Behaviour</th></tr>
        <tr><td><b>LO</b> — limit order</td><td>Executes at the stated limit price or better; certainty of price, not of execution</td></tr>
        <tr><td><b>MP / MTL</b> — market order</td><td>Executes at the best available price; certainty of execution, not of price</td></tr>
        <tr><td><b>ATO</b> — at the open</td><td>Participates only in the opening call auction; has priority over LO in matching</td></tr>
        <tr><td><b>ATC</b> — at the close</td><td>Participates only in the closing call auction</td></tr>
      </table>
      <h3>6.1.5 Market making</h3>
      <p>A <b>market maker</b> quotes continuous two-sided prices and stands ready to buy at its <b>bid</b> and sell at its <b>ask</b>, trading as principal from its own inventory and supplying <b>immediacy</b> [@stowell2024, pp. 129–130].</p>
      <div class="formula">Spread = Ask − Bid &nbsp;·&nbsp; Mid = (Ask + Bid) ÷ 2 &nbsp;·&nbsp; Spread % = (Ask − Bid) ÷ Mid
        <span class="fnote">Quoting 20.00 / 20.10 earns 0.10 per share on a completed round-trip — provided the price does not move against the inventory in the meantime.</span></div>
      <p><b>Role of the market maker:</b> to provide liquidity and continuity of price, narrow spreads, absorb temporary order imbalances and reduce volatility. <b>Requirements</b> typically include minimum capital, an obligation to quote both sides within a maximum spread for a minimum size, and a minimum presence during the session.</p>
      <p>The dealer is compensated for three risks: <b>inventory risk</b>, <b>adverse selection</b> (informed traders systematically trade against it), and <b>order-processing costs</b> [@huangStoll1997]. Spreads widen when volatility rises, depth is thin, or informed trading is suspected — which is why the spread is a direct, observable measure of market <b>liquidity</b>.</p>
    `},
    { id: "6.2", title: "Electronic Trading", html: `
      <h2>6.2 Electronic Trading Operations</h2>
      <h3>6.2.1 Reading the trading board</h3>
      <p>The electronic board is the primary real-time information display for the market. Its principal columns are:</p>
      <table>
        <tr><th>Column</th><th>Meaning</th></tr>
        <tr><td><b>Mã CK</b> — ticker</td><td>The security's trading code</td></tr>
        <tr><td><b>TC</b> — reference price</td><td>Basis for the day's price band (yellow); usually the previous close</td></tr>
        <tr><td><b>Trần</b> — ceiling</td><td>Highest permitted price for the session (purple)</td></tr>
        <tr><td><b>Sàn</b> — floor</td><td>Lowest permitted price for the session (light blue)</td></tr>
        <tr><td><b>Bên mua / Bên bán</b> — bid / ask</td><td>The best three bid and ask prices with their volumes</td></tr>
        <tr><td><b>Khớp lệnh</b> — last match</td><td>Last matched price, matched volume and change</td></tr>
        <tr><td><b>Tổng KL</b> — total volume</td><td>Total volume traded in the session</td></tr>
        <tr><td><b>ĐTNN</b> — foreign investors</td><td>Foreign investor buying and selling volumes</td></tr>
      </table>
      <p>Colour convention: <span style="color:#0e9f6e"><b>green</b></span> = price up, <span style="color:#dc2626"><b>red</b></span> = price down, <b>yellow</b> = unchanged at reference, <b>purple</b> = ceiling, <b>light blue</b> = floor.</p>
      <h3>6.2.2 Online trading</h3>
      <p>Online platforms let clients enter orders directly, monitor positions, and access research and cash management. The advisory and operational issues are:</p>
      <ul>
        <li><b>Authentication and security</b> — two-factor authentication, transaction verification, session controls.</li>
        <li><b>Order validation</b> — pre-trade checks on purchasing power, price bands and permitted order types.</li>
        <li><b>System capacity and continuity</b> — resilience at peak volume; documented fallback procedures.</li>
        <li><b>Record keeping and dispute handling</b> — audit trail of every instruction.</li>
      </ul>
      <div class="note">Electronic execution and fee competition have compressed brokerage commissions worldwide. Brokers increasingly monetise the relationship through <b>margin lending</b>, securities lending and value-added services rather than commission alone [@stowell2024, pp. 139–141].</div>
    `},
    { id: "6.3", title: "Proprietary Trading", html: `
      <h2>6.3 Proprietary Trading Operations</h2>
      <h3>6.3.1 Concept</h3>
      <p><b>Proprietary trading (tự doanh)</b> is the purchase and sale of securities by the firm for <b>its own account</b> and at its own risk, in order to profit from price movements. It is distinguished from market making by <b>intent</b>: a market maker holds inventory to serve client flow, while a proprietary desk takes positions to express a view [@stowell2024, p. 151].</p>
      <h3>6.3.2 Purposes</h3>
      <ul>
        <li>Generate investment profit from the firm's own capital.</li>
        <li>Support market making and provide liquidity in securities the firm covers.</li>
        <li>Stabilise prices where the firm has an obligation as a market maker or underwriter.</li>
        <li>Hold strategic investments and manage the firm's surplus funds.</li>
      </ul>
      <h3>6.3.3 Requirements</h3>
      <ul>
        <li><b>Separation from brokerage</b> — client orders take absolute priority over the firm's own orders; separate accounts, systems and personnel [@luatCK2019, Art. 89(1), (5)].</li>
        <li><b>Capital adequacy</b> and compliance with position and investment limits set by regulation.</li>
        <li><b>Prohibition on market manipulation</b> and on trading using inside information.</li>
        <li><b>Disclosure</b> of the firm's own transactions where required.</li>
      </ul>
      <h3>6.3.4 The proprietary trading process</h3>
      <ol>
        <li>Build the investment strategy and set limits approved by the board.</li>
        <li>Research and analyse candidate securities.</li>
        <li>Obtain approval within the delegated authority.</li>
        <li>Execute, keeping proprietary orders strictly separate from client orders.</li>
        <li>Monitor positions, mark to market and report P&amp;L.</li>
        <li>Manage risk — position limits, VaR limits, stop-losses — and exit.</li>
      </ol>
      <div class="keyterm"><b>Value at Risk (VaR).</b> The loss that will not be exceeded with a given confidence over a given horizon (for example, 1-day 99% VaR of $10m). Useful for routine limit-setting, but silent about the severity of losses in the tail — the central lesson of 2008 [@stowell2024, p. 152].</div>
      <div class="note"><b>The Volcker Rule</b> (Dodd-Frank) bars US banking entities from proprietary trading and limits their investment in hedge and private-equity funds to 3% of any fund and 3% of Tier 1 capital in aggregate, while permitting market making, underwriting and hedging [@stowell2024, pp. 49, 151]. The practical difficulty — and the compliance burden — is evidencing that a position is client facilitation rather than a proprietary bet.</div>
    `},
    { id: "6.4", title: "Margin & Securities Lending", html: `
      <h2>6.4 Securities Transaction Lending</h2>
      <h3>6.4.1 Margin lending</h3>
      <p><b>Margin lending (cho vay ký quỹ)</b> is a loan from the securities company to a client to buy securities, secured by the securities in the client's account. The <b>initial margin</b> is the equity the client must contribute; the <b>maintenance margin</b> is the minimum equity ratio that must be preserved thereafter [@stowell2024, pp. 139, 141].</p>
      <p><b>Characteristics:</b> secured by liquid listed securities; restricted to marginable securities — in Vietnam the exchange publishes the list against SSC criteria and each firm chooses its own list from it; the investor must keep the initial and maintenance margin ratios agreed in the margin contract, below which the firm issues a margin call; foreign investors may not trade on margin; positions are marked to market continuously [@tt120_2020, Art. 9].</p>
      <p><b>Role:</b> it increases market liquidity and turnover, lets investors take larger positions, and is a significant revenue source for securities companies — while amplifying systemic risk in a falling market.</p>
      <div class="formula">Buying power = Equity ÷ Initial margin% &nbsp;·&nbsp; Equity = Market value − Loan balance<br>
        Margin call price = Purchase price × (1 − Initial margin) ÷ (1 − Maintenance margin)
        <span class="fnote">Leverage = 1 ÷ initial margin. A 50% initial margin gives 2× leverage.</span></div>
      <p><b>Process:</b> sign the margin agreement → the firm assesses eligibility and sets the limit → the client deposits the initial margin → the firm disburses and buys → daily mark-to-market → if equity falls below the maintenance level, a <b>margin call</b> is issued → if unmet, the firm <b>force-sells</b> to restore the ratio.</p>
      <div class="example"><div class="ex-title">Worked example</div>
        Buy at <b>$50</b> with <b>50% initial</b> and <b>25% maintenance</b> margin.<br>
        Margin call price = 50 × 0.50 ÷ 0.75 = <b>$33.33</b><br>
        At that price the client's equity has fallen to 25% of market value and must be topped up or the position is liquidated.<br>
        Leverage is 2×: a −20% price move produces roughly a <b>−40%</b> return on the client's own equity.</div>
      <table>
        <tr><th>Benefits</th><th>Risks</th></tr>
        <tr><td>Amplifies returns; increases purchasing power</td><td>Amplifies losses symmetrically</td></tr>
        <tr><td>Interest income and higher turnover for the firm</td><td>Margin calls and forced selling at the worst moment</td></tr>
        <tr><td>Improves market liquidity</td><td>Interest cost erodes returns; concentration and systemic risk</td></tr>
      </table>
      <h3>6.4.2 Securities lending for short selling</h3>
      <p><b>Securities lending</b> transfers securities from a lender — typically a fund or custodian holding a long-term position — to a borrower against <b>collateral</b> and a <b>borrow fee</b>. Its principal use is to enable <b>short selling</b> [@stowell2024, pp. 139–140].</p>
      <ol>
        <li>The short seller <b>borrows</b> the shares and posts collateral, paying a borrow fee.</li>
        <li>They <b>sell</b> them in the market at today's price.</li>
        <li>Later they <b>buy back</b> (cover) and <b>return</b> the shares to the lender.</li>
        <li>Profit = sale price − repurchase price − borrow fee − dividends passed through to the lender.</li>
      </ol>
      <div class="note"><b>Asymmetric risk.</b> A long position can lose at most 100%. A short position's loss is theoretically <b>unlimited</b>, because the price can rise without bound. If the lender <b>recalls</b> the shares or the borrow fee spikes, the short may be forced to cover at the worst possible moment — a <b>short squeeze</b> [@stowell2024, p. 283].</div>
      <p><b>Regulatory perspective.</b> Short selling aids price discovery and liquidity and has historically exposed frauds, but it can amplify falls in a crisis, and <b>naked</b> short selling risks settlement failure. Regulators therefore impose locate/borrow requirements, disclosure of large short positions and occasional temporary bans. Cross-country evidence finds that stocks with tighter short-sale constraints have less efficient prices, while relaxing the constraints is not associated with more price instability or extreme negative returns [@saffi2011]. <b>Vietnam's</b> Circular 120/2020/TT-BTC created a legal framework for <i>covered</i> short selling — selling shares borrowed through the VSDC securities lending system, from a separate account — and for intraday trading, each to be implemented under SSC rules [@tt120_2020, Arts. 10–11].</p>
    `}
  ]
}

];
