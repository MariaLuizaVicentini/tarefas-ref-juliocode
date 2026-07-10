import { useState } from 'react';
import '../../App.css'

function TarefaForm() {
    const [nomeTarefa, setNomeTarefa] = useState("")

    function criaTarefaLocalStorage(){
        let tarefasAntigas = JSON.parse(localStorage.getItem("tarefas")) || []
        const tarefasNovas = [...tarefasAntigas, nomeTarefa]
        const tarefasNovasString = JSON.stringify(tarefasNovas)
        localStorage.setItem("tarefas", tarefasNovasString)
    }

    return(
        <form onSubmit={criaTarefaLocalStorage} className='tarefa-form' action="">
            <input onChange={
                (evento) => {
                    setNomeTarefa(evento.target.value)
                }
            } type="text" placeholder='Adicionar tarefa'/>
            <button className='btn-adicionar' >
                Adicionar tarefa
            </button>
        </form>
    )
}
export default TarefaForm;