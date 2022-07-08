import { Laptop } from 'phosphor-react'
import styles from './Footer.module.css'

export function Footer() {
    return(
        <footer>
            <Laptop size={20}/>
            <strong>
                Feito por
                <a 
                    href="https://github.com/felipesiqg" 
                    target="_blank"
                >
                    Felipe Siqueira
                </a>
            </strong>
        </footer>
    )
}