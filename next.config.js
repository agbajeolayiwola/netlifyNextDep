const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "/",
    register: true,
    skipWaiting: true,
  },
});