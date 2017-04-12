// Only change code below this line.
$(document).ready(function(){
    if (navigator.geolocation) {
      $("#location").on("click", function(){
           navigator.geolocation.getCurrentPosition(function(position){
          $("#message").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
        });
      });
    }
});