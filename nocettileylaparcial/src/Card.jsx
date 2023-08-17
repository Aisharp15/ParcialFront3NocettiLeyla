import React from 'react';

function Card({datos}) {
  return (
    <div>
      <h2>Tu animal favorito</h2>
      {datos.map((dato, index) => (
        <div key={index} className="card">
          <h3>{dato.nombre}, elegiste a {dato.animal}</h3>
        </div>
      ))}
    </div>
  );
}

export default Card;
