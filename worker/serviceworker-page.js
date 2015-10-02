var registration;
var endpoint;
var chrome_str;
var count = 0;

var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var API_KEY = 'AIzaSyATs7ORhZVUA2vPTizpYgVf1cgjNos7ajg';
var GCM_ENDPOINT = 'https://android.googleapis.com/gcm/send';

function checkSW(){
  writeLog('checking service worker');
  if (typeof registration === 'undefined'){
    writeLog('service worker registration is undefined');
    return;
  }
  if (registration.installing) {
    writeLog('Service worker installing');
  } else if(registration.waiting) {
    writeLog('Service worker is waiting');
  }
  if (registration.active) {
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
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
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
        } else{
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

function sendMail() {
  window.location = "mailto:MYUSER@mozilla.com?subject=CURL_ME&body="+chrome_str;
}

function writeLog(txt) {
  document.getElementById("log").innerHTML += txt + '<br>';
}
