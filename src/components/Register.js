import React from "react";
import { registerPerson } from "../api";

const Register = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmation) {
      alert("Password doesn't match")
      setPassword("")
      setConfirmation("")
  } else {
      const response = fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/users/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'Application/json',
          },
          body: JSON.stringify({
              user: {
                  username: username,
                  password: password
              }
          })
      }).then(response => response.json())
          .then(result => {
              console.log(result);
              const token = result.data.token;
              localStorage.setItem("userToken", token)
          })
          .catch(console.error);

      setUserName("");
      setPassword("");
      setConfirmation("");

  }

}
  
    

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input id="username" placeholder="Your Username here" />
        <label>Password:</label>
        <input id="password" placeholder="Your Password Here" />
        <label>Confirmation:</label>
        <input id="confirm" placeholder="Confirm Password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default Register;
