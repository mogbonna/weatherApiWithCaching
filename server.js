require("dotenv").config();
const app = require("./app");
const logger = require("./logger");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Weather Data Cache service running at http://localhost:${port}`);
});
