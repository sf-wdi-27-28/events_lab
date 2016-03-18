console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  $("#time").text(Date.now());

  var youTubeLink = $.parseHTML('<iframe width="420" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>');

  $("input").on("click", function() {
      this.disabled = true;
      $("#rickrolled").append(youTubeLink);
  });

});
