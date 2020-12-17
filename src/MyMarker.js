
import React from "react"
import { Marker, InfoWindow } from "react-google-maps"
import RedIcon from "./red-user-icon.png"
import GreenIcon from "./green-home-icon.png"
import "./MyMarker.css"
import Chat from "./Chat"


class MyMarker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { flag: false }
  }

  toggle_open = () => {
    this.setState({ flag: !this.state.flag })
  }

  getIcon = () => {
    if (this.props.task.task_type === "Material" ) { return RedIcon }
    else { return GreenIcon }
  }
  

  render() {

    const MarkStyle = {
      height: "30px",
      width: "30px"
    }

    return (
      <div>
        <Marker
          style={MarkStyle}
          position={this.props.position}
          onClick={this.toggle_open}
          icon={this.getIcon()}>

          {this.state.flag && <InfoWindow onCloseClick={this.toggle_open}>

            <div>
              <h4>Task ID:{this.props.task.id}</h4>
              <h4>Requester ID:{this.props.task.user_id}</h4>
              <h1>{this.props.task.title}</h1>
              <h3>{this.props.task.description}</h3>
              <Chat />
            </div>
          </InfoWindow>}
        </Marker>
      </div>
    )
  }
}

export default MyMarker