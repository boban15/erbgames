import React from 'react';
import './EventsPage.css';

const EventsPage: React.FC = () => {
  const events = [
    {
      id: 1,
      name: 'Family Trivia Challenge',
      date: '2024-07-15',
      time: '2:00 PM',
      location: 'Main Hall',
      description: 'Test your knowledge of family history and general trivia.',
      maxParticipants: 20,
      currentParticipants: 12
    },
    {
      id: 2,
      name: 'Basketball Tournament',
      date: '2024-07-16',
      time: '10:00 AM',
      location: 'Basketball Court',
      description: 'Family vs Family basketball showdown.',
      maxParticipants: 16,
      currentParticipants: 8
    },
    {
      id: 3,
      name: 'Cooking Competition',
      date: '2024-07-16',
      time: '4:00 PM',
      location: 'Kitchen Area',
      description: 'Show off your culinary skills with a mystery basket challenge.',
      maxParticipants: 12,
      currentParticipants: 15
    },
    {
      id: 4,
      name: 'Talent Show',
      date: '2024-07-17',
      time: '7:00 PM',
      location: 'Main Stage',
      description: 'Share your unique talents with the family.',
      maxParticipants: 30,
      currentParticipants: 18
    }
  ];

  return (
    <div className="events-page">
      <div className="container">
        <header className="page-header">
          <h1>Events Schedule</h1>
          <p>Join us for these exciting family competition events!</p>
        </header>

        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <h3>{event.name}</h3>
                <span className={`availability ${event.currentParticipants >= event.maxParticipants ? 'full' : 'available'}`}>
                  {event.currentParticipants >= event.maxParticipants ? 'Full' : 'Available'}
                </span>
              </div>
              
              <div className="event-details">
                <div className="detail-item">
                  <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                </div>
                <div className="detail-item">
                  <strong>Time:</strong> {event.time}
                </div>
                <div className="detail-item">
                  <strong>Location:</strong> {event.location}
                </div>
                <div className="detail-item">
                  <strong>Participants:</strong> {event.currentParticipants}/{event.maxParticipants}
                </div>
              </div>

              <p className="event-description">{event.description}</p>

              <div className="event-actions">
                <button 
                  className={`btn ${event.currentParticipants >= event.maxParticipants ? 'btn-disabled' : 'btn-primary'}`}
                  disabled={event.currentParticipants >= event.maxParticipants}
                >
                  {event.currentParticipants >= event.maxParticipants ? 'Event Full' : 'Register'}
                </button>
                <button className="btn btn-secondary">View Details</button>
              </div>
            </div>
          ))}
        </div>

        <div className="schedule-summary">
          <h2>Schedule Overview</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">July 15</div>
              <div className="timeline-content">
                <h4>Day 1 - Mental Challenges</h4>
                <ul>
                  <li>2:00 PM - Family Trivia Challenge</li>
                  <li>6:00 PM - Welcome Dinner</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">July 16</div>
              <div className="timeline-content">
                <h4>Day 2 - Physical & Creative</h4>
                <ul>
                  <li>10:00 AM - Basketball Tournament</li>
                  <li>4:00 PM - Cooking Competition</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">July 17</div>
              <div className="timeline-content">
                <h4>Day 3 - Showcase & Awards</h4>
                <ul>
                  <li>7:00 PM - Talent Show</li>
                  <li>9:00 PM - Awards Ceremony</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;