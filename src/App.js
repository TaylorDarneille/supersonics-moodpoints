import './App.css';
import React, { Component } from 'react'
import Title from './Title'

const name = "Anna"

class Hello extends Component {
  constructor(props) {
    super()

    this.state = {
      moodPoints: 1
    } 
  }

  render() {
    return (
      <div>
        <Title name={name} />
        <p>On a scale of 1-10:</p>
        <p>You are this happy: {this.state.moodPoints}</p>
      </div>
    )
  }
}

export default Hello
