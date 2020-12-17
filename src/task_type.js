import React, { Component } from 'react';

class TaskType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task_type: []
    };
  }

  componentDidMount() {
    this.setState({
      task: [
        {task_type: "Material"},
        {task_type: "One-Time"}
      ]
    });
  }


  render () {
    const { task } = this.state;

    let taskList = task
    	&& task.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.task_type}</option>
      )
    }, this);

    return (
      <div>
        <select>
          {taskList}
        </select>
      </div>
    );
  }
}

export default TaskType;