$(document).ready(function(){
  $("handedness-submit").submit(function(event){
      var leftHand = $("input:radio[name=lefthand]:checked").val();
      var rightHand = $("input:radio[name=righthand]:checked").val();

      function valueChanged() {
    if ($("#lefthand").checked == true) {
        var leftHand = $("input:radio[name=lefthand]:checked").val();
        document.getElementById("is_Mercedes").value = 0;
    } else {
        document.getElementById("is_BMW").value = 0;
        document.getElementById("is_Mercedes").value = 1;
    }
    console.log(document.getElementById("is_BMW").value);
    console.log(document.getElementById("is_Mercedes").value)
}




      // if ($("input:radio[name=lefthand]:checked").val();)

    event.preventDefault();
  });


});
