import React, { useState } from 'react';

function AlternarTexto() {
  const [texto, setTexto] = useState('Texto 1');

  const alternarTexto = () => {
    setTexto((prevTexto) => (prevTexto === 'Texto 1' ? 'Texto 2' : 'Texto 1'));
  };

  return (
    <div>
      <p>{texto}</p>
      <button onClick={alternarTexto}>Alternar Texto</button>
    </div>
  );
};

export default AlternarTexto;