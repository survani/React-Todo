//TODO => Complete Persist your data
//TODO => Search Functionality
//TODO => Hosting

import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";

import TodoForm from "./components/TodoComponents/TodoForm";

//data for the todo app. It generates only this few task
//but the user can later add tasks. It will add it to the list if tasks.

const tasks = [
  {
      id: 1,
      task: 'Workout',
      completed: false

  },
  {
      id: 2,
      task: 'Walk Dogs',
      completed: false

  },
  {
      id: 3,
      task: 'Grocery Shopping',
      completed: false

  }
]

//end of data 

class App extends React.Component {
  // [x] you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super ();
    this.state = {
      taskList: tasks
    };
  }

    // Methods

  addNewTask = newTaskName => {
    const newState = {
      //spreads the state here
      ...this.state,
      taskList: [
        ...this.state.taskList,
        { task: newTaskName, completed: false, id: Date.now() }
      ]
    };
    this.setState(newState);
  };


  toggleCompleted = id => {

    //Checking to see if it grabs the correct id => task.
    console.log('toggle: id', id);

    const newState = {
      //spreads the state here
      ...this.state,
      taskList: this.state.taskList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    };
    this.setState(newState);
  }

  clearCompleted = () => {
    const newState = {
      //spreads the state here
      ...this.state,
      taskList: this.state.taskList.filter(task => {
        return !task.completed;
      })
    }
    this.setState(newState);
  }

  // end of methods

  render() {
    return (
      <React.Fragment>
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTask={this.addNewTask} />
      </div>
      <TodoList
      tasks={this.state.taskList}
      toggleCompleted = {this.toggleCompleted}
      clearCompleted = {this.clearCompleted}
      />
      </React.Fragment>
    );
  }
}

export default App;
