const { join } = require('path');
const express = require('express');
const Next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18next = require('./src/lib/i18n');
const nextConfig = require('./next.config');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = Next({ dev, conf: nextConfig });
const handle = app.getRequestHandler();
const server = express();

app.prepare().then(async () => {
  server.get('/service-worker.js', (req, res) => {
    return app.serveStatic(req, res, join(__dirname, '.next', 'static', '/service-worker.js'));
  });

  // static resources should not be redirected by i18n middleware to same network trip
  // highly recommend add any extension of static resources here, though it would still work if you don't
  server.all(/\.(js|json|png|jpg|ico)$/i, (req, res) => {
    return handle(req, res);
  });

  // make sure nextI18next is initiated
  await nextI18next.initPromise;
  // use the i18n middleware for any other routes
  server.all('*', nextI18NextMiddleware(nextI18next), (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
