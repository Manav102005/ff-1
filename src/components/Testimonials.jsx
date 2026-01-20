import React from 'react'
import '../styles/Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Anderson',
    role: 'Wellness Enthusiast',
    text: 'Serenity Spa is my sanctuary. The staff is incredibly professional and the atmosphere is so calming. I feel completely rejuvenated after every visit!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Corporate Executive',
    text: 'The massage therapy here has transformed my stress levels. I come every week and it\'s the best investment in my health.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Yoga Instructor',
    text: 'Impressed with the yoga and meditation sessions. The instructors are knowledgeable and create a wonderful, peaceful environment.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <h2>Client Testimonials</h2>
        <p className="section-subtitle">See what our satisfied clients have to say</p>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
