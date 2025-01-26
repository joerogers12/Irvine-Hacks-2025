import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

