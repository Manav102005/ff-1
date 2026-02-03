import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Serenity Spa</h4>
          <p>Your sanctuary for wellness and rejuvenation</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#booking">Book Now</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>📍 123 Wellness Street, Spa City, SC 12345</p>
          <p>📞 (555) 123-4567</p>
          <p>📧 info@serenityspa.com</p>
        </div>

        <div className="footer-section">
          <h4>Hours</h4>
          <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
          <p>Saturday: 10:00 AM - 6:00 PM</p>
          <p>Sunday: 10:00 AM - 4:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Serenity Spa. All rights reserved.</p>
      </div>
    </footer>
  )
}
