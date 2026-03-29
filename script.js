var apiKey = "e4911486cc4f42fb47befe569cc9f811";
//our api key 

async function getWeather() {
  var city = document.getElementById("cityInput").value;

  document.getElementById("weatherCard").classList.add("hidden");
  document.getElementById("errorMsg").classList.add("hidden");
  if (city == "") {
    return;
  }
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
  try {
    var response = await fetch(url);
    var data = await response.json();

    if (data.cod == "404") {
      document.getElementById("errorMsg").classList.remove("hidden");
      return;
    }
    document.getElementById("cityName").innerText = data.name + ", " + data.sys.country;
    document.getElementById("temperature").innerText = Math.round(data.main.temp) + "°C";
    document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
//data collection
    var weather = data.weather[0].main;
    var icon = "🌤️";

    if (weather == "Clear") icon = "☀️";
    if (weather == "Clouds") icon = "☁️";
    if (weather == "Rain") icon = "🌧️";
    if (weather == "Drizzle") icon = "🌦️";
    if (weather == "Thunderstorm") icon = "⛈️";
    if (weather == "Snow") icon = "❄️";

    document.getElementById("weatherIcon").innerText = icon;
    document.getElementById("weatherCard").classList.remove("hidden");
    //remove hidden command
  } 
  catch (error) {
    document.getElementById("errorMsg").innerText = "Error 404!";
    document.getElementById("errorMsg").classList.remove("hidden");
    //remove hidden command for error
  }

}
document.getElementById("cityInput").addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    getWeather();
  }
})
