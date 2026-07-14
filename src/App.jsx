import Sidebar from "../src/componentes/Sidebar";
import Tarefas from "../src/componentes/Tarefas";

import "./App.css";

import { useState } from "react";
import { CheckCircle } from "@mui/icons-material";

function App() {

  return (
    <>
      <header>
        <h1>Tarefas App</h1>
        <CheckCircle></CheckCircle>
      </header>
      <div className="container-conteudo">
        <Sidebar />
        <section className="conteudo-principal">
          <Tarefas />
        </section>
      </div>
    </>
  );
}

export default App;
