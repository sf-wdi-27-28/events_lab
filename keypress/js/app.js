console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  var begin;
  var end;
  var ellapsedTime;

  $(window).on("keypress", startOrStopTime(event) {

    if (beign) {
      end = Date.now();
      ellapsedTime = (end - begin) / 1000;
      $("#total-time").text(ellapsedTime);
    } else {
      begin = Date.now();
    }

  });

});
