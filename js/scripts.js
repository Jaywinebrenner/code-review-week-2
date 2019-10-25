// $(document).ready(function(){
//   $("form#handedness-form").submit(function(event){
//     event.preventDefault();
//     var hand = $("input:radio[name=hand]:checked").val();
//     alert(hand);
// });
//
//     $("form#fingerform").submit(function(event){
//       event.preventDefault();
//       var fingers = parseInt($("#fingercount").val());
//       alert(fingers);
// });
//
//     $("form#fingerform2").submit(function(event){
//       event.preventDefault();
//       var fingersfingers = parseInt($("#fingercount2").val());
//       alert(fingersfingers);
// });
//
//     $("form#organ").submit(function(event){
//       event.preventDefault();
//       var organ= $("input:radio[name=organ]:checked").val();
//       alert(organ);
// });
//
//     $("form#feetform").submit(function(event){
//       event.preventDefault();
//       var feetFingers = parseInt($("#feet").val());
//       alert(feetFingers);
//     });
//
//
// });


$(document).ready(function(){
  $("#finalsubmit").click(function(){
    var hand = $("input:radio[name=hand]:checked").val();
    var fingers = parseInt($("#fingercount").val());
    var fingersFingers = parseInt($("#fingercount2").val());
    var organ= $("input:radio[name=organ]:checked").val();
    var feetFingers = parseInt($("#feet").val());
    alert(hand);
    alert(fingers);
    alert(fingersFingers);
    alert(organ);
    alert(feetFingers);




  });
});



// //     // if (age) {
// //     //    var quote = 1000 - age;
// //     //    if (gender === 'male' && age < 56) {
// //     //      quote += 250;
// //     //    }
// //     //    $("#rate").empty().append(quote);
// //     //    $("#quote").show();
// //     //  } else {
// //     //    alert('Please enter your age.');
// //     //  }
// // });
// //
// //   });
