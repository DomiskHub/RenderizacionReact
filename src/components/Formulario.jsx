import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "./Alert";
import AlertError from "./AlertError";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
    if (nombre === "") {
      setError(true);
      return;
    }
    if (email === "") {
      setError(true);
      return;
    }
    if (edad === "") {
      setError(true);
      return;
    }
    if (cargo === "") {
      setError(true);
      return;
    }
    if (telefono === "") {
      setError(true);
      return;
    }

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
  const closeShow = () => {
    setShow(false);
  };
  const inputName = (e) => {
    setNombre(e.target.value);
  };
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputEdad = (e) => {
    setEdad(e.target.value);
  };
  const inputCargo = (e) => {
    setCargo(e.target.value);
  };
  const inputTelefono = (e) => {
    setTelefono(e.target.value);
  };
  return (
    <>
      <Form className="form" onSubmit={handleSubmit}>
        <h3>Agregar colaborador</h3>
        <InputGroup className="mb-1">
          <Form.Control type="text" placeholder="Nombre del colaborador" value={nombre} onChange={inputName} />
        </InputGroup>
        <InputGroup className="mb-1">
          <Form.Control type="email" placeholder="Email del colaborador" value={email} onChange={inputEmail} />
        </InputGroup>
        <InputGroup className="mb-1">
          <Form.Control type="number" placeholder="Edad del colaborador" value={edad} onChange={inputEdad} />
        </InputGroup>
        <InputGroup className="mb-1">
          <Form.Control type="text" placeholder="Cargo del colaborador" value={cargo} onChange={inputCargo} />
        </InputGroup>
        <InputGroup className="mb-1">
          <Form.Control type="tel" placeholder="Teléfono del colaborador" value={telefono} onChange={inputTelefono} />
        </InputGroup>
        <Button className="w-100" type="submit" variant="primary">
          Agregar Colaborador
        </Button>
      </Form>
      <Alert nombre={nombre} show={show} closeShow={closeShow}></Alert>
      <AlertError error={error} closeError={closeError}></AlertError>
    </>
  );
};

export default Formulario;
