import { useState } from 'react'
import { CreateNewTask } from './components/CreateNewTask'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import './global.css'

function App() {
  const [tasks, setTasks] = useState([])

  

  function getNewTask(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <Header />
      <main>
        <CreateNewTask onGetNewTask={getNewTask} />
        <TaskList taskList={tasks}/>
      </main>
      <Footer />      
    </div>
  )
}

export default App
