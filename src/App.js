import React, { useState } from 'react';
import './style.css';

// Usando hooks, vamos a declarar un contador, y por medio de un boton y un evento de click, vamos a ir mostrando por pantalla la cntidad de clicks que hemos hecho y adicionalmente vamos a mostrar la fecha.

const Component = () => {
  const [cont, setCont] = useState(1);
  const [fecha, setFecha] = useState(new Date().toString());

  const sumarContador = function(cont) {
    setCont(cont + 1);
    return setFecha(new Date().toString());
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>{new Date().toString()}</p>
      <button onClick={() => sumarContador(cont)}> click</button>
      <h3>{cont}</h3>
      <h3>{fecha}</h3>
    </div>
  );
};
export default Component;
