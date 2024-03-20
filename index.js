const inptValue = document.querySelector("input");
const btnSearchWeather = document.getElementById("searchWeather");

btnSearchWeather.addEventListener("click", async () => {
  async function findYourWeather() {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inptValue.value}&units=imperial&appid=21c0cc44cd70f2c5f1ec8bd2f19c86ce`
    );
    const result = await weather.json();
    console.log(result);
    const userWeather = result.weather[0].description;
    return result;
  }
  const weatherData = await findYourWeather();
  console.lof(weatherData);
  const userCity = document.getElementById("cityName");
  userCity.innerText = weatherData.name;

  const tempText = document.getElementById("temp");
  const userTemp = weatherData.main.temp;
  tempText.innerHTML = userTemp;

  const cityImg = document.getElementById("cityIcon");
  const dataIcon = weatherData.weather[0].icon;
  cityImg.src = `http://openweathermap.org/img/wn/${dataIcon}.png`;
});
