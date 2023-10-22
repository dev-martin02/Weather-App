const cityName = document.getElementById("city-name");
const btnSearchWeather = document.getElementById("search-weather");
const sectionElement = document.getElementById("weather-section");
const mainElement = sectionElement.querySelector("main");
const tempText = mainElement.querySelector("p");

btnSearchWeather.addEventListener("click", async () => {
  const userCity = cityName.value;

  async function findYourWeather() {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=21c0cc44cd70f2c5f1ec8bd2f19c86ce`
    );
    const result = await weather.json();
    const userWeather = result.weather[0].description;
    return result;
  }

  const weatherData = await findYourWeather();
  console.log(weatherData);
  const newElement = document.createElement("p");

  newElement.innerHTML = weatherData.weather[0].description;

  const userTemp = weatherData.main.temp;
  tempText.innerHTML = `Your TEMPERATURE is ${userTemp}`;
  mainElement.appendChild(newElement);
});
