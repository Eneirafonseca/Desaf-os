import React from 'react';

const Colaborador = ({ nombre, correo }) => {

  return (
    
    <tr>
      <td>{nombre}</td>
      <td>{correo}</td>
    </tr>
  );
};

export default Colaborador;