import React from 'react';
import GroupTravelRequirements from '../components/GroupTravelRequirements';
import GroupTravelBenefits from '../components/GroupTravelBenefits';
import GroupTravelForm from '../components/GroupTravelForm';
import Hero2 from '../components/Hero2';
import gtImage from '../assets/gt.jpeg'; // Import the image

const GroupTravelRequestPage = () => {
  return (
    <>
      <Hero2 
        pageName="Group Travel" 
        image={gtImage} // Use the imported image
      />
      <GroupTravelRequirements />
      <GroupTravelBenefits />
      <GroupTravelForm />
    </>
  );
};

export default GroupTravelRequestPage;
