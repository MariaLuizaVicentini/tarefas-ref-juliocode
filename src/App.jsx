import Sidebar from './assets/componentes/Sidebar'
import Tarefas from './assets/componentes/Tarefas'
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <header>
        <h1>Tarefas App</h1>
      </header>
      <div className='container-conteudo'>
        <Sidebar/>
        <section className='conteudo-principal'>
          <Tarefas/>
        </section>
      </div>
    </div>
  )
}

export default App
