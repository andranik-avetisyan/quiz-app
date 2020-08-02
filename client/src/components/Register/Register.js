import React, { useState } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import './Register.css';
import { useDispatch } from 'react-redux';
import { register } from '../../actions/userAction'

export const Register = ({ history }) => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({});
  const { firstName = '', lastName = '', email = '', password = '' } = userData

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(register(userData))
      .then(() => {
        history.push('/')
      })
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="first-name" size="lg">
          <FormLabel>First Name</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={firstName}
            onChange={(e) => setUserData({ ...userData, ...{ firstName: e.target.value } })}
          />
        </FormGroup>
        <FormGroup controlId="last-name" size="lg">
          <FormLabel>Last Name</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={lastName}
            onChange={(e) => setUserData({ ...userData, ...{ lastName: e.target.value } })}
          />
        </FormGroup>
        <FormGroup controlId="email" size="lg">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setUserData({ ...userData, ...{ email: e.target.value } })}
          />
        </FormGroup>
        <FormGroup controlId="password" size="lg">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setUserData({ ...userData, ...{ password: e.target.value } })}
            type="password"
          />
        </FormGroup>
        <Button block size="lg" disabled={!validateForm()} type="submit" variant="dark">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
