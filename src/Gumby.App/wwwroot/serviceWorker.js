﻿var cacheName = 'gumby-cache';
var filesToCache = [
    // '/', //Not properly serving '/' right now due to CDN restrictions
    '/favicon.ico',

    // Html and css files
    '/index.html',
    '/css/site.css',

    // PWA files
    '/manifest.json',
    '/serviceWorker.js',
    '/icons/gumby-192x192.png',
    '/icons/gumby-512x512.png',

    // Blazor / WASM framework
    '/_framework/blazor.webassembly.js',
    '/_framework/blazor.boot.json',
    '/_framework/blazor.server.js',
    '/_framework/wasm/mono.js',
    '/_framework/wasm/mono.wasm',
    
    // Project Dependencies
    '/_framework/_bin/Microsoft.AspNetCore.Blazor.dll',
    '/_framework/_bin/Microsoft.AspNetCore.Components.Browser.dll',
    '/_framework/_bin/Microsoft.AspNetCore.Components.dll',
    '/_framework/_bin/Microsoft.Extensions.DependencyInjection.Abstractions.dll',
    '/_framework/_bin/Microsoft.Extensions.DependencyInjection.dll',
    '/_framework/_bin/Microsoft.JSInterop.dll',
    '/_framework/_bin/Mono.Security.dll',
    '/_framework/_bin/Mono.WebAssembly.Interop.dll',
    '/_framework/_bin/mscorlib.dll',
    '/_framework/_bin/System.ComponentModel.Annotations.dll',
    '/_framework/_bin/System.Core.dll',
    '/_framework/_bin/System.dll',
    '/_framework/_bin/System.Net.Http.dll',
    '/_framework/_bin/MatBlazor.dll',
    '/_framework/_bin/Blazor.Fluxor.dll',
    '/_framework/_bin/Toolbelt.Blazor.TimeZoneKit.dll',

    // Content Dependencies
    '/_content/MatBlazor/dist/matBlazor.js',

    // Project Assemblies
    '/_framework/_bin/Gumby.App.dll',
    '/_framework/_bin/Gumby.Climb.Journal.Contract.dll',
    '/_framework/_bin/Gumby.Climb.Journal.Domain.dll',
    '/_framework/_bin/Gumby.Climb.Route.Contract.dll',
    '/_framework/_bin/Gumby.User.Contract.dll',
    '/_framework/_bin/Gumby.User.Domain.dll'

    // Routed Pages
    //'/routes'
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function (e) {
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request, { ignoreSearch: true })
            .then(response => {
                return response || fetch(e.request);
            })
    );
});