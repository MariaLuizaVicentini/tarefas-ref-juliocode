import { Star, Check, CheckBoxRounded } from '@mui/icons-material'

import { Link } from 'react-router-dom';

import "../App.css"


function Botao({nomeDoBotao, iconeBotao, rota}){
    let icone;
    
    if(iconeBotao == "CheckBoxRounded"){
        icone = <CheckBoxRounded/>
    } else if (iconeBotao == "Check") {
        icone = <Check/>
    } else  if (iconeBotao == "Star"){
        icone = <Star/>
    } else {
        console.error("Icone nao encontrado: ", iconeBotao)
        icone = null
    }


    return (
        <button className="btn-principal">
            <Link className="link-btn" to={rota}>
                {icone}
                {nomeDoBotao}
            </Link>
        </button>
    )
}

export default Botao