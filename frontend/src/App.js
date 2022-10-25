import logo from './logo.svg';
import './App.css';

import { React, Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Markets from "./components/Markets";
import NavBar from "./components/NavBar";


function App() {
    return (
      <>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="" element={
                     <Markets />
            } />
            <Route path="/markets" element={
                     <Markets />
            } />
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;
