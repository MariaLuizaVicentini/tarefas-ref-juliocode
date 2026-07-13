import { useState } from 'react';
import '../../App.css'
import * as servicoTarefa from "./services/tarefa.servico";

function TarefaForm() {
    const [tarefa, setTarefa] = useState({
        titulo: "",
        completa: false,
        favorita: false,
        identificacao: ""
    })

    return(
        <form onSubmit={
            () => {servicoTarefa.adicionarTarefa(tarefa)}
        } className='tarefa-form'>
            <input onChange={
                (evento) => {setTarefa({...tarefa, titulo:evento.target.value})}
            } placeholder='Adicionar tarefa'/>
            <button className='btn-adicionar' >
                Adicionar tarefa
            </button>
        </form>
    )
}
export default TarefaForm;