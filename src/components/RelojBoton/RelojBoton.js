import React, { useState } from 'react';
import './style.css';

// Usando hooks, vamos a declarar un contador, y por medio de un boton y un evento de click, vamos a ir mostrando por pantalla la cntidad de clicks que hemos hecho y adicionalmente vamos a mostrar la fecha.

const Component = () => {
  const [cont, setCont] = useState(1);
  const [fecha, setFecha] = useState(Date().toDateString());

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {new Date().toDateString()}
      <button onClick={() => setCont(cont + 1)}> click </button>
      <h3>{cont}</h3>
      {new Date().toDateString()}
    </div>
  );
};
export default Component;
