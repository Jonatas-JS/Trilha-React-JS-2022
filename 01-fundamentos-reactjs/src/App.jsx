// JSX = JavaScript + XML
import { Header } from './components/Header'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

// importar o arquivo CSS com os atributos
import './global.css'

// author: { avatar_url: "", name: "", role: "" }
// publisheAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Jonatas-JS.png',
      name: 'Jônatas Fernandes',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', conten: 'jane.design/doctorcare' }
    ],
    publisheAt: new Date('2022-05-10 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jhalys.png',
      name: 'Juliana Marques',
      role: 'Quality Assurance'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', conten: 'jane.design/doctorcare' }
    ],
    publisheAt: new Date('2022-05-03 13:31:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publisheAt={post.publisheAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
