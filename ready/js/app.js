/*
  What needs to change so that the page says "Go!"?
*/
<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

$(document).ready(function() {

  console.log("The page says:", $("h1").text());
  if ($("h1").text() === "Go!") {
    console.log("Success!");
  } else {
    console.log("Can you make it say \"Go!\"?");
  }
});

$("h1").text();
$("h1").text("Go!");
