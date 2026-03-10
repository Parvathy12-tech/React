import {useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import {setProducts} from "./productSlice"
import {Link,useNavigate} from "react-router-dom"

function ProductList(){

const dispatch = useDispatch()

const products = useSelector(state=>state.products.list)
const token = useSelector(state=>state.auth.token)

const navigate = useNavigate()

useEffect(()=>{

if(!token){
 navigate("/login")
 return
}

fetch("https://worksheet-product.mashupstack.com/product",{

 headers:{
  Authorization:`Bearer ${token}`
 }

})
.then(res=>res.json())
.then(data=>dispatch(setProducts(data)))

},[])

return(

<div>

<h2>Product List</h2>

{products.map((p)=>(
<div key={p.id}>

<h3>{p.name}</h3>
<p>{p.description}</p>
<p>Price: {p.price}</p>
<p>Quantity: {p.quantity}</p>

<Link to={`/product/${p.id}`}>
<button>View</button>
</Link>

<hr/>

</div>
))}

</div>

)

}

export default ProductList