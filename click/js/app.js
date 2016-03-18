console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  $(".span").on("click", function (events){

    $("span").on("click", function handleClick(event) {
    var itemText = "You Clicked: " + $(this).text() + " at " + Date.now();
    $("ul").append("<li>" + itemText + "</li>");
  });
  })
});

//my original code
$(".span").on("click", function (events){
  $("ul").append("events");
}

/*Had to look at the solutions for this one. Couldn't figure out 
how to use the <li> tags. Still trying to find out truly how to
use "This"
*/
