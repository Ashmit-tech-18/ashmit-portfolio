// src/components/Projects.js
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

/*
Helper: decide folder by project title/slug
 */
const folderFor = (project) => {
  const t = (project?.slug || project?.title || '').toLowerCase();
  if (t.includes('spotify')) return 'spotify-clone-images';
  if (t.includes('olympics')) return 'olympics-dashboard-images';
  if (t.includes('simon')) return 'simon-images';
  return 'portfolios-images'; // default generic gallery
};

/*
  Helper: build image list
  Priority:
  1) project.images (array of file names)
  2) project.imageFolder (string)
  3) Infer by title/slug and fallback to numbered files
 */
const getImagesForProject = (project) => {
  const PUBLIC = process.env.PUBLIC_URL || '';
  const folder = project?.imageFolder || folderFor(project);

  // If backend sends images array (["image1.jpg", "image2.jpg"...])
  if (Array.isArray(project?.images) && project.images.length > 0) {
    return project.images.map((name) => `${PUBLIC}/assets/${folder}/${name}`);
  }

  // Otherwise, build numbered fallback by known counts
  const counts = {
    'portfolios-images': 6,
    'spotify-clone-images': 2,
    'olympics-dashboard-images': 3,
    'simon-images': 2,
  };
  const max = counts[folder] || 3;

  return Array.from({ length: max }, (_, i) => `${PUBLIC}/assets/${folder}/image${i + 1}.jpg`);
};

/*
  Small autoplay slider used inside each Project Card
 */
const CardSlider = ({ images, interval = 2500 }) => {
  const safeImages = images?.length ? images : [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!safeImages.length) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % safeImages.length), interval);
    return () => clearInterval(id);
  }, [safeImages, interval]);

  if (!safeImages.length) {
    return (
      <img
        className="project-card__image"
        src={`${process.env.PUBLIC_URL}/assets/portfolios-images/placeholder.jpg`}
        alt="Project preview"
      />
    );
  }

  return (
    <div className="card-slider">
      {safeImages.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={`Preview ${i + 1}`}
          className={`card-slide ${i === index ? 'active' : ''}`}
          onError={(e) => { e.currentTarget.src = `${process.env.PUBLIC_URL}/assets/portfolios-images/placeholder.jpg`; }}
        />
      ))}
      <div className="card-dots">
        {safeImages.map((_, i) => (
          <span key={i} className={`dot ${i === index ? 'active' : ''}`} />
        ))}
      </div>
      <div className="card-shine" />
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/projects');
        setProjects(res.data || []);
      } catch (err) {
        console.error('Error fetching projects:', err);
      }
    };
    fetchProjects();
  }, []);

  // Memoize prepared data
  const prepared = useMemo(() => {
    return (projects || []).map((p) => ({
      ...p,
      _images: getImagesForProject(p),
    }));
  }, [projects]);

  return (
    <div className="card-projects">
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {prepared.map((project) => (
          <div 
          key={project._id || project.title} 
          className="project-card">
            <div className="project-card__media">
              <CardSlider images={project._images} />
            </div>

            <div className="project-content">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.shortDescription}</p>

              <div className="project-links">
                <Link className="btn btn--primary" to={`/projects/${project._id}`}>View Details</Link>
                {project.githubLink && (
                  <a className="btn btn--ghost" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="project-card__glow" />
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Projects;
