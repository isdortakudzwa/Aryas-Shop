import React from 'react';
import { useState } from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Send, AlertCircle } from 'lucide-react';
import './Fonts/contact.css'


const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!inputs.name.trim()) newErrors.name = 'Name is required';
    if (!inputs.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!inputs.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 3000);
      setInputs({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              We would love to hear from you. Please fill out the form and well get back to you as soon as possible.
            </p>

            <div className="info-list">
              <div className="info-item">
                <MapPin />
                <span>123 Business Avenue, New York, NY 10001</span>
              </div>
              <div className="info-item">
                <Mail />
                <span>contact@business.com</span>
              </div>
              <div className="info-item">
                <Phone />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <div className="social-links">
              <p>Connect with us:</p>
              <div className="social-icons">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="/" className="social-icon">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name<span>*</span></label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'error' : ''}`}
                  value={inputs.name}
                  onChange={(e) => {
                    setInputs(prev => ({ ...prev, name: e.target.value }));
                    if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                  }}
                />
                {errors.name && (
                  <div className="error-message">
                    <AlertCircle size={16} />
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>Email<span>*</span></label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'error' : ''}`}
                  value={inputs.email}
                  onChange={(e) => {
                    setInputs(prev => ({ ...prev, email: e.target.value }));
                    if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                  }}
                />
                {errors.email && (
                  <div className="error-message">
                    <AlertCircle size={16} />
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  value={inputs.phone}
                  onChange={(e) => setInputs(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label>Message<span>*</span></label>
                <textarea
                  className={`form-control ${errors.message ? 'error' : ''}`}
                  value={inputs.message}
                  onChange={(e) => {
                    setInputs(prev => ({ ...prev, message: e.target.value }));
                    if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
                  }}
                ></textarea>
                {errors.message && (
                  <div className="error-message">
                    <AlertCircle size={16} />
                    {errors.message}
                  </div>
                )}
              </div>

              <button type="submit" className="submit-btn">
                <Send size={20} />
                Send Message
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <div className="success-dot"></div>
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;