import React from 'react';

const About = () => {
    const profilePicPath = "/assets/profile-picture/image1.JPG";

    return (
        <section id="about" className="section about reveal">
            <div className="about-image reveal">
                <img src={profilePicPath} alt="Ashmit Shukla" />
            </div>
            <div className="about-content reveal">
                <h2 className="section-title reveal">About Me</h2>
                <p className="reveal">
                    I'm a full-stack developer with an analyst's mindset. My passion lies in building clean, efficient, and scalable web applications from scratch, primarily using the MERN stack. I enjoy the entire process, from designing a RESTful API with Node.js to creating a dynamic user interface with React.
                </p>
                <p className="reveal">
                    Alongside my development skills, I have a strong foundation in data analytics and machine learning, thanks to my Master's in Data Science & AI. I'm not just interested in writing code; I'm driven to understand the "why" behind the data. Whether it's integrating an AI model into a web app or visualizing data in Power BI, I'm always looking for ways to build smarter, more data-informed products.
                </p>
                <p className="reveal">
                    I'm looking for an opportunity to join a team where I can use my blend of technical and analytical skills to solve challenging problems.
                </p>
            </div>
        </section>
    );
};

export default About;
