import React,{Component} from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos:[
      {
        id: 1,
        title: 'Prepare for Deloitte Interview',
        completed: false
      },
      {
        id: 2,
        title: 'Create React App',
        completed: false
      },
      {
        id: 3,
        title: 'Do laundry',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete=(id)=>{
    this.setState({todos: this.state.todos.map(todo=> {
      if(todo.id === id) {
        todo.completed=!todo.completed
      }
      return todo;
    })});
  }

  delTodo=(id)=>{
    this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]});
  }

  render() { 
    console.log(this.state.todos) 
    return (
      <div className="App">
        <Header></Header>
        <Todos todos={this.state.todos} markComplete={this.markComplete}
        delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
