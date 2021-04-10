import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/login.css';

async function loginUser(credentials) {
  console.log('send credentials to backend, return token');
  return true;
 }

 // Login component
export default function Login({ setIsAuth }) {

  // Stores React DOM history
  const history = useHistory();

  // Store form values
  const [values, setValues] = useState({
    username: "",
    password: "",
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

  return (
    <div className="login-wrapper">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
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
        <div>
          <button type="submit">Submit</button>
        </div>
        <Link to="/register">Need an account?</Link>
      </form>
    </div>
  );
}