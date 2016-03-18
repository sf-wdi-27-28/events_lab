console.log("Sanity Check: JS is working!");

$(document).ready(function() {
  var state = "end";
  var startTime = 0;
  var endTime = 0;
  totalTime = 0;
  $(window).on( "keydown", function( event ) {
    if (event.which === 32) {
      if (state === "end") {
        startTime = Date.now();
        state = "start";
        // console.log(state);
        // console.log("startTime is " + startTime);

      } else {
          endTime = Date.now();
          state = "end";
          totalTime = endTime - startTime;
          $("#total-time").text(totalTime);
            // console.log(state);
            // console.log("endTime is " + endTime);
            // console.log("totalTime is " + totalTime);

      }
    }
    });
});
