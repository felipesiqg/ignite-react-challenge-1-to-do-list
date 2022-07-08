import { EmpityList } from './EmptyList'
import { ListWithAtLeastOneTask } from './ListWithAtLeastOneTask'
import { TaskCounter } from './TaskCounter'
import styles from './TaskList.module.css'

export function TaskList() {
    return (
        <div className={styles.container}>
            <TaskCounter />
            <ListWithAtLeastOneTask />
            <EmpityList />
        </div>
    )
}