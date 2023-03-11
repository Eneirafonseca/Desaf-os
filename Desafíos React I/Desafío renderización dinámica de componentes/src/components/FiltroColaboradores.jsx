import React from 'react';
import { Form } from 'react-bootstrap';

const FiltroColaboradores = ({ filtro, onFiltroCambiar }) => {
  const handleChange = e => {
    onFiltroCambiar(e.target.value);
  };

  return (
    <Form.Group controlId="formFiltro">
      <Form.Control
        type="text"
        placeholder="Buscar colaboradores por nombre"
        value={filtro}
        onChange={handleChange}
      />
    </Form.Group>
  );
};

export default FiltroColaboradores;
