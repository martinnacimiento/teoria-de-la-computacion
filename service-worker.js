/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "46c30c7be535a52cb5c501ced61a2838"
  },
  {
    "url": "assets/css/0.styles.619da894.css",
    "revision": "8964f523d96b70e44ad0283e29ef2119"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.369e8a76.js",
    "revision": "e90f3b23caf5f5752b95821f44fbfc4f"
  },
  {
    "url": "assets/js/11.570fb543.js",
    "revision": "99c7449db6a513d2ae13e9d19800bb02"
  },
  {
    "url": "assets/js/12.d51f82e2.js",
    "revision": "3d0fd8d22eee3728fb16281d5f4227ee"
  },
  {
    "url": "assets/js/13.2e64a1c9.js",
    "revision": "dfc6aec518095bab7032168d42898d22"
  },
  {
    "url": "assets/js/14.07081446.js",
    "revision": "70d036f8693ecf018e1c0fc5dc0bd26c"
  },
  {
    "url": "assets/js/2.1d24719b.js",
    "revision": "3b9b2fe8464f56830dbd203d7b50f7ba"
  },
  {
    "url": "assets/js/3.1dc01336.js",
    "revision": "85da8600a2ed387eb9bf695e7ede2019"
  },
  {
    "url": "assets/js/4.7d2fc014.js",
    "revision": "03b98df54ad34e503c05ed9cc81a218c"
  },
  {
    "url": "assets/js/5.abbda57c.js",
    "revision": "914d10d3747680df0075d69b213968fe"
  },
  {
    "url": "assets/js/6.e6e70a20.js",
    "revision": "0ec255d000bcca56aa354ddfa989b289"
  },
  {
    "url": "assets/js/7.578cb8b4.js",
    "revision": "33c33d8451f41d576adb14d3da785a88"
  },
  {
    "url": "assets/js/8.9c810090.js",
    "revision": "acfee7c673d8ea286954bd23a6d50773"
  },
  {
    "url": "assets/js/9.b29aaa5b.js",
    "revision": "c2639c0dd334dda6e9de986e6cf936b7"
  },
  {
    "url": "assets/js/app.3e879b2a.js",
    "revision": "7ac2c4d226cc3bb774263b811f9effdc"
  },
  {
    "url": "clases-teoria/clase1.html",
    "revision": "9b4f3e4e54f405eb54b67426b54f78d2"
  },
  {
    "url": "clases-teoria/clase2.html",
    "revision": "4964f83221a6716ee153edeefd629197"
  },
  {
    "url": "clases-teoria/index.html",
    "revision": "bae6e23ec71a8e3592bcace43220b801"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "0007f54f269b0019195a2a8c58ec8ed6"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "18eb3edf56afaa578fd1a5ce3289f0c7"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "46247496fea4561e134f44543222e736"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "49da6d6392ade9e7e1d6fc82a585ee49"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "b6689202ba2ee715adf4341aa9345ab6"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "1b0300536008acb19ab40678679ea2cb"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "7913a025df0953b00db3b50439742bfe"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "4d8ab9f0c2cf0d86b5f9fa350298e8aa"
  },
  {
    "url": "img/compiler-interpreter.png",
    "revision": "5a0bda3d60311322d6455780a0ce28e3"
  },
  {
    "url": "img/home.jpg",
    "revision": "320981ff3f7b95791cb1d73bb6330f2f"
  },
  {
    "url": "img/the-process-of-translate.jpg",
    "revision": "c8153ac21048fce7dff7ebc7270a4846"
  },
  {
    "url": "index.html",
    "revision": "97e49790ffa63cad4b61eb2542b3f6a1"
  },
  {
    "url": "lecturas/index.html",
    "revision": "4bffe4a2c47138565d84e4137cc59475"
  },
  {
    "url": "lecturas/lectura1.html",
    "revision": "db43111c5b72980cf2e9eef7eb9658fc"
  },
  {
    "url": "lecturas/lectura2.html",
    "revision": "9ed326bd246a179cf52b2001c5a7762e"
  },
  {
    "url": "lecturas/lectura3.html",
    "revision": "50419deadc7ff760e29b413f552b6957"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
