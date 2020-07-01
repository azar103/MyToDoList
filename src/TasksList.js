import React, { useEffect } from 'react'
import Task from './Task'



function TasksList({tasks, removeTask}) {

    return(
        tasks.map((task, index) => <Task
            key={index}
            task={task}
            removeTask = {removeTask}
           /> )
    )
}
   




export default TasksList