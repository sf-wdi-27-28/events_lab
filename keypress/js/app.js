console.log("Sanity Check: JS is working!");

var times = [];
$(document).ready(function timer(event) {
  $(document).on("keypress", function time(event){
      times.push((new Date).getTime());
      var totaltime=times[times.length-1]-times[times.length-2];
      $("#total-time").text(totaltime/1000+"s");
    });
});
