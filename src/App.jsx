import React from 'react'
import "./global.css"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
<BrowserRouter>
 <Navbar/>
<Routes>
 
 <Route path='/' element={<Home/>}/>
 <Route path='/about' element={<About/>}/>

    

</Routes>
  <Footer/>
</BrowserRouter>

    
    </div>
  )
}

export default App

