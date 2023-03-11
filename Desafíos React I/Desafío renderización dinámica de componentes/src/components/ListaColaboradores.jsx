import React from 'react';
import { Table } from 'react-bootstrap';
import Colaborador from './Colaborador';

const ListaColaboradores = ({ colaboradores }) => {

    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo electrónico</th>
                </tr>
            </thead>
            <tbody>
                {colaboradores.map(colaborador => (
                    <Colaborador
                        key={colaborador.id}
                        nombre={colaborador.nombre}
                        correo={colaborador.correo}
                    />
                ))}
            </tbody>
        </Table>
    );
};

export default ListaColaboradores;


