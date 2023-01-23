import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getPosts } from "../api/index";
import { Header, LogIn, Profile, Register, UserPosts } from "./";
import "./App.css";

const App = () => {
  const [tokenState, SetTokenState] = useState("");
  const [userLogIn, setUserLogIn] = useState(null);
  const setter = () => {
    const localToken = localStorage.getItem("token");
    console.log(localToken);
    if (localToken) {
      setUserLogIn(true), SetTokenState(localToken);
    } else {
      setUserLogIn(false);
    }
  };
  useEffect(setter);

  function logsIn() {
    setUserLogIn(true);
    localStorage.setItem("token", tokenState);
  }

  function logout() {
    localStorage.clear();
    setUserLogIn(false);
  }

  return (
    <>
      <Header userLogIn={userLogIn} />
      <Routes>
        <Route
          path="/"
          element={
            <UserPosts
              tokenState={tokenState}
              getPosts={getPosts}
              setUserLogIn={setUserLogIn}
              userLogIn={userLogIn}
              logout={logout}
            />
          }
        />
        <Route path="/login" element={<LogIn setUserLogIn={setUserLogIn} />} />
        <Route
          path="/profile"
          element={<Profile tokenState={tokenState} userLogIn={userLogIn} />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
