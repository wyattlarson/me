import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Body />
      </header>
    </div>
  );
}

export default App;
