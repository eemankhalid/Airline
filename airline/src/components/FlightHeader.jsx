import React from "react";
import { Link, useLocation } from "react-router-dom";

const FlightHeader = () => {
    const location = useLocation();

    const isCompleted = (path) => {
        const paths = [
            "/book-a-flight",
            "/select-flight",
            "/enter-details",
            "/add-extras",
            "/pay-confirm"
        ];
        return paths.indexOf(location.pathname) > paths.indexOf(path);
    };

    return (
        <div className="flight-header">
            <Link to="/book-a-flight" className="header-item">
                <i className={`fas fa-check-circle ${isCompleted('/book-a-flight') ? 'completed' : ''}`}></i>
                <span>Search</span>
            </Link>
            <Link to="/select-flight" className="header-item">
                <i className={`fas fa-check-circle ${isCompleted('/select-flight') ? 'completed' : ''}`}></i>
                <span>Select flight</span>
            </Link>
            <Link to="/enter-details" className="header-item">
                <i className={`fas fa-check-circle ${isCompleted('/enter-details') ? 'completed' : ''}`}></i>
                <span>Enter details</span>
            </Link>
            <Link to="/add-extras" className="header-item">
                <i className={`fas fa-check-circle ${isCompleted('/add-extras') ? 'completed' : ''}`}></i>
                <span>Add extras</span>
            </Link>
            <Link to="/pay-confirm" className="header-item">
                <i className={`fas fa-check-circle ${isCompleted('/pay-confirm') ? 'completed' : ''}`}></i>
                <span>Pay and confirm</span>
            </Link>
        </div>
    );
};

export default FlightHeader;
