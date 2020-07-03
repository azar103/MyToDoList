import React from 'react'

import './Task.css'

function Task({task, removeTask, changeCheckBox,checkBoxValue}) {

 
    return (
        <div className="task_container">
                <input type="checkbox" 
                  onChange={() => changeCheckBox()}
                />
                {
                    checkBoxValue === false ?
               <p contentEditable="true"
                 className="through"
                >{task.taskName}</p>
                :
                <p contentEditable="true"
                >{task.taskName}</p>
                }
                
                <i className="fa fa-trash" 
                   onClick= {() => removeTask(task.taskName)}
                ></i>
        </div>
    )
}


export default Task