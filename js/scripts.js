$(document).ready(function(){
  $("#finalsubmit").click(function(event){
    event.preventDefault();
    var hand = $("input:radio[name=hand]:checked").val();
    var fingers = parseInt($("#fingercount").val());
    var fingersFingers = parseInt($("#fingercount2").val());
    var organ= $("input:radio[name=organ]:checked").val();
    var feetFingers = parseInt($("#feet").val());
    // alert(hand);
    // alert(fingers);
    // alert(fingersFingers);
    // alert(organ);
    // alert(feetFingers);



    // if (fingers >= fingersFingers) {
    //   $("span#language").empty().append("C#");
    //   $("#output-div").show();
    // }

    // if (hand === "lefthand") {
    //
    //   $("span#language").empty().append("Ruby");
    //   $("#output-div").show();
    //       }

    if ((hand === "lefthand")) {
      $("span#language").empty().append("Ruby");
      $("#output-div").show();
    } else if (fingers >= 10) {
      $("span#language").empty().append("C#");
      $("#output-div").show();
    } else {
      //  block of code to be executed if the condition1 is false and condition2 is false
    }







  });
});
