import React from 'react';
import taskItem from './taskItem';
import listView from './listView';

class taskList extends React.Component {
    state = {
        listView: '',
        sortBy: 'id'
    };

    orderBy(sortValue) {
        function compareValues(key, order = 'asc') {
            return function innerSort(a, b) {
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    return 0;
                }

                const varA = (typeof a[key] === 'string')
                    ? a[key].toUpperCase() : a[key];
                const varB = (typeof b[key] === 'string')
                    ? b[key].toUpperCase() : b[key];

                let comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return (
                    (order === 'desc') ? (comparison * -1) : comparison
                );
            };
        };
    };
    markDone = (task) => {
        const taskIndex = this.props.task.findIndex(t => t.id === task.id);
        let taskList = this.props.task;
        taskList.splice(taskIndex, 1);
        console.log(this.props);
        this.props.onUpdate(taskList);
    };

    onViewChange = (view) => {
        this.setState.bind({ view });
    }

    wrapPage = (jsx) => {
        const { listView } = this.state;
        return (
            <div className="container">
                <listView currentView={listView} orderBy={this.orderBy} />
                {jsx}
            </div>
        );
    }
    render() {
        const taskItem = this.props.task.map(task => {
            return <taskItem task={task} key={task.id} markDone={this.markDone} />
        });

        const { view } = this.state;

        return (this.wrapPage(
            <ul className="task-list list group">
                {taskItem}
            </ul>
        ));
        
    };
}
export default taskList;
