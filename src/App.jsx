import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home';
import Travels from './components/travels/travels';
import Guides from './components/guides/guides';
import About from './components/about/about';
import Contact from './components/contact/contact';
import TourismMap from './components/find/find';
import Book from './components/book/book'
import History from './components/history/history';
import './App.css';


const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travels" element={<Travels />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/about" element={<About />} />
          <Route path='/history' element={<History/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/find" element={<TourismMap />} />
          <Route path="/book" element={<Book/>}/>
        </Routes>
      </main>
    </Router>
  );
};

export default App;