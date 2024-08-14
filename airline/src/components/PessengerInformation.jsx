import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


const PassengerInformation = () => {
  const location = useLocation();
  const { adults = 1, children = 0, infants = 0 } = location.state || {};

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(1);

  // Generate tabs based on the number of adults, children, and infants
  const generateTabs = () => {
    const tabs = [];

    // Generate tabs for adults
    for (let i = 1; i <= adults; i++) {
      tabs.push(
        <div
          key={`adult-${i}`}
          className={`tab ${activeTab === i ? 'active' : ''}`}
          onClick={() => setActiveTab(i)}
        >
          Adult {i}
        </div>
      );
    }

    // Generate tabs for children
    for (let i = 1; i <= children; i++) {
      tabs.push(
        <div
          key={`child-${i}`}
          className={`tab ${activeTab === i + adults ? 'active' : ''}`}
          onClick={() => setActiveTab(i + adults)}
        >
          Child {i}
        </div>
      );
    }

    // Generate tabs for infants
    for (let i = 1; i <= infants; i++) {
      tabs.push(
        <div
          key={`infant-${i}`}
          className={`tab ${activeTab === i + adults + children ? 'active' : ''}`}
          onClick={() => setActiveTab(i + adults + children)}
        >
          Infant {i}
        </div>
      );
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
      <div className="form-section">
        <div className="form-group">
          <label>Title <span className="required">*</span></label>
          <select>
            <option value="">Select Title</option>
            <option value="Mr">Mr.</option>
            <option value="Miss">Miss</option>
            <option value="Mrs">Mrs.</option>
            <option value="Dr">Dr.</option>
          </select>
        </div>
        <div className="form-group">
          <label>First Name <span className="required">*</span></label>
          <input type="text" placeholder="Enter First Name" />
        </div>
        <div className="form-group">
          <label>Last Name <span className="required">*</span></label>
          <input type="text" placeholder="Enter Last Name" />
        </div>
        <div className="form-group">
          <label>Nationality <span className="required">*</span></label>
          <select>
        
            <option value="">Please Select Nationality</option>
    <option value="Pakistan">Pakistan</option>
    <option value="United States">United States</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="Canada">Canada</option>
    <option value="Australia">Australia</option>
    <option value="India">India</option>
    <option value="Germany">Germany</option>
    <option value="France">France</option>
    <option value="China">China</option>
    <option value="Japan">Japan</option>
    <option value="South Korea">South Korea</option>
    <option value="Brazil">Brazil</option>
    <option value="South Africa">South Africa</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Mexico">Mexico</option>
    <option value="Italy">Italy</option>
    <option value="Spain">Spain</option>
    <option value="Russia">Russia</option>
    <option value="Turkey">Turkey</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="United Arab Emirates">United Arab Emirates</option>
    <option value="Egypt">Egypt</option>
    <option value="Argentina">Argentina</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Singapore">Singapore</option>
    <option value="Philippines">Philippines</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Thailand">Thailand</option>
    <option value="Vietnam">Vietnam</option>
    <option value="Netherlands">Netherlands</option>
    <option value="Sweden">Sweden</option>
    <option value="Norway">Norway</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Denmark">Denmark</option>
    <option value="Greece">Greece</option>
    <option value="Portugal">Portugal</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Ireland">Ireland</option>
    <option value="Austria">Austria</option>
    <option value="Belgium">Belgium</option>
    <option value="Finland">Finland</option>
    <option value="Iceland">Iceland</option>
    <option value="Brazil">Brazil</option>
    <option value="Colombia">Colombia</option>
    <option value="Chile">Chile</option>
    <option value="Peru">Peru</option>
    <option value="Venezuela">Venezuela</option>
    <option value="Cuba">Cuba</option>
    <option value="Jamaica">Jamaica</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Do you have AirRewards ID?</label>
          <div className="radio-group">
            <label><input type="radio" name="airrewards" /> Yes</label>
            <label><input type="radio" name="airrewards" /> No</label>
          </div>
        </div>
      </div>
      <button className="next-passenger">Next Passenger</button>
    </div>
  );
};

export default PassengerInformation;
