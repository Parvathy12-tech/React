import { Link } from "react-router-dom";

function Navbar(){

return(

<div>

<h2>Library Book Manager</h2>

<Link to="/">Home</Link> |
<Link to="/add">Add Book</Link>

<hr/>

</div>

)

}

export default Navbar;