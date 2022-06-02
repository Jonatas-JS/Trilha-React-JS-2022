// Importando a bilioteca "geral" do React, nela contem as remificações, web, mobile, para TV etc.
import React from 'react'
//importando as ferramentas DOM para interagir com a página Web
import ReactDOM from 'react-dom/client'
//importando o documento .App.jsx
import { App } from './App'

//nas ferramentas ReactDOM tem uma função 'createRoot'(indica onde ela está no arquivo HTML)
// e usa a função dentro do create, 'render', para renderizar (mostrar em tela).
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* O que for colocado aqui será mostrado do HTML */}
    <App />
  </React.StrictMode>
)
