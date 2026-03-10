import { BrowserRouter,Routes,Route }
from "react-router-dom";

import Register from "./Register";
import Login from "./Login";
import ProductList from "./ProductList";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Register/>} />

<Route path="/login" element={<Login/>} />

<Route path="/products" element={<ProductList/>} />

</Routes>

</BrowserRouter>

)

}

export default App;