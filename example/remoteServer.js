const { proxyServer } = require('../index.js');

/* internet server proxy configuration */

proxyServer({
  proxyPort: 80,
  tunnelPort: 8080,
  proxyHost:process.env.MASTER_IP,
  // Uncomment below to enable transport encryption::
  encKey: process.env.encKey,
  encIv: process.env.encIv
});
