//import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./config/routes";

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component></route.component>
                <h2>child component</h2>
              </route.layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}
