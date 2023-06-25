import React, { useState } from 'react'
import styles from './Galeria.module.scss'
//json
import fotos from './fotos.json'
//componentes
import Tags from '../Tags'
import Cards from './Cards'

export default function Galeria() {

  const [itens, setItens] = useState(fotos)
  const tags = [... new Set(fotos.map((valor) => valor.tag))] // new Set fez com que o itens do array na se repetisse

  const filtraFotos = (tag) => {
    const fotosFiltradas = fotos.filter((foto) => {
      return foto.tag === tag;
    })

    setItens(fotosFiltradas)
  }

  console.log(tags)

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens}/>
      <Cards itens={itens} styles={styles} />
    </section>
  )
}
