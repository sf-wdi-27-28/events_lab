

$(document).ready(function() {

  $("span").on("click", function handleClick(event) {
    var itemText =   $(this).text()  + Date.now();
    $("ul").append("<li>" + itemText + "</li>");
  });

});
