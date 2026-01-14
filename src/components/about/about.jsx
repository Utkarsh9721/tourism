import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about-page" id="about">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1>We are here for you!</h1>
            <p className="lead">
              At <strong>TransXs Travels</strong>, every journey is more than a destination — it's a story waiting to be told.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Welcome to <strong>TransXs Travels</strong>, your trusted companion in discovering the beauty and diversity of India and beyond. Our mission is simple — to inspire travelers, simplify journeys, and create experiences that leave lasting memories.
          </p>

          <p>
            Whether it's exploring the majestic Taj Mahal, cruising through Kerala's backwaters, or experiencing the spiritual energy of Varanasi, we bring you closer to the heart of each destination.
          </p>

          <p>
            With expert travel guides, personalized recommendations, and a passion for storytelling, we make travel more than just movement — we make it meaningful. At TransXs, we believe every journey should be a story worth sharing.
          </p>

          <div className="cta-row">
            <a href="#guides" className="btn-primary">Explore Guides</a>
            <a href="#contact" className="btn-ghost">Get in Touch</a>
          </div>
        </div>

        <aside className="about-cards">
          <div className="card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>Make every trip safe, simple, and unforgettable through local expertise and thoughtful planning.</p>
          </div>

          <div className="card">
            <div className="card-icon">⭐</div>
            <h3>Why Choose Us</h3>
            <p>Local guides, curated itineraries, transparent pricing, and 24/7 support when you travel.</p>
          </div>

          <div className="card">
            <div className="card-icon">🌱</div>
            <h3>Sustainability</h3>
            <p>We support responsible travel—respecting local communities and protecting natural places.</p>
          </div>
        </aside>
      </div>

      {/* Quick Travel Tips Section */}
      <div id="guides" className="mini-guides">
        <div className="container">
          <h2>Quick Travel Tips</h2>
          <div className="tips-grid">
            <div className="tip-item">
              <div className="tip-number">1</div>
              <p>Carry a small first-aid kit and photocopies of important documents.</p>
            </div>
            <div className="tip-item">
              <div className="tip-number">2</div>
              <p>Try local food but pick well-reviewed places for street food safety.</p>
            </div>
            <div className="tip-item">
              <div className="tip-number">3</div>
              <p>Book trains and long-distance transport in advance during peak season.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;