import React from "react";

class Example2 extends React.Component{
    constructor(){
        super()
        this.state={
            message:"Welcome to React js class"
        }
    }
    changeContent(){
     this.setState({
        message:"Thank you for visiting"
     })
    }
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeContent()}>Click here</button>
            </>
        )
    }
}
export default Example2