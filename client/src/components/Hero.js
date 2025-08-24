import React, { useState, useEffect } from "react";

const Hero = () => {
  const greetings = ["Hello,", "नमस्ते,", "Bonjour,"];
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % greetings.length;
      setCurrentGreeting(greetings[index]);
    }, 2000); // 2 seconds delay
    return () => clearInterval(interval);
  }, []);

  // Scroll to Contact section
  const handleHireMeClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">
          <span className="dot"></span> {currentGreeting}
        </p>
        <h1 className="hero-title">
          I am <span className="highlight">Ashmit Shukla</span>
        </h1>
        <p className="hero-subtext">
          I’m a passionate <strong>full-stack developer</strong> with a knack for
          building elegant, high-performance digital experiences. With experience
          across the MERN stack, I specialize in crafting interactive UIs and scalable
          backend systems.
        </p>
        <p className="hero-subtext">
          Currently, I’m working on projects that blend creativity with technical
          precision to deliver exceptional results.
        </p>

        <button className="Hire-btn " onClick={handleHireMeClick}>
          Hire Me
        </button>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="arrow">&#8595;</div>
      </div>
    </section>
  );
};

export default Hero;
