import Button from "react-bootstrap/Button";
const Alert = ({ nombre, show, closeShow }) => {
  return (
    <div className={`alert ${show ? "show" : ""}`}>
      <div className="content">
        <div>
          <h1 className="icon-warning">✅✅✅✅✅✅</h1>
        </div>
        <h2>{nombre} ha sido agregado exitosamente</h2>
        <Button className="w-25" variant="primary" onClick={closeShow}>
          Cerrar
        </Button>
      </div>
    </div>
  );
};

export default Alert;
