import plusSign from '../assets/plusSign.svg'
import styles from './CreateNewTask.module.css'
import { useState } from 'react'

export function CreateNewTask() {
    const [tasks, setTasks] = useState(['Estudar React', 'Finalizar Projeto ToDo', 'Mercado', 'Janta'])

    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateNewTask(){
           event.preventDefault()

           setTasks([... tasks, newTaskText])
           setNewTaskText('')  
   }

   function handleNewTaskChange() {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
    }

    function handleNewTaskInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    return(        
        <form onSubmit={handleCreateNewTask} className={styles.form} >
            <input 
                type="text" 
                value={newTaskText}
                placeholder="Adicione uma nova tarefa"
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                required
            />
            <button type="submit">
                    Criar 
                    <img src={plusSign} />
            </button>
        </form>
    )
}