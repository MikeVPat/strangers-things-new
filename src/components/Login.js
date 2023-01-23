import React, { useState } from "react";
import { loginUser } from "../api";
import "./App.css";

const LogIn = ({ user }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (event) => {
    const changed = event.target.id;
    if (changed === "username") {
      setUserName(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginUser(username, password);
    localStorage.setItem("token", token);
    window.location.reload("/");
  };

  return (
    <>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            id="username"
            onChange={handleOnChange}
            placeholder="Your Username here"
            value={username}
          />
          <label>Password</label>
          <input
            id="password"
            onChange={handleOnChange}
            placeholder="Your Password Here"
            value={password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
export default LogIn;
