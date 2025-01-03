const NodeCache = require("node-cache");

// Initialize cache with 15 minutes (900 seconds) standard TTL
const cache = new NodeCache({ stdTTL: 900 });

module.exports = cache;
