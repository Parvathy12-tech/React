import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <nav style={{background:"#222", padding:"15px"}}>
        <Link to="/register" style={{color:"white", marginRight:"20px"}}>
          Register
        </Link>

        <Link to="/login" style={{color:"white"}}>
          Login
        </Link>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;