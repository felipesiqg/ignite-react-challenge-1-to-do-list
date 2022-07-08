import { CheckCircle, Circle, Trash } from 'phosphor-react'

import styles from './Task.module.css'

export function Task() {
    return(
        <div className={styles.taskContainer}>
            <button>
                <Circle size={17.45} color="var(--blue-300)"/>
            </button>        
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  odeleniti</p>
            
            <button title='Deletar comentário'>
                <Trash size={14} color="var(--gray-300)" />
            </button>
        </div>
    )
}