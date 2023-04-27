//Create the variable for latitude
let latitude = 0;
//Create the varaible for longitude
let longitude = 0;

window.onload = function(){
    const date = new Date();
    const dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    document.getElementById('date').innerHTML = dateString;
}

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(success)

} else {
  console.log("Geolocation is not available in your browser.");
}

function success(position){
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
    console.log(latitude, longitude);
}