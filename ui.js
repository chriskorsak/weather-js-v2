class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-description');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  //populate weather results from api into ui
  populate(weather) {
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    //the current temp is string
    this.string.textContent = `${Math.round(weather.main.temp)}F`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}hPa`;
    this.feelsLike.textContent = `Feels Like: ${Math.round(weather.main.feels_like)}F`;
    this.wind.textContent = `Wind: ${Math.round(weather.wind.speed)}mph ${windDegreeConvert(weather.wind.speed)}`;
  }
}