const axios = require("axios"); // Import axios
const logger = require("../logger");
const cache = require("../utils/cache");

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

if (!API_KEY) {
  logger.error("OpenWeatherMap API key is not set in environment variables.");
  process.exit(1);
}

const getWeatherData = async (city) => {
  try {
    // Check if data is in cache
    const cachedData = cache.get(city);
    if (cachedData) {
      return { data: cachedData, source: "cache" };
    }

    // If not in cache, fetch from API
    const encodedCity = encodeURIComponent(city);
    const apiUrl = `${API_BASE_URL}?q=${encodedCity}&appid=${API_KEY}&units=metric`;

    const response = await axios.get(apiUrl); // Use axios for the request

    // Extract relevant information
    const weatherData = {
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
    };

    // Store in cache
    cache.set(city, weatherData);

    return { data: weatherData, source: "api" };
  } catch (error) {
    // Check if the error is from the API
    if (error.response) {
      logger.error(
        `Error fetching weather data: ${error.response.data.message}`
      );
      throw new Error(error.response.data.message);
    } else {
      logger.error(`Error fetching weather data: ${error.message}`);
      throw error;
    }
  }
};

module.exports = { getWeatherData };
