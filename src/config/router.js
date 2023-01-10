import React from 'react'
import {  Route, Routes,BrowserRouter } from 'react-router-dom'
// import Admin from '../pages/Admin/admin'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Navbar from '../components/Navbar'
// import  Link  from '../components/Link'
import Home from '../screens/Home'
// import { H } from 'chart.js/dist/chunks/helpers.core'
import About from '../screens/About'
import Skills from '../screens/Skills'
import Contact from '../screens/Contact'
import Services from '../screens/Services'
import MuiNavbar from '../screens/MuiNavbar'
// import StdForm from '../pages/StdForm/StdForm'

function AppRouter() {
  return (
    <BrowserRouter> 

    <MuiNavbar />
        <Routes>
            
            <Route path='/home' element={<Home />} exact />
                
                <Route path='/about' element={<About/>} />
                
               
                <Route path='/skills' element={<Skills />} />
               
                <Route path='/contact' element={<Contact />} />
               
                <Route path='/services' element={<Services />} />
                <Route path='/' element={<Signup />} exact />
            <Route path='/Login' element={<Login />} exact />
             
           
            {/* <Route path='login' element={<Login/>}/>
            <Route path='/' element={<Signup/>}/> */}
            
        </Routes>
   
    </BrowserRouter>
  );
};

export default AppRouter;