import React, { Component } from 'react'
import axios from 'axios'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3003/tasks")
        .then(response => {
            console.log(response.data)
            this.setState({ tasks: response.data.tasks });
          })
    }

    render() {

        const {error, tasks } = this.state;

        if (error) {
            return (
                <div>
                    Error: {error.message}
                </div>
            );
        } else {
        return (
            <div>
                <h1>
                    Available Tasks: 
                </h1>
                {tasks.map(task => <div>{task.id}</div>)}
            </div>
        )
        }
    }
}

export default Counter