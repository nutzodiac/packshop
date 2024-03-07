'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "02b0cf51dfdd19082676e4557cc7c98d",
"index.html": "0f0823e77f68c0583571982718825d10",
"/": "0f0823e77f68c0583571982718825d10",
"main.dart.js": "3615d0951800e61dbacf3192ba29c8f4",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5e33c6124d6f5be9a7a615c2d4ff6c35",
"assets/AssetManifest.json": "d8f5e9da77fe2211a72aac39e67a0c50",
"assets/NOTICES": "d3a53261710f8cc609a1ff1027f472a4",
"assets/FontManifest.json": "dd4c06bab73d65ab82051eab72f4a46f",
"assets/AssetManifest.bin.json": "cab59c6c36f84b5f4992addf99093412",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/barcode_scanner/assets/libraries.txt": "f38cd5bda030f47c37341bd4218e0d74",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "c4e74b96e3f8a1f87c65a456727b44c7",
"assets/fonts/MaterialIcons-Regular.otf": "7d9131cabff4eb3d5a8a3cda0cce8f4f",
"assets/assets/images/background.png": "328e07f816a99540d64f6a72b1f01b52",
"assets/assets/images/rectangle_mb_660.png": "fc2b8ea646bfbccf7d05410508e0d916",
"assets/assets/images/logo.png": "ba21edbc823339245730a6d8e8e13c82",
"assets/assets/icons/status_disable_mb.png": "0bf0dbc5d5d3134c05482e6c9826f60f",
"assets/assets/icons/delete_lang_mb.png": "2d33c93146f464d37a83b80c8c487a80",
"assets/assets/icons/copy_web.png": "7800c6fe7ad520ecae00a220d14592a6",
"assets/assets/icons/delete_web.png": "1a8ba3c98c18c7b2cd86ee747a64fdfe",
"assets/assets/icons/status_enable_mb.png": "692143fed76efaa0782a4bd2c1c21d4c",
"assets/assets/icons/world_mb.png": "9cf24e928960c4561fda6405bd2306e6",
"assets/assets/icons/add_mb.png": "86e69173cfb68aca6a5ee40f5a3fd149",
"assets/assets/icons/hamburger_mb.png": "1e61965e79e00912bd4e0f56590f9711",
"assets/assets/icons/filter_mb.png": "476565265afda7b2a45bdc2c203479ef",
"assets/assets/icons/add_lang_mb.png": "2b6963320514c35a394d8f8fa9710258",
"assets/assets/icons/edit_mb.png": "057478b8b380f50b696eb0c8b19479e7",
"assets/assets/icons/calendar_light.png": "2c9224ed4c8b90fff2c37035658ed0c9",
"assets/assets/icons/calendar_dark.png": "eaaf8cae2eb95c7ac49743d68c6128bf",
"assets/assets/icons/delete_mb.png": "903e38c202fb9d3831adfffa521709b9",
"assets/assets/icons/dropdown_mb.svg": "144b6f9437c39d0411b989c446774183",
"assets/assets/icons/warning%2520.png": "e042c34a1a394e7d2f9355d88d94b982",
"assets/assets/icons/add_web.png": "9e8f8b97319e843ee17d83904f21be38",
"assets/assets/fonts/IBMPlexSansThai-Regular.ttf": "fc735dbc25f53b2e86fa1bc9b48dcd07",
"assets/assets/fonts/IBMPlexSansThai-Bold.ttf": "349b7a81784d32544b940eef1b732d61",
"assets/assets/fonts/IBMPlexSansThai-Medium.ttf": "1a97ab43394a81f589e1998d872a5afb",
"assets/assets/fonts/IBMPlexSansThai-Thin.ttf": "d43db428ddfb9d112cb7bcbdd818c1cb",
"assets/assets/fonts/IBMPlexSansThai-Light.ttf": "ff4e85b8a5479112c66053957ec7ee73",
"assets/assets/fonts/IBMPlexSansThai-ExtraLight.ttf": "94176889157e8cbf070a04f0ecebb8e2",
"assets/assets/fonts/IBMPlexSansThai-SemiBold.ttf": "0957429280bd077b91df947b7da608f7",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
