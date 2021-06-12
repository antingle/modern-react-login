import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/auth.css";

// Login component
export default function Register({ isAuth, setIsAuth }) {
  // Stores React DOM history
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  // Store form values
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    confirm_pass: "",
    teacher_code: "",
  });

  // Updates form values
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Submit function
  const handleSubmit = async (e) => {
    setLoading(true);
    // communicate with database here
    e.preventDefault();
    console.log("register");
    setLoading(false);
    history.push("/");
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <div className="text-field">
          <input
            required
            type="text"
            name="first_name"
            value={values.first_name}
            onChange={onChange}
          />
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="text-field">
          <input
            required
            type="text"
            name="last_name"
            value={values.last_name}
            onChange={onChange}
          />
          <label htmlFor="last_name">Last Name</label>
        </div>
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
        <div className="text-field">
          <input
            required
            type="password"
            name="confirm_pass"
            value={values.confirm_pass}
            onChange={onChange}
          />
          <label htmlFor="confirm_pass">Confirm Password</label>
        </div>
        <div className="text-field">
          <input
            required
            type="text"
            name="teacher_code"
            value={values.teacher_code}
            onChange={onChange}
          />
          <label htmlFor="code">Code</label>
        </div>
        <button type="submit" disabled={loading}>
          {!loading && <span>Create Account</span>}
          {loading && (
            <>
              <div className="loader"></div>
              <span>Creating Account</span>
            </>
          )}
        </button>
        <span className="linebreak">OR</span>
        <Link className="create-account" to="/signin">
          Go to Sign In
        </Link>
      </form>
    </div>
  );
}
