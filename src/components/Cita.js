import React from "react";

function Cita({ cita, id, deleteCita }) {

  const removeCita = () => {
    deleteCita(id);
  }

  return (
    <div className="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.propietario}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p> 
      <p>Sintomas: <span>{cita.sintomas}</span></p>
      <button 
        className="button eliminar u-full-width"
        onClick={removeCita}
      >
          Eliminar &times;
      </button>
    </div>
  )
}

export default Cita;