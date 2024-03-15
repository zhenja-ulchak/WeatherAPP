
const nameCIti = document.querySelector(".nameCIti")
const main = document.querySelector(".main")
const TEMP = document.querySelector(".TEMP")
const humidity = document.querySelector(".humidity")
const speed = document.querySelector(".speed")
const tempCelvin = 273.15
const default_day = document.querySelector(".default_day")
const default_date = document.querySelector(".default_date")
const weather_temp = document.querySelector(".weather_temp")
const cloudtxt = document.querySelector(".cloudtxt")
const one = 1.0

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(positionCiti);
} 
function positionCiti(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  callApi(lat, lng)
  callApiFourDays(lat, lng)
}


function callApi(lat, lng) {
  
  const apiKey = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=151c6529860a9b87a6be30bacf15fa7b`

fetch(apiKey)
.then(response => {
  if(!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  nameCIti.innerHTML = data.name
  const mainTemp = data.main.temp
  TEMP.innerHTML = result(mainTemp) + "°C"
  weather_temp.innerHTML = result(mainTemp) + "°C"
  humidity.innerHTML = data.main.humidity + "%"
  speed.innerHTML = data.wind.speed + " Km/h"
  console.log(mainTemp);
  const arrDeg = data.weather[0]
  cloudtxt.innerHTML = arrDeg.description
  
})
.catch(error => {
  console.error('Error:', error);
});
}

function result(params) {
  let temp = (params-tempCelvin) * one
  return parseInt(temp)
}

function timeZone() {
  const today  = new Date()
  return today 
}
default_date.innerHTML = timeZone()

function dayWeek() {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const d = new Date();
  let day = weekday[d.getDay()];
  return day
}

default_day.innerHTML =  dayWeek()

function callApiFourDays(lat , lng) {

  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=3ac584f1a280c0aa2e2610fa9fddd960`
  console.log(url);
  fetch(url)
  .then(response => {
    if(!response.ok){
      throw new Error('Network response not work');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
