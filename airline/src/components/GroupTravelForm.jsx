import React from 'react';

const GroupTravelForm = () => {
  return (
    <div id="group-travel-form">
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
            <h5 className="section-title px-3">Book a Flight</h5>
            <h1 className="mb-0">Plan Your Journey</h1>
          </div>
          <form className="group-travel-form">
            <div className="form-row">
              <div className="form-group">
                <label>From Country</label>
                <select name="fromCountry">
                  <option value="">Select a Country</option>
                  {/* Add other options here */}
                </select>
              </div>
              <div className="form-group">
                <label>To Country</label>
                <select name="toCountry">
                  <option value="">Select a Country</option>
                  {/* Add other options here */}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Depart</label>
              <input type="date" name="departureDate" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Adults (1-9)</label>
                <input type="number" name="adults" min="1" max="9" />
              </div>
              <div className="form-group">
                <label>Children (2-12)</label>
                <input type="number" name="children" min="0" max="9" />
              </div>
              <div className="form-group">
                <label>Infants (0-1)</label>
                <input type="number" name="infants" min="0" max="9" />
              </div>
            </div>

            <div className="form-group">
              <label>The name of the group or charter</label>
              <input type="text" name="groupName" />
            </div>

            <div className="form-group">
              <label>What type of group is this?</label>
              <select name="groupType">
                <option value="">None</option>
                {/* Add other options here */}
              </select>
            </div>

            <div className="form-group">
              <label>Passengers</label>
              <input type="number" name="passengers" />
            </div>

            <div className="form-group">
              <label>Flying from</label>
              <input type="text" name="flyingFrom" placeholder="Select your departure airport" />
            </div>

            <div className="form-group">
              <label>To</label>
              <input type="text" name="to" placeholder="Select your destination" />
            </div>

            <div className="form-group">
              <label>Journey type</label>
              <select name="journeyType">
                <option value="">None</option>
                {/* Add other options here */}
              </select>
            </div>

            <div className="form-group">
              <label>Departure date</label>
              <div className="date-group">
                <select name="departureMonth">
                  <option value="">Month</option>
                  {/* Add months here */}
                </select>
                <select name="departureDay">
                  <option value="">Day</option>
                  {/* Add days here */}
                </select>
                <select name="departureYear">
                  <option value="">Year</option>
                  {/* Add years here */}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Time of travel</label>
              <select name="departureTime">
                <option value="">Select</option>
                {/* Add other options here */}
              </select>
            </div>

            <div className="form-group">
              <label>Return date</label>
              <div className="date-group">
                <select name="returnMonth">
                  <option value="">Month</option>
                  {/* Add months here */}
                </select>
                <select name="returnDay">
                  <option value="">Day</option>
                  {/* Add days here */}
                </select>
                <select name="returnYear">
                  <option value="">Year</option>
                  {/* Add years here */}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Time of travel</label>
              <select name="returnTime">
                <option value="">None</option>
                {/* Add other options here */}
              </select>
            </div>

            <div className="form-group">
              <label>Catering and special request</label>
              <textarea name="cateringRequest" placeholder="E.g. allergies, dietary requirements"></textarea>
            </div>

            <div className="form-group">
              <label>Your message</label>
              <textarea name="message" placeholder="Enter your message here"></textarea>
            </div>

            <div className="form-group">
              <label>Your contact information</label>
              <div className="contact-group">
                <select name="title">
                  <option value="">Title</option>
                  {/* Add other titles here */}
                </select>
                <input type="text" name="yourName" placeholder="Your name" />
              </div>
            </div>

            <div className="form-group">
              <label>Your reservation number (Optional)</label>
              <input type="text" name="reservationNumber" />
            </div>

            <div className="form-group">
              <label>E-mail Address</label>
              <input type="email" name="email" />
            </div>

            <div className="form-group">
              <label>Country code</label>
              <input type="text" name="countryCode" />
            </div>

            <div className="form-group">
              <label>Telephone number</label>
              <input type="tel" name="phoneNumber" />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GroupTravelForm;
