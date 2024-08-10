import React, { useState } from "react";

const DateCarousel = ({ dates, selectedDate, onDateSelect }) => {
    return (
        <div className="date-carousel">
            {dates.map((date) => (
                <div
                    key={date.day}
                    className={`date-item ${selectedDate === date.day ? "selected" : ""}`}
                    onClick={() => onDateSelect(date.day)}
                >
                    <div className="date-day">{date.day}</div>
                    <div className="date-date">{date.date}</div>
                    <div className="date-price">{date.price}</div>
                </div>
            ))}
        </div>
    );
};

export default DateCarousel;
