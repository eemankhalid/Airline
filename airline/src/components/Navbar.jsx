import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/sample.png';  // Import the logo image

const Navbar = () => {
    const location = useLocation();
    return (
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <Link to="/" className="navbar-brand p-0">
                    <img src={logo} alt="Travela Logo" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <div className="nav-item dropdown">
                            <Link to="/plan" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Plan</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/book-a-flight" className="dropdown-item">Book a Flight</Link>
                                <Link to="/group-travel-request" className="dropdown-item">Group Travel Requests</Link>
                                <Link to="/charter-flight-requests" className="dropdown-item">Charter Flight Requests</Link>
                                <Link to="/sky-cafe" className="dropdown-item">Sky Cafe</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="/Manage" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/modify-flight" className="dropdown-item">Modify Flight</Link>
                                <Link to="/cancel-flight" className="dropdown-item">Cancel Flight</Link>
                                <Link to="/add-wing-points-id" className="dropdown-item">Add WingPoints ID</Link>
                                <Link to="/check-flight-status" className="dropdown-item">Check Flight Status</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="/Add Extras" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Add Extras</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/Add Extras#baggage" className="dropdown-item">Add Baggage</Link>
                                <Link to="/Add Extras#seats" className="dropdown-item">Add Seats</Link>
                                <Link to="/Add Extras#meals" className="dropdown-item">Add Meals</Link>
                            </div>
                        </div>
                        <Link to="/Check-In" className="nav-item nav-link active">Check-In</Link>
                        <div className="nav-item dropdown">
                            <Link to="/Air Rewards" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Wing Points</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/wing-points-login" className="dropdown-item">Login</Link>
                                <Link to="/join-wing-points" className="dropdown-item">Join WingPoints</Link>
                            </div>
                        </div>
                        <Link to="/blog" className="nav-item nav-link active">Blogs</Link>
                        <div className="nav-item dropdown">
                            <Link to="/Help" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Help</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/faqs" className="dropdown-item">FAQs</Link>
                                <Link to="/contact-us" className="dropdown-item">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="hero-video-container">
                <video className="hero-video" autoPlay loop muted>
                    <source src="src/assets/vedio/vd2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="carousel-caption">
                    <div className="p-3" style={{ maxWidth: '900px' }}>
                        <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Fly Beyond Limits with Infinity Wings</h4>
                        <h2 className="display-2 text-capitalize text-white mb-4">Your Journey, Our Passion</h2>
                        <p className="mb-5 fs-5">
                        At Infinity Wings, we prioritize your comfort and convenience. Enjoy top-notch amenities and exceptional service on every flight. Sign up for WingPoints and unlock exclusive benefits. Let's make your travel dreams a reality.</p>
                        <div className="d-flex align-items-center justify-content-center">
                        <Link className="btn" to="#">Discover More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
