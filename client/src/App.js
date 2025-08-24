import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import ProjectDetailPage from './pages/ProjectDetailPage';
import BlogDetailPage from './pages/BlogDetailPage';
import './App.css';

// Scroll Reveal Hook
function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function App() {
  // call scroll reveal inside App so it works globally
  useScrollReveal();

  return (
    <Router>
      <CustomCursor />

      {/* Soft Particle Background */}
      <div className="particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/blogs/:id" element={<BlogDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
