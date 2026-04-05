import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Play, Info, Plus, Search, Bell } from 'lucide-react';
import { GlimpseEngine } from '@glimpse/engine';

const HERO_VIDEO = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      // Initialize Glimpse Engine
      const engine = new GlimpseEngine({ apiKey: 'DEMO_KEY' });
      engine.attach(videoRef.current);
    }
  }, []);

  return (
    <div className="app">
      <nav className={`nav ${scrolled ? 'nav--black' : ''}`}>
        <div className="nav__left">
          <h1 className="logo">GLIMPSE</h1>
          <ul className="nav__links">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
          </ul>
        </div>
        <div className="nav__right">
          <Search className="icon" />
          <Bell className="icon" />
          <div className="avatar">F</div>
        </div>
      </nav>

      <header className="hero">
        <video 
          ref={videoRef}
          className="hero__video"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
        />
        <div className="hero__overlay">
          <div className="hero__info">
            <h2 className="hero__title">Big Buck Bunny</h2>
            <p className="hero__description">
              Experience the future of interactive video. This cinematic production 
              showcases the integration of the Glimpse Engine within a premium streaming environment.
            </p>
            <div className="hero__buttons">
              <button className="btn btn--white"><Play /> Play</button>
              <button className="btn btn--gray"><Info /> More Info</button>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="row">
          <h3 className="row__title">Trending Now</h3>
          <div className="row__posters">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="poster poster--large" />
            ))}
          </div>
        </section>
        
        <section className="row">
          <h3 className="row__title">Interactive Meta-Layers</h3>
          <div className="row__posters">
            <div className="poster poster--brand">
              <span className="brand-badge">Premium Asset</span>
              <p>Dynamic Content x Glimpse</p>
            </div>
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="poster" />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
