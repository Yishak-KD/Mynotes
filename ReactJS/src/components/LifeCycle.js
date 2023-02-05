import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Yishak"
        }
        console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount');
    }

    render() {
        console.log('Lifecycle render');
        return (
            <div>LifeCycle A</div>
        )
    }
}

export default LifeCycle;