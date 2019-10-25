$(document).ready(function(){
  $("form#handedness-form").submit(function(event){
    event.preventDefault();
    var hand = $("input:radio[name=hand]:checked").val();
    alert(hand);
});

    $("form#fingerform").submit(function(event){
      event.preventDefault();
      var fingers = parseInt($("#fingercount").val());
      alert(fingers);
});

    $("form#fingerform2").submit(function(event){
      event.preventDefault();
      var fingersfingers = parseInt($("#fingercount2").val());
      alert(fingersfingers);
});

    $("form#eyeform").submit(function(event){
      event.preventDefault();
      var eye= $("input:radio[name=hand]:checked").val();
      alert(eye);
});
//     $("#eyes-submit").click(function(){
//       // event.preventDefault();
//       var eye = $("select#eye").val();
//       alert(eye);
// });

    $("form#feetform").submit(function(event){
      event.preventDefault();
      var feetFingers = parseInt($("#feet").val());
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
