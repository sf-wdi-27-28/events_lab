// console.log("Sanity Check: JS is working!");
//
// $(document).ready(function() {
//
// });
// var firstPress;
// var lastPress;
// var diff;
var secondPress;
var startTime;
var endTime;

$(window).on("keypress", function start(event){

  if(startTime){
    endTime = Date.now();
    diff = (endTime - startTime) / 1000;
    $("#total-time").text(diff + " sec");
  }else{
    startTime = Date.now();
  }
});
