import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductList(){

const token = useSelector(state=>state.auth.token);

const [products,setProducts] = useState([]);

const navigate = useNavigate();

useEffect(()=>{

if(!token){
navigate("/login");
return;
}

fetch("https://worksheet-product.mashupstack.com/product",{

headers:{
Authorization:`Bearer ${token}`
}

})
.then(res=>res.json())
.then(data=>setProducts(data));

},[token]);

return(

<div>

<h2>Product List</h2>

<table border="1">

<tr>
<th>Name</th>
<th>Description</th>
<th>Price</th>
<th>Quantity</th>
</tr>

{products.map((p)=>(

<tr key={p.id}>
<td>{p.name}</td>
<td>{p.description}</td>
<td>{p.price}</td>
<td>{p.quantity}</td>
</tr>

))}

</table>

</div>

)

}

export default ProductList;