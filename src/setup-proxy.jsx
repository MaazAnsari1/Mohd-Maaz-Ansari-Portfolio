const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware({
            target: 'http://127.0.0.1:5000',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // remove /api from the request URL
            },
        })
    );
};
