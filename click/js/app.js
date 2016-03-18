console.log("Sanity Check: JS is working!");

$(document).ready(function() {
  console.log($(".time").text(Date.now()));
  $('span').click(function(){
    var time = Date.now();
    console.log(time);
    $('h2').append("<br/>" + $(this).text() + " at " + time);
  });
});
