/* ==========================================================================
   BAF736 · HUB Investment Banking Workspace — Production PWA Service Worker
   Offline-First Architecture: Network-First App Shell + Background Warm-Cache
   of all 62 Course Data Modules (1,024 MCQs, 204 Essays, 6 Chapters, 8 Cases)
   ========================================================================== */
const CACHE_NAME = 'baf736-hub-pwa-v7';

const SHELL_ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/web-folder/css/production.css',
  '/web-folder/js/app_production.js',
  '/web-folder/img/hub-shield.svg',
  '/web-folder/img/hub-shield-white.svg',
  '/web-folder/img/pwa-192.png',
  '/web-folder/img/pwa-512.png',
  '/web-folder/img/pwa-maskable-512.png',
  '/web-folder/img/apple-touch-icon.png'
];

const DATA_ASSETS = [
  '/web-folder/js/offline-init-modern.js',
  '/web-folder/js/i18n.js',
  '/web-folder/js/content.js',
  '/web-folder/js/content_vi.js',
  '/web-folder/js/content_vi2.js',
  '/web-folder/js/content_vi3.js',
  '/web-folder/js/content_vi4.js',
  '/web-folder/js/figures.js',
  '/web-folder/js/figures2.js',
  '/web-folder/js/cases.js',
  '/web-folder/js/quiz.js',
  '/web-folder/js/quiz_bank.js',
  '/web-folder/js/quiz_bank3.js',
  '/web-folder/js/quiz_bank4.js',
  '/web-folder/js/quiz_bank5.js',
  '/web-folder/js/quiz_bank6.js',
  '/web-folder/js/quiz_bank7.js',
  '/web-folder/js/essay.js',
  '/web-folder/js/essay2.js',
  '/web-folder/js/essay3.js',
  '/web-folder/js/essay4.js',
  '/web-folder/js/essay5.js',
  '/web-folder/js/essay6.js',
  '/web-folder/js/essay7.js',
  '/web-folder/js/cases_bs.js',
  '/web-folder/js/revision.js',
  '/web-folder/js/labs.js',
  '/web-folder/js/content_vi_meta.js',
  '/web-folder/js/data_vi.js',
  '/web-folder/js/data_vi_fc.js',
  '/web-folder/js/data_vi_fig.js',
  '/web-folder/js/data_vi_review.js',
  '/web-folder/js/data_vi_essay_ch1.js',
  '/web-folder/js/data_vi_essay_ch2.js',
  '/web-folder/js/data_vi_essay_ch3.js',
  '/web-folder/js/data_vi_essay_ch4.js',
  '/web-folder/js/data_vi_essay_ch5.js',
  '/web-folder/js/data_vi_essay_ch6.js',
  '/web-folder/js/data_vi_mcq_src.js',
  '/web-folder/js/data_vi_mcq_ch1.js',
  '/web-folder/js/data_vi_mcq_ch2.js',
  '/web-folder/js/data_vi_mcq_ch3.js',
  '/web-folder/js/data_vi_mcq_ch4.js',
  '/web-folder/js/data_vi_mcq_ch5.js',
  '/web-folder/js/data_vi_mcq_ch6.js',
  '/web-folder/js/data_vi_mcq_expl.js',
  '/web-folder/js/song_ngu_hinh.js',
  '/web-folder/vendor/tool-gamekit.js',
  '/web-folder/js/deepdive.js',
  '/web-folder/js/deepdive_ch12.js',
  '/web-folder/js/deepdive_ch46.js',
  '/web-folder/js/game_ch1.js',
  '/web-folder/js/game_ch3.js',
  '/web-folder/js/game_ch4.js',
  '/web-folder/js/chacha20.js',
  '/web-folder/js/ib_khoa.js',
  '/web-folder/js/ib_nguon.js',
  '/web-folder/js/ib_nguon_ds.js',
  '/web-folder/js/ib_nguon_muc.js',
  '/web-folder/js/case_library.js',
  '/web-folder/js/case_analysis.enc.js'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(SHELL_ASSETS);
      // Warm-cache full offline dataset without blocking SW activation on slow networks
      Promise.allSettled(DATA_ASSETS.map((url) => cache.add(url)));
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

function fetchWithTimeout(req, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('timeout')), ms);
    fetch(req).then(
      (res) => { clearTimeout(timer); resolve(res); },
      (err) => { clearTimeout(timer); reject(err); }
    );
  });
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const isGoogleFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!sameOrigin && !isGoogleFont) return;

  // 1. HTML Navigations & Dynamic App Shell (CSS + app_production.js + manifest): Network-First -> Cache Fallback
  const isAppShellDynamic =
    req.mode === 'navigate' ||
    url.pathname === '/' ||
    url.pathname === '/index.html' ||
    url.pathname.endsWith('/production.css') ||
    url.pathname.endsWith('/app_production.js') ||
    url.pathname === '/manifest.webmanifest';

  if (isAppShellDynamic) {
    event.respondWith(
      fetchWithTimeout(req, 3000)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req.mode === 'navigate' ? '/' : req, copy));
          }
          return res;
        })
        .catch(async () => {
          const cache = await caches.open(CACHE_NAME);
          if (req.mode === 'navigate') {
            return (await cache.match('/')) || (await cache.match('/index.html'));
          }
          return (await cache.match(req)) || (await cache.match(url.pathname));
        })
    );
    return;
  }

  // 2. Course Data Scripts, Vector/PNG Assets & Fonts: Stale-While-Revalidate (Instant Offline/Repeat Load)
  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(req);
      const netFetch = fetch(req)
        .then((res) => {
          if (res && (res.status === 200 || res.type === 'opaque')) {
            cache.put(req, res.clone());
          }
          return res;
        })
        .catch(() => cached);
      return cached || netFetch;
    })
  );
});
