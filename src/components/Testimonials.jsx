import React, { useState } from 'react';
import './Fonts/testmonials.css';
import pic1 from './Images/handsome-adult-male-posing_23-2148729713.avif'
import pic2 from './Images/black-man-posing_23-2148171684.avif'
import pic3 from './Images/calm-man_1098-13697.avif'
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Daniel Clifford",
      position: "Software Engineer",
      company: "VR Startup",
      image: pic1,
      quote: "I was an EMT for many years before I joined the bootcamp. The next 12 weeks was the best - and most grueling - time of my life.",
      id: 1
    },
    {
      name: "Jonathan Walters",
      position: "Mobile Developer",
      company: "Tech Giants",
      image: pic2,
      quote: "I started as a total newbie with virtually no coding skills. Now I work as a mobile engineer. Best investment I've made in myself.",
      id: 2
    },
    {
      name: "Kira Whittle",
      position: "Full Stack Developer",
      company: "Innovation Labs",
      image: pic3,
      quote: "Before joining the bootcamp, I had never written a line of code. The curriculum and staff exceeded all my expectations.",
      id: 3
    }
  ];

  return (
    <div className="testimonials-wrapper">
      <div className="testimonials-container">
        <div className="testimonial-header">
          <h2 className="section-tag">TESTIMONIALS</h2>
          <h4>What Our Customers Say</h4>
          <div className="header-line"></div>
        </div>

        <div className="testimonial-main">
          <div className="testimonial-showcase">
            {testimonials.map((item, index) => (
              <div 
                key={item.id}
                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
              >
                <div className="quote-icon">❝</div>
                <p className="quote-text">{item.quote}</p>
                <div className="card-footer">
                  <div className="avatar-container">
                    <img src={item.image} alt={item.name} />
                    <div className="avatar-ring"></div>
                  </div>
                  <div className="author-info">
                    <h4>{item.name}</h4>
                    <p>{item.position}</p>
                    <span>{item.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-nav">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;