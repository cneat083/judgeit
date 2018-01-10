import { combineReducers } from 'redux';
import auth from './authReducer';
import renderHomeScreen from './homeScreenReducer';
import renderJudgeSelect from './judgeSelectReducer';

export default combineReducers({
  auth: auth,
  renderHomeScreen: renderHomeScreen,
  renderJudgeSelect: renderJudgeSelect
});
