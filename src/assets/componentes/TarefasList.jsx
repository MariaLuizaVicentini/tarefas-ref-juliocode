import { RadioButtonChecked, Star, Delete } from '@mui/icons-material'
import '../../App.css'
import * as servicoTarefa from './services/tarefa.servico'
import { useEffect, useState } from 'react'

function TarefasList(){
    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        setTarefas(servicoTarefa.pegarTarefas())
    }, [])

    return(
        <ul className='tarefas-lista'>
            {
                tarefas.map((tarefaAtual) => {
                    return(
                        <li className='tarefa-unica'> 
                            <section className='texto-tarefa'>
                                <RadioButtonChecked/>
                                <span> 
                                {tarefaAtual} 
                                </span>
                            </section>
                            <section className='acoes-tarefa'>
                                <div> <Star/> </div>
                                <div> <Delete/> </div>
                            </section>
                        </li>
                    )
                })
            }
        </ul>
    )

}
export default TarefasList;