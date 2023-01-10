import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
// import { Navbar } from './components/Navbar'
 import AppRouter from './config/router';

function App() {
  return (
    <>
    
    {/* <Routes>
    <Route path="/" element={} />
    </Routes> */}
    <AppRouter/>
    </>
  );
}

export default App;