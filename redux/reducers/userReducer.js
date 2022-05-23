import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_UPDATE,
  CLEAR_USER_INFO,
} from '../constants/index';

let initialState = {
  isLoggedIn: false,
  email: '',
};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: payload.email,
        isLoggedIn: true,
      };
    case LOGIN_FAIL:
      return state;

    case USER_UPDATE:
      return {
        ...state,
        email: payload.email,
      };
    case CLEAR_USER_INFO:
      return {
        isLoggedIn: false,
        email: '',
      };
    default:
      return state;
      break;
  }
}
