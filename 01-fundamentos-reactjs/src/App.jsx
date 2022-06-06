// JSX = JavaScript + XML
import { Header } from './components/Header'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

// importar o arquivo CSS com os atributos
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Jonatas Fernandes"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem similique earum exercitationem amet facilis expedita, dolore officia repudiandae fugiat magnam nam eum adipisci, illum mollitia atque ex libero! Magnam."
          />
          <Post 
          author="Diego Fernandes"
          content="Um post muito legal."
          />
        </main>
      </div>
    </div>
  )
}
