import { CheckCircle, Circle, Trash } from 'phosphor-react'

import styles from './Task.module.css'

export function Task({content}) {
    return(
        <div className={styles.taskContainer}>
            <button>
                <Circle size={17.45} color="var(--blue-300)"/>
            </button>        
            
            <p>{content}</p>
            
            <button title='Deletar comentário'>
                <Trash size={14} color="var(--gray-300)" />
            </button>
        </div>
    )
}