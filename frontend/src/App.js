import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>

        <Route path="/" exact element={<Home />} />
        </Routes>
    </BrowserRouter>

    </>
);
}

export default App