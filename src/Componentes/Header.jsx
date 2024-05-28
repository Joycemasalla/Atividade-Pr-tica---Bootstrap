import { Link} from 'react-router-dom'
import styles from './Header.module.css'

export function Header() {
  return (

    <header className={styles.header} >
      <ul className={styles.menu}>
        <li><Link className={styles.linkmenu} to="./Home2">HOME</Link></li>
        <li><Link className={styles.linkmenu} to="./Historia">SOBRE</Link></li>
        <li><Link className={styles.linkmenu} to="./Missao">MISSÃO</Link></li>
        <li><Link className={styles.linkmenu} to="./Produto">PRODUTOS</Link></li>
        <li><Link className={styles.linkmenu} to="./Contato">CONTATO</Link></li>
      </ul>
    </header>
  )
}
