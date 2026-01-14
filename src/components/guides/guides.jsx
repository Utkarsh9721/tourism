import React, { useState } from 'react';
import './guides.css';

// Import images (you can use these Unsplash URLs or add your own images)
const Guide = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const guideCategories = [
    { id: 'all', name: 'All Guides', icon: '🗺️' },
    { id: 'planning', name: 'Planning', icon: '📋' },
    { id: 'accommodation', name: 'Hotels', icon: '🏨' },
    { id: 'transport', name: 'Transport', icon: '🚗' },
    { id: 'food', name: 'Food & Drink', icon: '🍽️' },
    { id: 'culture', name: 'Culture', icon: '🎭' },
    { id: 'safety', name: 'Safety', icon: '🛡️' },
  ];

  const guides = [
    {
      title: "Best Time to Visit India",
      desc: "October to March for pleasant weather across most regions. Monsoon season (June-September) offers lush greenery.",
      icon: "🌤️",
      category: "planning",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: {
        season: "Winter (Oct-Mar)",
        temp: "15-25°C",
        highlights: ["Festivals", "Wildlife Safari", "Trekking", "Cultural Events"],
        rating: 5
      }
    },
    {
      title: "Top Hotel Chains",
      desc: "Luxury: Taj, Oberoi, Leela. Mid-range: Lemon Tree, Ginger. Budget: OYO, Treebo.",
      icon: "🏨",
      category: "accommodation",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: {
        priceRange: "₹2000 - ₹40000",
        amenities: ["WiFi", "Pool", "Spa", "Restaurant"],
        rating: 4.5,
        recommended: ["Taj Hotels", "ITC Hotels", "Marriott"]
      }
    },
    {
      title: "Transportation Guide",
      desc: "Trains for long distances, metro in major cities, auto-rickshaws for local travel.",
      icon: "🚆",
      category: "transport",
      image: "https://images.unsplash.com/photo-1566838634691-88d18427d4b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: {
        bestFor: "Long Distance: Trains, Short Distance: Autos",
        apps: ["Uber", "Ola", "IRCTC", "MakeMyTrip"],
        tips: ["Book trains early", "Use metro in cities", "Negotiate auto fares"]
      }
    },
    {
      title: "Local Cuisine Guide",
      desc: "North: Butter Chicken, South: Dosa & Idli, East: Fish Curry, West: Vada Pav.",
      icon: "🍛",
      category: "food",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: {
        mustTry: ["Biryani", "Masala Dosa", "Chaat", "Butter Chicken"],
        vegetarian: ["Paneer Tikka", "Dal Makhani", "Samosa"],
        sweet: ["Gulab Jamun", "Rasgulla", "Jalebi"]
      }
    },
    {
      title: "Cultural Etiquette",
      desc: "Remove shoes at temples, dress modestly, use right hand for eating/giving.",
      icon: "🙏",
      category: "culture",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: {
        dos: ["Namaste greeting", "Remove shoes", "Dress modestly", "Ask permission"],
        donots: ["Public affection", "Point feet", "Left hand usage", "Leather in temples"]
      }
    },
    {
      title: "Packing Essentials",
      desc: "Light cotton clothes, comfortable shoes, sunscreen, medications, power adapter.",
      icon: "🧳",
      category: "planning",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: {
        clothing: ["Cotton clothes", "Scarf/shawl", "Comfortable shoes", "Raincoat"],
        essentials: ["Sunscreen", "Medications", "Power bank", "Water bottle"],
        documents: ["Passport copy", "Travel insurance", "Hotel bookings"]
      }
    },
    {
      title: "Safety Tips",
      desc: "Keep valuables secure, drink bottled water, be aware of surroundings.",
      icon: "🛡️",
      category: "safety",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: {
        health: ["Bottled water", "Street food caution", "Vaccinations", "Mosquito repellent"],
        security: ["Hotel safe", "Copy documents", "Emergency contacts", "Local police number"]
      }
    },
    {
      title: "Shopping Guide",
      desc: "Bargain at local markets, check for authenticity, get GST refunds.",
      icon: "🛍️",
      category: "culture",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      details: {
        markets: ["Delhi: Chandni Chowk", "Mumbai: Colaba", "Jaipur: Johari Bazaar"],
        specialties: ["Textiles", "Jewelry", "Spices", "Handicrafts"],
        tips: ["Bargain politely", "Check quality", "Get receipts"]
      }
    }
  ];

  const travelTips = [
    { icon: "💳", tip: "Carry multiple payment options: cash, cards, UPI" },
    { icon: "📱", tip: "Download offline maps and translation apps" },
    { icon: "💊", tip: "Carry basic medicines and prescriptions" },
    { icon: "🌐", tip: "Get a local SIM card for better connectivity" },
    { icon: "💧", tip: "Stay hydrated and use only bottled water" },
    { icon: "📞", tip: "Save emergency numbers: Police 100, Ambulance 102" }
  ];

  const filteredGuides = activeCategory === 'all' 
    ? guides 
    : guides.filter(guide => guide.category === activeCategory);

  return (
    <div className="guides-page" id='guides'>
      {/* Hero Section */}
      <div className="guide-hero">
        <div className="hero-content">
          <h1 className="guide-main-title">
            <span className="title-icon">🗺️</span>
            India Travel Guide
          </h1>
          <p className="guide-hero-subtitle">
            Your complete companion for exploring Incredible India. From hotels to heritage, we've got you covered.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">28</span>
              <span className="stat-label">States</span>
            </div>
            <div className="stat">
              <span className="stat-number">40+</span>
              <span className="stat-label">UNESCO Sites</span>
            </div>
            <div className="stat">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Years of History</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Experiences</span>
            </div>
          </div>
        </div>
      </div>

      <div className="guide-container">
        {/* Categories Filter */}
        <div className="categories-section">
          <h2 className="section-title">Browse by Category</h2>
          <div className="categories-list">
            {guideCategories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="btn-icon">{category.icon}</span>
                <span className="btn-text">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Guide Cards */}
        <div className="guides-section">
          <h2 className="section-title">
            Essential Travel Guides
            <span className="guide-count"> ({filteredGuides.length})</span>
          </h2>
          
          <div className="guide-cards-grid">
            {filteredGuides.map((guide, index) => (
              <div key={index} className="guide-card" 
                   style={{animationDelay: `${index * 0.1}s`}}>
                <div className="card-image-container">
                  <img 
                    src={guide.image} 
                    alt={guide.title}
                    className="guide-image"
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <span className="guide-icon-large">{guide.icon}</span>
                  </div>
                  <div className="card-category">{guide.category}</div>
                </div>
                
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">{guide.title}</h3>
                    <span className="guide-icon">{guide.icon}</span>
                  </div>
                  
                  <p className="card-desc">{guide.desc}</p>
                  
                  <div className="card-details">
                    {guide.details.rating && (
                      <div className="rating">
                        {'★'.repeat(Math.floor(guide.details.rating))}
                        {'☆'.repeat(5 - Math.floor(guide.details.rating))}
                        <span className="rating-text">{guide.details.rating}/5</span>
                      </div>
                    )}
                    
                    {guide.details.highlights && (
                      <div className="highlights">
                        {guide.details.highlights.map((item, i) => (
                          <span key={i} className="highlight-tag">{item}</span>
                        ))}
                      </div>
                    )}
                    
                    {guide.details.mustTry && (
                      <div className="must-try">
                        <strong>Must Try:</strong>
                        <div className="try-items">
                          {guide.details.mustTry.map((item, i) => (
                            <span key={i} className="try-item">{item}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <button className="view-details-btn">
                      View Details <span className="arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hotel Booking Section */}
        <div className="hotel-section">
          <h2 className="section-title">🏨 Hotel Booking Guide</h2>
          <div className="hotel-guide">
            <div className="hotel-tips">
              <div className="tip-card">
                <div className="tip-icon">⭐</div>
                <h3>Star Ratings</h3>
                <ul>
                  <li><strong>5★:</strong> Luxury, all amenities</li>
                  <li><strong>4★:</strong> Comfort, good service</li>
                  <li><strong>3★:</strong> Budget-friendly, clean</li>
                  <li><strong>2★:</strong> Basic, economical</li>
                </ul>
              </div>
              
              <div className="tip-card">
                <div className="tip-icon">💰</div>
                <h3>Price Range</h3>
                <ul>
                  <li><strong>Luxury:</strong> ₹8,000 - ₹40,000+</li>
                  <li><strong>Mid-range:</strong> ₹3,000 - ₹8,000</li>
                  <li><strong>Budget:</strong> ₹1,000 - ₹3,000</li>
                  <li><strong>Hostels:</strong> ₹500 - ₹1,500</li>
                </ul>
              </div>
              
              <div className="tip-card">
                <div className="tip-icon">📱</div>
                <h3>Booking Platforms</h3>
                <div className="platforms">
                  <span className="platform">MakeMyTrip</span>
                  <span className="platform">Booking.com</span>
                  <span className="platform">Agoda</span>
                  <span className="platform">OYO</span>
                  <span className="platform">Airbnb</span>
                </div>
              </div>
            </div>
            
            <div className="hotel-features">
              <h3>Essential Hotel Features</h3>
              <div className="features-grid">
                <div className="feature">
                  <span className="feature-icon">🛏️</span>
                  <span>Comfortable Beds</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🚿</span>
                  <span>24/7 Hot Water</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">📶</span>
                  <span>Free WiFi</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🔒</span>
                  <span>Safe Deposit</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🍽️</span>
                  <span>Breakfast Included</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🚗</span>
                  <span>Parking</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips Section */}
        <div className="tips-section">
          <h2 className="section-title">⚡ Quick Travel Tips</h2>
          <div className="tips-grid">
            {travelTips.map((tip, index) => (
              <div key={index} className="tip-item">
                <span className="tip-icon">{tip.icon}</span>
                <p className="tip-text">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Info */}
        <div className="emergency-section">
          <h2 className="section-title">🚨 Emergency Information</h2>
          <div className="emergency-cards">
            <div className="emergency-card police">
              <div className="emergency-icon">👮</div>
              <h3>Police</h3>
              <div className="emergency-number">100</div>
              <p>For immediate police assistance</p>
            </div>
            <div className="emergency-card ambulance">
              <div className="emergency-icon">🚑</div>
              <h3>Ambulance</h3>
              <div className="emergency-number">102</div>
              <p>Medical emergencies</p>
            </div>
            <div className="emergency-card fire">
              <div className="emergency-icon">🚒</div>
              <h3>Fire</h3>
              <div className="emergency-number">101</div>
              <p>Fire emergencies</p>
            </div>
            <div className="emergency-card tourism">
              <div className="emergency-icon">🏛️</div>
              <h3>Tourism Helpline</h3>
              <div className="emergency-number">1800-11-1363</div>
              <p>24/7 tourism assistance</p>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="download-section">
          <div className="download-content">
            <h2>📲 Download Travel Checklist</h2>
            <p>Get our comprehensive checklist for a worry-free Indian adventure</p>
            <div className="download-btns">
              <button className="download-btn">
                <span className="btn-icon">📄</span>
                PDF Checklist
              </button>
              <button className="download-btn">
                <span className="btn-icon">🗺️</span>
                Offline Maps
              </button>
              <button className="download-btn">
                <span className="btn-icon">📱</span>
                Mobile App
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;