import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import styles from './paginaInical.module.scss'
import Banner from '../../componentes/Banner';
import Rodape from "../../componentes/Rodape";
import Galeria from "../../componentes/Galeria";

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>

            <div className={styles.galeria}>
                <Galeria />
            </div>

            <Rodape />
        </>
    )
}