import styles from './TaskCounter.module.css'

export function TaskCounter({onTaskList}) {
    return(
        <div className={styles.counterContainer}>
            <p>
                <strong className={styles.counterDescription}>
                    Tarefas criadas
                </strong>
                <span className={styles.counter}>
                    {onTaskList.length}
                </span>
            </p>
            <p>
                <strong className={styles.counterDescription}>
                    Concluídas
                </strong>
                <span className={styles.counter}>
                    2
                </span>
            </p>
        </div>
    )
}