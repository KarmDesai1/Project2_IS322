import React from 'react';
import PropTypes from 'prop-types';
import taskItem from './taskItem';


function taskGridView(props) {
  const { visible, tasks, moveTask } = props;

  return (
    <div className={`columns ${!visible ? 'is-hidden' : ''}`}>
      <div className="column">
        <h3 className="title is-3">To Do</h3>
        {tasks[0].map((item, indx) => (
          <taskItem task={item} col={0} indx={indx} moveTask={moveTask} />
        ))}
      </div>
      <div className="column">
        <h3 className="title is-3">In Progress</h3>
        {tasks[1].map((item, indx) => (
          <taskItem task={item} col={1} indx={indx} moveTask={moveTask} />
        ))}
      </div>
      <div className="column">
        <h3 className="title is-3">Review</h3>
        {tasks[2].map((item, indx) => (
          <taskItem task={item} col={2} indx={indx} moveTask={moveTask} />
        ))}
      </div>
      <div className="column">
        <h3 className="title is-3">Done</h3>
        {tasks[3].map((item, indx) => (
          <taskItem task={item} col={3} indx={indx} moveTask={moveTask} />
        ))}
      </div>
    </div>
  );
}

taskGridView.propTypes = {
  visible: PropTypes.bool,
  tasks: PropTypes.oneOfType(PropTypes.array).isRequired,
  moveTask: PropTypes.func.isRequired,
};

taskGridView.defaultProps = {
  visible: false,
};

export default taskGridView;

