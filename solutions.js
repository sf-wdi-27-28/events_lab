//1. ready

$(document).ready(function() {

  console.log("The page says:", $("h1").text());
$("h1").text("GO!")
  if ($("h1").text() === "Go!") {
    console.log("Success!");
  } else {
    console.log("Can you make it say \"Go!\"?");
  }
});

//2. submit
$("a").on("click", function handleClick(event){
    event.preventDefault();
});



//3. change



//4. click
$("span").click(function(){
 $('ul').append("<li>" + $(this).text() + "</li>");
});
