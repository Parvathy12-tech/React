import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"

function ViewProduct(){

const {id} = useParams()

const products = useSelector(
state=>state.products.list
)

const product = products.find(
p=>p.id === id
)

return(

<div>

<h2>{product.name}</h2>

<p>{product.description}</p>

<p>Price: {product.price}</p>

<p>Quantity: {product.quantity}</p>

</div>

)

}

export default ViewProduct