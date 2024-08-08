import React from 'react';


const WhyInfinityWings = () => {
    return (
        <div className="why-infinity-wings-container">
            <h2>Why Infinity Wings?</h2>
            <div className="why-infinity-wings">
                <div className="feature">
                    <div className="feature-img-container">
                        <img src="/src/assets/img/wimg1.jpeg" alt="Feature 1" />
                    </div>
                    <div className="feature-text-container">
                        <h5>Luxurious Lounge</h5>
                        <p><br/>Relax in our exclusive lounges and enjoy a luxurious start to your journey with Infinity Wings.<br/><br/></p>
                        <a href='#'>Explore our lounges</a>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-img-container">
                        <img src="/src/assets/img/wimg1.jpeg" alt="Feature 2" />
                    </div>
                    <div className="feature-text-container">
                    <h5>Stay Connected in the Sky</h5>
                        <p><br/>Enjoy high-speed Wi-Fi at 40,000 feet with Infinity Wings. Stay connected for work or leisure.<br/><br/></p>
                        <a href='#'>Learn more</a>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-img-container">
                        <img src="/src/assets/img/wimg1.jpeg" alt="Feature 3" />
                    </div>
                    <div className="feature-text-container">
                    <h5>Premium Seating Experience</h5>
                        <p><br/>Enjoy spacious seats with ample legroom and lie-flat options for a restful flight with Infinity Wings.<br/><br/></p>
                        <a href='#'>Choose your seats</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyInfinityWings;
