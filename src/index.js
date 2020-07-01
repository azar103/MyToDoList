import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const tasks = [
  {
       id: 0,
       taskName: 'Swimming'
  },
  {
      id: 1,
      taskName: 'Studying'
  },
  {
      id: 2,
      taskName: 'Watchig Movie'
  } 
]
ReactDOM.render(
  <React.StrictMode>
    <App data={tasks}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
