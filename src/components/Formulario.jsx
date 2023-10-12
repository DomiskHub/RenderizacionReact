import React, { useState } from "react";
import Alert from "./Alert";
import AlertError from "./AlertError";

const Formulario = ({ colaboradores, setCollaborators, BaseColaboradores }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.length === 0) {
      setError(true);
      return;
    }
    console.log("x");
    const id = Date.now();
    const newCollaborator = { id, nombre, correo: email, edad, cargo, telefono };
    setCollaborators([...colaboradores, newCollaborator]);
    BaseColaboradores.push(newCollaborator);
    setNombre("");
    setEmail("");
    setEdad("");
    setCargo("");
    setTelefono("");
    setError("");
    setShow(true);
  };
  const closeError = () => {
    setError(false);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingresa tu Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="email" placeholder="Ingresa tu email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="number" placeholder="Ingresa tu edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
        <input type="text" placeholder="Ingresa tu cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} />
        <input type="tel" placeholder="Ingresa tu telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        <button type="submit">Agregar Colaborador</button>
      </form>
      <Alert nombre={nombre} show={show} setShow={setShow}></Alert>
      <AlertError error={error} closeError={closeError}></AlertError>
    </>
  );
};

export default Formulario;
