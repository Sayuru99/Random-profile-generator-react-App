import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NameList from './components/pages/NameList/NameList';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';

function App() {
  return (
    <Router>
    <div>
        <HeaderBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/namelist" element={<NameList />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
