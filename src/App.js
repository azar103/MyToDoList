import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import TasksList from './TasksList';


function App() {

  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [checkBoxValue, setCheckBoxValue] = useState(true)
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

  function changeCheckBox() {
       setCheckBoxValue(!checkBoxValue)
       console.log(checkBoxValue)
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
          changeCheckBox = {changeCheckBox}
          checkBoxValue={checkBoxValue}
       />
    </div>
  );
}

export default App;
