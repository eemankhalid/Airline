import React from 'react';
import WhereWeFly from '../components/WhereWeFly';
import WingPoints from '../components/WingPoints';
import FlightOptions from '../components/FlightOptions';
import WhyInfinityWings from '../components/WhyInfinityWings';

const HomePage = () => {
  return (
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
  );
}

export default HomePage;
