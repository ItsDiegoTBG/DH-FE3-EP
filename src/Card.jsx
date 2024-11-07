//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React from 'react';

const Card = ({ nombre, descripcion }) => {
  return (
    <div style={styles.card}>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    marginTop: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  },
};

export default Card;