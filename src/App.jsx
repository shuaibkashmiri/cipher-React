import React from 'react'
import "./global.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home/'
import Contact from './components/Contact'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import Register from './components/Register'
import Login from './components/Login'
import UserDashboard from './components/UserDashboard'
// import Gallery from './components/Gallery'
const App = () => {
  return (
    <div>
<BrowserRouter>
 <Navbar/>
<Routes>
 <Route path='*' element={<PageNotFound/>}/>
 <Route path='/' element={<Home/>}/>
 {/* <Route path='/about' element={<Gallery/>}/> */}
 <Route path='/contact' element={<Contact/>}/>
 <Route path='/register' element={<Register/>}/>
 <Route path='/login' element={<Login/>}/>
 <Route path='/dashboard' element={<UserDashboard/>}/>




</Routes>
  <Footer/>
</BrowserRouter>

    
    </div>
  )
}

export default App

