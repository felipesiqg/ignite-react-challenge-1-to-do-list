import plusSign from '../assets/plusSign.svg'
import styles from './CreateNewTask.module.css'
import { useState } from 'react'

export function CreateNewTask({onGetNewTask}) {
    const [newTaskText, setNewTaskText] = useState('')
    const [newTask, setNewTask] = useState('')

    function handleCreateNewTask(){
        event.preventDefault()
        console.log(newTaskText)
        setNewTask(newTaskText)
        setNewTaskText('')  
        onGetNewTask(newTask)
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