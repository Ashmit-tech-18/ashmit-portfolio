import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    useEffect(() => {
        const updateTrailPosition = () => {
            setTrailPosition(prev => ({
                x: prev.x + (position.x - prev.x) / 5,
                y: prev.y + (position.y - prev.y) / 5,
            }));
        };

        const animationFrame = requestAnimationFrame(updateTrailPosition);

        return () => cancelAnimationFrame(animationFrame);
    }, [position]);
    
    useEffect(() => {
        const handleMouseOver = () => setIsHovering(true);
        const handleMouseOut = () => setIsHovering(false);

        document.querySelectorAll('a, button, input, textarea, .project-card, .certificate-card, .blog-card').forEach(el => {
            el.addEventListener('mouseover', handleMouseOver);
            el.addEventListener('mouseout', handleMouseOut);
        });

        return () => {
            document.querySelectorAll('a, button, input, textarea, .project-card, .certificate-card, .blog-card').forEach(el => {
                el.removeEventListener('mouseover', handleMouseOver);
                el.removeEventListener('mouseout', handleMouseOut);
            });
        };
    }, []);

    return (
        <>
            <div className="cursor-trail" style={{ left: `${trailPosition.x}px`, top: `${trailPosition.y}px` }}></div>
            <div className={`custom-cursor ${isHovering ? 'grow' : ''}`} style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
        </>
    );
};

export default CustomCursor;