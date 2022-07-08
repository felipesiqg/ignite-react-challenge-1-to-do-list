import clipboard from '../assets/clipboard.svg'
import styles from './EmptyList.module.css'

export function EmpityList() {
    return(
        <div className={styles.emptyContainer}>
            <img src={clipboard} alt="Prancheta" />
            <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}