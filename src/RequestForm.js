import React, { Component } from "react"
import axios from "axios"


class RequestForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            latitude: "",
            longitude: "",
            task_type: ""
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
      };
    
    handleSubmit = (event) => {
        event.preventDefault()
        const {title, description, latitude, longitude, task_type} = this.state
        let task = {
          title: title,
          description: description,
          latitude: latitude,
          longitude: longitude,
          task_type: task_type
        }

            axios.post("http://localhost:3003/tasks", {task},
            { withCredentials: true }
            )
            .then(response => {
                if (response.data.status === 'created') {
                this.props.tasks(response.data);            
            }
        })        
            .catch(error => {
                console.log("request error", error);
            });
            event.preventDefault();
        };
        

    render() {
        return (
            <div className="Task">
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    required
                    />

                    <br/>

                    <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    required
                    />

                    <br/>

                    <input
                    type="decimal"
                    name="latitude"
                    placeholder="Latitude"
                    value={this.state.latitude}
                    onChange={this.handleChange}
                    required
                    />

                    <br/>

                    <input
                    type="decimal"
                    name="longitude"
                    placeholder="Longitude"
                    value={this.state.longitude}
                    onChange={this.handleChange}
                    required
                    />

                    <br/>

                    <div>

                        <input
                        type ="text"
                        name ="task_type"
                        placeholder="Material"
                        value = {this.state.task_type}
                        onChange = {this.handleChange} />
                 
                    </div>

                    <br/>

                    <button type="submit">Submit</button>

                </form>
            </div>
        );
    }
}

export default RequestForm