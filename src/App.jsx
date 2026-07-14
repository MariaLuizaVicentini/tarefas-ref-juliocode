import Sidebar from "../src/componentes/Sidebar";
import Tarefas from "../src/pages/Tarefas";

import "./App.css";

import { useState } from "react";
import { CheckCircle } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <header>
        <h1>Tarefas App</h1>
        <CheckCircle></CheckCircle>
      </header>
      <div className="container-conteudo">
        <Sidebar />
        <div className="conteudo-principal">
          <Routes>
            <Route path="/" element={<Tarefas />}> </Route>
            <Route path="/completas" element={<Tarefas/>}> </Route>
            <Route path="/favoritas" element={<Tarefas/>}> </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
