// Hello WebPush
console.log('Hello Push')

self.addEventListener('push', function(event: any) {
  console.log('event', event.data.text())
  const data = event.data.json()
  event.waitUntil(
    // @ts-ignore
    self.registration.showNotification(data.title, {
      body: data.body,
    })
  );
});

