console.log("Sanity Check: JS is working!");

$(document).ready(function() {

    var initialize = function() {
        $("#time").text(Date.now());
        $("#left").val(0);
        $("#right").val(0);
        $("#total").val(0);
    };
    initialize();

    var totalValue = function() {
        return parseInt($("#total").val());
    };
    var leftValue = function() {
        return parseInt($("#left").val());
    };
    var rightValue = function() {
        return parseInt($("#right").val());
    };
    console.log(typeof(totalValue()));

    var calculateTotal = function() {
        $("#total").val(leftValue() + rightValue());
    };

    $("#left").keyup(function() {
        $("#time").text(Date.now());
        return calculateTotal();
    });
    $("#right").keyup(function() {
        $("#time").text(Date.now());
        return calculateTotal();
    });

    $(".reset").on("click", function() {
        initialize();
    });

});



// //$("#total").on("blur", function sumNumbers(){
//
//     total = $("input .add #left").val() + $("input .add #right").val();
//
//
// });
