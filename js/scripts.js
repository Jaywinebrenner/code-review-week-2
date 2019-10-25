$(document).ready(function(){
  $("#handedness-form").submit(function(event){
    event.preventDefault();
    var hand = $("input:radio[name=hand]:checked").val();
    alert(hand);


    $("#fingerform").submit(function(event){
      event.preventDefault();
      var fingers = parseInt($("#fingercount").val());
      alert(fingers);

    });



  });


});



// $(document).ready(function(){
// //   $("#fingerform").submit(function(event){
// //     event.preventDefault();
// //     var fingers = parseInt($("#fingercount").val());
// //     var fingersFingers = parseInt($("#fingercount2").val());
// //     var eyes = $("select#eyes").val();
// //
// //
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
