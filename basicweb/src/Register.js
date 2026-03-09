import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Register(){

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleRegister = async (e) => {

e.preventDefault();

const data = {
user_name: name,
email: email,
password: password
};

const response = await fetch(
"https://worksheet-auth.mashupstack.com/register",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify(data)
}
);

const result = await response.json();

if(response.status === 200){
alert("Registration Successful");
navigate("/login");
}
else{
alert("Registration failed. Try another email.");
}

};

return(

<div style={{padding:"20px"}}>

<h2>Register</h2>

<form onSubmit={handleRegister}>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button type="submit">Register</button>

</form>

</div>

)

}

export default Register;