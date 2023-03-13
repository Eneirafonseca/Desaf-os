import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function Filtro({ filter, onFilterChange }) {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Control type="text" name="name" value={filter.name} placeholder="Búsqueda por nombre" onChange={onFilterChange} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control type="text" name="species" value={filter.species} placeholder="Búsquea por especie" onChange={onFilterChange} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Select name="status" value={filter.status} onChange={onFilterChange}>
                        <option value="">Filtrar por estado</option>
                        <option value="Alive">Vivo</option>
                        <option value="Dead">Muerto</option>
                        <option value="unknown">Desconocido</option>
                    </Form.Select>
                </Form.Group>
            </Row>
        </Form>
    );
}

export default Filtro;
