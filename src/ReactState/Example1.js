import React from "react";

class Example1 extends React.Component{
    constructor(){
        super()
        this.state={
            message:"welcome to react Js class",
            name:"Sachin",
            age:30,
            city:"Bangalore"
        }
    }
    render(){
        return(
            <>
            <h1>This class component for state example</h1>
            <h2>My name is {this.state.name}</h2>
           <p>I am {this.state.age} years old</p>
           <h3>I am from {this.state.city}</h3>
            </>
        )
    }
}
export default Example1