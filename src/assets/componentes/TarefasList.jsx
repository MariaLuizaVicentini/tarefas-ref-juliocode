import { RadioButtonUnchecked, RadioButtonChecked, Star, Delete, StarBorderOutlined } from '@mui/icons-material'
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
                            <section onClick={
                                    () => {
                                        servicoTarefa.inverterCheck(tarefaAtual.id, setTarefas)
                                    }
                                } className='texto-tarefa'>
                                    {
                                        tarefaAtual.completa == true ? 
                                        <RadioButtonChecked/>
                                        :
                                        <RadioButtonUnchecked/>
                                    }
                                <span> 
                                    {tarefaAtual.titulo} 
                                </span>
                            </section>
                            <section className='acoes-tarefa'>
                                <div onClick={
                                    () => {
                                        servicoTarefa.inverterFavorito(tarefaAtual.id, setTarefas)
                                    }
                                }> 
                                    {
                                        tarefaAtual.favorita == true ?
                                        <Star/>
                                        :
                                        <StarBorderOutlined/>
                                    }
                                </div>
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