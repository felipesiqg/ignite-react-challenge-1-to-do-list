import { CreateNewTask } from './components/CreateNewTask'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import './global.css'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CreateNewTask />
        <TaskList />
      </main>
      <Footer />      
    </div>
  )
}

export default App
