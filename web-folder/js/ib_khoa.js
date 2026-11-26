/* =====================================================================
   ib_khoa.js — KHOÁ BÀI PHÂN TÍCH TÌNH HUỐNG (BAF736, bản độc lập)

   Yêu cầu: bài phân tích tình huống chỉ sinh viên ĐƯỢC GIẢNG VIÊN CẤP QUYỀN mới
   xem được. Bản độc lập là trang tĩnh, không có máy chủ để hỏi "người này có
   quyền không", nên quyền được cấp bằng MÃ:
     · mỗi bài phân tích được mã hoá bằng một khoá nội dung ngẫu nhiên;
     · khoá ấy được bọc hai lần: bằng mã riêng của tình huống và bằng mã chung
       (mở mọi bài); giảng viên đưa mã cho lớp khi muốn mở;
     · danh sách mã nằm trong "két" mã hoá bằng mật khẩu giảng viên — đăng nhập
       khu giảng viên chính là mở két.
   Không có mã thì văn bản bài phân tích không lấy ra được kể cả khi đọc mã nguồn.

   Vì sao viết tay thay vì crypto.subtle: crypto.subtle chỉ có trong ngữ cảnh bảo
   mật (https, localhost, file://). Mở trang qua http://<địa chỉ LAN> thì không có.
   Dùng ChaCha20 (chacha20.js, RFC 8439) + HMAC-SHA-256 (mã hoá rồi xác thực) +
   PBKDF2-HMAC-SHA-256 — cùng một mã chạy trong trình duyệt và trong Node (công cụ
   mã hoá ở cong-cu/ dùng chính tệp này), nên hai đầu không bao giờ lệch nhau.
   ===================================================================== */
(function (goc, tao) {
  if (typeof module === "object" && module.exports) module.exports = tao(require("./chacha20.js"));
  else goc.IBKhoa = tao(goc.HubChaCha);
})(typeof self !== "undefined" ? self : this, function (CC) {
  "use strict";
  if (!CC) throw new Error("Thiếu chacha20.js — phải nạp trước ib_khoa.js");

  /* ---------------- SHA-256 (FIPS 180-4) ---------------- */
  const K = new Uint32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2]);
  const H0 = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
  const W = new Uint32Array(64);

  /** Nén một khối 64 byte (b, vị trí o) vào trạng thái h (Uint32Array 8). */
  function nen(h, b, o) {
    for (let i = 0; i < 16; i++) W[i] = (b[o + 4 * i] << 24) | (b[o + 4 * i + 1] << 16) | (b[o + 4 * i + 2] << 8) | b[o + 4 * i + 3];
    for (let i = 16; i < 64; i++) {
      const a = W[i - 15], c = W[i - 2];
      const s0 = ((a >>> 7) | (a << 25)) ^ ((a >>> 18) | (a << 14)) ^ (a >>> 3);
      const s1 = ((c >>> 17) | (c << 15)) ^ ((c >>> 19) | (c << 13)) ^ (c >>> 10);
      W[i] = (W[i - 16] + s0 + W[i - 7] + s1) | 0;
    }
    let A = h[0], B = h[1], C = h[2], D = h[3], E = h[4], F = h[5], G = h[6], H = h[7];
    for (let i = 0; i < 64; i++) {
      const S1 = ((E >>> 6) | (E << 26)) ^ ((E >>> 11) | (E << 21)) ^ ((E >>> 25) | (E << 7));
      const t1 = (H + S1 + ((E & F) ^ (~E & G)) + K[i] + W[i]) | 0;
      const S0 = ((A >>> 2) | (A << 30)) ^ ((A >>> 13) | (A << 19)) ^ ((A >>> 22) | (A << 10));
      const t2 = (S0 + ((A & B) ^ (A & C) ^ (B & C))) | 0;
      H = G; G = F; F = E; E = (D + t1) | 0; D = C; C = B; B = A; A = (t1 + t2) | 0;
    }
    h[0] = (h[0] + A) | 0; h[1] = (h[1] + B) | 0; h[2] = (h[2] + C) | 0; h[3] = (h[3] + D) | 0;
    h[4] = (h[4] + E) | 0; h[5] = (h[5] + F) | 0; h[6] = (h[6] + G) | 0; h[7] = (h[7] + H) | 0;
  }
  /** Băm phần còn lại `m` khi trạng thái h đã nuốt `daNen` byte trước đó. */
  function ketThuc(h, m, daNen) {
    const n = m.length, tong = daNen + n;
    const dem = ((n + 9 + 63) >> 6) << 6;
    const b = new Uint8Array(dem);
    b.set(m); b[n] = 0x80;
    const bit = tong * 8;
    b[dem - 4] = (bit >>> 24) & 255; b[dem - 3] = (bit >>> 16) & 255; b[dem - 2] = (bit >>> 8) & 255; b[dem - 1] = bit & 255;
    b[dem - 5] = Math.floor(bit / 4294967296) & 255;
    for (let o = 0; o < dem; o += 64) nen(h, b, o);
    const ra = new Uint8Array(32);
    for (let i = 0; i < 8; i++) { ra[4 * i] = h[i] >>> 24; ra[4 * i + 1] = (h[i] >>> 16) & 255; ra[4 * i + 2] = (h[i] >>> 8) & 255; ra[4 * i + 3] = h[i] & 255; }
    return ra;
  }
  function sha256(m) { return ketThuc(Uint32Array.from(H0), m, 0); }

  /* ---------------- HMAC-SHA-256 (RFC 2104) — giữ sẵn trạng thái ipad/opad ---------------- */
  function hmacTruoc(khoa) {
    if (khoa.length > 64) khoa = sha256(khoa);
    const k = new Uint8Array(64); k.set(khoa);
    const ip = new Uint8Array(64), op = new Uint8Array(64);
    for (let i = 0; i < 64; i++) { ip[i] = k[i] ^ 0x36; op[i] = k[i] ^ 0x5c; }
    const hi = Uint32Array.from(H0), ho = Uint32Array.from(H0);
    nen(hi, ip, 0); nen(ho, op, 0);
    return { hi, ho };
  }
  function hmacVoi(tr, m) {
    const trong = ketThuc(Uint32Array.from(tr.hi), m, 64);
    return ketThuc(Uint32Array.from(tr.ho), trong, 64);
  }
  function hmac(khoa, m) { return hmacVoi(hmacTruoc(khoa), m); }

  /* ---------------- PBKDF2-HMAC-SHA-256 (RFC 8018), đầu ra 32 byte ---------------- */
  function pbkdf2(matKhau, muoi, vong) {
    const tr = hmacTruoc(matKhau);
    const dau = new Uint8Array(muoi.length + 4); dau.set(muoi); dau[muoi.length + 3] = 1;
    let u = hmacVoi(tr, dau);
    const t = u.slice();
    for (let i = 1; i < vong; i++) { u = hmacVoi(tr, u); for (let j = 0; j < 32; j++) t[j] ^= u[j]; }
    return t;
  }

  /* ---------------- tiện ích ---------------- */
  const enc = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;
  const dec = typeof TextDecoder !== "undefined" ? new TextDecoder() : null;
  const utf8 = (s) => enc.encode(String(s));
  const chu = (b) => dec.decode(b);
  const hexRa = CC.hexRa, hexVao = CC.hexVao;
  function ngauNhien(n) {
    const b = new Uint8Array(n);
    const c = (typeof self !== "undefined" && self.crypto) || (typeof globalThis !== "undefined" && globalThis.crypto);
    if (c && c.getRandomValues) c.getRandomValues(b);
    else { const r = require("crypto").randomBytes(n); b.set(r); }
    return b;
  }
  function bangNhau(a, b) { if (a.length !== b.length) return false; let x = 0; for (let i = 0; i < a.length; i++) x |= a[i] ^ b[i]; return x === 0; }
  const tach = (khoa) => ({ ma: hmac(khoa, utf8("ib-enc")), xt: hmac(khoa, utf8("ib-mac")) });

  /** Niêm phong: ChaCha20 rồi HMAC trên (nonce || bản mã). Trả {n, c, t} dạng hex. */
  function niemPhong(khoa, du) {
    const k = tach(khoa), n = ngauNhien(12);
    const c = CC.xor(k.ma, n, Uint8Array.from(du), 0, 1);
    const g = new Uint8Array(12 + c.length); g.set(n); g.set(c, 12);
    return { n: hexRa(n), c: hexRa(c), t: hexRa(hmac(k.xt, g)) };
  }
  /** Mở niêm phong; sai khoá / bị sửa → null. */
  function moNiemPhong(khoa, goi) {
    if (!goi || !goi.n || !goi.t) return null;
    const k = tach(khoa), n = hexVao(goi.n), c = hexVao(goi.c || "");
    const g = new Uint8Array(12 + c.length); g.set(n); g.set(c, 12);
    if (!bangNhau(hmac(k.xt, g), hexVao(goi.t))) return null;
    return CC.xor(k.ma, n, c, 0, 1);
  }

  /** Mã cấp cho sinh viên: viết hoa, bỏ khoảng trắng và gạch nối (gõ "ab12-cd34-ef" hay "AB12CD34EF" như nhau). */
  const chuanMa = (s) => String(s || "").toUpperCase().replace(/[\s\-–—_.]/g, "");
  /** Mật khẩu giảng viên: giữ nguyên chữ hoa/thường, chỉ chuẩn hoá Unicode. */
  const chuanMk = (s) => String(s || "").normalize("NFC");
  const VONG = 100000;
  const BANG_MA = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";   // bỏ I, L, O, 0, 1 cho khỏi đọc nhầm
  function taoMa() {
    const b = ngauNhien(10);
    let s = "";
    for (let i = 0; i < 10; i++) s += BANG_MA[b[i] % BANG_MA.length];
    return s.slice(0, 4) + "-" + s.slice(4, 8) + "-" + s.slice(8);
  }
  const khoaTuMa = (ma, muoiHex, vong) => pbkdf2(utf8(chuanMa(ma)), hexVao(muoiHex), vong || VONG);
  const khoaTuMk = (mk, muoiHex, vong) => pbkdf2(utf8(chuanMk(mk)), hexVao(muoiHex), vong || VONG);

  /* ---------------- đóng gói một bài phân tích / két mã ---------------- */
  /** Dùng ở công cụ mã hoá (Node). maRieng: mã của tình huống; maChung: mã mở mọi bài. */
  function dongGoiBai(noiDung, maRieng, maChung, vong) {
    vong = vong || VONG;
    const ck = ngauNhien(32);
    const boc = [maRieng, maChung].filter(Boolean).map((ma) => {
      const muoi = hexRa(ngauNhien(16));
      return Object.assign({ s: muoi }, niemPhong(khoaTuMa(ma, muoi, vong), ck));
    });
    return { v: 1, vong, b: boc, d: niemPhong(ck, utf8(JSON.stringify(noiDung))) };
  }
  /** Thử mở một bài bằng mã người dùng gõ. Trả nội dung (đối tượng) hoặc null. */
  function moBai(goi, ma) {
    if (!goi || !goi.b) return null;
    for (const w of goi.b) {
      const ck = moNiemPhong(khoaTuMa(ma, w.s, goi.vong), w);
      if (ck) { const d = moNiemPhong(ck, goi.d); if (d) return JSON.parse(chu(d)); }
    }
    return null;
  }
  function dongKet(duLieu, matKhau, vong) {
    vong = vong || VONG;
    const muoi = hexRa(ngauNhien(16));
    return Object.assign({ v: 1, vong, s: muoi }, niemPhong(khoaTuMk(matKhau, muoi, vong), utf8(JSON.stringify(duLieu))));
  }
  function moKet(ket, matKhau) {
    if (!ket || !ket.s) return null;
    const d = moNiemPhong(khoaTuMk(matKhau, ket.s, ket.vong), ket);
    return d ? JSON.parse(chu(d)) : null;
  }

  return { sha256, hmac, pbkdf2, niemPhong, moNiemPhong, dongGoiBai, moBai, dongKet, moKet, taoMa, chuanMa, chuanMk, hexRa, hexVao, utf8, VONG };
});
