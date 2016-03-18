console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  $("#time").text(Date.now());

});

$("input[type=text]").submit(function(event) {
    event.preventDefault();
});
