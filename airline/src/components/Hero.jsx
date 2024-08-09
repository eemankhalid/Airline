import React from 'react';


const Hero = ({img,h4,h2,p,btn}) => {
    return (
        <div className="hero-video-container">
            <video className="hero-video" autoPlay loop muted>
                <source src="src/assets/vedio/vd2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>{h4}</h4>
                    <h2 className="display-2 text-capitalize text-white mb-4">{h2}</h2>
                    <p className="mb-5 fs-5">{p}</p>
                    <div className="d-flex align-items-center justify-content-center">
                        {btn}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
