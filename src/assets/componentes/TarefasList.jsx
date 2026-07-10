import { RadioButtonChecked, Star, Delete } from '@mui/icons-material'
import '../../App.css'

function TarefasList(){
    let listaTarefas = ["comer", "dormir"]

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