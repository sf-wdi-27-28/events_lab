console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

});

("input").on("input", function calculate(){
var valueLeft = $("#left").val();
var valueRight = $("#right").val();
$("#total").val(parseInt(valueLeft) + parseInt(valueRight));
});
