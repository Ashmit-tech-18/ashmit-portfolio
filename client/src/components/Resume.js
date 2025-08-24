import React from 'react';

const Resume = () => {
    const resumeLink = "https://drive.google.com/file/d/1x1mhycNQzYEUebPa5GR09ubmLy7OCkAl/view?usp=sharing";

    return (
        <div className="card-resume">
        <section id="resume" className="section">
            <div className="resume-card fade-in">
                 <h2 className='resume-title'>My Resume</h2>
                <p style={{ marginBottom: '2rem' }}>
                    Interested in the full details? Check out my resume for a comprehensive look at my skills and experience.
                </p>
                <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="btn">
                    View Resume
                </a>
            </div>
        </section>
        </div>
    );
};

export default Resume;