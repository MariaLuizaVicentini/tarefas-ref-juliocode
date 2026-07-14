import '../App.css'

import Botao from './Botao';

function Sidebar() {
  return (
    <nav className="nav-bar">
        <Botao nomeDoBotao="Todas" iconeBotao="CheckBoxRounded"></Botao>
        <Botao nomeDoBotao="Completas" iconeBotao="Check"></Botao>
        <Botao nomeDoBotao="Favoritas" iconeBotao="Star"></Botao>
    </nav>
  );
}
export default Sidebar;
