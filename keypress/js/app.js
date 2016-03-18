console.log("Sanity Check: JS is working!");

$(document).ready(function() {
  var startTime;
  var stopTime;
  var running = false;
  var totalTime;
  $(window).on('keypress', function boom(event){
    if(event.keyCode === 32){
      if(running){
        endTime = Date.now();
        totalTime = ((endTime - startTime)/1000);
        running = false;
        $('#total-time').text(totalTime);
      }else{
        startTime = Date.now();
        running = true;
      }
    }
  });
});
