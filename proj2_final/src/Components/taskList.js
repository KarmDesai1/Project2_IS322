import React from 'react';
import taskItem from './taskItem';
import listView from './listView';

class taskList extends React.Component {
    state = {
        listView: '',
        sortBy: 'id'
    };

    orderBy(listView) {
        this.setState({sortBy: listView});

        if (listView === 'name' || listView === 'view'){
            let key = (listView === 'name') ? 'title' : listView;

            this.props.task.sort((a,b) => {
                console.log(a,b);
                const nameA = a[key].toUpperCase();
                const nameB = b[key].toUpperCase();
                if(nameA > nameB){
                    return 1;
                }
                if (nameA < nameB){
                    return -1;
                }
            });
        }

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
