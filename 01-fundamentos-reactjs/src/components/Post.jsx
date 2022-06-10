// importo a biblioteca para trabalhar com data, 
import { format, formatDistanceToNow } from 'date-fns'
// especifico que usarei os padrões pt-BR
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
// author => busque no props[] a propriedade author, e assim posso acessar o que estiver dentro dele sem precisar colocar props.author.name...
export function Post({ author, publisheAt, content }) {
  // (onde está a data á ser tratada, "formatoDia 'string qualquer' formatoMês 'string qualquer' formatoHora:formatoMinuto'string qualquer'" )
  const publishedDateFormatted = format(publisheAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR, // ptBR que foi definido no início
  })
  // formatDistanceToNow => ferramenta que calcula a distâcia entre a data informada e a data atual.
  const publishedDateRelativeToNow = formatDistanceToNow(publisheAt, {
    locale: ptBR, // linguagem em português-brasil
    addSuffix: true, // acresenta o "há" cerca de 1h
  })

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

        {/* publisheAt.toISOString() => retorna para o dateTime a data no formato "2022-05-10T23:00:00.000Z" */}
        <time title={publishedDateFormatted} dateTime={publisheAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
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