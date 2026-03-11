import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const registerUser = async () => {

const response = await fetch(
"https://worksheet-student.mashupstack.com/register",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
user_name: name,   // important
email: email,
password: password
})
}
);

const data = await response.json();

console.log(data);

if(response.ok){
alert("Registration successful");
navigate("/login");
}else{
alert("Registration failed");
}

}

return(

<div>

<h2>Register</h2>

<input
type="text"
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
type="email"
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

<button onClick={registerUser}>Register</button>

</div>

)

}

export default Register;