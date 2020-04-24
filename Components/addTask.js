import React from 'react';
import axios from 'axios';

class addTask extends React.Component {
    state={
        newTask:'',
        newType:''
    }

onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
        newTask: this.state.newTask,
        newType:   this.state.newType
    });
}

render() {
    return (
        <div className="addTask">
            <h2>Add Task</h2>
    //Adds Task
        <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
                <label for="Title">Title</label>
                <input type="text" class="form-control" id="Title" 
                value={this.state.title}
                onSubmit={e => this.setState({title: e.target.value})} 
                aria-describedby="Title" placeholder="Title for Task">
                </input>
            </div>

            <div class="form-group">
                <label for="typeSelect">What Type of Task is this?</label>
                <select multiple class="form-control" id="typeSelect">
                    <option>Task</option>
                    <option>Select</option>
                    <option>Feature</option>
                    <option>Bug</option>
                    <option>Other</option>
                </select>
            </div>

            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                </input>
                <label class="form-check-label" for="exampleCheck1">Check the box to confirm the Task</label>
            </div>

            <button type="submitTask" class="btn btn-primary">Submit</button>
        </form>
        </div>
    );

}
}

export default addTask;
