import React, {useState} from 'react'
import './Header.css'

function Header({tasks, addTask}) {
  const [inputValue, setInpuValue] = useState('')
  function changeInputValue(e) {
        setInpuValue(e.target.value)
  }
 
  return(
    <div className="header-container">
    <div className="lengthOfTasks">
    <h2>Today</h2>
    <p id="length">{tasks.length} tasks</p>
    </div>
    <input type="text" 
         value={inputValue}
         placeholder="Add New Task..." 
         onChange={changeInputValue}
         />
    <button
      onClick={() => addTask(inputValue)}
    > Add</button>
</div>   
  )
}


export default Header