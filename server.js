const Hapi = require('hapi');
const Inert = require('inert');
const H2O2 = require('h2o2');

const environment = process.env.NODE_ENV;
const routes = require('./routes');

const plugins = [
  {
    register: Inert
  },
  {
    register: H2O2
  }
];

if (environment !== 'production') {
  const Webpack = require('webpack');
  const WebpackPlugin = require('hapi-webpack-plugin');
  const webpackConfig = require('./build/webpack.dev');

  // webpack-hot-middleware options
  // See https://github.com/glenjamin/webpack-hot-middleware
  const hot = {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  };

  // add hot module route
  routes.push({
    method: 'GET',
    path: '/dist/hot/{param*}',
    handler: {
      directory: {
        path: './hot',
        listing: false
      }
    }
  });

  const webpackOptions = {
    // define webpack config, compiler, and hot module reloading
    compiler: new Webpack(webpackConfig),
    // webpack-dev-middleware options
    // See https://github.com/webpack/webpack-dev-middleware
    assets: {
      config: webpackConfig,
      options: {
        publicPath: webpackConfig.output.publicPath,
        stats: {
          colors: true,
          chunks: false
        }
      }
    }
  };

  plugins.push({
    register: WebpackPlugin,
    options: webpackOptions
  });
}

// create server
const server = new Hapi.Server();
server.connection({
  port: process.env.PORT || 8080
});

// Register plugins and routes, then start server
server.register(plugins, (error) => {
  if (error) {
    return console.error(error);
  }

    // set up routes
  server.route(routes);

  server.start(() => console.log('Server running at:', server.info.uri));
});
