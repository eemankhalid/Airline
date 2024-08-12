import React, { useRef } from "react";


const DateCarousel = ({ dates, selectedDate, onDateSelect }) => {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const { scrollLeft, clientWidth } = carouselRef.current;
            const scrollAmount = direction === 'prev' 
                ? Math.max(scrollLeft - clientWidth / 4, 0) 
                : scrollLeft + clientWidth / 4;

            console.log(`Scrolling ${direction}, Amount: ${scrollAmount}`); // Debugging
            carouselRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="carousel-container">
            
            <div className="date-carousel-wrapper" ref={carouselRef}>
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
            </div>
            
        </div>
    );
};

export default DateCarousel;
