const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  async redirects() {
    return [
      {
        source: '/pages/index.js',
        destination: '/',
        permanent: true,
      },
    ]
  },
});