import React from 'react'
import Header from './Components/Header'
import Nav from './Components/Nav';
import Aside from './Components/Aside';
import Main from './Components/Main';
import Footer from './Components/Footer';
function App() {
  return (
<>
<Header/>
<Nav/>
<div style={{display:"flex",gap:"20px"}}>
<Aside/>
<Main/>
</div>
<br/>
<Footer/>
</>
  );
}

export default App;
