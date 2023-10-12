import "bootstrap/dist/css/bootstrap.min.css";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import { BaseColaboradores } from "./data/object";
import { useState } from "react";
import Buscador from "./components/Buscador";

function App() {
  const [collaborators, setCollaborators] = useState(BaseColaboradores);
  return (
    <main>
      <div>
        <h1>Lista de Colaboradores</h1>
        <Buscador setCollaborators={setCollaborators} BaseColaboradores={BaseColaboradores}></Buscador>
        <Listado colaboradores={collaborators} BaseColaboradores={BaseColaboradores} setCollaborators={setCollaborators}></Listado>
      </div>
      <Formulario colaboradores={collaborators} setCollaborators={setCollaborators} BaseColaboradores={BaseColaboradores}></Formulario>
    </main>
  );
}

export default App;
