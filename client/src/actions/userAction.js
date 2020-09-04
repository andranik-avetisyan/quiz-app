import axios from 'axios';
import { LOGIN, LOGOUT } from './actionTypes';
import { API_URL } from '../constants/url'
import { toast } from 'react-toastify';

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
          dispatch({ type: LOGIN, payload: response.data });
          toast.success("You are logged in!");
        }
      })
      .catch((error) => {
        toast.error('Error!');
        throw error;
      });

}

export const register = ({ firstName, lastName, email, password, isAdmin, accessKey }) => {
  return (dispatch) =>
    axios.post(API_URL + 'register', {
      firstName,
      lastName,
      email,
      password,
      isAdmin,
      accessKey
    })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
          dispatch({ type: LOGIN, payload: response.data });
          toast.success("Registered successfully!");
        }
        else {
          toast.error(response.data.error);
        }
      })
      .catch((error) => {
        toast.error('Something went wrong try again later');
        throw error;
      });
}

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('user');
    dispatch({ type: LOGOUT });
  }
};
