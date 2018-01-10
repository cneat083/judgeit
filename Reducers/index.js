import { combineReducers } from 'redux';
import auth from './authReducer';
import renderHomeScreen from './homeScreenReducer';

export default combineReducers({
  auth: auth,
  renderHomeScreen: renderHomeScreen
});
