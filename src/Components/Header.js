import React, { Component } from 'react'

export default class Header extends Component {

    constructor(){
        super()
        //define state
        this.state = {
            username: "John Doe",
            image_url: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    
        }
    }//end of constructor 

    //create a function to change the user
    changeUser = () =>{
        console.log("change")
        //change username state to another value
        this.setState({
            username:"Jane Smith",
            image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        })
    }


  render() {
    return (
        <div className="header-container">
                <div className="header-profile">
                    <p>{this.state.username}</p>
                    <img className="profile-img" src={this.state.image_url} />
                </div>
                <button onClick={this.changeUser}>Change User</button>
        </div>
    )
  }
}
