import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


navigator.serviceWorker.register('sw.js');

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}


async function whenReady() {
  const registration = await navigator.serviceWorker.ready
  console.log('reg', registration)
  // notifyMe()
  const subscription = await registration.pushManager.getSubscription()
  console.log('subscription', subscription)

  if (subscription) {
    return subscription;
  }

  const vapidPublicKey = 'BPoaWp5itJgtWh4hkZ2kXh9VisrXktuez32tfvajqPg_siNQAK3EwEoA0XZuNUSgx-JfhLjgQr6kcLE0e4n6A0o'

  const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
  return registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: convertedVapidKey
  });
}

function manageSubscription(subscription?: PushSubscription) {
  console.log(subscription)
}

whenReady().then(manageSubscription)
