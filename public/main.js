// make sure service workers are supported
if ('serviceWorker' in navigator){
    // console.log("service worker supported");
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('./service-worker.js')
        .then(register => console.log('Service Worker Registered'))
        .catch(err => console.log(`Service Worker: Error: ${err}`))
    })
}