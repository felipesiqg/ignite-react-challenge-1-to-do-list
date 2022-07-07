import { CreateNewTask } from './components/CreateNewTask'
import { Header } from './components/Header'
import './global.css'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CreateNewTask />
      </main>
      
    </div>
  )
}

export default App
