import React, { useState, useEffect } from "react";
import axios from "axios";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const imageFiles = [
    "image1.JPG",
    "image2.JPG",
    "image3.JPG",
    "image4.JPG",
    "image5.JPG",
    "image6.JPG"
  ];

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/certificates");
        setCertificates(response.data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    };
    fetchCertificates();
  }, []);

  return (
    <div className="card-certificates">
    <section id="certificates" className="section">
      <h2 className="section-title">Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div
            key={cert._id}
            className="certificate-card"
            onMouseEnter={() =>
              setFullscreenImage(`/assets/certificates/${imageFiles[index]}`)
            }
            onMouseLeave={() => setFullscreenImage(null)}
          >
            <div className="certificate-image-placeholder">
              <img
                src={`/assets/certificates/${imageFiles[index]}`}
                alt={cert.title}
              />
            </div>
            <h3 >{cert.title}</h3>
          </div>
        ))}
      </div>

      {fullscreenImage && (
        <div className="fullscreen-overlay">
          <img
            src={fullscreenImage}
            alt="Certificate Fullscreen"
            className="fullscreen-image"
          />
        </div>
      )}
    </section>
    </div>
  );
};

export default Certificates;
