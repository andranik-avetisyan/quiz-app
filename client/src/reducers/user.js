import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;