import { useState, useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';
import Question from './pages/Question';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import useLocalStorage from './utils/UseLocalStorage';


import './styles/main.css';




function App() {
  const [theme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <div className='App'>
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/question' element={<Question />} />
          </Routes>
        </div>
        <Footer />
      </Router>

    </div>
  )
}

export default App
