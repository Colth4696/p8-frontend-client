import React, { Component } from "react"
import MyMapComponent from "../MapContainer"
import AccordionMenu from "./Accordion"
import Counter from "./Counter"
import Footer from "../Footer"


class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      users: [], tasks: [], chats: []
    }
  }

  render() {
    return (
      <div className="Dashboard">
        <AccordionMenu tasks={this.state.tasks} chats={this.state.chats} />
        <MyMapComponent tasks={this.props.tasks} user={this.props.user} />
        <Counter tasks={this.state.tasks} user={this.props.user} />
        <Footer />
      </div>

    );
  }
}

export default Dashboard; 