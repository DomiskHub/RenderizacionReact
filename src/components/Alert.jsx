const Alert = ({ nombre, show, close }) => {
  return (
    <div className={`alert ${show ? "show" : ""}`}>
      <div className="content">
        <h2>{nombre} ha sido agregado exitosamente</h2>
        <div className="button-row">
          <button onClick={close}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
