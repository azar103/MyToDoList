import React, {useState} from 'react'

import './Task.css'

function Task({task, removeTask}) {
  const [checkBoxValue, setCheckBoxValue] = useState(false)
      
    return (
        <div className="task_container">
                <input type="checkbox" 
                 onChange={() => setCheckBoxValue(!checkBoxValue)}
                />
               {
                 checkBoxValue === true ?
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