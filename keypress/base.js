console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// User hits space, record "start time".
// Display start time
//User hits space, record "stop time"
//Display stop time
//Calculate stop time - start time
// Display total time

function millisecondsToTime(milli){
      var milliseconds = milli % 1000;
      var seconds = Math.floor((milli / 1000) % 60);
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
      var minutes = Math.floor((milli / (60 * 1000)) % 60);
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return minutes + ":" + seconds + "." + milliseconds;
}

var keyPress = false;
var startTime = 0;
var endTime = 0;
var totalTime = 0;
var formattedTime = 0;
//Record start time
  $(window).on("keypress", function toggleKey(event) {
      keyPress = !keyPress;
  //When keyPress is true, get an end time
  if (keyPress) {
    startTime = Date.now();
  }
  else if (!keyPress) {
    endTime = Date.now();
    totalTime = endTime - startTime;
    formattedTime = millisecondsToTime(totalTime);
  }
  $("#total-time").html(formattedTime);
  });

});
