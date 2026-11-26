/* =====================================================================
   BAF736 Investment Banking — Lecture figures & diagrams
   Inline SVG illustrations keyed by "chapter|section", redrawn from the
   course lecture slides (NVNHDT Chương 1–6) and the course textbook
   (Trần Tuấn Vinh & Hồ Công Hưởng, 2023).
   ===================================================================== */
(function(){
"use strict";

const C = { brand:"#14507d", dark:"#0e3a5c", soft:"#e3eef8", green:"#0e9f6e",
            greenSoft:"#e2f6ee", amber:"#d97706", amberSoft:"#fdf1e0",
            red:"#dc2626", redSoft:"#fdeaea", muted:"#7b8494", line:"#c9d2e0",
            ink:"#1c2333", gold:"#b48a1e" };

/* ---------- small SVG helpers ---------- */
function box(x,y,w,h,fill,stroke,r){
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r==null?8:r}" fill="${fill}" stroke="${stroke||'none'}" stroke-width="1.5"/>`;
}
function txt(x,y,s,opt){
  const o = opt||{};
  return `<text x="${x}" y="${y}" text-anchor="${o.a||'middle'}" fill="${o.c||C.ink}" font-size="${o.s||12}" font-weight="${o.w||500}" font-family="-apple-system,Segoe UI,Arial,sans-serif">${s}</text>`;
}
function arrow(x1,y1,x2,y2,color,dash){
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color||C.brand}" stroke-width="2" ${dash?'stroke-dasharray="5 4"':''} marker-end="url(#ah)"/>`;
}
const DEFS = `<defs><marker id="ah" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto">
  <path d="M0,0 L0,6 L8,3 z" fill="${C.brand}"/></marker>
  <marker id="ahg" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto">
  <path d="M0,0 L0,6 L8,3 z" fill="${C.green}"/></marker></defs>`;

function svg(w,h,body){
  return `<svg class="fig-svg" viewBox="0 0 ${w} ${h}" width="100%" style="max-width:${w}px" role="img">${DEFS}${body}</svg>`;
}

/* multi-line label inside a box */
function lines(x,y,arr,opt){
  const o = opt||{}; const lh = o.lh||15;
  return arr.map((s,i)=>txt(x, y+i*lh, s, o)).join("");
}

/* =====================================================================
   FIGURES
===================================================================== */
const F = {};

/* ---------------- Chapter 1 ---------------- */
F["1|1.1"] = [
{ title:"Figure 1.1 — Business model: investment bank vs. commercial bank",
  cap:"The investment bank connects surplus and deficit units <b>through the capital market</b>: capital passes to the issuer while the <b>investment risk stays with the investor</b>. The commercial bank interposes its own balance sheet — it takes the deposit, makes the loan, and absorbs the <b>credit risk</b> itself. This single difference explains their different revenue, funding and leverage profiles.",
  svg: svg(720,300, [
    txt(180,22,"INVESTMENT BANK MODEL",{w:800,c:C.brand,s:13}),
    box(30,40,120,54,C.soft,C.brand), lines(90,66,["Surplus units","(investors)"],{s:11,c:C.dark}),
    box(240,40,120,54,C.brand,null), lines(300,66,["INVESTMENT","BANK"],{s:11,c:"#fff",w:800}),
    box(450,40,120,54,C.soft,C.brand), lines(510,66,["Deficit units","(issuers)"],{s:11,c:C.dark}),
    arrow(152,60,238,60), txt(195,52,"capital",{s:10,c:C.muted}),
    arrow(362,60,448,60), txt(405,52,"capital",{s:10,c:C.muted}),
    arrow(448,84,362,84,C.green), arrow(238,84,152,84,C.green),
    txt(300,104,"securities",{s:10,c:C.green}),
    box(180,120,360,30,C.redSoft,C.red),
    txt(360,140,"Investment risk stays with the investor",{s:11,c:C.red,w:700}),

    txt(180,182,"COMMERCIAL BANK MODEL",{w:800,c:C.dark,s:13}),
    box(30,200,120,54,"#eef1f6",C.muted), lines(90,226,["Depositors","(surplus)"],{s:11}),
    box(240,200,120,54,C.dark,null), lines(300,226,["COMMERCIAL","BANK"],{s:11,c:"#fff",w:800}),
    box(450,200,120,54,"#eef1f6",C.muted), lines(510,226,["Borrowers","(deficit)"],{s:11}),
    arrow(152,220,238,220), txt(195,212,"deposit",{s:10,c:C.muted}),
    arrow(362,220,448,220), txt(405,212,"loan",{s:10,c:C.muted}),
    box(600,200,100,54,C.redSoft,C.red), lines(650,222,["Credit risk","on the bank"],{s:10,c:C.red,w:700}),
    arrow(362,254,600,254,C.red,true)
  ].join("")) },

{ title:"Figure 1.2 — Six defining characteristics",
  cap:"The six criteria used in the course to separate the two institutions. Note especially <b>funding</b>: an investment bank may not take public deposits, so its largest source is <b>secured borrowing</b> (repo, sell &amp; buy-back, securities lending, margin agreements), and its second is unsecured borrowing (bank loans, bonds, commercial paper).",
  svg: svg(720,300, [
    ...[["Business model","Capital market intermediary","Balance-sheet intermediary"],
        ["Income","Fees + spreads + trading P&L","Net interest margin"],
        ["Funding","Secured &amp; unsecured borrowing<tspan> (no public deposits)</tspan>","Public deposits"],
        ["ALM orientation","Use of funds drives funding","Funding drives use of funds"],
        ["Leverage","High (liquid, pledgeable assets)","Low (Basel capital ratios)"],
        ["Main market","Capital market","Money market"]
       ].map((r,i)=>{
      const y = 56 + i*38;
      return box(20,y-20,200,32,i%2?"#f8fafc":"#fff",C.line,6) +
             box(230,y-20,240,32,C.soft,C.brand,6) +
             box(480,y-20,220,32,"#eef1f6",C.muted,6) +
             txt(30,y,r[0],{a:"start",s:11,w:700}) +
             txt(240,y,r[1],{a:"start",s:10.5,c:C.dark}) +
             txt(490,y,r[2],{a:"start",s:10.5});
    }),
    txt(30,32,"Criterion",{a:"start",s:11,w:800,c:C.muted}),
    txt(240,32,"Investment bank",{a:"start",s:11,w:800,c:C.brand}),
    txt(490,32,"Commercial bank",{a:"start",s:11,w:800,c:C.muted})
  ].join("")) }
];

F["1|1.2"] = [
{ title:"Figure 1.3 — US regulatory timeline shaping the industry",
  cap:"Each statute redrew the boundary between commercial and investment banking. <b>Glass-Steagall (1933)</b> forced firms to choose — J.P. Morgan &amp; Co. kept commercial banking while its people left to found Morgan Stanley. <b>Gramm-Leach-Bliley (1999)</b> reversed it, enabling Citigroup and the Chase–J.P. Morgan merger. <b>Dodd-Frank (2010)</b> added capital, liquidity and stress-testing requirements after 2008.",
  svg: svg(720,250, [
    `<line x1="40" y1="120" x2="690" y2="120" stroke="${C.line}" stroke-width="3"/>`,
    ...[["1927","McFadden Act","Banks limited to<tspan>their own state</tspan>",C.muted,60],
        ["1933","Glass-Steagall","Commercial and<tspan>investment banking</tspan><tspan>separated</tspan>",C.red,215],
        ["1999","Gramm-Leach-Bliley","Repeal: universal<tspan>banking returns</tspan>",C.green,395],
        ["2010","Dodd-Frank","Capital, liquidity,<tspan>Volcker Rule,</tspan><tspan>stress tests</tspan>",C.brand,560]
       ].map(([yr,name,desc,col,x])=>{
      const parts = desc.split("<tspan>").map(s=>s.replace("</tspan>",""));
      return `<circle cx="${x+55}" cy="120" r="8" fill="${col}"/>` +
        txt(x+55,100,yr,{s:13,w:800,c:col}) +
        box(x,140,110,66,"#fff",col,7) +
        txt(x+55,158,name,{s:10.5,w:800,c:col}) +
        lines(x+55,174,parts,{s:9.5,c:C.muted,lh:12});
    }),
    txt(360,40,"Separation → repeal → re-regulation",{s:12,w:700,c:C.dark}),
    txt(360,62,"The pendulum of investment-bank regulation",{s:10.5,c:C.muted})
  ].join("")) },

{ title:"Figure 1.4 — What the 2008 crisis did to the major houses",
  cap:"The five independent Wall Street investment banks of 2007 did not survive the crisis in that form: two failed or were rescued, one was absorbed, and the two survivors converted into <b>bank holding companies</b> — accepting Federal Reserve supervision in exchange for access to its liquidity. This ended the standalone bulge-bracket model.",
  svg: svg(720,280, [
    txt(180,26,"BEFORE 2008 — independent",{s:12,w:800,c:C.brand}),
    txt(540,26,"AFTER 2008",{s:12,w:800,c:C.dark}),
    ...[["Bear Stearns","Acquired by JPMorgan (Mar 2008)",C.red],
        ["Lehman Brothers","Bankrupt (Sep 2008)",C.red],
        ["Merrill Lynch","Acquired by Bank of America",C.amber],
        ["Goldman Sachs","→ Bank holding company",C.green],
        ["Morgan Stanley","→ Bank holding company",C.green]
       ].map(([n,f,col],i)=>{
      const y = 50 + i*44;
      return box(30,y,240,34,C.soft,C.brand,7) + txt(150,y+22,n,{s:11.5,w:700,c:C.dark}) +
             arrow(276,y+17,344,y+17,col) +
             box(350,y,340,34,col===C.green?C.greenSoft:(col===C.red?C.redSoft:C.amberSoft),col,7) +
             txt(370,y+22,f,{a:"start",s:11,c:col,w:600});
    })
  ].join("")) }
];

F["1|1.3"] = [
{ title:"Figure 1.5 — The six functions of an investment bank",
  cap:"From the lecture slides: <b>broker</b> (agent, earns commission), <b>dealer</b> and <b>market maker</b> (principal, earns the spread), <b>trustee</b> (executes and manages on the client's behalf), <b>advisor</b> (issuance, equitization, M&amp;A, strategy) and <b>servicer</b> (prime brokerage for hedge funds).",
  svg: svg(720,260, [
    ...[["Broker","Agent — matches buyers<tspan>and sellers, earns commission</tspan>",C.brand,20,40],
        ["Dealer","Principal — trades from<tspan>its own account</tspan>",C.brand,250,40],
        ["Market maker","Quotes two-sided prices,<tspan>earns the bid-ask spread</tspan>",C.brand,480,40],
        ["Trustee","Executes and manages<tspan>investments for clients</tspan>",C.green,20,150],
        ["Advisor","Issuance, equitization,<tspan>M&amp;A, strategy, JVs</tspan>",C.green,250,150],
        ["Servicer","Prime brokerage services<tspan>for hedge funds</tspan>",C.green,480,150]
       ].map(([n,d,col,x,y])=>{
      const parts = d.split("<tspan>").map(s=>s.replace("</tspan>",""));
      return box(x,y,220,86,col===C.brand?C.soft:C.greenSoft,col,9) +
             txt(x+110,y+26,n,{s:13,w:800,c:col===C.brand?C.dark:"#0a6b45"}) +
             lines(x+110,y+48,parts,{s:10,c:C.muted,lh:13});
    }),
    txt(360,250,"Agency functions earn fees · principal functions earn spreads and bear risk",{s:10.5,c:C.muted})
  ].join("")) },

{ title:"Figure 1.6 — Broker (agency) vs. dealer / market maker (principal)",
  cap:"As a <b>broker</b> the bank never owns the security — it stands between buyer and seller and takes a commission. As a <b>dealer / market maker</b> it buys at its bid and sells at its ask, holding inventory in between: <b>Ask = Bid + spread</b>. The spread compensates for inventory risk and for trading against better-informed counterparties.",
  svg: svg(720,290, [
    txt(360,22,"BROKER — agency",{s:12,w:800,c:C.brand}),
    box(40,40,130,66,C.soft,C.brand), lines(105,72,["Sellers"],{s:12,c:C.dark,w:700}),
    box(295,40,130,66,"#fff",C.brand), lines(360,66,["INVESTMENT","BANK (broker)"],{s:10.5,c:C.brand,w:700}),
    box(550,40,130,66,C.soft,C.brand), lines(615,72,["Buyers"],{s:12,c:C.dark,w:700}),
    arrow(172,64,293,64), arrow(427,64,548,64),
    txt(360,100,"commission",{s:10,c:C.green,w:700}),

    txt(360,150,"DEALER / MARKET MAKER — principal",{s:12,w:800,c:C.dark}),
    box(40,168,130,66,"#eef1f6",C.muted), lines(105,200,["Sellers"],{s:12,w:700}),
    box(295,168,130,66,C.dark,null), lines(360,194,["INVESTMENT","BANK (dealer)"],{s:10.5,c:"#fff",w:700}),
    box(550,168,130,66,"#eef1f6",C.muted), lines(615,200,["Buyers"],{s:12,w:700}),
    arrow(172,192,293,192), txt(232,184,"buys at BID",{s:9.5,c:C.muted}),
    arrow(427,192,548,192), txt(487,184,"sells at ASK",{s:9.5,c:C.muted}),
    box(240,248,240,30,C.amberSoft,C.amber),
    txt(360,268,"Ask = Bid + spread  →  dealer profit",{s:11.5,c:C.amber,w:700})
  ].join("")) }
];

F["1|1.4"] = [
{ title:"Figure 1.7 — Organisational structure: front, middle and back office",
  cap:"The <b>front office</b> earns revenue and faces clients; the <b>middle office</b> measures and controls the risk it takes; the <b>back office</b> settles and records. The front office is further split by an information barrier into a <b>private side</b> (advisory bankers holding inside information) and a <b>public side</b> (research, sales and trading).",
  svg: svg(720,330, [
    box(20,30,680,86,C.soft,C.brand,9),
    txt(60,52,"FRONT OFFICE — revenue",{a:"start",s:12,w:800,c:C.dark}),
    ...["Investment banking<tspan>(M&amp;A · ECM · DCM)</tspan>","Sales &amp; trading","Research","Asset management"]
      .map((s,i)=>{
        const parts = s.split("<tspan>").map(t=>t.replace("</tspan>",""));
        return box(36+i*168,62,152,44,"#fff",C.brand,7) + lines(112+i*168,84,parts,{s:10,c:C.dark,lh:12});
      }),
    box(20,130,680,66,C.amberSoft,C.amber,9),
    txt(60,152,"MIDDLE OFFICE — control",{a:"start",s:12,w:800,c:C.amber}),
    ...["Risk management","Compliance","Treasury","Product control"].map((s,i)=>
      box(36+i*168,160,152,28,"#fff",C.amber,7) + txt(112+i*168,178,s,{s:10,c:C.amber})),
    box(20,210,680,66,"#eef1f6",C.muted,9),
    txt(60,232,"BACK OFFICE — processing",{a:"start",s:12,w:800,c:C.muted}),
    ...["Operations","Settlement &amp; custody","Technology","Finance / HR"].map((s,i)=>
      box(36+i*168,240,152,28,"#fff",C.muted,7) + txt(112+i*168,258,s,{s:10,c:C.muted})),
    box(150,292,180,28,C.greenSoft,C.green,7), txt(240,310,"PRIVATE SIDE (inside info)",{s:10,c:"#0a6b45",w:700}),
    `<line x1="360" y1="288" x2="360" y2="324" stroke="${C.red}" stroke-width="3" stroke-dasharray="5 4"/>`,
    txt(360,286,"Chinese wall",{s:9.5,c:C.red,w:800}),
    box(390,292,180,28,C.soft,C.brand,7), txt(480,310,"PUBLIC SIDE (research/trading)",{s:10,c:C.dark,w:700})
  ].join("")) },

{ title:"Figure 1.8 — Who may perform investment-banking operations in Vietnam",
  cap:"Under current Vietnamese law the functions are carried out by <b>partially universal banks</b>, <b>securities companies</b> (SSI, HSC…), <b>fund management companies</b> (VFM…) and, in principle, securities investment companies. The seven core operations listed on the right are the subject of Chapters 2–6.",
  svg: svg(720,270, [
    txt(170,26,"Entities (Vietnam)",{s:12,w:800,c:C.brand}),
    ...[["Partially universal bank","e.g. commercial banks with a securities arm"],
        ["Securities company","SSI, HSC, VNDirect …"],
        ["Fund management company","VFM …"],
        ["Securities investment company","(not yet established)"]
       ].map(([n,d],i)=>box(20,44+i*54,300,44,C.soft,C.brand,7) +
         txt(170,64+i*54,n,{s:11,w:700,c:C.dark}) + txt(170,80+i*54,d,{s:9.5,c:C.muted})),
    txt(530,26,"Seven core operations",{s:12,w:800,c:C.green}),
    ...["Capital-raising support (Ch.2)","M&amp;A support (Ch.3)","Asset management (Ch.4)",
        "Wholesale banking","Corporate advisory (Ch.5)","Research","Brokerage (Ch.6)"]
      .map((s,i)=>box(360,44+i*31,340,26,C.greenSoft,C.green,6) +
        txt(380,62+i*31,s,{a:"start",s:10.5,c:"#0a6b45"}))
  ].join("")) }
];

F["1|1.5"] = [
{ title:"Figure 1.9 — The operating ecosystem of an investment bank",
  cap:"An investment bank never executes a mandate alone. Law firms, auditors, tax advisors, credit-rating agencies, custodians, research and due-diligence firms all surround the transaction, and the whole ecosystem sits inside a domestic and international legal framework plus prevailing economic and social conditions.",
  svg: svg(720,300, [
    box(20,20,680,26,C.dark,null,6), txt(360,38,"DOMESTIC &amp; INTERNATIONAL LEGAL FRAMEWORK",{s:11,c:"#fff",w:800}),
    box(20,256,680,26,C.muted,null,6), txt(360,274,"ECONOMIC &amp; SOCIAL CONDITIONS",{s:11,c:"#fff",w:800}),
    `<circle cx="360" cy="150" r="62" fill="${C.brand}"/>`,
    lines(360,144,["INVESTMENT","BANK"],{s:12,c:"#fff",w:800}),
    ...[["Law firms",100,70],["Auditors",290,62],["Credit rating",480,62],["Tax advisors",620,70],
        ["Commercial banks",100,225],["Custody &amp; settlement",300,238],["Research firms",490,238],["Due diligence",620,225]
       ].map(([n,x,y])=>{
      const w = 128;
      return box(x-w/2,y-15,w,30,"#fff",C.brand,7) + txt(x,y+4,n,{s:10,c:C.dark}) +
             `<line x1="${x}" y1="${y<150?y+16:y-16}" x2="360" y2="${y<150?96:206}" stroke="${C.line}" stroke-width="1.5"/>`;
    })
  ].join("")) }
];

/* ---------------- Chapter 2 ---------------- */
F["2|2.1"] = [
{ title:"Figure 2.1 — Underwriting: who carries the placement risk",
  cap:"Underwriting rents the bank's <b>balance sheet</b> and <b>distribution network</b> to the issuer. The four commitment types differ only in where the risk of unsold securities lands — and the gross spread the issuer pays rises with the risk the bank absorbs.",
  svg: svg(720,250, [
    ...[["Firm commitment","Bank buys the entire issue","BANK bears risk",C.red,40],
        ["Best efforts","Bank only agrees to try","ISSUER bears risk",C.green,220],
        ["Bought deal","Bank buys the block instantly","BANK — highest risk",C.red,400],
        ["Standby","Bank buys the unsubscribed rest","BANK — residual",C.amber,580]
       ].map(([n,d,r,col,x])=>
      box(x-15,50,150,120,"#fff",col,9) +
      txt(x+60,74,n,{s:11.5,w:800,c:C.dark}) +
      txt(x+60,100,d,{s:9.5,c:C.muted}) +
      box(x+5,120,110,30,col===C.red?C.redSoft:(col===C.green?C.greenSoft:C.amberSoft),col,6) +
      txt(x+60,140,r,{s:9.5,c:col,w:700})),
    txt(360,26,"Placement risk transfers at the underwriting agreement",{s:12,w:700,c:C.brand}),
    box(140,196,440,32,C.soft,C.brand,7),
    txt(360,216,"Gross spread = (Offer price − Proceeds to issuer) / Offer price",{s:11.5,c:C.dark,w:700})
  ].join("")) }
];

F["2|2.2"] = [
{ title:"Figure 2.2 — The IPO process, mandate to stabilisation",
  cap:"The eight stages of a public offering. Valuation and the price range are set <i>before</i> the roadshow; <b>bookbuilding</b> converts investor demand into a final price; and the <b>greenshoe</b> supports the aftermarket for roughly 30 days after listing.",
  svg: svg(720,270, [
    ...["Mandate<tspan>/ bake-off</tspan>","Due diligence<tspan>&amp; structuring</tspan>","Registration<tspan>(prospectus)</tspan>",
        "Valuation<tspan>&amp; price range</tspan>","Roadshow","Bookbuilding","Pricing<tspan>&amp; allocation</tspan>","Stabilisation<tspan>(greenshoe)</tspan>"]
      .map((s,i)=>{
        const parts = s.split("<tspan>").map(t=>t.replace("</tspan>",""));
        const x = 20 + (i%4)*172, y = 50 + Math.floor(i/4)*110;
        const col = i<4? C.brand : C.green;
        return box(x,y,152,64,col===C.brand?C.soft:C.greenSoft,col,9) +
          `<circle cx="${x+18}" cy="${y+16}" r="11" fill="${col}"/>` + txt(x+18,y+20,String(i+1),{s:11,c:"#fff",w:800}) +
          lines(x+76,y+40,parts,{s:10,c:C.ink,lh:13}) +
          ((i%4)<3 ? arrow(x+156,y+32,x+168,y+32,col) : "");
      }),
    txt(360,26,"Risk passes to the underwriter at pricing (firm commitment)",{s:11.5,w:700,c:C.dark}),
    box(180,236,360,26,C.amberSoft,C.amber,6),
    txt(360,254,"Greenshoe ≤ 15% of the base deal size",{s:11,c:C.amber,w:700})
  ].join("")) },

{ title:"Figure 2.3 — Where the money goes in an offering",
  cap:"A worked waterfall: 10m shares at $20 with a 15% greenshoe raises <b>$230m gross</b>; a 6% gross spread pays the syndicate <b>$13.8m</b>, leaving <b>$216.2m</b> for the issuer. If the shares then close above the offer price, further value — &lsquo;money left on the table&rsquo; — accrues to the allocated investors rather than to the company.",
  svg: svg(720,250, [
    ...[["Base deal 10m × $20","200",200,C.brand,40],
        ["+ greenshoe 1.5m","30",30,C.green,190],
        ["Gross proceeds","230",230,C.dark,330],
        ["− spread 6%","13.8",14,C.red,480],
        ["Net to issuer","216.2",216,C.green,610]
       ].map(([n,v,h,col,x])=>{
      const H = Number(h)*0.62, y = 190-H;
      return `<rect x="${x-42}" y="${y}" width="84" height="${H}" rx="5" fill="${col}"/>` +
             txt(x,y-8,"$"+v+"m",{s:11,w:800,c:col}) +
             txt(x,208,n,{s:9.5,c:C.muted});
    }),
    `<line x1="20" y1="190" x2="700" y2="190" stroke="${C.line}" stroke-width="2"/>`,
    txt(360,26,"Offering economics ($m)",{s:12,w:800,c:C.brand}),
    txt(360,236,"Net proceeds = Shares × Offer price × (1 − gross spread)",{s:11,c:C.dark,w:700})
  ].join("")) }
];

F["2|2.4"] = [
{ title:"Figure 2.4 — Private fund structure and the &lsquo;2 and 20&rsquo; waterfall",
  cap:"Limited partners commit the capital; the general partner invests it and is paid a <b>2% management fee</b> plus <b>20% carried interest</b> on profits above the <b>hurdle</b> (typically 8%). The hurdle ensures investors receive a preferred return before the manager shares in any gain.",
  svg: svg(720,290, [
    box(30,40,190,80,C.soft,C.brand,9), lines(125,70,["LIMITED PARTNERS (LPs)","Pension funds, insurers,","endowments, sovereign funds"],{s:10,c:C.dark,lh:14}),
    box(280,40,160,80,C.brand,null,9), lines(360,72,["THE FUND","(partnership)"],{s:11.5,c:"#fff",w:800,lh:16}),
    box(500,40,190,80,C.greenSoft,C.green,9), lines(595,70,["GENERAL PARTNER (GP)","Sources, executes and","manages the investments"],{s:10,c:"#0a6b45",lh:14}),
    arrow(224,66,276,66), txt(250,58,"commit",{s:9,c:C.muted}),
    arrow(276,98,224,98,C.green), txt(250,112,"returns",{s:9,c:C.green}),
    arrow(444,66,496,66), txt(470,58,"manage",{s:9,c:C.muted}),
    arrow(496,98,444,98,C.green), txt(470,112,"2% + 20%",{s:9,c:C.green}),
    txt(360,158,"Profit waterfall",{s:12,w:800,c:C.dark}),
    ...[["1. Return of capital","100% to LPs",C.brand],
        ["2. Preferred return (hurdle ~8%)","100% to LPs",C.brand],
        ["3. Catch-up","mostly to GP",C.amber],
        ["4. Split above the hurdle","80% LP / 20% GP",C.green]
       ].map(([a,b,col],i)=>{
      const y = 176 + i*28;
      return box(90,y,340,24,"#fff",col,6) + txt(104,y+16,a,{a:"start",s:10.5,c:C.ink}) +
             box(440,y,190,24,col===C.green?C.greenSoft:C.soft,col,6) + txt(535,y+16,b,{s:10.5,c:col,w:700});
    })
  ].join("")) }
];

/* ---------------- Chapter 3 ---------------- */
F["3|3.1"] = [
{ title:"Figure 3.1 — Forms of business combination",
  cap:"<b>Horizontal</b> combinations buy market share within the same industry and stage (and attract competition scrutiny). <b>Vertical</b> combinations move up or down the supply chain to secure supply or capture margin. <b>Conglomerate</b> combinations join unrelated businesses — historically the most likely to destroy value.",
  svg: svg(720,240, [
    txt(120,30,"HORIZONTAL",{s:12,w:800,c:C.brand}),
    box(40,50,70,42,C.soft,C.brand,7), txt(75,76,"Firm A",{s:10.5,c:C.dark}),
    box(130,50,70,42,C.soft,C.brand,7), txt(165,76,"Firm B",{s:10.5,c:C.dark}),
    txt(120,112,"same industry, same stage",{s:9.5,c:C.muted}),
    txt(120,132,"→ scale, market share",{s:9.5,c:C.green}),

    txt(360,30,"VERTICAL",{s:12,w:800,c:C.brand}),
    box(325,46,70,34,C.soft,C.brand,7), txt(360,68,"Supplier",{s:10,c:C.dark}),
    box(325,92,70,34,C.brand,null,7), txt(360,114,"Firm",{s:10,c:"#fff"}),
    box(325,138,70,34,C.soft,C.brand,7), txt(360,160,"Customer",{s:10,c:C.dark}),
    arrow(360,82,360,90), arrow(360,128,360,136),
    txt(360,190,"→ supply security, margin capture",{s:9.5,c:C.green}),

    txt(600,30,"CONGLOMERATE",{s:12,w:800,c:C.brand}),
    box(520,50,70,42,"#eef1f6",C.muted,7), txt(555,76,"Steel",{s:10.5}),
    box(610,50,70,42,"#eef1f6",C.muted,7), txt(645,76,"Media",{s:10.5}),
    txt(600,112,"unrelated businesses",{s:9.5,c:C.muted}),
    txt(600,132,"→ diversification (often discounted)",{s:9.5,c:C.red}),

    box(140,206,440,28,C.amberSoft,C.amber,7),
    txt(360,225,"Structure separately: share purchase vs. asset purchase",{s:11,c:C.amber,w:700})
  ].join("")) }
];

F["3|3.2"] = [
{ title:"Figure 3.2 — The sell-side auction: manufacturing competitive tension",
  cap:"Competitive tension is the sell-side advisor's product. A <b>broad auction</b> maximises price discovery but risks leaks and business disruption; a <b>targeted process</b> protects confidentiality at the cost of tension. Note where the NDA gates the CIM, and where non-binding indications become binding bids.",
  svg: svg(720,300, [
    ...[["Preparation","Financials, model,<tspan>valuation expectations</tspan>"],
        ["Teaser","One page, anonymous"],
        ["NDA → CIM","Detailed memorandum"],
        ["Round 1","Non-binding<tspan>indications (IOI)</tspan>"],
        ["Round 2","Management meetings<tspan>+ data room</tspan>"],
        ["Final bids","Binding + mark-up<tspan>of the agreement</tspan>"],
        ["Sign → Close","Approvals, then closing"]
       ].map(([n,d],i)=>{
      const parts = d.split("<tspan>").map(t=>t.replace("</tspan>",""));
      const y = 44 + i*34;
      return box(60,y,330,28,i<3?C.soft:C.greenSoft,i<3?C.brand:C.green,6) +
             `<circle cx="80" cy="${y+14}" r="9" fill="${i<3?C.brand:C.green}"/>` +
             txt(80,y+18,String(i+1),{s:10,c:"#fff",w:800}) +
             txt(100,y+18,n,{a:"start",s:10.5,w:700,c:C.ink}) +
             txt(200,y+18,parts.join(" "),{a:"start",s:9.5,c:C.muted});
    }),
    box(430,60,260,90,"#fff",C.brand,8),
    txt(560,80,"Broad auction",{s:11,w:800,c:C.brand}),
    lines(560,100,["+ maximum price discovery","− leak &amp; disruption risk"],{s:9.5,c:C.muted,lh:14}),
    box(430,170,260,90,"#fff",C.amber,8),
    txt(560,190,"Targeted process",{s:11,w:800,c:C.amber}),
    lines(560,210,["+ confidentiality, speed","− less competitive tension"],{s:9.5,c:C.muted,lh:14}),
    txt(360,22,"Sell-side auction timeline",{s:12,w:800,c:C.dark})
  ].join("")) }
];

F["3|3.3"] = [
{ title:"Figure 3.3 — Accretion / dilution: the buy-side's first question",
  cap:"Worked from the lecture example. The acquirer's own <b>P/E of 15×</b> versus the <b>16.7× it pays</b> means the stock component alone is dilutive; cheap after-tax debt and $20m of synergies rescue the deal to <b>+5.0% accretion</b>. Change the mix and the answer changes — which is exactly what Lab 3 lets students explore.",
  svg: svg(720,300, [
    txt(360,24,"Pro forma EPS bridge ($m unless stated)",{s:12,w:800,c:C.brand}),
    ...[["Acquirer NI","400",C.brand],["+ Target NI","150",C.brand],["+ Synergies","20",C.green],
        ["− New interest","−45",C.red],["= Pro forma NI","525",C.dark]
       ].map(([n,v,col],i)=>{
      const y = 48 + i*34;
      return box(60,y,260,28,"#fff",col,6) + txt(76,y+19,n,{a:"start",s:11,c:C.ink}) +
             txt(304,y+19,v,{a:"end",s:11.5,w:800,c:col});
    }),
    box(60,222,260,30,C.soft,C.brand,7),
    txt(190,242,"÷ 125m shares → EPS $4.20",{s:11,c:C.dark,w:700}),
    box(380,48,300,80,C.soft,C.brand,8),
    lines(530,74,["Standalone EPS","$4.00"],{s:12,c:C.dark,w:700,lh:20}),
    box(380,140,300,80,C.greenSoft,C.green,8),
    lines(530,166,["Pro forma EPS","$4.20  →  +5.0% ACCRETIVE"],{s:12,c:"#0a6b45",w:800,lh:20}),
    box(380,232,300,50,C.amberSoft,C.amber,8),
    lines(530,252,["Acquirer P/E 15.0× vs P/E paid 16.7×","stock leg dilutive · debt + synergies rescue it"],{s:9.5,c:C.amber,lh:14})
  ].join("")) },

{ title:"Figure 3.4 — Consideration and financing",
  cap:"<b>Consideration</b> is what the seller receives; <b>financing</b> is where the buyer finds it. Cash is certain and usually accretive when debt is cheap, but consumes balance-sheet capacity and is taxable to the seller. Stock shares the risk and may be tax-deferred, but dilutes the acquirer and can signal that its shares are overvalued.",
  svg: svg(720,270, [
    txt(190,26,"CONSIDERATION",{s:12,w:800,c:C.brand}),
    ...[["Cash","Certain value, no dilution;<tspan>taxable to seller, uses capacity</tspan>",C.brand],
        ["Stock","No cash outlay, shares risk;<tspan>dilutes, signals overvaluation</tspan>",C.green],
        ["Mix / earn-out","Bridges valuation gaps;<tspan>complex, dispute-prone</tspan>",C.amber]
       ].map(([n,d,col],i)=>{
      const parts = d.split("<tspan>").map(t=>t.replace("</tspan>",""));
      const y = 46 + i*68;
      return box(30,y,320,58,"#fff",col,8) + txt(50,y+22,n,{a:"start",s:11.5,w:800,c:col}) +
             lines(190,y+38,parts,{s:9.5,c:C.muted,lh:12});
    }),
    txt(540,26,"FINANCING TOOLKIT",{s:12,w:800,c:C.dark}),
    ...["Bridge loan (certainty at signing)","Term loans A / B (senior secured)",
        "High-yield bonds (cov-lite, longer)","Mezzanine / PIK (subordinated)","New equity / sponsor equity"]
      .map((s,i)=>box(380,46+i*38,310,30,C.soft,C.brand,6) + txt(400,66+i*38,s,{a:"start",s:10.5,c:C.dark}))
  ].join("")) }
];

F["3|3.5"] = [
{ title:"Figure 3.5 — Anti-takeover defences and the counter-attack",
  cap:"Defences are double-edged: they strengthen the board's bargaining hand — or entrench weak management and deny shareholders a premium. Empirically, strong defences (especially staggered boards) are associated with <b>lower realised premia</b>.",
  svg: svg(720,280, [
    txt(190,26,"PREVENTIVE (before a bid)",{s:11.5,w:800,c:C.brand}),
    ...[["Poison pill","Dilutes a bidder crossing a threshold"],
        ["Staggered board","Control needs two annual meetings"],
        ["Golden parachute","Raises the cost of change of control"],
        ["Supermajority clause","High approval threshold in the charter"]
       ].map(([n,d],i)=>box(20,44+i*54,340,44,C.soft,C.brand,7) +
         txt(40,64+i*54,n,{a:"start",s:11,w:700,c:C.dark}) +
         txt(40,80+i*54,d,{a:"start",s:9.5,c:C.muted})),
    txt(540,26,"REACTIVE (after a bid)",{s:11.5,w:800,c:C.red}),
    ...[["White knight","Invite a friendlier acquirer to outbid"],
        ["Crown jewel","Sell the asset the bidder wants most"],
        ["Pac-Man","Turn around and bid for the raider"],
        ["Greenmail / litigation","Buy the stake back; or sue to delay"]
       ].map(([n,d],i)=>box(370,44+i*54,330,44,C.redSoft,C.red,7) +
         txt(390,64+i*54,n,{a:"start",s:11,w:700,c:C.red}) +
         txt(390,80+i*54,d,{a:"start",s:9.5,c:C.muted}))
  ].join("")) }
];

/* ---------------- Chapter 4 ---------------- */
F["4|4.1"] = [
{ title:"Figure 4.1 — Asset management: segments and fee levels",
  cap:"Asset management invests <b>other people's money</b> for a fee — distinct from the bank's own principal investing. Fees rise as mandates become more bespoke and less constrained, from a few basis points for institutional index mandates to &lsquo;2 and 20&rsquo; for alternatives.",
  svg: svg(720,250, [
    ...[["Institutional","Pension funds, insurers,<tspan>sovereign funds</tspan>","Segregated mandate","0.1 – 0.5%",C.brand],
        ["Retail funds","The investing public","Mutual funds, ETFs","0.05 – 2%",C.brand],
        ["Private wealth","High-net-worth individuals","Advisory / discretionary","0.5 – 1.5%",C.green],
        ["Alternatives","Sophisticated investors","Hedge funds, PE funds","1–2% + carry",C.amber]
       ].map(([a,b,c,d,col],i)=>{
      const y = 56 + i*44;
      const parts = b.split("<tspan>").map(t=>t.replace("</tspan>",""));
      return box(20,y,150,36,col===C.amber?C.amberSoft:(col===C.green?C.greenSoft:C.soft),col,6) +
             txt(95,y+23,a,{s:11,w:700,c:col}) +
             txt(190,y+23,parts.join(" "),{a:"start",s:10,c:C.muted}) +
             txt(420,y+23,c,{a:"start",s:10,c:C.ink}) +
             box(600,y,100,36,"#fff",col,6) + txt(650,y+23,d,{s:10.5,w:800,c:col});
    }),
    txt(95,44,"Segment",{s:10,w:800,c:C.muted}), txt(250,44,"Client",{s:10,w:800,c:C.muted}),
    txt(470,44,"Vehicle",{s:10,w:800,c:C.muted}), txt(650,44,"Typical fee",{s:10,w:800,c:C.muted}),
    box(140,236,440,0,"#fff"),
    txt(360,244,"Recurring, AUM-linked revenue is what stabilises a universal bank's earnings",{s:10,c:C.muted})
  ].join("")) }
];

F["4|4.2"] = [
{ title:"Figure 4.2 — Fund mechanics: NAV, subscriptions and the fee split",
  cap:"The fund cycle: raise → invest against the mandate → strike <b>NAV</b> → process subscriptions and redemptions → report. Fees come off the top: the management fee is charged in good years and bad, while carry applies only to the excess above the hurdle.",
  svg: svg(720,290, [
    ...["Raise capital","Invest to<tspan>the mandate</tspan>","Value &amp; strike<tspan>NAV daily</tspan>","Subscriptions<tspan>&amp; redemptions</tspan>","Report to<tspan>investors</tspan>"]
      .map((s,i)=>{
        const parts = s.split("<tspan>").map(t=>t.replace("</tspan>",""));
        const x = 20 + i*140;
        return box(x,44,124,58,C.soft,C.brand,8) + lines(x+62,70,parts,{s:10,c:C.dark,lh:13}) +
               (i<4? arrow(x+128,73,x+138,73) : "");
      }),
    txt(360,26,"The fund management cycle",{s:12,w:800,c:C.brand}),
    box(150,124,420,30,"#fff",C.dark,7),
    txt(360,144,"NAV per unit = (Total assets − Total liabilities) ÷ Units outstanding",{s:11,c:C.dark,w:700}),
    txt(360,182,"Gross return 15% splits as…",{s:11.5,w:800,c:C.dark}),
    ...[["Management fee 2%","2.0",C.red,60],
        ["Carry 20% × (15%−8%)","1.4",C.amber,250],
        ["Investor net return","11.6",C.green,470]
       ].map(([n,v,col,x])=>{
      const w = Number(v)*22 + 40;
      return `<rect x="${x}" y="200" width="${w}" height="34" rx="6" fill="${col}"/>` +
             txt(x+w/2,222,v+"%",{s:12,c:"#fff",w:800}) +
             txt(x+w/2,252,n,{s:9.5,c:C.muted});
    }),
    txt(360,278,"Hurdle 8% must be cleared before any carry is earned",{s:10,c:C.muted})
  ].join("")) }
];

F["4|4.4"] = [
{ title:"Figure 4.3 — The wealth-management process",
  cap:"Wealth management is goals-based and cyclical. The <b>investment policy statement</b> is the pivot: it converts the client's circumstances into a written mandate with objectives, constraints and a benchmark, and it is the document against which performance and suitability are later judged.",
  svg: svg(720,250, [
    ...[["1. Profile the client","Assets, liabilities, goals,<tspan>risk tolerance &amp; capacity</tspan>",C.brand],
        ["2. Draft the IPS","Objectives, constraints,<tspan>benchmark, review cycle</tspan>",C.green],
        ["3. Allocate &amp; implement","Strategic allocation,<tspan>then security selection</tspan>",C.brand],
        ["4. Review &amp; rebalance","Performance vs goals,<tspan>life events, drift</tspan>",C.amber]
       ].map(([n,d,col],i)=>{
      const parts = d.split("<tspan>").map(t=>t.replace("</tspan>",""));
      const x = 20 + i*176;
      return box(x,60,160,84,col===C.green?C.greenSoft:(col===C.amber?C.amberSoft:C.soft),col,9) +
             txt(x+80,84,n,{s:11,w:800,c:col}) + lines(x+80,106,parts,{s:9.5,c:C.muted,lh:13}) +
             (i<3? arrow(x+164,102,x+174,102,col) : "");
    }),
    `<path d="M690 102 q26 60 -330 60 q-356 0 -330 -60" fill="none" stroke="${C.line}" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#ah)"/>`,
    txt(360,196,"continuous cycle — the IPS is revisited at every review",{s:10,c:C.muted}),
    txt(360,30,"Goals-based advice, not product selling",{s:12,w:800,c:C.dark}),
    box(210,214,300,28,C.redSoft,C.red,7),
    txt(360,233,"Suitability + disclosure = the sector's key legal duty",{s:10.5,c:C.red,w:700})
  ].join("")) }
];

/* ---------------- Chapter 5 ---------------- */
F["5|5.1"] = [
{ title:"Figure 5.1 — Listing readiness and the EV → equity bridge",
  cap:"Left: the four readiness workstreams a listing advisor must complete. Right: the arithmetic every comparable-companies valuation ends with — apply the peer <b>median</b> multiple to get enterprise value, then subtract net debt (and minorities/preferred) to reach equity value per share.",
  svg: svg(720,260, [
    txt(170,26,"Listing readiness",{s:12,w:800,c:C.brand}),
    ...[["Financial","Audited accounts, clean history, forecasting"],
        ["Legal &amp; structural","Clear ownership, related-party clean-up"],
        ["Governance","Independent board, audit committee, controls"],
        ["Disclosure","Prospectus, risk factors, ongoing reporting"]
       ].map(([n,d],i)=>box(20,44+i*50,300,42,C.soft,C.brand,7) +
         txt(38,63+i*50,n,{a:"start",s:11,w:700,c:C.dark}) +
         txt(38,79+i*50,d,{a:"start",s:9,c:C.muted})),
    txt(530,26,"EV → equity bridge",{s:12,w:800,c:C.green}),
    ...[["EBITDA $120m × 9.0×","= EV $1,080m",C.brand],
        ["− Net debt","$200m",C.red],
        ["− Minorities / preferred","$0m",C.red],
        ["= Equity value","$880m",C.green],
        ["÷ 50m diluted shares","= $17.60 / share",C.green]
       ].map(([a,b,col],i)=>{
      const y = 44 + i*42;
      return box(360,y,330,34,col===C.green?C.greenSoft:(col===C.red?C.redSoft:C.soft),col,6) +
             txt(376,y+22,a,{a:"start",s:10.5,c:C.ink}) +
             txt(674,y+22,b,{a:"end",s:10.5,w:800,c:col});
    })
  ].join("")) }
];

F["5|5.2"] = [
{ title:"Figure 5.2 — Business-form conversion and equitization",
  cap:"Only a <b>joint-stock company</b> may offer shares publicly, so conversion precedes any IPO. For state-owned enterprises the process is <b>equitization (cổ phần hóa)</b>, where enterprise valuation — especially of land-use rights — is the most contested and most scrutinised step.",
  svg: svg(720,240, [
    box(30,60,150,60,"#eef1f6",C.muted,8), lines(105,86,["Limited liability co.","or SOE"],{s:10.5,lh:14}),
    arrow(186,90,246,90), txt(216,80,"convert",{s:9.5,c:C.muted}),
    box(250,60,150,60,C.soft,C.brand,8), lines(325,86,["Joint-stock company","(JSC)"],{s:10.5,c:C.dark,lh:14}),
    arrow(406,90,466,90,C.green), txt(436,80,"offer",{s:9.5,c:C.green}),
    box(470,60,150,60,C.greenSoft,C.green,8), lines(545,86,["Public offering","&amp; listing"],{s:10.5,c:"#0a6b45",lh:14}),
    txt(360,32,"Why convert: only a JSC can issue transferable shares to the public",{s:11.5,w:700,c:C.dark}),
    txt(360,160,"Equitization steps for a state-owned enterprise",{s:11.5,w:800,c:C.amber}),
    ...["Establish the<tspan>steering committee</tspan>","Inventory assets<tspan>&amp; settle finances</tspan>","Enterprise<tspan>valuation</tspan>",
        "Approve the<tspan>equitization plan</tspan>","Sell shares<tspan>(IPO / strategic)</tspan>","Register the<tspan>joint-stock co.</tspan>"]
      .map((s,i)=>{
        const parts = s.split("<tspan>").map(t=>t.replace("</tspan>",""));
        const x = 16 + i*118;
        return box(x,178,108,46,C.amberSoft,C.amber,7) + lines(x+54,198,parts,{s:9,c:C.amber,lh:12}) +
               (i<5? arrow(x+110,201,x+116,201,C.amber) : "");
      })
  ].join("")) }
];

F["5|5.4"] = [
{ title:"Figure 5.3 — Capital restructuring: the WACC trade-off",
  cap:"Substituting cheap, tax-deductible debt for equity lowers WACC — up to a point. Beyond it, rising required returns on both debt and equity plus expected <b>financial-distress costs</b> dominate, and WACC turns upward. The optimum sits lower for volatile, asset-light businesses.",
  svg: svg(720,290, [
    `<line x1="70" y1="240" x2="670" y2="240" stroke="${C.line}" stroke-width="2"/>`,
    `<line x1="70" y1="40" x2="70" y2="240" stroke="${C.line}" stroke-width="2"/>`,
    txt(370,268,"Debt / total capital  →",{s:11,c:C.muted}),
    `<text x="26" y="150" fill="${C.muted}" font-size="11" transform="rotate(-90 26 150)" font-family="Arial">Cost of capital</text>`,
    `<path d="M70 120 Q 340 210 670 90" fill="none" stroke="${C.brand}" stroke-width="3.5"/>`,
    txt(150,104,"WACC",{s:11,w:800,c:C.brand}),
    `<path d="M70 96 Q 340 96 670 40" fill="none" stroke="${C.green}" stroke-width="2.5" stroke-dasharray="6 4"/>`,
    txt(620,32,"Cost of equity",{s:10,c:C.green}),
    `<path d="M70 206 Q 340 206 670 150" fill="none" stroke="${C.amber}" stroke-width="2.5" stroke-dasharray="6 4"/>`,
    txt(608,168,"After-tax cost of debt",{s:10,c:C.amber}),
    `<circle cx="352" cy="186" r="7" fill="${C.red}"/>`,
    `<line x1="352" y1="186" x2="352" y2="240" stroke="${C.red}" stroke-width="1.5" stroke-dasharray="4 3"/>`,
    txt(352,172,"optimal structure",{s:10,w:800,c:C.red}),
    box(96,44,190,54,C.greenSoft,C.green,7), lines(191,66,["Tax shield dominates","→ WACC falls"],{s:9.5,c:"#0a6b45",lh:13}),
    box(430,44,210,54,C.redSoft,C.red,7), lines(535,66,["Distress costs dominate","→ WACC rises"],{s:9.5,c:C.red,lh:13})
  ].join("")) }
];

/* ---------------- Chapter 6 ---------------- */
F["6|6.1"] = [
{ title:"Figure 6.1 — Order types and the exchange matching process",
  cap:"Orders reach the exchange through the broker and are matched by <b>price priority, then time priority</b>. An <b>LO</b> guarantees price but not execution; an <b>MP/MTL</b> order guarantees execution but not price; <b>ATO/ATC</b> orders participate only in the opening and closing call auctions.",
  svg: svg(720,290, [
    txt(360,24,"Client → broker → exchange",{s:12,w:800,c:C.brand}),
    box(30,44,130,44,C.soft,C.brand,7), txt(95,71,"Investor",{s:11,c:C.dark}),
    arrow(164,66,214,66), box(218,44,130,44,C.brand,null,7), txt(283,71,"Broker",{s:11,c:"#fff",w:700}),
    arrow(352,66,402,66), box(406,44,130,44,C.dark,null,7), txt(471,71,"Exchange",{s:11,c:"#fff",w:700}),
    box(556,44,140,44,C.greenSoft,C.green,7), lines(626,64,["Matching:","price → time"],{s:9.5,c:"#0a6b45",lh:13}),
    arrow(540,66,554,66,C.green),
    ...[["LO","Limit order — executes at the stated price or better",C.brand],
        ["MP / MTL","Market order — executes at the best available price",C.amber],
        ["ATO","At-the-open — participates in the opening call auction",C.green],
        ["ATC","At-the-close — participates in the closing call auction",C.green]
       ].map(([n,d,col],i)=>{
      const y = 110 + i*38;
      return box(60,y,80,30,col===C.brand?C.soft:(col===C.amber?C.amberSoft:C.greenSoft),col,6) +
             txt(100,y+20,n,{s:11,w:800,c:col}) +
             box(150,y,510,30,"#fff",C.line,6) + txt(168,y+20,d,{a:"start",s:10.5,c:C.ink});
    }),
    txt(360,278,"Price priority first, then time priority — the core of continuous order matching",{s:10,c:C.muted})
  ].join("")) }
];

F["6|6.2"] = [
{ title:"Figure 6.2 — Market making: the spread and inventory skew",
  cap:"The dealer quotes both sides and earns the spread on a round-trip. When it is repeatedly hit on one side, inventory builds and it <b>skews both quotes</b> to attract the offsetting flow — managing inventory rather than predicting direction. Widening the spread is the response to volatility and to suspected informed trading.",
  svg: svg(720,280, [
    txt(360,24,"Balanced book",{s:12,w:800,c:C.brand}),
    `<line x1="120" y1="80" x2="600" y2="80" stroke="${C.line}" stroke-width="2"/>`,
    `<circle cx="240" cy="80" r="9" fill="${C.green}"/>`, txt(240,60,"BID 20.00",{s:10.5,w:700,c:C.green}),
    `<circle cx="480" cy="80" r="9" fill="${C.red}"/>`, txt(480,60,"ASK 20.10",{s:10.5,w:700,c:C.red}),
    `<line x1="240" y1="80" x2="480" y2="80" stroke="${C.amber}" stroke-width="4"/>`,
    txt(360,102,"spread = 10¢ → dealer profit per round-trip",{s:10.5,c:C.amber,w:700}),
    txt(360,146,"Long inventory builds → skew both quotes down",{s:12,w:800,c:C.dark}),
    `<line x1="120" y1="200" x2="600" y2="200" stroke="${C.line}" stroke-width="2"/>`,
    `<circle cx="192" cy="200" r="9" fill="${C.green}"/>`, txt(192,182,"BID 19.92",{s:10.5,w:700,c:C.green}),
    `<circle cx="432" cy="200" r="9" fill="${C.red}"/>`, txt(432,182,"ASK 20.02",{s:10.5,w:700,c:C.red}),
    `<line x1="192" y1="200" x2="432" y2="200" stroke="${C.amber}" stroke-width="4"/>`,
    arrow(300,224,220,224,C.brand), txt(360,240,"quotes shift down to discourage sellers and attract buyers",{s:10,c:C.muted}),
    box(150,254,420,24,C.redSoft,C.red,6),
    txt(360,271,"Risks paid for: inventory · adverse selection · processing",{s:10,c:C.red,w:700})
  ].join("")) }
];

F["6|6.4"] = [
{ title:"Figure 6.3 — Margin lending: buying power and the call price",
  cap:"Worked from the lecture example. Buying at $50 with 50% initial and 25% maintenance margin gives <b>2× leverage</b> and a margin call at <b>$33.33</b>. Below that line the client must deposit funds or be liquidated — and leverage has doubled the percentage loss on their own equity.",
  svg: svg(720,300, [
    txt(360,24,"Account at purchase — $50 × 1,000 shares",{s:12,w:800,c:C.brand}),
    box(120,44,240,44,C.soft,C.brand,7), txt(240,71,"Equity $25,000 (50%)",{s:11,c:C.dark,w:700}),
    box(360,44,240,44,C.amberSoft,C.amber,7), txt(480,71,"Loan $25,000 (50%)",{s:11,c:C.amber,w:700}),
    txt(360,106,"Buying power = Equity ÷ Initial margin = 2× leverage",{s:10.5,c:C.muted}),
    `<line x1="90" y1="270" x2="660" y2="270" stroke="${C.line}" stroke-width="2"/>`,
    `<line x1="90" y1="140" x2="90" y2="270" stroke="${C.line}" stroke-width="2"/>`,
    `<rect x="130" y="150" width="90" height="120" rx="5" fill="${C.green}"/>`, txt(175,142,"$50.00",{s:10.5,w:800,c:C.green}),
    `<rect x="270" y="186" width="90" height="84" rx="5" fill="${C.brand}"/>`, txt(315,178,"$42.86",{s:10.5,w:800,c:C.brand}),
    `<rect x="410" y="210" width="90" height="60" rx="5" fill="${C.amber}"/>`, txt(455,202,"$33.33",{s:10.5,w:800,c:C.amber}),
    `<rect x="550" y="234" width="90" height="36" rx="5" fill="${C.red}"/>`, txt(595,226,"$25.00",{s:10.5,w:800,c:C.red}),
    txt(175,288,"purchase",{s:9.5,c:C.muted}), txt(315,288,"call @30% maint.",{s:9.5,c:C.muted}),
    txt(455,288,"call @25% maint.",{s:9.5,c:C.muted}), txt(595,288,"equity wiped",{s:9.5,c:C.red}),
    `<line x1="100" y1="210" x2="650" y2="210" stroke="${C.red}" stroke-width="2" stroke-dasharray="6 4"/>`,
    txt(596,204,"margin call line",{s:9.5,c:C.red,w:700}),
    box(120,120,480,0,"#fff")
  ].join("")) },

{ title:"Figure 6.4 — Securities lending and the mechanics of a short sale",
  cap:"The lender (a long-term holder) supplies stock against collateral and a fee; the short seller sells it now and must buy it back later. Profit = <b>sale − repurchase − borrow fee − dividends passed through</b>. The loss is theoretically unlimited, and a <b>recall</b> or a squeeze can force covering at the worst moment.",
  svg: svg(720,270, [
    box(30,50,150,60,C.soft,C.brand,8), lines(105,76,["LENDER","(fund / custodian)"],{s:10.5,c:C.dark,lh:14}),
    box(285,50,150,60,C.dark,null,8), lines(360,76,["SHORT SELLER","(borrower)"],{s:10.5,c:"#fff",lh:14}),
    box(540,50,150,60,C.greenSoft,C.green,8), lines(615,76,["MARKET","(buyers)"],{s:10.5,c:"#0a6b45",lh:14}),
    arrow(186,70,281,70), txt(233,62,"① lends stock",{s:9,c:C.muted}),
    arrow(281,96,186,96,C.green), txt(233,110,"collateral + fee",{s:9,c:C.green}),
    arrow(439,70,536,70), txt(487,62,"② sells at $100",{s:9,c:C.muted}),
    arrow(536,96,439,96,C.green), txt(487,110,"cash proceeds",{s:9,c:C.green}),
    arrow(536,150,439,150,C.amber), txt(487,142,"③ buys back at $80",{s:9,c:C.amber}),
    arrow(281,150,186,150,C.amber), txt(233,142,"④ returns stock",{s:9,c:C.amber}),
    box(150,180,420,32,C.greenSoft,C.green,7),
    txt(360,201,"Profit = 100 − 80 − borrow fee − dividends = gain if the price falls",{s:11,c:"#0a6b45",w:700}),
    box(150,224,420,32,C.redSoft,C.red,7),
    txt(360,245,"Loss is unlimited if the price rises · recall and squeeze risk",{s:11,c:C.red,w:700})
  ].join("")) }
];

/* =====================================================================
   PUBLIC API
===================================================================== */
window.FIGURES = F;
window.renderFigures = function(chId, secId){
  const list = F[chId + "|" + secId];
  if(!list || !list.length) return "";
  return list.map(f=>`<figure class="fig-card">
      <div class="fig-title">${f.title}</div>
      <div class="fig-body">${f.svg}</div>
      <figcaption class="fig-cap">${f.cap}</figcaption>
    </figure>`).join("");
};
window.figureCount = Object.values(F).reduce((s,a)=>s+a.length, 0);

})();
