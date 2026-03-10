import {useState} from "react"
import {useDispatch} from "react-redux"
import {loginSuccess} from "./authSlice"
import {useNavigate} from "react-router-dom"

function Login(){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const dispatch = useDispatch()
const navigate = useNavigate()

const loginUser = async ()=>{

const res = await fetch(
"https://worksheet-product.mashupstack.com/login",
{
 method:"POST",

 headers:{
  "Content-Type":"application/json"
 },

 body:JSON.stringify({
  email,
  password
 })
})

const data = await res.json()

dispatch(loginSuccess({
 email:email,
 token:data.token
}))

navigate("/products")

}

return(

<div>

<h2>Login</h2>

<input placeholder="Email"
onChange={(e)=>setEmail(e.target.value)} />

<br/>

<input type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)} />

<br/>

<button onClick={loginUser}>
Login
</button>

</div>

)

}

export default Login