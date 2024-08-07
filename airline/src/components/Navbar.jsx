import React from 'react';


const Navbar = () => {
    return (
        <>
            {/* Navbar & Hero Start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href="#" className="navbar-brand p-0">
                        <h1 className="m-0"><i className="fa fa-map-marker-alt me-3"></i>Travela</h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="services.html" className="nav-item nav-link">Services</a>
                            <a href="packages.html" className="nav-item nav-link">Packages</a>
                            <a href="blog.html" className="nav-item nav-link">Blog</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <a href="destination.html" className="dropdown-item">Destination</a>
                                    <a href="tour.html" className="dropdown-item">Explore Tour</a>
                                    <a href="booking.html" className="dropdown-item">Travel Booking</a>
                                    <a href="gallery.html" className="dropdown-item">Our Gallery</a>
                                    <a href="guides.html" className="dropdown-item">Travel Guides</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <a href="#" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
                    </div>
                </nav>

                {/* Carousel Start */}
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
                                            <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
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
                                            <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
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
                                            <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon btn bg-primary" aria-hidden="false"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                            <span className="carousel-control-next-icon btn bg-primary" aria-hidden="false"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* Carousel End */}
            </div>
            <div className="container-fluid search-bar position-relative" style={{ top: '-50%', transform: 'translateY(-50%)' }}>
                <div className="container">
                    <div className="position-relative rounded-pill w-100 mx-auto p-5" style={{ background: 'rgba(19, 53, 123, 0.8)' }}>
                        <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" />
                        <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2" style={{ top: '50%', right: '46px', transform: 'translateY(-50%)' }}>Search</button>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Navbar;
