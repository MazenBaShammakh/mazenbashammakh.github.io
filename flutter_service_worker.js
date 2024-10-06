'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f86dbe45d3c5a7bc9638aef2c680b6cd",
"assets/AssetManifest.bin.json": "a21c54a9e6687fe73a2c9090137b2562",
"assets/AssetManifest.json": "ca0ac492ecd825bd0f5adca29bd90110",
"assets/assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/Lato-Italic.ttf": "5d22f337a040ae2857e36e7c5800369b",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/icons/logo_mark.svg": "51ac866e10d391ba5919e274d380358d",
"assets/assets/icons/logo_mark_bg.png": "3d39bc5560c0f1d6ef159cc4e08449cb",
"assets/assets/images/building_00.jpg": "e162d2bca24cebf802287b106f109858",
"assets/assets/images/building_01.jpg": "7f49644b43d37cb4425e5e720d7a524c",
"assets/assets/images/building_02.jpg": "317cac9367783708d086cfe61fa53064",
"assets/assets/images/building_03.jpg": "23d4f1c924b6580502f6f6f65b6f7e58",
"assets/assets/images/building_04.jpg": "ee62735a092d46f3df18266b983e1578",
"assets/assets/images/contact_jeddah.jpg": "7791eeeead73fb2c0e6c8f254523ab87",
"assets/assets/images/contact_riyadh.jpg": "174792cf1a218e856d3f5a91eec01890",
"assets/assets/images/hero_convention_center.jpg": "974d066f3fd700ceec715f05aa207046",
"assets/assets/images/hero_fract.jpg": "b4cb15bbe925f017d94dc9acac78cf7f",
"assets/assets/images/hero_private_residence.jpg": "ec64464cfcb8eac322c77c15d632d827",
"assets/assets/images/location_placeholder.jpg": "09e5dbf7495e939b136ee4b7df67ec26",
"assets/assets/images/news.jpg": "03114f81f377875d22507a4b8de652ea",
"assets/assets/images/office.jpg": "1c074b52eaa7c5d5cca58221bb9b1242",
"assets/assets/images/pattern_01.jpg": "47537ce1d6673126583a386b5461d78b",
"assets/assets/images/profile_placeholder.jpg": "0502adc3890e99ea771fa11a0db1e56a",
"assets/assets/images/project_00.jpg": "322b2e3f132dff2809806d13f4a3f9f9",
"assets/assets/images/project_01.jpg": "658cc339cfade9cbe512b0ae7bed900f",
"assets/assets/images/project_02.jpg": "18f7b006d3e5a05e37a777b8158f7be3",
"assets/assets/images/project_03.jpg": "72a7a529c2b45e61854788b697fc7d8c",
"assets/assets/images/project_04.jpg": "fc9629736cbc9a2c12062e796ad50cf0",
"assets/assets/images/project_05.jpg": "6b93fb6977c006d39d0d0198a9001aaf",
"assets/assets/images/project_06.jpg": "a0da9db1ef40e0a4b1dcac6a00d5d992",
"assets/assets/images/project_07.jpg": "030e55fa58ab276c2e2e330d5b22f9a5",
"assets/assets/images/project_08.jpg": "41ef3d03a8c23bcdfbf06aa8554dda80",
"assets/assets/images/service_architecture.jpg": "5e936900ec8bab07081f6ba6e040ef00",
"assets/assets/images/service_contract.jpg": "cae0db84f5164a19fee90cd8cd6fb157",
"assets/assets/images/service_engineering.jpg": "ce0d6260e8bf813a5e60dac9293ddb16",
"assets/assets/images/service_interior.jpg": "d43722d4badca59a310a6e8d0976db38",
"assets/assets/images/service_management.jpg": "b2d2d6dec7785fb9dab2cb3fd16986e2",
"assets/assets/images/service_urban.jpg": "c5ec00869385be2c9cb2f241fa710c83",
"assets/FontManifest.json": "13910b5bf3317bd69934bff7eb9d25e8",
"assets/fonts/MaterialIcons-Regular.otf": "5e2a25aec1c53bc3c1d1bd5607a7e57a",
"assets/NOTICES": "82a0881d36f2d3e513f96e53a067dee7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "c59ad209a6c12df4531b2e7fdfa5afa4",
"favicon_old.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2d92d14117b2751e91061204547be68f",
"icons/android-icon-144x144.png": "5edcea594326e726fcb275f64f954b62",
"icons/android-icon-192x192.png": "eade4067d75e01affd55490f7c7ad399",
"icons/android-icon-36x36.png": "16deda53b9607a3604ce767075851bac",
"icons/android-icon-48x48.png": "cce2b46b3280c486f97a49e828a52cb2",
"icons/android-icon-72x72.png": "0e66da56f6087c54038baad78a0afdb4",
"icons/android-icon-96x96.png": "8bacbc2cbb99a20a61740a3dcc42a569",
"icons/apple-icon-114x114.png": "d5b77254e49c4860d9f1fece196097fe",
"icons/apple-icon-120x120.png": "8196834d5e14cde4fd2764fef34d86a5",
"icons/apple-icon-144x144.png": "5edcea594326e726fcb275f64f954b62",
"icons/apple-icon-152x152.png": "c6f4255a8cbf0c8ed2b74ca7d019ab19",
"icons/apple-icon-180x180.png": "3b0791530c4fafa4246b902838bb6eb8",
"icons/apple-icon-57x57.png": "89a86d106742a7bb268a21a38d0c7a67",
"icons/apple-icon-60x60.png": "ca9611b49d24c8b5372555a650a7483f",
"icons/apple-icon-72x72.png": "0e66da56f6087c54038baad78a0afdb4",
"icons/apple-icon-76x76.png": "c752aa7d6b93dccc84995193823d2e8c",
"icons/apple-icon-precomposed.png": "974c79bd0a0693abd98e997f9ed88d87",
"icons/apple-icon.png": "974c79bd0a0693abd98e997f9ed88d87",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "dfde35721a94c73e5e374a063579df11",
"icons/favicon-32x32.png": "45bff032d77479fa6e88dc7b9d65e1c5",
"icons/favicon-96x96.png": "8bacbc2cbb99a20a61740a3dcc42a569",
"icons/favicon-generator.zip": "5369e58ccc932c8f7c719af84ee8d1dd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "3ae0a7cef33640582ed502f482360705",
"icons/ms-icon-144x144.png": "5edcea594326e726fcb275f64f954b62",
"icons/ms-icon-150x150.png": "cae1b2e00560a2af01ddf4b1dd2e7a23",
"icons/ms-icon-310x310.png": "e96674b014d3f0cae4d72269f9fb441d",
"icons/ms-icon-70x70.png": "1e3e0d80b418d970382ff113d868a464",
"index.html": "64eac0f2239026d904756fce47916b5f",
"/": "64eac0f2239026d904756fce47916b5f",
"main.dart.js": "1d49eba37f77cc9eb758233ebf9295ff",
"manifest.json": "e9335033d4ea8140f70571649200dd8d",
"version.json": "05decfbdf5d6025c1360e14354aa9a19"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
