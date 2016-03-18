console.log("Sanity Check: JS is working!");

$(document).ready(function() {

    var timestamp = function() {
        return $("#time").text(Date.now());
    };

    var initialize = function() {
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
        return calculateTotal();
    });
    $("#right").keyup(function() {
        return calculateTotal();
    });

});



// //$("#total").on("blur", function sumNumbers(){
//
//     total = $("input .add #left").val() + $("input .add #right").val();
//
//
// });
