'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ca13fc1870252d33f6336e7524aa86cd",
"assets/AssetManifest.bin.json": "38e260f4977b460151dec40274637669",
"assets/AssetManifest.json": "51a074304ade7ffcdf836e4680a19fbf",
"assets/assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/OpenSans-Bold.ttf": "5112859ee40a5dfa527b3b4068ccd74d",
"assets/assets/fonts/OpenSans-BoldItalic.ttf": "9c5be0ee8ca242d91ee4e18840138928",
"assets/assets/fonts/OpenSans-Italic.ttf": "dac22be0d4aaa6e9f6ce8204be7fe2c9",
"assets/assets/fonts/OpenSans-Regular.ttf": "7df68ccfcb8ffe00669871052a4929c9",
"assets/assets/fonts/Raleway-Regular.ttf": "20d41940068e45b114d32b48d684ef39",
"assets/assets/fonts/Raleway-SemiBold.ttf": "87641f9900d717d6bfbf108b8755868e",
"assets/assets/images/about-me.png": "adc6519712dd08999ca136e99fdad5d6",
"assets/assets/images/background.png": "5ffab758eb1010b028308c07d1651d18",
"assets/assets/images/bg.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/email.svg": "5dd253e441e2f73c1be88d4a4d541623",
"assets/assets/images/gradient-background.svg": "49426455fe479bb90e367a3d29676a1a",
"assets/assets/images/icon-binary.svg": "b6536d8fa38f5503aab8fc7f61837827",
"assets/assets/images/icon-blockchain.svg": "68b5e50f05347f479054053d608117d4",
"assets/assets/images/icon-brain.svg": "e8b6694cf18305ff3cae9f0fd90ee49e",
"assets/assets/images/icon-calendar.svg": "dfbdc318b6c048cf957a9a3f9d6f61fb",
"assets/assets/images/icon-code.svg": "a90a84b41dda0afc8254090393856fe5",
"assets/assets/images/icon-conversation.svg": "b1142a61584fcf0a2a0a6e261ed03f6b",
"assets/assets/images/icon-person.svg": "8c8af18651dcc70e1aaac9cc74bff809",
"assets/assets/images/icon-phone.svg": "c6d373464a4c90a3c5fbae4aee2e2aaa",
"assets/assets/images/icon-sketch.svg": "d72de4c23e28b7bfde84b18388e56452",
"assets/assets/images/illustration.png": "a96098d800a777061a6769f6abf91294",
"assets/assets/images/instagram-outline.svg": "91077681aaa7e52b2d3c6ff90954081e",
"assets/assets/images/linkedin-outline.svg": "b31cca45148b16585a3a3f1516838cd4",
"assets/assets/images/linkedin.svg": "00e1d4638e45b3567cc041a53fea13c3",
"assets/assets/images/logo-docker.svg": "353942cb59ca29d1ab01c86ce01f299c",
"assets/assets/images/logo-ethereum.svg": "cd00ac6eabfa7f2f28f918e8c1170bb7",
"assets/assets/images/logo-fastapi.svg": "2152e78865f02dbd808c807ca68e4ec1",
"assets/assets/images/logo-firebase.svg": "ac881088e6c20eec699c9254997036b1",
"assets/assets/images/logo-flutter.svg": "b85ebfe7062db585be2664bf7ac0496f",
"assets/assets/images/logo-git.svg": "dd5183ed3e847fbdc0f425214fd024ac",
"assets/assets/images/logo-light.png": "8882eef3895640fa51b239dd8aa780a2",
"assets/assets/images/logo-light.svg": "b7f53cfbf46b2ae7c5808f1ea1a9cd2f",
"assets/assets/images/logo-mb.svg": "abdbaee730bc76de8b58f08cf56b79e9",
"assets/assets/images/logo-python.svg": "5fb6c198fb9bccfc85ba950fd92ec595",
"assets/assets/images/logo-solidity.svg": "b9ad729eedb374b05622665090bd3f9f",
"assets/assets/images/pinterest.svg": "deb15f50c1c3610c3c1dbe49ce90d4a0",
"assets/assets/images/profile-2.png": "031474676c8bf518d30b22f8a7bba991",
"assets/assets/images/profile.png": "23a4e8b955650c91063cae199d1a044e",
"assets/assets/images/review-philip.jpg": "b0e3a0eb5ea2e06717f1dcacd2824ebc",
"assets/assets/images/review-sharon.jpg": "5741f00b7d0ba21e90073530053aa685",
"assets/assets/images/telegram-outline.svg": "cd54503cab4efd8237d19dab557ed866",
"assets/assets/images/ui-goodshare-01.png": "5447a89591146fa1fd85690e95da1d95",
"assets/assets/images/ui-goodshare-02.png": "39c4047a9722ed0b3dae267cb960a131",
"assets/assets/images/ui-goodshare-02.svg": "e394be709cf203b09bcae84a96d53966",
"assets/assets/images/ui-goodshare-03.png": "182448cb6a2167b52200d6add78b1923",
"assets/assets/images/ui-goodshare-03.svg": "947585560b98b47b52f3fe61938b50c2",
"assets/assets/images/ui-goodshare-04.png": "b7fb734034d4a0930052491cb7fa6cdf",
"assets/assets/images/ui-goodshare-04.svg": "f6d1f6899584a89731bb64f33c628a55",
"assets/assets/images/ui-goodshare-05.svg": "456ca795408d57d504a01ed2a479e61a",
"assets/assets/images/ui-goodshare.png": "b613d2f19dff38a3298ef593c8a7bc77",
"assets/assets/images/ui-passgorithm-01.svg": "33112ad13aed43271aac157a91a667b9",
"assets/assets/images/ui-passgorithm-02.svg": "28cab14eb1cd71cfe2656120e4dc287d",
"assets/assets/images/ui-passgorithm-03.svg": "1dabaae8ee67435e725fd8f426763792",
"assets/assets/images/ui-passgorithm.png": "8a31f5cf35bdfd71f30270819c956f85",
"assets/assets/images/ui-ssc.png": "3cd24cc2ec8a9c89201b9658c127af81",
"assets/assets/images/ui-ssc.svg": "5232c550c805d8762bd502f445a2c290",
"assets/assets/images/whatsapp-outline.svg": "e5671574deee78b833689854f7bfa700",
"assets/assets/images/whatsapp.svg": "53ca3b2056ea5ceefbb4b1dbd1f3f111",
"assets/assets/images/youtube-outline.svg": "9cffa5a4c1bb7287c7f726e0e049a996",
"assets/assets/images/youtube.svg": "f60c47ced9ccdde081fb55a845170036",
"assets/FontManifest.json": "ccfebd692d7b009c860e03d0d4b8dc0d",
"assets/fonts/MaterialIcons-Regular.otf": "842c295666cd5bcdf7b7565b5d3a17ec",
"assets/NOTICES": "980c8199d5d97d459257c63132dbfc25",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "734fb02a745a168b932cabce56a66fc9",
"/": "734fb02a745a168b932cabce56a66fc9",
"main.dart.js": "ae95f85dc7d3d75943eabc84e1dff240",
"manifest.json": "7e6e0f0bed15a4a79657eec650c85390",
"version.json": "76e8b693ee7a7b43d3b078af487b1f7c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
