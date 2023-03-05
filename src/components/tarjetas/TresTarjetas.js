import React from "react";
import Tarjeta from "./Tarjeta";
import Imagen1 from "./img1.jpg";
import Imagen2 from "./img2.jpg";
import Imagen3 from "./img3.jpg";

const TresTarjetas = () => {
  return (
    <div className="tres-tarjetas">
      <Tarjeta
        imagen= {Imagen1} 
        titulo="Tarjeta 1"
        descripcion="Descripción de la tarjeta 1"
      />
      <Tarjeta
        imagen={Imagen2}
        titulo="Tarjeta 2"
        descripcion="Descripción de la tarjeta 2"
      />
      <Tarjeta
        imagen={Imagen3}
        titulo="Tarjeta 3"
        descripcion="Descripción de la tarjeta 3"
      />
    </div>
  );
};

export default TresTarjetas;
