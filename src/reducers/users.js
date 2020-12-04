import { Types } from '../actions/users';

const INITIAL_STATE = {
  items: [],
  error: undefined,
};

const users = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
    case Types.GET_USERS_SUCCESS:
      return { ...state, items: payload };
    case Types.USERS_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default users;
