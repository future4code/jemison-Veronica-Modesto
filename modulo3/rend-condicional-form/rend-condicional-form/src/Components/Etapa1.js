import React, { useState } from "react"
import Etapa2 from "./Etapa2"
import Etapa3 from "./Etapa3"

function Etapa1() {
    const [escolaridade, setEscolaridade] = useState("")

    function handleEscolaridade (event){
        setEscolaridade(event.target.value)  
        console.log(event)
    }
    function proximaEtapa(){
        switch(escolaridade){
            case "Ensino Médio" : 
                return <Etapa2 />
            case "Ensino Superior" : 
                return <Etapa3 />
            default:
                return <></>
        }
    }

    return(
        <div>
           <h1>Etapa 1 - Dados Gerais</h1>
           <div>  

                <label for="escolaridade">Qual o grau de escolaridade?</label>

                <br/>

                <select 
                    value={escolaridade} 
                    onChange={handleEscolaridade} 
                    name="escolaridade" 
                    id="escolaridade"
                >
                    <option value="Ensino Médio">Ensino Médio</option>
                    <option value="Ensino Superior">Ensino Superior</option>
                    
                </select>
                
            </div>
            {proximaEtapa()}
        </div>
    )

}

export default Etapa1