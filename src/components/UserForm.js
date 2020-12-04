import React, { useState } from 'react';
import {
  Button,
  Form, FormGroup, Input, Label,
} from 'reactstrap';

const UserForm = ({ onSubmit }) => {
  const [details, setDetails] = useState(() => ({
    firstName: '',
    lastName: '',
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(details);
    setDetails({ firstName: '', lastName: '' });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First Name</Label>
        <Input required placeholder="First Name" value={details.firstName} name="firstName" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label>Last Name</Label>
        <Input required placeholder="Last Name" value={details.lastName} name="lastName" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Button type="submit" outline color="primary" block>
          Submit
        </Button>
      </FormGroup>
    </Form>
  );
};

export default UserForm;
