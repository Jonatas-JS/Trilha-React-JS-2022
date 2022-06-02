// props: { author: "", content: "" }
export function Post(props) {
  console.log(props)
  //para acessar uma variável do JS no HTML ela tem que estar entr {  }
  return (
    // NÃO POSSO TER UMA TAG ABAIXO DA OUTRA SEM TER UMA EM VOLTA DELAS 
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  )
}