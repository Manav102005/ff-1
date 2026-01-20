import React from 'react'
import '../styles/Services.css'

const services = [
  {
    id: 1,
    icon: '💆',
    name: 'Swedish Massage',
    description: 'Experience deep relaxation with our signature Swedish massage technique to relieve tension and stress.'
  },
  {
    id: 2,
    icon: '🧘',
    name: 'Yoga & Meditation',
    description: 'Find inner peace through guided yoga sessions and mindfulness meditation practices.'
  },
  {
    id: 3,
    icon: '💅',
    name: 'Facials & Skincare',
    description: 'Pamper your skin with our premium facial treatments using organic, natural products.'
  },
  {
    id: 4,
    icon: '🛀',
    name: 'Thermal Bath',
    description: 'Immerse yourself in our luxurious thermal baths infused with healing minerals and aromatherapy.'
  },
  {
    id: 5,
    icon: '💇',
    name: 'Hair Treatment',
    description: 'Restore shine and vitality to your hair with our specialized treatment services.'
  },
  {
    id: 6,
    icon: '🕯️',
    name: 'Aromatherapy',
    description: 'Discover the therapeutic benefits of essential oils through our aromatic experience.'
  }
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <p className="section-subtitle">Discover our range of premium wellness treatments</p>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
