import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    
    const goToListaViagem = () => {
    navigate("/viagens/lista")

    return (
        <div>
        <h1>HOME PAGE</h1>
        <button onClick={goToListaViagem}>Lista de Viagens</button>
        <button>Área Administrativa</button>
        </div>
    );
    }
}
export default Home;