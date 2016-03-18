//got help from TA (with Adam and Justin)... which was helpful, but also extremely confusing he explained as he went and I failed to absorb most of it. I would try to comment on what I think is happening, but I don't think I would get very far. Going to attempt playing with other exercises after submitting this!
console.log("Sanity Check: JS is working!");

$(document).ready(function() {
 var startTime;
 var endTime;
 var running = false;
 var totalTime;
 $('body').keyup(function(event){
   if(event.keyCode === 32){
     if(running){
       endTime = Date.now();
       console.log('end time is: ', endTime);
       totalTime = ((endTime - startTime)/1000);
       console.log('total time is: ', totalTime);
       running = false;
       $('#total-time').text(totalTime + " seconds");
     } else {
       running = true;
       startTime = Date.now();
       console.log('start time is: ', startTime);
     }

   }
   console.log(event.keyCode);
 });
});
