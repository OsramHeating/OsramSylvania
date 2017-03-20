/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
var ready = false;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
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
            // update the page inside this timeout
            document.querySelector("#title").innerHTML = direction;
            document.querySelector("html").style.background = color;
          }, 20);
        }
        // not passing in options makes the plugin fall back to the defaults defined in the JS API
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

