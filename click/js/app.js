//1.READY
alert("Go!");

$(document).ready(function() {

});

//3.CLICK
$("span").on("click", function createList(event){
  var something = $(this).text();
  $("ul").append("<li>" +something+ "</li>");
});
