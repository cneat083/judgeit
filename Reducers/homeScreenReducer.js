import { RENDER_HOME_SCREEN } from '../Actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case RENDER_HOME_SCREEN: {
      return { homeScreenData: action.payload };
    }
    default:
      return state;
  }
}
