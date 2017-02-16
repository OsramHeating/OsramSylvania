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
    onDeviceReady: function() {
                var devicePlatform = device.platform;
                if(devicePlatform == "iOS"){
                    var ow = document.getElementsByClassName('calcwrapper');
                    var mb = document.getElementsByClassName('middlebar');
                    var vb1 = document.getElementsByClassName('verticalbar');
                    var vb2 = document.getElementsByClassName('verticalbar2');
                    var vb3 = document.getElementsByClassName('verticalbar3')
                    ow[0].style.top = "20px"
                    mb[0].style.top = "20px"
                    vb1[0].style.top = "20px"
                    vb2[0].style.top = "20px"
                    vb3[0].style.top = "20px"
                }
                
            function showAlert(msg) {
                navigator.notification.alert(
                    msg,  // message
                    alertDismissed,         // callback
                    'ERROR',            // title
                    'OK'                  // buttonName
            );
        }
    }
};
