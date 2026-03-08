import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

function EditProduct(){

const {id} = useParams()
const navigate = useNavigate()

const [name,setName] = useState("")
const [price,setPrice] = useState("")
const [category,setCategory] = useState("")
const [quantity,setQuantity] = useState("")


// GET SINGLE PRODUCT
useEffect(()=>{

fetch("https://worksheet-catalogue.mashupstack.com/products/"+id)
.then(res=>res.json())
.then(data=>{

setName(data.name)
setPrice(data.price)
setCategory(data.category)
setQuantity(data.quantity)

})

},[])


// UPDATE PRODUCT
function updateProduct(){

fetch("https://worksheet-catalogue.mashupstack.com/products/"+id,{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name:name,
price:price,
category:category,
quantity:quantity
})

})
.then(()=>{
navigate("/")
})

}

return(

<div>

<h2>Edit Product</h2>

<input value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/>

<input value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<br/>

<input value={category}
onChange={(e)=>setCategory(e.target.value)}
/>

<br/>

<input value={quantity}
onChange={(e)=>setQuantity(e.target.value)}
/>

<br/>

<button onClick={updateProduct}>
Update Product
</button>

</div>

)

}

export default EditProduct