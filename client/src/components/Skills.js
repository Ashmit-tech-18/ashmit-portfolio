import React, { useState, useEffect } from "react";
import axios from "axios";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/skills");
        setSkills(res.data || []);
      } catch (err) {
        console.error("Error fetching skills:", err);
      }
    };
    fetchSkills();
  }, []);

  // Group skills by category
  const grouped = skills.reduce((acc, skill) => {
    acc[skill.category] = [...(acc[skill.category] || []), skill];
    return acc;
  }, {});

  // Generate logo path from skill name
  const getLogoPath = (skillName) => {
    // Remove spaces, dots, and special chars for file name
    const fileName = skillName
      .toLowerCase()
      .replace(/\s+/g, "") // remove spaces
      .replace(/\(.*\)/g, "") // remove text inside brackets
      .replace(/\./g, "") // remove dots
      + ".png";

    return `${process.env.PUBLIC_URL}/assets/skill-logos/${fileName}`;
  };

  return (
    <div className="card-skills">
    <section id="skills" className="section">
      <h2 className="section-title">My Toolkit</h2>
      
      <div className="skill-categories">
        {Object.entries(grouped).map(([category, list]) => (
          <div key={category} className="skill-category">
            <h3 className="skill-category-title">{category}</h3>
            <div className="skill-floating-grid">
              {list.map((skill) => (
                <div
                  key={skill._id}
                  className="skill-bubble"
                  style={{
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${5 + Math.random() * 3}s`,
                  }}
                >
                  <img
                    src={getLogoPath(skill.name)}
                    alt={skill.name}
                    className="skill-bubble-logo"
                    onError={(e) =>
                      (e.currentTarget.src = `${process.env.PUBLIC_URL}/assets/skill-logos/placeholder.png`)
                    }
                  />
                  <span className="skill-bubble-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
    </section>
    </div>
  );
};

export default Skills;
