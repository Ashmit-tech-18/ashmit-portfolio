import React, { useState, useEffect } from 'react';

const ImageSlider = ({ imageFolder }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Define the images based on the folder path with the correct .jpg extension
    const images = [
        `${imageFolder}/image1.jpg`,
        `${imageFolder}/image2.jpg`,
        `${imageFolder}/image3.jpg`
    ];

    useEffect(() => {
        // Set up a timer that runs every 3 seconds
        const interval = setInterval(() => {
            // Move to the next image, looping back to the start if at the end
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // 3000 milliseconds = 3 seconds

        // Clean up the timer when the component is removed from the screen
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="blog-image-placeholder">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Blog slide ${index + 1}`}
                    className={index === currentIndex ? 'slide active' : 'slide'}
                />
            ))}
        </div>
    );
};

export default ImageSlider;
