import { EmpityList } from './EmptyList'
import { ListWithAtLeastOneTask } from './ListWithAtLeastOneTask'
import { TaskCounter } from './TaskCounter'
import styles from './TaskList.module.css'

export function TaskList({taskList}) {    

    return (
        <div className={styles.container}>
            <TaskCounter onTaskList={taskList}/>
            {taskList.length === 0 ? <EmpityList /> : <ListWithAtLeastOneTask onTaskList={taskList}/>}

        </div>
    )
}