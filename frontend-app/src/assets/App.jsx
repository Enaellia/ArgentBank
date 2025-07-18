import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/main.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn'

function App() {
  return (
    <div className="app-wrapper">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;