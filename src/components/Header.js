import React, {useState} from 'react'
import './Header.css'

function Header({tasks, addTask, onChange, inputValue}) {

 
  return(
    <div className="header-container">
    <div className="lengthOfTasks">
    <h2>Today</h2>
    <p id="length">{tasks.length} tasks</p>
    </div>
    <input type="text" 
         value={inputValue}
         placeholder="Add New Task..." 
         onChange={(x) => onChange(x)}
          
         />
    <button
      onClick={() => addTask(inputValue)}
    > Add</button>
</div>   
  )
}


export default Header