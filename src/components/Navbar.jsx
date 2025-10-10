import React from 'react'

import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
       <h4 className='logo'>logo</h4>
       <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact </Link></li>
        <li><Link className='reg-button' to="/register">Register</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
