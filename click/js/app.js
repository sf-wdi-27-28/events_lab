console.log("Sanity Check: JS is working!");

$(document).ready(function() {

});

$("span").on("click", function addOnClick() {
    $("ul").append('<li></li>');
});
