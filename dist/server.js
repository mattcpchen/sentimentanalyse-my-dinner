/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/app.js":
/*!***************************!*\
  !*** ./src/server/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var express = __webpack_require__(/*! express */ \"express\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar routerService = __webpack_require__(/*! ./services/routerService */ \"./src/server/services/routerService.js\");\n\nvar restService = __webpack_require__(/*! ./services/restService */ \"./src/server/services/restService.js\");\n\nmodule.exports = function () {\n  var app = express();\n  app.use(bodyParser.urlencoded({\n    extended: false\n  }));\n  app.use(bodyParser.json('application/json'));\n  app.set('port', process.env.PORT || 8888); // webpack with HMR\n\n  if (process.env.NODE_ENV === 'development') {\n    var webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\n    var webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\n    var webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\n    var webpackConfig = __webpack_require__(/*! ../../webpack.client.config */ \"./webpack.client.config.js\");\n\n    var compiler = webpack(webpackConfig);\n    app.use(webpackDevMiddleware(compiler, {\n      noInfo: true,\n      publicPath: webpackConfig.output.publicPath\n    }));\n    app.use(webpackHotMiddleware(compiler));\n  } // static routes\n\n\n  if (process.env.NODE_ENV === 'development') {\n    app.use(express[\"static\"](path.join(__dirname, '../../public/')));\n    app.use(express[\"static\"](path.join(__dirname, '../../dist/')));\n  } else if (process.env.NODE_ENV === 'production') {\n    app.use(express[\"static\"]('public'));\n    app.use(express[\"static\"]('dist'));\n  } // routes\n\n\n  app.get('/', routerService.index);\n  app.post('/dinners/cuisines', routerService.fetchAllCuisines);\n  app.post('/dinners/restaurants', routerService.fetchAllRestaurants);\n  return app;\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/server/app.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var app = __webpack_require__(/*! ./app */ \"./src/server/app.js\")();\n\napp.listen(app.get('port'), function (err) {\n  if (err) return;\n  console.log('Server up ===> http://localhost:' + app.get('port'));\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/services/httpService.js":
/*!********************************************!*\
  !*** ./src/server/services/httpService.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar https = __webpack_require__(/*! https */ \"https\");\n\nvar restService = __webpack_require__(/*! ./restService */ \"./src/server/services/restService.js\");\n\nvar apiKey = 'ca307dc413403e8ab536163fbf7addb2';\nvar apiHost = 'developers.zomato.com';\n\nvar fetchZomotoApi = function fetchZomotoApi(resource, params, callback) {\n  var paramArr = [];\n\n  for (var param in params) {\n    paramArr.push(param + '=' + params[param]);\n  }\n\n  var apiPath = '/api/v2.1/' + resource + '?' + paramArr.join('&');\n  https.get({\n    host: apiHost,\n    path: apiPath,\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'user-key': apiKey\n    }\n  }, function (response) {\n    var data = '';\n    response.on('data', function (chunk) {\n      data += chunk;\n    });\n    response.on('end', function () {\n      var pasrsedData = JSON.parse(data);\n      callback(pasrsedData);\n    });\n  }).on('error', function (err) {\n    console.log('Error: ' + err);\n  });\n};\n\nvar fetchAllCuisines = function fetchAllCuisines(params, callback) {\n  var allCuisines = [\"American\", \"Chinese\", \"French\", \"Greek\", \"Indian\", \"Italian\", \"Japanese\", \"Mediterranean\", \"Mexican\", \"New American\", \"Spanish\", \"Taiwanese\", \"Thai\", \"Vegetarian\", \"Vietnamese\"];\n  fetchZomotoApi('cuisines', params, function (data) {\n    var cuisines = data.cuisines.reduce(function (acc, data) {\n      var cuisine_id = data.cuisine.cuisine_id;\n      var cuisine_name = data.cuisine.cuisine_name;\n\n      if (allCuisines.indexOf(cuisine_name) > -1) {\n        acc.push({\n          cuisine: cuisine_name,\n          id: cuisine_id\n        });\n      }\n\n      return acc;\n    }, []);\n    cuisines.sort(function (a, b) {\n      if (a.cuisine > b.cuisine) return 1;else if (a.cuisine === b.cuisine) return 0;else if (a.cuisine < b.cuisine) return -1;\n    });\n    callback(cuisines);\n  });\n};\n\n\"\";\n\nvar fetchAllRestaurants = function fetchAllRestaurants(params) {\n  var allFavors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  var callback = arguments.length > 2 ? arguments[2] : undefined;\n  fetchZomotoApi('search', params, function (data) {\n    var totalRests = data.results_found;\n    var cuisine_id = params.cuisines;\n    var restsData = data.restaurants.map(function (_ref, index) {\n      var restaurant = _ref.restaurant;\n      return _objectSpread({}, restService.convertRestData(allFavors, restaurant), {\n        raw_data: restaurant,\n        cuisine_id: cuisine_id,\n        final_distance: index\n      });\n    });\n    callback(restsData);\n  });\n};\n\nmodule.exports = {\n  fetchAllCuisines: fetchAllCuisines,\n  fetchAllRestaurants: fetchAllRestaurants\n};\n\n//# sourceURL=webpack:///./src/server/services/httpService.js?");

/***/ }),

/***/ "./src/server/services/restService.js":
/*!********************************************!*\
  !*** ./src/server/services/restService.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var flattenAllReviewRatings = function flattenAllReviewRatings(_ref) {\n  var reviews = _ref.reviews;\n  var allReviews = [],\n      allReviewsRatings = [];\n  reviews.forEach(function (_ref2) {\n    var review = _ref2.review;\n    var review_text = review.review_text;\n    allReviews.push(review_text);\n    allReviewsRatings.push(-1);\n  });\n  return {\n    allReviews: allReviews,\n    allReviewsRatings: allReviewsRatings\n  };\n};\n\nvar convertRestData = function convertRestData(allFavors, rest) {\n  var allReviewsData = flattenAllReviewRatings(rest.all_reviews);\n  var userVotes = Number(rest.user_rating.votes);\n  var userRating = userVotes === 0 ? -100 : Number(rest.user_rating.aggregate_rating);\n  var allReviewsCount = allReviewsData.allReviews.length;\n  var all_reviews_rating = allReviewsCount === 0 ? -100 : -1;\n  var finalRating = Number(userRating.toFixed(0));\n  return {\n    rest_id: rest.id,\n    rest_name: rest.name,\n    cuisines: rest.cuisines,\n    is_favored: allFavors.indexOf(rest.id) > -1,\n    featured_image: rest.featured_image,\n    photo_count: rest.photo_count,\n    photos_url: rest.photos_url,\n    menu_url: rest.menu_url,\n    phone_numbers: rest.phone_numbers,\n    price_range: rest.price_range,\n    average_cost_for_two: rest.currency + rest.average_cost_for_two,\n    user_rating_votes: userVotes,\n    user_rating_average: userRating,\n    all_reviews: allReviewsData.allReviews,\n    all_reviews_ratings: allReviewsData.allReviewsRatings,\n    all_reviews_count: allReviewsCount,\n    all_reviews_rating: all_reviews_rating,\n    final_rating: finalRating\n  };\n};\n\nmodule.exports = {\n  convertRestData: convertRestData\n};\n\n//# sourceURL=webpack:///./src/server/services/restService.js?");

/***/ }),

/***/ "./src/server/services/routerService.js":
/*!**********************************************!*\
  !*** ./src/server/services/routerService.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var httpService = __webpack_require__(/*! ./httpService */ \"./src/server/services/httpService.js\");\n\nvar index = function index(req, res) {\n  var indexHtmlPath = path.resolve('public/index.html');\n  res.sendFile(indexHtmlPath);\n};\n\nvar fetchAllCuisines = function fetchAllCuisines(req, res) {\n  var params = {\n    lon: req.body.lon,\n    lat: req.body.lat\n  };\n  httpService.fetchAllCuisines(params, function (cuisines) {\n    res.status(200).json(cuisines);\n  });\n};\n\nvar fetchAllRestaurants = function fetchAllRestaurants(req, res) {\n  var params = {\n    category: '10',\n    // 'dinner\n    cuisines: req.body.cuisines,\n    lon: req.body.lon,\n    lat: req.body.lat,\n    sort: 'real_distance'\n  };\n  var allFavors = req.body.favors.split('|');\n  httpService.fetchAllRestaurants(params, allFavors, function (restaurants) {\n    res.status(200).json(restaurants);\n  });\n};\n\nmodule.exports = {\n  index: index,\n  fetchAllCuisines: fetchAllCuisines,\n  fetchAllRestaurants: fetchAllRestaurants\n};\n\n//# sourceURL=webpack:///./src/server/services/routerService.js?");

/***/ }),

/***/ "./webpack.client.config.js":
/*!**********************************!*\
  !*** ./webpack.client.config.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nmodule.exports = {\n  mode: 'development',\n  entry: './src/index.js',\n  output: {\n    path: path.resolve(__dirname, './dist'),\n    filename: 'bundle.js',\n    publicPath: '/'\n  },\n  module: {\n    rules: [{\n      test: /\\.(js)$/,\n      exclude: /node_modules/,\n      use: 'babel-loader'\n    }, {\n      test: /\\.css$/,\n      use: ['style-loader', 'css-loader']\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin()],\n  devServer: {\n    contentBase: \"./public\",\n    colors: true,\n    hot: true,\n    headers: {\n      'Access-Control-Allow-Origin': '*'\n    },\n    historyApiFallback: true,\n    inline: true\n  },\n  optimization: {\n    nodeEnv: false\n  }\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./webpack.client.config.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"https\");\n\n//# sourceURL=webpack:///external_%22https%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });