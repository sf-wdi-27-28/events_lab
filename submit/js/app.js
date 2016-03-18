console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  $("#time").text(Date.now());

});
//2.SUBMIT
$("#imperatives").on("click", function stopSubmitting(event){
  event.preventDefault();
  alert("DO NOT SUBMIT");
});
