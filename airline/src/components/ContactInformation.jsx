import React from 'react';


const ContactInformation = () => {
  return (
    <div className="contact-info">
      <br></br>
      <h3>Contact Information</h3>
      <div className="checkbox-group">
        <label>
          <input type="checkbox" checked readOnly />
          Adult 1 will be the contact person for this journey. The entered last name will be necessary for cancellation and modification.
        </label>
      </div>
      <div className="form-section">
        <div className="form-group">
          <label>Country of Residence <span className="required">*</span></label>
          <input type="text" placeholder="Please Enter Country" />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter Email Address" />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <div className="mobile-group">
            <input type="text" placeholder="Country Code" />
            <input type="text" placeholder="Phone" />
          </div>
        </div>
        <div className="form-group">
          <label>Mobile During Travel</label>
          <div className="mobile-group">
            <input type="text" placeholder="Country Code" />
            <input type="text" placeholder="Phone" />
          </div>
        </div>
      </div>
      <div className="checkbox-group">
        <label>
          <input type="checkbox" />
          I will keep the same mobile number during travel.
        </label>
        <label>
          <input type="checkbox"  />
          As a Infinity Wing passenger, we'll send you updates about our special offers, holidays, and inspiring news on flights and travel products. You may uncheck here if you choose not to receive these exciting updates.
        </label>
        <label>
          <input type="checkbox" />
          I would like to join <span className="rewards-highlight">WingPoints</span>, Infinity Wing's loyalty program.
        </label>
      </div>
      <button className="continue-btn">Continue to Extras</button>
    </div>
  );
}

export default ContactInformation;
