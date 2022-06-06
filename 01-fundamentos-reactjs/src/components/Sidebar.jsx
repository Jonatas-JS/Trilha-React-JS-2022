import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.siderbar}>
      <img
      className={styles.cover}  
      src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
    
    <div className={styles.profile}>
      <img 
      className={styles.avatar}
      src="https://github.com/Jonatas-JS.png"
      />

      <strong>Jônatas Fernandes</strong>
      <span>Web Developer</span>
    </div>

    <footer>
      <a href="#">
        <PencilLine size={20} />
        Editar seu Perfil
      </a>
    </footer>
    </aside>
  )
}