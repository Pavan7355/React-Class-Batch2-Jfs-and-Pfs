import React from 'react'
// import Nav from './Navbar/Nav';
// import Home from './Navbar/Home';
// import About from './Navbar/About';
// import Profile from './Navbar/Profile';
// import Login from './Navbar/Login';
// import Signup from './Navbar/Signup';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Froms/Login'
import Signup from './Froms/Signup'
import Password  from './Froms/Password'
import Axios from './Axios/Axios'
function App() {

  return (
<>

{/* <BrowserRouter>
<Nav/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/profile' element={<Profile/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/signup' element={<Signup/>}></Route>
</Routes>

</BrowserRouter> */}
{/* <BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/password' element={<Password/>}></Route>
</Routes>
</BrowserRouter> */}


<Axios/>
</>
  );
}

export default App;
