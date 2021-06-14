const withPWA = require("next-pwa");

module.exports = withPWA({
    pwa: {
        basePath: '/out',
        dest: "public",
        register:true,
        skipWaiting:true,
    }
})