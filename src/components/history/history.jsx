import React from 'react';
import './history.css'; // We'll create this CSS file

// Import images (you'll need to add these images to your project)
// You can use these placeholder URLs or replace with your own images

const History = () => {
  return (
    <div className='history-component'>
      {/* Hero Section */}
      <div className="history-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">History of Indian Tourism 🇮🇳</h1>
          <p className="hero-subtitle">A Journey Through Centuries of Cultural Exchange</p>
        </div>
      </div>

      <div className="history-container">
        {/* Introduction Section */}
        <section className="history-section intro-section">
          <div className="section-content">
            <div className="text-content">
              <h2 className="section-title">The Land of Eternal Journey</h2>
              <p className="section-text">
                India has been a land of travelers since ancient times. The history of Indian tourism is deeply 
                rooted in its rich culture, spirituality, trade, and traditions. From ancient pilgrims to modern 
                international tourists, India has always attracted people from across the world.
              </p>
              <p className="section-text">
                For over 5,000 years, India has welcomed explorers, scholars, traders, and spiritual seekers, 
                creating a tapestry of cultural exchange that continues to this day.
              </p>
            </div>
            <div className="image-content">
              <img 
                src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Ancient Indian Temple"
                className="section-image"
              />
              <div className="image-caption">Ancient Indian Temple Architecture</div>
            </div>
          </div>
        </section>

        {/* Ancient Period Section */}
        <section className="history-section ancient-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">🏛️</span>
              Ancient Period (3000 BCE - 1200 CE)
            </h2>
            <div className="timeline-marker">3000 BCE</div>
          </div>
          
          <div className="section-content reversed">
            <div className="image-content">
              <img 
                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Ancient Indian University"
                className="section-image"
              />
              <div className="image-caption">Ancient Nalanda University Ruins</div>
            </div>
            
            <div className="text-content">
              <h3 className="subsection-title">Birth of Educational & Spiritual Tourism</h3>
              <p className="section-text">
                Tourism in India began thousands of years ago with religious and educational travel. 
                Pilgrims traveled to sacred places like <strong>Varanasi, Haridwar, Ayodhya, Mathura, and Rameswaram</strong>.
              </p>
              
              <div className="highlight-box">
                <h4>🎓 Ancient Learning Centers</h4>
                <p>Renowned universities such as <strong>Takshashila</strong> (6th century BCE) and <strong>Nalanda</strong> (5th century CE) 
                attracted thousands of students and scholars from China, Korea, Central Asia, and Greece.</p>
              </div>
              
              <div className="highlight-box">
                <h4>🚛 Trade Routes</h4>
                <p>Historic routes like the <strong>Silk Route</strong> and <strong>Spice Route</strong> facilitated cultural 
                exchange and travel, connecting India with foreign civilizations across Asia and Europe.</p>
              </div>
              
              <div className="facts-grid">
                <div className="fact-card">
                  <div className="fact-icon">📜</div>
                  <div className="fact-text">Rigveda mentions travel for knowledge</div>
                </div>
                <div className="fact-card">
                  <div className="fact-icon">🛣️</div>
                  <div className="fact-text">Ancient highway system existed</div>
                </div>
                <div className="fact-card">
                  <div className="fact-icon">🕌</div>
                  <div className="fact-text">Pilgrimage sites established</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medieval Period Section */}
        <section className="history-section medieval-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">🏰</span>
              Medieval Period (1200 CE - 1800 CE)
            </h2>
            <div className="timeline-marker">1200 CE</div>
          </div>
          
          <div className="section-content">
            <div className="text-content">
              <h3 className="subsection-title">Era of Architectural Marvels</h3>
              <p className="section-text">
                During the medieval era, tourism was influenced by royalty, religion, and culture. 
                Kings built grand forts, palaces, gardens, and monuments that still attract tourists today.
              </p>
              
              <div className="monuments-grid">
                <div className="monument-card">
                  <div className="monument-image taj-mahal"></div>
                  <div className="monument-info">
                    <h4>Taj Mahal</h4>
                    <p>Built by Shah Jahan (1632-1653)</p>
                  </div>
                </div>
                <div className="monument-card">
                  <div className="kutub"> <div className="img"><img src={"https://images.unsplash.com/photo-1601046988915-693d2f71a89f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHF1dHViJTIwbWluYXIlMjBuZXclMjBkZWxoaXxlbnwwfHwwfHx8MA%3D%3D"} alt="" height={"270px"}width={"auto"}/></div></div>
                  <div className="monument-info">
                    <h4>Qutub Minar</h4>
                    <p>Started in 1193 by Qutb-ud-din Aibak</p>
                  </div>
                </div>
                <div className="monument-card">
                  <div className="red-fort"><img src={"https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D"} alt=""  height={"270px"}/></div>
                  <div className="monument-info">
                    <h4>Red Fort</h4>
                    <p>Constructed by Shah Jahan (1639-1648)</p>
                  </div>
                </div>
                <div className="monument-card">
                  <div className="atehpur-sikri"><img src={"https://plus.unsplash.com/premium_photo-1697730300605-8f099d0f36e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmF0ZWhwdXIlMjBTaWtyaXxlbnwwfHwwfHx8MA%3D%3D"} alt="" height={"270px"}/></div>
                  <div className="monument-info">
                    <h4>Fatehpur Sikri</h4>
                    <p>Built by Akbar (1571-1585)</p>
                  </div>
                </div>
              </div>
              
              <div className="highlight-box">
                <h4>✈️ Famous Travelers</h4>
                <p>Foreign travelers like <strong>Marco Polo</strong> (13th century), <strong>Ibn Battuta</strong> (14th century), 
                and <strong>Xuanzang</strong> (7th century) documented India's culture, lifestyle, and wealth in their travelogues.</p>
              </div>
              
              <p className="section-text">
                Religious travel expanded with visits to Sufi shrines, temples, mosques, and monasteries, 
                creating a unique blend of spiritual tourism that continues today.
              </p>
            </div>
            
            <div className="image-content">
              <img 
                src="https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Medieval Indian Architecture"
                className="section-image"
              />
              <div className="image-caption">Medieval Indian Fort Architecture</div>
            </div>
          </div>
        </section>

        {/* Colonial Period Section */}
        <section className="history-section colonial-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">⚓</span>
              Colonial Period (1800 CE - 1947 CE)
            </h2>
            <div className="timeline-marker">1800 CE</div>
          </div>
          
          <div className="section-content reversed">
            <div className="image-content">
              <img 
                src="https://images.unsplash.com/photo-1593693399746-4d8ccd0b8e33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Colonial India"
                className="section-image"
              />
              <div className="image-caption">British Colonial Architecture in India</div>
            </div>
            
            <div className="text-content">
              <h3 className="subsection-title">The British Influence</h3>
              <p className="section-text">
                The British colonial period introduced new forms of tourism, including:
              </p>
              
              <ul className="feature-list">
                <li>
                  <span className="list-icon">🏔️</span>
                  <strong>Hill Stations:</strong> Shimla, Darjeeling, Ooty were developed as summer retreats
                </li>
                <li>
                  <span className="list-icon">🚂</span>
                  <strong>Railway Network:</strong> Extensive train routes made travel accessible
                </li>
                <li>
                  <span className="list-icon">🏨</span>
                  <strong>Heritage Hotels:</strong> Palaces converted into luxury accommodations
                </li>
                <li>
                  <span className="list-icon">🦁</span>
                  <strong>Wildlife Tourism:</strong> Establishment of national parks and sanctuaries
                </li>
              </ul>
              
              <div className="quote-box">
                <p className="quote-text">
                  "India is the cradle of the human race, the birthplace of human speech, 
                  the mother of history, the grandmother of legend, and the great-grandmother of tradition."
                </p>
                <p className="quote-author">— Mark Twain</p>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Period Section */}
        <section className="history-section modern-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">🚀</span>
              Modern Period (1947 CE - Present)
            </h2>
            <div className="timeline-marker">1947 CE</div>
          </div>
          
          <div className="section-content">
            <div className="text-content">
              <h3 className="subsection-title">Post-Independence Tourism Boom</h3>
              <p className="section-text">
                After independence in 1947, India began promoting tourism as an important economic and cultural sector.
              </p>
              
              <div className="milestones">
                <div className="milestone">
                  <div className="milestone-year">1949</div>
                  <div className="milestone-content">
                    <h4>First Tourism Policy</h4>
                    <p>Tourism recognized as an important economic activity</p>
                  </div>
                </div>
                
                <div className="milestone">
                  <div className="milestone-year">1966</div>
                  <div className="milestone-content">
                    <h4>ITDC Establishment</h4>
                    <p>India Tourism Development Corporation founded</p>
                  </div>
                </div>
                
                <div className="milestone">
                  <div className="milestone-year">2002</div>
                  <div className="milestone-content">
                    <h4>"Incredible India" Campaign</h4>
                    <p>Global marketing campaign showcasing India's diversity</p>
                  </div>
                </div>
                
                <div className="milestone">
                  <div className="milestone-year">2020</div>
                  <div className="milestone-content">
                    <h4>Dekho Apna Desh</h4>
                    <p>Promotion of domestic tourism</p>
                  </div>
                </div>
              </div>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">10.9M</div>
                  <div className="stat-label">Foreign Tourists (2019)</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">2.1B</div>
                  <div className="stat-label">Domestic Visits (2019)</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">40</div>
                  <div className="stat-label">UNESCO Sites</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">$30B</div>
                  <div className="stat-label">Tourism Revenue</div>
                </div>
              </div>
            </div>
            
            <div className="image-content">
              <img 
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern Indian Tourism"
                className="section-image"
              />
              <div className="image-caption">Modern Tourism Infrastructure</div>
            </div>
          </div>
        </section>

        {/* Future Section */}
        <section className="history-section future-section">
          <div className="future-content">
            <h2 className="future-title">The Future of Indian Tourism 🌟</h2>
            <p className="future-text">
              India continues to evolve as a tourism destination, embracing sustainable practices, 
              digital innovation, and experiential travel while preserving its rich heritage.
            </p>
            
            <div className="future-trends">
              <div className="trend-card">
                <div className="trend-icon">🌿</div>
                <h3>Sustainable Tourism</h3>
                <p>Eco-friendly resorts and conservation initiatives</p>
              </div>
              <div className="trend-card">
                <div className="trend-icon">📱</div>
                <h3>Digital Experience</h3>
                <p>Virtual tours and smart tourism solutions</p>
              </div>
              <div className="trend-card">
                <div className="trend-icon">🎭</div>
                <h3>Experiential Travel</h3>
                <p>Cultural immersion and local experiences</p>
              </div>
              <div className="trend-card">
                <div className="trend-icon">🩺</div>
                <h3>Medical Tourism</h3>
                <p>World-class healthcare facilities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="conclusion-section">
          <div className="conclusion-content">
            <h2 className="conclusion-title">A Timeless Journey Continues...</h2>
            <p className="conclusion-text">
              From the ancient pilgrims seeking enlightenment to modern travelers exploring diverse landscapes, 
              India's tourism story is one of continuous evolution, adaptation, and enduring appeal.
            </p>
            <div className="conclusion-quote">
              <p>"India will teach us the tolerance and gentleness of mature mind, 
              understanding spirit and a unifying, pacifying love for all human beings."</p>
              <p className="quote-author">— Will Durant</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;