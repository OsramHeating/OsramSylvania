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
                var fileName = location.pathname.split("/").slice(-1)
                var devicePlatform = device.platform;
                if(devicePlatform == "iOS"){
                    if(fileName == "index.html"){
                        var ow = document.getElementsByClassName('calcwrapper');
                        var mb = document.getElementsByClassName('middlebar');
                        var vb1 = document.getElementsByClassName('verticalbar');
                        var vb2 = document.getElementsByClassName('verticalbar2');
                        var vb3 = document.getElementsByClassName('verticalbar3');
                        ow[0].style.top = "15px";
                        mb[0].style.marginTop = "5%";
                        vb1[0].style.top = "15px";
                        vb2[0].style.top = "15px";
                        vb3[0].style.top = "15px";
                    }
                    else if(fileName == "products.html"){
                        
                    }
                    else{
                        var hd = document.getElementsByClassName('header');
                        var hdd = document.getElementsByClassName('headerdivider');
                        hd[0].style.top = "5%";
                        hdd[0].style.top = "5%";
                        var cw = document.getElementsByClassName('calcwrapper');
                        cw[0].style.bottom = "2%";
                    }
                }
    }
};

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

