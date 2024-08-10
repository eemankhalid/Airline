import React from 'react';
import GroupTravelRequirements from '../components/GroupTravelRequirements';
import GroupTravelBenefits from '../components/GroupTravelBenefits';
import GroupTravelForm from '../components/GroupTravelForm';
import Hero from '../components/Hero'; // Import the Hero component

const GroupTravelRequestPage = () => {
  const button = <a className="btn btn-primary" href="#group-form">Request a Group Flight</a>; // Example button
  const style = { maxWidth: '500px' }; // This style is applied to the caption text

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
        img={image} // Pass the image as a prop
        h2="Group Travel"  // Example h2 heading
        btn={button}
        style={style} // Apply style to the caption text
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
