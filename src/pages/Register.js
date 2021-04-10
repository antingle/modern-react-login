import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import '../css/login.css';

async function loginUser(credentials) {
  console.log('send credentials to backend, register user and return token');
  return true;
 }

 // Login component
export default function Register({ isAuth, setIsAuth }) {

  // Stores React DOM history
  const history = useHistory();

  // Store form values
  const [values, setValues] = useState({
    first_name:"",
    last_name:"",
    username: "",
    password: "",
    confirm_pass:""
  });

  // Updates form values
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser(values);
    setIsAuth(token);
    history.push('/');
  };

  if (isAuth) {   
    return <Redirect to="/" />
}

  return (
    <div className="login-wrapper">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
      <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={values.first_name}
          onChange={onChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={values.last_name}
          onChange={onChange}
        />
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={onChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={onChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirm_pass"
          value={values.confirm_pass}
          onChange={onChange}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
        <Link to="/register">Need an account?</Link>
      </form>
    </div>
  );
}