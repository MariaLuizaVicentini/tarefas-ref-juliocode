export function pegarTarefas(){
    return JSON.parse(localStorage.getItem("tarefas")) || []
}

export function adicionarTarefa(tarefa){
    const tarefasAntigas = pegarTarefas()
    const tarefasNovas = [...tarefasAntigas, tarefa]
    const tarefasNovasString = JSON.stringify(tarefasNovas)
    localStorage.setItem("tarefas", tarefasNovasString)

}

export function inverterCheck(id){
    const tarefasAntigas = pegarTarefas()
    const tarefasInvertidas = tarefasAntigas.map(
        (tarefaAtual) => {
            // se tem mesmo id, modifica de true p false ou false pra true
            if(tarefaAtual.id == id){
                tarefaAtual.completa = !tarefaAtual.completa;
                return tarefaAtual;
            }
            else {
                // mantem a tarefa como estava se n tem mesmo id
                return tarefaAtual;
            }
        }
    )
    const tarefasAtualizadasString = JSON.stringify(tarefasInvertidas);
    localStorage.setItem("tarefas", tarefasAtualizadasString);

}