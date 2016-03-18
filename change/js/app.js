console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $("input").change(function summer(event) {
    var left = parseInt($("#left").val());
    var right = parseInt($("#right").val());
    var total = left + right;
    console.log(total);
    $("#total").val(total);
  });

});
