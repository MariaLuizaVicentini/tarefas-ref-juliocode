import '../../App.css'
import TarefasList from './TarefasList';
import TarefaForm from './TarefaForm';

function Tarefas() {

    return(
        <div className='tarefas'>
            <TarefaForm/>
            <TarefasList/>
        </div>
    )
}
export default Tarefas;