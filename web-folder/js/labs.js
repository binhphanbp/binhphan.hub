/* =====================================================================
   BAF736 Investment Banking — Interactive Labs
   One lab per chapter + general illustration tools.
   Plain-canvas simulations, no external libraries.

   Song ngữ (11/2026): mọi nhãn, ô kết quả, trục biểu đồ và lời nhận xét
   đi theo chế độ ngôn ngữ của trang — "en", "vi" hoặc "bi" (tiếng Việt
   trước, tiếng Anh in nhạt bên dưới). Số viết theo quy ước của từng
   ngôn ngữ (7.25% ↔ 7,25%). Phần tính toán giữ nguyên.
   ===================================================================== */
(function(){
"use strict";

/* ---------- ngôn ngữ & định dạng số / language & number format ---------- */
function LG(){ return (window.I18N && window.I18N.lang) || "en"; }
/** Bộ định dạng theo một ngôn ngữ cố định — "bi" dùng quy ước tiếng Việt. */
function FMT(lg){
  const vi = lg !== "en", loc = vi ? "vi-VN" : "en-US";
  const n = (v,d)=>{ d = d==null?2:d; v = +v; if(!isFinite(v)) return String(v);
    if(Math.abs(v) < 0.5*Math.pow(10,-d)) v = 0;
    return v.toLocaleString(loc, {minimumFractionDigits:d, maximumFractionDigits:d}); };
  return { vi, n,
    p:   (v,d)=> n(v, d==null?2:d)+"%",
    usd: (v,d)=> "$"+n(v, d==null?2:d),
    m:   (v,d)=> vi ? n(v, d==null?1:d)+" triệu USD" : "$"+n(v, d==null?1:d)+"m",
    mS:  (v,d)=> vi ? n(v, d==null?1:d)+" tr USD"    : "$"+n(v, d==null?1:d)+"m",
    x:   (v,d)=> n(v, d==null?1:d)+"×" };
}
function cur(){ return FMT(LG()); }
/** Nhãn HTML ngắn: bi → tiếng Việt, dòng tiếng Anh nhạt bên dưới. */
function biHTML(vi, en){ return '<span class="bi-wrap">' + vi + '<span class="bi-alt bi-line" lang="en">'+en+'</span></span>'; }
function th(en, vi){ const lg = LG(); return lg==="en" ? en : (lg==="vi" || vi===en) ? vi : biHTML(vi, en); }
/** Chữ vẽ trên canvas: bi → "VI\nEN" (hai dòng). */
function tc(en, vi){ const lg = LG(); return lg==="en" ? en : (lg==="vi" || vi===en) ? vi : vi+"\n"+en; }
/** Chữ thuần một dòng: bi → "VI · EN". */
function tx(en, vi){ const lg = LG(); return lg==="en" ? en : (lg==="vi" || vi===en) ? vi : vi+" · "+en; }
/** Lời nhận xét: fn(f) dựng câu theo bộ định dạng f (f.vi cho biết ngôn ngữ). */
function nn(fn){ const lg = LG(); if(lg!=="bi") return fn(FMT(lg)); return biHTML(fn(FMT("vi")), fn(FMT("en"))); }
function NA(){ return LG()==="en" ? "n/a" : "không xác định"; }

/* ---------- plotting helpers ---------- */
function plot(canvas, opts){
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height;
  const {xmin,xmax,ymin,ymax} = opts;
  const xlabel = String(opts.xlabel||"").replace(/\n/g, "  ·  ");
  const yl = String(opts.ylabel||"").split("\n");
  const m = {l: yl.length>1 ? 84 : 70, r:18, t:16, b:42};
  ctx.clearRect(0,0,W,H);
  const X = x => m.l + (x-xmin)/(xmax-xmin)*(W-m.l-m.r);
  const Y = y => H-m.b - (y-ymin)/(ymax-ymin)*(H-m.t-m.b);
  ctx.font = "11px Arial"; ctx.fillStyle = "#8a92a3"; ctx.strokeStyle = "#eef1f6"; ctx.lineWidth = 1;
  const xt = ticks(xmin,xmax,6), yt = ticks(ymin,ymax,6);
  yt.forEach(v=>{ ctx.beginPath(); ctx.moveTo(m.l,Y(v)); ctx.lineTo(W-m.r,Y(v)); ctx.stroke();
    ctx.textAlign="right"; ctx.fillText(fmt(v), m.l-6, Y(v)+4); });
  xt.forEach(v=>{ ctx.beginPath(); ctx.moveTo(X(v),m.t); ctx.lineTo(X(v),H-m.b); ctx.stroke();
    ctx.textAlign="center"; ctx.fillText(fmt(v), X(v), H-m.b+16); });
  ctx.strokeStyle="#b8c0cf"; ctx.beginPath(); ctx.moveTo(m.l,m.t); ctx.lineTo(m.l,H-m.b); ctx.lineTo(W-m.r,H-m.b); ctx.stroke();
  ctx.fillStyle="#4b5568"; ctx.textAlign="center"; ctx.font="bold 11.5px Arial";
  ctx.fillText(xlabel, (m.l+W-m.r)/2, H-6);
  ctx.save(); ctx.translate(yl.length>1 ? 13 : 16,(m.t+H-m.b)/2); ctx.rotate(-Math.PI/2); ctx.fillText(yl[0],0,0);
  if(yl[1]){ ctx.font="italic 10.5px Arial"; ctx.fillStyle="#8a92a3"; ctx.fillText(yl[1],0,14); }
  ctx.restore();
  return {X,Y,ctx,W,H,m};
}
function ticks(a,b,n){ const out=[]; const step=(b-a)/n; for(let i=0;i<=n;i++) out.push(a+i*step); return out; }
function fmt(v){
  const f = cur(), a = Math.abs(v);
  if(a>=1000) return f.n(Math.round(v),0);
  if(a>=100) return f.n(v,0);
  if(a>=10) return f.n(v,1);
  return f.n(v,2).replace(/[.,]00$/,"");
}
function line(p, pts, color, width, dash){
  const {ctx,X,Y}=p; ctx.save(); ctx.strokeStyle=color; ctx.lineWidth=width||2;
  if(dash) ctx.setLineDash(dash);
  ctx.beginPath(); pts.forEach((q,i)=> i? ctx.lineTo(X(q[0]),Y(q[1])) : ctx.moveTo(X(q[0]),Y(q[1])));
  ctx.stroke(); ctx.restore();
}
function dot(p, x, y, color, r, label, dy){
  const {ctx,X,Y}=p; ctx.fillStyle=color; ctx.beginPath(); ctx.arc(X(x),Y(y),r||5,0,7); ctx.fill();
  if(label){
    ctx.font="bold 11.5px Arial";
    /* nhãn sát mép phải thì đặt sang trái điểm, khỏi bị cắt */
    const tran = X(x)+8+ctx.measureText(label).width > p.W-4;
    ctx.textAlign = tran ? "right" : "left";
    ctx.fillText(label, tran ? X(x)-8 : X(x)+8, Y(y)+(dy||-8));
  }
}
function bars(canvas, items, opts){
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height, m={l:60,r:18,t:24,b:52};
  ctx.clearRect(0,0,W,H);
  const vals = items.map(i=>i[1]);
  const max = Math.max(...vals.map(Math.abs), 1);
  const ymin = Math.min(0, Math.min(...vals)*1.15), ymax = Math.max(0, max*1.15);
  const Y = y => H-m.b - (y-ymin)/(ymax-ymin)*(H-m.t-m.b);
  const bw = (W-m.l-m.r)/items.length*0.6, gap=(W-m.l-m.r)/items.length;
  ctx.strokeStyle="#eef1f6"; ticks(ymin,ymax,5).forEach(v=>{ ctx.beginPath(); ctx.moveTo(m.l,Y(v)); ctx.lineTo(W-m.r,Y(v)); ctx.stroke();
    ctx.fillStyle="#8a92a3"; ctx.font="11px Arial"; ctx.textAlign="right"; ctx.fillText(fmt(v), m.l-6, Y(v)+4); });
  ctx.strokeStyle="#b8c0cf"; ctx.beginPath(); ctx.moveTo(m.l,Y(0)); ctx.lineTo(W-m.r,Y(0)); ctx.stroke();
  items.forEach((it,i)=>{
    const x = m.l + i*gap + (gap-bw)/2, v = it[1];
    ctx.fillStyle = it[2] || (v>=0? "#14507d" : "#dc2626");
    const top = Math.min(Y(v), Y(0)), h = Math.abs(Y(v)-Y(0));
    ctx.fillRect(x, top, bw, h);
    const lb = String(it[0]).split("\n");
    ctx.fillStyle="#4b5568"; ctx.font="bold 11px Arial"; ctx.textAlign="center";
    ctx.fillText(lb[0], x+bw/2, H-m.b+18);
    if(lb[1]){ ctx.fillStyle="#8a92a3"; ctx.font="italic 10.5px Arial"; ctx.fillText(lb[1], x+bw/2, H-m.b+32); }
    ctx.fillStyle="#1c2333"; ctx.font="bold 11.5px Arial";
    ctx.fillText(opts && opts.fmt? opts.fmt(v) : fmt(v), x+bw/2, v>=0? top-6 : top+h+16);
  });
}
function pill(label, value, cls){ return '<div class="result-pill '+(cls||'')+'"><div class="rl">'+label+'</div><div class="rv">'+value+'</div></div>'; }
function num(id){ const el=document.getElementById(id); return parseFloat(el.value)||0; }
function pct(v,d){ return cur().p(v,d); }
function money(v,d){ return cur().usd(v, d==null?1:d); }
function mil(v,d){ return cur().mS(v,d); }
function bind(el, ids, fn){ ids.forEach(id=>{ const n=document.getElementById(id); if(n) n.addEventListener("input", fn); }); fn(); }

/* =====================================================================
   LAB DEFINITIONS (one per chapter)
===================================================================== */
window.LABS = {

/* ---------- Chapter 1: WACC & cost of capital ---------- */
1: {
  title: "Lab 1 · WACC & the Cost of Capital",
  guide: "Every valuation an investment bank produces discounts cash flows at the WACC. Build it from the ground up: CAPM gives the cost of equity, the tax shield cheapens debt, and the capital-structure weights blend them. Then watch the WACC line as you change the equity weight — and note that with a fixed beta the relationship is linear, which is exactly why the real trade-off (rising r<sub>e</sub> and distress costs) matters.",
  render(el){
    el.innerHTML = `
    <div class="lab-panel">
      <div class="lab-controls">
        <h4>${th("Cost of equity (CAPM)","Chi phí vốn chủ sở hữu (CAPM)")}</h4>
        <div class="ctl"><label>${th("Risk-free rate r<sub>f</sub> (%)","Lãi suất phi rủi ro r<sub>f</sub> (%)")}</label><input type="number" id="w_rf" value="3" step="0.25"></div>
        <div class="ctl"><label>${th("Equity beta β","Hệ số beta vốn chủ sở hữu β")}</label><input type="number" id="w_beta" value="1.10" step="0.05"></div>
        <div class="ctl"><label>${th("Equity risk premium (%)","Phần bù rủi ro vốn chủ sở hữu (%)")}</label><input type="number" id="w_erp" value="5.5" step="0.25"></div>
        <h4 style="margin-top:12px">${th("Debt &amp; structure","Nợ vay &amp; cơ cấu vốn")}</h4>
        <div class="ctl"><label>${th("Pre-tax cost of debt r<sub>d</sub> (%)","Chi phí nợ trước thuế r<sub>d</sub> (%)")}</label><input type="number" id="w_rd" value="6" step="0.25"></div>
        <div class="ctl"><label>${th("Tax rate (%)","Thuế suất (%)")}</label><input type="number" id="w_tax" value="25" step="1"></div>
        <div class="ctl"><label>${th("Equity weight E/V","Tỷ trọng vốn chủ sở hữu E/V")} <span class="val" id="w_ev">60%</span></label>
          <input type="range" id="w_e" min="0" max="100" step="1" value="60"></div>
      </div>
      <div class="lab-output">
        <div class="result-strip" id="w_out"></div>
        <canvas id="w_c" width="640" height="330"></canvas>
        <p class="small muted" id="w_note" style="margin-top:10px"></p>
      </div>
    </div>`;
    const upd = ()=>{
      const rf=num("w_rf"), beta=num("w_beta"), erp=num("w_erp"), rd=num("w_rd"), tax=num("w_tax");
      const eW = num("w_e");
      document.getElementById("w_ev").textContent = eW+"%";
      const re = rf + beta*erp, atRd = rd*(1-tax/100);
      const wacc = (eW/100)*re + (1-eW/100)*atRd;
      document.getElementById("w_out").innerHTML =
        pill(th("Cost of equity r<sub>e</sub>","Chi phí vốn CSH r<sub>e</sub>"), pct(re)) +
        pill(th("After-tax r<sub>d</sub>","r<sub>d</sub> sau thuế"), pct(atRd)) +
        pill("WACC", pct(wacc), wacc<re?"good":"") +
        pill(th("Debt weight D/V","Tỷ trọng nợ D/V"), pct(100-eW,0));
      const pts=[]; for(let e=0;e<=100;e+=2) pts.push([e, (e/100)*re + (1-e/100)*atRd]);
      const ys=pts.map(p=>p[1]);
      const p = plot(document.getElementById("w_c"), {xmin:0,xmax:100,ymin:Math.min(...ys)*0.9,ymax:Math.max(...ys)*1.06,
        xlabel:tc("Equity weight E/V (%)","Tỷ trọng vốn CSH E/V (%)"), ylabel:"WACC (%)"});
      line(p, pts, "#14507d", 3);
      dot(p, eW, wacc, "#dc2626", 6, "WACC "+pct(wacc));
      document.getElementById("w_note").innerHTML = nn(f => f.vi
        ? `Với tỷ trọng vốn chủ sở hữu <b>${eW}%</b>, WACC bằng <b>${f.p(wacc)}</b>. Nợ vay rẻ hơn (${f.p(atRd)} sau thuế so với ${f.p(re)} của vốn chủ sở hữu) vì nợ được ưu tiên hoàn trả <i>và</i> lãi vay được khấu trừ khi tính thuế — nên tăng đòn bẩy sẽ kéo WACC trượt xuống dọc theo đường này. Trên thực tế β và r<sub>d</sub> đều tăng khi đòn bẩy tăng, nên đường thật có dạng chữ U và tồn tại một cơ cấu vốn tối ưu.`
        : `At <b>${eW}%</b> equity the WACC is <b>${f.p(wacc)}</b>. Debt is cheaper (${f.p(atRd)} after tax vs ${f.p(re)} for equity) because it is senior <i>and</i> tax-deductible — so adding leverage slides the WACC down this line. In reality β and r<sub>d</sub> rise with leverage, so the true curve is U-shaped and an optimum exists.`);
    };
    bind(el, ["w_rf","w_beta","w_erp","w_rd","w_tax","w_e"], upd);
  }
},

/* ---------- Chapter 2: IPO / underwriting economics ---------- */
2: {
  title: "Lab 2 · IPO &amp; Underwriting Economics",
  guide: "Price a primary equity offering the way an ECM desk does. Set the deal size, offer price and gross spread, then exercise the greenshoe. Watch how much reaches the issuer versus the underwriting syndicate, and how underpricing transfers value to the investors who received an allocation.",
  render(el){
    el.innerHTML = `
    <div class="lab-panel">
      <div class="lab-controls">
        <h4>${th("Deal terms","Điều khoản đợt chào bán")}</h4>
        <div class="ctl"><label>${th("Base shares offered (m)","Số cổ phần chào bán cơ sở (triệu)")}</label><input type="number" id="u_sh" value="10" step="0.5"></div>
        <div class="ctl"><label>${th("Offer price ($)","Giá chào bán ($)")}</label><input type="number" id="u_p" value="20" step="0.5"></div>
        <div class="ctl"><label>${th("Gross spread","Phí bảo lãnh gộp (gross spread)")} <span class="val" id="u_sv">6.0%</span></label>
          <input type="range" id="u_s" min="0" max="10" step="0.25" value="6"></div>
        <div class="ctl"><label>${th("Greenshoe exercised","Tỷ lệ thực hiện quyền greenshoe")} <span class="val" id="u_gv">15%</span></label>
          <input type="range" id="u_g" min="0" max="15" step="1" value="15"></div>
        <h4 style="margin-top:12px">${th("Aftermarket","Thị trường sau phát hành")}</h4>
        <div class="ctl"><label>${th("First-day closing price ($)","Giá đóng cửa ngày giao dịch đầu tiên ($)")}</label><input type="number" id="u_d1" value="24" step="0.5"></div>
      </div>
      <div class="lab-output">
        <div class="result-strip" id="u_out"></div>
        <canvas id="u_c" width="640" height="330"></canvas>
        <p class="small muted" id="u_note" style="margin-top:10px"></p>
      </div>
    </div>`;
    const upd = ()=>{
      const sh=num("u_sh"), p=num("u_p"), s=num("u_s"), g=num("u_g"), d1=num("u_d1");
      const c = cur();
      document.getElementById("u_sv").textContent = c.p(s,2);
      document.getElementById("u_gv").textContent = g+"%";
      const gsShares = sh*g/100, total = sh+gsShares;
      const gross = total*p, fee = gross*s/100, net = gross-fee;
      const leftOnTable = total*(d1-p);
      document.getElementById("u_out").innerHTML =
        pill(th("Total shares (m)","Tổng số cổ phần (triệu)"), c.n(total,2)) +
        pill(th("Gross proceeds","Tiền thu gộp"), mil(gross,1)) +
        pill(th("Underwriting fee","Phí bảo lãnh"), mil(fee,1), "bad") +
        pill(th("Net to issuer","Tổ chức phát hành nhận ròng"), mil(net,1), "good") +
        pill(th("Left on table","Tiền bỏ lại trên bàn"), mil(leftOnTable,1), leftOnTable>0?"bad":"good");
      bars(document.getElementById("u_c"),
        [[tc("Gross proceeds","Tiền thu gộp"), gross, "#14507d"],[tc("Underwriting fee","Phí bảo lãnh"), -fee, "#dc2626"],
         [tc("Net to issuer","Phát hành nhận ròng"), net, "#0e9f6e"],[tc("Left on table","Bỏ lại trên bàn"), -leftOnTable, "#d97706"]],
        {fmt:v=>mil(v,0)});
      document.getElementById("u_note").innerHTML = nn(f => f.vi
        ? `Tổ hợp bảo lãnh giữ lại <b>${f.m(fee,1)}</b> (${f.p(s,2)} của ${f.m(gross,1)}). Tổ chức phát hành nhận <b>${f.m(net,1)}</b>. ` +
          (leftOnTable>0
            ? `Vì cổ phiếu đóng cửa ở ${f.usd(d1)} so với giá chào bán ${f.usd(p)}, thêm <b>${f.m(leftOnTable,1)}</b> giá trị đã chuyển sang các nhà đầu tư được phân bổ — xung đột kinh điển về định giá thấp giữa tổ chức phát hành và tổ chức bảo lãnh.`
            : `Cổ phiếu đóng cửa bằng hoặc thấp hơn giá chào bán nên không có tiền bỏ lại trên bàn. Khi đó tổ hợp bảo lãnh thường đóng vị thế phân bổ vượt mức bằng cách mua lại cổ phiếu trên thị trường — qua đó đỡ giá — thay vì thực hiện quyền greenshoe.`)
        : `The syndicate keeps <b>${f.m(fee,1)}</b> (${f.p(s,2)} of ${f.m(gross,1)}). The issuer receives <b>${f.m(net,1)}</b>. ` +
          (leftOnTable>0
            ? `Because the shares closed at ${f.usd(d1)} versus a ${f.usd(p)} offer, a further <b>${f.m(leftOnTable,1)}</b> of value was transferred to allocated investors — the classic underpricing conflict between issuer and underwriter.`
            : `The stock closed at or below the offer price, so no value was left on the table. In that case the syndicate normally covers its over-allotment by buying shares back in the market — supporting the price — rather than exercising the greenshoe.`));
    };
    bind(el, ["u_sh","u_p","u_s","u_g","u_d1"], upd);
  }
},

/* ---------- Chapter 3: M&A accretion / dilution ---------- */
3: {
  title: "Lab 3 · M&amp;A Accretion / Dilution",
  guide: "The single most-asked question in a buy-side pitch: what does this deal do to the acquirer's EPS? Set the premium, the cash/stock mix, the financing cost and the synergies. The curve shows accretion across the whole range of stock financing — find the mix and premium at which the deal crosses from accretive to dilutive.",
  render(el){
    el.innerHTML = `
    <div class="lab-panel">
      <div class="lab-controls">
        <h4>${th("Acquirer","Bên mua")}</h4>
        <div class="ctl"><label>EPS ($)</label><input type="number" id="m_eps" value="4.00" step="0.1"></div>
        <div class="ctl"><label>${th("Shares (m)","Số cổ phần (triệu)")}</label><input type="number" id="m_sh" value="100" step="5"></div>
        <div class="ctl"><label>${th("Share price ($)","Giá cổ phiếu ($)")}</label><input type="number" id="m_px" value="60" step="1"></div>
        <h4 style="margin-top:12px">${th("Target","Doanh nghiệp mục tiêu")}</h4>
        <div class="ctl"><label>${th("Net income ($m)","Lợi nhuận ròng (triệu $)")}</label><input type="number" id="m_tni" value="150" step="5"></div>
        <div class="ctl"><label>${th("Shares (m)","Số cổ phần (triệu)")}</label><input type="number" id="m_tsh" value="50" step="5"></div>
        <div class="ctl"><label>${th("Unaffected price ($)","Giá trước khi có tin thương vụ ($)")}</label><input type="number" id="m_tpx" value="40" step="1"></div>
        <h4 style="margin-top:12px">${th("Deal terms","Điều khoản thương vụ")}</h4>
        <div class="ctl"><label>${th("Premium","Phần bù")} <span class="val" id="m_prv">25%</span></label>
          <input type="range" id="m_pr" min="0" max="80" step="1" value="25"></div>
        <div class="ctl"><label>${th("% financed with stock","% thanh toán bằng cổ phiếu")} <span class="val" id="m_stv">60%</span></label>
          <input type="range" id="m_st" min="0" max="100" step="5" value="60"></div>
        <div class="ctl"><label>${th("After-tax cost of new debt (%)","Chi phí sau thuế của nợ vay mới (%)")}</label><input type="number" id="m_kd" value="4.5" step="0.25"></div>
        <div class="ctl"><label>${th("After-tax synergies ($m)","Cộng hưởng sau thuế (triệu $)")}</label><input type="number" id="m_syn" value="20" step="5"></div>
      </div>
      <div class="lab-output">
        <div class="result-strip" id="m_out"></div>
        <canvas id="m_c" width="640" height="330"></canvas>
        <p class="small muted" id="m_note" style="margin-top:10px"></p>
      </div>
    </div>`;
    const calc = (stockPct, prem)=>{
      const eps=num("m_eps"), ash=num("m_sh"), apx=num("m_px");
      const tni=num("m_tni"), tsh=num("m_tsh"), tpx=num("m_tpx");
      const kd=num("m_kd"), syn=num("m_syn");
      const offer = tpx*(1+prem/100);
      const equityPurchase = offer*tsh;
      const stock = equityPurchase*stockPct/100, cash = equityPurchase-stock;
      const newSh = apx>0? stock/apx : 0;
      const interest = cash*kd/100;
      const aNi = eps*ash;
      const pfNi = aNi + tni + syn - interest;
      const pfSh = ash + newSh;
      const pfEps = pfSh>0? pfNi/pfSh : 0;
      return {offer, equityPurchase, newSh, interest, pfNi, pfSh, pfEps,
              accr: eps>0? pfEps/eps-1 : 0, eps};
    };
    const upd = ()=>{
      const stockPct=num("m_st"), prem=num("m_pr");
      const c = cur();
      document.getElementById("m_prv").textContent = prem+"%";
      document.getElementById("m_stv").textContent = stockPct+"%";
      const r = calc(stockPct, prem);
      document.getElementById("m_out").innerHTML =
        pill(th("Offer price","Giá chào mua"), c.usd(r.offer)) +
        pill(th("Purchase equity","Giá mua vốn chủ sở hữu"), mil(r.equityPurchase,0)) +
        pill(th("New shares (m)","Cổ phần phát hành mới (triệu)"), c.n(r.newSh,1)) +
        pill(th("Pro forma EPS","EPS hợp nhất (pro forma)"), c.usd(r.pfEps,3)) +
        pill(th("Accretion","Tăng/(giảm) EPS"), pct(r.accr*100), r.accr>=0?"good":"bad");
      const pts=[]; for(let s=0;s<=100;s+=2){ const x=calc(s,prem); pts.push([s, x.accr*100]); }
      const ys=pts.map(p=>p[1]);
      const lo=Math.min(...ys), hi=Math.max(...ys), pad=Math.max(1,(hi-lo)*0.15);
      const p = plot(document.getElementById("m_c"), {xmin:0,xmax:100,ymin:lo-pad,ymax:hi+pad,
        xlabel:tc("% of consideration paid in stock","% giá trị thanh toán bằng cổ phiếu"), ylabel:tc("Accretion / (dilution) %","Tăng / (giảm) EPS %")});
      line(p, [[0,0],[100,0]], "#b8c0cf", 1.5, [5,4]);
      line(p, pts, "#14507d", 3);
      dot(p, stockPct, r.accr*100, r.accr>=0?"#0e9f6e":"#dc2626", 6, pct(r.accr*100));
      const paidPe = r.pfNi? (r.equityPurchase/num("m_tni")) : 0;
      const acqPe = num("m_px")/num("m_eps");
      document.getElementById("m_note").innerHTML = nn(f => f.vi
        ? `EPS hợp nhất là <b>${f.usd(r.pfEps,3)}</b> so với <b>${f.usd(r.eps)}</b> khi đứng riêng → <b>${r.accr>=0?"làm tăng":"làm giảm"} EPS ${f.p(Math.abs(r.accr*100))}</b>. ` +
          `Bên mua đang được giao dịch ở mức <b>${f.x(acqPe,1)}</b> lợi nhuận và trả <b>${f.x(paidPe,1)}</b> cho doanh nghiệp mục tiêu. ` +
          (acqPe > paidPe
            ? `Vì trả mức P/E <i>thấp hơn</i> P/E của chính mình, riêng phần thanh toán bằng cổ phiếu đã làm tăng EPS.`
            : `Vì trả mức P/E <i>cao hơn</i> P/E của chính mình, phần thanh toán bằng cổ phiếu làm giảm EPS — thương vụ phải dựa vào nợ vay rẻ và cộng hưởng mới đạt hiệu quả.`)
        : `Pro forma EPS is <b>${f.usd(r.pfEps,3)}</b> vs a standalone <b>${f.usd(r.eps)}</b> → <b>${r.accr>=0?"accretive":"dilutive"} ${f.p(Math.abs(r.accr*100))}</b>. ` +
          `The acquirer trades at <b>${f.x(acqPe,1)}</b> earnings and is paying <b>${f.x(paidPe,1)}</b> for the target. ` +
          (acqPe > paidPe
            ? `Since it is paying a <i>lower</i> P/E than its own, the stock component itself is accretive.`
            : `Since it is paying a <i>higher</i> P/E than its own, the stock component is dilutive — the deal depends on cheap debt and synergies to work.`));
    };
    bind(el, ["m_eps","m_sh","m_px","m_tni","m_tsh","m_tpx","m_pr","m_st","m_kd","m_syn"], upd);
  }
},

/* ---------- Chapter 4: fund fees & investor net return ---------- */
4: {
  title: "Lab 4 · Fund Fees &amp; Investor Net Return",
  guide: "Asset management lives on two fee lines. Set the management fee, the carry and the hurdle, then sweep the gross return. The kink in the line is the hurdle: below it the manager earns only the management fee; above it carry takes a fixed share of every extra point. Note that the management fee is charged even when the gross return is negative.",
  render(el){
    el.innerHTML = `
    <div class="lab-panel">
      <div class="lab-controls">
        <h4>${th("Fund terms","Điều khoản quỹ")}</h4>
        <div class="ctl"><label>${th("AUM ($m)","Tài sản quản lý – AUM (triệu $)")}</label><input type="number" id="f_aum" value="500" step="50"></div>
        <div class="ctl"><label>${th("Management fee","Phí quản lý")} <span class="val" id="f_mv">2.00%</span></label>
          <input type="range" id="f_m" min="0" max="3" step="0.05" value="2"></div>
        <div class="ctl"><label>${th("Carried interest","Phí thưởng hiệu quả (carry)")} <span class="val" id="f_cv">20%</span></label>
          <input type="range" id="f_c" min="0" max="30" step="1" value="20"></div>
        <div class="ctl"><label>${th("Hurdle rate","Ngưỡng sinh lời tối thiểu (hurdle)")} <span class="val" id="f_hv">8.0%</span></label>
          <input type="range" id="f_h" min="0" max="15" step="0.5" value="8"></div>
        <h4 style="margin-top:12px">${th("Performance","Kết quả đầu tư")}</h4>
        <div class="ctl"><label>${th("Gross return","Lợi nhuận gộp")} <span class="val" id="f_gv">15.0%</span></label>
          <input type="range" id="f_g" min="-10" max="40" step="0.5" value="15"></div>
      </div>
      <div class="lab-output">
        <div class="result-strip" id="f_out"></div>
        <canvas id="f_c2" width="640" height="330"></canvas>
        <p class="small muted" id="f_note" style="margin-top:10px"></p>
      </div>
    </div>`;
    const netOf = (g, mf, carry, hurdle)=>{
      const excess = Math.max(g-hurdle, 0);
      const perf = carry/100*excess;
      return {perf, net: g - mf - perf};
    };
    const upd = ()=>{
      const aum=num("f_aum"), mf=num("f_m"), carry=num("f_c"), hurdle=num("f_h"), g=num("f_g");
      document.getElementById("f_mv").textContent = pct(mf,2);
      document.getElementById("f_cv").textContent = carry+"%";
      document.getElementById("f_hv").textContent = pct(hurdle,1);
      document.getElementById("f_gv").textContent = pct(g,1);
      const r = netOf(g, mf, carry, hurdle);
      const mgmtRev = aum*mf/100, perfRev = aum*r.perf/100;
      document.getElementById("f_out").innerHTML =
        pill(th("Performance fee","Phí thưởng hiệu quả"), pct(r.perf)) +
        pill(th("Total fee drag","Tổng phí bị khấu trừ"), pct(mf+r.perf), "bad") +
        pill(th("Investor net","Nhà đầu tư nhận ròng"), pct(r.net), r.net>=0?"good":"bad") +
        pill(th("Manager revenue","Doanh thu nhà quản lý"), mil(mgmtRev+perfRev,1));
      const pts=[], pts2=[];
      for(let x=-10;x<=40;x+=0.5){ pts.push([x, netOf(x,mf,carry,hurdle).net]); pts2.push([x,x]); }
      const p = plot(document.getElementById("f_c2"), {xmin:-10,xmax:40,ymin:-14,ymax:40,
        xlabel:tc("Gross return (%)","Lợi nhuận gộp (%)"), ylabel:tc("Investor net return (%)","Lợi nhuận ròng của nhà đầu tư (%)")});
      line(p, pts2, "#c9d0dd", 1.5, [5,4]);
      line(p, pts, "#14507d", 3);
      line(p, [[hurdle,-14],[hurdle,40]], "#d97706", 1.5, [4,4]);
      dot(p, g, r.net, r.net>=0?"#0e9f6e":"#dc2626", 6, pct(r.net));
      document.getElementById("f_note").innerHTML = nn(f => f.vi
        ? (g>hurdle
            ? `Lợi nhuận gộp ${f.p(g)} vượt ngưỡng ${f.p(hurdle)} thêm <b>${f.p(g-hurdle)}</b>, nên phí thưởng hiệu quả <b>${f.p(r.perf)}</b> được tính thêm ngoài phí quản lý ${f.p(mf)}. Nhà đầu tư giữ lại <b>${f.p(r.net)}</b>; nhà quản lý thu <b>${f.m(mgmtRev+perfRev,1)}</b> trên ${f.m(aum,0)} tài sản quản lý.`
            : `Lợi nhuận gộp ${f.p(g)} thấp hơn ngưỡng ${f.p(hurdle)}, nên <b>không có phí thưởng hiệu quả</b> — nhưng phí quản lý ${f.p(mf)} vẫn bị thu, nhà đầu tư còn lại <b>${f.p(r.net)}</b>. Vì vậy quy mô tài sản quản lý, chứ không chỉ kết quả đầu tư, quyết định doanh thu của nhà quản lý.`) +
          ` Đường nét đứt màu xám là mốc so sánh khi không thu phí; đường dọc màu cam đánh dấu ngưỡng sinh lời.`
        : (g>hurdle
            ? `Gross ${f.p(g)} clears the ${f.p(hurdle)} hurdle by <b>${f.p(g-hurdle)}</b>, so carry of <b>${f.p(r.perf)}</b> applies on top of the ${f.p(mf)} management fee. The investor keeps <b>${f.p(r.net)}</b>; the manager earns <b>${f.m(mgmtRev+perfRev,1)}</b> on ${f.m(aum,0)} of AUM.`
            : `Gross ${f.p(g)} is below the ${f.p(hurdle)} hurdle, so <b>no carry</b> is earned — but the ${f.p(mf)} management fee is still charged, leaving the investor <b>${f.p(r.net)}</b>. This is why AUM, not just performance, drives manager revenue.`) +
          ` The dashed grey line is a zero-fee benchmark; the vertical amber line marks the hurdle.`);
    };
    bind(el, ["f_aum","f_m","f_c","f_h","f_g"], upd);
  }
},

/* ---------- Chapter 5: comparable companies valuation ---------- */
5: {
  title: "Lab 5 · Comparable Companies Valuation",
  guide: "Build a trading-comps valuation and bridge from enterprise value to value per share. Change the multiple to see the whole valuation range, and compare the EV/EBITDA answer with the P/E answer — a large gap between them almost always means the subject company's leverage differs from its peers'.",
  render(el){
    el.innerHTML = `
    <div class="lab-panel">
      <div class="lab-controls">
        <h4>${th("Subject company","Doanh nghiệp cần định giá")}</h4>
        <div class="ctl"><label>${th("EBITDA ($m)","EBITDA (triệu $)")}</label><input type="number" id="c_eb" value="120" step="5"></div>
        <div class="ctl"><label>${th("Net debt ($m)","Nợ ròng (triệu $)")}</label><input type="number" id="c_nd" value="200" step="10"></div>
        <div class="ctl"><label>${th("Diluted shares (m)","Số cổ phần pha loãng (triệu)")}</label><input type="number" id="c_sh" value="50" step="1"></div>
        <div class="ctl"><label>EPS ($)</label><input type="number" id="c_eps" value="3.00" step="0.1"></div>
        <h4 style="margin-top:12px">${th("Peer multiples","Bội số của nhóm so sánh")}</h4>
        <div class="ctl"><label>${th("Median EV/EBITDA","EV/EBITDA trung vị")} <span class="val" id="c_mv">9.0×</span></label>
          <input type="range" id="c_m" min="3" max="20" step="0.5" value="9"></div>
        <div class="ctl"><label>${th("Median P/E","P/E trung vị")} <span class="val" id="c_pv">16×</span></label>
          <input type="range" id="c_p" min="5" max="40" step="1" value="16"></div>
      </div>
      <div class="lab-output">
        <div class="result-strip" id="c_out"></div>
        <canvas id="c_c" width="640" height="330"></canvas>
        <p class="small muted" id="c_note" style="margin-top:10px"></p>
      </div>
    </div>`;
    const upd = ()=>{
      const eb=num("c_eb"), nd=num("c_nd"), sh=num("c_sh"), eps=num("c_eps"), m=num("c_m"), pe=num("c_p");
      const c = cur();
      document.getElementById("c_mv").textContent = c.x(m,1);
      document.getElementById("c_pv").textContent = pe+"×";
      const ev = eb*m, eq = ev-nd, ps = sh>0? eq/sh : 0, psPe = eps*pe;
      document.getElementById("c_out").innerHTML =
        pill(th("Implied EV","EV ngụ ý"), mil(ev,0)) +
        pill(th("Equity value","Giá trị vốn chủ sở hữu"), mil(eq,0)) +
        pill(th("$/share (EV method)","$/cổ phần (theo EV)"), c.usd(ps), "good") +
        pill(th("$/share (P/E method)","$/cổ phần (theo P/E)"), c.usd(psPe));
      const pts=[]; for(let x=3;x<=20;x+=0.25){ const e=eb*x-nd; pts.push([x, sh>0? e/sh : 0]); }
      const ys=pts.map(p=>p[1]);
      const p = plot(document.getElementById("c_c"), {xmin:3,xmax:20,ymin:Math.min(...ys,psPe)*0.9,ymax:Math.max(...ys,psPe)*1.08,
        xlabel:tc("EV/EBITDA multiple (×)","Bội số EV/EBITDA (×)"), ylabel:tc("Implied value per share ($)","Giá trị ngụ ý mỗi cổ phần ($)")});
      line(p, pts, "#14507d", 3);
      line(p, [[3,psPe],[20,psPe]], "#d97706", 2, [6,4]);
      dot(p, m, ps, "#0e9f6e", 6, c.usd(ps));
      const gap = psPe-ps;
      document.getElementById("c_note").innerHTML = nn(f => f.vi
        ? `Ở mức <b>${f.x(m,1)}</b> EV/EBITDA, EV ngụ ý là <b>${f.m(ev,0)}</b>; trừ <b>${f.m(nd,0)}</b> nợ ròng còn <b>${f.m(eq,0)}</b> giá trị vốn chủ sở hữu, tức <b>${f.usd(ps)}</b> mỗi cổ phần. ` +
          `Đường màu cam là kết quả theo P/E (<b>${f.usd(psPe)}</b>), chênh lệch <b>${f.usd(Math.abs(gap))}</b>. ` +
          (Math.abs(gap) > ps*0.15
            ? `Chênh lệch lớn như vậy thường cho thấy doanh nghiệp dùng đòn bẩy cao (hoặc thấp) hơn nhóm so sánh, hoặc EPS chứa khoản mục bất thường không lặp lại. EV/EBITDA trung lập với cơ cấu vốn, nên hãy tin nó trước và chuẩn hoá EPS trước khi dựa vào P/E.`
            : `Hai phương pháp tương đối khớp nhau — dấu hiệu tốt cho thấy đòn bẩy và chất lượng lợi nhuận tương đồng với nhóm so sánh.`)
        : `At <b>${f.x(m,1)}</b> EV/EBITDA the implied EV is <b>${f.m(ev,0)}</b>; subtracting <b>${f.m(nd,0)}</b> of net debt gives <b>${f.m(eq,0)}</b> of equity, or <b>${f.usd(ps)}</b> per share. ` +
          `The amber line is the P/E answer (<b>${f.usd(psPe)}</b>), a gap of <b>${f.usd(Math.abs(gap))}</b>. ` +
          (Math.abs(gap) > ps*0.15
            ? `A gap that large usually means the subject is more (or less) leveraged than its peers, or that EPS contains non-recurring items. EV/EBITDA is capital-structure neutral, so trust it first and normalise EPS before relying on the P/E.`
            : `The two methods broadly agree, which is a good sign that leverage and earnings quality are comparable to the peer set.`));
    };
    bind(el, ["c_eb","c_nd","c_sh","c_eps","c_m","c_p"], upd);
  }
},

/* ---------- Chapter 6: margin trading & leverage ---------- */
6: {
  title: "Lab 6 · Margin Trading &amp; Leverage",
  guide: "Margin lending is how brokers monetise the secondary market — and how clients get into trouble. Set the initial and maintenance margins, then move the price. The chart shows the investor's return on equity against the unlevered return; the red line marks the margin-call price at which the broker demands more cash or liquidates.",
  render(el){
    el.innerHTML = `
    <div class="lab-panel">
      <div class="lab-controls">
        <h4>${th("Position","Vị thế")}</h4>
        <div class="ctl"><label>${th("Shares purchased","Số cổ phiếu mua")}</label><input type="number" id="g_n" value="2000" step="100"></div>
        <div class="ctl"><label>${th("Purchase price ($)","Giá mua ($)")}</label><input type="number" id="g_p" value="60" step="1"></div>
        <h4 style="margin-top:12px">${th("Margin requirements","Yêu cầu ký quỹ")}</h4>
        <div class="ctl"><label>${th("Initial margin","Tỷ lệ ký quỹ ban đầu")} <span class="val" id="g_iv">50%</span></label>
          <input type="range" id="g_i" min="10" max="100" step="5" value="50"></div>
        <div class="ctl"><label>${th("Maintenance margin","Tỷ lệ ký quỹ duy trì")} <span class="val" id="g_mv">30%</span></label>
          <input type="range" id="g_m" min="5" max="90" step="5" value="30"></div>
        <h4 style="margin-top:12px">${th("Market move","Biến động thị trường")}</h4>
        <div class="ctl"><label>${th("Price change","Thay đổi giá")} <span class="val" id="g_dv">−20%</span></label>
          <input type="range" id="g_d" min="-70" max="70" step="1" value="-20"></div>
      </div>
      <div class="lab-output">
        <div class="result-strip" id="g_out"></div>
        <canvas id="g_c" width="640" height="330"></canvas>
        <p class="small muted" id="g_note" style="margin-top:10px"></p>
      </div>
    </div>`;
    const upd = ()=>{
      const n=num("g_n"), p0=num("g_p"), im=num("g_i"), mm=num("g_m"), d=num("g_d");
      const c = cur();
      document.getElementById("g_iv").textContent = im+"%";
      document.getElementById("g_mv").textContent = mm+"%";
      document.getElementById("g_dv").textContent = (d>=0?"+":"−")+Math.abs(d)+"%";
      const posVal = n*p0, equity0 = posVal*im/100, loan = posVal-equity0;
      const lev = im>0? 100/im : 0;
      const callPx = mm<100? p0*(1-im/100)/(1-mm/100) : 0;
      const p1 = p0*(1+d/100), mv1 = n*p1, eq1 = mv1-loan;
      const ret = equity0>0? (eq1-equity0)/equity0*100 : 0;
      const called = p1 <= callPx;
      document.getElementById("g_out").innerHTML =
        pill(th("Leverage","Đòn bẩy"), c.x(lev,2)) +
        pill(th("Equity posted","Vốn tự có ban đầu"), money(equity0,0)) +
        pill(th("Margin call price","Giá bị gọi ký quỹ"), c.usd(callPx), "bad") +
        pill(th("Equity now","Vốn tự có hiện tại"), money(eq1,0), eq1>=equity0?"good":"bad") +
        pill(th("Return on equity","Tỷ suất sinh lời trên vốn tự có"), pct(ret), ret>=0?"good":"bad");
      const pts=[], pts2=[];
      for(let x=-70;x<=70;x+=1){
        const px=p0*(1+x/100), e=n*px-loan;
        pts.push([x, equity0>0? (e-equity0)/equity0*100 : 0]);
        pts2.push([x, x]);
      }
      const p = plot(document.getElementById("g_c"), {xmin:-70,xmax:70,ymin:-160,ymax:160,
        xlabel:tc("Price change (%)","Thay đổi giá (%)"), ylabel:tc("Return (%)","Tỷ suất sinh lời (%)")});
      line(p, [[-70,0],[70,0]], "#c9d0dd", 1.5, [5,4]);
      line(p, pts2, "#8a92a3", 2, [6,4]);
      line(p, pts, "#14507d", 3);
      const callPct = (callPx/p0-1)*100;
      if(callPct>=-70 && callPct<=70) line(p, [[callPct,-160],[callPct,160]], "#dc2626", 2, [4,4]);
      dot(p, d, ret, called?"#dc2626":"#0e9f6e", 6, pct(ret));
      document.getElementById("g_note").innerHTML = nn(f => f.vi
        ? `Đòn bẩy <b>${f.x(lev,2)}</b> biến mức thay đổi giá ${f.p(d,0)} thành tỷ suất sinh lời <b>${f.p(ret)}</b> trên vốn tự có của khách hàng (đường xanh liền so với đường xám nét đứt khi không vay). ` +
          `Giá bị gọi ký quỹ là <b>${f.usd(callPx)}</b> (đường đỏ). ` +
          (called
            ? `Tại ${f.usd(p1)} vị thế <b>đã vi phạm</b> tỷ lệ ký quỹ duy trì ${mm}% — khách hàng phải nộp thêm tiền hoặc bị bán giải chấp, hiện thực hoá khoản lỗ vào đúng thời điểm bất lợi nhất.`
            : `Tại ${f.usd(p1)} vị thế vẫn ở trên mức đó, còn ${f.p((p1/callPx-1)*100)} dư địa trước khi bị gọi ký quỹ.`)
        : `Leverage of <b>${f.x(lev,2)}</b> turns a ${f.p(d,0)} price move into a <b>${f.p(ret)}</b> return on the client's equity (solid blue vs the dashed grey unlevered line). ` +
          `The margin call price is <b>${f.usd(callPx)}</b> (red line). ` +
          (called
            ? `At ${f.usd(p1)} the position <b>has breached</b> the ${mm}% maintenance requirement — the client must deposit funds or be liquidated, crystallising the loss at the worst possible moment.`
            : `At ${f.usd(p1)} the position is still above it, with ${f.p((p1/callPx-1)*100)} of headroom before a call.`));
    };
    bind(el, ["g_n","g_p","g_i","g_m","g_d"], upd);
  }
}

};

/* =====================================================================
   GENERAL ILLUSTRATION TOOLS
===================================================================== */
window.TOOLS = {

/* ---------- DCF ---------- */
dcf: {
  tab: "DCF Valuation",
  title: "Discounted Cash Flow — enterprise and equity value",
  guide: "The intrinsic-value counterpart to trading comps. Project free cash flow, discount at WACC and add a Gordon-growth terminal value. Notice how much of the total value sits in the terminal value — typically 60–80% — which is why the terminal growth rate is the most heavily negotiated assumption in any DCF.",
  render(el){
    el.innerHTML = `
    <div class="lab-panel">
      <div class="lab-controls">
        <h4>${th("Cash flows","Dòng tiền")}</h4>
        <div class="ctl"><label>${th("Year-1 free cash flow ($m)","Dòng tiền tự do năm 1 (triệu $)")}</label><input type="number" id="d_fcf" value="100" step="5"></div>
        <div class="ctl"><label>${th("Growth during forecast","Tăng trưởng giai đoạn dự phóng")} <span class="val" id="d_gv">8%</span></label>
          <input type="range" id="d_g" min="-5" max="25" step="0.5" value="8"></div>
        <div class="ctl"><label>${th("Forecast years","Số năm dự phóng")} <span class="val" id="d_nv">5</span></label>
          <input type="range" id="d_n" min="3" max="10" step="1" value="5"></div>
        <h4 style="margin-top:12px">${th("Discounting","Chiết khấu")}</h4>
        <div class="ctl"><label>WACC <span class="val" id="d_wv">9.0%</span></label>
          <input type="range" id="d_w" min="4" max="20" step="0.25" value="9"></div>
        <div class="ctl"><label>${th("Terminal growth","Tăng trưởng dài hạn (cuối kỳ)")} <span class="val" id="d_tv">2.5%</span></label>
          <input type="range" id="d_t" min="0" max="5" step="0.25" value="2.5"></div>
        <h4 style="margin-top:12px">${th("Bridge","Từ EV sang giá trị vốn chủ sở hữu")}</h4>
        <div class="ctl"><label>${th("Net debt ($m)","Nợ ròng (triệu $)")}</label><input type="number" id="d_nd" value="200" step="10"></div>
        <div class="ctl"><label>${th("Diluted shares (m)","Số cổ phần pha loãng (triệu)")}</label><input type="number" id="d_sh" value="50" step="1"></div>
      </div>
      <div class="lab-output">
        <div class="result-strip" id="d_out"></div>
        <canvas id="d_c" width="640" height="330"></canvas>
        <p class="small muted" id="d_note" style="margin-top:10px"></p>
      </div>
    </div>`;
    const upd = ()=>{
      const f0=num("d_fcf"), g=num("d_g"), n=Math.round(num("d_n")), w=num("d_w"), t=num("d_t"), nd=num("d_nd"), sh=num("d_sh");
      const c = cur();
      document.getElementById("d_gv").textContent = c.p(g,1);
      document.getElementById("d_nv").textContent = n;
      document.getElementById("d_wv").textContent = c.p(w,2);
      document.getElementById("d_tv").textContent = c.p(t,2);
      const flows=[]; let pvSum=0;
      for(let i=1;i<=n;i++){
        const cf = f0*Math.pow(1+g/100, i-1);
        const pv = cf/Math.pow(1+w/100, i);
        pvSum += pv; flows.push({i, cf, pv});
      }
      let tv=0, pvTv=0, ok = w/100 > t/100;
      if(ok){
        const last = flows[flows.length-1].cf;
        tv = last*(1+t/100)/((w-t)/100);
        pvTv = tv/Math.pow(1+w/100, n);
      }
      const ev = pvSum+pvTv, eq = ev-nd, ps = sh>0? eq/sh : 0;
      const tvShare = ev>0? pvTv/ev*100 : 0;
      document.getElementById("d_out").innerHTML =
        pill(th("PV of forecast","PV giai đoạn dự phóng"), mil(pvSum,0)) +
        pill(th("PV of terminal","PV giá trị cuối kỳ"), ok? mil(pvTv,0) : NA(), ok?"":"bad") +
        pill(th("Enterprise value","Giá trị doanh nghiệp"), ok? mil(ev,0) : NA()) +
        pill(th("Equity value","Giá trị vốn chủ sở hữu"), ok? mil(eq,0) : NA()) +
        pill(th("$/share","$/cổ phần"), ok? c.usd(ps) : NA(), "good");
      bars(document.getElementById("d_c"),
        flows.map(f=>[tc("Y"+f.i, "Năm "+f.i), f.pv, "#14507d"]).concat(ok? [[tc("Terminal","Cuối kỳ"), pvTv, "#0e9f6e"]] : []),
        {fmt:v=>money(v,0)});
      document.getElementById("d_note").innerHTML = nn(f => f.vi
        ? (ok
            ? `Giá trị doanh nghiệp là <b>${f.m(ev,0)}</b>, trong đó <b>${f.n(tvShare,0)}%</b> đến từ giá trị cuối kỳ — ${tvShare>75?"tỷ trọng cao bất thường, nên kết quả định giá gần như phụ thuộc hoàn toàn vào giả định tăng trưởng vĩnh viễn":"tỷ trọng điển hình của một mô hình DCF"}. Sau khi trừ ${f.m(nd,0)} nợ ròng, vốn chủ sở hữu có giá trị <b>${f.m(eq,0)}</b>, tức <b>${f.usd(ps)}</b> mỗi cổ phần. Tốc độ tăng trưởng cuối kỳ phải thấp hơn WACC — và không được vượt tốc độ tăng trưởng GDP dài hạn, nếu không đến một lúc nào đó doanh nghiệp sẽ lớn hơn cả nền kinh tế.`
            : `<b>Tăng trưởng cuối kỳ (${f.p(t)}) phải thấp hơn WACC (${f.p(w)})</b>, nếu không công thức tăng trưởng Gordon sẽ cho giá trị âm hoặc vô hạn. Hãy giảm tốc độ tăng trưởng cuối kỳ hoặc tăng lãi suất chiết khấu.`)
        : (ok
            ? `Enterprise value is <b>${f.m(ev,0)}</b>, of which <b>${f.n(tvShare,0)}%</b> comes from the terminal value — ${tvShare>75?"an unusually high share, so the valuation rests almost entirely on the perpetuity assumption":"a typical share for a DCF"}. After deducting ${f.m(nd,0)} of net debt, equity is worth <b>${f.m(eq,0)}</b> or <b>${f.usd(ps)}</b> per share. Terminal growth must stay below WACC — and below long-run GDP growth, or the company eventually becomes the economy.`
            : `<b>Terminal growth (${f.p(t)}) must be below the WACC (${f.p(w)})</b>, otherwise the Gordon growth formula produces a negative or infinite value. Lower the terminal growth or raise the discount rate.`));
    };
    bind(el, ["d_fcf","d_g","d_n","d_w","d_t","d_nd","d_sh"], upd);
  }
},

/* ---------- LBO ---------- */
lbo: {
  tab: "LBO Returns",
  title: "Leveraged buyout — IRR and money multiple",
  guide: "A sponsor's return has three engines: paying down debt with the target's own cash flow, growing EBITDA, and exiting at a different multiple. Change the leverage and the exit multiple to see which engine is really driving the return — and how quickly the deal breaks if the exit multiple contracts.",
  render(el){
    el.innerHTML = `
    <div class="lab-panel">
      <div class="lab-controls">
        <h4>${th("Entry","Thời điểm mua")}</h4>
        <div class="ctl"><label>${th("Entry EBITDA ($m)","EBITDA lúc mua (triệu $)")}</label><input type="number" id="b_eb" value="100" step="5"></div>
        <div class="ctl"><label>${th("Entry multiple","Bội số mua vào")} <span class="val" id="b_env">9.0×</span></label>
          <input type="range" id="b_en" min="4" max="16" step="0.5" value="9"></div>
        <div class="ctl"><label>${th("Debt / EBITDA","Nợ / EBITDA")} <span class="val" id="b_lv">5.0×</span></label>
          <input type="range" id="b_l" min="0" max="8" step="0.5" value="5"></div>
        <h4 style="margin-top:12px">${th("Hold period","Thời gian nắm giữ")}</h4>
        <div class="ctl"><label>${th("EBITDA growth p.a.","Tăng trưởng EBITDA mỗi năm")} <span class="val" id="b_gv">6%</span></label>
          <input type="range" id="b_g" min="-5" max="20" step="0.5" value="6"></div>
        <div class="ctl"><label>${th("Cash sweep: % of EBITDA to debt","Dùng tiền trả nợ: % EBITDA mỗi năm")} <span class="val" id="b_sv">40%</span></label>
          <input type="range" id="b_s" min="0" max="80" step="5" value="40"></div>
        <div class="ctl"><label>${th("Years","Số năm")} <span class="val" id="b_yv">5</span></label>
          <input type="range" id="b_y" min="3" max="7" step="1" value="5"></div>
        <h4 style="margin-top:12px">${th("Exit","Thoái vốn")}</h4>
        <div class="ctl"><label>${th("Exit multiple","Bội số thoái vốn")} <span class="val" id="b_exv">9.0×</span></label>
          <input type="range" id="b_ex" min="4" max="16" step="0.5" value="9"></div>
      </div>
      <div class="lab-output">
        <div class="result-strip" id="b_out"></div>
        <canvas id="b_c" width="640" height="330"></canvas>
        <p class="small muted" id="b_note" style="margin-top:10px"></p>
      </div>
    </div>`;
    const upd = ()=>{
      const eb=num("b_eb"), en=num("b_en"), lev=num("b_l"), g=num("b_g"), sweep=num("b_s"), yrs=Math.round(num("b_y")), ex=num("b_ex");
      const c = cur();
      document.getElementById("b_env").textContent = c.x(en,1);
      document.getElementById("b_lv").textContent = c.x(lev,1);
      document.getElementById("b_gv").textContent = c.p(g,1);
      document.getElementById("b_sv").textContent = sweep+"%";
      document.getElementById("b_yv").textContent = yrs;
      document.getElementById("b_exv").textContent = c.x(ex,1);
      const entryEv = eb*en, debt0 = eb*lev, equity0 = entryEv-debt0;
      let debt = debt0, ebitda = eb;
      const path=[];
      for(let y=1;y<=yrs;y++){
        ebitda = ebitda*(1+g/100);
        debt = Math.max(0, debt - ebitda*sweep/100);
        path.push({y, ebitda, debt, equity: ebitda*ex - debt});
      }
      const exitEv = ebitda*ex, equityExit = Math.max(0, exitEv-debt);
      const mom = equity0>0? equityExit/equity0 : 0;
      const irr = (equity0>0 && equityExit>0)? (Math.pow(mom, 1/yrs)-1)*100 : -100;
      document.getElementById("b_out").innerHTML =
        pill(th("Entry EV","EV lúc mua"), mil(entryEv,0)) +
        pill(th("Sponsor equity","Vốn góp của quỹ"), mil(equity0,0)) +
        pill(th("Exit equity","Vốn chủ sở hữu khi thoái"), mil(equityExit,0)) +
        pill(th("Money multiple","Bội số vốn (MoM)"), c.x(mom,2), mom>=2?"good":"") +
        pill("IRR", pct(irr), irr>=20?"good":(irr<0?"bad":""));
      const p = plot(document.getElementById("b_c"), {xmin:0,xmax:yrs,ymin:0,
        ymax:Math.max(entryEv, exitEv, debt0)*1.15, xlabel:tc("Year","Năm"), ylabel:tc("$m","triệu $")});
      line(p, [[0,debt0]].concat(path.map(r=>[r.y, r.debt])), "#dc2626", 3);
      line(p, [[0,equity0]].concat(path.map(r=>[r.y, r.equity])), "#0e9f6e", 3);
      line(p, [[0,entryEv]].concat(path.map(r=>[r.y, r.ebitda*ex])), "#14507d", 2, [6,4]);
      dot(p, yrs, equityExit, "#0e9f6e", 6, tx("Equity ","Vốn CSH ")+money(equityExit,0));
      const multEffect = (ex-en)/en*100;
      const flat = Math.abs(multEffect)<0.01;
      document.getElementById("b_note").innerHTML = nn(f => f.vi
        ? `Vốn góp của quỹ <b>${f.m(equity0,0)}</b> trở thành <b>${f.m(equityExit,0)}</b> — bội số vốn <b>${f.x(mom,2)}</b> và IRR <b>${f.p(irr)}</b> sau ${yrs} năm. ` +
          `Nợ giảm từ ${f.m(debt0,0)} xuống ${f.m(debt,0)} (đường đỏ), EBITDA tăng ${f.p(g,1)} mỗi năm, và bội số thoái vốn ${flat?"bằng":(multEffect>0?"cao hơn":"thấp hơn")} ${flat?"":"<b>"+f.p(Math.abs(multEffect),1)+"</b> so với "}bội số lúc mua. ` +
          (flat
            ? `Với bội số không đổi, toàn bộ lợi nhuận đến từ giảm nợ và tăng trưởng EBITDA — phần có cơ sở vững nhất của một luận điểm đầu tư LBO.`
            : (multEffect>0
               ? `Cẩn trọng: một phần lợi nhuận này đến từ mở rộng bội số — đó là đặt cược vào thị trường chứ không phải thành quả vận hành.`
               : (mom>=1
                  ? `Thương vụ vẫn có lãi dù bội số bị thu hẹp — một luận điểm đầu tư vững chắc.`
                  : `Bội số thu hẹp đã xoá sạch lợi nhuận từ giảm nợ và tăng trưởng — quỹ mất vốn. Đây là cách điển hình một thương vụ LBO thất bại.`)))
        : `Sponsor equity of <b>${f.m(equity0,0)}</b> becomes <b>${f.m(equityExit,0)}</b> — a <b>${f.x(mom,2)}</b> money multiple and an IRR of <b>${f.p(irr)}</b> over ${yrs} years. ` +
          `Debt falls from ${f.m(debt0,0)} to ${f.m(debt,0)} (red), EBITDA grows at ${f.p(g,1)} p.a., and the exit multiple is ${flat?"unchanged versus entry":(multEffect>0?"up":"down")+" <b>"+f.p(Math.abs(multEffect),1)+"</b> versus entry"}. ` +
          (flat
            ? `With a flat multiple the entire return comes from deleveraging and EBITDA growth — the defensible part of an LBO thesis.`
            : (multEffect>0
               ? `Beware: part of this return is multiple expansion, which is a market bet rather than an operational achievement.`
               : (mom>=1
                  ? `Note the deal still makes money despite multiple contraction — a robust thesis.`
                  : `Multiple contraction has wiped out the gains from deleveraging and growth, and the sponsor loses money — the classic way an LBO fails.`))));
    };
    bind(el, ["b_eb","b_en","b_l","b_g","b_s","b_y","b_ex"], upd);
  }
},

/* ---------- Bond pricing ---------- */
bond: {
  tab: "Bond Pricing & Duration",
  title: "Bond valuation, duration and convexity",
  guide: "Debt capital markets in one screen. Price a bond off its yield, then see how duration predicts the price change for a small yield move and how convexity corrects it for a large one. Note the price–yield curve is convex, which always works in the bondholder's favour.",
  render(el){
    el.innerHTML = `
    <div class="lab-panel">
      <div class="lab-controls">
        <h4>${th("Bond terms","Điều khoản trái phiếu")}</h4>
        <div class="ctl"><label>${th("Face value ($)","Mệnh giá ($)")}</label><input type="number" id="o_f" value="100" step="10"></div>
        <div class="ctl"><label>${th("Coupon rate","Lãi suất coupon")} <span class="val" id="o_cv">8.0%</span></label>
          <input type="range" id="o_c" min="0" max="15" step="0.25" value="8"></div>
        <div class="ctl"><label>${th("Years to maturity","Số năm đến đáo hạn")} <span class="val" id="o_nv">5</span></label>
          <input type="range" id="o_n" min="1" max="30" step="1" value="5"></div>
        <div class="ctl"><label>${th("Yield to maturity","Lợi suất đến đáo hạn (YTM)")} <span class="val" id="o_yv">7.0%</span></label>
          <input type="range" id="o_y" min="0.5" max="15" step="0.25" value="7"></div>
        <h4 style="margin-top:12px">${th("Scenario","Kịch bản")}</h4>
        <div class="ctl"><label>${th("Yield shift (bp)","Thay đổi lợi suất (điểm cơ bản)")} <span class="val" id="o_dv">+100</span></label>
          <input type="range" id="o_d" min="-300" max="300" step="25" value="100"></div>
      </div>
      <div class="lab-output">
        <div class="result-strip" id="o_out"></div>
        <canvas id="o_c2" width="640" height="330"></canvas>
        <p class="small muted" id="o_note" style="margin-top:10px"></p>
      </div>
    </div>`;
    const analytics = (F, c, y, n)=>{
      let price=0, wsum=0, csum=0;
      for(let t=1;t<=n;t++){
        const cf = (t===n)? F*c+F : F*c;
        const pv = cf/Math.pow(1+y, t);
        price += pv; wsum += t*pv; csum += t*(t+1)*pv;
      }
      const mac = price>0? wsum/price : 0;
      return {price, mac, mod: mac/(1+y), conv: price>0? csum/(price*Math.pow(1+y,2)) : 0};
    };
    const upd = ()=>{
      const F=num("o_f"), c=num("o_c")/100, n=Math.round(num("o_n")), y=num("o_y")/100, d=num("o_d");
      const k = cur();
      document.getElementById("o_cv").textContent = k.p(c*100,2);
      document.getElementById("o_nv").textContent = n;
      document.getElementById("o_yv").textContent = k.p(y*100,2);
      document.getElementById("o_dv").textContent = (d>=0?"+":"")+d;
      const a = analytics(F,c,y,n);
      const dy = d/10000;
      const durEst = -a.mod*dy*100;
      const convEst = durEst + 0.5*a.conv*dy*dy*100;
      const actual = (analytics(F,c,y+dy,n).price/a.price-1)*100;
      document.getElementById("o_out").innerHTML =
        pill(th("Price","Giá"), k.usd(a.price), a.price>=F?"good":"bad") +
        pill(th("Macaulay dur.","Thời lượng Macaulay"), k.n(a.mac,2)+(k.vi?" năm":" yr")) +
        pill(th("Modified dur.","Thời lượng điều chỉnh"), k.n(a.mod,2)) +
        pill(th("Convexity","Độ lồi"), k.n(a.conv,1)) +
        pill(th("Actual ΔP","ΔP thực tế"), pct(actual), actual>=0?"good":"bad");
      const pts=[];
      for(let yy=Math.max(0.005,y-0.05); yy<=y+0.05; yy+=0.0025) pts.push([yy*100, analytics(F,c,yy,n).price]);
      const ys=pts.map(p=>p[1]);
      const p = plot(document.getElementById("o_c2"), {xmin:pts[0][0],xmax:pts[pts.length-1][0],
        ymin:Math.min(...ys)*0.98,ymax:Math.max(...ys)*1.02, xlabel:tc("Yield to maturity (%)","Lợi suất đến đáo hạn (%)"), ylabel:tc("Price ($)","Giá ($)")});
      const tangent = pts.map(q=>[q[0], a.price*(1 - a.mod*(q[0]/100-y))]);
      line(p, tangent, "#d97706", 2, [6,4]);
      line(p, pts, "#14507d", 3);
      dot(p, y*100, a.price, "#0e9f6e", 6, k.usd(a.price));
      dot(p, (y+dy)*100, analytics(F,c,y+dy,n).price, "#dc2626", 5);
      const par = Math.abs(a.price-F) < 0.005;
      document.getElementById("o_note").innerHTML = nn(f => f.vi
        ? `Trái phiếu giao dịch ở mức <b>${f.usd(a.price)}</b> — ${par?"bằng mệnh giá":(a.price>F?"cao hơn mệnh giá (lãi suất coupon cao hơn lợi suất)":"thấp hơn mệnh giá (lợi suất cao hơn lãi suất coupon)")}. ` +
          `Với mức thay đổi ${d>=0?"+":""}${d} điểm cơ bản, riêng thời lượng (duration) dự báo <b>${f.p(durEst)}</b>; cộng thêm độ lồi được <b>${f.p(convEst)}</b>; mức thay đổi giá thực tế là <b>${f.p(actual)}</b>. ` +
          `Đường nét đứt màu cam là xấp xỉ theo thời lượng (đường tiếp tuyến) — nó luôn nằm <i>dưới</i> đường giá lồi thực tế, vì vậy độ lồi có lợi cho trái chủ: khoản lãi lớn hơn và khoản lỗ nhỏ hơn so với dự báo chỉ dựa vào thời lượng.`
        : `The bond trades at <b>${f.usd(a.price)}</b> — ${par?"par":(a.price>F?"a premium (coupon above yield)":"a discount (yield above coupon)")}. ` +
          `For a ${d>=0?"+":""}${d}bp shift, duration alone predicts <b>${f.p(durEst)}</b>; adding convexity gives <b>${f.p(convEst)}</b>; the actual repricing is <b>${f.p(actual)}</b>. ` +
          `The amber dashed line is the duration (tangent) approximation — it always sits <i>below</i> the true convex price curve, which is why convexity is a benefit to the bondholder: gains are larger and losses smaller than duration alone suggests.`);
    };
    bind(el, ["o_f","o_c","o_n","o_y","o_d"], upd);
  }
},

/* ---------- Market making ---------- */
mm: {
  tab: "Market-Maker Spread",
  title: "Market making — spread capture vs. inventory risk",
  guide: "Simulate a dealer's day. The spread earns money on every round-trip, but inventory left on the book is exposed to price moves and to informed traders. Raise the share of informed flow and watch profitable market making turn into a losing business — the reason dealers widen quotes when they suspect information.",
  render(el){
    el.innerHTML = `
    <div class="lab-panel">
      <div class="lab-controls">
        <h4>${th("Quote","Báo giá")}</h4>
        <div class="ctl"><label>${th("Mid price ($)","Giá giữa ($)")}</label><input type="number" id="k_mid" value="20" step="0.5"></div>
        <div class="ctl"><label>${th("Half-spread (cents)","Nửa chênh lệch (cent)")} <span class="val" id="k_sv">5¢</span></label>
          <input type="range" id="k_s" min="1" max="30" step="1" value="5"></div>
        <h4 style="margin-top:12px">${th("Flow","Dòng lệnh")}</h4>
        <div class="ctl"><label>${th("Round-trips per day","Số vòng mua – bán mỗi ngày")}</label><input type="number" id="k_n" value="400" step="50"></div>
        <div class="ctl"><label>${th("Average trade size (shares)","Khối lượng bình quân mỗi lệnh (cổ phiếu)")}</label><input type="number" id="k_q" value="500" step="100"></div>
        <div class="ctl"><label>${th("Informed flow share","Tỷ trọng lệnh có thông tin")} <span class="val" id="k_iv">20%</span></label>
          <input type="range" id="k_i" min="0" max="100" step="5" value="20"></div>
        <div class="ctl"><label>${th("Adverse move per informed trade (cents)","Biến động giá bất lợi mỗi lệnh có thông tin (cent)")} <span class="val" id="k_av">12¢</span></label>
          <input type="range" id="k_a" min="0" max="50" step="1" value="12"></div>
      </div>
      <div class="lab-output">
        <div class="result-strip" id="k_out"></div>
        <canvas id="k_c" width="640" height="330"></canvas>
        <p class="small muted" id="k_note" style="margin-top:10px"></p>
      </div>
    </div>`;
    const upd = ()=>{
      const mid=num("k_mid"), hs=num("k_s"), n=num("k_n"), q=num("k_q"), inf=num("k_i"), adv=num("k_a");
      const c = cur();
      document.getElementById("k_sv").textContent = hs+"¢";
      document.getElementById("k_iv").textContent = inf+"%";
      document.getElementById("k_av").textContent = adv+"¢";
      const shares = n*q;
      const gross = shares*(hs*2)/100;
      const informedShares = shares*inf/100;
      const advCost = informedShares*adv/100;
      const net = gross-advCost;
      const spreadPct = mid>0? (hs*2)/100/mid*100 : 0;
      document.getElementById("k_out").innerHTML =
        pill(th("Quote","Báo giá"), c.usd(mid-hs/100)+" / "+c.usd(mid+hs/100)) +
        pill(th("Spread","Chênh lệch"), (hs*2)+"¢ ("+c.p(spreadPct,2)+")") +
        pill(th("Gross spread P&amp;L","Lãi gộp từ chênh lệch"), money(gross,0)) +
        pill(th("Adverse selection","Lựa chọn bất lợi"), "−"+money(advCost,0), "bad") +
        pill(th("Net P&amp;L","Lãi/lỗ ròng"), money(net,0), net>=0?"good":"bad");
      const pts=[];
      for(let x=1;x<=30;x+=1){
        const gr = shares*(x*2)/100;
        pts.push([x, gr-advCost]);
      }
      const ys=pts.map(p=>p[1]);
      const p = plot(document.getElementById("k_c"), {xmin:1,xmax:30,ymin:Math.min(...ys,0)*1.1,ymax:Math.max(...ys)*1.1,
        xlabel:tc("Half-spread quoted (cents)","Nửa chênh lệch niêm yết (cent)"), ylabel:tc("Net daily P&L ($)","Lãi/lỗ ròng mỗi ngày ($)")});
      line(p, [[1,0],[30,0]], "#c9d0dd", 1.5, [5,4]);
      line(p, pts, "#14507d", 3);
      dot(p, hs, net, net>=0?"#0e9f6e":"#dc2626", 6, money(net,0));
      const breakeven = shares>0? advCost/(shares*2)*100 : 0;
      document.getElementById("k_note").innerHTML = nn(f => f.vi
        ? `Niêm yết chênh lệch <b>${hs*2}¢</b> trên ${f.n(n,0)} vòng mua – bán mang lại <b>${f.usd(gross,0)}</b> lãi gộp, nhưng ${inf}% lệnh có thông tin gây thiệt hại <b>${f.usd(advCost,0)}</b>, còn lại <b>${f.usd(net,0)}</b>. ` +
          `Mức nửa chênh lệch hoà vốn khoảng <b>${f.n(breakeven,1)}¢</b>. ` +
          (net<0
            ? `Bàn tạo lập thị trường đang thua lỗ: phải nới rộng chênh lệch, giảm khối lượng hoặc rút khỏi thị trường. Đây chính là điều xảy ra với thanh khoản khi thị trường căng thẳng.`
            : `Nới rộng báo giá làm tăng lãi trên mỗi giao dịch — nhưng trên thực tế điều đó cũng đẩy dòng lệnh không có thông tin sang đối thủ, nên bài toán thật sự của nhà tạo lập là giữ được dòng lệnh “lành” trong khi định giá đủ cao để loại dòng lệnh có thông tin.`)
        : `Quoting <b>${hs*2}¢</b> wide on ${f.n(n,0)} round-trips earns <b>${f.usd(gross,0)}</b> gross, but ${inf}% informed flow costs <b>${f.usd(advCost,0)}</b>, leaving <b>${f.usd(net,0)}</b>. ` +
          `The break-even half-spread is about <b>${f.n(breakeven,1)}¢</b>. ` +
          (net<0
            ? `The desk is losing money: it must widen the spread, reduce size, or withdraw. This is exactly what happens to liquidity in a stressed market.`
            : `Widening the quote raises P&amp;L per trade — but in reality it also drives uninformed flow to competitors, so the dealer's real problem is keeping the good flow while pricing out the informed.`));
    };
    bind(el, ["k_mid","k_s","k_n","k_q","k_i","k_a"], upd);
  }
}

};

})();
