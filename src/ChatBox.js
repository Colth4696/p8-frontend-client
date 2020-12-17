import React, { Component } from 'react'
import axios from 'axios'

class ChatBox extends Component {
  constructor() {
    super()
    this.state = { 
      message: ""
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit= (event) => {
    event.preventDefault()
    const { message } = this.state
    let chat = {
      message: message,
    }

    axios.post("http://localhost:3003/chats", { chat },
      { withCredentials: true }
    )
    .then(response => {
      if (response.data.status === 'created') {
      this.props.chats(response.data);            
  }
})        
  .catch(error => {
      console.log("request error", error);
  });
  event.preventDefault();
};

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        name="message"
        placeholder="message"
        value={this.state.message}
        onChange={this.handleChange}
        required />
        
        <br />

        <button type="submit">Send</button>
      </form>
      </div>
    )
  }
}

export default ChatBox