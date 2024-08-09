import React from 'react';
import WhereWeFly from '../components/WhereWeFly';
import WingPoints from '../components/WingPoints';
import FlightOptions from '../components/FlightOptions';
import WhyInfinityWings from '../components/WhyInfinityWings';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const button = <Link className="btn" to="#">Discover More</Link>;
  return (
    <>
    <Hero 
        img="src/assets/vedio/vd2.mp4" 
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
