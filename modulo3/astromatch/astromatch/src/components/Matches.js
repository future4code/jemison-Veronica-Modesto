import React from "react";

export function Matches ({matches}) {
    const renderMatches = matches.map ((match) => (
        <p key={match.id}>
           {match.name} - {match.age} 
        </p>
    ) )
    return(
        <div>
          <h2>Lista de matches</h2> 
          <div> {matches.length ? renderMatches : "Você ainda não tem matches :("} </div>
        </div>
    )
}
