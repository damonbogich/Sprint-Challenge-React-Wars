import React, {useState, useEffect} from "react";
import Character from "./Character";
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";
import styled from "styled-components"


export const StyledDiv = styled.div`
display: flex;
flex-direction: column;

margin: 5%;
padding-bottom: 5%;`;

export default function CharacterGrid() {
    const [characterData, setCharacterData] = useState([])
    // useState() => [state variable, setter function]
    // useState("hello") => ["hello", setter function]
    // setNasaDate("goodbye") => nasaDate == "goodbye"

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
            
                
                    
                
         
            

    