const R = require('ramda');
const fs = require("fs");
const store = require('store');

module.exports = (configFunction, proxys={}) => {

    return function(proxy, allowedHost) {
        let config = configFunction(proxy, allowedHost);
        config = R.merge(config, {
            proxy: {
                "/api": {
                    "target":  `http://www.***.com`,
                    "changeOrigin": true,
                    "secure": false,
                    onProxyReq(proxyReq, req) {
                        proxyReq.setHeader("apptype", 'pc');
                    },
                    "pathRewrite": { "^/api": "" }
                },
                ...proxys
            }
        });
        return config;
    }
}