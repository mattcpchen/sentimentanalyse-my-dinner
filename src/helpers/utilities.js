
export const getGeoLocation = (callback) => {
  // callback({
  //   lat: 40.7214921,
  //   lon: -73.8406627
  // })
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position=> {
      callback({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    });
  } else {
    callback({
      error: 'Geolocation is not supported by this browser.'
    })
  }
};

const fetchNodeRequest = (resource, opts, callback) => {
  fetch('/dinners/'+resource, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(opts)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    callback(data);
  });
};

export const fetchAllCuisines = (opts, callback) => {
  fetchNodeRequest('cuisines', opts, callback);
};

export const fetchAllRestaurants = (opts, callback) => {
  fetchNodeRequest('restaurants', opts, callback);
};
