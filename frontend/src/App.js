import React from 'react';
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import Tickets from './components/Tickets';

const App = () => {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    
  );
}

export default App;
