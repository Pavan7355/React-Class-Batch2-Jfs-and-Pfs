import React from 'react'

function Example2() {
    const cars=["Benz","BMW","Audi","Mustang",
        "Range Rover"]
        const names=["Raj","Riya","Virat","Sachin"]
       let nameList=names.map((element,index)=>{
            return <li>{element}</li>
        })
        let carList= cars.map((element,index)=>{
            return <li>{element}</li>
         })
  return (
    <>
      <h1>Ordered List</h1>
<ol type='a'>
{carList}
</ol>
<h1>Unordered List</h1>
<ul type="square">
{nameList}
</ul>
    </>
  )
}

export default Example2
