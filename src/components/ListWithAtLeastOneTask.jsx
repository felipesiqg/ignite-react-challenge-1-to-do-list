import { Task } from "./Task";
import styles from "./ListWithAtLeastOneTask.module.css"

export function ListWithAtLeastOneTask({onTaskList}) {
    console.log(onTaskList)
    return(
        <div className={styles.tasksContainer}>    
            {onTaskList.map(task => {
                return(
                    <Task 
                        key={task}
                        content={task}
                    />
                )
            })}
        </div>
    )
}