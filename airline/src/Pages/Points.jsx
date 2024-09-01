import React from 'react';
import '../css/Points.css';

const WingPointsPage = () => {
    return (
        <div className="wingpoints-container">
            <div className="sidebars">
                <div className="user-info">
                    <h2>Amna Ahad</h2>
                    <p>13,87,737 WingPoints</p>
                    <p>Gold Member</p>
                    <p>Tier Valid up to 30th Dec 2024</p>
                </div>
                <ul className="nav-links">
                    <li>My Profile</li>
                    <li className="active">My Account</li>
                    <li>My Bookings</li>
                    <li>Child Enrollment</li>
                    <li>My Family +</li>
                    <li>Business Rewards +</li>
                    <li>Print/Request Card</li>
                    <li>Log out</li>
                </ul>
            </div>
            <div className="main-content">
                <h2>My Account</h2>
                <div className="points-section">
                    <div className="points-card">
                        <h3>Total WingPoints</h3>
                        <p>13,87,737</p>
                    </div>
                    <div className="points-card">
                        <h3>Eligible WingPoints</h3>
                        <p>5000</p>
                    </div>
                </div>
                <div className="membership-card">
                    <h3>Gold Membership</h3>
                    <p>Expires on - 30 Dec 2020</p>
                    <div className="progress-bar">
                        <span>5000 Earned out of 80000</span>
                        <div className="progress"></div>
                    </div>
                    <p>Upgrade to Platinum Membership by earning 80000 more WingPoints</p>
                </div>
                <div className="activities">
                    <h3>My Activities</h3>
                    <div className="activity">
                        <h4>18,700 WingPoints Earned</h4>
                        <p>Based on your activity in the last 12 months</p>
                        <ul>
                            <li>Flights: 32 - 1000 WingPoints</li>
                            <li>Cards: 13 - 200 WingPoints</li>
                            <li>Hotel: 13 - 600 WingPoints</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WingPointsPage;
