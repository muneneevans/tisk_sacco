webpackJsonp([1],{74:function(){"use strict";"function"==typeof importScripts&&(importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js"),workbox&&(workbox.routing.registerRoute(/.vendor.js/,workbox.strategies.cacheFirst({cacheName:"vendor-cache"})),workbox.routing.registerRoute(/.*.js/,workbox.strategies.staleWhileRevalidate()),workbox.routing.registerRoute(/.*.json/,workbox.strategies.cacheFirst({cacheName:"json-cache"})),workbox.routing.registerRoute(/.*\.css/,workbox.strategies.staleWhileRevalidate({cacheName:"css-cache"})),workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif)/,workbox.strategies.cacheFirst({cacheName:"image-cache",plugins:[new workbox.expiration.Plugin({maxEntries:20,maxAgeSeconds:1814400})]})),workbox.routing.registerRoute(/.*\.(?:ttf|woff|woff2)/,workbox.strategies.cacheFirst({cacheName:"font-cache",plugins:[new workbox.expiration.Plugin({maxEntries:20,maxAgeSeconds:1814400})]})),workbox.routing.registerRoute(/\/*/,workbox.strategies.staleWhileRevalidate({cacheName:"others-cache"}))))}},[74]);