const https = require('https');
const restService = require('./restService');


const apiKey = 'ca307dc413403e8ab536163fbf7addb2';
const apiHost = 'developers.zomato.com';

const fetchZomotoApi = (resource, params, callback) => {
  const paramArr = [];
  for(var param in params) {
    paramArr.push(param+'='+params[param]);
  }
  const apiPath = '/api/v2.1/'+resource+'?'+paramArr.join('&');
  https.get({
    host: apiHost,
    path: apiPath,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'user-key': apiKey
    }
  }, (response) => {
    let data ='';
    response.on('data', chunk=>{
      data += chunk;
    });
    response.on('end', ()=>{
      const pasrsedData = JSON.parse(data);
      callback(pasrsedData);
    });
  })
  .on('error', err => {
    console.log('Error: '+ err);
  })
};



const fetchAllCuisines = (params, callback) => {
  const allCuisines = [
    "American", "Chinese", "French", "Greek", "Indian",
    "Italian", "Japanese", "Mediterranean", "Mexican",
    "New American", "Spanish", "Taiwanese", "Thai",
    "Vegetarian", "Vietnamese"
  ];
  fetchZomotoApi('cuisines', params, data=> {
    const cuisines = data.cuisines.reduce((acc, data) => {
      const cuisine_id = data.cuisine.cuisine_id;
      const cuisine_name = data.cuisine.cuisine_name;
      if(allCuisines.indexOf(cuisine_name) > -1) {
        acc.push({
          cuisine: cuisine_name,
          id: cuisine_id,
        })
      }
      return acc;
    }, []);
    cuisines.sort((a,b)=> {
      if(a.cuisine>b.cuisine) return 1;
      else if(a.cuisine===b.cuisine) return 0;
      else if(a.cuisine<b.cuisine) return -1;
    });
    callback(cuisines);
  });
};``

const fetchAllRestaurants = (params, allFavors=[], callback) => {
  fetchZomotoApi('search', params, data=> {
    const totalRests = data.results_found;
    const cuisine_id = params.cuisines;
    const restsData = data.restaurants
      .map(({restaurant}, index) => {
        return {
          ...restService.convertRestData(allFavors, restaurant),
          raw_data: restaurant,
          cuisine_id: cuisine_id,
          final_distance: index
        }
      });
    callback(restsData);
  });
};







module.exports = {
  fetchAllCuisines,
  fetchAllRestaurants
};
