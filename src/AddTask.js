import React from 'react';
import Prop from "prop";

function AddTask(props) {
    const {task, item} = props;

    return(
        <div className={`modal ${item ? 'is-active' : ''}`}>
<a href="#/" onClick={task}>
        <div className="modal-background" />
        </a>
    <div className="content">
        <div className="box">
            <h1 className="title is-4">New Task</h1>
            <div className="field">
                <label className="label" htmlFor="task-title">Title</label>
                <div className="control">
                    <input id="task-title" className="input" type="text" placeholder="Text input" />
                </div>
            </div>
            <div className="field">
                <label className="label" htmlFor="task-tag">Tag</label>
                <div className="control">
                    <input id="task-tag" className="input" type="text" placeholder="Text input" />
                </div>
            </div>
            <div className="field-body">
                <div className="field is-grouped is-grouped-right">
                    <div className="control">
                        <button className="button is-primary" type="button">
                            Add Task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
<a href="#/" onClick={task} className="modal-close is-large" aria-label="close" />
    </div>
);
}

AddTask.propTypes = {
    modalToggle: prop.func,
    visible: prop.bool,
};

AddTask.defaultProps = {
    modalToggle: () => { },
    visible: false,
};

export default AddTask;
