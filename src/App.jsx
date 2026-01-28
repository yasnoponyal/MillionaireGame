import { useState, useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';
import Rules from './pages/Rules';
import Question from './pages/Question';
import Loss from './pages/Loss';
import Win from './pages/Win';
import Error404 from './pages/Error404';

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
            <Route path='/rules' element={<Rules />} />
            <Route path='/question/:id' element={<Question />} />
            <Route path="/question" element={<Navigate to="/question/0" replace />} />
            <Route path='/loss' element={<Loss />}></Route>
            <Route path='/win' element={<Win />}></Route>
            <Route path='*' element={<Error404 />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>

    </div>
  )
}

export default App
