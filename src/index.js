let apiKey = "dc738e44d776f0c7801fb0a941f76648";
let lat = 44;
let lon = 10.99;
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
console.log(url);

//axios.get(url).then(showTemprature);

function showTemperature(response) {
  console.log(response);
  let cityElement = document.querySelector("h1");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  //let iconElement=document.querySelector("#icon")

  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
  //iconElement.querySelector=response.
}

function search(city) {
  let apiKey = "dc738e44d776f0c7801fb0a941f76648";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  search(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
