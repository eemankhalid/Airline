import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PassengerInformation = () => {
  const location = useLocation();
  const { state } = location;

  const passengers = state?.passengers || {};
  const adults = passengers.adults || 1;
  const childs = passengers.childs || 0;

  const [activeTab, setActiveTab] = useState(1);
  const [adultForms, setAdultForms] = useState(Array(adults).fill({}));
  const [childForms, setChildForms] = useState(Array(childs).fill({}));
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isAllPassengersAdded, setIsAllPassengersAdded] = useState(false);
  const [currentSection, setCurrentSection] = useState('adults'); // Track current section (adults or children)

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    let updatedForms;

    if (currentSection === 'adults') {
      updatedForms = [...adultForms];
      updatedForms[activeTab - 1] = { ...updatedForms[activeTab - 1], [name]: value };
      setAdultForms(updatedForms);

      // Check if the form is complete
      const currentForm = updatedForms[activeTab - 1];
      const isComplete = currentForm.title && currentForm.firstName && currentForm.lastName && currentForm.nationality;
      setIsFormComplete(isComplete);
    } else if (currentSection === 'children') {
      updatedForms = [...childForms];
      updatedForms[activeTab - 1] = { ...updatedForms[activeTab - 1], [name]: value };
      setChildForms(updatedForms);

      // Check if the form is complete
      const currentForm = updatedForms[activeTab - 1];
      const isComplete = currentForm.title && currentForm.firstName && currentForm.lastName && currentForm.nationality;
      setIsFormComplete(isComplete);
    }
  };

  const handleNextPassenger = () => {
    if (currentSection === 'adults') {
      if (activeTab < adults) {
        setActiveTab((prevTab) => prevTab + 1);
        setIsFormComplete(false); // Reset form completion for the next passenger
      } else {
        // Switch to children section
        setCurrentSection('children');
        setActiveTab(1);
      }
    } else if (currentSection === 'children') {
      if (activeTab < childs) {
        setActiveTab((prevTab) => prevTab + 1);
        setIsFormComplete(false); // Reset form completion for the next passenger
      } else {
        // All passengers have been added. Handle submission or next step here.
        console.log('All passengers added:', { adults: adultForms, children: childForms });
        setIsAllPassengersAdded(true);
        // You can perform actions like submitting the form data to the server here.
      }
    }
  };

  const renderFormFields = () => {
    const currentFormData = currentSection === 'adults'
      ? adultForms[activeTab - 1] || {}
      : childForms[activeTab - 1] || {};

    return (
      <div className="form-section">
        <div className="form-group">
          <label>Title <span className="required">*</span></label>
          <select
            name="title"
            onChange={handleFieldChange}
            value={currentFormData.title || ''}
          >
            <option value="">Select Title</option>
            <option value="Mr">Mr.</option>
            <option value="Miss">Miss</option>
            <option value="Mrs">Mrs.</option>
            <option value="Dr">Dr.</option>
          </select>
        </div>
        <div className="form-group">
          <label>First Name <span className="required">*</span></label>
          <input
            type="text"
            name="firstName"
            placeholder={`Enter First Name for ${currentSection === 'adults' ? `Adult ${activeTab}` : `Child ${activeTab}`}`}
            onChange={handleFieldChange}
            value={currentFormData.firstName || ''}
          />
        </div>
        <div className="form-group">
          <label>Last Name <span className="required">*</span></label>
          <input
            type="text"
            name="lastName"
            placeholder={`Enter Last Name for ${currentSection === 'adults' ? `Adult ${activeTab}` : `Child ${activeTab}`}`}
            onChange={handleFieldChange}
            value={currentFormData.lastName || ''}
          />
        </div>
        <div className="form-group">
          <label>Nationality <span className="required">*</span></label>
          <select
            name="nationality"
            onChange={handleFieldChange}
            value={currentFormData.nationality || ''}
          >
            <option value="">Please Select Nationality</option>
            <option value="Pakistan">Pakistan</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            onChange={handleFieldChange}
            value={currentFormData.dob || ''}
          />
        </div>
        <div className="form-group">
          <label>Do you have AirRewards ID?</label>
          <div className="radio-group" onChange={handleFieldChange}>
            <label>
              <input
                type="radio"
                name="airrewards"
                value="yes"
                checked={currentFormData.airrewards === 'yes'}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="airrewards"
                value="no"
                checked={currentFormData.airrewards === 'no'}
              />{' '}
              No
            </label>
          </div>
        </div>
      </div>
    );
  };

  const generateTabs = () => {
    const tabs = [];
    if (currentSection === 'adults') {
      for (let i = 1; i <= adults; i++) {
        tabs.push(
          <div
            key={`adult-${i}`}
            className={`ptab ${activeTab === i ? 'active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            Adult {i}
          </div>
        );
      }
    } else if (currentSection === 'children') {
      for (let i = 1; i <= childs; i++) {
        tabs.push(
          <div
            key={`child-${i}`}
            className={`ptab ${activeTab === i ? 'active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            Child {i}
          </div>
        );
      }
    }
    console.log('Tabs:', tabs); // Debugging line to check tabs being generated
    return tabs;
  };

  return (
    <div className="passenger-info">
      <h2>Enter Passenger Details</h2>
      <h3>Passenger Information</h3>
      <div className="passenger-tabs">
        {generateTabs()}
      </div>
      {renderFormFields()}
      <button
        className="next-passenger"
        onClick={handleNextPassenger}
        disabled={isAllPassengersAdded || !isFormComplete}
      >
        {isAllPassengersAdded ? 'All Passengers Added' : 'Next Passenger'}
      </button>
    </div>
  );
};

export default PassengerInformation;
