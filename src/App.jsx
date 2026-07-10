import Sidebar from './assets/componentes/Sidebar'
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <header>
        <h1>Tarefas App</h1>
      </header>
      <div>
        <Sidebar/>
      </div>
    </div>
  )
}

export default App
