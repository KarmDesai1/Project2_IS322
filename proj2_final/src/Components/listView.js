import React from 'react';

import ListItem from './ListItem';
import filterList from './filterList';

class listView extends React.Component{
  state = {
    sort: 'title',
    status: '',
    type: ''
  }

  onSortChange(sort) {
    this.setState({ sort });
  }

  onStatusChange(status) {
    this.setState({ status });
  }

  onTypeChange(type) {
    this.setState({ type });
  }

  getFilteredTasks () {
    let { tasks } = this.props;
    let { status, type, sort } = this.state;

    if (!!status) {
      tasks = tasks.filter(task => {
        return task.column === status;
      });
    }

    if (!!type) {
      tasks = tasks.filter(task => {
        return task.type === type;
      });
    }

    tasks = tasks.sort((a, b) => {
      let nameA = a[sort].toUpperCase();
      let nameB = b[sort].toUpperCase();

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
    })

    return tasks;
  }

  render() {
    const filteredTasks = this.getFilteredTasks();
    const listItems = filteredTasks.map(task => {
      return <ListItem title={task.title}
                       key={task.id}
                       type={task.type}
                       column={task.column}
                       id={task.id}/>
    })

    return (
      <div className="list-view">
        <filterList onSortChange={this.onSortChange.bind(this)}
                     onStatusChange={this.onStatusChange.bind(this)}
                     onTypeChange={this.onTypeChange.bind(this)} />
        <div className="list-view_headers">
          <h3 className="list-view_title">
            Title
          </h3>
          <h3 className="list-view__header-columnName">
            Status
          </h3>
          <h3 className="list-view__header-type">
            Type
          </h3>
        </div>
        <ul className="list-group">
          {listItems}
        </ul>
      </div>
    );
  }
}

export default listView;