import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Estilos Globais e Tokens
import './styles/globals.css'

// Componente Raiz
import App from './App'

/**
 * Ponto de entrada da aplicação React 19.
 * Monta a árvore de componentes com StrictMode ativado.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
