self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated");
  event.waitUntil(self.clients.claim());
});
//cahnges
self.addEventListener("message", async (event) => {
  if (event.data === "online") {
    console.log("Service Worker: Online");
    // Show notification (permission must be granted from the main script)
    self.registration.showNotification("You're Online!", {
      body: "Sync to the server.",
      icon: "/icon.png", // Ensure this file exists
      vibrate: [200, 100, 200],
    });
  }
});

console.log("Service Worker working");
