import React, { useEffect } from 'react'
import Task from './Task'



function TasksList({tasks, removeTask, changeCheckBox, checkBoxValue}) {

    return(
        tasks.map((task, index) => <Task
            key={index}
            task={task}
            removeTask = {removeTask}
            changeCheckBox={changeCheckBox}
            checkBoxValue={checkBoxValue}
           /> )
    )
}
   




export default TasksList