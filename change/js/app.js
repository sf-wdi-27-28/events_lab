console.log("Sanity Check: JS is working!");

$(document).ready(function() {
  $("#left, #right").on('keyup input',function valSum(){
      var left = parseInt($('#left').val());
      var right = parseInt($('#right').val());
      if (!left){
        left = 0;
      }
      if(!right){
        right = 0;
      }
      var num = left + right;
      $("#total").val(num);
  });


  $("#time").text(Date.now());
  $('body').append('<button>RESET</button>');
  $('button').click(function(){
    $('#left').val(null);
    $('#right').val(null);
    $('#total').val(null);
  });

});
