// console.log("Sanity Check: JS is working!");
//
// $(document).ready(function() {
//
// });
var firstPress, lastPress, diff;
$(window).on("keypress", function startTime(event){

  if(firstPress){
  lastPress = Date.now();
  diff = (lastPress - firstPress) / 1000;
}else{
  firstPress = Date.now();
}
});
