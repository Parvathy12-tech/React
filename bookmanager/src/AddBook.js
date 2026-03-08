import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook(){

const navigate = useNavigate()

const [title,setTitle] = useState("")
const [author,setAuthor] = useState("")
const [year,setYear] = useState("")
const [genre,setGenre] = useState("")

function saveBook(){

fetch("https://worksheet-library.mashupstack.com/books",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

title:title,
author:author,
published_year:year,
genre:genre

})

})
.then(()=>{

navigate("/")

})

}

return(

<div>

<h2>Add Book</h2>

<input placeholder="Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<br/><br/>

<input placeholder="Author"
onChange={(e)=>setAuthor(e.target.value)}
/>

<br/><br/>

<input placeholder="Published Year"
onChange={(e)=>setYear(e.target.value)}
/>

<br/><br/>

<input placeholder="Genre"
onChange={(e)=>setGenre(e.target.value)}
/>

<br/><br/>

<button onClick={saveBook}>
Add Book
</button>

</div>

)

}

export default AddBook