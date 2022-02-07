import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import BaraNavegacion from './components/BaraNavegacion';
import { MenuElements } from './data/MenuElements';

import './style.css';

export default function App() {
  return (
    <Router>
      <BaraNavegacion />
      <h1>Desarrollo de Interfaces: Examen React.js </h1>
      <p>
        Resuelve los ejercicios propuestos en los distintos apartados de la
        barra de navegación. Para ello, haz un fork de este repositorio desde tu
        cuenta de Github y súbelo a la tarea de examen. El repositorio debe
        tener el nombre examen-react-Nombre-Apellido1, donde nombre y apellido
        son los tuyos.
      </p>
      {MenuElements.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}
