let apiKey = "dc738e44d776f0c7801fb0a941f76648";
let lat = 44;
let lon = 10.99;
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
console.log(url);

//axios.get(url).then(showTemprature);

function showTemperature(response) {
  console.log(response);

  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = response.data.name;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
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
