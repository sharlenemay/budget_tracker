const cacheName = "v1";
const cacheAssets = [
    'index.html',
    'about.html',
    'styles.css',
    'main.js',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
]

// call install event
self.addEventListener('install', (event) => {
    // console.log('Service Worker: Installed');
    event.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            console.log('Service Worker: Caching Files');
        })
    )
});

// call activate event
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
});