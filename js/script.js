$(document).ready(function(){
    
    // When the location button is clicked then display current position in the message well.
    $("#location").on("click", function(){
        navigator.geolocation.getCurrentPosition(function(position){
            $("#message").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
        });
    });


});
