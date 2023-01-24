import React, { Component } from 'react'



export default class Profile extends Component {

    constructor(props){
        super(props)
        this.state={myTitle: this.props.title}
    }

    changeMyTitle = () => {
        //change title to Hello
        this.setState({myTitle:"Profile Quotes"})
    }

  render() {
    return (
      <div className="profile-container">
        {/* <h1>{this.props.title}</h1> */}
        <h1>{this.state.myTitle}</h1>
        <img src={this.props.image}/>
        <p>{this.props.quote}</p>
        <button onClick={this.props.changeTitle}>Change Parent's Titile</button>
        <button onClick={this.props.changeMyTitle}>Change My Title</button>
      </div>
    )
  }
}
