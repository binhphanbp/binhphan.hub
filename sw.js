/* ==========================================================================
   BAF736 · HUB Investment Banking Workspace — Production PWA Service Worker
   Offline-First Architecture: Fresh-Reload App Shell + Guaranteed Batched
   Warm-Cache of all 62 Course Data Modules (1,024 MCQs, 204 Essays, 8 Cases)
   ========================================================================== */
const CACHE_NAME = 'baf736-hub-pwa-v13';

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
  '/web-folder/img/pwa-maskable-192.png',
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

async function warmAssetsInBatches(cache, urls, batchSize) {
  for (let i = 0; i < urls.length; i += batchSize) {
    const slice = urls.slice(i, i + batchSize);
    await Promise.allSettled(
      slice.map(async (u) => {
        const hit = await cache.match(u);
        if (!hit) {
          const res = await fetch(u);
          if (res && res.ok) await cache.put(u, res);
        }
      })
    );
  }
}

async function notifyOfflineReady() {
  const cache = await caches.open(CACHE_NAME);
  let readyCount = 0;
  for (const u of DATA_ASSETS) {
    if (await cache.match(u)) readyCount++;
  }
  const allReady = readyCount >= DATA_ASSETS.length;
  const clients = await self.clients.matchAll({ type: 'window' });
  for (const cl of clients) {
    cl.postMessage({ type: 'OFFLINE_STATUS', ready: allReady, count: readyCount, total: DATA_ASSETS.length });
  }
}

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Bypass browser HTTP cache during SW upgrade so fresh CSS/JS shell is guaranteed
      await Promise.all(
        SHELL_ASSETS.map(async (url) => {
          const res = await fetch(new Request(url, { cache: 'reload' }));
          if (res && res.ok) await cache.put(url, res);
        })
      );
      await warmAssetsInBatches(cache, DATA_ASSETS, 12);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)));
      await self.clients.claim();
      const cache = await caches.open(CACHE_NAME);
      await warmAssetsInBatches(cache, DATA_ASSETS, 12);
      await notifyOfflineReady();
    })()
  );
});

self.addEventListener('message', (event) => {
  if (!event.data) return;
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  } else if (event.data.type === 'CHECK_OFFLINE_STATUS') {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => warmAssetsInBatches(cache, DATA_ASSETS, 12))
        .then(() => notifyOfflineReady())
    );
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
    url.pathname.endsWith('/offline-init-modern.js') ||
    url.pathname === '/manifest.webmanifest';

  if (isAppShellDynamic) {
    event.respondWith(
      fetchWithTimeout(req, 3000)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req.mode === 'navigate' ? '/' : url.pathname, copy));
          }
          return res;
        })
        .catch(async () => {
          const cache = await caches.open(CACHE_NAME);
          if (req.mode === 'navigate') {
            return (await cache.match('/')) || (await cache.match('/index.html'));
          }
          return (await cache.match(req)) || (await cache.match(url.pathname, { ignoreSearch: true }));
        })
    );
    return;
  }

  // 2. Course Data Scripts, Vector/PNG Assets & Fonts: Stale-While-Revalidate (Instant Offline/Repeat Load)
  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = (await cache.match(req)) || (sameOrigin ? await cache.match(url.pathname, { ignoreSearch: true }) : null);
      const netFetch = fetch(req)
        .then((res) => {
          if (res && (res.status === 200 || res.type === 'opaque')) {
            cache.put(sameOrigin ? url.pathname : req, res.clone());
          }
          return res;
        })
        .catch(() => cached);
      return cached || netFetch;
    })
  );
});
