export function pegarTarefas(){
    return JSON.parse(localStorage.getItem("tarefas")) || []
}

export function adicionarTarefa(tarefa){
    const tarefasAntigas = pegarTarefas();
    const tarefasNovas = [...tarefasAntigas, tarefa]
    const tarefasNovasString = JSON.stringify(tarefasNovas)
    localStorage.setItem("tarefas", tarefasNovasString)

}
