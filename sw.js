self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fm-store').then(function(cache) {
     return cache.addAll([
       'setup/rcity/',
       'setup/rcity/index.html'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
