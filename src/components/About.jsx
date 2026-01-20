import React from 'react'
import '../styles/About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Serenity Spa</h2>
          <p>
            At Serenity Spa, we believe that true wellness comes from nurturing your entire being. 
            With over 15 years of expertise in the spa and wellness industry, we've created a sanctuary 
            where expert therapists combine ancient healing traditions with modern therapeutic techniques.
          </p>
          
          <div className="about-features">
            <div className="feature">
              <span className="feature-icon">🏆</span>
              <h4>Award-Winning</h4>
              <p>Recognized for excellence in spa services</p>
            </div>
            <div className="feature">
              <span className="feature-icon">👥</span>
              <h4>Expert Therapists</h4>
              <p>Certified and highly trained professionals</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🌿</span>
              <h4>Natural Products</h4>
              <p>100% organic and eco-friendly materials</p>
            </div>
            <div className="feature">
              <span className="feature-icon">😌</span>
              <h4>Customized Care</h4>
              <p>Personalized treatments for your needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
