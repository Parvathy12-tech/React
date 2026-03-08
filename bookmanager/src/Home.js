import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){

const [books,setBooks] = useState([])

function getBooks(){

fetch("https://worksheet-library.mashupstack.com/books")

.then(res=>res.json())

.then(data=>{
setBooks(data)
})

}

useEffect(()=>{
getBooks()
},[])

function deleteBook(id){

fetch("https://worksheet-library.mashupstack.com/books/"+id,{

method:"DELETE"

})
.then(()=>{
getBooks()
})

}

return(

<div>

<h2>Book List</h2>

<table border="1">

<thead>

<tr>

<th>Title</th>
<th>Author</th>
<th>Year</th>
<th>Genre</th>
<th>Action</th>

</tr>

</thead>

<tbody>

{books.map((book)=>(
<tr key={book.id}>

<td>{book.title}</td>
<td>{book.author}</td>
<td>{book.published_year}</td>
<td>{book.genre}</td>

<td>

<Link to={"/edit/"+book.id}>Edit</Link>

<button onClick={()=>deleteBook(book.id)}>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

)

}

export default Home