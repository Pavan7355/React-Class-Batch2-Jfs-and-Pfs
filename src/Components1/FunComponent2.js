import React from 'react'

function FunComponent2() {
  return (
    <>
       <div style={{height:"400px",width:"50%",
        boxShadow:"0px 0px 10px black",textAlign:"center",
        padding:"10px",textTransform:"upppercase",marginTop:"20px"
      }}>
        <h1>Fun Component 2</h1>
        <div  style={{display:"flex",gap:"10px"}}>
        <FunComponentchild1/>
        <FunComponentchild2/>
        </div>
      </div>
    </>
  )
}
function FunComponentchild1(){
    return(
        <>
        <div style={{height:"200px",width:"50%",
        boxShadow:"0px 0px 10px black",textAlign:"center",
        padding:"10px",textTransform:"upppercase",marginTop:"20px"
      }}>
            <h3>Fun Component 1</h3>
        </div>
        </>
    )
}
function FunComponentchild2(){
    return(
        <>
        <div style={{height:"200px",width:"50%",
        boxShadow:"0px 0px 10px black",textAlign:"center",
        padding:"10px",textTransform:"upppercase",marginTop:"20px"
      }}>
            <h3>Fun Component 2</h3>
        </div>
        </>
    )
}


export default FunComponent2
