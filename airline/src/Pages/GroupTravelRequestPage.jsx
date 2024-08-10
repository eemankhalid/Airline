import React from 'react';
import GroupTravelRequirements from '../components/GroupTravelRequirements';
import GroupTravelBenefits from '../components/GroupTravelBenefits';
import GroupTravelForm from '../components/GroupTravelForm';
import Hero from '../components/Hero';

const GroupTravelRequestPage = () => {
  const button = <a className="btn btn-primary" href="#group-form">Request a Group Flight</a>;
  const style = { maxWidth: '500px' };

  const image = (
    <img 
      src="src/assets/img/gt.jpg" 
      alt="Group Travel" 
      className="hero-image" 
      style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
    />
  );

  return (
    <>
      <Hero 
        img={image}
        h2="Group Travel"
        btn={button}
        style={style}
      />
      <div>
        <GroupTravelRequirements />
        <GroupTravelBenefits />
        <GroupTravelForm />
      </div>
    </>
  );
};

export default GroupTravelRequestPage;
