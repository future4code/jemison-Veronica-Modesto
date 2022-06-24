import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import VeveImg from './img/veveimg.jpg'
import EmailLogo from './img/emaillogo.png'
import Endereco from './img/endereco.png'
import LogoDesign from './img/design.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={VeveImg}
          nome="Veronica" 
          descricao="Oi, eu sou a Veronica. Sou designer mas quero muito ser uma Dev! Abaixo estão algumas informações minhas:"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno 
          imagem={EmailLogo}
          nome="E-mail" 
          descricao="vevedm@gmail.com"
        />

      <CardPequeno 
          imagem={Endereco}
          nome="Endereço" 
          descricao="Rua Dep. Alfredo Antonio - Iúna - ES"
        />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={LogoDesign} 
          nome="Formação:" 
          descricao="Formada em Publicidade e Propaganda, trabalho com crição de arte publicitária há 5 anos." 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
