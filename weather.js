class Weather {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }
  async getWeather() {
    const response = await fetch(`.netlify/functions/fetch-weather?city=${this.city}&state=${this.state}`);
    const responseData = await response.json();
    return responseData;
  }
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}


//function that converts wind degrees to text description
//found this solution here: https://stackoverflow.com/questions/61077150/converting-wind-direction-from-degrees-to-text
function windDegreeConvert(degrees) {
  // Define array of directions
  directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
  // Split into the 8 directions
  degrees = degrees * 8 / 360;
  // round to nearest integer.
  degrees = Math.round(degrees, 0);
  // Ensure it's within 0-7
  degrees = (degrees + 8) % 8
  return directions[degrees]
}