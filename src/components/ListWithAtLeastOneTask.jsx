import { Task } from "./Task";
import styles from "./ListWithAtLeastOneTask.module.css"

export function ListWithAtLeastOneTask() {
    return(
        <div className={styles.tasksContainer}>    
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    )
}