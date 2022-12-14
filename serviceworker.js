const staticReval = "Reval-v1";
const assets =
    [
    "/",
    "/index.html",
    "/css/Reval.css",
    "/js/main.js",
    "/js/app.js",

    "/imgs/avatar-01.png.webp",
    "/imgs/avatar-02.png.webp",
    "/imgs/avatar-03.png.webp",
    "/imgs/avatar-04.png.webp",
    "/imgs/avatar-05.png.webp",
    "/imgs/avatar-06.png.webp",
    "/imgs/cat-01.jpg.webp",
    "/imgs/cat-02.jpg.webp",
    "/imgs/cat-03.jpg.webp",
    "/imgs/cat-04.jpg.webp",
    "/imgs/cat-05.jpg.webp",
    "/imgs/cat-06.jpg.webp",
    "/imgs/cat-07.jpg.webp",
    "/imgs/cat-08.jpg.webp",
    "/imgs/discount-background1.jpg.webp",
    "/imgs/discount-background2.jpg.webp",
    "/imgs/discount.png.webp",
    "/imgs/discount2.png.webp",
    "/imgs/dots.png.webp",
    "/imgs/events.png.webp",
    "/imgs/favicon.png.webp",
    "/imgs/features-01.jpg.webp",
    "/imgs/features-02.jpg.webp",
    "/imgs/features-03.jpg.webp",
    "/imgs/gallery-01.png.webp",
    "/imgs/gallery-02.png.webp",
    "/imgs/gallery-03.png.webp",
    "/imgs/gallery-04.jpg.webp",
    "/imgs/gallery-05.jpg.webp",
    "/imgs/gallery-06.png.webp",
    "/imgs/hosting-advanced.png.webp",
    "/imgs/hosting-basic.png.webp",
    "/imgs/hosting-professional.png.webp",
    "/imgs/landing-image.png.webp",
    "/imgs/megamenu.png.webp",
    "/imgs/skills.png.webp",
    "/imgs/stats.jpg.webp",
    "/imgs/team-01.jpg.webp",
    "/imgs/team-02.jpg.webp",
    "/imgs/team-03.jpg.webp",
    "/imgs/team-04.jpg.webp",
    "/imgs/team-05.png.webp",
    "/imgs/team-06.png.webp",
    "/imgs/team-07.jpg.webp",
    "/imgs/team-08.jpg.webp",

    "/imgs/work-steps-1.png.webp",
    "/imgs/work-steps-2.png.webp",
    "/imgs/work-steps-3.png.webp",
    "/imgs/work-steps.png.webp",

    "/images/icons/android-chrome-192x192.png",
    "/images/icons/android-chrome-512x512.png",
    "/images/icons/apple-touch-icon.png",
    "/images/icons/favicon-16x16.png",
    "/images/icons/favicon-32x32.png",
    "/images/icons/favicon.ico",

]


self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticAbdallaYahia).then(async (cache) => {
    let ok
    try {
      ok = await cache.addAll(assets);
    } catch (err) {
      console.error('sw: cache.addAll',err);
      for await (let i of assets) {
        try {
          ok = await cache.add(i);
        } catch (err) {
          console.warn('sw: cache.add',i);
        }
      }
    }

    return ok;
  }));

  console.log('ServiceWorker installed');
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
