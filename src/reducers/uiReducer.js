

export const userLocationReducer = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_USER_LOCATION':
      return { lon: action.lon, lat: action.lat };
    default:
      return state;
  }
};

export const cuisineReducer = (state={id:-1, name:''}, action) => {
  // default >> American: 1
  switch(action.type) {
    case 'CHOOSE_CUISINE':
      return {
        id:action.cuisineId,
        name: action.cuisineName
      };
    default:
      return state;
  }
};


export const sortbyReducer = (state='distance', action) => {
  // default preset = distance (menuId=0)
  switch(action.type) {
    case 'CHOOSE_SORTBY':
      return action.sortby;
    default:
      return state;
  }
};
