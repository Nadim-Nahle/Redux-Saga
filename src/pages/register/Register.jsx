import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  function isValidEmail(val) {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(val)) {
      return false;
    } else {
      return true;
    }
  }

  function isValidPassword(val) {
    let regPassword = new RegExp(
      "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})"
    );
    if (!regPassword.test(val)) {
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = () => {
    if (!name) {
      setMessage("please enter your name");
    } else if (!email) {
      setMessage("please enter your email");
    } else if (!isValidEmail(email)) {
      setMessage("please provide a valid email");
    } else if (!password) {
      setMessage("please enter a password");
    } else if (password !== confirmPassword) {
      setMessage("password does not match");
    } else if (!isValidPassword(password)) {
      setMessage("password is weak");
    } else {
      alert("Registration Successful");
      setMessage("");
    }
  };
  return (
    <div className="register">
      <div className="form">
        <div className="subtitle">Let's create your account!</div>
        <div className="message">{message}</div>
        <div className="input-container ic1">
          <input
            className="input"
            type="text"
            placeholder=" "
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div className="cut"></div>
          <label className="placeholder"> Name</label>
        </div>
        <div className="input-container ic2">
          <input
            className="input"
            type="email"
            placeholder=" "
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="cut"></div>
          <label className="placeholder">Email</label>
        </div>
        <div className="input-container ic2">
          <input
            className="input"
            type="password"
            placeholder=" "
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="cut cut-short"></div>
          <label className="placeholder">Password</label>
        </div>
        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            type="password"
            placeholder=" "
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <div className="cut cut-short"></div>
          <label className="placeholder">Confirm Password</label>
        </div>
        <button type="text" className="submit" onClick={handleSubmit}>
          submit
        </button>
      </div>
    </div>
  );
};

export default Register;
