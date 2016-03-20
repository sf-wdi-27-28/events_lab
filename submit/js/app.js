console.log("Sanity Check: JS is working!");

$(document).ready(function stopTheLink() {
  $("form").on("click", function handleClick(){
      event.preventDefault();
      // more code down here
  });
  $("#time").text(Date.now());

});
