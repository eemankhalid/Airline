import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <Link to="/" className="navbar-brand p-0">
                    <h1 className="m-0"><i className="fa fa-map-marker-alt me-3"></i>Travela</h1>
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
                                <Link to="/destination" className="dropdown-item">Book a Flight</Link>
                                <Link to="/destination" className="dropdown-item">Group Travel Requests</Link>
                                <Link to="/tour" className="dropdown-item">Charter Flight Requests</Link>
                                <Link to="/tour" className="dropdown-item">Sky Cafe</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/destination" className="dropdown-item">Modify Flight</Link>
                                <Link to="/tour" className="dropdown-item">Cancel Flight</Link>
                                <Link to="/booking" className="dropdown-item">Add AirRewards ID</Link>
                                <Link to="/gallery" className="dropdown-item">Check Flight Status</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Add Extras</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/destination" className="dropdown-item">Add Baggage</Link>
                                <Link to="/tour" className="dropdown-item">Add Seats</Link>
                                <Link to="/booking" className="dropdown-item">Add Meals</Link>
                            </div>
                        </div>
                        <Link to="/index" className="nav-item nav-link active">Check-In</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Air Rewards</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/destination" className="dropdown-item">Login</Link>
                                <Link to="/tour" className="dropdown-item">Join Rewards</Link>
                            </div>
                        </div>
                        <Link to="/index" className="nav-item nav-link active">Blogs</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Help</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/destination" className="dropdown-item">FAQs</Link>
                                <Link to="/tour" className="dropdown-item">Contact Us</Link>
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
                        <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Explore The World</h4>
                        <h1 className="display-2 text-capitalize text-white mb-4">Let's The World Together!</h1>
                        <p className="mb-5 fs-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        <div className="d-flex align-items-center justify-content-center">
                            <Link className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" to="#">Discover Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
