import React from 'react';
import { Form, Button } from 'react-bootstrap';

class Ejercicio2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="ej2">
        <h2>Ejercicio 2</h2>
        <ul>
          <li>
            Crea un formulario para añadir información sobre libros a una lista.
            Ha de tener los siguientes campos:<b> - 1,25 puntos</b>
            <ul>
              <li>Título</li>
              <li>Autor</li>
              <li>Fecha de publicación (selector de fecha) </li>
              <li>Número de paginas (input numérico)</li>
              <li>Portada (URL de imagen)</li>
              <li>Idioma </li>
            </ul>
            Los elementos añadidos se irán introduciendo dentro de un Container
            de React-Bootstrap
            <li>
              Crea un componente <i>Libro</i> para mostar los elementos que
              vayas añadiendo. El componente ha de implementar{' '}
              <a href="https://react-bootstrap.github.io/components/cards/">
                Card
              </a>{' '}
              de React-Bootstrap y mostrar todos los campos añadidos
              <b> - 1,75 puntos</b>
            </li>
          </li>
        </ul>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Titulo</Form.Label>
            <Form.Control type="text" placeholder="Introduzca titulo" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Autor</Form.Label>
            <Form.Control type="text" placeholder="Introduzca autor" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fecha de publicación</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Número de paginas</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Portada (URL de imagen)</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://example.com"
              pattern="https://.*"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Idioma</Form.Label>
            <Form.Control type="text" placeholder="Introduzca idioma" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Ejercicio2;
