

$(document).ready(function() {
  $("h1").text("Go!");
  console.log("The page says:", $("h1").text());
  if ($("h1").text() === "Go!") {
    console.log("Success!");
  } else {
    console.log("Can you make it say \"Go!\"?");
  }
});
