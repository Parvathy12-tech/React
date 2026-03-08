import logo from './logo.svg';
import './App.css';

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}></Route>

<Route path="/about" element={<About/>}></Route>

<Route path="/contact" element={<Contact/>}></Route>

</Routes>

</BrowserRouter>

);

}

ReactDOM.render(<App/>,document.getElementById("root"));
export default App;
