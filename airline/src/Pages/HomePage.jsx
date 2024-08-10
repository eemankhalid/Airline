import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WhereWeFly from '../components/WhereWeFly';
import WingPoints from '../components/WingPoints';
import FlightOptions from '../components/FlightOptions';
import WhyInfinityWings from '../components/WhyInfinityWings';
import Hero from '../components/Hero';

const HomePage = () => {
  const button = <Link className="btn" to="#">Discover More</Link>;
  const video = (
    <video className="hero-video" autoPlay loop muted>
      <source src="src/assets/vedio/vd2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
  const style = { maxWidth: '900px' };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar-light');
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Hero 
        style={style}
        img={video}
        h4="Fly Beyond Limits with Infinity Wings"
        h2="Your Journey, Our Passion" 
        p="At Infinity Wings, we prioritize your comfort and convenience. Enjoy top-notch amenities and exceptional service on every flight. Sign up for WingPoints and unlock exclusive benefits. Let's make your travel dreams a reality."
        btn={button}
      />
      <div style={{ backgroundColor: 'white', minHeight: '100vh', padding: '5px' }}>
        <div style={{ margin: '0 auto', width: '98%' }}>
          <WhereWeFly />
        </div>
        <div style={{ margin: '0 auto', width: '97%' }}>
          <WingPoints />
        </div>
        <div style={{ margin: '0 auto', width: '97%' }}>
          <FlightOptions />
        </div>
        <div style={{ margin: '0 auto', width: '97%' }}>
          <WhyInfinityWings />
        </div>
      </div>
    </>
  );
}

export default HomePage;
