const path = require('path');
const withOffline = require('next-offline');

module.exports = withOffline({
  // Set to true to debug service-worker.js
  generateInDevMode: true,
  workboxOpts: {
    swDest: "static/service-worker.js",
    maximumFileSizeToCacheInBytes: 5000000,
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  },
  env: {
    env: 'dev',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'react-svg-loader',
          options: {
            jsx: true,
          },
        },
      ],
    });

    config.resolve.modules.push(path.resolve('./src'));

    return config;
  },
});
