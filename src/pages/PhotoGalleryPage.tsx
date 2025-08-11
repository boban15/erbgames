import React, { useState } from 'react';
import './PhotoGalleryPage.css';

const PhotoGalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Event Highlights' },
    { id: 'family', name: 'Family Moments' },
    { id: 'winners', name: 'Winners & Awards' },
    { id: 'behind-scenes', name: 'Behind the Scenes' }
  ];

  // Sample photo data - in a real app, these would come from a backend/database
  const photos = [
    {
      id: 1,
      src: '/api/placeholder/400/300',
      alt: 'Family Trivia Challenge 2024',
      category: 'events',
      caption: 'Intense competition during the Family Trivia Challenge',
      year: '2024'
    },
    {
      id: 2,
      src: '/api/placeholder/400/300',
      alt: 'Basketball Tournament Winners',
      category: 'winners',
      caption: 'Team Beta celebrates their basketball victory',
      year: '2024'
    },
    {
      id: 3,
      src: '/api/placeholder/400/300',
      alt: 'Cooking Competition',
      category: 'events',
      caption: 'Teams showing off their culinary creations',
      year: '2024'
    },
    {
      id: 4,
      src: '/api/placeholder/400/300',
      alt: 'Family Group Photo',
      category: 'family',
      caption: 'The entire ERB family together for 2024 games',
      year: '2024'
    },
    {
      id: 5,
      src: '/api/placeholder/400/300',
      alt: 'Talent Show Performance',
      category: 'events',
      caption: 'Amazing talent show performances',
      year: '2024'
    },
    {
      id: 6,
      src: '/api/placeholder/400/300',
      alt: 'Awards Ceremony',
      category: 'winners',
      caption: 'Presenting the championship trophy',
      year: '2024'
    },
    {
      id: 7,
      src: '/api/placeholder/400/300',
      alt: 'Setup Preparations',
      category: 'behind-scenes',
      caption: 'Getting everything ready for the games',
      year: '2024'
    },
    {
      id: 8,
      src: '/api/placeholder/400/300',
      alt: 'Kids Playing Games',
      category: 'family',
      caption: 'The younger generation having fun',
      year: '2024'
    },
    {
      id: 9,
      src: '/api/placeholder/400/300',
      alt: 'BBQ Time',
      category: 'family',
      caption: 'Family BBQ during lunch break',
      year: '2023'
    },
    {
      id: 10,
      src: '/api/placeholder/400/300',
      alt: 'Game Officials',
      category: 'behind-scenes',
      caption: 'The hard-working volunteers and organizers',
      year: '2023'
    },
    {
      id: 11,
      src: '/api/placeholder/400/300',
      alt: '2023 Champions',
      category: 'winners',
      caption: 'Last year\'s overall champions',
      year: '2023'
    },
    {
      id: 12,
      src: '/api/placeholder/400/300',
      alt: 'Water Balloon Fight',
      category: 'events',
      caption: 'Fun water activities during break time',
      year: '2023'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredPhotos.length;
      setSelectedImage(filteredPhotos[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedImage);
      const prevIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
      setSelectedImage(filteredPhotos[prevIndex].id);
    }
  };

  const selectedPhoto = photos.find(photo => photo.id === selectedImage);

  return (
    <div className="photo-gallery-page">
      <div className="container">
        <header className="page-header">
          <h1>Photo Gallery</h1>
          <p>Relive the amazing moments from ERB Games competitions</p>
        </header>

        <div className="gallery-controls">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="gallery-stats">
            <span>{filteredPhotos.length} photos</span>
          </div>
        </div>

        <div className="photo-grid">
          {filteredPhotos.map(photo => (
            <div 
              key={photo.id} 
              className="photo-item"
              onClick={() => openLightbox(photo.id)}
            >
              <div className="photo-container">
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  loading="lazy"
                />
                <div className="photo-overlay">
                  <div className="photo-caption">{photo.caption}</div>
                  <div className="photo-year">{photo.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="no-photos">
            <p>No photos found in this category.</p>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && selectedPhoto && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>×</button>
              <button className="lightbox-prev" onClick={prevImage}>‹</button>
              <button className="lightbox-next" onClick={nextImage}>›</button>
              
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.alt}
                className="lightbox-image"
              />
              
              <div className="lightbox-info">
                <h3>{selectedPhoto.alt}</h3>
                <p>{selectedPhoto.caption}</p>
                <span className="photo-year">{selectedPhoto.year}</span>
              </div>
            </div>
          </div>
        )}

        <section className="upload-section">
          <h2>Share Your Photos</h2>
          <p>Have photos from the games? We'd love to add them to our gallery!</p>
          <div className="upload-info">
            <div className="upload-card">
              <h3>How to Submit</h3>
              <ul>
                <li>Email photos to: photos@erbgames.com</li>
                <li>Include a brief description</li>
                <li>Mention the event and year</li>
                <li>Photos will be reviewed and added within 24 hours</li>
              </ul>
            </div>
            <div className="upload-card">
              <h3>Guidelines</h3>
              <ul>
                <li>High-resolution images preferred</li>
                <li>Family-friendly content only</li>
                <li>Get permission from people in photos</li>
                <li>We reserve the right to edit or crop images</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PhotoGalleryPage;