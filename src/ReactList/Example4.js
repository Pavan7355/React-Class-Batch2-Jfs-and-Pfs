import React from 'react'

function Example4() {
    const stack=[
        {stackname:"Java full stack",
            subject1:"Core Java",
            subject2:"Webtechnology",
            subject3:"MQ SQL",
            subject4:"Spring Boot"
        },
        {
            stackname:"Python full stack",
            subject1:"Core Python",
            subject2:"Webtechnology",
            subject3:"MQ SQL",
            subject4:"Dijango and Rest API"
        },
        {
            stackname:"Mern stack",
            subject1:"React Js",
            subject2:"Node Js",
            subject3:"Exapress Js",
            subject4:"Mongo DB"
        }
    ]
    let stackList=stack.map((element,index)=>{
        return (
        <>
        <li>{element.stackname}</li>
        <ul type="circle">
<li>{element.subject1}</li>
<li>{element.subject2}</li>
<li>{element.subject3}</li>
<li>{element.subject4}</li>
        </ul>
        </>
        )
    })
  return (
    <>
   <h1>Nested List</h1>
   <ol type='1'>
{stackList}
    </ol>   
    </>
  )
}

export default Example4
