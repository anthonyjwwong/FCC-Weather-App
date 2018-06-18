'use strict';

let weather = document.querySelector('.weather');
let farenheit = document.querySelector('.farenheit');
let celsius = document.querySelector('.celsius');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }


function showPosition(position) {
  //Holds long and lat in a variable
   let long = position.coords.longitude;
   let lat = position.coords.latitude;
   let city = document.querySelector('.city');
   let temp = document.querySelector('.temp');
   let curWeather = document.querySelector('.currentWeather');
   let weatherIcon = document.querySelector('.weatherIcon');

   console.log(lat);
   console.log(long);
   //Testing that it works


  let urlRequest = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long;

  $.getJSON(urlRequest, function(data) {
    console.log(data);
    weatherIcon.innerHTML = '<img src="' + data.weather[0].icon + '">';
    city.innerHTML = data.name + ',' + data.sys.country;
    temp.innerHTML = Math.round(data.main.temp) + '&degC';
    curWeather.innerHTML = data.weather[0].main;

      farenheit.addEventListener('click', function() {
        let farenheitDeg =Math.round((data.main.temp * 9/5) + 32);
        temp.innerHTML = farenheitDeg + '&degF';
      })
        celsius.addEventListener('click', function() {
         temp.innerHTML = Math.round(data.main.temp) + '&degC';
        })

  })

}
