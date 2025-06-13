import React from 'react';
import '../External CSS/MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mvhd-section">
      <div className="mvhd-container">
        {/* <h2 className="mvhd-title">Our Mission & Vision</h2> */}

        {/* Mission */}
        <div className="mvhd-row mvhd-left">
          <div className="mvhd-image-box">
            <img
              src="./c2.jpg"
              alt="Mission"
              className="mvhd-image"
            />
          </div>
          <div className="mvhd-text-box">
            <h3 className="mvhd-subtitle">Our Mission</h3>
            <p>
              Our mission is to provide trusted, innovative financial solutions that empower individuals and businesses to achieve long-term success. We strive for excellence in all our services, fostering growth and inclusion across the communities we serve.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="mvhd-row mvhd-right">
          <div className="mvhd-image-box">
            <img
              src="./c3.jpg"
              alt="Vision"
              className="mvhd-image"
            />
          </div>
          <div className="mvhd-text-box">
            <h3 className="mvhd-subtitle">Our Vision</h3>
            <p>
              We envision a future where UNIBANQUE stands as a pillar of financial innovation and ethical banking. Our goal is to lead the evolution of banking with human-centric technologies, sustainability, and forward-thinking strategies that shape a better tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
