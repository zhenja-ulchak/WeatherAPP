


const nameCIti = document.querySelector(".nameCIti")
const main = document.querySelector(".main")
const TEMP = document.querySelector(".TEMP")
const humidity = document.querySelector(".humidity")
const speed = document.querySelector(".speed")
const tempCelvin = 273.15

const one = 1.0

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(positionCiti);
} 
function positionCiti(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  callApi(lat, lng)
}


function callApi(lat , lng) {
  const apiKey = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=151c6529860a9b87a6be30bacf15fa7b`

fetch(apiKey)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
  nameCIti.innerHTML = data.name
  const arrDeg = data.weather[0]
  const mainTemp = data.main.temp
  TEMP.innerHTML = result(mainTemp) + "°C"
  humidity.innerHTML = data.main.humidity + "%"
  speed.innerHTML = data.wind.speed + " Km/h"
  console.log(mainTemp);
  for(deg in arrDeg){
   
    arrDeg[deg]
  }
  arrDeg.main
arrDeg
  
})
.catch(error => {
  console.error('Error:', error);
});
}

function result(params) {
  let temp = (params-tempCelvin) * one
  console.log(parseInt(temp));
  return parseInt(temp)
}
