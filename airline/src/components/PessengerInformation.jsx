import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PassengerInformation = () => {
  const location = useLocation();
  const { state } = location;

  const passengers = state?.passengers || {};
  const adults = passengers.adults || 1;
  const children = passengers.children || 0;
  const infants = passengers.infants || 0;

  const totalPassengers = adults + children + infants;
  const [activeTab, setActiveTab] = useState(1);
  const [passengerForms, setPassengerForms] = useState(Array(totalPassengers).fill({}));
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isAllPassengersAdded, setIsAllPassengersAdded] = useState(false);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    const updatedForms = [...passengerForms];
    updatedForms[activeTab - 1] = { ...updatedForms[activeTab - 1], [name]: value };
    setPassengerForms(updatedForms);

    // Check if the form is complete
    const currentForm = updatedForms[activeTab - 1];
    const isComplete = currentForm.title && currentForm.firstName && currentForm.lastName && currentForm.nationality;

    setIsFormComplete(isComplete);
  };

  const handleNextPassenger = () => {
    if (activeTab < totalPassengers) {
      setActiveTab((prevTab) => prevTab + 1);
      setIsFormComplete(false); // Reset form completion for the next passenger
    } else {
      // All passengers have been added. Handle submission or next step here.
      console.log('All passengers added:', passengerForms);
      setIsAllPassengersAdded(true);
      // You can perform actions like submitting the form data to the server here.
    }
  };

  const renderFormFields = () => {
    let type = '';
    let count = 0;

    if (activeTab <= adults) {
      type = 'Adult';
      count = activeTab;
    } else if (activeTab <= adults + children) {
      type = 'Child';
      count = activeTab - adults;
    } else {
      type = 'Infant';
      count = activeTab - adults - children;
    }

    const currentFormData = passengerForms[activeTab - 1] || {};

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
            placeholder={`Enter First Name for ${type} ${count}`}
            onChange={handleFieldChange}
            value={currentFormData.firstName || ''}
          />
        </div>
        <div className="form-group">
          <label>Last Name <span className="required">*</span></label>
          <input
            type="text"
            name="lastName"
            placeholder={`Enter Last Name for ${type} ${count}`}
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
    let tabIndex = 1;

    for (let i = 1; i <= adults; i++) {
      tabs.push(
        <div
          key={`adult-${i}`}
          className={`ptab ${activeTab === tabIndex ? 'active' : ''}`}
          onClick={() => setActiveTab(tabIndex)}
        >
          Adult {i}
        </div>
      );
      tabIndex++;
    }

    for (let i = 1; i <= children; i++) {
      tabs.push(
        <div
          key={`child-${i}`}
          className={`ptab ${activeTab === tabIndex ? 'active' : ''}`}
          onClick={() => setActiveTab(tabIndex)}
        >
          Child {i}
        </div>
      );
      tabIndex++;
    }

    for (let i = 1; i <= infants; i++) {
      tabs.push(
        <div
          key={`infant-${i}`}
          className={`ptab ${activeTab === tabIndex ? 'active' : ''}`}
          onClick={() => setActiveTab(tabIndex)}
        >
          Infant {i}
        </div>
      );
      tabIndex++;
    }

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