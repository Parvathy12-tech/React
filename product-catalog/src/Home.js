import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){

const [products,setProducts] = useState([])
const [search,setSearch] = useState("")

// GET PRODUCTS
function getProducts(){

fetch("https://worksheet-catalogue.mashupstack.com/products")
.then(res=>res.json())
.then(data=>{
setProducts(data)
})

}

useEffect(()=>{
getProducts()
},[])


// DELETE PRODUCT
function deleteProduct(id){

fetch("https://worksheet-catalogue.mashupstack.com/products/"+id,{
method:"DELETE"
})
.then(()=>{
getProducts()
})

}

return(

<div>

<h2>All Products</h2>

<input
type="text"
placeholder="Search product"
onChange={(e)=>setSearch(e.target.value)}
/>

<table border="1" width="100%">

<thead>
<tr>
<th>Name</th>
<th>Price</th>
<th>Category</th>
<th>Quantity</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{
products
.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
.map((item)=>(
<tr key={item.id}>

<td>{item.name}</td>
<td>{item.price}</td>
<td>{item.category}</td>
<td>{item.quantity}</td>

<td>

<Link to={"/edit/"+item.id}>Edit</Link>

<button onClick={()=>deleteProduct(item.id)}>
Delete
</button>

</td>

</tr>
))
}

</tbody>

</table>

</div>

)

}

export default Home