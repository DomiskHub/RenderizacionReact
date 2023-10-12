import React from "react";

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
  return <input type="text" placeholder="Busca un colaborador" onChange={filtrar} />;
};

export default Buscador;
