import React from 'react';
import Intro from './component/Intro.js'
import Benefit from './component/Benefit.js'
import './App.css';
import Gem from './component/Gem.js';
import FastGuide from './component/FastGuide.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={require("../src/assets/header-img.png")} alt="Logo" width="100%"/>
      <Intro className = "content"/>
      <Benefit />
      <Gem />
      <FastGuide />
      </header>
    </div>
  );
}

export default App;
