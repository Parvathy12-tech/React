import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

function EditBook(){

const {id} = useParams()

const navigate = useNavigate()

const [title,setTitle] = useState("")
const [author,setAuthor] = useState("")
const [year,setYear] = useState("")
const [genre,setGenre] = useState("")

useEffect(()=>{

fetch("https://worksheet-library.mashupstack.com/books/"+id)

.then(res=>res.json())

.then(data=>{

setTitle(data.title)
setAuthor(data.author)
setYear(data.published_year)
setGenre(data.genre)

})

},[])

function updateBook(){

fetch("https://worksheet-library.mashupstack.com/books/"+id,{

method:"PUT",

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

<h2>Edit Book</h2>

<input value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<br/><br/>

<input value={author}
onChange={(e)=>setAuthor(e.target.value)}
/>

<br/><br/>

<input value={year}
onChange={(e)=>setYear(e.target.value)}
/>

<br/><br/>

<input value={genre}
onChange={(e)=>setGenre(e.target.value)}
/>

<br/><br/>

<button onClick={updateBook}>
Update Book
</button>

</div>

)

}

export default EditBook