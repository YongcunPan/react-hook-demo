const path = require("path");
const { override, babelInclude, fixBabelImports, addLessLoader, addDecoratorsLegacy, addWebpackAlias } = require('customize-cra');
const createProxy = require('./create-proxy');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    webpack: override(
        babelInclude([
            resolve("./src"),
            resolve("./src/assets/images")
        ]),
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
        }),
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: {
                '@primary-color': '#0f8605',
                '@border-radius-base': '2px', // 组件/浮层圆角
                // '@font-size-base': '16px' // 主字号
            },
            localIdentName: "[local]--[hash:base64:5]",
        }),
        addDecoratorsLegacy(),
        addWebpackAlias({
            ["aliasimgurl"]: resolve("./src/assets/images")
        })
    ),
    devServer: createProxy
};