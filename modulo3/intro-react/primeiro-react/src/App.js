import fotoveve from './fotoveve.jpg';
import './App.css';

function App() {
const clicarNoBotao = () =>{
  alert('Boa noite!')
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem vindo ao site da Veronica!</h1>
        <img src={fotoveve} className="foto-veve" alt="logo" />
        <p>
          Sinta-se a vontade 
        </p>
        <button onClick={clicarNoBotao}>Clique aqui!</button>
       
      </header>
    </div>
  );
}

export default App;
