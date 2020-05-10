console.log("Hello Push"),self.addEventListener("push",(function(t){console.log("event",t.data.text());const o=t.data.json();t.waitUntil(self.registration.showNotification(o.title,{body:o.body}))}));
//# sourceMappingURL=push.sw.f5e7a816.js.map
