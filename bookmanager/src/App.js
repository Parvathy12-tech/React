import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddBook from "./AddBook";
import EditBook from "./EditBook";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/add" element={<AddBook />} />

        <Route path="/edit/:id" element={<EditBook />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;