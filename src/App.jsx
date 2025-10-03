import React from 'react'
import "./global.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home/'
import Contact from './components/Contact'
import About from './components/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
const App = () => {
  return (
    <div>
<BrowserRouter>
 <Navbar/>
<Routes>
 <Route path='*' element={<PageNotFound/>}/>
 <Route path='/' element={<Home/>}/>
 <Route path='/about' element={<About/>}/>
 <Route path='/contact' element={<Contact/>}/>

</Routes>
  <Footer/>
</BrowserRouter>

    
    </div>
  )
}

export default App

