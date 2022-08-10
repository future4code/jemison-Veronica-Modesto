import React from 'react';
import { useNavigate } from 'react-router-dom';

function Viagens() {
    const navigate = useNavigate()


    return (
      <div>
        <h1>Lista de Viagens</h1>
        <button >Voltar</button>
        <button >Inscreva-se</button>
      </div>
    );
  }  

  export default Viagens;


