import styles from './TaskCounter.module.css'

export function TaskCounter({taskListLength}) {
    return(
        <div className={styles.counterContainer}>
            <p>
                <strong className={styles.counterDescription}>
                    Tarefas criadas
                </strong>
                <span className={styles.counter}>
                    {taskListLength}
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