### Weather Data Cache API

Welcome to the **Weather Data Cache API**, a simple and efficient service for retrieving current weather data with caching and rate limiting.

---

## Features

- Fetches real-time weather data from the OpenWeatherMap API.
- Caches responses for **15 minutes** to optimize performance and reduce API calls.
- Includes **rate limiting** to prevent abuse.
- Input validation ensures only valid city names are processed.
- Detailed API documentation available via **Swagger UI**.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mogbonna/weatherApiWithCaching.git
   cd weatherApiWithCaching
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and set the following:

   ```
   OPENWEATHERMAP_API_KEY=<your_api_key>
   PORT=3000
   ```

4. Start the server:
   ```bash
   node app.js
   ```

---

## Usage

### Endpoint

**GET /weather**

#### Query Parameters:

- `city` (required): The name of the city to fetch weather data for.

#### Example Request:

```bash
curl "http://localhost:3000/weather?city=London"
```

#### Example Response:

```json
{
  "city": "London",
  "country": "GB",
  "temperature": 15.5,
  "description": "clear sky",
  "humidity": 67,
  "windSpeed": 4.5,
  "source": "cache"
}
```

---

## API Documentation

Interactive API documentation is available at [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

---

## Project Structure

```
project/
├── app.js               # Entry point
├── controllers/         # Application logic
├── models/              # Data handling and caching
├── routes/              # Route definitions
├── docs/                # Swagger configuration
├── logger.js            # Logging configuration
└── .env                 # Environment variables
```

---

## Technologies

- **Node.js**: Server environment
- **Express.js**: Web framework
- **Node-Cache**: In-memory caching
- **Swagger**: API documentation
- **Winston**: Logging
- **Rate-Limiting**: Protects the API from overuse

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Submit a pull request with a detailed description.

---

## License

This project is licensed under the **MIT License**. See `LICENSE` for more details.

---

Feel free to suggest edits or new features—your feedback is welcome! 😊
