// Here is a React event listening method where we count a number of subscribers

import React, { Component } from 'react'

class Count extends Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    updateName() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <p>Counter: {this.state.count}</p>
                <button onClick={() => this.updateName()}>Subscribe</button>
            </div>
        )
    }
}

export default Count