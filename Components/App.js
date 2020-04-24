import React from 'react';
import axios from 'axios';

import NavBar from './NavBar'
import taskList from './taskList'
import taskGridView from './taskGridView';
import addTask from './addTask';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

class App extends React.Component{
    state= {
        see: 'grid',
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
    //API Request to JSON File
    //JSON file located in Git HUB
    getData(){
        axios.get('http://my-json-server.typicode.com/KarmDesai1/project2DB/')
            .then(response => {
                this.setState({task: response.data});
            }).catch(error => {
            this.setState({errorMessage: error.message});
        })
    }

    onAddTask = (taskName) => {
        let tasks =this.state.tasks;
        tasks.push({
            title: taskName
        })

    }
    sortTask(task){
        return {
            todo: task.filter(post => post.column === 'To do'),
            inProgress: task.filter(post => post.column === 'In Progrgress'),
            review: task.filter(post => post.column === 'Rewiew'),
            done: task.filter(post => post.column === 'Done'),
        }
    }
    onTaskUpdate(task){
        let { allTasks } = this.state;
        
        task.column = 'todo';
        task.id =this.state.allTasks.lenght + 1;

        allTasks.push(task);
        let sortedTasks = this.sortTask(allTasks);
        this.setState({ allTasks, sortedTasks, view: 'grid'});
    }
    wrapPage(jsx) {
        const { see } =this.state;
        return (
            <div className="container">
                <NavBar currentView={see}
                    onPageChange={this.onPageChange.bind(this)}/>
                    {jsx}
            </div>
        );
    }
    onPageChange(see) {
        this.setState({see});
    }

    render() {
        const{see} =this.state;

        switch(see){
            case 'listView':
                return(this.wrapPage(
                    <listView task={this.state.allTasks}/>
                ))
                break;
            case 'gridView':
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
                        <h1 style={{color: "red"}}>Some thing went wrong</h1>
                    ))
    
        }


    }


    
}

export default App;