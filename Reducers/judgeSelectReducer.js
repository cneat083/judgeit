import { RENDER_JUDGE_SELECT } from '../Actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case RENDER_JUDGE_SELECT: {
      return { judgeSelectData: action.payload };
    }
    default:
      return state;
  }
}
