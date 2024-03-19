const cityName = document.getElementById("city-name");
const btnSearchWeather = document.getElementById("search-weather");
const sectionElement = document.getElementById("currentWeather");
const mainElement = sectionElement.querySelector("main");
const tempText = mainElement.querySelector("p");

btnSearchWeather.addEventListener("click", async () => {
  const userCity = cityName.value;

  async function findYourWeather() {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=imperial&appid=21c0cc44cd70f2c5f1ec8bd2f19c86ce`
    );
    const result = await weather.json();
    const userWeather = result.weather[0].description;
    console.log(result);
    console.log(userWeather);
    return result;
  }
  const weatherData = await findYourWeather();

  const userTemp = weatherData.main.temp;
  tempText.innerHTML = `Your TEMPERATURE is ${userTemp}`;
  mainElement.appendChild(newElement);
});
