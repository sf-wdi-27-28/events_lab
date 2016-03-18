console.log("Sanity Check: JS is working!");

$(document).ready(function() {

});

$("span").on("click", function handleClick(event) {
$("ul").append("<li> "+ $(this).text() + " at: " + event.timeStamp +"</li>");
});

// });
// $("span").on("click", function trackClicks(event){
// $(this).clone().add("li").appendTo("ul");
// });
