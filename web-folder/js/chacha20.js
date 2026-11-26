/* =====================================================================
   public/js/chacha20.js — v7.10: dòng khoá ChaCha20 (RFC 8439) thuần JavaScript

   DÙNG CHUNG cho máy chủ (lib/tai-lieu-bao-ve.js nạp bằng require) và trình
   duyệt (trình đọc tài liệu bảo vệ). Một nguồn duy nhất để hai đầu không bao
   giờ lệch nhau.

   Vì sao không dùng crypto.subtle: HUB chạy trên http://<địa chỉ LAN>, không
   phải ngữ cảnh bảo mật, nên trình duyệt và WebView KHÔNG có crypto.subtle.
   Vì sao không dùng crypto.createCipheriv('chacha20') ở máy chủ: máy chủ chạy
   trong Electron (BoringSSL), bộ mật mã ở đó không có ChaCha20 thuần.

   Dòng khoá truy cập ngẫu nhiên được: byte thứ o nằm ở khối floor(o / 64),
   nên trình đọc PDF xin đúng khoảng byte nào thì giải mã đúng khoảng ấy.

   GIỚI HẠN (nói thẳng): khoá của mỗi phiên xem được gửi cho chính trình đọc
   trong cùng phiên đăng nhập. Lớp mã hoá này làm cho đường dẫn nội dung không
   mở được, không lưu được bằng trình duyệt, trình tải tệp hay bộ nhớ đệm; nó
   không phải DRM và không chặn được người tự viết công cụ.
   ===================================================================== */
(function (goc, tao) {
  if (typeof module === 'object' && module.exports) module.exports = tao();
  else goc.HubChaCha = tao();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function tuChu(khoa, nonce) {
    if (!(khoa instanceof Uint8Array) || khoa.length !== 32) throw new Error('Khoá ChaCha20 phải dài 32 byte');
    if (!(nonce instanceof Uint8Array) || nonce.length !== 12) throw new Error('Nonce ChaCha20 phải dài 12 byte');
    const s = new Uint32Array(16);
    s[0] = 0x61707865; s[1] = 0x3320646e; s[2] = 0x79622d32; s[3] = 0x6b206574;
    for (let i = 0; i < 8; i++) s[4 + i] = (khoa[4 * i] | (khoa[4 * i + 1] << 8) | (khoa[4 * i + 2] << 16) | (khoa[4 * i + 3] << 24)) >>> 0;
    for (let i = 0; i < 3; i++) s[13 + i] = (nonce[4 * i] | (nonce[4 * i + 1] << 8) | (nonce[4 * i + 2] << 16) | (nonce[4 * i + 3] << 24)) >>> 0;
    return s;
  }

  /** Sinh một khối 64 byte của dòng khoá cho bộ đếm `dem` vào `ra` (Uint8Array 64). */
  function khoi(s, dem, ra) {
    let x0 = s[0], x1 = s[1], x2 = s[2], x3 = s[3], x4 = s[4], x5 = s[5], x6 = s[6], x7 = s[7],
        x8 = s[8], x9 = s[9], x10 = s[10], x11 = s[11], x12 = dem >>> 0, x13 = s[13], x14 = s[14], x15 = s[15];
    for (let i = 0; i < 10; i++) {
      x0 = (x0 + x4) | 0; x12 ^= x0; x12 = (x12 << 16) | (x12 >>> 16); x8 = (x8 + x12) | 0; x4 ^= x8; x4 = (x4 << 12) | (x4 >>> 20);
      x0 = (x0 + x4) | 0; x12 ^= x0; x12 = (x12 << 8) | (x12 >>> 24); x8 = (x8 + x12) | 0; x4 ^= x8; x4 = (x4 << 7) | (x4 >>> 25);
      x1 = (x1 + x5) | 0; x13 ^= x1; x13 = (x13 << 16) | (x13 >>> 16); x9 = (x9 + x13) | 0; x5 ^= x9; x5 = (x5 << 12) | (x5 >>> 20);
      x1 = (x1 + x5) | 0; x13 ^= x1; x13 = (x13 << 8) | (x13 >>> 24); x9 = (x9 + x13) | 0; x5 ^= x9; x5 = (x5 << 7) | (x5 >>> 25);
      x2 = (x2 + x6) | 0; x14 ^= x2; x14 = (x14 << 16) | (x14 >>> 16); x10 = (x10 + x14) | 0; x6 ^= x10; x6 = (x6 << 12) | (x6 >>> 20);
      x2 = (x2 + x6) | 0; x14 ^= x2; x14 = (x14 << 8) | (x14 >>> 24); x10 = (x10 + x14) | 0; x6 ^= x10; x6 = (x6 << 7) | (x6 >>> 25);
      x3 = (x3 + x7) | 0; x15 ^= x3; x15 = (x15 << 16) | (x15 >>> 16); x11 = (x11 + x15) | 0; x7 ^= x11; x7 = (x7 << 12) | (x7 >>> 20);
      x3 = (x3 + x7) | 0; x15 ^= x3; x15 = (x15 << 8) | (x15 >>> 24); x11 = (x11 + x15) | 0; x7 ^= x11; x7 = (x7 << 7) | (x7 >>> 25);
      x0 = (x0 + x5) | 0; x15 ^= x0; x15 = (x15 << 16) | (x15 >>> 16); x10 = (x10 + x15) | 0; x5 ^= x10; x5 = (x5 << 12) | (x5 >>> 20);
      x0 = (x0 + x5) | 0; x15 ^= x0; x15 = (x15 << 8) | (x15 >>> 24); x10 = (x10 + x15) | 0; x5 ^= x10; x5 = (x5 << 7) | (x5 >>> 25);
      x1 = (x1 + x6) | 0; x12 ^= x1; x12 = (x12 << 16) | (x12 >>> 16); x11 = (x11 + x12) | 0; x6 ^= x11; x6 = (x6 << 12) | (x6 >>> 20);
      x1 = (x1 + x6) | 0; x12 ^= x1; x12 = (x12 << 8) | (x12 >>> 24); x11 = (x11 + x12) | 0; x6 ^= x11; x6 = (x6 << 7) | (x6 >>> 25);
      x2 = (x2 + x7) | 0; x13 ^= x2; x13 = (x13 << 16) | (x13 >>> 16); x8 = (x8 + x13) | 0; x7 ^= x8; x7 = (x7 << 12) | (x7 >>> 20);
      x2 = (x2 + x7) | 0; x13 ^= x2; x13 = (x13 << 8) | (x13 >>> 24); x8 = (x8 + x13) | 0; x7 ^= x8; x7 = (x7 << 7) | (x7 >>> 25);
      x3 = (x3 + x4) | 0; x14 ^= x3; x14 = (x14 << 16) | (x14 >>> 16); x9 = (x9 + x14) | 0; x4 ^= x9; x4 = (x4 << 12) | (x4 >>> 20);
      x3 = (x3 + x4) | 0; x14 ^= x3; x14 = (x14 << 8) | (x14 >>> 24); x9 = (x9 + x14) | 0; x4 ^= x9; x4 = (x4 << 7) | (x4 >>> 25);
    }
    const w = [x0 + s[0], x1 + s[1], x2 + s[2], x3 + s[3], x4 + s[4], x5 + s[5], x6 + s[6], x7 + s[7],
               x8 + s[8], x9 + s[9], x10 + s[10], x11 + s[11], x12 + (dem >>> 0), x13 + s[13], x14 + s[14], x15 + s[15]];
    for (let i = 0; i < 16; i++) {
      const v = w[i] >>> 0;
      ra[4 * i] = v & 255; ra[4 * i + 1] = (v >>> 8) & 255; ra[4 * i + 2] = (v >>> 16) & 255; ra[4 * i + 3] = (v >>> 24) & 255;
    }
  }

  /** XOR `du` (Uint8Array) với dòng khoá, coi byte đầu của `du` nằm ở vị trí `viTri` của dòng.
   *  Mã hoá và giải mã là cùng một phép. Sửa tại chỗ và trả về chính `du`.
   *  `demDau`: bộ đếm của khối đầu tiên (mặc định 0; RFC 8439 mục 2.4.2 dùng 1). */
  function xor(khoa, nonce, du, viTri, demDau) {
    const s = tuChu(khoa, nonce), k = new Uint8Array(64);
    viTri = Math.max(0, Math.floor(viTri || 0));
    let dem = Math.floor(viTri / 64) + (demDau || 0), le = viTri % 64, i = 0;
    const n = du.length;
    while (i < n) {
      khoi(s, dem++, k);
      const het = Math.min(64, le + (n - i));
      for (let j = le; j < het; j++) du[i++] ^= k[j];
      le = 0;
    }
    return du;
  }

  const hexRa = b => Array.prototype.map.call(b, x => (x < 16 ? '0' : '') + x.toString(16)).join('');
  function hexVao(h) {
    h = String(h || '');
    const b = new Uint8Array(h.length >> 1);
    for (let i = 0; i < b.length; i++) b[i] = parseInt(h.substr(2 * i, 2), 16);
    return b;
  }

  return { xor, hexRa, hexVao };
});
