console.log("Sanity Check: JS is working!");

$(document).ready(function() {

var startTime;
var endTime;
var Total;

$(window).on("keypress", function (e)) {

	if (e.keyCode ==== 32 && startTime) {
		endTime = Date.now();
		total = (endTime - startTime) / 1000;
		  $("#total-time").text(total + " seconds");
    } else {
      startTime = Date.now();
    }

  });

});

