// src/pages/ProjectDetailPage.js
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Helpers reused from Projects
const folderFor = (project) => {
  const t = (project?.slug || project?.title || '').toLowerCase();
  if (t.includes('spotify')) return 'spotify-clone-images';
  if (t.includes('olympics')) return 'olympics-dashboard-images';
  if (t.includes('simon')) return 'simon-images';
  return 'portfolios-images';
};

const buildImages = (project) => {
  const PUBLIC = process.env.PUBLIC_URL || '';
  const folder = project?.imageFolder || folderFor(project);

  if (Array.isArray(project?.images) && project.images.length > 0) {
    return project.images.map((name) => `${PUBLIC}/assets/${folder}/${name}`);
  }

  const counts = {
    'portfolios-images': 6,
    'spotify-clone-images': 2,
    'olympics-dashboard-images': 3,
    'simon-images': 2,
  };
  const max = counts[folder] || 3;
  return Array.from({ length: max }, (_, i) => `${PUBLIC}/assets/${folder}/image${i + 1}.jpg`);
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProject = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/projects/${id}`);
        setProject(res.data);
      } catch (e) {
        console.error(e);
        setErr('Could not load project details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  const images = useMemo(() => (project ? buildImages(project) : []), [project]);

  // autoplay slider
  useEffect(() => {
    if (!images.length) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 3000);
    return () => clearInterval(id);
  }, [images]);

  if (loading) return <div style={{ textAlign: 'center', padding: '5rem' }}>Loading...</div>;
  if (err) return <div style={{ textAlign: 'center', padding: '5rem', color: 'red' }}>{err}</div>;
  if (!project) return <div style={{ textAlign: 'center', padding: '5rem' }}>Project not found.</div>;

  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="project-detail fade-in">
      <div className="project-detail__header">
        <h1 className="project-detail__title">{project.title}</h1>
        <p className="project-detail__subtitle">{project.shortDescription}</p>
      </div>

      {/* Image Slider */}
      {images.length > 0 && (
        <div className="detail-slider">
          {images.map((src, i) => (
            <img
              key={src + i}
              src={src}
              alt={`Slide ${i + 1}`}
              className={`detail-slide ${i === idx ? 'active' : ''}`}
              onError={(e) => { e.currentTarget.src = `${process.env.PUBLIC_URL}/assets/portfolios-images/placeholder.jpg`; }}
            />
          ))}

          <button className="detail-nav prev" onClick={prev} aria-label="Previous">❮</button>
          <button className="detail-nav next" onClick={next} aria-label="Next">❯</button>

          <div className="detail-dots">
            {images.map((_, i) => (
              <span key={i} className={`dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} />
            ))}
          </div>
        </div>
      )}

      {/* Readable Sections */}
      <section className="project-detail-section">
        <h2>📋 Overview</h2>
        <p className="project-detail__para">{project.detailedDescription}</p>
      </section>

      {!!project?.keyFeatures?.length && (
        <section className="project-detail-section">
          <h2>✨ Key Features</h2>
          <ul className="project-detail__list">
            {project.keyFeatures.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </section>
      )}

      {!!project?.techStack?.length && (
        <section className="project-detail-section">
          <h2>🛠️ Tech Stack</h2>
          <div className="tech-stack-list">
            {project.techStack.map((t, i) => <span key={i} className="tech-stack-item">{t}</span>)}
          </div>
        </section>
      )}

      <section className="project-detail-section">
        <h2>🔗 Links</h2>
        <div className="detail-links">
          {project.githubLink && (
            <a className="btn btn--primary" href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {project.liveDemoLink && (
            <a className="btn btn--ghost" href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </section>
      <button 
        className="back-btn"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default ProjectDetailPage;
