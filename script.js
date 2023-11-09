
// Correct Syntax
  window.onload = function () {
  var pageTitle = document.title;
  var attentionMessage0 = "⚡️Don't forget this...";
  var attentionMessage1 = "📢 Come back!";
  var myTitleInterval;

    document.addEventListener('visibilitychange', function (e) {
      var isPageActive = !document.hidden;
      if (!isPageActive) {
        // Alternate attentionMessage
        myTitleInterval = setInterval(setAttentionMessage, 500);
         function setAttentionMessage() {
            document.title = document.title == attentionMessage0 ? attentionMessage1 : attentionMessage0;
            }
                }
      else {
              clearInterval(myTitleInterval);
              document.title = pageTitle;
      }
     });
    };


    document.addEventListener("DOMContentLoaded", function() {
      let pElements = document.querySelectorAll('p.example');
      let isGreen = true;

      setInterval(function() {
          for (let i = 0; i < pElements.length; i++) {
              pElements[i].style.backgroundColor = isGreen ? '#50C878' : '#FFAA33';
          }
          isGreen = !isGreen;
      }, 500);
  });
