import { useState } from 'react';
import styles from './TaskCounter.module.css'

export function TaskCounter({taskListCounter}) {
    
    const sumCompleteTask = taskListCounter.reduce(
        (sum, task) => task.isTaskComplete === true ? sum + 1 : sum,
        0
        );
        
    return(
        <div className={styles.counterContainer}>
            <p>
                <strong className={styles.counterDescription}>
                    Tarefas criadas
                </strong>
                <span className={styles.counter}>
                    {taskListCounter.length}
                </span>
            </p>
            <p>
                <strong className={styles.counterDescription}>
                    Concluídas
                </strong>
                <span className={styles.counter}>
                    {sumCompleteTask}
                </span>
            </p>
        </div>
    )
}