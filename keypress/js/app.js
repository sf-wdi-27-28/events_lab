console.log("Sanity Check: JS is working!");

$(document).ready(function() {

});

$(document).on("keypress", function stopAndStart(event) {
if (event.which === 32) {
console.log(event.timeStamp);
}
});
