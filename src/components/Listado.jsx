import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Listado({ colaboradores, BaseColaboradores, setCollaborators }) {
  const eliminar = (colaborador) => {
    setCollaborators((collaborators) => {
      BaseColaboradores = BaseColaboradores.filter((collaborator) => colaborador.id !== collaborator.id);
      return collaborators.filter((collaborator) => colaborador.id !== collaborator.id);
    });
  };
  return (
    <Table responsive className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador) => (
          <tr key={colaborador.id}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>
              <Button variant="danger" onClick={() => eliminar(colaborador)}>
                X
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Listado;
