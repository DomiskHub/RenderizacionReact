import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Buscador = ({ setCollaborators, BaseColaboradores }) => {
  const filtrar = (e) => {
    setCollaborators(() => {
      return BaseColaboradores.filter((colaborador) => {
        return (
          colaborador.nombre.toLowerCase().includes(e.target.value.toLowerCase()) ||
          colaborador.correo.toLowerCase().includes(e.target.value.toLowerCase()) ||
          colaborador.edad.includes(e.target.value) ||
          colaborador.cargo.toLowerCase().includes(e.target.value.toLowerCase()) ||
          colaborador.telefono.includes(e.target.value)
        );
      });
    });
  };

  return (
    <InputGroup className="mb-3 w-50">
      <Form.Control placeholder="Busca un colaborador" onChange={filtrar} />
    </InputGroup>
  );
};

export default Buscador;
