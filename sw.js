// Service worker minimal : nécessaire pour que Chrome propose « Installer l'application ».
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {}); // tout passe par le réseau (l'app vit dans Google Apps Script)
