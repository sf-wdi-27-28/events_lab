console.log("Sanity Check: JS is working!");

$(document).ready(function() {
  $("span").click(function(){
    $("<li>" + "<h1>" + $(this).text()+"</h1>").appendTo("ul");
});
});
