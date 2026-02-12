import React from 'react';
import './App.css';
import ParticleField from './components/ParticleField';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      {/* Background Layer */}
      <ParticleField />

      {/* Navigation */}
      <Navbar />

      {/* Scrollable Content Container */}
      <main className="content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global CSS for additional animations and fixes */}
      <style>{`
        /* Smooth reveal transitions */
        .content section {
          overflow: hidden;
        }

        /* Hero scroll indicator animation */
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }

        /* Glassmorphism hover enhancement */
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--accent-primary);
        }

        /* Responsive spacing fixes */
        @media (max-width: 768px) {
          .section {
            padding: 80px 0;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
