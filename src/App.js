import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import NameCard from "./Redux/components/namecard";
import NavBar from "./Redux/components/navBar";
import FadeIn from "./Redux/components/fadein";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <header className="App-header">
      <FadeIn delay='1.4'>
      <NavBar></NavBar>
      </FadeIn> 
      </header>
      <FadeIn delay='.5' direction='up'>
      <NameCard></NameCard>

      </FadeIn>
      <FadeIn delay='1'>
      <p>
          Illustration
        </p>
      </FadeIn>

    </div>
  );
}


export default App;
