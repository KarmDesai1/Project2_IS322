import React from 'react';


function AddTask(props) {
    const {task, item} = props;

    return(
        <div className={'task'}>
            <h1>Add Task</h1>


        </div>
    )

}

class AddTask extends React.Component {
    state = {
        title: '',
        type: 'task'
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({
            title: this.state.title,
            type:   this.state.type
        });
    }
    render() {
        return (
            <div className="addTask">
                <h2>Add Task</h2>
        
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <label for="Title">Title</label>
                    <input type="text" class="form-control" id="Title" aria-describedby="Title" placeholder="Title">
                    </input>
                    <small id="TitleHelp" class="form-text text-muted">What do you want your title to be?</small>
                </div>

                <div class="form-group">
                    <label for="typeSelect">Select your Task</label>
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

export default AddTask;
