console.log("Sanity Check: JS is working!");

$(document).ready(function() {
  $("form").submit(function noRickRoll(event) {
  console.log("Always Gonna Give You Up!");
  event.preventDefault();
});
  $("#time").text(Date.now());
});
