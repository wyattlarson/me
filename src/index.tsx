import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Blog from './Apps/Blog/blog';
import EqComponent from './Apps/Eq/eq';
import Landing from './Apps/Landing';

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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

