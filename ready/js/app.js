/*
  What needs to change so that the page says "Go!"?
*/

$(document).ready(function() {

  console.log("The page says:", $("h1").text());
  if ($("h1").text() === "Ready?") {
    console.log("Go!");
    alert("Hey Guys! Sure you're ready? Ok, click and be on your way!");
    //added "Go!"" into the .text() to set the the text for "h1"
    $("h1").text("Go!");
  } else {
    console.log("Can you make it say \"Go!\"?");
  }
});
