import { RadioButtonChecked, Star, Delete } from '@mui/icons-material'
import '../../App.css'
import * as servicoTarefa from './services/tarefa.servico'

function TarefasList(){
    let listaTarefas = servicoTarefa.pegarTarefas()

    return(
        <ul className='tarefas-lista'>
            {
                listaTarefas.map((tarefaAtual) => {
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