export const Types = {
  GET_USERS_REQUEST: 'users.js/get_users_request',
  GET_USERS_SUCCESS: 'users.js/get_users_success',
  CREATE_USER_REQUEST: 'users.js/create_user_request',
  DELETE_USER_REQUEST: 'users.js/delete_user_request',
  USERS_ERROR: 'users.js/users_error',
  CLEAR_USERS_ERROR: 'users.js/clear_users_error',
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getUsersSuccess = ({ items }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: items,
});

export const createUserRequest = ({ firstName, lastName }) => ({
  type: Types.CREATE_USER_REQUEST,
  payload: { firstName, lastName },
});

export const deleteUserRequest = (id) => ({
  type: Types.DELETE_USER_REQUEST,
  payload: id,
});

export const usersError = (error) => ({ type: Types.USERS_ERROR, payload: error });
