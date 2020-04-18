import React from 'react';
import Prop from 'prop';

function TaskItem(props) {
    const {task} = props;
    return (
        <div className={box}>
            <h2> className="title">{task.title}</h2>
            <h2> className ="subtitle">{task.sub}</h2>
        </div>
    )
}
TaskItem.prop = {
    task: Prop.oneOfType(PropTypes.object).isRequired,

}
export default TaskItem;
// note done