import { Link } from "react-router-dom";

function Navbar(){

return(
<div>

<h2>Product Catalog</h2>

<Link to="/">Home</Link> |
<Link to="/add">Add Product</Link>

<hr/>

</div>
)

}

export default Navbar;