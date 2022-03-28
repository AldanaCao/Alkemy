import React from 'react';
import { Login } from './componets/Login';
import { Home } from './componets/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'






function App() {
 
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

</>
  );
}

export default App;
