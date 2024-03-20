const inptValue = document.querySelector("input");
const btnSearchWeather = document.getElementById("searchWeather");

btnSearchWeather.addEventListener("click", async () => {
  async function findYourWeather() {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inptValue.value}&units=imperial&appid=21c0cc44cd70f2c5f1ec8bd2f19c86ce`
    );
    const data = await weather.json();
    inptValue.value = "";
    return data;
  }
  const weatherData = await findYourWeather();

  console.log(weatherData);
  const userCity = document.getElementById("cityName");
  userCity.innerText = weatherData.name;

  const tempText = document.getElementById("temp");
  const userTemp = weatherData.main.temp;
  tempText.innerHTML = userTemp;

  const cityImg = document.getElementById("cityIcon");
  const dataIcon = weatherData.weather[0].icon;
  cityImg.src = `http://openweathermap.org/img/wn/${dataIcon}.png`;

  async function nextDayWeather() {
    let lon = weatherData.coord.lon;
    let lat = weatherData.coord.lat;
    let today = new Date();
    const nextDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1
    );
    const formattedDate = nextDay.toISOString().slice(0, 10); // Format date as yyyy-mm-dd
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&q=${inptValue.value}&units=imperial& &appid=21c0cc44cd70f2c5f1ec8bd2f19c86ce`
    );

    const data = await response.json();
    return data;
  }
  const tomorrowWeather = await nextDayWeather();
  console.log(tomorrowWeather.list[0]);

  const dayOne = document.getElementById("dayOne");
  const dayOneIcon = document.getElementById("dayOneIcon");
  const dayOneTemp = document.getElementById("dayOneTemp");

  dayOne.innerText = tomorrowWeather.list[0].dt_txt;
  dayOneIcon.src = `http://openweathermap.org/img/wn/${tomorrowWeather.list[0].weather[0].icon}.png`;
  dayOneTemp.innerText = tomorrowWeather.list[0].main.temp;
});
