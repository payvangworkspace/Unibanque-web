import React from "react";
import { useNavigate } from "react-router-dom";



const ClientUnderstanding = () => {
const navigate=useNavigate();

function redirectContact(){

navigate("/contact")




}



  return (
    <section className="client-section">
      <div className="client-container">
        <div className="client-text">
          {/* <h2 className="client-title">Why Choose Us ?</h2> */}
         <p className="client-description">
  At UNIBANQUE, we go beyond traditional banking. Our personalized services are designed to align perfectly with your financial aspirations.
  We prioritize trust, transparency, and long-term relationships, ensuring every client receives tailored advice and unmatched support.
</p>
<p className="client-description">
  Whether you're a corporate client or an individual, we offer innovative solutions, cutting-edge digital platforms, and global financial insights that give you the competitive edge.
  Choose us for stability, innovation, and a commitment to your success.
</p>
          <button className="client-button" onClick={redirectContact}>Learn More</button>
        </div>
        <div className="client-image">
          <img src={`${process.env.PUBLIC_URL}/home-facility-bg.png`} alt="Client engaging with technology" />
        </div>
      </div>
    </section>
  );
};

export default ClientUnderstanding;

// CSS (Separate file: ClientUnderstanding.css)
const styles = `
.client-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  background: linear-gradient(to right, #f5f7fa, #c3cfe2);
  transition: all 0.3s ease-in-out;
}

.client-container {
  max-width: 1200px;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.client-text {
  flex: 1;
  text-align: left;
}

.client-title {
  font-size: 3rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.client-description {
  font-size: 1.2rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 1.2rem;
}

.client-button {
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  padding: 14px 24px;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 91, 187, 0.3);
}

.client-button:hover {
  background: linear-gradient(135deg, #0056b3, #003d82);
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 91, 187, 0.4);
}

.client-image img {
  width: 100%;
  max-width: 550px;
  border-radius: 15px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;
}

.client-image img:hover {
  transform: scale(1.03);
}

@media (max-width: 900px) {
  .client-container {
    flex-direction: column;
    text-align: center;
  }

  .client-text {
    text-align: center;
  }

  .client-button {
    display: inline-block;
  }
}
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
