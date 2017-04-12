function geoFindMe() {
    
    // When the location button is clicked then display current position in the message well.
    function success(position){
        $("#message").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    }
    
    function error(){
        $("#message").html("Sorry there is no Geolocation to return");      
    }

    navigator.geolocation.getCurrentPosition(success, error);
}
