console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("span").on("click", function handleClick(event) {
    console.log("Click");
    $("ul").append('<li>' + $(this).text() + '</li>' + event.timeStamp);
  });


});
