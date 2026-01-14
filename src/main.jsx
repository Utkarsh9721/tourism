import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// ✅ Initialize AOS globally here
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  offset: 100,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
