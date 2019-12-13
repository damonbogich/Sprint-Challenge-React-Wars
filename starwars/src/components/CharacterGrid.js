import React, {useState, useEffect} from "react";
import Character from "./Character";
import axios from "axios";


export default function CharacterGrid() {
    const [characterData, setCharacterData] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            console.log(response)
            setCharacterData(response.data.results);
        })
        .catch(error => {
            console.log("Got an error", error)
        })
    }, [])

    return(
        
    <div>
        
    {characterData.map(attribute => {
      return (
        <Character
        key = {attribute.url}
        name = {attribute.name}
        height = {attribute.height}
        hairColor = {attribute.hair_color}
        mass = {attribute.mass}/>
        )
        })}
        
    </div>
    )

}
            
                
                    
                
         
            

    