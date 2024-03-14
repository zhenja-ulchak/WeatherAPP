

const citi = document.querySelector(".citi")
const nameCIti = document.querySelector(".nameCIti")
const main = document.querySelector(".main")

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(positionCiti);
} 
//Get the latitude and the longitude;
function positionCiti(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  callApi(lat, lng)
}


function callApi(lat , lng) {
    const apiKey = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=151c6529860a9b87a6be30bacf15fa7b`
    console.log(apiKey);

fetch(apiKey)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
  citi.innerHTML = data.coord.lat
  nameCIti.innerHTML = data.name
  const arrDeg = data.weather[0]
  for(deg in arrDeg){
   
    console.log(arrDeg[deg]);
  }
  console.log(arrDeg.main);
console.log(arrDeg);
  
})
.catch(error => {
  console.error('Error:', error);
});
}
