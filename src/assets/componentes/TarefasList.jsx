import '../../App.css'

function TarefasList(){
    let listaTarefas = ["comer", "dormir"]
    return(
        <ul>
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