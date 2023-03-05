import React from "react";

const Tarjeta = (props) => {
  return (
    <div className="tarjeta">
      <img src={props.imagen} alt={props.titulo} />
      <h3>{props.titulo}</h3>
      <p>{props.descripcion}</p>
    </div>
  );
};

export default Tarjeta;
