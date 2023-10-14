import Button from "react-bootstrap/Button";

const AlertError = ({ error, closeError }) => {
  console.log(error);
  return (
    <div className={`alert ${error ? "show" : ""}`}>
      <div className="content">
        <div>
          <h1 className="icon-warning">🚫🚫🚫🚫🚫🚫</h1>
        </div>
        <h2>Completa todos los campos</h2>
        <Button className="w-25 " variant="primary" onClick={closeError}>
          Cerrar
        </Button>
      </div>
    </div>
  );
};

export default AlertError;
