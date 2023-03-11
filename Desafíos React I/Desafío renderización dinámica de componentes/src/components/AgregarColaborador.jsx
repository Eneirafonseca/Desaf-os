import React, { useState } from 'react';

const AgregarColaborador = ({ onAgregar }) => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    const handleNombreChange = e => {
        setNombre(e.target.value);
    };

    const handleCorreoChange = e => {
        setCorreo(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onAgregar(nombre, correo);
        setNombre('');
        setCorreo('');
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={handleNombreChange}
                />
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Correo electrónico"
                    value={correo}
                    onChange={handleCorreoChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Agregar
            </button>
        </form>
    );
};

export default AgregarColaborador;