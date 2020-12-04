import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const UsersList = ({ users, onDeleteUser }) => (
  <ListGroup>
    {users.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return 1;
      } if (a.firstName < b.lastName) {
        return -1;
      } if (a.lastName > b.lastName) {
        return 1;
      } if (a.lastName < b.lastName) {
        return -1;
      }
      return 0;
    }).map((user) => {
      const handleDelete = () => {
        onDeleteUser(user.id);
      };
      return (
        <ListGroupItem key={user.id}>
          <section style={{ display: 'flex' }}>
            <div style={{ flexGrow: 1 }}>
              {user.firstName}
              {' '}
              {user.lastName}
            </div>
            <div>
              <Button outline color="danger" onClick={handleDelete}>Delete</Button>
            </div>
          </section>
        </ListGroupItem>
      );
    })}
  </ListGroup>
);

export default UsersList;
