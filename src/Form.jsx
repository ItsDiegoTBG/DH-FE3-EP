import React, { useState } from 'react';
import Card from './Card';
//Estoy mas acostumbrado en no poner nada en la App principal, sino hacerlo por componentes.
const Form = () => {
  
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState('');
  

  const [personajes, setPersonajes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (nombre.trim().length < 3 || nombre.startsWith(' ') || descripcion.length < 6) {
      setError('Por favor chequea que la información sea correcta');
    } else {
      setError('');
     
      setPersonajes([...personajes, { nombre, descripcion }]);
     
      setNombre('');
      setDescripcion('');
    }
  };

  return (
    <div className="App"> 
   
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre del personaje</label>
          <input 
            type="text" 
            id="nombre" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            placeholder="Pon Aqui su personaje favorito."
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción</label>
          <input 
            type="text" 
            id="descripcion" 
            value={descripcion} 
            onChange={(e) => setDescripcion(e.target.value)} 
            placeholder="Describa su personaje favorito."
          />
        </div>
        <button type="submit">Enviar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      <div className="card-container">
        {personajes.map((personaje, index) => (
          <Card key={index} nombre={personaje.nombre} descripcion={personaje.descripcion} />
        ))}
      </div>
    </div>
  );
};

export default Form;

