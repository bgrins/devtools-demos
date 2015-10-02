var notification;
var registration;
var endpoint;
var chrome_str;
var count = 0;

var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var API_KEY = 'AIzaSyATs7ORhZVUA2vPTizpYgVf1cgjNos7ajg';
var GCM_ENDPOINT = 'https://android.googleapis.com/gcm/send';

var NotificationHandler = {

};

function setClickHandler(noti){
  noti.onclick = function(){
    notify();
  };
}

function getNotificationLinkTarget() {
  var checked = document.querySelector("[name=target]:checked");
  var target = checked && checked.value;
  console.log(checked, target);
  return target || "_blank";
}

function notify() {
  writeLog('notification.onclick: window.open mozilla.org');
  window.open('http://www.mozilla.org', getNotificationLinkTarget());
}

function getNotificationText() {
  return document.querySelector("#notification-text").value;
}
function popNotification() {
  notification = new Notification(getNotificationText());
  notification.onclick = notify;
}

function notifyMe() {
  // Let's check if the browser supports notifications
  writeLog('Notification.permission: '+ Notification.permission);
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted"  ) {
    // If it's okay let's create a notification
    popNotification();
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied' || Notification.permission === "default") {
    writeLog('requesting Notification Permission');
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      writeLog('Notification.permission: '+ Notification.permission);
      if (permission === "granted") {
        popNotification();
      }
    });
  }
}

function closeNotification() {
    console.log("CLOSING", notification);
  if (notification) {
    notification.close();
  }
}


function checkSW(){
  writeLog('checking service worker');
  if(typeof registration === 'undefined'){
    writeLog('service worker registration is undefined');
    return;
  }
  if(registration.installing) {
    writeLog('Service worker installing');
  } else if(registration.waiting) {
    writeLog('Service worker is waiting');
  }
  if(registration.active) {
    writeLog('Service worker active');
  }else{
    writeLog('service worker NOT active');
  }
}

function unregSW(){
  registration.unregister().then(function(boolean) {
    writeLog('reg.unregister() returned: '+ boolean);
  });
}

function regSW(){
  writeLog('regSW');
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js').then(function(reg) {
        registration = reg;
        checkSW(reg);
      }).catch(function(error) {
        // registration failed
        console.log('Registration failed: ' + error);
      });
    }
}

function subscribe(){
  navigator.serviceWorker.ready.then(
      function(serviceWorkerRegistration) {
  // Do we already have a push message subscription?  
      serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true})
      .then(function(subscription) {
          endpoint = subscription.endpoint;
          writeLog('subscribed: '+subscription);
          writeLog('endpoint:');
          if (is_chrome){
            var endpointSections = endpoint.split('/');
            var subscriptionId = endpointSections[endpointSections.length - 1];
            chrome_str = 'curl --header "Authorization: key='+API_KEY+'"';
            chrome_str += ' --header "TTL: 60"  --header Content-Type:"application/json" https://android.googleapis.com/gcm/send -d "{\\"registration_ids\\":[\\"';
            chrome_str += subscriptionId;
            chrome_str += '\\"]}"';
            writeLog(chrome_str);
            document.getElementById("mailto_btn").style.visibility="visible";
          }else{
            writeLog('curl -I -X POST --header "TTL: 60" ' + subscription.endpoint);
            document.getElementById("doXhr_btn").style.visibility="visible";
          }

      })
      .catch(function(err) {
          writeLog('Error during subscribe: '+err);
      });
  });
}

function doXhr() {
    if (!endpoint || !registration){
      writeLog('endpoint undefined');
      return;
    }
    // Registration is a PUT call to the remote server.
    var post = new XMLHttpRequest();
    post.open('POST', endpoint);
    // post.setRequestHeader("Content-Type",
    //         "application/x-www-form-urlencoded");
    post.onload=function(e) {
        writeLog("xhr got data: " + e.target.response);
    };
    post.onerror=function(e) {
        writeLog("received: " + e.total);
    };

    writeLog("Sending endpoint..." + endpoint);
    post.send("push="+encodeURIComponent(endpoint));
}

function sendMail(){
  window.location = "mailto:MYUSER@mozilla.com?subject=CURL_ME&body="+chrome_str;
}

function writeLog(txt){
  document.getElementById("demo").innerHTML += txt + '<br>';
}

function checkEnv() {
  console.log('checkEnv');
  if (!('serviceWorker' in navigator)) {
    writeLog('Your Browser doesn\'t support ServiceWorkers');
  }
  if (!(window.PushManager)){
    writeLog("Your Browser doesn't support Push");
  }
  if (document.URL.indexOf('https') == -1){
    writeLog("You need to be on https or localhost");
  }
}
// checkEnv();