import { TaskCounter } from './TaskCounter'
import { Task } from './Task'

import styles from './TaskList.module.css'

import clipboard from '../assets/clipboard.svg'


export function TaskList({ taskList, onDeleteTask, onSwitchCheck }) {    

    function onHandleDeleteTask (id) {
        onDeleteTask(id)
    }

    function onHandleSwitchCheck (id) {
        console.log(`TaskList.jsx ${id}`)
        onSwitchCheck(id)
    }

    return (
        <div className={styles.container}>
            <TaskCounter taskListCounter={taskList} />

            {taskList.length === 0 ?
                <div className={styles.emptyContainer}>
                    <img src={clipboard} alt="Prancheta" />
                    <div className={styles.emptyText}>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                 </div>
            : 
                <div className={styles.tasksContainer}>    
                    {taskList.map(task => {
                        return(
                            <Task 
                                id={task.id}
                                key={task.id}
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