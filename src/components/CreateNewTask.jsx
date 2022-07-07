import plusSign from '../assets/plusSign.svg'
import styles from './CreateNewTask.module.css'

export function CreateNewTask() {
    return(
        <form className={styles.form} >
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button type="submit">
                    Criar 
                    <img src={plusSign} />
            </button>
        </form>
    )
}