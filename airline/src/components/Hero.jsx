import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
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
    );
};

export default Hero;
