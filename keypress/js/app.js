console.log("Sanity Check: JS is working!");

$(document).ready(function() {

    var SpaceBarPresses = 0;
    var startTime = 0;

    $(window).keyup(function(e){

        if (e.keyCode === 32 && SpaceBarPresses % 2 === 0){

            $("#total-time").text("00:00 - Time is ticking!");
            startTime = Date.now();
            SpaceBarPresses += 1;

            //used for checking my times and SpaceBarPresses
            // console.log(SpaceBarPresses);
            // console.log(startTime);
        }

        else if (e.keyCode === 32 && SpaceBarPresses % 2 !== 0) {

            endTime = Date.now();
            $("#total-time").text((endTime - startTime)/1000 + " seconds");
            SpaceBarPresses += 1;

            //used for checking my times and SpaceBarPresses
            // console.log(SpaceBarPresses);
            // console.log(endTime);
        }

    });
    $(".reset").on("click", function() {
        $("#total-time").text("00:00");
        SpaceBarPresses = 0;
        startTime = 0;
    });

});
