const { proxyServer } = require('../index.js');

/* internet server proxy configuration */

proxyServer({
  proxyPort: 80,
  tunnelPort: 8010,
  proxyHost:process.env.MASTER_IP,
  // Uncomment below to enable transport encryption::
  encKey: 'triasbrata',
  encIv: 'trias@123'
});
