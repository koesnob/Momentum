const WEATHER_API_KEY = "73c5b2871f6b2d5f9905a4ae3a74e2bf";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.main.temp} / ${data.weather[0].main}`;
    });
}
function onGeoError() {
  console.log(`Weather info is not available.`);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
