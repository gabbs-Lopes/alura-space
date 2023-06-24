import React from 'react'
import home from '../../assets/icones/home-ativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreendaMe from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './menu.module.scss'
import icones from './icones.json';
import Icone from './Icone'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="ícone home" />
                <a href="">Início</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisVistas} alt="ícone mais vistas" />
                <a href="">Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisCurtidas} alt="ícones mais curtidas" />
                <a href="">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={novas} alt="ícones novas" />
                <a href="">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpreendaMe} alt="ícone surpreenda-me" />
                <a href="">Supreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
