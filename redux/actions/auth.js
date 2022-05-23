import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_USER_INFO,
  USER_UPDATE,
} from '../constants';

import api from '../services/api';

import {setSession} from '../services/sessions';
import apifuntions from '../services/apifunctions';

export const login = data => dispatch => {
  return apifuntions
    .fetchPost(data, '/login')
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {email: data.email},
      });
      setSession(res.data);
      return Promise.resolve(res.data);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};
