  function slide(direction, color, slowdownfactor, hrf) {
    if (!hrf) {
      setTimeout(function () {
        // update the page inside this timeout
        document.querySelector("#title").innerHTML = direction;
        document.querySelector("html").style.background = color;
      }, 20);
    }
    // not passing in options makes the plugin fall back to the defaults defined in the JS API
    var theOptions = {
      'direction': direction,
      'duration': 1000,
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