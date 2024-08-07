import React from 'react';


const Navbar = () => {
    return (
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="/" className="navbar-brand p-0">
                    <h1 className="m-0"><i className="fa fa-map-marker-alt me-3"></i>Travela</h1>
                    {/* <img src="img/logo.png" alt="Logo" /> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Plan</a>
                            <div className="dropdown-menu m-0">
                                <a href="/destination" className="dropdown-item">Book a Flight</a>
                                <a href="/destination" className="dropdown-item">Group Travel Requests</a>
                                <a href="/tour" className="dropdown-item">Charter Flight Requests</a>
                                <a href="/tour" className="dropdown-item">Sky Cafe</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage</a>
                            <div className="dropdown-menu m-0">
                                <a href="/destination" className="dropdown-item">Modify Flight</a>
                                <a href="/tour" className="dropdown-item">Cancel Flight</a>
                                <a href="/booking" className="dropdown-item">Add AirRewards ID</a>
                                <a href="/gallery" className="dropdown-item">Check Flight Status</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Add Extras</a>
                            <div className="dropdown-menu m-0">
                                <a href="/destination" className="dropdown-item">Add Baggage</a>
                                <a href="/tour" className="dropdown-item">Add Seats</a>
                                <a href="/booking" className="dropdown-item">Add Meals</a>
                            </div>
                        </div>
                        <a href="/index" className="nav-item nav-link active">Check-In</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Air Rewards</a>
                            <div className="dropdown-menu m-0">
                                <a href="/destination" className="dropdown-item">Login</a>
                                <a href="/tour" className="dropdown-item">Join Rewards</a>
                            </div>
                        </div>
                        <a href="/index" className="nav-item nav-link active">Blogs</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Help</a>
                            <div className="dropdown-menu m-0">
                                <a href="/destination" className="dropdown-item">FAQs</a>
                                <a href="/tour" className="dropdown-item">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
