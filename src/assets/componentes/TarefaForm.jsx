import { useState } from 'react';
import '../../App.css'
import * as servicoTarefa from "./services/tarefa.servico";

function TarefaForm() {
    const [nomeTarefa, setNomeTarefa] = useState("")

    return(
        <form onSubmit={
            () => {servicoTarefa.adicionarTarefa(nomeTarefa)}
        } className='tarefa-form'>
            <input onChange={
                (evento) => {setNomeTarefa(evento.target.value)}
            } placeholder='Adicionar tarefa'/>
            <button className='btn-adicionar' >
                Adicionar tarefa
            </button>
        </form>
    )
}
export default TarefaForm;