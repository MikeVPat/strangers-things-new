import React from "react";
import ReactDOM from "react-dom/client";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./components";
import { api, getPosts } from "./api";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
