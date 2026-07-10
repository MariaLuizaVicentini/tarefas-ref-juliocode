import '../../App.css'

function TarefaForm() {
    return(
        <form className='tarefa-form' action="">
            <input type="text" placeholder='Adicionar tarefa'/>
            <button className='btn-adicionar' >
                Adicionar tarefa
            </button>
        </form>
    )
}
export default TarefaForm;