import React from 'react';
import Intro from './component/Intro.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={require("../src/assets/header-img.png")} alt="Logo" width="100%"/>
      <Intro className = "content"/>
      
      </header>
    </div>
  );
}

export default App;
