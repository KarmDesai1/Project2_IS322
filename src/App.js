import React from 'react';
import NavBar from "./NavBar"
import axios from 'axios';
import TaskList from './TaskList';
import AddTask from './AddTask';
import TaskGrid from './TaskGrid';
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
            inProgress: task.filer(post => post.column === 'In Progrgress'),
            review: task.filter(post => post.column === 'rewiew'),
            done: task.filter(post => post.column === 'Done'),
        }
    }

    onAddTask(task){
        let { allTask } = this.state;
        
        task.column = 'todo';
        

    }

    
}

export default App;
