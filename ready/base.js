/*
  What needs to change so that the page says "Go!"?
*/
//challenge 1
$(document).ready(function(){
  console.log( "The page says:", $("h1").text("GO!") );
});

$("h1").text("Go!");

if ( $("h1").text() === "Go!" ){
  console.log( "The page says:", $("h1").text() );
  console.log("Success!");
} else {
  console.log( 'Can you make it say "Go!"?' );
}
