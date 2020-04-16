import React from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import AddTask from './AddTask';

class App extends React.Component{
    state= {
        task: [],
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
}

export default App;
