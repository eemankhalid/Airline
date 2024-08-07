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
                                <Link to="/add-air-rewards-id" className="dropdown-item">Add AirRewards ID</Link>
                                <Link to="/check-flight-status" className="dropdown-item">Check Flight Status</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="/Add Extras" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Add Extras</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/add-baggage" className="dropdown-item">Add Baggage</Link>
                                <Link to="/add-seats" className="dropdown-item">Add Seats</Link>
                                <Link to="/add-meals" className="dropdown-item">Add Meals</Link>
                            </div>
                        </div>
                        <Link to="/Check-In" className="nav-item nav-link active">Check-In</Link>
                        <div className="nav-item dropdown">
                            <Link to="/Air Rewards" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Air Rewards</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/air-rewards-login" className="dropdown-item">Login</Link>
                                <Link to="/join-air-rewards" className="dropdown-item">Join Rewards</Link>
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
            <div className="carousel-header">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="img/carousel-2.jpg" className="img-fluid" alt="Image" />
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
                        <div className="carousel-item">
                            <img src="img/carousel-1.jpg" className="img-fluid" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Explore The World</h4>
                                    <h1 className="display-2 text-capitalize text-white mb-4">Find Your Perfect Tour At Travel</h1>
                                    <p className="mb-5 fs-5">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Link className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" to="#">Discover Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="img/carousel-3.jpg" className="img-fluid" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Explore The World</h4>
                                    <h1 className="display-2 text-capitalize text-white mb-4">You Like To Go?</h1>
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
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon btn bg-primary" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon btn bg-primary" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
