import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
// author => busque no props[] a propriedade author, e assim posso acessar o que estiver dentro dele sem precisar colocar props.author.name...
export function Post({ author, publisheAt }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">
          {publisheAt.toString()}
        </time>
      </header>

      <div className={styles.content}>

      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
       <Comment />
       <Comment />
       <Comment />
      </div>
    </article>
  )
}