import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full relative">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Reviews />
      </main>

      <Footer />
    </div>
  );
}

export default App;
