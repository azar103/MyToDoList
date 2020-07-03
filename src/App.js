import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import TasksList from './components/TasksList';


function App() {

  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  function addTask(dataValue) {

      setTasks([...tasks, {
        id: tasks.length,
        taskName: dataValue
      }])
      setInputValue('')
  }

  function changeInputValue(e) {
    setInputValue(e.target.value)
}

  function removeTask(dataValue) {
    const tasksRemoved = tasks.filter(task => task.taskName !== dataValue )
    setTasks(tasksRemoved)
  }



  return (
    
    <div className="container">
       <Header tasks={tasks}
          addTask={addTask}
          onChange = {changeInputValue}
          inputValue={inputValue}
       />
       <TasksList tasks={tasks}
          removeTask = {removeTask}

       />
    </div>
  );
}

export default App;
