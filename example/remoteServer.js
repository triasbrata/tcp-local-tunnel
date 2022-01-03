require("dotenv").config();
const { proxyServer } = require("../index.js");

/* internet server proxy configuration */

proxyServer({
  proxyPort: process.env.proxyPort,
  tunnelPort: process.env.tunnelPort,
  proxyHost: process.env.proxyHost || "localhost",
  // Uncomment below to enable transport encryption::
  encKey: process.env.encKey,
  encIv: process.env.encIv,
});
