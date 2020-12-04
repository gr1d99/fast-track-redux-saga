import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'reactstrap';
import {
  createUserRequest, deleteUserRequest, getUsersRequest, usersError,
} from '../actions/users';
import UsersList from './UsersList';
import UserForm from './UserForm';

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  const handleSubmit = ({ firstName, lastName }) => {
    dispatch(createUserRequest({ firstName, lastName }));
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUserRequest(id));
  };

  const handleCloseAlert = () => {
    dispatch(usersError(''));
  };

  const { error } = users;

  return (
    <div style={{
      margin: '0 auto', padding: '20px', maxWidth: '600px',
    }}
    >
      <Alert color="danger" isOpen={!!error} toggle={handleCloseAlert} fade>
        {error}
      </Alert>
      <UserForm onSubmit={handleSubmit} />
      <UsersList users={users.items} onDeleteUser={handleDeleteUser} />
    </div>
  );
}

export default App;
