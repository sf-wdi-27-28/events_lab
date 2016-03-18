console.log("Sanity Check: JS is working!");

$(document).ready(function() {
//got it to show, but it's moving spans to the ul
  $('span').on('click', function trackClick(){
    $('ul').append(this);
});

});
