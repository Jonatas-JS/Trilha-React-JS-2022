import React from 'react' // pacote responsável pelo COR (coração) do React
import ReactDOM from 'react-dom/client' //integrando o React para o ambiente Web do React
import { App } from './App'
// Toda a aplicação é construída apartir do JS

ReactDOM.createRoot(document.getElementById('root')).render( //root é o elemento raiz do meu HTML
  <React.StrictMode>
    <App /> {/*mostrar em tela(root) tudo que estiver em App */}
  </React.StrictMode>
)
