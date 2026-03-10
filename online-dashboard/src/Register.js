import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const registerUser = async ()=>{

const res = await fetch("https://worksheet-product.mashupstack.com/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
user_name: name,
email: email,
password: password
})

})

const data = await res.json()
console.log(data)

if(res.ok){
alert("Registration Successful")
navigate("/login")
}else{
alert("Registration Failed")
}

}

return(

<div>

<h2>Register</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={registerUser}>
Register
</button>

</div>

)

}

export default Register