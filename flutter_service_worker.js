'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "781e1b05446c1bfce4368c5ae32db5a7",
"assets/AssetManifest.bin.json": "2fe4dc7ac12672cbd0cdbd3f305edd27",
"assets/AssetManifest.json": "ed46d70edbb034f2db24f43526992ac5",
"assets/assets/fonts/Neuton-Bold.ttf": "44f1e0284018f07dd3297ed0b0d8b956",
"assets/assets/fonts/Neuton-ExtraBold.ttf": "094000411afc17fab76d09fae812180d",
"assets/assets/fonts/Neuton-Italic.ttf": "a48c29307f253100f3436c3565c61aab",
"assets/assets/fonts/Neuton-Light.ttf": "b9db45aa6c1095824e4945271c47a11d",
"assets/assets/fonts/Neuton-Regular.ttf": "d6ccf0914ebdc84aa7b9ba5d9e3e1f16",
"assets/assets/icons/bulb.png": "35781bc2c26c1093f3ac69df5dfc24e5",
"assets/assets/icons/bulb.svg": "e1441f51df509e1a01f540e5387ccb20",
"assets/assets/icons/bulb_dark.png": "36b9b14bc37520a29ea9ec55571ffe6c",
"assets/assets/icons/bulb_dark.svg": "52e1717b45d0698f7c1cfcf4efa57cf5",
"assets/assets/icons/document.png": "fb07dbdf4affb592499bd2138a095dda",
"assets/assets/icons/document.svg": "7cf1be3c9611a85655b99ca6788fb9e5",
"assets/assets/icons/document_dark.png": "c4690f7363f4a588afd7ff61ace6e1bb",
"assets/assets/icons/document_dark.svg": "7f1afda5795917980c69a341de39ec87",
"assets/assets/icons/mb-favicon.zip": "67d35a4616b905eee8af7a7346a317a6",
"assets/assets/icons/mb.png": "034fde887b0c08f8ee0872e83829d106",
"assets/assets/icons/mb1024.png": "ab11a590a8f873c0e6c1f7e7950440a9",
"assets/assets/icons/mb2.png": "9a73cf696fb88c16cc6c4103ca509c07",
"assets/assets/icons/mb512.png": "814a5ad8ac4fe6cd3575128b539b5b8e",
"assets/assets/icons/mobile.png": "02cd820ebfc3c4fe973e30afb57c779c",
"assets/assets/icons/mobile.svg": "fd2a3860ba996de1a286d1be6876e650",
"assets/assets/icons/mobile_dark.png": "6ac3ed29acc9dbd00fd3fa15878980ac",
"assets/assets/icons/mobile_dark.svg": "cff366f202e903e8c81f517a69841520",
"assets/assets/icons/planet.svg": "e35688d7f2099e004f6643322cca4863",
"assets/assets/icons/robot.png": "187be9703426bea2c5d40d8d7a3a2a03",
"assets/assets/icons/robot.svg": "9ccce962b0fc0a90c2b733ea6213851d",
"assets/assets/icons/robot_dark.png": "6d409050abc64fde039838c7d993aeeb",
"assets/assets/icons/robot_dark.svg": "f5d8eeddb6f7a85ab0c452d65fd75f79",
"assets/assets/images/bb_1.png": "b7895421b24a968c68b1f48cb0341822",
"assets/assets/images/bb_2.png": "39f25921a7e22561a176979187d389bc",
"assets/assets/images/bb_3.png": "cbafb1960ce0592beb8e687ab4272cb8",
"assets/assets/images/bb_4.png": "e7590849b2726110233945bbaf5b1a0c",
"assets/assets/images/bg_1.jpg": "89bb20694d58280ffda53a080fa344d8",
"assets/assets/images/bg_2.jpg": "12cd50d0668e4f6e0ef6b466ddac837a",
"assets/assets/images/bg_3.jpg": "a6cc880fedb3e9ccf5e296c166e9f6a6",
"assets/assets/images/bg_4.jpg": "861005b57f1ddc507a300d379d5f3ca2",
"assets/assets/images/bg_circles.png": "ae8a40ceac8c6e536fa92ca78c915870",
"assets/assets/images/bg_pattern_1_blue.jpg": "89bb20694d58280ffda53a080fa344d8",
"assets/assets/images/bg_pattern_2_orange.jpg": "1d4ba4e1af8cd3cd5acc7c42b9ff9203",
"assets/assets/images/bg_pattern_3_purple.jpg": "d682af4a6a3b70a04808722499c4e40b",
"assets/assets/images/build.png": "9d40edd0410cc6f5e6ffbc794048ce25",
"assets/assets/images/enjoy.png": "0edca9bfe72c63a73fe8b5a89dc141ab",
"assets/assets/images/learn.png": "193fddb71bbd7ae429f79a0178b0ff33",
"assets/assets/images/pattern_1.svg": "1568bfa80a9b19dc52c4958aa422face",
"assets/assets/images/placeholder_project.jpg": "5d06c7be9b747abb0d140c706d30063e",
"assets/assets/images/profile.jpg": "031474676c8bf518d30b22f8a7bba991",
"assets/assets/images/project_arch.png": "27dd58035642a946ec77ce11097b0b64",
"assets/assets/images/project_arch_2.png": "9d7815e5a1bbb1c58085dee82c26e79f",
"assets/assets/images/project_mv.png": "1e29a11497c5c5c23ad848201ad0ab73",
"assets/assets/images/project_passgorithm.png": "7c9047a71243fe0f701ced2dbe66306a",
"assets/assets/images/quote.png": "ddeae08915142213a67ef4fe4a1a407e",
"assets/assets/images/ssc_ui.png": "af66c94c8649a430ef933fab50f67432",
"assets/assets/images/ui_arch.png": "4c59495c3ff18f9b24b64a31d10c6935",
"assets/assets/images/ui_moria.png": "c53d2514d88791a9b37eceb83ba2bc83",
"assets/assets/logos/email.svg": "0a1ca059791fbb6816555cfa5a1ec4fa",
"assets/assets/logos/fastapi.svg": "7a0f47ea428d76b33d332fd48e353c44",
"assets/assets/logos/figma.svg": "5470c877dc2f8ac645f166d241637d0c",
"assets/assets/logos/firebase.svg": "ecb3ed0f150909e92905a9b34d443ddb",
"assets/assets/logos/flutter.svg": "377d9b5aa5d30589ea2cdcbe88dad5ae",
"assets/assets/logos/github.svg": "c0634bc665706b4733c8ffe5c7a59abc",
"assets/assets/logos/js.svg": "89e86ded60b0f0ff07dcb902a8603856",
"assets/assets/logos/linkedin.svg": "620753bca2fe9a7372b9e9e729494820",
"assets/assets/logos/mb.png": "0b3fe2f75e0b7c6c108e37af66c56e8e",
"assets/assets/logos/mb.svg": "ee36f4d0025dbf668c44a311621557bc",
"assets/assets/logos/openai.svg": "33db7541ad514aa119bbac16ef9cbd9c",
"assets/assets/logos/python.svg": "732434587c1a42dfa21a116fe10067e5",
"assets/assets/logos/react.svg": "6fcddf3d5d1093f0fe12909cdf745dc5",
"assets/assets/logos/ts.svg": "c50236e885c77e8a99799a57111cfe6c",
"assets/assets/logos/tum.png": "c3d0b0155d83d88e14cbe092acd754f4",
"assets/assets/logos/watson.svg": "dbd7e0a1e557ab33cc5eedab2e1454c0",
"assets/FontManifest.json": "4474eeaea0ddba4b59814698d5ed8a9c",
"assets/fonts/MaterialIcons-Regular.otf": "ec3318e094e8a682a4bab47f69b66496",
"assets/NOTICES": "8371a08bd5032f6c0eb8b47e5df48161",
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
"favicon.ico": "756ac2dfaf82bc58629eef3b8af154f9",
"favicon_old.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d5774f1e3d91ff3d4c3eee23a8a57df7",
"icons/android-icon-144x144.png": "d4ecf683091b1f9428680376e7576964",
"icons/Icon-192.png": "4c2214e1d3aae69c22eeb5bcd4fc056c",
"icons/Icon-192_old.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6fdcf90ee83210656ad5c9e99290a001",
"/": "6fdcf90ee83210656ad5c9e99290a001",
"main.dart.js": "ee77b8476ec8e460c3b4944e06c06067",
"manifest.json": "feca660a28908cd7b0a376af82b302b4",
"manifest_old.json": "8a7ea5996b318f66a89d015c5de2ead3",
"version.json": "728729f50640265a4bdc0e2eee8efdba"};
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
