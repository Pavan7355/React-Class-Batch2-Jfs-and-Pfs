import React, { useEffect, useState } from 'react'

function DataFetcher2() {
    const[data,setData]=useState(null)
    const[error,setError]=useState(false)
useEffect(()=>{
async function FetchData() {
   try{
    let respone= await fetch('https://fakestoreapi.com/products')
    let result= await respone.json()
    setData(result)
    console.log(result)
   }
   catch{
    console.log("you got an error")
    setError(true)
   }
}
FetchData()
    return ()=>{
        console.log("your code is clean")
    }
},[])
  return (
    <div>
      <h1>Data Fetch in list format</h1>
      {error&&<p>Error Fetching Data</p>}
      {!error&& data&& (
        <ul>
{data.map((ele,index)=>{
    return(
        <li key={index}>
<h1>{ele.title}</h1>
<h3>{ele.price}</h3>
<p>{ele.description}</p>
<h2>{ele.rating.count}</h2>
        </li>
    )
})}
        </ul>
      )}
    </div>
  )
}

export default DataFetcher2
