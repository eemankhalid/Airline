import React from 'react';

const Hero = ({ img, h4, h2, p, btn, style }) => {
    return (
        <div className="hero-container" style={{ position: 'relative', minHeight: '500px' }}>
            {img}
            <div className="carousel-caption" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div className="p-3" style={style}>
                    {h4 && <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>{h4}</h4>}
                    {h2 && <h2 className="display-2 text-capitalize text-white mb-4">{h2}</h2>}
                    {p && <p className="mb-5 fs-5">{p}</p>}
                    <div className="d-flex align-items-center justify-content-center">
                        {btn}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
