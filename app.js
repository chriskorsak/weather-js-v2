//initialize storage class object
const storage = new Storage();
//get stored location, or application's default location
const storedLocation = storage.getLocation();
//initialize weather class object and pull param val from storage
const weather = new Weather(storedLocation.city, storedLocation.state);
//initialize ui class object, grab elements from page for populating later with weather data.
const ui = new UI();

//load weather when page loads
document.addEventListener('DOMContentLoaded', getWeather);

//change location event from modal
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  //get city and state values from modal
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  //change location
  weather.changeLocation(city, state);
  //get weather after location change
  getWeather();
  //store new location in local storage
  storage.setLocation(city, state);
  //close modal (uses jquery because of bootstrap)
  $('#locationModal').modal('hide');
})

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.populate(results)
    })
    .catch(error => console.log(error));
}