import React from "react";
import profileImage from "./images/profile1.jpg"; 

function App() {
  // Variables
  const name = "Parvathy";
  const description = "I am a beginner React developer learning web development step by step.";

  
  const cardStyle = {
    border: "2px solid #333",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center"
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      
      <div style={cardStyle}>
        
        
        <img
          src={profileImage}
          alt="Profile"
          width="150"
          height="150"
          style={{ borderRadius: "50%" }}
        />

        <h2 className="mt-3">{name}</h2>
        <p>{description}</p>

        
        <img
          src="https://phlebotomycareertraining.com/wp-content/uploads/2023/11/default-avatar-photo-placeholder-icon-grey-vector-38519922-e1699300466746.jpg"
          alt="External"
          width="100"
          className="mt-3"
        />

      </div>

    </div>
  );
}

export default App;