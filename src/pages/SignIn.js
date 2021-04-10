import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import '../css/auth.css';

async function authUser(credentials) {
  console.log('send credentials to backend, return token');
  return true;
 }

 // Login component
export default function SignIn({ isAuth, setIsAuth }) {
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
    const token = await authUser(values);
    setIsAuth(token);
    history.push("/");
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-wrapper">
      {/* <h1>John Hopkin's Nurse Simulation</h1> */}
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className="text-field">
          <input
            required
            type="text"
            name="username"
            value={values.username}
            onChange={onChange}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="text-field">
          <input
            required
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">Sign In</button>
        <Link className="forgot-password" to='/forgotpassword'>Forgot password?</Link>
        <span className="linebreak">OR</span>
        <Link className="create-account" to="/register">
          Create Account
        </Link>
      </form>
    </div>
  );
}