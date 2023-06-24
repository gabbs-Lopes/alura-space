import facebook from '../../assets/icones/facebook.svg'
import instagram from '../../assets/icones/instagram.svg'
import twitter from '../../assets/icones/twitter.svg'
import styles from './rodape.module.scss'

export default function Rodape() {
  return (
    <div className={styles.rodape}>
        <div className={styles.redesSociais}>
          <a
            href="https://www.facebook.com/AluraCursosOnline/"
            target="_blank"
            rel="noreferrer">
              <img src={facebook} alt="ícone do facebook" />
          </a>

          <a
            href="https://twitter.com/aluraonline?lang=en"
            target="_blank"
            rel="noreferrer">
              <img src={twitter} alt="ícone do twitter" />
          </a>

          <a
            href="https://www.instagram.com/aluraonline/?hl=en"
            target="_blank"
            rel="noreferrer">
              <img src={instagram} alt="ícone do instagram" />
          </a>
        </div>

        <p>Desenvolvido por Gabriel Lopes.</p>
    </div>
  )
}
