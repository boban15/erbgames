import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    familyRelation: '',
    events: [] as string[],
    dietaryRestrictions: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const events = [
    'Family Trivia Challenge',
    'Basketball Tournament',
    'Cooking Competition',
    'Talent Show'
  ];

  const familyRelations = [
    'Parent',
    'Child',
    'Grandparent',
    'Sibling',
    'Aunt/Uncle',
    'Cousin',
    'In-law',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEventChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      events: checked 
        ? [...prev.events, value]
        : prev.events.filter(event => event !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Registration data:', formData);
    alert('Registration submitted successfully! You will receive a confirmation email shortly.');
  };

  return (
    <div className="registration-page">
      <div className="container">
        <header className="page-header">
          <h1>Event Registration</h1>
          <p>Sign up for ERB Games 2024 and join the family competition!</p>
        </header>

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="familyRelation">Family Relation *</label>
              <select
                id="familyRelation"
                name="familyRelation"
                value={formData.familyRelation}
                onChange={handleInputChange}
                required
              >
                <option value="">Select your relation</option>
                {familyRelations.map(relation => (
                  <option key={relation} value={relation}>{relation}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-section">
            <h2>Event Selection</h2>
            <p>Choose which events you'd like to participate in:</p>
            <div className="events-checkbox-group">
              {events.map(event => (
                <div key={event} className="checkbox-item">
                  <input
                    type="checkbox"
                    id={event}
                    value={event}
                    checked={formData.events.includes(event)}
                    onChange={handleEventChange}
                  />
                  <label htmlFor={event}>{event}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h2>Additional Information</h2>
            <div className="form-group">
              <label htmlFor="dietaryRestrictions">Dietary Restrictions/Allergies</label>
              <textarea
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleInputChange}
                rows={3}
                placeholder="Please list any dietary restrictions or allergies..."
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="emergencyContact">Emergency Contact Name</label>
                <input
                  type="text"
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="emergencyPhone">Emergency Contact Phone</label>
                <input
                  type="tel"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Submit Registration</button>
            <button type="button" className="btn btn-secondary">Save Draft</button>
          </div>
        </form>

        <div className="registration-info">
          <h3>Important Information</h3>
          <ul>
            <li>Registration deadline: July 1, 2024</li>
            <li>All participants must be family members or guests</li>
            <li>Some events have limited capacity - register early!</li>
            <li>Confirmation will be sent within 24 hours</li>
            <li>Contact us if you need to make changes after registration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;