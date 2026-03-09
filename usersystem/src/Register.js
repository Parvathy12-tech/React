import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){

const navigate = useNavigate();

// state variables
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

/* WRITE handleRegister FUNCTION HERE */
const handleRegister = async (e) => {

e.preventDefault();

if(password !== confirmPassword){
alert("Passwords do not match");
return;
}

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

console.log(result);

alert("Registration Successful");

navigate("/login");

};

return (

<div>

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

<input
type="password"
placeholder="Confirm Password"
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
/>

<br/><br/>

<button type="submit">Register</button>

</form>

</div>

)

}

export default Register;