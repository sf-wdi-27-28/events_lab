console.log("Sanity Check: JS is working!");

$(document).ready(function() {
  $(".input").on("click", function stopClick (event){
       return false;
   })
  $("#time").text(Date.now());

});
