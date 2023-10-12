const AlertError = ({ error, closeError }) => {
  console.log(error);
  return (
    <div className={`alert ${error ? "show" : ""}`}>
      <div className="content">
        <h2>Completa todos los campos.</h2>
        <button onClick={closeError}>Cerrar</button>
      </div>
    </div>
  );
};

export default AlertError;
