import React from "react";
import { Img, Likes } from "../styled";

export function Card ({profile, choosePerson}) {
    return(
        <div>
            <Img src= {profile.photo} alt= {profile.photoAlt}/> 
            <h3>{profile.name} - {profile.age}</h3>  
            <p> {profile.bio} </p>  
            <Likes onClick={() => choosePerson(profile.id, true)}>❤️</Likes> 
            <Likes onClick={() => choosePerson(profile.id, false)}>❌</Likes>    
        </div>
    )
}

