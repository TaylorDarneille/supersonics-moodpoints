import React, { Component } from 'react'


class Title extends Component {
    render() {
        return (
            <header>
                <h1>Hello {this.props.name}, you are {this.props.age}</h1>
                <button onClick={this.props.getOld}>Age Me!</button>
            </header>
        )
    }
}

export default Title