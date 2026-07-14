import '../App.css'

import Botao from './Botao';

function Sidebar() {
  return (
    <nav className="nav-bar">
        <Botao nomeDoBotao="Todas" iconeBotao="CheckBoxRounded" rota="/"></Botao>
        <Botao nomeDoBotao="Completas" iconeBotao="Check" rota="/completas"></Botao>
        <Botao nomeDoBotao="Favoritas" iconeBotao="Star" rota="/favoritas"></Botao>
    </nav>
  );
}
export default Sidebar;
