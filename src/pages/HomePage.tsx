import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to ERB Games</h1>
          <p>The ultimate family competition experience</p>
          <div className="cta-buttons">
            <button className="btn-primary">View Events</button>
            <button className="btn-secondary">Register Now</button>
          </div>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          <h2>Latest News & Announcements</h2>
          <div className="news-grid">
            <article className="news-card">
              <h3>ERB Games 2024 Registration Open!</h3>
              <p>Registration is now open for this year's competition. Don't miss out on the fun!</p>
              <span className="news-date">Posted: January 15, 2024</span>
            </article>
            <article className="news-card">
              <h3>New Events Added</h3>
              <p>We've added three exciting new competitions to this year's lineup.</p>
              <span className="news-date">Posted: January 10, 2024</span>
            </article>
            <article className="news-card">
              <h3>Photo Gallery Updated</h3>
              <p>Check out the amazing moments from last year's competition in our photo gallery.</p>
              <span className="news-date">Posted: January 5, 2024</span>
            </article>
          </div>
        </div>
      </section>

      <section className="stats-preview">
        <div className="container">
          <h2>Competition Stats</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>42</h3>
              <p>Family Members</p>
            </div>
            <div className="stat-card">
              <h3>15</h3>
              <p>Events</p>
            </div>
            <div className="stat-card">
              <h3>8</h3>
              <p>Years Running</p>
            </div>
            <div className="stat-card">
              <h3>500+</h3>
              <p>Memories Made</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;