import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import TasksList from './TasksList';


function App() {

  const [tasks, setTasks] = useState([])

  function addTask(dataValue) {

      setTasks([...tasks, {
        id: tasks.length,
        taskName: dataValue
      }])

      dataValue = "";
    
  }

  function removeTask(dataValue) {
    const tasksRemoved = tasks.filter(task => task.taskName !== dataValue )
    setTasks(tasksRemoved)
  }

  function editTask() {

  }
  return (
    
    <div className="container">
       <Header tasks={tasks}
          addTask={addTask}

       />
       <TasksList tasks={tasks}
          removeTask = {removeTask}
       />
    </div>
  );
}

export default App;
