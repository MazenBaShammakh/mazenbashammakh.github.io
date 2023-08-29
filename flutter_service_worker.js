'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "496cae7cd0a1528a94ee66f7482b25c8",
"assets/AssetManifest.json": "08a42a0fb95c965978c3edfe11a0e2d6",
"assets/assets/3d-geometric-backgrounds-lg.afdesign": "5f94f23f5d3fa6409eee87370f0a5fab",
"assets/assets/3d-geometric-backgrounds-md.afdesign": "3d6c354224316334a0a80c72605b6834",
"assets/assets/3d-geometric-backgrounds-sm.afdesign": "ccf3bfd5362384fe016fdab5c2038c72",
"assets/assets/3d-geometric-backgrounds.afdesign": "549724111a8254fff49c503d06de3e06",
"assets/assets/background-lg.png": "25a566a9c9c4c8107bfeefcb277688de",
"assets/assets/background-md.png": "26d2ad1b62ed6efa4ef4979cd510d226",
"assets/assets/background-sm.png": "12d234b7fff298e60050f8bedc8200a8",
"assets/assets/background-xl.jpg": "79108ec9a0175de13cc960d958384c40",
"assets/assets/hello-robot.png": "b5c8a70979f8e52dd7efdb8d39d36982",
"assets/assets/img1.jpeg": "e6a603f2f6f214dbb39429a3bf24b273",
"assets/assets/img1.png": "a0da6b828305dbd8455643d23d4dae57",
"assets/assets/img10.png": "ec26df27cac65245a300688b306bc95e",
"assets/assets/img11.png": "059f1d1bc99953a5575c99b06e15e706",
"assets/assets/img12.png": "34f1125e09bb59a60268a85feb304274",
"assets/assets/img13.png": "1d751cc4dcf454e63a9d506b5234c4ef",
"assets/assets/img14.png": "86e06f05caae4bf814c0bfaaa3e41570",
"assets/assets/img2.jpg": "295e616107a28ab090d3880a1289aa6a",
"assets/assets/img2.png": "bc99f745338dde22ba850628c378655a",
"assets/assets/img3.jpg": "f738ce8fd26f8cc3e7bae85c4ef089f8",
"assets/assets/img4.jpg": "e71912bdbd5455df1af97a17b34d3bbf",
"assets/assets/img5.jpg": "9be00ec390d1b85db2fca366104084b4",
"assets/assets/img6.jpg": "1f86097b12a05f7128cabcc80332ecb4",
"assets/assets/img7.jpg": "a5c1a3244e80af2d7e9c0fe7ecb0c163",
"assets/assets/img8.jpg": "d2727451ed0516e21cc4f0842ae33b60",
"assets/assets/img9.jpg": "79108ec9a0175de13cc960d958384c40",
"assets/assets/instagram-circle.png": "9ce453af4fd358f3ef7b563421572ae6",
"assets/assets/linkedin-circle.png": "f1c067e1bcce182b304564bd4c7b3fec",
"assets/assets/shapes-lg.png": "7dc533e11a4112e06503cc327c95a8c8",
"assets/assets/shapes-md.png": "9fa0a4f9c45f21c22a74089ee0f2d4a4",
"assets/assets/shapes-sm.png": "1d788758c838666764abf9cbcc87cd10",
"assets/assets/shapes-xl.png": "86e06f05caae4bf814c0bfaaa3e41570",
"assets/assets/star.png": "0bec53514663d339eedec75679c5472f",
"assets/assets/telegram-circle.png": "d4feba41eb7a7e826f94c785db3caaf4",
"assets/assets/thumbs-up.png": "40afd4be7cca848d46565fb6a1890ff5",
"assets/assets/whatsapp-circle.png": "fc844e76c745fa8c9ceae64132c4fddd",
"assets/assets/youtube-circle.png": "25cde0d0589844ff81964969126d9c14",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c5bfbf4be40a388bc36106dd3d72a8ba",
"assets/NOTICES": "b294bf74a51ccc87f0ca2f49026d159e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d45d7e07c56e833f092f45e12efa6497",
"/": "d45d7e07c56e833f092f45e12efa6497",
"main.dart.js": "37553d000740cd631d3725899124b5b5",
"manifest.json": "8ac1eedd7b18cf61e16ea30c83b34149",
"version.json": "13a14dc35f8a9ae5c71df282b51f2dbb"};
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
