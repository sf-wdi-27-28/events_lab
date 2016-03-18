
$(document).ready(function(){

  console.log("Sanity Check: JS is working!");

  $("#time").text( Date.now() );
  $("input").on("click", function handleClick(event) {
    event.preventDefault();
  });
  $("#video").on("click", function embedVideo(event) {
    $("body").append('<br><iframe width="420" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>');
  });
});
