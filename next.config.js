const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "out",
    register: true,
    skipWaiting: true,
  },
});