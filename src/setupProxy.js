const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://lilitarzumanyan3-001-site1.dtempurl.com',
      changeOrigin: true,
    })
  );
};