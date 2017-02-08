var pushEnabled = false;

window.addEventListener('load', function() {
  var subscribeButton = document.getElementById('plsnotify');

  subscribeButton.addEventListener('click', function() {
    if (pushEnabled === false) {
      console.log('subscribe pls');
    } else {
      console.log('unsubscribe pls');
    }
  })
});

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(initialiseServiceWorkers);
} else {
  console.warn('no SWs :(');
}

function initialiseServiceWorkers() { 
  if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
    console.warn('no notification support :()');
    return false;
  }

  if (Notification.permission === 'denied') {
    console.warn('blocked notifications :( why cruel world');
  }

  if (!('PushManager' in window)) {
    console.warn("push messaging isn't supported :( wry");
  }
}