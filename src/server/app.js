const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routerService = require('./services/routerService');
const restService = require('./services/restService');

module.exports = function() {

  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json('application/json'));

  app.set('port', process.env.PORT || 8888);


  // webpack with HMR
  if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('../../webpack.client.config');

    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler));
  }

  // static routes
  if (process.env.NODE_ENV === 'development') {
    app.use(express.static( path.join(__dirname, '../../public/') ));
    app.use(express.static( path.join(__dirname, '../../dist/') ));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'));
    app.use(express.static('dist'));
  }

  // routes
  app.get('/', routerService.index);
  app.post('/dinners/cuisines', routerService.fetchAllCuisines);
  app.post('/dinners/restaurants', routerService.fetchAllRestaurants);

  return app;
};

