import styles from './Avatar.module.css'

/* props => propriedades como parâmetro */
/* desestruturação: pego a propriedade hasBorder, caso não tenha será =true e
 pego a propriedade src(que contem o link)*/
export function Avatar({ hasBorder = true, src }) {
  return (
    <img 
    // SE, nas minhas propriedades(props) contem hasBorder(true), então,
    // receba o className como styles.avatarWidthBorder(com borda), 
    // se não(false), className recebe styles.avatar(sem borda)
    className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    src={src} 
    />
  )
}