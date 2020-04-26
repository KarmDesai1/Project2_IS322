import React from 'react';
import axios from 'axios';

import NavBar from './NavBar';
import taskList from './taskList';
import addTask from './addTask';

import 'bootstrap/dist/css/bootstrap-grid.min.css';

class App extends React.Component{
    state= {
        view: 'grid',
        allTask: [],
        sortTask: {
            todo: [],
            inProgress: [],
            review: [],
            done: []
        },
        errorMessage: ''
    }
    componentDidMount() {
        this.getData();
    }
    getData(){
        //API request to JSON Server
        axios.get('http://my-json-server.typicode.com/KarmDesai1/project2DB/')
            .then(response => {
                this.setState({task: response.data});
            }).catch(error => {
            this.setState({errorMessage: error.message});
        });
    }
    onAddTask = (tasksName) => {
        let tasks =this.state.tasks;
        tasks.push({
            title: tasksName,
            id: this.state.task.length +1,
            type: typeName,
            column:'todo'
        });
        this.setState({task});
    }
    orderBy(sortValue){
        return {
            todo: task.filter(post => post.column === 'To do'),
            inProgress: task.filter(post => post.column === 'In Progrgress'),
            review: task.filter(post => post.column === 'Rewiew'),
            done: task.filter(post => post.column === 'Done'),
        }
    }

    wrapPage(jsx) {
        const {view} =this.state;
        return (
            <div className="container">
                <NavBar currentView={view}>
                    onViewChange={this.onViewChange.bind(this)}
                    {jsx}
                </NavBar>
            </div>
        );
    }

    render() {
        const{tab} =this.state;
        <div>
        <Media queries={{
          Phone: "(max-width: 411px)",
          small_desktop: "(min-width: 768px) and (max-width: 1024px)",
          large_desktop: "(min-width: 1366px)",
          tablet: "(max-width: 768)"
        }}>
          {matches => (
            <Fragment>
              {matches.Phone && <p>I am Phone</p>}
              {matches.small_desktop && <p>I am medium!</p>}
              {matches.large_desktop && <p>I am large!</p>}
              {matches.tablet && <p>I am Tablet</p>}
            </Fragment>
          )}
        </Media>
      </div>
        switch(tab){
            //Controls the component Views
            //Use conditional rendering to protray the effect of diffrent "Pages"
            case 'listView':
                return(this.wrapPage(
                    <listView task={this.state.allTasks}/>
                ))
                break;
            case 'taskgridView':
                return(this.wrapPage(
                    <taskGridView task={this.state.sortedTasks} onUpdateTask={(task)=> this.onUpdateTask(task)} />  
                ))
                break;
            case 'addTask':
                return(this.wrapPage(
                    <addTask onSubmit={this.onAddTask.bind(this)}/>
    
                ))
                break;
            default:
                    return (this.wrapPage(
                        <h1> style ={{color: "red"}}Something went wrong </h1>
                        //Displays error Message if something is wrong
                    ))
    
        }

    }
    
}

export default App;