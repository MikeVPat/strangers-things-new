import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { setter } from "../api";

const Header = ({userLogIn, setUserLogIn}, {logout}) => {

console.log(userLogIn, logout)
{logout}
function logout(){
  localStorage.clear()
  
}
  return (
    <header className="siteheader">
      <h1>Welcome To Stranger's Things</h1>

      {userLogIn ? (
        <>
          <Link to="/" className="current">
            POSTS
          </Link>
          <Link to="/profile" className="current">
            PROFILE
          </Link>
          <Link to="/register" className="current">
            REGISTER
          </Link>
          <button id="logout" onClick={(e)=>[logout(e),window.location.reload()]}>Log Out</button>
        
        </>
      ) : (
        <>
          <Link to="/" className="current">
            POSTS
          </Link>
          <Link to="/profile" className="current">
            PROFILE
          </Link>
          <Link to="/login">LOG IN</Link>
          <Link to="/register" className="current">
            REGISTER
          </Link>
        </>
      )}
    </header>
  );
};
export default Header;
