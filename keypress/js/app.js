console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  var startTime = null;
  var finishTime = null;

  $(window).keypress(function(event){
    if (event.charCode === 32){
      if (!startTime){
        startTime = Date.now();
      } else if (!finishTime){
        finishTime = Date.now();
        var totalTime = finishTime - startTime;

        var timeStr = totalTime.toString();
        timeArr = timeStr.split("");
        newArr = [];
        for (i = timeArr.length - 1; i >= 0; i--){
          /// HH:MM:SS.THT

          if ((timeArr.length - 1) - i === 3 ){
            newArr.unshift(".");
            newArr.unshift(timeArr[i]);
          } else if (((timeArr.length - 1) - i === 5) || ((timeArr.length - 1) - i === 7)) {
            newArr.unshift(":");
            newArr.unshift(timeArr[i]);
          } else {
            newArr.unshift(timeArr[i]);
          }
        }
        finalTime = newArr.join("");

        console.log(newArr);
        $('#total-time').text(finalTime);
      } else {
        $('#total-time').text("00:00");
        startTime = null;
        finishTime = null;
      }
    }
  });

});
