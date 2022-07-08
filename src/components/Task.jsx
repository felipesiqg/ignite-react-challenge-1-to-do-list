import { CheckCircle, Circle, Trash } from 'phosphor-react'

import styles from './Task.module.css'

export function Task() {
    return(
        <div className={styles.taskContainer}>
            <Circle size={17.45} color="var(--blue-300)"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  odeleniti</p>
            <Trash size={14} color="var(--gray-300)"/>

        
        </div>
    )
}