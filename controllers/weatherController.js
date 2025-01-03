const validator = require("validator");
const { getWeatherData } = require("../models/weatherModel");

const fetchWeather = async (req, res) => {
  let { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "City parameter is required" });
  }

  // Normalize and validate city name
  city = city.trim().toLowerCase();
  if (!validator.isAlpha(city.replace(/\s/g, ""))) {
    return res.status(400).json({ error: "Invalid city name" });
  }

  try {
    const { data, source } = await getWeatherData(city);
    res.json({ ...data, source });
  } catch (error) {
    res.status(500).json({
      error: error.message || "An error occurred while fetching weather data",
    });
  }
};

module.exports = { fetchWeather };
