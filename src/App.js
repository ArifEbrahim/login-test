import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Policy from './Pages/Policy';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='policy' element={<Policy />} />
    </Routes>
  );
}

export default App;
