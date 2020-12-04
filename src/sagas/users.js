import {
  takeEvery, takeLatest, call, fork, put, take,
} from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(actions.getUsersSuccess({
      items: result.data.data,
    }));
  } catch (e) {
    yield put(actions.usersError('An error occurred on getting users'));
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* createUser(action) {
  try {
    yield call(api.createUser, { ...action.payload });
    yield call(getUsers);
  } catch (e) {
    yield put(actions.usersError('An error occurred on creating user'));
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* deleteUser(id) {
  try {
    yield call(api.deleteUser, id);
    yield call(getUsers);
  } catch (e) {
    yield put(actions.usersError('An error occurred on deleting a user'));
  }
}

function* watchDeleteUser() {
  while (true) {
    const action = yield take(actions.Types.DELETE_USER_REQUEST);
    yield call(deleteUser, action.payload);
  }
}

const UsersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUser),
];

export default UsersSagas;
