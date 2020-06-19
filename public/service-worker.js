const cacheName = "v1";

// call install event
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
});

// call activate event
self.addEventListener('activate', (event) => {
    // console.log('Service Worker: Activated');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map (cache => {
                    if(cache!==cacheName){
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(chache);
                    };
                })
            );
        })
    );
});

// call fetch event
self.addEventListener('fetch', event => {
    console.log('Service Worker: Fetching');
    event.respondWith(
        fetch(event.request)
        .then(response => {
            // make copy/clone of response
            const responseClone = response.clone();
            // open cache
            caches
            .open(cacheName)
            .then(cache => {
                // add response to cache
                cache.put(event.request,responseClone);
            });
            return response;
        })
        .catch(() => {
            caches.match(event.request).then(response => response)
        })
    );
});