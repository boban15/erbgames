import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Contact form data:', formData);
    alert('Message sent successfully! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
  };

  const announcements = [
    {
      id: 1,
      title: 'ERB Games 2024 Registration Extended',
      date: '2024-02-15',
      type: 'registration',
      content: 'Due to popular demand, we\'ve extended the registration deadline to July 1st. Don\'t miss out!'
    },
    {
      id: 2,
      title: 'New Event Added: Mini Golf Tournament',
      date: '2024-02-10',
      type: 'event',
      content: 'We\'re excited to announce a new mini golf tournament for all ages. Perfect for family fun!'
    },
    {
      id: 3,
      title: 'Volunteer Opportunities Available',
      date: '2024-02-05',
      type: 'volunteer',
      content: 'Help make ERB Games 2024 amazing! We need volunteers for setup, scoring, and coordination.'
    },
    {
      id: 4,
      title: 'Photo Contest Winner Announced',
      date: '2024-01-28',
      type: 'winner',
      content: 'Congratulations to Sarah Johnson for winning our "Best ERB Games Memory" photo contest!'
    },
    {
      id: 5,
      title: 'Weather Contingency Plans',
      date: '2024-01-20',
      type: 'info',
      content: 'We have backup indoor venues ready in case of inclement weather. Games will go on!'
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        <header className="page-header">
          <h1>Contact & Announcements</h1>
          <p>Get in touch with us and stay updated on the latest ERB Games news</p>
        </header>

        <div className="content-grid">
          <section className="contact-section">
            <h2>Get in Touch</h2>
            
            <div className="contact-info">
              <div className="contact-card">
                <h3>Event Organizers</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <strong>John Smith</strong>
                    <p>Main Organizer</p>
                    <p>📧 john@erbgames.com</p>
                    <p>📱 (555) 123-4567</p>
                  </div>
                  <div className="contact-item">
                    <strong>Mike Johnson</strong>
                    <p>Co-Organizer</p>
                    <p>📧 mike@erbgames.com</p>
                    <p>📱 (555) 987-6543</p>
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <h3>Event Location</h3>
                <div className="contact-details">
                  <p><strong>ERB Family Center</strong></p>
                  <p>123 Family Way</p>
                  <p>Springfield, ST 12345</p>
                  <p>🅿️ Free parking available</p>
                  <p>♿ Wheelchair accessible</p>
                </div>
              </div>

              <div className="contact-card">
                <h3>Important Dates</h3>
                <div className="contact-details">
                  <p><strong>Registration Deadline:</strong> July 1, 2024</p>
                  <p><strong>Event Dates:</strong> July 15-17, 2024</p>
                  <p><strong>Setup Day:</strong> July 14, 2024</p>
                  <p><strong>Awards Ceremony:</strong> July 17, 2024</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send us a Message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="type">Message Type</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                >
                  <option value="general">General Inquiry</option>
                  <option value="registration">Registration Question</option>
                  <option value="event">Event Information</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback/Suggestion</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </section>

          <section className="announcements-section">
            <h2>Latest Announcements</h2>
            
            <div className="announcements-list">
              {announcements.map(announcement => (
                <article key={announcement.id} className="announcement-card">
                  <div className="announcement-header">
                    <h3>{announcement.title}</h3>
                    <div className="announcement-meta">
                      <span className={`announcement-type ${announcement.type}`}>
                        {announcement.type}
                      </span>
                      <span className="announcement-date">
                        {new Date(announcement.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <p>{announcement.content}</p>
                </article>
              ))}
            </div>

            <div className="newsletter-signup">
              <h3>Stay Updated</h3>
              <p>Subscribe to our newsletter for the latest ERB Games news and announcements.</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <button type="submit" className="btn btn-secondary">Subscribe</button>
              </form>
            </div>
          </section>
        </div>

        <section className="social-media">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <span>📘</span> Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <span>📷</span> Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              <span>🐦</span> Twitter
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              <span>📺</span> YouTube
            </a>
          </div>
        </section>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Who can participate in ERB Games?</h4>
              <p>All family members and their guests are welcome to participate in the games and activities.</p>
            </div>
            <div className="faq-item">
              <h4>Is there an age limit for events?</h4>
              <p>Most events are open to all ages, but some may have age categories or restrictions for safety reasons.</p>
            </div>
            <div className="faq-item">
              <h4>What should I bring?</h4>
              <p>Comfortable clothes, water bottle, and enthusiasm! Specific equipment will be provided for events.</p>
            </div>
            <div className="faq-item">
              <h4>Are meals provided?</h4>
              <p>Yes! Lunch and snacks are included in the registration. Please note any dietary restrictions when registering.</p>
            </div>
            <div className="faq-item">
              <h4>What happens if it rains?</h4>
              <p>We have indoor backup venues available. The games will continue rain or shine!</p>
            </div>
            <div className="faq-item">
              <h4>Can I change my event registration?</h4>
              <p>Yes, you can modify your registration up to 48 hours before the event. Contact us for assistance.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;