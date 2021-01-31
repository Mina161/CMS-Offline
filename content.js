chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        var x = document.getElementsByClassName('btn btn-primary contentbtn');
        var i;
        for (i = 0; i < x.length; i++) {
            if(x[i].value != "Watch Video" && x[i].value != "Report and Issue"){
                x[i].setAttribute("style","display:show");
            }
        }
      }
    }
  );
