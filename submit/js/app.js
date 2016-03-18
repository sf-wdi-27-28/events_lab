console.log("Sanity Check: JS is working!");

$(document).ready(function() {
  $("form").eq(1).on("click", function handleClick(event){
    event.preventDefault();
  });
  $("form").eq(1).text('<iframe width="420" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>');
  $("#time").text(Date.now());

});
;



//action="https://www.youtube.com/watch"
