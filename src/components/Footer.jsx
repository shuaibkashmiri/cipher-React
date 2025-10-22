import React from 'react'

const Footer = () => {
  return (
    <footer className='modern-footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>Your App</h3>
          <p>Building amazing experiences with modern technology.</p>
        </div>
        
        <div className='footer-section'>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className='footer-section'>
          <h4>Connect</h4>
          <div className='social-links'>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="GitHub">GitHub</a>
          </div>
        </div>
      </div>
      
      <div className='footer-bottom'>
        <p>&copy; 2024 Your App. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
