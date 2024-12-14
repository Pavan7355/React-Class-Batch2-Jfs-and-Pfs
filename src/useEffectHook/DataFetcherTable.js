import React, { useEffect, useState } from 'react'

function DataFetcherTable() {
    const[data,setData]=useState(null)
    const[error,setError]=useState(false)
      console.log(data)
    useEffect(()=>{
        async function fetchData() {
            try{
                let response=await fetch('https://fakestoreapi.com/products')
                let result=await response.json()
                setData(result)
                setError(false)
            }
            catch{
                console.log("you got an error")
                setError(true)
            }
        }
        fetchData()
        return ()=>{
            console.log("you code is clean")
        }
    },[])

  return (
    <div>
      <h2>Data Fetch Demo in table format</h2>
      {error && <p>unable fetch the data</p>}
      {!error&& data&&(
        <table border="1">
            <tr>
                <th>Sl_no</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>Images</th>
                <th>Rateing</th>
                <th>Count</th>
            </tr>
            {data.map((ele,index)=>{
                return(
                   <tr key={index}>
<td>{ele.id}</td>
<td>{ele.title}</td>
<td>{ele.price}</td>
<td>{ele.description}</td>
<td>{ele.category}</td>
<td><img src={ele.image} height={300} width={300}></img></td>
            <td>{ele.rating.rate}</td>
            <td>{ele.rating.count}</td>
                   </tr>
                )
            })}
        </table>
      )}
    </div>
  )
}

export default DataFetcherTable
