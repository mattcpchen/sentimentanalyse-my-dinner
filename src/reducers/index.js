import { combineReducers } from 'redux';
import {
  userLocationReducer,
  cuisineReducer,
  sortbyReducer
} from './uiReducer';
import { loadStateReducer, modalStateReducer } from './modalReducer';
import { restaurantsReducer } from './restaurants';


const appReducer = combineReducers({
  isLoading: loadStateReducer,
  userLocation: userLocationReducer,
  cuisine: cuisineReducer,
  sortby: sortbyReducer,
  restaurants: restaurantsReducer,
  reviewModal: modalStateReducer
});


export default appReducer;
