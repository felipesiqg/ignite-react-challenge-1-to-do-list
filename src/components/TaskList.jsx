import { TaskCounter } from './TaskCounter'
import { Task } from './Task'

import styles from './TaskList.module.css'

import clipboard from '../assets/clipboard.svg'


export function TaskList({ taskList, onDeleteTask, onSwitchCheck }) {    

    function onHandleDeleteTask (content) {
        onDeleteTask(content)
    }

    function onHandleSwitchCheck (content) {
        console.log(`onHandleSwitchCheck ${content}`)

        onSwitchCheck(content)
    }

    return (
        <div className={styles.container}>
            <TaskCounter taskListLength={taskList.length}/>

            {taskList.length === 0 ?
                <div className={styles.emptyContainer}>
                    <img src={clipboard} alt="Prancheta" />
                    <div>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                 </div>
            : 
                <div className={styles.tasksContainer}>    
                    {taskList.map(task => {
                        return(
                            <Task 
                                key={task.taskName}
                                content={task.taskName}
                                isTaskComplete={task.isTaskComplete}
                                onDeleteTask={onHandleDeleteTask}
                                onSwitchCheck={onHandleSwitchCheck}
                            />
                        )
                    })}
                </div>}

        </div>
    )
}