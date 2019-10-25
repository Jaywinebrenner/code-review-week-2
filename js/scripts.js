$(document).ready(function(){
  $("handedness-submit").submit(function(event){
      var leftHand = $("input:radio[name=lefthand]:checked").val();
      var rightHand = $("input:radio[name=righthand]:checked").val();


      // if ($("input:radio[name=lefthand]:checked").val();)

    event.preventDefault();
  })




})
