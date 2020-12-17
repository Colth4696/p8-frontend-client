import React from "react";
import MyMarker from "./MyMarker"
import axios from "axios";

class RequestMarkers extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: []
  }
};

componentDidMount() {
 axios.get("http://localhost:3003/tasks")
  .then(response => {
    console.log(response.data)
    this.setState({ tasks: response.data.tasks });
  })
  }

  render() {
    return (
      <div>
        {this.state.tasks && this.state.tasks.map(task => {
          return (<MyMarker position={{ lat:+task.latitude, lng:+task.longitude }}
            title={task.title} 
            description={task.description}
            task={task}
            key={task.id} 
            task_id={task.id}
            user={this.props.user} />)
        })
        }
      </div>
    )
  }
}

export default RequestMarkers;


// tasks.find_by(owner_id: session_params[:userid])
// rewrite callbacks to use async await for axios 
// setState feature
