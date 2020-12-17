import React, { Component } from 'react'
import ChatBox from './ChatBox'

const OpenRequest = ({ onClick }) => 
(
  <button className="accept" 
  onClick={onClick}>
    Help Me!
  </button>
)

const MessageBox = ({ onClick, task }) => 
(
  <div className="M-Form">
  <CloseBox onClick={onClick} task={task} />
  </div>
)

const CloseBox = ({ onClick, task }) => {
console.log(task)
return(
  <div>
    <ChatBox task={task}/>
  <button className="Close" 
  onClick={onClick}>X</button>
  </div>
)
}
class Chat extends Component{
  constructor(){
    super()
    this.state={
      showMessage: false, 
    }

    this.boundShowMessage = this.showMessage.bind(this)
    this.boundHideMessage = this.hideMessage.bind(this)
  }

    showMessage() {
      this.setState({ showMessage: true })
    }

    hideMessage() {
      this.setState({ showMessage: false })
    }

    render(){

      return(
        <div>
          <OpenRequest onClick={this.boundShowMessage}/>
          {this.state.showMessage && <ChatBox task={this.props.task}/>}
        </div>
      )
    }
}

export default Chat