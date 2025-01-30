const { overrideDevServer } = require('customize-cra');

const devServerConfig = () => (config) => {
  config.setupMiddlewares = (middlewares, devServer) => {
    // Your custom middleware setup
    return middlewares;
  };
  return config;
};

module.exports = {
  devServer: overrideDevServer(devServerConfig()),
};