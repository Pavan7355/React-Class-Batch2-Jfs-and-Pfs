import React from 'react'

function FunComponent4() {
  return (
    <>
         <div style={{height:"150px",width:"100%",
        boxShadow:"0px 0px 10px black",textAlign:"center",
        padding:"10px",textTransform:"upppercase",marginTop:"20px",
      }}>
        <h1>Fun Component 4</h1>
        <FunComponent1/>
      </div>
    </>
  )
}

function FunComponent1(){
    return(
        <>
        <div style={{height:"30px",width:"70%",
        boxShadow:"0px 0px 10px black",textAlign:"center",
        padding:"10px",textTransform:"upppercase",margin:"10px auto"
      }}>
            <h3>Fun Component 1</h3>
        </div>
        </>
    )
}
export default FunComponent4
