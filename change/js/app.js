console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  $("#time").text(Date.now());

  //stuck :(

  $('#total').change(function sum(a, b) {
    a = parseInt($('#left').val());
    b = parseInt($('#right').val());
    return (a+b);
  });
});
