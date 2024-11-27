import React from 'react'
class Example3 extends React.Component{
    constructor(){
        super()
        this.state={
            name:"virat",
            age:36,
            city:"Bangalore",
            image:"https://images.assettype.com/thequint/2017-10/29e9cb67-4483-4a74-8e18-c8e92b654941/Virat-century.jpg"
        }
    }
    changeContent(){
        this.setState({
            name:"sachin",
            age:45,
            city:"Mumbai",
            image:"https://www.thefamouspeople.com/profiles/images/sachin-tendulkar-8.jpg"
        })
    }
    previousSate(){
        this.setState({
            name:"virat",
            age:36,
            city:"Bangalore",
            image:"https://images.assettype.com/thequint/2017-10/29e9cb67-4483-4a74-8e18-c8e92b654941/Virat-century.jpg"
        })
    }
    render(){
        return(
            <>
            <h1>This is Class component</h1>
            <h2>My  Name is {this.state.name}</h2>
            <p>I am {this.state.age} years old</p>
            <h3>I am form {this.state.city}</h3>
            <img src={this.state.image} alt='no image'
            height="200px" width="300px"/>
<button onClick={()=>this.changeContent()}>Change State</button>
          <button onClick={()=>this.previousSate()}>Previuos state</button>
            </>
        )
    }
}

export default Example3
