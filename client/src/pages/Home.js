import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Academics from '../components/Academics';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Blogs from '../components/Blogs';
import Research from '../components/Research';
import Resume from '../components/Resume';
import Contact from '../components/Contact';


const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Academics />
      <Skills />
      <Projects />
      <Certificates />
      <Blogs />
      <Research />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;