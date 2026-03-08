import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/add" element={<AddProduct/>} />

        <Route path="/edit/:id" element={<EditProduct/>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;