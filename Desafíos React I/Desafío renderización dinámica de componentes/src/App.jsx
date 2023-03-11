import React, { useState } from 'react';
import ListaColaboradores from './components/ListaColaboradores';
import FiltroColaboradores from './components/FiltroColaboradores';
import AgregarColaborador from "./components/AgregarColaborador";
import { BaseColaboradores } from "./db";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtro, setFiltro] = useState('');

  const handleFiltroCambiar = nuevoFiltro => {
    setFiltro(nuevoFiltro);
  };

  const handleAgregarColaborador = (nombre, correo) => {
    const nuevoColaborador = {
      id: Math.max(...colaboradores.map(c => c.id)) + 1,
      nombre,
      correo,
    };
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const colaboradoresFiltrados = colaboradores.filter(colaborador =>
    colaborador.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (

    <div className="container">
      <h1 className="my-3">Lista de colaboradores</h1>
      <FiltroColaboradores filtro={filtro} onFiltroCambiar={handleFiltroCambiar} />
      <br />
      <ListaColaboradores colaboradores={colaboradoresFiltrados} />
      <AgregarColaborador onAgregar={handleAgregarColaborador} />
    </div>
  );
};

export default App;