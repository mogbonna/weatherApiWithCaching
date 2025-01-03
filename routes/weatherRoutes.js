const express = require("express");
const { fetchWeather } = require("../controllers/weatherController");

const router = express.Router();

/**
 * @swagger
 * /weather:
 *   get:
 *     summary: Fetch weather data for a city
 *     description: Retrieve current weather data for a specified city using the OpenWeatherMap API.
 *     parameters:
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the city to fetch weather data for
 *     responses:
 *       200:
 *         description: Successfully retrieved weather data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 city:
 *                   type: string
 *                 country:
 *                   type: string
 *                 temperature:
 *                   type: number
 *                 description:
 *                   type: string
 *                 humidity:
 *                   type: number
 *                 windSpeed:
 *                   type: number
 *                 source:
 *                   type: string
 *                   enum: [api, cache]
 *       400:
 *         description: Bad request due to missing or invalid parameters
 *       500:
 *         description: Internal server error
 */
router.get("/", fetchWeather);

module.exports = router;
