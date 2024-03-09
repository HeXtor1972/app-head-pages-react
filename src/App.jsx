import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import NavbarComponent from './components/navBar';

function App() {
  return (
    <>
    <NavbarComponent />
      <Routes>
        <Route path="/app-head-pages-react/" element={<Home />} />
        <Route path="/app-head-pages-react/movies" element={<Movie />} />
        <Route path="/app-head-pages-react/*" element={<Navigate to='/app-head-pages-react/' /> } />
      </Routes>

    </>
  )
}

export default App
