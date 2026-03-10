import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){

const [user_name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const registerUser = async () => {

await fetch("https://worksheet-product.mashupstack.com/register",{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
user_name,
email,
password
})

});

navigate("/login");

}

return(

<div>

<h2>Register</h2>

<input placeholder="User Name"
onChange={(e)=>setName(e.target.value)} />

<br/>

<input placeholder="Email"
onChange={(e)=>setEmail(e.target.value)} />

<br/>

<input type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)} />

<br/>

<button onClick={registerUser}>Register</button>

</div>

)

}

export default Register;