import React from 'react'
import Details from './DefaultProps/Details';
import Example1 from './PropsDestructing/Example1';
import Example2 from './PropsDestructing/Example2';
import ParentComponent from './PropsFunction/ParentComponent';

function App() {
  return (
<>
{/* <Details name="virat" age="36" city="Bangalore"/>
<Details name="Sachin" age="27" city="Mangalore"/>
<Details age="47" city="mysore"/>
<Details/>
<Details name="Raj" city="Kolar"/> */}
{/* <Example1 name="Raj" age="22" city="Bangalore"
  isStudent={false}/>
  <Example1 name="viart" age="36" city="Mysore"
  isStudent={true}/> */}
  {/* <Example2 name="Raj" age="22" city="Bangalore"
  isStudent={false}/>
  <Example2 name="sachin"  age="16"  city="kolar"
  isStudent={true}/> */}
  <ParentComponent/>
</>
  );
}

export default App;
