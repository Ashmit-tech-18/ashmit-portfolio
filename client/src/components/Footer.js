import React from "react";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Tagline */}
        <h2 className="footer-title">
          Fuel ideas over <span role="img" aria-label="coffee">☕</span>, let’s connect
        </h2>
        <p className="footer-subtitle">
          Always open to talk about design, product & tech in general
        </p>

        {/* Social Icons with text */}
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/ashmit18/" target="_blank" rel="noopener noreferrer" className="social-link">
  <span className="icon-box linkedin"><FaLinkedinIn /></span>
  <span className="social-text">Linkedin</span>
</a>

<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
  <span className="icon-box instagram"><FaInstagram /></span>
  <span className="social-text">Instagram</span>
</a>

<a href="https://x.com/Ashmit_018" target="_blank" rel="noopener noreferrer" className="social-link">
  <span className="icon-box twitter"><FaTwitter /></span>
  <span className="social-text">Twitter/X</span>
</a>

        </div>

        {/* Email */}
        <div className="footer-email">
          <a href="mailto:ashmitshukla92@gmail.com">📩 ashmitshukla92@gmail.com</a>
        </div>

        {/* Signature Line */}
        <p className="footer-signature">
          Made with ❤️ by <span>Ashmit Shukla</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
