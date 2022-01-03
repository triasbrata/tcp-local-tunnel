require("dotenv").config();
const { client } = require("../index");
client(
  {
    host: "localhost",
    port: process.env.tunnelPort,
    // Uncomment below to enable transport encryption::
    encKey: process.env.encKey,
    encIv: process.env.encIv,
  },
  {
    host: "localhost",
    port: 3800,
  },
  40 // number of concurrent open tunnels
);
