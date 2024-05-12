let cityEl = document.querySelector(".city");

let iconEl = document.querySelector(".icon");

let descriptionEl = document.querySelector(".description");

let temperatureEl = document.querySelector(".temp");

let humidityEl = document.querySelector(".humidity");

let windEl = document.querySelector(".wind");

let searchBar = document.querySelector(".search-bar");

let searchEl = document.querySelector(".search button");

let weatherEl = document.querySelector(".weather");

let weather = {
 "apikey": "60d23218842e1ca414e305469cc3eca4",

 fetchWeather: function (city) {
  fetch("http://api.weatherapi.com/v1/current.json?key=60d23218842e1ca414e305469cc3eca4" + city + "&aqi=no").then((response) => response.json()).then((data) => this.displayWeather(data));
 },

 displayWeather: function (data) {
  const { name } = data.location;

  const { icon, text } = data.current.condition;

  const { temp_c, humidity } = data.current;

  const { wind_kph } = data.current;

  cityEl.innerText = `Weather in ${name}`;

  iconEl.src = icon;

  descriptionEl.innerText = text;

  temperatureEl.innerText = `Temperature: ${temp_c}°C`;

  humidityEl.innerText = `Humidity: ${humidity}%`;

  windEl.innerText = `Wind Speed: ${wind_kph} km/hr`;

  weatherEl.classList.remove("loading");

 },

 search: function () {
  this.fetchWeather(searchBar.value);
 }
};

searchEl.addEventListener("click", () => {
 console.log("Clicked!");
 weather.search();
});

searchBar.addEventListener("keyup", (event) => {
 if (event.key === "Enter") {
  weather.search();
 }
});

weather.fetchWeather("Pune");
