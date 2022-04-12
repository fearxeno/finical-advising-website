import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Demo from './components/Demo'
import Footer from './components/Footer'



ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <Hero />
    <About />
    <Testimonials />
    <Demo />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


