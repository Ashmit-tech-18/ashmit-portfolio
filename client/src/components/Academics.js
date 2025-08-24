import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Academics = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const fetchEducation = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/education');
                // Sort data to show latest degree first
                const sortedData = response.data.sort((a, b) => b.year.localeCompare(a.year));
                setEducation(sortedData);
            } catch (error) {
                console.error("Error fetching education data:", error);
            }
        };
        fetchEducation();
    }, []);

    return (
        <div className="card-Academics">
        <section id="academics" className="section">
            <h2 className="section-title">Academics</h2>
            <div className="academics-container">
                {education.map((edu, index) => (
                    <div key={index} className="academic-card">
                        <div className="academic-year" >{edu.year}</div>
                        <div className="academic-details">
                            <h3>{edu.degree}</h3>
                            <p className="institution">{edu.institution}</p>
                            <p className="grade">Grade: {edu.grade}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </div>
    );
};

export default Academics;