import React from 'react';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

// Pages
import Home from './pages/Home';
import Leaderboards from './pages/Leaderboards';
import Maps from './pages/Maps';

// Error pages
import Error404 from './pages/ErrorPages/404';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route path="/maps" element={<Maps />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
