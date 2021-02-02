import './App.css';
import React, { Component } from 'react'
import Title from './Title'

// const name = "Anna"

class Hello extends Component {
  // constructor(props) {
  //   super()

  //   this.state = {
  //     moodPoints: 1
  //   } 
  // }
  state = {
    moodPoints: 1,
    age: 0
  }

  getOld = () => {
    this.setState({age: this.state.age+1})
  }

  increaseMood = () => {
    // console.log("increasing mood!")
    // this.setState({moodPoints: this.state.moodPoints+1})
    let newMoodPoints
    if(this.state.moodPoints>=10){
      newMoodPoints = 1
    } else {
      newMoodPoints = this.state.moodPoints +1
    }
    this.setState({moodPoints: newMoodPoints})
  }

  render() {
    return (
      <>
        <Title 
          name={"Taylor"} 
          age={this.state.age}
          getOld={this.getOld}
        />
        <p>On a scale of 1-10:</p>
        <p>You are this happy: {this.state.moodPoints}</p>
        <p>Pretty good mood for being an entire {this.state.age} years old, eh?</p>
        <button onClick={this.increaseMood}>Cheer up!</button>
      </>
    )
  }
}

export default Hello
