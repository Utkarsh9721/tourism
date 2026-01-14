import React from 'react';
import Arrow from '../../assets/right.png';
import './home.css';

const Home = () => {
  return (
    <div className='home' id='home'>
      <h1 data-aos="fade-up">
        Your Adventure Awaits – <span className="highlight">Let’s Explore Together!</span>
      </h1>
      <h2 data-aos="fade-up" data-aos-delay="200">
        Discover the India, One Journey at a Time
      </h2>
      <p data-aos="fade-up" data-aos-delay="400">
        Embark on unforgettable adventures with TransXs. From hidden gems to iconic landmarks, we guide you to experiences that ignite your wanderlust. Explore curated travel guides, book seamless trips, and uncover local cultures with insider tips. Whether you seek thrilling adventures, serene escapes, or cultural immersions, your next journey starts here.
      </p>
      <div className="explore" data-aos="zoom-in" data-aos-delay="600">
        <button>
          Explore More <img src={Arrow} alt="arrow" height="30px" />
        </button>
      </div>
    </div>
  );
};

export default Home;
