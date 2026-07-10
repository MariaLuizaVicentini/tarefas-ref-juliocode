import '../../App.css'

function TarefasList(){
    let listaTarefas = ["comer", "dormir"]
    return(
        <ul className='tarefas-lista'>
            {
                listaTarefas.map((tarefaAtual) => {
                    return(
                        <li> {tarefaAtual} </li>
                    )
                })
            }
        </ul>
    )

}
export default TarefasList;