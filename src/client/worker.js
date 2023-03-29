console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified From ecommerce-legends ",
    icon: "https://res.cloudinary.com/dnhpmvk2p/image/upload/v1680105920/Screen_Shot_2023-03-29_at_18.03.08_ghkbs7.png"
  });
});