console.log("Sanity Check: JS is working!");
//HELPED very much by TA in concourse!
$(document).ready(function() {
  var startTime;
  var endTime;
  var running = false;
  var totalTime;
  $('body').keyup(function(event){
    if(event.keyCode === 32){
      if(running){
        endTime = Date.now();
        console.log('end time is: ', endTime);
        totalTime = ((endTime - startTime)/1000);
        console.log('total time is: ', totalTime);
        running = false;
        $('#total-time').text(totalTime + " seconds");
      } else {
        running = true;
        startTime = Date.now();
        console.log('start time is: ', startTime);
      }

    }
    console.log(event.keyCode);
  });
});
