import { useState } from 'react'
import React from "react";
import TaskList from "./components/List"
import AddTask from './components/Add';
import './App.css'
import UpdateTask from './components/Update';

function App() {

  const [tasks, setTasks] = useState([])

  const handleTaskAdded = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask])
  }


  return (
      <div className="App">
        <AddTask onTaskAdded={handleTaskAdded}/>
        <TaskList tasks={tasks}/>
      </div>
  )
}

export default App
