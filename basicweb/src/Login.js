import React,{useState} from "react";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async (e) => {

e.preventDefault();

const data = {
email: email,
password: password
};

const response = await fetch(
"https://worksheet-auth.mashupstack.com/login",
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

alert("Successfully Logged In");

console.log("Token:", result.token);

}
else{

alert(result.message);

}

};

return(

<div style={{padding:"20px"}}>

<h2>Login</h2>

<form onSubmit={handleLogin}>

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

<button type="submit">Login</button>

</form>

</div>

)

}

export default Login;