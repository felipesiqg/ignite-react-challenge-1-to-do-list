import { useState } from 'react'
import { CreateNewTask } from './components/CreateNewTask'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import './global.css'

function App() {
  const [tasks, setTasks] = useState([])

  function getNewTask(newTask) {
    setTasks([...tasks, 
      {
        key: newTask,
        isTaskComplete: false,
        taskName: newTask
      }
    ])
  }

  function switchCheck(taskToCheck) {
    console.log(`switchCheck ${taskToCheck}`)
    const tasksSwitched = tasks.map(task => {
      return(
        task.key === taskToCheck ?  
          {
            key: task.key,
            isTaskComplete: !task.isTaskComplete,
            taskName: task.taskName
          }
        : 
          task
      )
    })
    setTasks(tasksSwitched)
  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return ( 
        task.key !== taskToDelete
      )
    })

    setTasks(tasksWithoutDeletedOne)
}

  return (
    <div className="App">
      <Header />
      <main>
        <CreateNewTask onGetNewTask={getNewTask}/>
        <TaskList taskList={tasks} onDeleteTask={deleteTask} onSwitchCheck={switchCheck}/>
      </main>
      <Footer />      
    </div>
  )
}

export default App
