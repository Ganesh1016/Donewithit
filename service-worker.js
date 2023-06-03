// File: service-worker.js

const CACHE_NAME = 'todo-app-cache-v1';

const urlsToCache = [
  './dist/assets/index-65331af0.js',
  './dist/assets/index-eaf8f4d8.css',
  './dist/assets/space-bg-a471cb2d.webp'
  // Add any additional assets you want to cache here
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Use fetch to cache each URL individually
        const cachePromises = urlsToCache.map(url => {
          return fetch(url)
            .then(response => cache.put(url, response))
            .catch(error => console.log(`Caching failed for ${url}`, error));
        });

        // Wait until all requests are cached
        return Promise.all(cachePromises);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        // If the request is not cached, fetch it from the network
        return fetch(event.request);
      })
  );
});
