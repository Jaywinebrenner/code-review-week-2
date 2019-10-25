$(document).ready(function(){
  $("#finalsubmit").click(function(event){
    event.preventDefault();
    var hand = $("input:radio[name=hand]:checked").val();
    var fingers = parseInt($("#fingercount").val());
    var fingersFingers = parseInt($("#fingercount2").val());
    var organ = $("input:radio[name=organ]:checked").val();
    var feetFingers = parseInt($("#feet").val());
    // alert(hand);
    // alert(fingers);
    // alert(fingersFingers);
    // alert(organ);
    // alert(feetFingers);

    $("#output-div").show();
    if (hand === "lefthand") {
      $("span#language").empty().append("Ruby");
      $("#output-div").show();
    } else if (hand === "righthand" && fingers >= 5) {
      $("span#language").empty().append("C#");
      $("#output-div").show();
    } else if (hand === "righthand" && fingers >= 5 && fingersFingers >= 5) {
      $("span#language").empty().append("Python");
      $("#output-div").show();
      alert("1");
    } else if (hand === "righthand" && fingers < 5 && fingersFingers < 5 && organ === "liver") {
      $("span#language").empty().append("Java");
      $("#output-div").show();
      alert("1");
    } else if (hand === "righthand" && fingers < 5 && fingersFingers < 5 && organ === "kidneys" && feetFingers >= 2) {
      $("span#language").empty().append("LOLCODE");
      $("#output-div").show();
      alert("1");
    } else {
      $("span#language").empty().append("nothing");
      $("#output-div").fadeIn();
    }







  });
});
