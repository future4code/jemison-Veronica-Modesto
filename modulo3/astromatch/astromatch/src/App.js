import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Matches } from "./components/Matches";
import axios from 'axios';
import { Title,DivPai } from './styled';

function App() {
  const [displayMatches, setDisplayMatches] = useState(false)
  const [profile, setProfile] = useState({})
  const [matches, setMatches] = useState([])
  

  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/veronica/"

  function getProfile(){
    axios.get(url + "person")
      .then((response) => {
        setProfile(response.data.profile)
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }

  function choosePerson(id, choice){
    const body = {id, choice}
    axios.post(url + "choose-person",body)
      .then((response) => {
        if (response.data.isMatch) {
          alert("Parabéns, você deu Match!")
        }
        getProfile()
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }

  function getMatches(){
    axios.get(url + "matches")
      .then((response) => {
        setMatches(response.data.matches)
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }
    
  useEffect(() => {getProfile()},[])
  
  useEffect(() => {
    if (displayMatches){
      getMatches()
    }
  },[displayMatches])

  function clear(){
    axios.put(url + "clear",{headers: {
      'Content-Type': 'application/json'
    }})
      .then((response) => {
        setMatches([]);
        alert("Lista resetada.")
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }

  function handleDisplayMatches() {
    setDisplayMatches(!displayMatches)
  }

  return (
    <DivPai>
      <Title> Astromatch </Title>
      <button onClick={clear}> Reset </button>
      <button onClick={handleDisplayMatches}> 
        {displayMatches ? "Voltar" : "Ver matches"}
      </button>
      {displayMatches ? (
        <Matches matches={matches}/>
      ) : (
        <Card choosePerson={choosePerson} profile={profile}/>
      )}

    </DivPai>
  );
}

export default App;
