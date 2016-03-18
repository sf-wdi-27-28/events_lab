console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  var startTime; // undefined at first
  var endTime; // undefined
  var total; // undefined

  $(window).on("keypress", function handleKeypress(event) {

    if (startTime) {
      endTime = Date.now();
      total = (endTime - startTime) / 1000;
      $("#total-time").text(total + " seconds");
    } else {
      startTime = Date.now();
    }

  });

});

/* Was able to come up with the undefined variables
and the code on line 9. I got caught up on how to specify
to use the spacebar and nothing else. I got endTime defined correctly
but crashed and burned with the code on line 14. I also
don't have a full grasp on "window" and when to use that
subject
*/
