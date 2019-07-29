const httpService = require('./httpService');

const index = (req, res) => {
  const indexHtmlPath = path.resolve('public/index.html');
  res.sendFile(indexHtmlPath);
};

const fetchAllCuisines = (req, res) => {
  const params = {
    lon:  req.body.lon,
    lat:  req.body.lat
  };
  httpService.fetchAllCuisines(params, cuisines => {
    res.status(200).json(cuisines);
  });
};

const fetchAllRestaurants = (req, res) => {
  const params = {
    category: '10', // 'dinner
    cuisines: req.body.cuisines,
    lon:  req.body.lon,
    lat:  req.body.lat,
    sort: 'real_distance'
  };
  const allFavors = req.body.favors.split('|');
  httpService.fetchAllRestaurants(params, allFavors, restaurants => {
    res.status(200).json(restaurants);
  });
};



module.exports = {
  index,
  fetchAllCuisines,
  fetchAllRestaurants
};
