import React, { useState } from 'react'
import '../styles/Booking.css'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'swedish-massage',
    date: '',
    time: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    alert('Thank you! Your booking request has been received. We\'ll contact you soon!')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'swedish-massage',
      date: '',
      time: ''
    })
  }

  return (
    <section className="booking" id="booking">
      <div className="booking-container">
        <h2>Book Your Appointment</h2>
        <p className="section-subtitle">Reserve your perfect spa experience</p>
        
        <div className="booking-content">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="swedish-massage">Swedish Massage</option>
                <option value="yoga">Yoga & Meditation</option>
                <option value="facial">Facials & Skincare</option>
                <option value="thermal">Thermal Bath</option>
                <option value="hair">Hair Treatment</option>
                <option value="aromatherapy">Aromatherapy</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="booking-submit">Confirm Booking</button>
          </form>

          <div className="booking-info">
            <h3>Why Book With Us?</h3>
            <div className="info-item">
              <span className="info-icon">📅</span>
              <div>
                <h4>Easy Scheduling</h4>
                <p>Book your appointment online in just a few clicks</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">💳</span>
              <div>
                <h4>Flexible Payment</h4>
                <p>Multiple payment options available</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🔔</span>
              <div>
                <h4>Reminders</h4>
                <p>Receive email and SMS reminders</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">💝</span>
              <div>
                <h4>Special Offers</h4>
                <p>Exclusive discounts for loyal clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
