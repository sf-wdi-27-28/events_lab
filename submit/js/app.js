console.log("Sanity Check: JS is working!");

$(document).ready(function() {

      $("#time").text(Date.now());
      $("form").on("click", function prevent(event){
        $("form").html('<iframe width="420" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>');
        $("form").text(event.preventDefault());
      });

});
