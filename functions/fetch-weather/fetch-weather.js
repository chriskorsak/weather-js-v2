//axios is a package that handles the http calls. you can't simply use fetch() here because it isn't available in nodejs, only browsers.
const axios = require('axios')

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

  
  const handler = async (event, context) => {
    //these are tacked on to the fetch call from index.js
    const city = event.queryStringParameters.city;
    const state = event.queryStringParameters.state;
    //get api key from environment variable
    const apiKey = process.env.apiKey;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},us&units=imperial&APPID=${apiKey}`;
    
    let response
    try {
      response = await axios.get(url)
      return {
        statusCode: 200,
        body: JSON.stringify({
          data: response.data
        })
      }
    } catch (err) {
      return {
        statusCode: err.statusCode || 500,
        body: JSON.stringify({
          error: err.message
        })
      }
    }
  }

module.exports = { handler }
