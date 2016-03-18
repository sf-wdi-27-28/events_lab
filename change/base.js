console.log("Sanity Check: JS is working!");

function total(a, b) {
  return (a + b);
}

$(document).ready(function(){

  $("#time").text( Date.now() );

  $("input").on("change", function changeTotal(event) {
    var left = parseInt($("#left").val());
    var right = parseInt($("#right").val());
    var total = left + right;
    $("#total").val(total);
  });

  $("button").on("click", function handleClick(event) {
    $(".add").val("");
  });

});
