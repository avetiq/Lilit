const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://lilitarzumanyan1-001-site1.ftempurl.com',
      changeOrigin: true,
    })
  );
};