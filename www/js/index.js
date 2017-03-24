var ready = false;
var app = {
    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function(pageNum) {
                ready = true;
                //var devicePlatform = device.platform;
                document.addEventListener('backbutton', backPressed, false);
    }
};

function backPressed(){
    var fileName = location.pathname.split("/").slice(-1);
    var previousScreen = 'powerflowrate.html';
    if(fileName == "airtools.html" || fileName == "heatguns.html" || fileName == "series123.html" || fileName == "serpentine.html" || fileName == "sureheatmax.html" || fileName == "sureheatjet.html" || fileName == "sureheatmaxht.html" || fileName == "threaded.html"){
        previousScreen = "products.html";
    }
    else if(fileName == "delta.html" || fileName == "heattransfer.html" || fileName == "ohmslaw.html" || fileName == "powerflowrate.html" || fileName == "psibar.html" || fileName == "singlephase.html" || fileName == "tempconvert.html" || fileName == "threephase.html"){
        previousScreen = "index.html";
    }
    slide('right', 'black', 0.1, previousScreen);
}

function showAlert(msg) {
    if(ready){
        navigator.notification.alert(
            msg,  // message
            alertDismissed,         // callback
            'ERROR',            // title
            'OK'                  // buttonName
        );
    }
}

function slide(direction, color, slowdownfactor, hrf) {
    if(ready){
        if (!hrf) {
          setTimeout(function () {
        
            document.querySelector("#title").innerHTML = direction;
            document.querySelector("html").style.background = color;
          }, 20);
        }
        
        var theOptions = {
          'androiddelay': 100,
          'iosdelay': 100,
          'direction': direction,
          'duration': 500,
          'slowdownfactor' : slowdownfactor,
          'href': hrf,
          'fixedPixelsTop' : 0, // optional, the number of pixels of your fixed header, default 0 (iOS and Android)
          'fixedPixelsBottom': 0  // optional, the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
        };
        window.plugins.nativepagetransitions.slide(
            theOptions,
            function () {
              console.log('------------------- slide transition finished');
            },
            function (msg) {
              alert('error: ' + msg);
            });
    }
  }

