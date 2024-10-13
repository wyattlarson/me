import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Blog from './Apps/Blog/blog';
import EqComponent from './Apps/Eq/eq';
import Landing from './Apps/Landing';
import Swede from './Apps/Eq/lessons/eq';
import BeStill from './Apps/Eq/lessons/bestill';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/eq" element={<EqComponent />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/lessons/swede" element={<Swede />} />
        <Route path="/lessons/bestill" element={<BeStill />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

