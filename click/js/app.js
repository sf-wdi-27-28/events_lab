console.log("Sanity Check: JS is working!");

$(document).ready(function() {
  $("span").on("click", function handleClick(event){
    var buttonText = "This is what you clicked: " + $(this).text();
    $("ul").append("<li>" + buttonText + "</li>");
  });
});
