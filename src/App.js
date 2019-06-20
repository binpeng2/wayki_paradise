import React from 'react';
import Intro from './component/Intro.js'
import Benefit from './component/Benefit.js'
import './App.css';
import Gem from './component/Gem.js';
import FastGuide from './component/FastGuide.js';
import Navbar from './component/Navbar.js'
import { Router } from 'react-router';

function App() {



  return (
    <div className="App">
      <header className="App-header">
      <div className = "logo">
        <div className = "child">
        <img src={require("../src/assets/logo.png")} width="60%" />
        </div>
      <img src={require("../src/assets/header-img.png")} alt="header" width="100%"/>
      </div>
 

      <div className = "content">
        <Navbar />
      <Intro />
      <Benefit />
      <Gem />
      <FastGuide />
      </div>
      </header>
    </div>
  );
}

export default App;
