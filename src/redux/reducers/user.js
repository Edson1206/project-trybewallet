import { SAVE_EMAIL } from '../actions';

const INICIAL_STATE = {
  email: '',
};

const userReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL: {
    return {
      ...state,
      email: action.email,
    };
  }
  default:
    return state;
  }
};

export default userReducer;
