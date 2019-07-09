// const withCSS = require("@zeit/next-css");
const antdLessLoader = require("next-antd-aza-less");

if (typeof require !== "undefined") {
  require.extensions[".less"] = file => {};
}

module.exports = antdLessLoader({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: {
      'body-background': '#f2f3f8',
      'layout-header-background': '#fff',
      'primary-color': '#5867dd',
      'link-color': '#1DA57A',
      'border-radius-base': '2px',
      'font-size-base': '12px',
    }
  }
});