import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Research = () => {
    const [research, setResearch] = useState(null);

    useEffect(() => {
        const fetchResearch = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/research');
                if (response.data.length > 0) {
                    setResearch(response.data[0]);
                }
            } catch (error) {
                console.error("Error fetching research:", error);
            }
        };
        fetchResearch();
    }, []);

    if (!research) return null;

    const imageUrl = "/assets/research-image/image1.JPG";

    return (
        <div className="card-research">
            <section id="research" className="section">
                <h2 className="section-title">Publications</h2>
                <div className="blog-card">
                    <img 
                        src={imageUrl} 
                        alt={research.title} 
                        className="blog-image-placeholder" 
                    />
                    <div className="blog-content">
                        <h3>{research.title}</h3>
                        <p>{research.shortIntro}</p>
                        
                        <a href={research.link} target="_blank" rel="noopener noreferrer" className="explore-btn">
                            Explore →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Research;
