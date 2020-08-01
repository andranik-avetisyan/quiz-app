import axios from 'axios';
import { LOGIN, LOGOUT } from './actionTypes';
import { API_URL } from '../constants/url'

export const login = (email, password) => {
  return (dispatch) =>
    axios
      .post(API_URL + 'login', {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
          dispatch({ type: LOGIN, payload: JSON.stringify(response.data) });
        }
      })
      .catch((error) => {
        throw error;
      });

}

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('user');
    dispatch({ type: LOGOUT });
  }
};
