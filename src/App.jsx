import Sidebar from './assets/componentes/Sidebar'
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
          <h1> Tarefas </h1>
        </section>
      </div>
    </div>
  )
}

export default App
