import React from 'react';
import './App.scss';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Banner />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
