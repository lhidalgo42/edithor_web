import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Clients from './components/Clients'; // Import the new component
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <AboutUs />
        <Clients /> {/* Add the Clients section here */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
