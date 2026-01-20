import React from 'react'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to Serenity Spa</h1>
        <p>Rejuvenate Your Mind, Body & Soul</p>
        <button className="hero-btn">Explore Our Services</button>
      </div>
      <div className="hero-background">
        <div className="floating-leaf leaf-1"></div>
        <div className="floating-leaf leaf-2"></div>
        <div className="floating-leaf leaf-3"></div>
      </div>
    </section>
  )
}
