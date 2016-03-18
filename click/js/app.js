console.log("Sanity Check: JS is working!");

$(document).ready(function() {

    var addOnClick = function(event) {

        var buttonHTML = event.target.valueOf();
        var buttonText = $(buttonHTML).text();

        var timestamp = new Date();
        var formattedTimestamp = " Clicked On: " + (timestamp.getMonth()+1) + "/" + timestamp.getDate() + "/" + timestamp.getFullYear() + " @ " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds();
        var listItem = $('<li>'+buttonText+" --> "+formattedTimestamp+'</li>');

        //used console.log to check what I was selecting was correct
        //console.log(buttonHTML);

        $("#myList").append(listItem);

        //ended up DRYingup the below code
        // var li = '<li>';
        // var liEnd= '</li>';
        // var newListItem = li + textOfButton + liEnd;
        // var html = $.parseHTML(newListItem);
        // debugger
        //
        // $("ul").append(html);

    };

    $("span").on("click", addOnClick);

});
