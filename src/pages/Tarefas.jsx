import '../App.css'

import TarefasList from '../componentes/TarefasList';
import TarefaForm from '../componentes/TarefaForm';

function Tarefas() {

    return(
        <div className='tarefas'>
            <TarefaForm/>
            <TarefasList/>
        </div>
    )
}
export default Tarefas;