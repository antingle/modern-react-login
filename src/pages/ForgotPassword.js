import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  // Updates form values
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
        <div className="text-field">
          <input
            required
            type="text"
            name="username"
            value={values.username}
            onChange={onChange}
          />
          <label htmlFor="username">Email</label>
        </div>
        <button type="submit">Send Reset Link</button>
        <span className="linebreak">OR</span>
        <Link className="create-account" to="/signin">
          Back to Sign In
        </Link>
      </form>
    </div>
  );
}
