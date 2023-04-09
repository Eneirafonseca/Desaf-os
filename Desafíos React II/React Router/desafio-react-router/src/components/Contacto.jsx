import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Contacto = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h1>Contacto</h1>
            <p>Rellena tus datos y nos pondremos en contacto con usted.</p>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu nombre" required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="apellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu apellido" required />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email" required />
                </Form.Group>
                <Form.Group controlId="mensaje">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    );
};

export default Contacto;
