const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "pages/index.js",
    register: true,
    skipWaiting: true,
  },
});