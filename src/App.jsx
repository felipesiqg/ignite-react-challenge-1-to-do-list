import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { CreateNewTask } from './components/CreateNewTask'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import './global.css'

function App() {
  const [tasks, setTasks] = useState([])

  function getNewTask(newTask) {
    const getId = uuidv4()
    setTasks([...tasks, 
      {
        key: getId,
        id: getId,
        isTaskComplete: false,
        taskName: newTask
      }
    ])
    console.log(tasks)
  }

  function switchCheck(taskToCheck) {
    console.log(`App.jsx ${taskToCheck}`)


    const tasksSwitched = tasks.map(task => {
      console.log(`Task.jsx ${task}`)

      return(
        task.id === taskToCheck ?  
          {
            key: task.id,
            id: task.id,
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
