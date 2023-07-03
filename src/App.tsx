import React, { useState } from 'react';
import {
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import Navigation from './Navigation/navigation';
import Body from './Body';



function App() {
  const [activeColor, setActiveColor] = useState("rgb(40, 39, 37)");

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navigation setActiveColor={setActiveColor} />
        </header>
        <Body activeColor={activeColor} />
      </BrowserRouter>
    </div>
  );
}

export default App;
