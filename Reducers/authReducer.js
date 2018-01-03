import * as firebase from 'firebase';

import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from '../Actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS: {
      // Build Firebase credential with the Facebook access token.
      console.log('Contacting FireBase to Login');
      const credential = firebase.auth.FacebookAuthProvider.credential(
        action.payload
      );
      // Sign in with credential from the Facebook user.
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch(error => {
          console.log(error);
          // Handle Errors here.
        });
      return { token: credential };
    }
    case FACEBOOK_LOGIN_FAIL:
      console.log('Removing FB Token');
      return { token: null };
    default:
      return state;
  }
}
