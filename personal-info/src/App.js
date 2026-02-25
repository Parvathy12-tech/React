import React from "react";
import "./App.css";

function App() {

  // Personal Information
  const name = "Alex";
  const age = 20;
  const isStudent = true;

  // Heading background color
  const headingColor = "lightblue";

  // Hobbies array
  const favoriteHobbies = ["Reading", "Hiking", "Coding"];

  // -------- FOR LOOP LIST --------
  const hobbyListFor = [];
  for (let i = 0; i < favoriteHobbies.length; i++) {
    hobbyListFor.push(
      <li key={i}>{favoriteHobbies[i]}</li>
    );
  }

  // -------- MAP LIST --------
  const hobbyListMap = favoriteHobbies.map((hobby, index) => (
    <li key={index}>{hobby}</li>
  ));

  // Button function
  function showMessage() {
    document.getElementById("message").innerText =
      "Hello from React! I love my hobbies!";

    document.getElementById("mainHeading").style.backgroundColor =
      headingColor;
  }

  return (
    <div className="container mt-4">

      <h1 id="mainHeading" className="text-center p-2">
        My Personal Profile
      </h1>

      {/* Bootstrap Card */}
      <div className="card p-3 mb-4 shadow">
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Student:</strong> {isStudent.toString()}</p>
      </div>

      {/* Hobbies using For Loop */}
      <h4>Hobbies (Using For Loop)</h4>
      <ul>
        {hobbyListFor}
      </ul>

      {/* Hobbies using Map */}
      <h4>Hobbies (Using map())</h4>
      <ul>
        {hobbyListMap}
      </ul>

      {/* Button */}
      <button
        className="btn btn-primary mt-3"
        onClick={showMessage}
      >
        Show Enthusiasm
      </button>

      {/* Message */}
      <p id="message" className="mt-3">
        Click the button to see my enthusiasm!
      </p>

    </div>
  );
}

export default App;