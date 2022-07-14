import { CheckCircle, Circle, Trash } from 'phosphor-react'

import styles from './Task.module.css'

export function Task({ content, isTaskComplete, onDeleteTask, onSwitchCheck }) 
{
    function handleDeleteTask() {
        onDeleteTask(content)
    }

    function handleSwitchCheck() {
        console.log(`handleSwitchCheck ${content}`)
        onSwitchCheck(content)
    }

    return(
        <div className={styles.taskContainer}>
            <button  onClick={handleSwitchCheck}>
                {isTaskComplete ? <CheckCircle weight='fill' size={17.45} color="var(--blue-300)" /> : <Circle size={17.45} color="var(--blue-300)" /> }
            </button>        
            
            <p>{content}</p>
            
            <button title='Deletar comentário' onClick={handleDeleteTask}>
                <Trash size={14} color="var(--gray-300)" />
            </button>
        </div>
    )
}