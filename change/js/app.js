console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  $("#time").text(Date.now());
  $("input.add").on("change", function valueChange(event) {
    var leftInput = $("input#left").val();
    var rightInput = $("input#right").val();
    var leftValue = parseInt(leftInput) || 0;
    var rightValue = parseInt(rightInput) || 0;
    var total = leftValue + rightValue;
    $("#total").val(total);
  });
});
