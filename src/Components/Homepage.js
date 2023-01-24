import React, { Component } from 'react'
import Profile from './Profile';


export default class Homepage extends Component {
    //create state
    constructor(){
        super()
        this.state={
            title: "Quotes",
            url_one: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            url_two: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            quote_one: "",
            quote_two: ""
        }


        }//end of constructor
        changeTitle = () =>{
            this.setState({title: "My Quotes"})
    }

    componentDidMount(){
        console.log("homepage loaded")
        //connect to api to get some quotes
        fetch("https://api.quotable.io/quotes")
        .then(res => res.json())
        .then(res =>{
            console.log(res.results)
            //pick two quote to save in state
            this.setState({
                quote_one: res.results[0].content,
                quote_two: res.results[1].content
            })
        })
        .catch(err => console.log(err))
    }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Profile image={this.state.url_one}
                title={this.state.title}
                changeTitle={this.changeTitle}
                quote={this.state.quote_one} />
        <Profile image={this.state.url_two}
                title={this.state.title}
                changeTitle={this.changeTitle}
                quote={this.state.quote_two}  />

      </div>
    )
  }
}
