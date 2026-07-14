import { Star, Check, CheckBoxRounded } from '@mui/icons-material'

import "../App.css"


function Botao({nomeDoBotao, iconeBotao}){
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
            <section>
                {icone}
                {nomeDoBotao}
            </section>
        </button>
    )
}

export default Botao