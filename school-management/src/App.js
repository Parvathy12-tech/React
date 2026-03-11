import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import StudentsList from "./StudentsList";
import checkAuth from "./checkAuth";
import AutoLogin from "./AutoLogin";

const ProtectedStudents = checkAuth(StudentsList);

function App() {

return (

<BrowserRouter>

<AutoLogin>

<Routes>

<Route path="/" element={<Navigate to="/login" />} />

<Route path="/login" element={<Login />} />

<Route path="/register" element={<Register />} />

<Route path="/students" element={<ProtectedStudents />} />

</Routes>

</AutoLogin>

</BrowserRouter>

)

}

export default App;