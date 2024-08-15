import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero2 from '../components/Hero2';
import img2 from '../assets/img/jwp.jpeg';

const JoinPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    nationality: '',
    country: '',
    mobile: '',
    dob: '',
    passport: '',
    preferredLanguage: 'English',
    referringMemberEmail: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [userId, setUserId] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validate());
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.firstName) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!formData.nationality) {
      newErrors.nationality = 'Nationality is required';
    }

    if (!formData.country) {
      newErrors.country = 'Country of Residence is required';
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10,15}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number is invalid';
    }

    if (!formData.dob) {
      newErrors.dob = 'Date of Birth is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const generatedUserId = `WING-${Math.floor(Math.random() * 1000000)}`;
      setUserId(generatedUserId);
      setSubmitted(true);

      navigate('/join-wp', { state: { userId: generatedUserId } });
    } else {
      console.log('Form data is invalid.');
    }
  };

  return (
    <>
      <Hero2 pageName="JOIN WINGPOINTS" image={img2} />

      <div className="join-page">
        {submitted ? (
          <div className="congratulations-message">
            <div className="black-box">
              <h1>Congratulations!</h1>
              <p>You are now a part of our WingPoints program.</p>
              <p>Your user ID is: <strong>{userId}</strong></p>
              <p>Use this ID to log in to our website and enjoy exclusive benefits!</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h1>Join Now</h1>
            <p>Please fill in the details below to complete your registration</p>

            <div className="section">
              <h2>Login Information</h2>
              <label>
                Email <span className="required">*</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>
              <label>
                Password <span className="required">*</span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </label>
              <label>
                Confirm Password <span className="required">*</span>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
              </label>
            </div>

            <div className="section">
              <h2>Contact Information</h2>
              <label>
                First Name <span className="required">*</span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
              </label>
              <label>
                Last Name <span className="required">*</span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
              </label>
              <label>
                Nationality <span className="required">*</span>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                />
                {errors.nationality && <span className="error">{errors.nationality}</span>}
              </label>
              <label>
                Country of Residence <span className="required">*</span>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  {/* Add more options here */}
                </select>
                {errors.country && <span className="error">{errors.country}</span>}
              </label>
              <label>
                Mobile <span className="required">*</span>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                {errors.mobile && <span className="error">{errors.mobile}</span>}
              </label>
              <label>
                Date of Birth <span className="required">*</span>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
                {errors.dob && <span className="error">{errors.dob}</span>}
              </label>
            </div>

            <div className="section">
              <h2>Additional Information</h2>
              <label>
                Passport
                <input
                  type="text"
                  name="passport"
                  value={formData.passport}
                  onChange={handleChange}
                />
              </label>
              <label>
                Preferred Language
                <input
                  type="text"
                  name="preferredLanguage"
                  value={formData.preferredLanguage}
                  onChange={handleChange}
                />
              </label>
              <label>
                Referring Member Email
                <input
                  type="email"
                  name="referringMemberEmail"
                  value={formData.referringMemberEmail}
                  onChange={handleChange}
                />
              </label>
            </div>

            <button type="submit" disabled={!isFormValid}>Join Now</button>
          </form>
        )}

        <div className="air-rewards">
          <h2>WING POINTS</h2>
          <p>Enjoy exclusive benefits as a member of our AirRewards program:</p>
          <ul>
            <li>Earn points with every flight</li>
            <li>Redeem points for discounts and upgrades</li>
            <li>Access to exclusive deals and offers</li>
            <li>Priority boarding and more</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default JoinPage;
