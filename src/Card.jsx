//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React from 'react';

const Card = ({ nombre, descripcion }) => {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
    </div>
  );
};


export default Card;