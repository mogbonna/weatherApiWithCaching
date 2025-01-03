const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Weather Data Cache API",
      version: "1.0.0",
      description:
        "A simple API to fetch weather data with caching and rate limiting.",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local Development Server",
      },
    ],
  },
  apis: ["./routes/*.js"], // Points to API documentation annotations
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
