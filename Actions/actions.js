import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import homeData from '../TestData/UserFeedScreenData';
import judgeData from '../TestData/JudgeSelectData';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  RENDER_HOME_SCREEN,
  RENDER_JUDGE_SELECT
} from './types';

// CLEANUP THIS LOGIC!!!
export const renderHomeScreen = () => dispatch => {
  const data = homeData;
  dispatch({ type: RENDER_HOME_SCREEN, payload: data });
};

export const renderJudgeSelect = () => dispatch => {
  const data = judgeData;
  dispatch({ type: RENDER_JUDGE_SELECT, payload: data });
};

export const facebookLogin = () => async dispatch => {
  const token = await AsyncStorage.getItem('fb_token');

  if (token) {
    // If exists dispatch action
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    // Start FB Login Process
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(
    '366125177182937',
    {
      permissions: ['public_profile']
    }
  );

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
  await AsyncStorage.setItem('fb_token', token);

  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
