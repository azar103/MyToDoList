import React from 'react'

import './Task.css'

function Task({task, removeTask}) {

 
    return (
        <div className="task_container">
                <input type="checkbox" />
                <p contentEditable="true">{task.taskName}</p>
                <i className="fa fa-trash" 
                   onClick= {() => removeTask(task.taskName)}
                ></i>
        </div>
    )
}


export default Task