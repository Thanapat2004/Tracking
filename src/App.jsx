import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import TrackingStatus from './pages/TrackingStatus';
import Contact from './pages/Contact'; 

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tracking-status" element={<TrackingStatus />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
