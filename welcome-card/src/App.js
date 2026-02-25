import React from "react";
import myImage from "./images/img.jpg";

function App() {

  console.log("React app started");

  const userName = "Alex";

  const headingStyle = {
    color: "darkgreen",
    backgroundColor: "lightblue",
    padding: "10px",
    borderRadius: "8px"
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">

      <div className="card text-center shadow p-4" style={{ width: "25rem" }}>

        {/* Heading */}
        <h2 style={headingStyle}>
          Welcome to React Learning, {userName}
        </h2>

        {/* Internal Image */}
        <img
          src={myImage}
          alt="Internal"
          className="img-fluid mt-3 mx-auto"
          style={{ width: "200px" }}
        />

        {/* External Image */}
        <img
          src="https://marketplace.canva.com/EAGPoOxgajM/1/0/1600w/canva-blue-and-white-watercolor-welcome-september-card-landscape-1SvvQiQmAlY.jpg"
          alt="External"
          className="img-fluid mt-3 mx-auto"
        />

        {/* Description */}
        <p className="text-primary mt-3">
          This is your first card with images and styles!
        </p>

      </div>

    </div>
  );
}

export default App;