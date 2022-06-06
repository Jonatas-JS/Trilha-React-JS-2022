import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'
// USAR ELEMENTOS JS COM LETRA MAIÚSCULA E HTML EM MINÚSCULA
// styles.header => criei uma variável styles que contém as propriedades existentes no arquivo Header.module.css
// assim, quando informo styles.header significa que na minha variável styles eu tenho uma propriedade(class) que
//  vai ter os atributos que dei a ele... color: black; height: 80px; max-whidth: 100px;

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  )
}